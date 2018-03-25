import React from 'react';
import {
  func,
  object,
} from 'prop-types';

import {
  EditProfilContainer,
  FormContainer,
  Title,
  Label,
  InputContainer,
  Input,
  ErrorMessageContainer,
  ErrorMessage,
  ButtonContainer,
  InputButton,
} from './styles';

const propTypes = {
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: object.isRequired,
  values: object.isRequired,
  touched: object.isRequired,
};

const EditProfil = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => (
  <EditProfilContainer>
    <FormContainer onSubmit={handleSubmit}>
      <Title>Update My Account</Title>
      <InputContainer>
        <Label>Login</Label>
        <Input
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          error={errors.username}
        />
        <ErrorMessageContainer>
          {touched.username && errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <InputContainer>
        <Label>First Name</Label>
        <Input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          error={errors.firstName}
        />
        <ErrorMessageContainer>
          {touched.firstName && errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <InputContainer>
        <Label>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          error={errors.lastName}
        />
        <ErrorMessageContainer>
          {touched.lastName && errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <InputContainer>
        <Label>Emai</Label>
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
        />
        <ErrorMessageContainer>
          {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <InputContainer>
        <ErrorMessageContainer>
          {errors.all && <ErrorMessage>{errors.all}</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <ButtonContainer>
        <InputButton type="submit">Edit</InputButton>
      </ButtonContainer>
    </FormContainer>
  </EditProfilContainer>
);

EditProfil.propTypes = propTypes;

export default EditProfil;
