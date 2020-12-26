import styled from 'styled-components';

const typeToColor = (type) => {
  switch(type) {
    case 'success': {
      return 'green';
    }
    case 'error': {
      return 'red';
    }
    default: {
      return 'black';
    }
  }
};

const StyledMessage = styled.p`
  font-size: 30px;

  color: ${(props) => typeToColor(props.type)}
`;

function Message(props) {
  const {
    children,
  } = props;

  return (
    <StyledMessage>{children}</StyledMessage>
  );
}

export default Message;
