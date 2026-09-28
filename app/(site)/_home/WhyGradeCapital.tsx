import { Appear } from "../components/Appear";
import { SecurityCard } from "./SecurityCard";
import styles from "./WhyGradeCapital.module.css";

export function WhyGradeCapital() {
  return (
    <section className={styles.section} id="why-grade-capital">
      <div className={styles.inner}>
        {/* Fades in/out every time it enters/leaves the viewport (Framer: not "once"). */}
        <Appear
          className={styles.intro}
          from={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          threshold={0}
          once={false}
        >
          <div className={styles.introText}>
            <Appear
              as="h3"
              className={`preset-1m48bs ${styles.heading}`}
              from={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 50, mass: 1 }}
              threshold={0.5}
            >
              <span style={{ color: "#fff" }}>Why</span>
              <span style={{ color: "var(--gc-text-primary)" }}> </span>
              Grade Capital?
            </Appear>
            <Appear
              as="p"
              className={`preset-lfzx7o ${styles.paragraph}`}
              from={{ opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 1.6, delay: 0.1 }}
              threshold={0.5}
            >
              When you&apos;re exploring something new, clarity makes all the difference. Grade is built for that. Every
              movement is visible, every number accounted for — so understanding the process feels as natural as
              trusting it.
            </Appear>
          </div>
        </Appear>
        <div className={styles.cards}>
          <div className={styles.cardSlot}>
            <SecurityCard
              icon="identification-card"
              title={
                <>
                  {"PAN-Linked "}
                  <br />
                  Transactions
                </>
              }
              text="Every investment is tied to your PAN — clear, compliant, and completely traceable."
            />
          </div>
          <div className={styles.cardSlot}>
            <SecurityCard
              icon="currency-inr"
              title={
                <>
                  {"UPI  |  IMPS |"}
                  <br />
                  {"NEFT "}
                </>
              }
              text="Transact securely with the banking tools you already use and trust."
            />
          </div>
          <div className={`${styles.cardSlot} ${styles.cardSlotLast}`}>
            <SecurityCard
              icon="bank"
              title={
                <>
                  {"→ From Bank Account, "}
                  <br />← In Bank Account
                </>
              }
              text="Funds move directly from your account and return the same way — no intermediaries, no surprises."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
