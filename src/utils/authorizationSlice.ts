import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AuthorizationState {
  loggedIn: boolean;
  accessToken: string;
  tokenExpiryDate: string;
}

const initialState: AuthorizationState = {
  loggedIn: false,
  accessToken: "",
  tokenExpiryDate: "",
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setTokenExpiryDate: (state, action: PayloadAction<number>) => {
      const date = new Date();
      date.setSeconds(date.getSeconds() + action.payload);
      state.tokenExpiryDate = date.toISOString();
    },
  },
});

export const { setLoggedIn, setAccessToken, setTokenExpiryDate } =
  authorizationSlice.actions;

export function selectIsLoggedIn(state: RootState) {
  return state.authorization.loggedIn;
}

export function selectAccessToken(state: RootState) {
  return state.authorization.accessToken;
}

export function selectTokenExpiryDate(state: RootState) {
  return state.authorization.tokenExpiryDate;
}

export default authorizationSlice.reducer;
