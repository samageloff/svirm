export const timer = (state) => state.timer?.data;
export const currentTick = (state) =>
  state.timer?.data?.timer?.currentTick ?? 0;
export const defaultTick = (state) => state.timer?.data?.timer?.defaultTick;
export const timerStatus = (state) => state.timer?.data?.timer?.status;
export const initialized = (state) => state.timer?.data?.timer?.initialized;
export const slides = (state) => state.timer?.data?.timer?.slides;
