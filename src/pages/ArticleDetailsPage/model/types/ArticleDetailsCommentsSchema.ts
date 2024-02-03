import { CommentType } from 'entities/Comment/model/types/comment';
import type { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
  isLoading?: boolean;
  error?: string;
}
