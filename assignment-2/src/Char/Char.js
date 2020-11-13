import React from "react";

const Char = (props) => {
  const style = {
    border: "1px solid black",
    backgroundColor: "#eee",
    padding: "10px",
    margin: "5px",
    display: "inline-block"
  };

  return <div style={style} onClick={props.onDeleteCharacter}>{props.character}</div>;
};

export default Char;
