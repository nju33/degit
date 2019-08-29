import React from 'react';
import {render} from '@testing-library/react';
import {UseCase} from './a.stories';
import 'jest-styled-components';

test('snapshot', () => {
  const {container} = render(<UseCase />);

  expect(container.firstChild).toMatchSnapshot();
});
