import styled from 'styled-components';

const SuccessMessage = styled.p`
  font-size: 30px;
  color: green;
`;

function SuccessPage() {
  return (
    <div>
      <SuccessMessage>Success</SuccessMessage>
    </div>
  );
}

export default SuccessPage;
