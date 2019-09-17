import {createSelector} from 'reselect';
import {State} from './DUCK_FILE_NAME.reducers';

const getByNamespaceId = (state: State, props: {id: string}) =>
  state.namespace[props.id];

export const namespaceIdSelector = createSelector(
  [getByNamespaceId],
  (namespace: State['namespace'][string]) => namespace
);
