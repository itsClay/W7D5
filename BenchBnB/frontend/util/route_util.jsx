import withRouter from 'react-router';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}></Route>
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser )};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
