import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm/index'

import Home from './components/Home/index'
import Products from './components/Products/index'
import Cart from './components/Cart/index'
import NotFound from './components/NotFound/index'
import ProtectedRoute from './components/ProtectedRoute/index'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
