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
      this.setState(({ errors: { email: 'Veuillez remplir tout les champs' } }));
      return;
    }
    if (!_.isEmpty(errors)) {
      this.setState(({ errors: { email: 'Email Incorect' } }));
      return;
    }
    try {
      await req.lostPassword({ email });
      window.location = '/';
    } catch (err) {
      console.log('err: ', err);
      this.setState(({ errors: { all: err.details } }));
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
          <Title>Mot de passe Oublié</Title>
          <Text>Nous allons vous envoyer un email avec les instructions nécessaire pour réinitialiser votre mot de passe.</Text>
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
            <InputButton type="submit">Envoyer un Email</InputButton>
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
