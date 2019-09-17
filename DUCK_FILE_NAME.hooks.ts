import * as operators from './DUCK_FILE_NAME.operators';
import * as selectors from './DUCK_FILE_NAME.selectors';

export const useDUCK_NAME_IN_PASCAL = ({
  dispatch
}: {
  dispatch: import('redux').Dispatch;
}) => ({
  ...selectors,
  initialize: operators.initializeOperator({dispatch}),
});
