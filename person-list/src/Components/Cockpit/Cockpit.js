import React, { useEffect, useRef } from "react";
import AuthContext from "../../Context/AuthContext";
import { StyledParagraph, StyledButton } from "./styles";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanUp");
    };
  }, []);
  return (
    <div>
      <h1 className="App-title">Hi, imma react app</h1>
      <StyledParagraph items={props.personsLength}>
        I show list of persons
      </StyledParagraph>
      <StyledButton
        ref={toggleBtnRef}
        alt={props.showPersons ? "SHOW" : "DONT_SHOW"}
        onClick={props.clicked}
      >
        Toggle persons
      </StyledButton>
      <AuthContext.Consumer>
        {(context) => (
          <StyledButton onClick={context.login}>Log in</StyledButton>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit); // equivalent of shouldComponentUpdate
