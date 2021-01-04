import styled, { css } from 'styled-components';

import { BREAKPOINTS } from "../utils/cssVariables";

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: top;
  padding: 0 1.3em;
  min-width: 105px;
  height: 2.6em;

  font-family: inherit;
  font-size: 18px;
  line-height: normal;
  color: #fff;
  background-color: #24292e;

  border: 2px solid transparent;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
  box-sizing: border-box;

  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  transform: translate3d(0, 0, 0);
  transition: all 0.3s ease;

  @media(${BREAKPOINTS.tablet}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 8px 8px rgba(0, 0, 0, .25);
    transform: translate3d(0, -3px, 0);
  }

  ${(props) => props.primitive && css`
    height: 2.1em;
    padding: 0 1em;

    font-size: 14px;
    color: #6a747d;
    background-color: transparent;
    border: 1px solid #6a747d;

    text-transform: initial;
    box-shadow: none;

    @media(${BREAKPOINTS.tablet}) {
      font-size: 12px;
    }

    &:hover,
    &:focus {
      box-shadow: none;
      transform: translate3d(0, 0, 0);
    }
  `}
`;

function Button(props) {
  const {
    children,
    ...restProps
  } = props;

  return (
    <StyledButton {...restProps}>{children}</StyledButton>
  );
}

export default Button;
