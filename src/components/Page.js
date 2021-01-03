import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 40px;

  box-sizing: border-box;

  @media (max-height: 900px) {
    padding-top: 50px;
  }

  @media (max-height: 700px) {
    padding-top: 20px;
    padding-bottom: 20px;
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
