// import { combineReducers } from 'redux';
import {  RECEIVE_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const DEFAULT =  {
  currentUser: null
};

const SessionReducer = (state = DEFAULT, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, action.currentUser);
    default:
      return state;
  }
};


export default SessionReducer;
