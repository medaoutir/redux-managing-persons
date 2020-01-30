import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class PersonsComponent extends Component {

  render() {
    const { prs, personAddedHandler, personDeletedHandler } = this.props;
    return (
      <div>
        <AddPerson personAdded={() => personAddedHandler(prs)} />
        {prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => personDeletedHandler(prs, person.id)}
          />
        ))}
      </div>
    );
  }
}

export default PersonsComponent;
