import React from 'react';

import classes from './ClearButton.module.css';

const clearButton = (props) => {
    const handleClick = (e) => {
        props.dispatch({type:"CLEAR"});
    };
    return (
        <input type="button" value="Clear" className={classes.ClearButton} onClick={handleClick} />
    );
};

export default clearButton;