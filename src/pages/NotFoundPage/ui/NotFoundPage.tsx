import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';


const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <div className={classNames(cls.NotFoundPage)}>
        {t('not found page')}
      </div>
    </Page>
  );
};

export default NotFoundPage;
