import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import type { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


const reducers: ReducerList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [ dispatch ]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ProfileCard/>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
