import styled from 'styled-components';

import { ReactComponent as VisibilityIcon } from '../assets/visibility.svg';

export default styled(VisibilityIcon)`
  display: inline-block;
  vertical-align: top;

  @media(max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
