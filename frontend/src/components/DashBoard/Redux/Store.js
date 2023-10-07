import { configureStore } from '@reduxjs/toolkit'
import contingentSlice from './Features/Slices/ContingentSlice'
import teamSlice from './Features/Slices/TeamSlice'
import  userSlice  from './Features/Slices/UserSlice'

export const store = configureStore({
  reducer: {
    contingent:contingentSlice,
    team:teamSlice,
    user:userSlice
  },
})