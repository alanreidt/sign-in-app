import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  min-height: 100vh;
  margin-top: 100px;

  @media(max-height: 400px) {
    margin-top: 10px;
  }
`;

function Page(props) {
  const {
    children,
  } = props;

  return (
    <StyledPage>{children}</StyledPage>
  );
}

export default Page;
