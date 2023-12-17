import { useInitEffect } from './useInitEffect';
import { MutableRefObject } from 'react';

interface UseInfiniteScrollProps {
  callback?: () => void,
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {

  const { wrapperRef, callback, triggerRef } = props;

  useInitEffect(() => {
    if (!callback) return;

    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([ entry ]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      if (observer) {
        observer.unobserve(triggerElement);
      }
    };
  }, [ callback, triggerRef, wrapperRef ]);
};
