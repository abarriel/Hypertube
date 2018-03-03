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
    if (name === 'profilePicture') {
      const file = files[0];
      if (!file) return false;
      const img = new Image();
      img.onload = () => this.setState({ profilePicture: file });
      img.onerror = () => this.setState({ errors: { ...errors, profilePicture: 'Not an image' } });
      const _URL = window.URL || window.webkitURL;
      img.src = _URL.createObjectURL(file);
    } else {
      this.setState({ [name]: value, errors: { ...this.state.errors, ...errors } });
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
      <RegisterContainer>
        <Header>
          <Logo />
        </Header>
        <FormContainer onSubmit={this.handleSubmit}>
          <Title>{'S\'enregistrer'}</Title>
          <InputContainer>
            <Label>Login</Label>
            <Input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={username}
              error={errors.username || errors.all}
            />
            <ErrorMessageContainer>
              {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Mot de passe</Label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
              error={errors.password || errors.all}
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
              error={errors.email || errors.all}
            />
            <ErrorMessageContainer>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Prenom</Label>
            <Input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={firstName}
              error={errors.firstName || errors.all}
            />
            <ErrorMessageContainer>
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Nom</Label>
            <Input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={lastName}
              error={errors.lastName || errors.all}
            />
            <ErrorMessageContainer>
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Avatar</Label>
            <InputFileContainer>
              <InputFile type="file" accept="image/*" id="profilePicture" name="profilePicture" onChange={this.handleChange} required />
              <label htmlFor="profilePicture"><DownLoadIcon />Choose a file </label>
              {errors.profilePicture && <ErrorMessage>{errors.profilePicture}</ErrorMessage>}
            </InputFileContainer>
            {errors.profilePicture && <div>{errors.profilePicture}</div>}
          </InputContainer>
          <ButtonContainer>
            <InputButton type="submit">{'S\'enregistrer'}</InputButton>
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

