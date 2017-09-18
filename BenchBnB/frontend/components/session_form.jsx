import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNavItems = this.renderNavItems.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderNavItems() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((e, idx) => <li key={`error-${idx}`}>{ e }</li>)
        }
      </ul>
    );
  }

  update(field) {
    console.log(this.state);
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div>
        { this.renderNavItems() }
        { this.renderErrors() }
        <form onSubmit={this.handleSubmit}>
          <label> Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}></input>
          </label>
          <label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}></input>
          </label>
          <input type="submit" value={this.pro}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
