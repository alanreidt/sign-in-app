import styled, { css } from 'styled-components';

export default styled.div`
  ${({ alignItems, maxWidth }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: ${alignItems};

    width: 100%;
    max-width: ${maxWidth}px;
    margin: 0 auto;

    box-sizing: border-box;
  `}
`;
