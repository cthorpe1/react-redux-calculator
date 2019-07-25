import React from 'react';

import classes from './Layout.module.css';

const layout = (props) => {
    return (
      <div class={classes.Layout}>
        {props.children}
      </div>
    );
};

export default layout;