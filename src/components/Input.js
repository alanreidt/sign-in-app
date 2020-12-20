function Input(props) {
  const {
    labelText,
    ...restProps
  } = props;

  const labelTextStyle = {
    display: 'block',
    marginBottom: '5px',

    fontSize: '18px',
  };

  const inputStyle = {
    padding: '15px',

    fontFamily: 'inherit',
    fontSize: '16px',

    color: 'inherit',
    border: '1px solid rgba(0, 0, 0, .25)',
    borderRadius: '3px',
  };

  return (
    <div>
      <label>
        <span style={labelTextStyle}>{labelText}</span>
        <input style={inputStyle} {...restProps} />
      </label>
    </div>
  );
}

export default Input;
