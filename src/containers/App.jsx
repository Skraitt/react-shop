import React from 'react'
import '../assets/styles/Global.scss';
import Layout from '../components/Layout';
import Login from '../components/Login';
import RecoveryPassword from '../components/RecoveryPassword';

export default function App() {
  return (
    <div>
      <Layout>
        <Login />
        <RecoveryPassword />
      </Layout>
    </div>
  )
}
