import React from 'react';

import classes from './ClearButton.module.css';

const clearButton = () => {
    return (
        <input type="button" value="Clear" className={classes.ClearButton} />
    );
}

export default clearButton;