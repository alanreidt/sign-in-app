import styled, { css } from 'styled-components';

import { BREAKPOINTS } from "../utils/cssVariables";

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: top;
  height: 2.6em;
  line-height: calc(2.6em - 2 * 2px);

  padding: 0 1.3em;
  min-width: 7.2em;

  font-family: inherit;
  font-size: 18px;
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
  transition: transform 0.3s ease,
              box-shadow 0.3s ease;

  @media(${BREAKPOINTS.tablet}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 8px 8px rgba(0, 0, 0, .25);
    transform: translate3d(0, -3px, 0);
  }

  ${(props) => props.disabled && css`
    background-color: #4e565f;
    cursor: not-allowed;
  `}

  ${(props) => props.primitive && css`
    height: 2.1em;
    line-height: calc(2.1em - 2 * 1px);

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
