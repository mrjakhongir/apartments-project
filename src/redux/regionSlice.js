import { createSlice } from "@reduxjs/toolkit"

const regionSlice = createSlice({
  name: "region",
  initialState: {
    region: "Все регионы",
  },
  reducers: {
    selectRegion: (state, action) => {
      state.region = action.payload
    },
  },
})

export default regionSlice.reducer
export const { selectRegion } = regionSlice.actions
