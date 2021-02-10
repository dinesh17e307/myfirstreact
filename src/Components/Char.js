import React from "react";
import Radium from "radium";
function Char(props) {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "yellowgreen",
    },
  };
  return (
    <div style={style} onClick={props.delete}>
      {props.letter}
    </div>
  );
}

export default Radium(Char);
