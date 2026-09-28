"use client";

import { Select, SubmitButton, TextArea, TextInput } from "../components/FormControls";
import styles from "./SupportPage.module.css";

/**
 * Support request form. Looks and behaves like Framer's but is not connected to a
 * backend yet (docs/FRAMER-REBUILD-PLAN.md → Later).
 */
export function SupportForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label className={styles.queryType}>
        <p className={`preset-po693k ${styles.fieldLabel}`}>Select User and Query Type</p>
        <div className={styles.selects}>
          <Select name="User Type" look="light" options={["Select Here", "Visitor", "Advisor"]} />
          <Select
            name="Reason"
            look="outline"
            options={[
              "Reason to be listed here",
              "General Query",
              "Need Guidance",
              "Transaction Related",
              "Transaction Related - High Priority",
            ]}
          />
        </div>
      </label>
      <div className={styles.fields}>
        <label className={styles.nameField}>
          <p className={`preset-d7059j ${styles.fieldLabel}`}>Name</p>
          <TextInput name="Name" placeholder="Your Name" />
        </label>
        <label className={styles.field}>
          <p className={`preset-d7059j ${styles.fieldLabel}`}>Phone Number</p>
          <div className={styles.inputRow}>
            <TextInput name="Number" placeholder="1234567890" type="number" textTone="primary" grow />
          </div>
        </label>
        <label className={styles.field}>
          <p className={`preset-d7059j ${styles.fieldLabel} ${styles.fieldLabelMuted}`}>Your Message</p>
          <TextArea name="Your Message" placeholder="Your message here" minHeight={122} />
        </label>
        <div className={styles.button}>
          <SubmitButton label="Get Help" />
        </div>
      </div>
      <p className={`preset-d7059j ${styles.note}`}>
        The typical response time is 24 hours. Please relax while your issue is being addressed.
      </p>
    </form>
  );
}
