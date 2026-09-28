"use client";

import { useCallback, useState } from "react";
import { ConsultationOverlay } from "./ConsultationOverlay";
import styles from "./KnowMore.module.css";

/** Hero "Know More" pill — toggles the consultation overlay (Framer's onTap: overlay.toggle). */
export function KnowMore() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <>
      <div className={styles.button} tabIndex={0} role="button" onClick={() => setOpen((v) => !v)}>
        <p className={`preset-1j2vndp ${styles.text} ${styles.textWide}`}>Know More</p>
        <p className={`preset-1ue8ewz ${styles.text} ${styles.textPhone}`}>Know More</p>
      </div>
      {open && <ConsultationOverlay onClose={close} />}
    </>
  );
}
