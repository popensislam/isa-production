import cls from './ProfilePageHeader.module.scss';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
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
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [ dispatch ]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [ dispatch ]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [ dispatch ]);

  return (
    <div className={classNames(cls.header)}>
      <Text title={t('profile')}/>
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
  );
};
