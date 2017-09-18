import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  noSession(logout) {
    return (
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  withSession(currentUser, logout) {
    return (
      <div>
        <p>Welcome, {currentUser.username}</p>
        <button
          onClick={logout}>Logout</button>
      </div>
    );
  }

  render(){
    const { currentUser, logout } = this.props;

    return  (
      currentUser ?
        this.withSession(currentUser, logout) : this.noSession(logout)
    );
  }
}

export default Greeting;
