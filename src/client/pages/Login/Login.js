import React from 'react';
import { map } from 'lodash';
import {
  object,
  func,
} from 'prop-types';

import {
  FormContainer,
  Input,
  ButtonContainer,
  InputButton,
  LoginContainer,
  InputContainer,
  Label,
  Title,
  Logo,
  ForgetPasswordLink,
  Spliter,
  OmniauthContainer,
  OmniauthLogo,
  OmniauthLink,
  RegisterLinkContainer,
  RegisterLink,
  ErrorMessage,
  ErrorMessageContainer,
  Header,
} from './styles';
import {
  NOT_FOUND_ACCOUNT,
} from './constants';
import NotFoundCard from './NotFoundCard';
import { OmniauthLinks } from './OmniauthLinks';

const propTypes = {
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  handleSubmit: func.isRequired,
};

export const Login = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <LoginContainer>
    <Header>
      <Logo />
    </Header>
    <FormContainer onSubmit={handleSubmit}>
      <Title>Sign In</Title>
      {errors.all === NOT_FOUND_ACCOUNT && <NotFoundCard />}
      <InputContainer>
        <Label>Login</Label>
        <Input
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          error={errors.username || (errors.all && errors.all !== NOT_FOUND_ACCOUNT)}
        />
        <ErrorMessageContainer>
          {touched.username && errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <InputContainer>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
        />
        <ErrorMessageContainer>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <ButtonContainer>
        <ForgetPasswordLink to="/lost">Forgot your email or password?</ForgetPasswordLink>
        <InputButton type="submit">Sign In</InputButton>
        <Spliter />
        <OmniauthContainer>
          {map(OmniauthLinks, link => (
            <OmniauthLink key={link.id} onClick={() => window.location.replace(link.location)} >
              <OmniauthLogo logo={link.logo} />
            </OmniauthLink>
          ))}
        </OmniauthContainer>
        <RegisterLinkContainer>
          {'New to Hyperflix ?'}
          <RegisterLink to="/register" >Sign up now</RegisterLink>.
        </RegisterLinkContainer>
      </ButtonContainer>
    </FormContainer>
  </LoginContainer>
);

Login.propTypes = propTypes;
