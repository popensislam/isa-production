import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleListView } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleListView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleListView) => {
  return new Array(view === ArticleListView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} view={view}/>
    ));
};

export const ArticleList = (props: ArticleListProps) => {
  const { articles, view = ArticleListView.SMALL, target, isLoading, className } = props;

  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem target={target} article={article} view={view} key={article.id}/>;
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames('', {}, [ className, cls[ view ] ])}>
        <Text size={TextSize.L} title={t('there is no articles')}/>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [ className, cls[ view ] ])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}

      {isLoading && getSkeletons(view)}
    </div>
  );
};
