import React, { Component } from 'react';
import Input from '../Fields/SingleInput';
import Button from '../Fields/Button';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { login } from '../../store/actions/authAction';
import { withRouter, Link } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  static getDerivedStateFromProps(props, state) {
    if (props.error !== state.error) {
      return { errors: props.error };
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user, this.props.history);
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/admin/dashboard');
    }
  }
  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-6">
            <form action="" onSubmit={this.handleSubmit}>
              <p className="red-text">{errors.email}</p>
              <Input
                type="text"
                name="email"
                htmlFor="email"
                value={email}
                label="Email"
                placeholder="Email"
                controlFunc={this.handleChange}
                className={classnames('form-control', {
                  invalid: errors.email
                })}
              />
              <p className="red-text">{errors.password}</p>
              <Input
                type="password"
                name="password"
                htmlFor="password"
                value={password}
                label="Password"
                placeholder="Password"
                controlFunc={this.handleChange}
                className={classnames('form-control', {
                  invalid: errors.password
                })}
              />
              <Button type="submit" className="btn btn-primary" buttonName="Login" />
              <div className="form-group">
                <p>
                  Don't have an account?<Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
