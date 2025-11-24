import styles from "./AlertStyle.module.css";
import { useEffect } from "react";

const AlertStyle = (props) => {
  const { text, success, svg, setTextAlertModal } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextAlertModal("");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [setTextAlertModal]);
  return (
    <div
      className={`${styles.div_alert_style} ${
        success ? styles.success : styles.error
      }`}
    >
      {svg ? svg : ""}
      <h2 className={styles.h2_alert_style}>{text}</h2>
    </div>
  );
};
export default AlertStyle;
