import React, { Component } from 'react';
import _ from 'lodash';
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
import { validateLost } from '../../validation';

class Lost extends Component {
  state = {
    email: '',
    errors: {},
  };

  handleChange = async ({ target: { name, value } }) => {
    const errors = validateLost({ [name]: value });
    const { errors: prevErrors } = this.state;
    if (prevErrors[name] && !errors) delete prevErrors[name];
    this.setState({ [name]: value, errors: { ...errors } });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { errors } = this.state;
    const { email } = this.state;
    if (!email.length) {
      this.setState(({ errors: { email: 'Required' } }));
      return;
    }
    if (!_.isEmpty(errors)) {
      this.setState(({ errors: { email: 'Incorect Email' } }));
      return;
    }
    try {
      await req.lostPassword({ email });
      window.location = '/';
    } catch (err) {
      this.setState(({ errors: { email: err.details } }));
    }
  }

  render() {
    const { email, errors } = this.state;

    return (
      <LostContainer>
        <Header>
          <Logo />
        </Header>
        <FormContainer onSubmit={this.handleSubmit}>
          <Title>Forgot Password</Title>
          <Text>We will send you an email with instructions on how to reset your password.</Text>
          <InputContainer>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              error={errors.email}
              placeholder="name@example.com"
            />
            <ErrorMessageContainer>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <ButtonContainer>
            <InputButton type="submit">Email Me</InputButton>
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
