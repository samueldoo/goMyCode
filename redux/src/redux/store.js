import {
    
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './counterSlice'
import storage from "redux-persist/lib/storage"
export default configureStore({
  reducer: {}
})