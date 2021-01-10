import styled from 'styled-components';

const typeToColor = (type) => {
  switch (type) {
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
  font-size: 1.875rem;

  color: ${(props) => typeToColor(props.type)};
`;

function Message(props) {
  const {
    type,
    children,
  } = props;

  return (
    <StyledMessage type={type}>{children}</StyledMessage>
  );
}

export default Message;
