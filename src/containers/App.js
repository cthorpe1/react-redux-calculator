import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Layout from './Layout/Layout';
import { evaluate } from 'mathjs';

import classes from './App.module.css';

function App() {
  const initialState = {
    value : "0",
    expression: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "KEYPRESS":
        if(state.value === "0" && state.value.length === 1) {
          return {value: action.valueEntered};
        } else {
          return {value: state.value + action.valueEntered};
        }
      case "CLEAR":
        return {
          value : "0",
          expression: null
        };
      case "EVALUATE":
        let computedValue;
        try {
          computedValue = evaluate(state.value);
        } catch(err) {
          computedValue = "Error"
        }
        return {          
          value: computedValue,
          expression : state.value + "="
        };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  return (
    <Provider store={store}>
    <div className={classes.App}>
      <Layout />
    </div>
    </Provider>
  );
}

export default App;
