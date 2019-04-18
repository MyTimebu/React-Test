import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Child from '../components/index';
import Home from '../components/home';

function router() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Child} />
        </Switch>
    </Router>
  )
}

export default router
