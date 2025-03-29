import { createSlice } from "@reduxjs/toolkit";
import { config } from "../actions";

const initialState = {
  data: {
    timer: {
      status: false,
      defaultTick: config.TIMER.START_TIME,
      currentTick: config.TIMER.START_TIME,
      initialized: false,
      slides: [10, 20, 30, 40, 50, 60],
    },
  },
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    tick(state) {
      state.data.timer.currentTick -= 1;
    },
    timerToggle(state, action) {
      state.data.timer.status = action.payload;
    },
    timerReset(state) {
      state.data.timer.currentTick = state.data.timer.defaultTick;
    },
    initialized(state, action) {
      state.data.timer.initialized = action.payload;
    },
    setCurrentTick(state, action) {
      const slideList = state.data.timer.slides;
      state.data.timer.currentTick = slideList[action.payload];
      state.data.timer.defaultTick = slideList[action.payload];
    },
  },
});

export const { tick, timerToggle, timerReset, initialized, setCurrentTick } =
  timerSlice.actions;

export default timerSlice.reducer;
