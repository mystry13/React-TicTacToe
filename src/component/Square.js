function Square(props) {
  return (
    <button
      style={{ width: "30px", height: "20px" }}
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
