import { createSlice } from "@reduxjs/toolkit"

const priceToSlice = createSlice({
  name: "priceTo",
  initialState: {
    priceTo: "Все",
  },
  reducers: {
    selectPriceTo: (state, action) => {
      state.priceTo = action.payload
    },
  },
})

export default priceToSlice.reducer
export const { selectPriceTo } = priceToSlice.actions
