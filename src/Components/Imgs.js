import React from "react";
import "./Style.css";
function Imgs(props) {
  return (
    <div className="dis">
      <img src={props.src} alt={props.src} />
    </div>
  );
}

export default Imgs;
