import { DesignedForSuccess } from "./DesignedForSuccess";
import { Results } from "./Results";
import styles from "./DeliveringWithSecurity.module.css";

export function DeliveringWithSecurity() {
  return (
    <div className={styles.section}>
      <Results />
      <DesignedForSuccess />
    </div>
  );
}
