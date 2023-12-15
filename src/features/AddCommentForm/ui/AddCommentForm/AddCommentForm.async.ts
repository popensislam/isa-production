import { FC, lazy } from 'react';
import type { AddCommentFormProps } from './AddCommentForm';


export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
  setTimeout(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
    resolve(import('./AddCommentForm'))
  , 1500);
}));
