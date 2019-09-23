import {css} from 'styled-components';
import * as selectors from '../COMPONENT_FILE_NAME.selectors';

export interface GeneralProps {}

const initialProps: Required<GeneralProps> = {};

export const general = ({}: GeneralProps = initialProps) => css`
  ${selectors.atomic} {
    color: orange;
  }
`;
