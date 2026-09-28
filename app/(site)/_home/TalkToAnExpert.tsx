"use client";

import { useRef, type RefObject } from "react";
import { Appear } from "../components/Appear";
import { FramerBackground } from "../components/FramerImage";
import { SubmitButton, TextInput } from "../components/FormControls";
import { WordReveal } from "../components/WordReveal";
import styles from "./TalkToAnExpert.module.css";

const GOLD = "var(--gc-gold)";
const PARAGRAPH =
  "At Grade, we make it easy to understand how crypto works, how it's structured, and how it fits (or doesn’t) into your financial world.";

/**
 * Home "Talk to an expert" section: "Crypto Can Be Clear" with the tweet on the
 * left, the "Book a Free Consultation" form card on the right (stacked below
 * 1200px). The form is not connected to a backend yet (docs/FRAMER-REBUILD-PLAN.md → Later).
 */
export function TalkToAnExpert() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionRef} id="talk-to-an-expert" className={styles.section}>
      <div className={styles.inner}>
        <FramerBackground
          file="hZacpjX0BIafvJUjffprg7Dfo.svg"
          width={1440}
          height={143}
          variants={[512, 1024]}
          sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw"
          alt=""
          fit="contain"
          position="center top"
          loading="lazy"
        />
        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.text}>
              <div className={styles.heading}>
                <WordReveal
                  as="h2"
                  className={`preset-94fo1t ${styles.richText} ${styles.title} ${styles.wide}`}
                  segments={[{ text: "Crypto Can Be\nClear" }]}
                />
                <WordReveal
                  as="h3"
                  className={`preset-1m48bs ${styles.richText} ${styles.title} ${styles.centered} ${styles.phone}`}
                  segments={[{ text: "Crypto Can Be Clear" }, { text: " ", color: "var(--gc-text-primary)" }]}
                />
                <WordReveal
                  as="h4"
                  className={`preset-uj565w ${styles.richText} ${styles.wide}`}
                  segments={[{ text: "If Someone Explains It Right." }]}
                />
                <WordReveal
                  as="p"
                  className={`preset-xxgem0 ${styles.richText} ${styles.centered} ${styles.phone}`}
                  style={{ color: "var(--gc-text-primary)" }}
                  segments={[{ text: "If Someone Explains It Right." }]}
                />
              </div>
              {/* Framer colours this paragraph #19191b — nearly invisible here. Kept as-is. */}
              <p className={`preset-lfzx7o ${styles.richText} ${styles.paragraph} ${styles.wide}`}>{PARAGRAPH}</p>
              <p className={`preset-lfzx7o ${styles.richText} ${styles.paragraph} ${styles.centered} ${styles.phone}`}>
                {`"${PARAGRAPH}"`}
              </p>
            </div>
            <div className={styles.tweet}>
              <FramerBackground
                file="8qM2HsoCKb8cz7rWSDDThotcE.png"
                width={2372}
                height={452}
                variants={[512, 1024, 2048]}
                sizes="(min-width: 1200px) calc(max((min(100vw * 0.83, 1200px) - 32px) / 2, 1px) * 0.9), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw * 0.83, 1200px) * 0.6622), (max-width: 809.98px) calc(min(100vw * 0.9, 1200px) * 0.95)"
                alt="Grade Capital tweet: “Most people stay away from #crypto because it’s never been explained simply.”"
                fit="contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.formSection}>
            <FramerBackground
              file="vYnLMkMb2AWrZrUrvvQWC8PxSZw.png"
              width={3990}
              height={4170}
              alt=""
              fit="contain"
              loading="lazy"
            />
            <ConsultationCard layout="phone" sectionRef={sectionRef} />
            <ConsultationCard layout="wide" sectionRef={sectionRef} />
          </div>
        </div>
      </div>
      <div className={styles.fade} />
    </div>
  );
}

/**
 * Framer's "Free consultation" anchor after the section: a 1px strip that sticks to
 * the top of the viewport for the rest of the page, carrying a fade (above it) like
 * the section's own.
 */
export function FreeConsultationAnchor() {
  return (
    <div id="talk-to-an-expert-1" className={styles.anchor}>
      <div className={`${styles.fade} ${styles.anchorFade}`} />
    </div>
  );
}

/**
 * The form card. Framer renders a separate card for phones (bigger heading, all
 * white input text); only one is displayed at a time. It rises in once the page
 * scrolls within 800px + half a viewport of the section.
 */
function ConsultationCard({
  layout,
  sectionRef,
}: {
  layout: "wide" | "phone";
  sectionRef: RefObject<HTMLDivElement | null>;
}) {
  const phone = layout === "phone";
  return (
    <Appear
      as="form"
      className={`${styles.card} ${phone ? styles.cardPhone : styles.cardWide}`}
      from={{ opacity: 0, y: 150 }}
      transition={{ type: "spring", stiffness: 400, damping: 69, mass: 1 }}
      threshold={0.5}
      scrollTarget={{ ref: sectionRef, offset: 800 }}
      onSubmit={(e) => e.preventDefault()}
    >
      {phone ? (
        <WordReveal
          as="h3"
          className={`preset-1m48bs ${styles.richText} ${styles.centered}`}
          style={{ color: GOLD }}
          segments={[
            { text: "Book a", color: "#fff" },
            { text: " ", color: "var(--gc-text-primary)" },
            { text: "Free Consultation" },
          ]}
        />
      ) : (
        <WordReveal
          as="h4"
          className={`preset-kiutda ${styles.richText} ${styles.cardHeading}`}
          segments={[{ text: "Book a Free " }, { text: "Consultation", color: GOLD }]}
        />
      )}
      <div className={styles.formBody}>
        <div className={styles.fields}>
          <label className={styles.nameField}>
            <p className={`preset-d7059j ${styles.label}`}>Name</p>
            <TextInput name="Name" placeholder="Your Name" placeholderTone="pink" textTone={phone ? "white" : "primary"} />
          </label>
          <label className={styles.field}>
            <p className={`preset-d7059j ${styles.label}`}>Phone Number</p>
            <div className={styles.inputRow}>
              <TextInput name="Number" placeholder="98444*****" type="number" placeholderTone="pink" grow />
            </div>
          </label>
          <label className={styles.field}>
            <p className={`preset-d7059j ${styles.label}`}>Email</p>
            <div className={styles.inputRow}>
              <TextInput
                name="Email"
                placeholder="name@company.com"
                type="email"
                placeholderTone="pink"
                textTone={phone ? "white" : "primary"}
                grow
              />
            </div>
          </label>
        </div>
        <div className={styles.button}>
          <SubmitButton label="Request a Callback" />
        </div>
      </div>
      <div className={styles.note}>
        <p className={`preset-xxgem0 ${styles.noteEmoji}`}>{"😇 "}</p>
        <p className={`preset-d7059j ${styles.noteText}`}>
          A calm, clear chat — led by people who care that you understand it first.
        </p>
      </div>
    </Appear>
  );
}
