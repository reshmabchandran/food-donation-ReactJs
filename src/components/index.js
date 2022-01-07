import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import App from './App'
import Register from './Register'
import Login from './Login'

const routs = (
   < BrowserRouter >
      <div>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/register">Register</Link>
            </li>
            <li>
               <Link to="/login">Login</Link>
            </li>
         </ul>
         <Switch>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            
         </Switch>
      </div>
   </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'));