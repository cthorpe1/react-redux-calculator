import React from 'react';
import { connect } from 'react-redux';
import Display from '../../components/Display/Display';
import KeyGrid from '../KeyGrid/KeyGrid';
import ClearButton from '../../components/ClearButton/ClearButton';

import classes from './Layout.module.css';

const Layout = (props) => {

    return (
      <div className={classes.Layout}>
        <Display value={props.value} expression={props.expression} />
        <ClearButton dispatch={props.dispatch} />
        <KeyGrid dispatch={props.dispatch}/>
      </div>
    );
};

const mapStateToProps = (state) => ({
  value : state.value,
  expression : state.expression
});

export default connect(mapStateToProps)(Layout);