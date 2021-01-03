import styled from 'styled-components';

export default styled.header`
  display: block;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid #eaeaea;

  @media (max-width: 1024px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media(max-width: 450px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
