import styled from 'styled-components';

import Page from '../components/Page';

const SuccessMessage = styled.p`
  font-size: 30px;
  color: green;
`;

function SuccessPage() {
  return (
    <Page>
      <SuccessMessage>Success</SuccessMessage>
    </Page>
  );
}

export default SuccessPage;
