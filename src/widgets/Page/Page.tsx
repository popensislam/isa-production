import cls from './Page.module.scss';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string,
  children: ReactNode,
  onScrollEnd?: () => void
}

export const Page = memo(({ children, className, onScrollEnd }: PageProps) => {

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

  useInitEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [ className ])}
      onScroll={onScroll}
    >
      {children}

      {onScrollEnd ? (
        <div className={cls.trigger} ref={(ref: HTMLDivElement) => triggerRef.current = ref}></div>
      ) : null}
    </section>
  );
});
