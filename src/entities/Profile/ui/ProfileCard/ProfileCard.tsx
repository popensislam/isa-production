import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/ProfileSchema';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useSelector } from 'react-redux';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { ChangeEvent } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/Currency';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string
    profile?: Profile
    isLoading?: boolean,
    error?: string
    readonly?: boolean
    onChangeForm?: (value: string, name?: string) => void
    onChangeCurrency?: (value: string) => void
    onChangeCountry?: (value: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {

  const { className, profile, isLoading, error, onChangeForm, onChangeCurrency, onChangeCountry, readonly } = props;

  const { t } = useTranslation('profile');


  if (isLoading) {
    return (
      <div className={classNames(cls.profile, { [ cls.loading ]: true }, [ className ])}>
        <Loader/>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profile, {}, [ className, cls.error ])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error-get-profile-card')}
          text={t('try-again')}
          align='center'
        />
      </div>
    );
  }

  const profileMods: Mods = { [ cls.editing ]: !readonly };

  return (
    <div className={classNames(cls.profile, profileMods, [ className ])}>
      {profile?.avatar && (
        <div className={cls.imgWrapper}>
          <Avatar src={profile?.avatar} alt='user s avatar' size={200}/>
        </div>
      )}
      <Input
        value={profile?.first}
        placeholder={t('yout-firstname')}
        className={cls.input}
        onChange={onChangeForm}
        name='first'
        readonly={readonly}
      />
      <Input
        value={profile?.lastname}
        placeholder={t('your-lastname')}
        className={cls.input}
        onChange={onChangeForm}
        name='lastname'
        readonly={readonly}
      />
      <Input
        value={profile?.username}
        placeholder={t('your-username')}
        className={cls.input}
        onChange={onChangeForm}
        name='username'
        readonly={readonly}
      />
      <Input
        value={profile?.age}
        placeholder={t('your-age')}
        className={cls.input}
        onChange={onChangeForm}
        name='age'
        readonly={readonly}
      />
      <Input
        value={profile?.city}
        placeholder={t('your-city')}
        className={cls.input}
        onChange={onChangeForm}
        name='city'
        readonly={readonly}
      />
      <CountrySelect
        value={profile?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
      <CurrencySelect
        value={profile?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
    </div>
  );
};
