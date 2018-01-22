import yup from 'yup';
import _ from 'lodash';

const UserSchema = yup.object({
  username: yup.string().min(5).max(25).matches(/^\w+$/, { message: 'Only characteres', excludeEmptyString: true }),
  password: yup.string().min(6).max(30).matches(/^(?=.*[a-zA-Z])(?=.*\W)(?=.*[0-9]).+$/, { message: 'not Secure Password ', excludeEmptyString: true }),
  email: yup.string().email(),
  firstName: yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/),
  lastName: yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/),
  profilePicture: yup.string(),
  // lang: yup.string().matches(/^\w+$/).min(2).max(3),
});

const validateUser = (values, props) => {
  let errors = {};
  const keys = Object.keys(values);
  if (_.includes(keys, 'username') && !values.username) {
    errors.username = 'username Required';
  } else if (!/^\w{3,30}$/.test(values.username)) {
    errors.username = 'Invalid username';
  }
  if (_.includes(keys, 'email') && !values.email) {
    errors.email = 'email Required';
  } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (_.includes(keys, 'lastName') && !values.lastName) {
    errors.lastName = 'lastName Required';
  } else if (values.lastName &&!/^[A-Za-z ]{2,30}$/.test(values.lastName)) {
    errors.lastName = 'Invalid lastName';
  }
  if (_.includes(keys, 'firstName') && !values.firstName) {
    errors.firstName = 'firstName Required';
  } else if (values.firstName && !/^[A-Za-z ]{2,30}$/.test(values.firstName)) {
    errors.firstName = 'Invalid firstName';
  }
  if (_.includes(keys, 'password') && !values.password) {
    errors.password = 'password Required';
  } else if (values.password && !/^(?=.*[a-zA-Z])(?=.*\W)(?=.*[0-9]).{6,25}$/.test(values.password)) {
    errors.password = 'Invalid password';
  }
  if (_.isEmpty(errors)) return false;
  return errors;
};
export { UserSchema, validateUser };
