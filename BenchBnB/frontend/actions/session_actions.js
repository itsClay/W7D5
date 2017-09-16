import * as APIUtil from '../util/session_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveUser = (currentUser) => ({
  type: RECEIVE_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    receivedUser => dispatch(receiveUser(receivedUser)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveUser( null )),
    errors => dispatch(receiveErrors(errors))
  );
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(
    (receivedUser) => dispatch(receiveUser( receivedUser )),
    errors => dispatch(receiveErrors(errors))
  );
};
