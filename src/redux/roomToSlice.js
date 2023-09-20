import { createSlice } from "@reduxjs/toolkit"

const roomToSlice = createSlice({
  name: "roomFrom",
  initialState: {
    roomTo: "Все",
  },
  reducers: {
    selectRoomTo: (state, action) => {
      state.roomTo = action.payload
    },
  },
})

export default roomToSlice.reducer
export const { selectRoomTo } = roomToSlice.actions
