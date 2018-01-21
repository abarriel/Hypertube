import yup from 'yup';

const UserSchema = yup.object({
  username: yup.string().min(5).max(25).matches(/^\w+$/, { message: 'Only characteres', excludeEmptyString: true }),
  password: yup.string().min(6).max(30).matches(/^(?=.*[a-zA-Z])(?=.*\W)(?=.*[0-9]).+$/, { message: 'not Secure Password ', excludeEmptyString: true }),
  // email: yup.string().email(),
  // firstName: yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/),
  // lastName: yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/),
  // profilePicture: yup.string(),
  // lang: yup.string().matches(/^\w+$/).min(2).max(3),
});

export { UserSchema };
