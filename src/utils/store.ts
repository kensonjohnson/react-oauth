import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authorizationReducer from "./authorizationSlice";
import spotifyExampleReducer from "./spotifyExampleSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authorization: authorizationReducer,
    spotifyExample: spotifyExampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
