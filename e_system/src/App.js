import React from 'react';
import Header from "./components/Header"
import "./App.css"
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Formheader from './components/Formheader';
import Centeredtabs from './components/Tabs';
import Question_form from './components/Question_form';
import Userform from './components/Userform';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form/:id">
            <Formheader />
            <Centeredtabs />
          </Route>
          <Route path="/response">
            <Userform/>
          </Route>
          <Route path="/">
            <Header />
            <Template />
            <Mainbody />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
