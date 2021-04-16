import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const Navigation = () => (
  <List>
    <ListItem button>
      <ListItemIcon><InboxIcon /></ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon><PeopleIcon /></ListItemIcon>
      <ListItemText primary="Users List" />
    </ListItem>
  </List>
);

export default Navigation;
