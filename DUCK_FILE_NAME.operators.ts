import * as actions from './DUCK_FILE_NAME.actions';

export const initializeOperator = ({
  dispatch
}: {
  dispatch: import('redux').Dispatch;
}) => (id: string, values = {value: ''}) => {
  dispatch(actions.DUCK_NAMEInitialize(id, values));
};
