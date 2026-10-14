import { createSlice } from "@reduxjs/toolkit";

const bottomBarClickSlice = createSlice({
  name: "bottomBarThis",
  initialState: {
    thisBottomIds: [],
  },
  reducers: {
    addBottomThis: (state, action) => {
      const bottomData = action.payload;

      const exists = state.thisBottomIds.some(
        (item) => item.title === bottomData.title,
      );
      if (!exists) {
        state.thisBottomIds.push(bottomData);
      }
    },
    removeBottomThis: (state, action) => {
      state.thisBottomIds = state.thisBottomIds.filter(
        (item) => item.title !== action.payload,
      );
    },
  },
});

export const { addBottomThis, removeBottomThis } = bottomBarClickSlice.actions;

export default bottomBarClickSlice.reducer;
