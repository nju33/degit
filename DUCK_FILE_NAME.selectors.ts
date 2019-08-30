import {createSelector} from 'reselect';
import {State} from './DUCK_FILE_NAME.reducers';

const getBySomethingId = (state: State, props: {id: string}) =>
  state.something[props.id];

export const somethingIdSelector = createSelector(
  [getBySomethingId],
  (something: State['something'][string]) => something
);
