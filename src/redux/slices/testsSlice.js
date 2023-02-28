import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchTests = createAsyncThunk(// запрос
    'tests/fetchTests',
    async (persons, thunkAPI) => {
      const {data} = await axios.get('https://bright-wasp-long-johns.cyclic.app/tests/findall')
      return data
    }
)
const initialState = {
  tests: []
}

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTests.fulfilled, (state, action) => {
      state.tests = action.payload
    })
  },
})

// export const {} = personsSlice.actions

export default testsSlice.reducer