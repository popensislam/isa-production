import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { t: articleT } = useTranslation('article_details');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isCanEdit = useSelector(getCanEditArticle);

  console.log(isCanEdit);

  const article = useSelector(getArticleDetailsData);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [ article?.id, navigate ]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [ navigate ]);

  return (
    <div className={cls.articleDetailsPageHeader}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        {articleT('article_details.back')}
      </Button>
      {isCanEdit && (
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onEditArticle}>
          {t('edit')}
        </Button>
      )}
    </div>
  );
});
