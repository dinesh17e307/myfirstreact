import React from "react";

import Person from "./Person";

class Persons extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("{Persons.js] shouldcomponentupdate", nextProps);
    if (nextProps !== this.props) return true;
    else return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getsnapshotbeforeupdate", prevProps);
    return {
      pervious: {
        Prevprops: prevProps,
        Prevstate: prevState,
      },
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js} componentwillUpdate");
    console.log(JSON.stringify(snapshot));
  }
  render() {
    console.log("[persons.js] render ");
    return this.props.person.map((e, indx) => {
      return (
        <Person
          click={() => this.props.clicked(indx)}
          key={e.id}
          names={e.nam}
          place={e.place}
          changed={(event) => this.props.changed(event, e.id)}
        />
      );
    });
  }
}

export default Persons;
