import { createSlice } from "@reduxjs/toolkit"

const roomFromSlice = createSlice({
  name: "roomFrom",
  initialState: {
    roomFrom: "Все",
  },
  reducers: {
    selectRoomFrom: (state, action) => {
      state.roomFrom = action.payload
    },
  },
})

export default roomFromSlice.reducer
export const { selectRoomFrom } = roomFromSlice.actions
