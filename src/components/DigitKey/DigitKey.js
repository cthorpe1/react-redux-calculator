import React from 'react';

const digitKey = (props) => {
    const handleClick = (e) => {
        props.dispatch({type: "KEYPRESS", valueEntered: e.target.value});
    };
    
    return (
        <input type="button" value={props.value} onClick={handleClick}  />
    );
};

export default digitKey;