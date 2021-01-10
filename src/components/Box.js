import styled from 'styled-components';

export default styled.div`
  display: block;
  width: ${(props) => props.maxWidth ? '100%' : 'auto'};
  max-width: ${(props) => props.maxWidth};
  height: 100%;
  padding: 0.625em 0.875em;

  font-size: 1rem;

  background-color: #f5f5f5;
  border: 1px solid #d2d2d2;
  border-radius: 3px;

  box-sizing: border-box;
`;
