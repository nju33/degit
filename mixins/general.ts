import {css} from 'styled-components';
import * as selectors from '../button-group.selectors';

export interface GeneralProps {}

const initialValues: Required<GeneralProps> = {};

export const general = ({}: GeneralProps = initialValues) => css`
  ${selectors.atomic} {
    color: orange;
  }
`;
