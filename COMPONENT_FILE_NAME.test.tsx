import * as React from 'react';
import {RenderResult, render} from '@testing-library/react';
import {COMPONENT_VAR_NAME as COMPONENT_NAME} from './COMPONENT_FILE_NAME.components';
import 'jest-styled-components';

describe('COMPONENT_VAR_NAME', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<COMPONENT_NAME />);
  });

  test('snapshot', () => {
    expect(renderResult.container.firstChild).toMatchSnapshot();
  });
});
