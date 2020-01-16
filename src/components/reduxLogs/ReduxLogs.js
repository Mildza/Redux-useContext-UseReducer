import React from 'react'
import { connect } from 'react-redux'
import './ReduxLogs.css'
import * as actionType from '../../store/actions'

const ReduxLogs = ({ logged, log, deleteLog, index }) => {
  return (

    <li className="list-group-item" onClick={() => deleteLog(index)}>{log}</li>

  )
}
const mapStateToProps = (state) => {
  return { logged: state.isLogged }
}

const mapDispatchToProps = disptach => {
  return { deleteLog: (index) => disptach({ type: actionType.DELETE_LOG, id: index }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxLogs)