import * as React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';
import * as knobs from '@storybook/addon-knobs';
import {COMPONENT_VAR_NAME} from './COMPONENT_FILE_NAME.components';
import * as mixins from './mixins';

const stories = storiesOf('unknown', module);

stories.addDecorator(knobs.withKnobs);

stories.add('COMPONENT_VAR_NAME', () => {
  const StyledCOMPONENT_NAME = styled(COMPONENT_VAR_NAME)`
    ${mixins.general()};
  `;

  const COMPONENT_NAMEStory: React.FC = () => {
    return <StyledCOMPONENT_NAME />;
  };

  return <COMPONENT_NAMEStory />;
});
