import React from 'react';
import DigitKey from '../../components/DigitKey/DigitKey';
import OperatorKey from '../../components/OperatorKey/OperatorKey';
import DecimalKey from '../../components/DecimalKey/DecimalKey';

import classes from './KeyGrid.module.css';

const keyGrid = (props) => {
    return (
        <div className={classes.KeyGrid}>
            <DigitKey value="7" />
            <DigitKey value="8" />
            <DigitKey value="9" />
            <OperatorKey value="/" />
            <DigitKey value="4" />
            <DigitKey value="5" />
            <DigitKey value="6" />
            <OperatorKey value="x" />
            <DigitKey value="1" />
            <DigitKey value="2" />
            <DigitKey value="3" />
            <OperatorKey value="-" />
            <DecimalKey value="." />
            <DigitKey value="0" />
            <OperatorKey value="=" />
            <OperatorKey value="+" />
        </div>
    )
};

export default keyGrid;