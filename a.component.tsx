import React from 'react';
import styled from 'styled-components';
import {Props} from './a.interfaces';
import * as selectors from './a.selectors';

const fc: React.FC<Props> = ({className}) => {
  return <div className={selectors.atomic(className)}>text</div>;
};

fc.displayName = 'fc';

/**
 * @atomic atom
 */
const memoized = React.memo(fc);

memoized.displayName = 'memoized';

export default memoized;
