import { connect } from 'react-redux';
import { setSelectedUserId } from 'src/redux/actions';
import UsersTable from './UsersTableComponent';

export default connect(
  (state) => {
    const users = state.users.usersList;

    return {
      users,
    };
  },
  {
    setSelectedUserId,
  },
)(UsersTable);
