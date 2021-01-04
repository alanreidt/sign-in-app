import styled from 'styled-components';

import { BREAKPOINTS } from "../utils/cssVariables";

const inputPaddingSize = '0.9375em';

const InputGroup = styled.div`
  position: relative;

  display: inline-block;
  vertical-align: top;
  width: 100%;

  font-size: 18px;

  @media(${BREAKPOINTS.tablet}) {
    font-size: 16px;
  }
`;

const LabelGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Label = styled.label`
  display: block;

  font-size: 1em;
`;

const InputLink = styled.div`
  font-size: 0.9em;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: ${inputPaddingSize};

  font-family: inherit;
  font-size: 0.9em;

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
        {link && (
          <InputLink>
            {link}
          </InputLink>
        )}
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
