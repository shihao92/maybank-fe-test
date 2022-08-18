import React from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"

import Home from './Home'

const ProjectRouter = ({ location }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } initialPath />
      </Switch>
    </BrowserRouter>
  )
}

export default ProjectRouter;