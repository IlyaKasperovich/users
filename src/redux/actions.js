import { CREATE_USER, SET_USERS } from "./types"

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user
})

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
})