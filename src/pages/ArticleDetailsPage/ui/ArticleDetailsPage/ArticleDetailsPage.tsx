import { memo } from 'react';
import './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = ({ storybookId }: { storybookId?: string }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article_details');

  if (!id && !storybookId) {
    return (
      <div>
        {t('there is no article id')}
      </div>
    );
  }

  return (
    <div>
      <ArticleDetails id={id || storybookId || ''}/>
    </div>
  );
};

export default memo(ArticleDetailsPage);
