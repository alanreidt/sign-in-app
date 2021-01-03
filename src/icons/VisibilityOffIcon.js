import styled from 'styled-components';

import { ReactComponent as VisibilityOffIcon } from '../assets/visibility_off.svg';

export default styled(VisibilityOffIcon)`
  display: inline-block;
  vertical-align: top;

  @media(max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
