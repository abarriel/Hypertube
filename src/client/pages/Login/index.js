import React from 'react';
import { withFormik } from 'formik';
import { isEmpty } from 'lodash';
import {
  object,
  bool,
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
} from './styles';
import req from '../../request';
import { UserSchema } from '../../validation';
// Higher Order Component

const propTypes = {
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
};

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
        <ErrorMessageContainer>
          {touched.username && errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <InputContainer>
        {console.log('errors: ', errors)}
        <Label>Mot de passe</Label>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <ErrorMessageContainer>
          {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <ButtonContainer>
        <ForgetPasswordLink to="/lost">E-mail ou mot de passe oublié ?</ForgetPasswordLink>
        <InputButton disabled={isSubmitting || !isEmpty(errors)} type="submit">{'S\'identifier'}</InputButton>
        <Spliter />
        <OmniauthContainer>
          <OmniauthLink onClick={() => window.location.replace('http://localhost:8888/api/auth/facebook')} >
            <OmniauthLogo logo="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
          </OmniauthLink>
          <OmniauthLink onClick={() => window.location.replace('http://localhost:8888/api/auth/42')} >
            <OmniauthLogo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/2000px-42_Logo.svg.png" />
          </OmniauthLink>
          <OmniauthLink onClick={() => window.location.replace('http://localhost:8888/api/auth/google')} >
            <OmniauthLogo logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png" />
          </OmniauthLink>
          <OmniauthLink onClick={() => window.location.replace('http://localhost:8888/api/auth/twitter')} >
            <OmniauthLogo logo="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1259px-Twitter_Bird.svg.png" />
          </OmniauthLink>
          <OmniauthLink onClick={() => window.location.replace('http://localhost:8888/api/auth/github')} >
            <OmniauthLogo logo="https://image.flaticon.com/icons/svg/25/25231.svg" />
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

Login.propTypes = propTypes;

// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: () => ({ username: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  validationSchema: UserSchema,
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
      window.location.replace('/');
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
