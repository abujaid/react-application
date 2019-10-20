import React, { Component } from 'react';
import Input from '../Fields/SingleInput';
import Button from '../Fields/Button';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authAction';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.error !== state.error) {
      return { errors: props.error };
    }
  }
  handleOnSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.register(user, this.props.history);
  };
  render() {
    const { name, email, password, password2, errors } = this.state;
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-6">
            <form action="" onSubmit={this.handleOnSubmit}>
              <p className="red-text">{errors.name}</p>
              <Input
                type="text"
                name="name"
                value={name}
                htmlFor="name"
                label="User Name"
                placeholder="User Name"
                controlFunc={this.handleOnChange}
                className={classnames('form-control', {
                  invalid: errors.name
                })}
              />
              <p className="red-text">{errors.email}</p>
              <Input
                type="email"
                name="email"
                value={email}
                htmlFor="email"
                label="Email"
                placeholder="Email"
                controlFunc={this.handleOnChange}
                className={classnames('form-control', {
                  invalid: errors.email
                })}
              />
              <p className="red-text">{errors.password}</p>
              <Input
                type="password"
                name="password"
                value={password}
                htmlFor="password"
                label="password"
                placeholder="Password"
                controlFunc={this.handleOnChange}
                className={classnames('form-control', {
                  invalid: errors.password
                })}
              />
              <p className="red-text">{errors.password2}</p>
              <Input
                type="password"
                name="password2"
                value={password2}
                htmlFor="password2"
                label="password2"
                placeholder="Confirm Password"
                controlFunc={this.handleOnChange}
                className={classnames('form-control', {
                  invalid: errors.password2
                })}
              />
              <div className="form-group">
                <Button type="submit" className="btn btn-primary" buttonName="Register" />
              </div>
              <div className="form-group">
                <p>
                  Have you alredy account?<Link to="/login">Login</Link>
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
    error: state.error
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { register }
  )(Register)
);
