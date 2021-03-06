import React, { useEffect, useRef } from "react";
import classes from "./Render.module.css";
function Render(props) {
  const btnRef = useRef(null);
  useEffect(() => {
    console.log("changed from Render.js");
    // setTimeout(() => {
    //   alert("hi welcome");
    // }, 1000);
    btnRef.current.click();
    return () => {
      console.log("clean up work in render,js");
    };
  }, []);
  const assignclasses = [];
  let btnclass = "";
  if (props.show) {
    btnclass = classes.Red;
  }
  if (props.personlength >= 2) {
    assignclasses.push(classes.green);
  }
  if (props.personlength <= 1) {
    assignclasses.push(classes.red);
  }
  return (
    <div className={classes.Render}>
      <h1 className={assignclasses.join(" ")}>
        hi welcome ,this is my first app going to develop
      </h1>
      <button ref={btnRef} className={btnclass} onClick={props.clicked}>
        toggle the person
      </button>
    </div>
  );
}

export default React.memo(Render);
