import React from 'react';

import classes from './Display.module.css';
const display = (props) => {
    return (
        <div className={classes.Display}>
            <p className={classes.Expression}>{props.expression}</p>
            <p className={classes.Input}>{props.value}</p>
        </div>
    );
}

export default display;