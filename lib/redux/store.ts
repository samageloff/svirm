import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";
import timerReducer from "./slices/timerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
