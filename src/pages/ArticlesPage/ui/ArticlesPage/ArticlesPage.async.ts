import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
    resolve(import('./ArticlesPage'))
  , 400);
}));
