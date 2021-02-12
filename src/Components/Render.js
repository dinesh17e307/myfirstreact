import React from "react";
import classes from "./Render.module.css";
function Render(props) {
  const assignclasses = [];
  let btnclass = "";
  if (props.show) {
    btnclass = classes.Red;
  }
  if (props.person.length >= 2) {
    assignclasses.push(classes.green);
  }
  if (props.person.length <= 1) {
    assignclasses.push(classes.red);
  }
  return (
    <div className={classes.Render}>
      <h1 className={assignclasses.join(" ")}>
        hi welcome ,this is my first app going to develop
      </h1>
      <button className={btnclass} onClick={props.clicked}>
        toggle the person
      </button>
    </div>
  );
}

export default Render;
