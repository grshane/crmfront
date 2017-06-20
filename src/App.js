import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  MenuExampleBasic  from './components/menu/menu';

import LeadForm from './components/lead-form/lead-form';
import ActionForm from './components/action-form/action-form';
import Lead from './containers/Lead';
import LeadType from './containers/LeadType';
import Action from './containers/Action';
import AdminGrid from './containers/Admin';


import 'react-dates/lib/css/_datepicker.css';
import './App.css';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuExampleBasic></MenuExampleBasic>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/lead/add' component={LeadForm} />
          <Route exact path='/lead' component={Lead} />
          <Route path='/admin/lead-type' component={LeadType} />
          <Route exact path='/action' component={Action} />
          <Route exact path='/action/add' component={ActionForm} />
          <Route path='/admin' component={AdminGrid} />
        </Switch>
      </div>
    );
  }
}

export default App;
