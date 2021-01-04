import styled from 'styled-components';

import { BREAKPOINTS } from "../utils/cssVariables";

export default styled.header`
  display: block;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid #eaeaea;

  @media (${BREAKPOINTS.desktop}) {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media(${BREAKPOINTS.mobile}) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
