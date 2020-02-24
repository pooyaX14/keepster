import React from 'react';

import Header from './containers/Header'
import Layout from './containers/Layout'
import EditModalBox from './containers/EditModalBox'
import Overlay from './containers/EditModalBox/Overlay';


function App() {
  return (
    <div className="app">
        <Header />
        <Layout />
        <Overlay />
        <EditModalBox />
    </div>
  );
}

export default App;
