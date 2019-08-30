import React from 'react';
import {render} from '@testing-library/react';
import {Normal} from './COMPONENT_FILE_NAME.stories';
import 'jest-styled-components';

test('snapshot', () => {
  const {container} = render(<Normal />);

  expect(container.firstChild).toMatchSnapshot();
});
