import { withFormik } from 'formik';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import req from '../../request';
import EditProfil from './component';
import { UserSchema } from '../../validation';
import { getUser } from '../../selectors/user';

const mapStateToProps = state => ({
  user: getUser(state),
});

export default compose(
  connect(mapStateToProps),
  withFormik({
    mapPropsToValues: props => ({
      username: props.user.username || '',
      firstName: props.user.firstName || '',
      lastName: props.user.lastName || '',
      email: props.user.email || '',
      profilePicture: props.user.profilePicture || '',
    }),
    validationSchema: UserSchema,
    handleSubmit: async (
      values,
      {
        setFieldError,
        setErrors,
      },
    ) => {
      try {
        await req.editUser(values);
        window.location.replace('/profil');
      } catch (err) {
        console.log('err: ', err);
      }
    },
  }),
)(EditProfil);
