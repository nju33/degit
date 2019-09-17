import produce from 'immer';
import * as types from './DUCK_FILE_NAME.types';
import {Actions} from './DUCK_FILE_NAME.actions';

export interface State {
  namespace: Record<string, {value: string}>;
}

const namespaceReducer = (state: State['namespace'] = {}, action: Actions) => {
  switch (action.type) {
    case types.DUCK_NAME_INITIALIZE: {
      state[action.payload.id] = action.payload.values;
    }
    default: {
      return state;
    }
  }
};

export default (state: State = {namespace: {}}, action: Actions) =>
  produce(state, draft => ({
    namespace: namespaceReducer(draft.namespace, action)
  }));
