import { configureStore } from "@reduxjs/toolkit";
import bottomBarReducer from "./bottomBarSlice";
import bottomBarThisReducer from "./bottomBarClickSlice";
import iconClickDataReducer from "./iconClickSlice";

export const store = configureStore({
  reducer: {
    bottomBar: bottomBarReducer,
    bottomThis: bottomBarThisReducer,
    iconClick: iconClickDataReducer,
  },
});
