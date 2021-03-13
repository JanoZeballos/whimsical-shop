import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

//Import components
//import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import E404 from './components/E404';

function App() {

  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      {/*<Navbar />*/}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='*' exact component={E404} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
