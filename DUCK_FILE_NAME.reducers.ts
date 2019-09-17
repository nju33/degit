import produce from 'immer';
import * as types from './DUCK_FILE_NAME.types';
import {Actions} from './DUCK_FILE_NAME.actions';

export interface State {
  something: Record<string, {value: string}>;
}

const somethingReducer = (state: State['something'] = {}, action: Actions) => {
  switch (action.type) {
    case types.DUCK_NAME_IN_CONSTANT_INITIALIZE: {
      state[action.payload.id] = action.payload.values;
    }
    default: {
      return state;
    }
  }
};

export default (state: State = {something: {}}, action: Actions) =>
  produce(state, draft => ({
    something: somethingReducer(draft.something, action)
  }));
