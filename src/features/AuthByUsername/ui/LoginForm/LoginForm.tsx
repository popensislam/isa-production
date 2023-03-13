import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {

  const [ authState, setAuthState ] = useState({
    username: '',
    password: ''
  });

  const { t } = useTranslation();

  return (
    <div className={cls.loginForm}>
      <Input type='text' autoFocus className={cls.input} placeholder='Username'/>
      <Input type='text' className={cls.input} placeholder='Password'/>
      <Button theme={ThemeButton.OUTLINE} className={cls.buttonLogin}>
        {t('login')}
      </Button>
    </div>
  );
};
