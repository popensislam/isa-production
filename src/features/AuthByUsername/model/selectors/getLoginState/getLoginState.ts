import type { StateSchema } from 'app/providers/StoreProvider';


export const getLoginState = (state: StateSchema) => ({
  username: state?.loginForm?.username || '',
  password: state?.loginForm?.password || '',
  isLoading: state?.loginForm?.isLoading || false,
  error: state?.loginForm?.error || ''
});
