import { configureStore } from "@reduxjs/toolkit"
import regionSlice from "./regionSlice"
import typeSlice from "./typeSlice"
import roomFromSlice from "./roomFromSlice"
import roomToSlice from "./roomToSlice"
import priceFromSlice from "./priceFromSlice"
import priceToSlice from "./priceToSlice"

const store = configureStore({
  reducer: {
    type: typeSlice,
    region: regionSlice,
    roomFrom: roomFromSlice,
    roomTo: roomToSlice,
    priceFrom: priceFromSlice,
    priceTo: priceToSlice,
  },
})

export default store
