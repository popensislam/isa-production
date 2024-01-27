/* eslint-disable i18next/no-literal-string */
import cls from './Navbar.module.scss';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [ dispatch ]);


  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [ className ])}>
        <Text className={cls.appName} title='Pet App' theme='primary' />
        <AppLink to={RoutePath.article_create}>{t('create')}</AppLink>
        <Button className={cls.logOut} theme={ThemeButton.CLEAR} onClick={onLogout}>
          {t('logout')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [ className ])}>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onToggleModal}/>
      )}
      <Button theme={ThemeButton.CLEAR} onClick={onToggleModal}>
        {t('login')}
      </Button>
    </header>
  );
};
