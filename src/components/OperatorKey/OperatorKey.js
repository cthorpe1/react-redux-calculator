import React from 'react';

const operatorKey = (props) => {
    const handleClick = (e) => {
        if (e.target.value === "=") {
          props.dispatch({type:"EVALUATE"});
        } else {
          props.dispatch({type:"KEYPRESS", valueEntered: e.target.value});
        }
    };
    
    return (
        <input type="button" value={props.value} onClick={handleClick} />
    );
}

export default operatorKey;