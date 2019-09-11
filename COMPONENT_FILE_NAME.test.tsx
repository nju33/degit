import * as React from 'react';
import {render} from '@testing-library/react';
import Default from './COMPONENT_FILE_NAME.stories';
import 'jest-styled-components';

test('snapshot', () => {
  const {container} = render(<Default />);

  expect(container.firstChild).toMatchSnapshot();
});
