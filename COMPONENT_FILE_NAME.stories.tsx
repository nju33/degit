import * as React from 'react';
import styled from 'styled-components';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import {COMPONENT_NAME} from './COMPONENT_FILE_NAME.components';
import * as mixins from './mixins';

const stories = storiesOf('unknown', module);

stories.addDecorator(withKnobs);

const _COMPONENT_NAME: React.FC = () => {
  const _result = styled(COMPONENT_NAME)`
    ${mixins.general()};
  `;

  return <_result />;
}

stories.add(
  '_COMPONENT_NAME',
  () => <_COMPONENT_NAME />
);
