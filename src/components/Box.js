function Box(props) {
  const {
    padding = '15px 20px',
    children,
  } = props;

  const sx = {
    padding,
    backgroundColor: '#eee',
    border: '1px solid black',
    borderRadius: '3px',
  };

  return (
    <div style={sx}>
      {children}
    </div>
  );
}

export default Box;
