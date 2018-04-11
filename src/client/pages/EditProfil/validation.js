import yup from 'yup';
import _ from 'lodash';


export const UserSchema = yup.object({
  username: yup.string().min(5).max(25).matches(/^\w+$/, { message: 'Only characteres', excludeEmptyString: true }),
  password: yup.string().min(6).max(30).matches(/^(?=.*[a-zA-Z])(?=.*\W)(?=.*[0-9]).+$/, { message: 'not Secure Password ', excludeEmptyString: true }),
  email: yup.string().email(),
  firstName: yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/, { message: 'Only characteres', excludeEmptyString: true }),
  lastName: yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/, { message: 'Only characteres', excludeEmptyString: true }),
  profilePicture: yup.string(),
});
