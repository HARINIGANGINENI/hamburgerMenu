import {Route, Switch, Redirect} from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import NotFound from '../NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/not-found" component={NotFound} />
  </Switch>
)

export default App
