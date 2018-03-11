import React from 'react';
import { withFormik } from 'formik';
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
  EMPTY_REQUEST,
  PASSWORD_EMPTY,
} from './constants';
import NotFoundCard from './NotFoundCard';
import req from '../../request';
import { UserSchema } from '../../validation';

const propTypes = {
  values: object.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  handleSubmit: func.isRequired,
};

const Login = ({
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
          {'New to Hyperflix ?'}
          <RegisterLink to="/register" >Sign up now</RegisterLink>.
        </RegisterLinkContainer>
      </ButtonContainer>
    </FormContainer>
  </LoginContainer>
);

Login.propTypes = propTypes;

const MyForm = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  validationSchema: UserSchema,
  handleSubmit: async (
    values,
    {
      setFieldError,
      setErrors,
    },
  ) => {
    try {
      await req.login(values);
      window.location.replace('/');
    } catch (err) {
      if (err.details[0].message === PASSWORD_EMPTY) {
        setFieldError('password', 'Your password must contain between 4 and 60 characters.');
      } else if (err.details[0].type === EMPTY_REQUEST) {
        setErrors({
          username: 'Please enter a valid login.',
          password: 'Your password must contain between 4 and 60 characters.',
          all: 'error',
        });
      } else if (err.details === NOT_FOUND_ACCOUNT) {
        setFieldError('all', NOT_FOUND_ACCOUNT);
      }
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
