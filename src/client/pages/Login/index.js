import React from 'react';
import { withFormik } from 'formik';

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
} from './styles';
import req from '../../request';
import { UserSchema } from '../../validation';
// Higher Order Component

// Our inner form component which receives our form's state and updater methods as props
const Login = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <LoginContainer>
    <Logo />
    <FormContainer onSubmit={handleSubmit}>
      <Title>{'S\'identifier'}</Title>
      <InputContainer>
        <Label>Login</Label>
        <Input
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
      </InputContainer>
      {touched.username && errors.username && <div>{errors.username}</div>}
      <InputContainer>
        <Label>Mot de passe</Label>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </InputContainer>
      {touched.password && errors.password && <div>{errors.password}</div>}
      <ButtonContainer>
        <ForgetPasswordLink to="/lost">E-mail ou mot de passe oublié ?</ForgetPasswordLink>
        <InputButton type="submit" value="S'identifier" />
        <Spliter />
        <OmniauthContainer>
          <OmniauthLink
            onClick={() => {
              req.authOmi('facebook');
            }}
          >
            <OmniauthLogo logo="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
            {'S\'identifier avec Facebook'}
          </OmniauthLink>
          <OmniauthLink
            onClick={() => {
              req.authOmi('42');
            }}
          >
            <OmniauthLogo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/2000px-42_Logo.svg.png" />
            {'S\'identifier avec 42'}
          </OmniauthLink>
          <OmniauthLink
            onClick={() => {
              req.authOmi('google');
            }}
          >
            <OmniauthLogo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/2000px-42_Logo.svg.png" />
            {'S\'identifier avec google'}
          </OmniauthLink>
          <OmniauthLink
            onClick={() => {
              req.authOmi('twitter');
            }}
          >
            <OmniauthLogo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/2000px-42_Logo.svg.png" />
            {'S\'identifier avec twitter'}
          </OmniauthLink>
          <OmniauthLink
            onClick={() => {
              req.authOmi('github');
            }}
          >
            <OmniauthLogo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/2000px-42_Logo.svg.png" />
            {'S\'identifier avec github'}
          </OmniauthLink>
        </OmniauthContainer>
        <RegisterLinkContainer>
          {'Première visite sur Hyperflix ?'}
          <RegisterLink to="/register" > Inscrivez-vous</RegisterLink>.
        </RegisterLinkContainer>
      </ButtonContainer>
    </FormContainer>
  </LoginContainer>
);

// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: () => ({ username: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  // validationSchema: UserSchema,
  // Submission handler
  handleSubmit: async (
    values,
    {
      // props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    },
  ) => {
    try {
      await req.login(values);
      window.location = '/';
    } catch (err) {
      console.log(err);
      // setErrors(err);
    }
    // const d = await req.isAuth();
    // console.log(d);
    //   user => {
    //     setSubmitting(false);
    //     // do whatevs...
    //     // props.updateUser(user)
    //   },
    //   errors => {
    //     setSubmitting(false);
    //     // Maybe even transform your API's errors into the same shape as Formik's!
    //   }
    // );
  },
})(Login);

export default MyForm;
