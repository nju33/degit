import * as types from './DUCK_FILE_NAME.types';

export const DUCK_NAMEInitialize = (id: string, values: {value: string}) => ({
  type: types.DUCK_NAME_IN_CONSTANT_INITIALIZE,
  payload: {
    id,
    values
  }
});

export type Actions = ReturnType<typeof DUCK_NAMEInitialize>;
