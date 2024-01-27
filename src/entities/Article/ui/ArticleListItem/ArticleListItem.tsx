import cls from './ArticleListItem.module.scss';
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
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListItemProps {
  className?: string
  article: Article
  isLoading?: boolean
  view?: ArticleListView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {

  const { article, view = ArticleListView.SMALL, isLoading, className, target } = props;

  const { t } = useTranslation();

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
            <AppLink target={target} to={RoutePath.article_details + article.id}>
              <Button theme={ThemeButton.OUTLINE}>
                {t('read more')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.SMALL, {}, [ className ])}
    >
      <Card>
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
    </AppLink>
  );
};
