import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

const ArticlesEditPage = () => {

  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return (
    <Page>
      {isEdit ? t('Edit article with id') + id : t('Create new article')}
    </Page>
  );
};

export default ArticlesEditPage;
