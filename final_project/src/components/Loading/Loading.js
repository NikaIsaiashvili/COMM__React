import React from "react";
import styles from "./Loading.module.css";

function LoadingRing() {
  return (
    <div className={styles.LoadingRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingRing;
