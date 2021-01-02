import styled, { css } from 'styled-components';

export default styled.div`
  ${({ flexFlow, justifyContent, alignItems, maxWidth }) => css`
    display: flex;
    flex-flow: ${flexFlow || 'column nowrap'};
    align-items: ${alignItems};
    justify-content: ${justifyContent};

    width: 100%;
    max-width: ${maxWidth};
    margin: 0 auto;

    box-sizing: border-box;
  `}
`;
