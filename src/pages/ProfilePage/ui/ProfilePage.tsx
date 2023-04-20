import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import type { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = { profile: profileReducer };

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
      Profile page
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
