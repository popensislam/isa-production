import { DependencyList, useEffect } from 'react';


export const useInitEffect = (cb: () => void, deps: DependencyList = []) => {

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb();
    }
  }, deps);
};
