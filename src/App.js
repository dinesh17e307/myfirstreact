import "./App.css";
import React from "react";
import Person from "./Components/Person";
import Dynamicchange from "./Components/Dynamicchange";
import Listassignment from "./Components/Listassignment";
import Char from "./Components/Char";
import ColorChange from "./Components/ColorChange";
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
    const style = {
      backgroundColor: "green",
      padding: "10px",
      border: "1px solid blue",
      color: "white",
      textAlign: "center",
    };
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
      style.backgroundColor = "red";
    }
    const classes = [];
    if (this.state.person.length >= 2) {
      classes.push("green");
    }
    if (this.state.person.length <= 1) {
      classes.push("red");
    }
    console.log(classes);
    return (
      <div className="App">
        <h1 className={classes.join(" ")}>
          hi welcome ,this is my first app going to develop
        </h1>
        <button style={style} onClick={this.toggleHandler}>
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
      </div>
      //React.createElement('div',{className:App},React.createElement('h1',null,'this is how our normal html gets compiled'));
    );
  }
}

export default App;
