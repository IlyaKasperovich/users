import { connect } from 'react-redux';
import { getSelectedUser } from 'src/redux/selectors';
import { updateUsersTable, clearSelectedUserId, showNotification } from 'src/redux/actions';
import UserForm from './UserFormComponent';

export default connect(
  (state) => ({
    selectedUser: getSelectedUser(state),
  }),
  {
    updateUsersTable,
    clearSelectedUserId,
    showNotification,
  },
)(UserForm);
