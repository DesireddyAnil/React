import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // commenting out. as there is no state required for this component
  /*static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/

  shouldComponentUpdate(nextProps, nextState) {
    // if we need to check for all the props then it's better to extend pureComponent instead of implementint shouldComponentUpdate
    console.log("[Persons.js] shouldComponentUpdate");
    return this.props !== nextProps;
  }

  render() {
    console.log("[Persons.js] render");
    return (
      <div>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              onNameChange={(event) => this.props.changed(event, person.id)}
            />
          );
        })}
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "from getSnapshotBeforeUpdate" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }
}

export default Persons;
