import { configureStore } from '@reduxjs/toolkit'
import personsSlice from './slices/personsSlice'
import testsSlice from './slices/testsSlice'

export const store = configureStore({
  reducer: {
    persons: personsSlice,
    tests: testsSlice
  },
})