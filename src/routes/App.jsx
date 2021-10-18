import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/Global.scss';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'
import RecoveryPassword from '../components/RecoveryPassword';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />  
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
