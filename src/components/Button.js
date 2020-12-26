import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: top;
  padding: 10px 24px;

  font-family: inherit;
  font-size: 18px;
  line-height: normal;
  color: #fff;
  background-color: #24292e;

  border: 2px solid transparent;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, .15);

  text-transform: capitalize;
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  transform: translate3d(0, 0, 0);
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 8px 8px rgba(0, 0, 0, .25);
    transform: translate3d(0, -3px, 0);
  }
`;

function Button(props) {
  const {
    children,
    ...restProps
  } = props;

  return (
    <StyledButton {...restProps}>{children}</StyledButton>
  );
}

export default Button;
