import React, { useCallback } from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import userInfoConfig from 'src/configs/userInfoConfig';
import defaultAvatar from 'src/mocks/defaultAvatar';
import validationSchema from './validationSchema';
import './UserForm.sass';

const UserForm = ({
  selectedUser,
  updateUsersTable,
  clearSelectedUserId,
  showNotification,
  history,
}) => {
  const onSubmit = useCallback((values) => {
    const id = values.id
      ? values.id
      : +window.location.pathname.match(/[0-9]+$/g)[0];
    updateUsersTable({ ...values, id });
    clearSelectedUserId();
    showNotification(values.id ? 'User is updated' : 'User is created');
    history.push('/users');
  }, []);

  const onChange = useCallback((e, setFieldValue, title) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setFieldValue(title, event.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }, []);

  const handleCancelClick = useCallback(() => {
    clearSelectedUserId();
    history.push('/users');
  }, []);

  return (
    <Formik
      initialValues={selectedUser}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, handleChange, setFieldValue, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="fieldsContainer">
            <div className="avatarContainer">
              <img className="avatar" src={values.photo} alt={values.firstName} />
              <Button variant="contained" component="label" color="primary">
                update avatar
                <input
                  id="photo"
                  onChange={(e) => onChange(e, setFieldValue, 'photo')}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </Button>
            </div>
            <div className="userInfoContainer">
              {userInfoConfig.map(({ title, type }, i) => (
                <div key={i} className="userInfoFieldWrapper">
                  <TextField
                    id={title}
                    label={title}
                    type={type}
                    value={values[title]}
                    onChange={handleChange}
                    fullWidth={true}
                  />
                  {errors[title] && (
                    <div className="fieldError">{errors[title]}</div>
                  )}
                </div>
              ))}
              <div className="formButtons">
                <Button variant="contained" color="primary" type="submit">
                  save
                </Button>
                <Button variant="contained" onClick={handleCancelClick}>
                  back
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

UserForm.defaultProps = {
  selectedUser: {
    firstName: '',
    lastName: '',
    nickName: '',
    age: '',
    email: '',
    phoneNumber: '',
    photo: defaultAvatar,
  },
};

export default UserForm;
