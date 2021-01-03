import styled from 'styled-components';

const inputPaddingSize = '15px';

const InputGroup = styled.div`
  position: relative;

  display: inline-block;
  vertical-align: top;
  width: 100%;
`;

const LabelGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 5px;
  `;

  const Label = styled.label`
  display: block;

  font-size: 18px;

  @media(max-width: 768px) {
    font-size: 16px;
  }
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
    link,
    icon,
    ...restProps
  } = props;

  return (
    <InputGroup>
      <LabelGroup>
        <Label htmlFor={id}>
          {labelText}
        </Label>
        {link}
      </LabelGroup>
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
