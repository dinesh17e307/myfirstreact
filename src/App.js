import React from "react";
import classes from "./App.module.css";
// import styled from "styled-components";
import Person from "./Components/Person";
import Dynamicchange from "./Components/Dynamicchange";
import Listassignment from "./Components/Listassignment";
import Char from "./Components/Char";
import ColorChange from "./Components/ColorChange";
import StyledComponents from "./Components/StyledComponents";
import Webcamera from "./Components/Webcamera";
// const Stylebutton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   padding: 10px;
//   border: 1px solid blue;
//   color: white;
//   text-align: center;

//   &:hover {
//     background-color: ${(props) => (props.alt ? "maroon" : "yellowgreen")};
//     color: ${(props) => (props.alt ? "yellow" : "black")};
//   }
// `;
class App extends React.Component {
  state = {
    person: [
      { id: "1", nam: "dinesh", place: "sathy" },
      { id: "2", nam: "ganesh", place: "chennai" },
      { id: "3", nam: "kalai", place: "erode" },
    ],
    name1: "hey",
    name2: "ram!",
    date: "",
    isshown: true,
    userinput: "type",
  };
  onchangeforpersonHandler = (e, id) => {
    const personindex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    const persons = {
      ...this.state.person[personindex],
    };
    persons.nam = e.target.value;
    const person = [...this.state.person];
    person[personindex] = persons;

    this.setState({
      person: person,
    });
  };
  listtextchangehandler = (e) => {
    this.setState({
      userinput: e.target.value,
    });

    console.log(this.state.userinput.length);
  };
  onchangeHandler = (e) => {
    this.setState({
      person: [
        { nam: "dinesh", place: "sathy" },
        { nam: "ganesh", place: "chennai" },
        { nam: "kalai", place: "erode" },
      ],
      name1: e.n1,
      name2: e.n2,
      date: e.date,
    });
  };
  toggleHandler = () => {
    this.setState({ isshown: !this.state.isshown });
  };
  deleteHandler = (index) => {
    let person = this.state.person;
    person.splice(index, 1);
    this.setState({ persons: person });
  };
  delcharhandler = (ind) => {
    let delchar = this.state.userinput.split("");
    delchar.splice(ind, 1);
    const update = delchar.join("");
    this.setState({
      userinput: update,
    });
  };
  render() {
    // const style = {
    //   backgroundColor: " green",
    //   padding: "10px",
    //   border: "1px solid blue",
    //   color: "white",
    //   textAlign: "center",

    //   ":hover": {
    //     backgroundColor: "yellowgreen",
    //     color: "black",
    //   },
    // };
    const word = this.state.userinput.split("").map((ch, index) => {
      return (
        <Char
          letter={ch}
          key={index}
          delete={() => this.delcharhandler(index)}
        />
      );
    });
    let persons = null;
    let btnclass = "";
    if (this.state.isshown) {
      persons = (
        <div>
          {this.state.person.map((e, indx) => {
            return (
              <Person
                click={() => this.deleteHandler(indx)}
                key={e.id}
                names={e.nam}
                place={e.place}
                changed={(event) => this.onchangeforpersonHandler(event, e.id)}
              />
            );
          })}
        </div>
      );
      btnclass = classes.Red;
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "maroon",
      //   color: "yellow",
      // };
    }
    const assignclasses = [];
    if (this.state.person.length >= 2) {
      assignclasses.push(classes.green);
    }
    if (this.state.person.length <= 1) {
      assignclasses.push(classes.red);
    }
    console.log(assignclasses);
    return (
      <div className={classes.App}>
        <h1 className={assignclasses.join(" ")}>
          hi welcome ,this is my first app going to develop
        </h1>
        <button className={btnclass} onClick={this.toggleHandler}>
          toggle the person
        </button>
        {persons}
        <hr />
        <input
          type="text"
          onChange={this.listtextchangehandler}
          value={this.state.userinput}
        />
        <p>{this.state.userinput}</p>
        <Listassignment userlen={this.state.userinput.length} />
        {word}
        {/* <Dynamicchange changed={this.onchangeHandler} val={this.state} /> */}
        <ColorChange />
        <StyledComponents />
        {/* <Webcamera /> */}
      </div>
      //React.createElement('div',{className:App},React.createElement('h1',null,'this is how our normal html gets compiled'));
    );
  }
}

export default App;
