import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

import { HomeView } from 'views/Home'
import { PreviewView } from 'views/Preview'

import { routeNames } from 'constants/index'

export const MainRoute = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route path={routeNames.preview} component={PreviewView} />
          <Route path={routeNames.home} exact component={HomeView} />
          
        </Switch>
      </div>
    </Router>
  )
}
