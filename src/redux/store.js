import { configureStore } from "@reduxjs/toolkit";
import bottomBarReducer from "./bottomBarSlice";

export const store = configureStore({
  reducer: {
    bottomBar: bottomBarReducer,
  },
});
