import { createSlice } from "@reduxjs/toolkit";

const IconClickSlice = createSlice({
  name: "windowIconClickData",
  initialState: {
    openIconClickIdx: [],
  },
  reducers: {
    addIconClickData: (state, action) => {
      const clickIcon = action.payload;
      const exists = state.openIconClickIdx.some(
        (item) => item.title === clickIcon,
      );

      if (!exists) {
        state.openIconClickIdx.push(clickIcon);
      }
    },
    removeIconClickData: (state, action) => {
      state.openIconClickIdx = state.openIconClickIdx.filter(
        (itme) => item.title !== action.payload,
      );
    },
  },
});

export const { addIconClickData, removeIconClickData } = IconClickSlice.actions;

export default IconClickSlice.reducer;
