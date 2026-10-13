import { createSlice } from "@reduxjs/toolkit";

const bottomBarSlide = createSlice({
  name: "windowBottomBar",
  initialState: {
    openProgramIds: [],
  },
  reducers: {
    addBottomBar: (state, action) => {
      const program = action.payload;

      const exists = state.openProgramIds.some(
        (item) => item.title === program.title,
      );

      if (!exists) {
        state.openProgramIds.push(program);
      }
    },

    removeBottomBar: (state, action) => {
      state.openProgramIds = state.openProgramIds.filter(
        (item) => item.title !== action.payload,
      );
    },
  },
});

export const { addBottomBar, removeBottomBar } = bottomBarSlide.actions;

export default bottomBarSlide.reducer;
