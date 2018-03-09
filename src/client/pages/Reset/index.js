import React, { Component } from 'react';
import _ from 'lodash';
import queryString from 'query-string';

import {
  LostContainer,
  FormContainer,
  Header,
  Logo,
  Title,
  Text,
  ButtonContainer,
  InputButton,
  LoginLink,
  BackIcon,
  InputContainer,
  Input,
  ErrorMessageContainer,
  ErrorMessage,
} from './styles';

import req from '../../request';
import { validateReset } from '../../validation';

class Lost extends Component {
  state = {
    password: '',
    errors: {},
  };

  handleChange = async ({ target: { name, value } }) => {
    const errors = validateReset({ [name]: value });
    const { errors: prevErrors } = this.state;
    if (prevErrors[name] && !errors) delete prevErrors[name];
    this.setState({ [name]: value, errors: { ...errors } });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { errors } = this.state;
    const { password } = this.state;
    if (!password.length) {
      this.setState(({ errors: { password: 'Veuillez remplir tout les champs' } }));
      return;
    }
    if (!_.isEmpty(errors)) {
      this.setState(({ errors: { password: 'Password Incorect' } }));
      return;
    }
    try {
      const { token = 'token' } = queryString.parse(window.location.search)
      await req.resetPassword(token, { password });
      window.location = '/';
    } catch (err) {
      console.log('err: ', err);
      this.setState(({ errors: { all: err.details } }));
    }
  }

  render() {
    const { password, errors } = this.state;

    return (
      <LostContainer>
        <Header>
          <Logo />
        </Header>
        <FormContainer onSubmit={this.handleSubmit}>
          <Title>Reset Password</Title>
          <Text>Type your new password</Text>
          <InputContainer>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              error={errors.password}
              placeholder="password"
            />
            <ErrorMessageContainer>
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <ButtonContainer>
            <InputButton type="submit">Reset Password</InputButton>
            <LoginLink to="/login">
              <BackIcon />
              Login
            </LoginLink>
          </ButtonContainer>
        </FormContainer>
      </LostContainer>
    );
  }
}

export default Lost;
