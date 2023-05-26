import { StateSchema } from 'app/providers/StoreProvider';


export const getForm = (state: StateSchema) => state.profile?.form;
