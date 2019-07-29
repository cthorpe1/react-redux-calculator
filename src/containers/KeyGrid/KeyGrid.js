import React from 'react';
import DigitKey from '../../components/DigitKey/DigitKey';
import OperatorKey from '../../components/OperatorKey/OperatorKey';
import DecimalKey from '../../components/DecimalKey/DecimalKey';

import classes from './KeyGrid.module.css';

const keyGrid = (props) => {
    return (
        <div className={classes.KeyGrid}>
            <DigitKey value="7" dispatch={props.dispatch} />
            <DigitKey value="8" dispatch={props.dispatch}/>
            <DigitKey value="9" dispatch={props.dispatch}/>
            <OperatorKey value="/" dispatch={props.dispatch}/>
            <DigitKey value="4" dispatch={props.dispatch}/>
            <DigitKey value="5" dispatch={props.dispatch}/>
            <DigitKey value="6" dispatch={props.dispatch}/>
            <OperatorKey value="*" dispatch={props.dispatch}/>
            <DigitKey value="1" dispatch={props.dispatch}/>
            <DigitKey value="2" dispatch={props.dispatch}/>
            <DigitKey value="3" dispatch={props.dispatch} />
            <OperatorKey value="-" dispatch={props.dispatch}/>
            <DecimalKey value="." dispatch={props.dispatch}/>
            <DigitKey value="0" dispatch={props.dispatch}/>
            <OperatorKey value="=" dispatch={props.dispatch}/>
            <OperatorKey value="+" dispatch={props.dispatch}/>
        </div>
    )
};

export default keyGrid;