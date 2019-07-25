import React from 'react';
import Layout from './Layout/Layout';
import DisplayArea from './DisplayArea/DisplayArea';
import KeyGrid from './KeyGrid/KeyGrid';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <DisplayArea />
        <KeyGrid />
      </Layout>
    </div>
  );
}

export default App;
