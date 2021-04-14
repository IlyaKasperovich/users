import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { tableColumnsConfig } from "../../configs/tableConfig"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const UsersTable = ({ users }) => {
  const classes = useStyles();
  return (
    <Table className={classes.table} size="medium" aria-label="a dense table">
      <TableHead>
        <TableRow>
          {tableColumnsConfig.map((title, i) => <TableCell key={i}>{title}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={i}>
            <TableCell><img src={user.photo} alt={user.lastName}/></TableCell>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UsersTable