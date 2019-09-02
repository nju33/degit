import * as React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';
import COMPONENT_NAME from './COMPONENT_FILE_NAME.component';
import {normal as normalSP} from './mixins/sp';
import {normal as normalPC} from './mixins/pc';

const stories = storiesOf('unknown.unknown', module);

export const Normal = (() => {
  const Styled = styled(COMPONENT_NAME)`
    @media (max-width: 767px) {
      ${normalSP};
    }

    @media (min-width: 768px) {
      ${normalPC};
    }
  `;

  // eslint-disable-next-line react/display-name
  return (() => {
    return <Styled />;
  }) as React.FC
})();

stories.add('normal', () => {
  return <Normal />;
});
