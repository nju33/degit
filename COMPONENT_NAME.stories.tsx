import React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';
import COMPONENT_NAME from './COMPONENT_NAME.component';
import {normal as normalSP} from './mixins/sp';
import {normal as normalPC} from './mixins/pc';

const stories = storiesOf('unknown.unknown', module);

const COMPONENT_NAMEStyled = styled(COMPONENT_NAME)`
  @media (max-width: 767px) {
    ${normalSP};
  }

  @media (min-width: 768px) {
    ${normalPC};
  }
`;

export const UseCase = () => {
  return <COMPONENT_NAMEStyled />;
};

stories.add('normal', () => {
  return <UseCase />;
});
