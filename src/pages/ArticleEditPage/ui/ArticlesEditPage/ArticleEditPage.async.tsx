import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
    resolve(import('./ArticleEditPage'))
  , 400);
}));
