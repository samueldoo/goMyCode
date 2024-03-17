import {
    
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './counterSlice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, counterSlice)


export default configureStore({
    reducer: {
        counter: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })