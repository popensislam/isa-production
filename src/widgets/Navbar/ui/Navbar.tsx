/* eslint-disable i18next/no-literal-string */
import cls from './Navbar.module.scss';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [ className ])}>
      <LoginModal isOpen={isAuthModal} onClose={onToggleModal}/>
      <Button theme={ThemeButton.CLEAR} onClick={onToggleModal}>
        {t('login')}
      </Button>
    </div>
  );
};
