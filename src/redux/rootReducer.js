import { combineReducers } from "redux"
import someReducer from "./someReducer"

// const reducer1 = (state = 1, action) => state
// const reducer2 = (state = 2, action) => state

const rootReducer = combineReducers({
  someReducer
})

export default rootReducer