import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPersons = createAsyncThunk(// запрос
    'persons/fetchPersons',
    async (persons, thunkAPI) => {
      const {data} = await axios.get('https://bright-wasp-long-johns.cyclic.app/person/findall')
      return data
    }
)
const initialState = {
  persons: []
}

export const personsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPersons.fulfilled, (state, action) => {
      // Add user to the state array
      state.persons = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = personsSlice.actions

export default personsSlice.reducer