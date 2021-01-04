import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-flow: ${(props) => props.flexFlow || 'column nowrap'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};

  width: 100%;
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;

  box-sizing: border-box;
`;
