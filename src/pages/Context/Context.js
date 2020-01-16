import React, { useState } from 'react';
import AuthContext from './auth-context';
import ContextAuth from '../../components/contextAuth/ContextAuth'
const Context = () => {

  const [authStatus, setAthStatus] = useState(false)

  const login = () => {
    setAthStatus(previous => !previous)
  }


  return (
    <AuthContext.Provider value={{ status: authStatus, login: login }}>
      <div className="container-fluid text-center">
        <h3>Context</h3>
        <hr />
        <ContextAuth />
      </div>
    </AuthContext.Provider>
  )
}
export default Context