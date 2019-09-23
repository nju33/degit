import * as React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';
import * as knobs from '@storybook/addon-knobs';
import {COMPONENT_VAR_NAME} from './COMPONENT_FILE_NAME.components';
import * as mixins from './mixins';

const stories = storiesOf('unknown', module);

stories.addDecorator(knobs.withKnobs);

stories.add('COMPONENT_VAR_NAME', () => {
  const COMPONENT_NAME: React.FC = () => {
    return styled(COMPONENT_VAR_NAME)`
      ${mixins.general()};
    `;
  };

  return <COMPONENT_NAME />;
});
