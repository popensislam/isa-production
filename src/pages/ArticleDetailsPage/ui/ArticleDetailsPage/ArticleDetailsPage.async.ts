import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
    resolve(import('./ArticleDetailsPage'))
  , 400);
}));
