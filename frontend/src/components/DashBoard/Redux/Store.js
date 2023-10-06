import { configureStore } from '@reduxjs/toolkit'
import contingentSlice from './Features/Slices/ContingentSlice'

export const store = configureStore({
  reducer: {
    contingent:contingentSlice
  },
})