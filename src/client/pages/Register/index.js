import React, { Component } from 'react';
import { withFormik } from 'formik';
import _ from 'lodash';
import {
  func,
  object,
} from 'prop-types';

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
} from './styles';
import { validateUser } from '../../validation';
import req from '../../request';

const propTypes = {
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  values: object.isRequired,
};
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
      this.setState({ [name]: value, errors });
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
    const { handleChange, handleBlur, values, touched} = this.props;
    return (
      <RegisterContainer>
        <Logo />
        <FormContainer onSubmit={this.handleSubmit}>
          <Title>{'S\'enregistrer'}</Title>
          <InputContainer>
            <Label>Login</Label>
            <Input
              type="text"
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={errors.username || errors.all}
            />
            <ErrorMessageContainer>
              {touched.username && errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Mot de passe</Label>
            <Input
              type="text"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password || errors.all}
            />
            <ErrorMessageContainer>
              {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email || errors.all}
            />
            <ErrorMessageContainer>
              {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Prenom</Label>
            <Input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              error={errors.firstName || errors.all}
            />
            <ErrorMessageContainer>
              {touched.firstName && errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Label>Nom</Label>
            <Input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              error={errors.lastName || errors.all}
            />
            <ErrorMessageContainer>
              {touched.lastName && errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </ErrorMessageContainer>
          </InputContainer>
          <InputContainer>
            <Input type="file" accept="image/*" name="profilePicture" onChange={this.handleChange} required />
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
};

Register.propTypes = propTypes;

// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: () => ({
    login: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  }),
  // Add a custom validation function (this can be async too!)
  // Submission handler
  handleSubmit: async (
    values,
    {
      // props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    },
  ) => {
    console.log('submit values: ', values);
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
})(Register);

export default MyForm;

