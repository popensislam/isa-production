import cls from './Page.module.scss';
import { MutableRefObject, ReactNode, memo, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

interface PageProps {
  className?: string,
  children: ReactNode,
  onScrollEnd?: () => void
}

export const Page = memo(({ children, className, onScrollEnd }: PageProps) => {

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLElement>;

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [ className ])}>
      {children}
      <div ref={(ref: HTMLDivElement) => triggerRef.current = ref}></div>
    </section>
  );
});
