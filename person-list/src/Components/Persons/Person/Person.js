import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";
import AuthContext from "../../../Context/AuthContext";
//import Radium from 'radium';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElemRef = React.createRef(); // in functional components we can use useRefHook
  }

  componentDidMount() {
    this.inputElemRef.current.focus(); // in functional components we can implement this step(or similar steps) inside useEffect
  }

  render() {
    console.log("[Person.js] render");
    return (
      <StyledDiv>
        <AuthContext.Consumer>
          {(context) =>
            context.isLoggedIn ? <p>Authenticated</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>{/* for class components we can use [[static contextType = AuthContext]] and tap into [[this.context]] instead of using JSX element like here*/}
        {/* fot functional components we can use [[const anyName = useContext(AuthContext)]] and tap into [[anyName]] to use the AuthContext properties*/}

        <p onClick={this.props.click}>
          I'm {this.props.name} and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElemRef}
          type="text"
          onChange={this.props.onNameChange}
          value={this.props.name}
          width="50%"
        ></input>
      </StyledDiv>
    );
  }
}

//export default Radium(person);
export default Person;
