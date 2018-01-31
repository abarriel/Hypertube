import React, { Component } from 'react';
import _ from 'lodash';

import { FormContainer, Input, ButtonContainer, LinkStyled, InputButton, LostLink } from './styles';
import { validateUser } from '../../validation';
import req from '../../request';

class Register extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    profilePicture: undefined,
    errors: {},
  }

  handleChange = async ({ target: { name, value, files } }) => {
    const errors = validateUser({ [name]: value });
    if (name === 'profilePicture') {
      const file = files[0];
      if (!file) return false;
      const img = new Image();
      img.onload = () => this.setState({ profilePicture: file });
      img.onerror = () => this.setState({ errors: { ...errors, profilePicture: 'Not an image' } });
      const _URL = window.URL || window.webkitURL;
      img.src = _URL.createObjectURL(file);
    } else {
      this.setState({ [name]: value, errors });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { errors } = this.state;
    const user = _.omit(this.state, ['errors']);
    if (!_.isEmpty(errors) || !_.isEmpty(_.pickBy(user, _.isNil))) return;
    try {
      await req.register(user);
      window.location = '/';
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { username, password, email, firstName, lastName, errors } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Input type="text" name="username" onChange={this.handleChange} value={username} required />
        { errors.username && <div>{errors.username}</div>}
        <Input type="password" name="password" onChange={this.handleChange} value={password} required />
        { errors.password && <div>{errors.password}</div>}
        <Input type="email" name="email" onChange={this.handleChange} value={email} required />
        { errors.email && <div>{errors.email}</div>}
        <Input type="text" name="firstName" onChange={this.handleChange} value={firstName} required />
        { errors.firstName && <div>{errors.firstName}</div>}
        <Input type="text" name="lastName" onChange={this.handleChange} value={lastName} required />
        { errors.lastName && <div>{errors.lastName}</div>}
        <Input type="file" accept="image/*" name="profilePicture" onChange={this.handleChange} required />
        { errors.profilePicture && <div>{errors.profilePicture}</div>}
        <ButtonContainer>
          {/* <LinkStyled to={`/register`}>
            Register
          </LinkStyled> */}
          <InputButton type="submit" value="Register" />
          {/* <LostLink to={`/lost`}>Forgot my password</LostLink> */}
        </ButtonContainer>
      </FormContainer>);
  }
}

// Wrap our form with the using withFormik HoC
export default Register;
