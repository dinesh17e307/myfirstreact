import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Aux from "./Hoc/auxiliary";
import withclass from "./Hoc/withclass";
import propTypes from "prop-types";
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
class Person extends Component {
  render() {
    console.log("[person.js] render ");
    return (
      <Fragment>
        <Styleperson>
          <p onClick={() => this.props.click()}>
            this is {this.props.names} from {this.props.place}
          </p>
          <h1>{this.props.children}</h1>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.names}
          />
        </Styleperson>
      </Fragment>
    );
  }
}
Person.propTypes = {
  names: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.string,
  place: propTypes.string,
};
export default withclass(Person, Styleperson);
