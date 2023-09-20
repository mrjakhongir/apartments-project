import { createSlice } from "@reduxjs/toolkit"

const typeSlice = createSlice({
  name: "type",
  initialState: {
    type: "Все типы",
  },
  reducers: {
    selectType: (state, action) => {
      state.type = action.payload
    },
  },
})

export default typeSlice.reducer
export const { selectType } = typeSlice.actions
