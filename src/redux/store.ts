import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data.slice";

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;