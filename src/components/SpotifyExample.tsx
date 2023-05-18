import { useSelector } from "react-redux";
import {
  selectDisplayName,
  selectProduct,
} from "../utils/spotifyExampleSlice.ts";
import styles from "./SpotifyExample.module.css";

export function SpotifyExample() {
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);

  return (
    <div className={styles.column}>
      {displayName && (
        <div className={styles.row}>Logged in as: {displayName}</div>
      )}
      {product && (
        <div className={styles.row}>Subscription type: {product}</div>
      )}
    </div>
  );
}
