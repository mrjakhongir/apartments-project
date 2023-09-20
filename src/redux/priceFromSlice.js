import { createSlice } from "@reduxjs/toolkit"

const priceFromSlice = createSlice({
  name: "priceFrom",
  initialState: {
    priceFrom: "Все",
  },
  reducers: {
    selectPriceFrom: (state, action) => {
      state.priceFrom = action.payload
    },
  },
})

export default priceFromSlice.reducer
export const { selectPriceFrom } = priceFromSlice.actions
