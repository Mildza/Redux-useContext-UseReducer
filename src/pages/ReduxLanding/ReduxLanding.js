import React from 'react'
import { connect } from 'react-redux'

import ReduxLogs from '../../components/reduxLogs/ReduxLogs'
import * as actionType from '../../store/actions'

const ReduxLanding = ({ logged, toggleLogged, logs }) => {
  return (
    <div className="container w-50 my-5 text-center">
      {logged ? <h3>Wellcome to Redux!</h3> : <h3>Login</h3>}
      <button className="btn btn-primary my-3" onClick={toggleLogged}>{!logged ? 'Login' : 'Logout'}</button>
      <hr />
      <h3>Redux Loggs</h3>
      <ul className="list-group">
        {logs.map((el, index) => <ReduxLogs key={Math.random()} log={el} index={index} />)}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    logged: state.isLogged,
    logs: state.logs
  }
}

const mapDispatchToProps = disptach => {
  return { toggleLogged: () => disptach({ type: actionType.TOGGLE }) }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReduxLanding)