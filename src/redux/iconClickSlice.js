import { createSlice } from "@reduxjs/toolkit";

const IconClickSlice = createSlice({
  name: "windowIconClickData",
  initialState: {
    openIconClickIdx: null,
  },
  reducers: {
    // 클릭한 아이콘 데이터 저장
    addIconClickData: (state, action) => {
      state.openIconClickIdx = action.payload;
    },

    // 클릭한 아이콘 데이터 제거
    removeIconClickData: (state) => {
      state.openIconClickIdx = null;
    },
  },
});

export const { addIconClickData, removeIconClickData } = IconClickSlice.actions;

export default IconClickSlice.reducer;
