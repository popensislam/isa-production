import type { AxiosInstance } from 'axios';
import type { To, NavigateOptions } from 'react-router-dom';
import type { EnhancedStore, ReducersMapObject, AnyAction, Reducer, CombinedState } from '@reduxjs/toolkit';
import type { LoginSchema } from 'features/AuthByUsername';
import type { UserSchema } from 'entities/User';
import type { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    user: UserSchema,

    /** ASYNC REDUCERS */
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void
  }
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
