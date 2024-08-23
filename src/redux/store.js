import { configureStore } from '@reduxjs/toolkit'
import taskbarReducer from './taskbar/taskbarSlice'

export const store = configureStore({
  reducer: {
    taskbar: taskbarReducer,
  },
})