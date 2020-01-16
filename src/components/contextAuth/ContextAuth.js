import React, { useContext } from 'react';
import AuthContext from '../../pages/Context/auth-context'

const ContextAuth = () => {

  const auth = useContext(AuthContext)
  return (
    <>
      <button className="btn btn-primary my-3" onClick={auth.login}>authContext</button>
      {auth.status ? <h3>Admin</h3> : <h4>User</h4>}
    </>
  )
}

export default ContextAuth