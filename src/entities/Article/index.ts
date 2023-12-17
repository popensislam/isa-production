export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';

export { ArticleList } from './ui/ArticleList/ArticleList';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article } from './model/types/article';
export { ArticleListView } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { articleDetailsReducer, articleDetailsActions } from './model/slice/articleDetailsSlice';
