import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getForm, getProfile, getProfileError, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, Profile, profileActions, ProfileCard, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CurrencyType } from 'entities/Currency';
import { CountryType } from 'entities/Country';
import { Text } from 'shared/ui/Text/Text';
import { ValidateProfileErrors } from 'entities/Profile/model/types/ProfileSchema';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import type { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


const reducers: ReducerList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const form = useSelector(getForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const { id: profileId } = useParams<{ id: string }>();

  const validateErrorTranslates = {
    [ ValidateProfileErrors.INCORRECT_USER_DATA ]: t('incorrect-user-data'),
    [ ValidateProfileErrors.INCORRECT_AGE ]: t('incorrect-age'),
    [ ValidateProfileErrors.INCORRECT_COUNTRY ]: t('incorrect-country'),
    [ ValidateProfileErrors.NO_DATA ]: t('no-data'),
    [ ValidateProfileErrors.SERVER ]: t('server-error')
  };


  useInitEffect(() => {
    profileId && dispatch(fetchProfileData(profileId));
  }, [ profileId ]);

  const onChangeForm = useCallback((value: string, name?: string) => {
    const key = name as keyof Profile;

    if (key === 'age') {
      const regex = /^[^a-zA-Z]+$/;
      if (!regex.test(value)) return;
    }

    dispatch(profileActions.updateProfile({ [ key ]: value }));
  }, [ dispatch ]);

  const onChangeCurrency = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ currency: value as CurrencyType }));
  }, [ dispatch ]);

  const onChangeCountry = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ country: value as CountryType }));
  }, [ dispatch ]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <div>
          <ProfilePageHeader/>
          {validateErrors?.map((err) => (
            <Text text={validateErrorTranslates[ err ]} theme={'error'} key={err}/>
          ))}
          <ProfileCard
            profile={form}
            isLoading={isLoading}
            error={error}
            onChangeForm={onChangeForm}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
            readonly={readonly}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
