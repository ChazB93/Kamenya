import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from "./components/pages/Home";
import Vision from './components/pages/Vision';
import Interventions from "./components/pages/Interventions";
import Team from './components/pages/Team';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Vision" component={Vision} />
          <Route path="/Interventions" component={Interventions} />
          <Route path="/Team" component={Team} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
