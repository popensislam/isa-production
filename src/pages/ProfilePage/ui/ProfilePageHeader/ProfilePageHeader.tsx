import cls from './ProfilePageHeader.module.scss';
import { getProfile, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfile);
  const readonly = useSelector(getProfileReadonly);

  const canEdit = String(authData?.id) === String(profileData?.id);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [ dispatch ]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [ dispatch ]);

  const onSave = useCallback(() => {
    if (profileData?.id === undefined) return;
    dispatch(updateProfileData(profileData?.id));
  }, [ dispatch, profileData?.id ]);

  return (
    <div className={classNames(cls.header)}>
      <Text title={t('profile')}/>
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly
            ?
            <Button onClick={onEdit} theme={ThemeButton.OUTLINE} className={cls.editBtn}>
              {t('edit')}
            </Button>
            :
            <div>
              <Button onClick={onCancel} theme={ThemeButton.OUTLINE_RED} className={cls.editBtn}>
                {t('cancel')}
              </Button>
              <Button onClick={onSave} theme={ThemeButton.OUTLINE} className={classNames(cls.editBtn, {}, [ cls.marginLeft ])}>
                {t('save')}
              </Button>
            </div>
          }
        </div>
      )}
    </div>
  );
};
