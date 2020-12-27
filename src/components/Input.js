import styled from 'styled-components';

const inputPaddingSize = '15px';

const InputGroup = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;

  font-size: 18px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: ${inputPaddingSize};

  font-family: inherit;
  font-size: 16px;

  color: inherit;
  border: 1px solid rgba(0, 0, 0, .25);
  border-radius: 3px;

  box-sizing: border-box;
`;

const InputIcon = styled.div`
  position: absolute;
  bottom: ${inputPaddingSize};
  right: ${inputPaddingSize};
  z-index: 100;
`;

function Input(props) {
  const {
    labelText,
    id,
    icon,
    ...restProps
  } = props;

  return (
    <InputGroup>
      <Label htmlFor={id}>
        {labelText}
      </Label>
      <StyledInput
        id={id}
        {...restProps}
      />
      {icon && (
        <InputIcon>
          {icon}
        </InputIcon>
      )}
    </InputGroup>
  );
}

export default Input;
