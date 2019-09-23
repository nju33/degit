import * as React from 'react';
import {Props} from './COMPONENT_FILE_NAME.interfaces';
import * as selectors from './COMPONENT_FILE_NAME.selectors';

const COMPONENT_VAR_NAMEFC: React.FC<Props> = ({className}) => {
  return <div className={selectors.atomic(className)}>text</div>;
};

COMPONENT_VAR_NAMEFC.displayName = 'COMPONENT_VAR_NAMEFC';

/**
 * @atomic atom
 */
const COMPONENT_VAR_NAME = React.memo(COMPONENT_VAR_NAMEFC);

COMPONENT_VAR_NAME.displayName = 'COMPONENT_VAR_NAME';

export {COMPONENT_VAR_NAME};
