"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { SubmitButton, TextInput } from "../components/FormControls";
import { MaskIcon } from "../components/MaskIcon";
import { WordReveal } from "../components/WordReveal";
import styles from "./ConsultationOverlay.module.css";

/**
 * "Book a Free Consultation" overlay (Framer's Know More overlay). Closes on the
 * backdrop, the round button or Esc. The form is not connected to a backend yet
 * (see docs/FRAMER-REBUILD-PLAN.md → Later).
 */
export function ConsultationOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.panel}>
        <div className={styles.headingRow}>
          <WordReveal
            as="h4"
            className={`preset-kiutda ${styles.heading} ${styles.headingDesktop}`}
            segments={[{ text: "Book a Free " }, { text: "Consultation", color: "var(--gc-gold)" }]}
          />
          <WordReveal
            as="h3"
            className={`preset-1m48bs ${styles.heading} ${styles.headingPhone}`}
            style={{ color: "var(--gc-gold)" }}
            segments={[
              { text: "Book a", color: "#fff" },
              { text: " ", color: "var(--gc-text-primary)" },
              { text: "Free  Consultation" },
            ]}
          />
        </div>

        <div className={styles.close} onClick={onClose}>
          <MaskIcon name="x" color="var(--gc-surface-2)" className={styles.closeIcon} />
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.fields}>
            <label className={styles.field}>
              <p className={`preset-d7059j ${styles.label}`}>
                Name<span className={`${styles.required} ${styles.labelAsterisk}`}>*</span>
              </p>
              <TextInput name="Name" placeholder="Your Name" required />
            </label>
            <div className={styles.row}>
              <label className={styles.rowField}>
                <p className={`preset-d7059j ${styles.label}`}>Phone Number</p>
                <div className={styles.inputRow}>
                  <TextInput name="Number" placeholder="98444*****" type="number" />
                </div>
              </label>
              <label className={styles.rowField}>
                <p className={`preset-d7059j ${styles.label}`}>Email</p>
                <div className={styles.inputRow}>
                  <TextInput name="Email" placeholder="name@company.com" type="email" />
                </div>
              </label>
            </div>
          </div>
          <div className={styles.button}>
            <SubmitButton label="Request a Callback" />
          </div>
        </form>

        <div className={styles.note}>
          <p className={`preset-xxgem0 ${styles.noteEmoji}`}>{"😇 "}</p>
          <p className={`preset-d7059j ${styles.noteText}`}>
            A calm, clear chat — led by people who care that you understand it first.
          </p>
        </div>
      </div>
    </>,
    document.body,
  );
}
