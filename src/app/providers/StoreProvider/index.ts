import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { AppDispatch } from './config/store';

import type { StateSchema, ReduxStoreWithManager } from './config/StateSchema';

export { StoreProvider, createReduxStore, StateSchema };
export type { AppDispatch };
