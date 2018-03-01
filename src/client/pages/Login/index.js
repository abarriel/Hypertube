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
        <Label>E-mail</Label>
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
        {/* <LinkStyled to={`/register`}>
          Register
        </LinkStyled> */}
        <ForgetPasswordLink>E-mail ou mot de passe oublié ?</ForgetPasswordLink>
        <InputButton type="submit" value="S'identifier" />
        <Spliter />
        {/* <LostLink to={`/lost`}>Forgot my password</LostLink> */}
      </ButtonContainer>
    </FormContainer>
  </LoginContainer>
);

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
