import { CREATE_USER } from "./types"

const initState = {
  usersList: []
}

const someReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        usersList: [ ...state.usersList, action.payload ]
      }
    default: return state
  }
}

export default someReducer