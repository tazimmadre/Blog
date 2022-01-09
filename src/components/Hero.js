import React from "react";
import { Link } from "react-router-dom";
import styles from "../util.module.css";

const Hero = () => {
  return (
    <div className="box hero">
      <h1 className={styles.heading2Xl}>
        <Link to="/">React Autocomplete Demo</Link>
      </h1>
      <h2 className={styles.headingXl}>
        Start typing and experience the Witter wizardry!
      </h2>
      <div>
        <h1 className={styles.heading2Xl}>Go aLL the Way TO Footer</h1>
        <h1 className={styles.heading2Xl}>
          This is Witter APP join now by Loggin in or{" "}
        </h1>
        <h1 className={styles.heading2Xl}>SignUP now</h1>
      </div>
    </div>
  );
};

export default Hero;
