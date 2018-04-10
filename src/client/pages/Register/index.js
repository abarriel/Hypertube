import React, { Component } from 'react';
import _ from 'lodash';

import {
  RegisterContainer,
  FormContainer,
  Input,
  ButtonContainer,
  InputButton,
  Logo,
  InputContainer,
  Label,
  Title,
  ErrorMessageContainer,
  ErrorMessage,
  LoginLink,
  BackIcon,
  Header,
  InputFile,
  DownLoadIcon,
  InputFileContainer,
} from './styles';
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
    const { errors: prevErrors } = this.state;
    if (prevErrors[name] && !errors) delete prevErrors[name];
    if (name === 'profilePicture') {
      const file = files[0];
      if (!file) return false;
      const img = new Image();
      img.onload = () => this.setState({ profilePicture: file });
      img.onerror = () => this.setState({ errors: { ...errors, profilePicture: 'Not an image' } });
      const _URL = window.URL || window.webkitURL;
      img.src = _URL.createObjectURL(file);
    } else this.setState({ [name]: value, errors: { ...errors, ...prevErrors } });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { errors } = this.state;
    const user = _.omit(this.state, ['errors']);
    if (errors.all && _.keys(errors).length === 1) delete errors.all;
    if (!_.isEmpty(errors) || !_.isEmpty(_.pickBy(user, _.isNil))) {
      this.setState(({ errors: { ...errors, all: 'Veuillez remplir tout les champs' } }));
      return;
    }
    try {
      const bodyFormData = new FormData();
      _.map(user, (value, key) => { bodyFormData.set(key, value); });
      await req.register(bodyFormData);
      window.location = '/';
    } catch (err) {
      this.setState(({ errors: { all: err.details } }));
    }
  }

  render() {
    const { username, password, email, firstName, lastName, errors } = this.state;
    return (
      <RegisterContainer>
        <Header>
          <Logo />
        </Header>
        <FormContainer onSubmit={this.handleSubmit}>
          <Title>Sign Up</Title>
          <InputContainer>
            <Label>Login</Label>
            <Input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={username}
              error={errors.username || (errors.all && !username)}
            />
            <ErrorMessageContainer>
              {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
              error={errors.password || (errors.all && !password)}
            />
            <ErrorMessageContainer>
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={email}
              error={errors.email || (errors.all && !email)}
            />
            <ErrorMessageContainer>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>First Name</Label>
            <Input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={firstName}
              error={errors.firstName || (errors.all && !firstName)}
            />
            <ErrorMessageContainer>
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={lastName}
              error={errors.lastName || (errors.all && !lastName)}
            />
            <ErrorMessageContainer>
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Avatar</Label>
            <InputFileContainer>
              <InputFile type="file" accept="image/*" id="profilePicture" name="profilePicture" onChange={this.handleChange} />
              <label htmlFor="profilePicture"><DownLoadIcon />Choose a file </label>
              {errors.profilePicture && <ErrorMessage>{errors.profilePicture}</ErrorMessage>}
            </InputFileContainer>
            {errors.profilePicture && <ErrorMessage>{errors.profilePicture}</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <ErrorMessageContainer>
              {errors.all && <ErrorMessage>{errors.all}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <ButtonContainer>
            <InputButton type="submit">Sign Up</InputButton>
            <LoginLink to="/login">
              <BackIcon />
              Login
            </LoginLink>
          </ButtonContainer>
        </FormContainer>
      </RegisterContainer>
    );
  }
}

export default Register;
