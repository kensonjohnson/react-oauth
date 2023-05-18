import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "../utils/authorizationSlice.ts";
import { setUserProfileAsync } from "../utils/spotifyExampleSlice.ts";
import styles from "./Counter.module.css";
import { getAuthorizeHref } from "../../authConfig.ts";
import { getHashParams, removeHashParamsFromURL } from "../utils/hashUtils.ts";

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromURL();

export function Authorization() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenExpiryDate = useSelector(selectTokenExpiryDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
      dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch(setUserProfileAsync(access_token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles.row}>
        {!isLoggedIn && (
          <button
            className={styles.button}
            aria-label="Log in using OAuth 2.0"
            onClick={() => window.open(getAuthorizeHref(), "_self")}
          >
            Log in with Spotify
          </button>
        )}
        {isLoggedIn && (
          <div className={styles.row}>Token expiry date: {tokenExpiryDate}</div>
        )}
      </div>
    </div>
  );
}
