import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useCallback, memo } from 'react';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const initReducers: ReducerList = { loginForm: loginReducer };

interface LoginFormProps {
  onSuccess?: () => void
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  LoginForm.displayName = 'LoginFormMemo';

  const { username, password, error, isLoading } = useSelector(getLoginState);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [ dispatch ]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [ dispatch ]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [ dispatch, username, password, onSuccess ]);

  return (
    <div className={cls.loginForm}>
      <DynamicModuleLoader reducers={initReducers} removeAfterUnmount={true}>
        <Text title={t('form-auth')} theme={TextTheme.PRIMARY}/>
        {error && <Text text={t('wrong-password-login')} theme={TextTheme.ERROR}/>}
        <Input
          type="text"
          autoFocus
          className={cls.input}
          placeholder="Username"
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          disabled={isLoading}
          className={cls.buttonLogin}
          onClick={onLoginClick}
        >
          {t('login')}
        </Button>
      </DynamicModuleLoader>
    </div>
  );
});

export default LoginForm;
