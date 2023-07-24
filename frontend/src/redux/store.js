import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './user'
import counterReducer from './counter'
export default configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer
  }
})