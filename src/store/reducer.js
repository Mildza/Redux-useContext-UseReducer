import * as actionType from '../store/actions'


const initialState = {
  isLogged: false,
  logs: []
}

const timeStamp = () => {
  const today = new Date();
  const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + ' ' + time;
}

const reducer = (state = initialState, action) => {
  if (action.type === actionType.TOGGLE) {
    return {
      ...state,
      isLogged: !state.isLogged,
      logs: state.logs.concat(!state.isLogged ? 'logged in : ' + timeStamp() : 'logged out: ' + timeStamp())
    }
  } else if (action.type === actionType.DELETE_LOG) {
    return {
      ...state,
      logs: state.logs.filter((el, index) => index !== action.id)
    }
  }
  return state
}

export default reducer