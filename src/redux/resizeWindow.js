import { createSlice } from "@reduxjs/toolkit"

const resizeWindowSlice = createSlice({
  name: "size",
  initialState: {
    size: 0,
  },
  reducers: {
    resize: (state, action) => {
      state.size = action.payload
    },
  },
})

export default resizeWindowSlice.reducer
export const { resize } = resizeWindowSlice.actions
