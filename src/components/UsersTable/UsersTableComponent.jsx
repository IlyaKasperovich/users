import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import tableColumnsConfig from 'src/configs/tableConfig';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  addButton: {
    position: 'fixed',
    bottom: 50,
    right: 50,
  },
});

const getNewId = (users) => {
  const maxId = users.reduce((result, { id }) => (result > +id ? result : id), 0);
  return maxId + 1;
};

const UsersTable = ({ users, setSelectedUserId }) => {
  const classes = useStyles();

  return (
    <>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {tableColumnsConfig.map((title, i) => (
              <TableCell key={i}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, i) => (
            <TableRow key={i}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <Avatar
                  src={user.photo}
                  alt={user.lastName}
                  style={{ width: 70, height: 70 }}
                />
              </TableCell>
              <TableCell onClick={() => setSelectedUserId(user.id)}>
                <Link
                  to={`/user/${user.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {user.firstName}
                </Link>
              </TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to={`/user/${getNewId(users)}`}>
        <Fab color="primary" aria-label="add" className={classes.addButton}>
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
};

export default UsersTable;
