import React from 'react';
import styled from 'styled-components';
import {Props} from './COMPONENT_NAME.interfaces';
import * as selectors from './COMPONENT_NAME.selectors';

const COMPONENT_NAMEFC: React.FC<Props> = ({className}) => {
  return <div className={selectors.atomic(className)}>text</div>;
};

COMPONENT_NAMEFC.displayName = 'COMPONENT_NAMEFC';

/**
 * @atomic atom
 */
const COMPONENT_NAME = React.memo(COMPONENT_NAMEFC);

COMPONENT_NAME.displayName = 'COMPONENT_NAME';

export default COMPONENT_NAME;
