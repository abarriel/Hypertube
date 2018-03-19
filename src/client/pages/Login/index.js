import { withFormik } from 'formik';

import {
  NOT_FOUND_ACCOUNT,
  EMPTY_REQUEST,
  PASSWORD_EMPTY,
  PASSWORD_EMPTY_MESSAGE,
  LOGIN_INVALID_MESSAGE,
} from './constants';
import { Login } from './Login';
import req from '../../request';
import { UserSchema } from '../../validation';


export default withFormik({
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
        setFieldError('password', PASSWORD_EMPTY_MESSAGE);
      } else if (err.details[0].type === EMPTY_REQUEST) {
        setErrors({
          username: LOGIN_INVALID_MESSAGE,
          password: PASSWORD_EMPTY_MESSAGE,
          all: 'error',
        });
      } else if (err.details === NOT_FOUND_ACCOUNT) {
        setFieldError('all', NOT_FOUND_ACCOUNT);
      }
    }
  },
})(Login);
