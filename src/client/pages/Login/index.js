import React from 'react';
import { withFormik } from 'formik';

import {
  FormContainer,
  Input,
  ButtonContainer,
  LinkStyled,
  InputButton,
  LostLink,
  LoginContainer,
  LogoContainer,
} from './styles';
import Logo from '../../components/Logo';
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
    <LogoContainer>
      <Logo height={45} width={167}/>
    </LogoContainer>
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      />
      {touched.username && errors.username && <div>{errors.username}</div>}
      <Input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <ButtonContainer>
        {/* <LinkStyled to={`/register`}>
          Register
        </LinkStyled> */}
        <InputButton type="submit" value="Login" />
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
