import React from 'react';

const Validation = (props) => {

    let validationMessage = "text long enough.";

    if(props.userInputLength <=5 ){
        validationMessage = "text too short !!!"
    }

    return <p>{validationMessage}</p>
}

export default Validation;