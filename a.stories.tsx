import React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';
import A from './a.component';
import {normal as normalSP} from './mixins/sp';
import {normal as normalPC} from './mixins/pc';

const stories = storiesOf('unknown.unknown', module);

const StyledA = styled(A)`
  @media (max-width: 767px) {
    ${normalSP};
  }

  @media (min-width: 768px) {
    ${normalPC};
  }
`;

export const UseCase = () => {
  return <StyledA />;
};

stories.add('normal', () => {
  return <UseCase />;
});
