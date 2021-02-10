import React from "react";
import styled from "styled-components";
const Styleperson = styled.div`
  background-color: white;
  width: 60%;
  border: 2px solid #ccc;
  margin: 10px auto;
  padding: 2px;
  boxshadow: 2px 3px #eeee;
  :hover {
    background-color: blue;
  }
  @media (min-width: 500px) {
    width: 450px;
  }
`;
const person = (props) => {
  return (
    <Styleperson>
      <p onClick={() => props.click()}>
        this is {props.names} from {props.place} and my age is{" "}
        {Math.floor(Math.random() * 50)}{" "}
      </p>
      <h1>{props.children}</h1>
      <input type="text" onChange={props.changed} value={props.names} />
    </Styleperson>
  );
};
export default person;
