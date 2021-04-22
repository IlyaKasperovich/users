import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too short')
    .max(30, 'Too long')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too short')
    .max(30, 'Too long')
    .required('Required'),
  nickName: Yup.string().min(2, 'Too short').max(30, 'Too long'),
  age: Yup.number().min(1, 'Invalid age').max(100, 'Invalid age'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Phone number must contain only numbers')
    .length(9, 'Invalid length of phone number'),
});

export default validationSchema;
