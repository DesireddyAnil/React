import React, { /*useState*/ Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// through out this course we will follow class components only as it is pretty established practice

// class component
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "anil", age: 25 },
      { id: 2, name: "someone", age: 26 },
    ],
    otherState: "otherStateValue",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons].filter(
      (_, index) => personIndex !== index
    ); // work on duplicate data to make sure original data is not being disturbed as it might lead to crashes when other components are using the same data
    this.setState({
      persons,
    });
  };

  onNameChange = (event, personId) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === personId
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons,
    });
  };

  togglePersonsHandler = () => {
    const doShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doShowPersons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      padding: "8px",
      font: "inherit",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                onNameChange={(event) => this.onNameChange(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hi, imma react app</h1>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle persons
          </button>
          {persons}
        </header>
      </div>
    );
  }
}

// function component
/*
const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "anil", age: 25 },
      { name: "someone", age: 26 },
    ],
  });

  // we are using use state for each of state properties used in class component bcz setSate in fxn component donot merge with old state
  const [otherState, setOtherState] = useState({
    otherState: "otherStateValue",
  });

  const swithNameHandler = (name) => {
    setPersonsState({
      // this new state is not automatically merged with old state ( meaning if any properties other than persons is  present after setState is executed it will not be present)
      persons: [
        { name: "anil", age: 25 },
        { name: name, age: 26 },
      ],
    });
  };

  const onNameChange = (event) => {
    const name = event.target.value;
    setPersonsState({
      persons: [
        { name: "anil", age: 25 },
        { name: name, age: 26 },
      ],
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hi, imma react app</h1>
        <button onClick={() => swithNameHandler("someOtherPerson")}>
          click me
        </button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        {/* if no other components are to be nested in the Component then self closing tag is sufficient 
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          onNameChange={onNameChange}
        >
          My Hobbies: ble
        </Person>
        {/* if there is content or components nested in a component then a closing tag is needed and the nested components can be acessed inside the component itself using props.children 
      </header>
    </div>
  );
};
*/

export default App;
