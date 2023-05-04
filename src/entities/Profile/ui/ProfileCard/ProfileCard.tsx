import cls from './ProfileCard.module.scss';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {

  const { t } = useTranslation('profile');
  const profile = useSelector(getProfile);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.profile, {}, [ className ])}>
      <div className={cls.header}>
        <Text title={t('profile')}/>
        <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>
          {t('edit')}
        </Button>
      </div>

      <div className={cls.data}>
        <Input
          value={profile?.first}
          placeholder={t('yout-firstname')}
          className={cls.input}
        />
        <Input
          value={profile?.lastname}
          placeholder={t('your-lastname')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
