import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import userFormConfig from 'src/configs/userFormConfig';

const UserForm = () => {
  const onSubmit = (values) => console.log(values);
  const initialState = {
    firstName: '',
    lastName: '',
    nickName: '',
    age: '',
    email: '',
    phoneNumber: '',
    photoUrl: '', //в форме не будет урл картинки а будет инпут для файла картинки, это временно
  };

  return (
    <Formik initialValues={initialState} onSubmit={onSubmit}>
      {({ handleSubmit, values, handleChange }) => (
        <form onSubmit={handleSubmit}>
          {userFormConfig.map((fieldTitle, i) => (
            <TextField
              key={i}
              id={fieldTitle}
              label={fieldTitle}
              variant="outlined"
              value={values[fieldTitle]}
              onChange={handleChange}
              style={{ display: 'block', margin: 10 }}
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ margin: 10 }}
          >
            submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default UserForm;
