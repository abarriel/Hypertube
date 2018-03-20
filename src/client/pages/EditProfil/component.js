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
      {console.log('values: ', values)}
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
    </FormContainer>
  </EditProfilContainer>
);

EditProfil.propTypes = propTypes;

export default EditProfil;
