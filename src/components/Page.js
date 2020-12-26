import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
