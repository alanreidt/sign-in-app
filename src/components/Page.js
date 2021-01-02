import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding-top: 100px;

  box-sizing: border-box;

  @media(max-height: 400px) {
    padding-top: 10px;
  }
`;

function Page(props) {
  const {
    children,
  } = props;

  return (
    <StyledPage>
      {children}
    </StyledPage>
  );
}

export default Page;
