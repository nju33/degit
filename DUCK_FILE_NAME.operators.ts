import * as actions from './DUCK_FILE_NAME.actions';

export const initialize = ({
  dispatch
}: {
  dispatch: import('redux').Dispatch;
}) => (id: string, values = {value: ''}) => {
  dispatch(actions.DUCK_NAMEInitialize(id, values));
};
