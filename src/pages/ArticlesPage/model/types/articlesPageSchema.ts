import { Article, ArticleListView, ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';
import type { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  // filters
  view: ArticleListView;
  order: SortOrder;
  sort: ArticleSortField
  search: string;
  type: ArticleType

  _inited: boolean;
}
