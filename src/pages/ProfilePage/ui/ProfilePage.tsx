import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getForm, getProfile, getProfileError, getProfileIsLoading, getProfileReadonly, Profile, profileActions, ProfileCard, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CurrencyType } from 'entities/Currency';
import { CountryType } from 'entities/Country';
import type { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


const reducers: ReducerList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const form = useSelector(getForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [ dispatch ]);


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
      <div>
        <ProfilePageHeader/>
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
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
