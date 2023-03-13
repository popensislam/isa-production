import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={cls.PageError}>
      <p className={cls.errorTitle}>{t('unexpected error')}</p>
      <Button className={cls.errorButton} theme={ThemeButton.CLEAR} onClick={reloadPage}>{t('reload page')}</Button>
    </div>
  );
};
