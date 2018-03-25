import { withFormik } from 'formik';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import req from '../../request';
import EditProfil from './component';
import { UserSchema } from './validation';
import { getUser } from '../../selectors/user';
import { EMPTY_REQUEST, AUTH_ERROR } from './constants';

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
      { setFieldError },
    ) => {
      try {
        await req.editUser(values);
        window.location.replace('/profil');
      } catch (err) {
        console.log('err: ', err);
        if (err.details[0].type === EMPTY_REQUEST) {
          setFieldError('all', 'Please complete all fields');
        } else if (err.type === AUTH_ERROR) {
          setFieldError('all', 'You cant modify your profil');
        }
      }
    },
  }),
)(EditProfil);
