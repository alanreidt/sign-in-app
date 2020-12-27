import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 5px;

  font-size: 18px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 15px;

  font-family: inherit;
  font-size: 16px;

  color: inherit;
  border: 1px solid rgba(0, 0, 0, .25);
  border-radius: 3px;

  box-sizing: border-box;
`;

function Input(props) {
  const {
    labelText,
    id,
    ...restProps
  } = props;

  return (
    <div>
      <Label htmlFor={id}>
        {labelText}
      </Label>
      <StyledInput
        id={id}
        {...restProps}
      />
    </div>
  );
}

export default Input;
