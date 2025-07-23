import { configureStore } from "@reduxjs/toolkit";
import CardSlice  from "./slices/CardSlice";

export const store = configureStore({
  reducer: {
    Card: CardSlice
  },
});
