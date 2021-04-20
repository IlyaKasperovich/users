export const getUsersList = (state) => state.users.usersList;

export const getSelectedUserId = (state) => state.users.selectedUserId;

export const getSelectedUser = (state) => {
  const usersList = getUsersList(state);
  const id = getSelectedUserId(state);
  return usersList.find((item) => item.id === id);
};
