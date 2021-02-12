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
class Person extends React.Component {
  render() {
    console.log("[person.js] render ");
    return (
      <Styleperson>
        <p onClick={() => this.props.click()}>
          this is {this.props.names} from {this.props.place} and my age is{" "}
          {Math.floor(Math.random() * 50)}{" "}
        </p>
        <h1>{this.props.children}</h1>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.names}
        />
      </Styleperson>
    );
  }
}
export default Person;
