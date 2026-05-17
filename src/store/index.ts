import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/store/slice/authSlice'
import toastSlice from '@/store/slice/toastSlice'
// import JobsTopResponseSlice from '@/store/slice/jobsTopResponseSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    toast: toastSlice,
    // JobsTopResponse: JobsTopResponseSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
