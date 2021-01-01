import styled from 'styled-components';

const StyledBox = styled.div`
  display: block;
  width: ${(props) => props.hasMaxWidth ? '100%' : 'auto'};
  max-width: ${(props) => props.maxWidth}px;
  padding: ${(props) => props.padding};

  background-color: #eee;
  border: 1px solid black;
  border-radius: 3px;

  box-sizing: border-box;
`;

function Box(props) {
  const {
    padding = '15px 20px',
    maxWidth = '',
    children,
  } = props;

  const hasMaxWidth = Number.isFinite(
    parseFloat(maxWidth)
  );

  return (
    <StyledBox
      padding={padding}
      hasMaxWidth={hasMaxWidth}
      maxWidth={maxWidth}
    >
      {children}
    </StyledBox>
  );
}

export default Box;
