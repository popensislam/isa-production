import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleListView } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleListView
}

const getSkeletons = (view: ArticleListView) => {
  return new Array(view === ArticleListView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} view={view}/>
    ));
};

export const ArticleList = (props: ArticleListProps) => {
  const { articles, view = ArticleListView.SMALL, isLoading, className } = props;

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id}/>;
  };

  if (isLoading) {
    return (
      <div className={cls[ view ]}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [ className, cls[ view ] ])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
