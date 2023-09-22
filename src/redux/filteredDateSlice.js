import { createSlice } from "@reduxjs/toolkit"
import allProjects from "../assets/data.json"

const filteredDataSlice = createSlice({
  name: "filterData",
  initialState: {
    filterData: allProjects.projects,
  },
  reducers: {
    filterData: (state, action) => {
      state.filterData = action.payload
    },
  },
})

export default filteredDataSlice.reducer
export const { filterData } = filteredDataSlice.actions
