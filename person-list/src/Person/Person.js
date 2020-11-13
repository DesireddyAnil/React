import React from "react";
import './Person.css'

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        I'm {props.name} and my age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.onNameChange} value={props.name}></input>
    </div>
  );
};

export default person;
