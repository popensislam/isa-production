import cls from './ArticleListItem.module.scss';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { Article, ArticleBlockType, ArticleListView, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/see.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
  className?: string
  article: Article
  isLoading?: boolean
  view?: ArticleListView
}

export const ArticleListItem = (props: ArticleListItemProps) => {

  const { article, view = ArticleListView.SMALL, isLoading, className } = props;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [ article.id, navigate ]);

  const types = <Text text={article.type.join(', ')} className={cls.types}/>;

  const views = (
    <>
      <Text text={String(article.views)} className={cls.views}/>
      <Icon Svg={EyeIcon}/>
    </>
  );

  if (view === ArticleListView.BIG) {

    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock | undefined;

    return (
      <div className={classNames(cls.BIG, {}, [ className ])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={20} src={article.user.avatar} alt={article.user.username || 'Avatar user'}/>
            <Text text={article.user.username} className={cls.username}/>
            <Text text={article.createdAt} className={cls.date}/>
          </div>

          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title || 'Article img'}/>

          {textBlock && (
            <ArticleTextBlockComponent className={cls.textBlock} block={textBlock}/>
          )}

          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
              {t('read more')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.SMALL, {}, [ className ])}>
      <Card onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title || 'Article img'} className={cls.img}/>
          <Text text={article.createdAt} className={cls.date}/>
        </div>

        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>

        <Text text={article.title} className={cls.title}/>
      </Card>
    </div>
  );
};
