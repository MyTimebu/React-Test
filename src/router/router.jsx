import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Child from '../components/index';

function router() {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={Child} />
        </Switch>
    </Router>
  )
}

export default router
