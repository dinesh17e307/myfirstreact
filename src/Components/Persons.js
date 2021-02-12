import React from "react";

import Person from "./Person";

class Persons extends React.Component {
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
