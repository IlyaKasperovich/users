import { connect } from "react-redux"
import { setUsers } from '../../redux/actions'
import UsersTable from "./UsersTableComponent.jsx"

export default connect(
  (state) => {
    const users = state.users.usersList

    return {
      users
    }
  }
  ,
  {
    setUsers
  }
)(UsersTable)