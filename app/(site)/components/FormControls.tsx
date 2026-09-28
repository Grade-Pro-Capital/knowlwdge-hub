import styles from "./FormControls.module.css";

/*
 * Framer form controls. Colours come from CSS variables so a form can theme all its
 * fields at once (and per breakpoint): --input-border, --input-placeholder and
 * --input-text. Unset, they default to the home-page look.
 */

type InputProps = {
  name: string;
  placeholder: string;
  type?: "text" | "number" | "email" | "tel";
  required?: boolean;
  /** Placeholder colour: grey (#797b86) or the pale pink (#fcebef) of the home-page form. */
  placeholderTone?: "muted" | "pink";
  /** Typed-text colour: white, or the primary text token (switches in dark mode). */
  textTone?: "white" | "primary";
  /** Grow to fill a row (Framer "flex: 1 0 0; width: 1px"). */
  grow?: boolean;
};

/** Framer text input (dark field, gold border on focus). */
export function TextInput({
  name,
  placeholder,
  type = "text",
  required,
  placeholderTone = "muted",
  textTone = "white",
  grow,
}: InputProps) {
  const className = [
    styles.inputWrapper,
    placeholderTone === "pink" && styles.placeholderPink,
    textTone === "primary" && styles.textPrimary,
    grow && styles.grow,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={className}>
      <input className={styles.input} type={type} name={name} placeholder={placeholder} required={required} />
    </div>
  );
}

/** Framer multi-line text input: resizable vertically, at least `minHeight` tall. */
export function TextArea({ name, placeholder, minHeight }: { name: string; placeholder: string; minHeight: number }) {
  return (
    <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`} style={{ minHeight }}>
      <textarea className={`${styles.input} ${styles.textarea}`} name={name} placeholder={placeholder} />
    </div>
  );
}

/**
 * Framer select: native <select> without its arrow, plus Framer's chevron.
 * "light" = grey field with black text; "outline" = transparent with a grey border.
 */
export function Select({ name, options, look }: { name: string; options: string[]; look: "light" | "outline" }) {
  return (
    <div className={`${styles.selectWrapper} ${look === "light" ? styles.selectLight : styles.selectOutline}`}>
      <select className={styles.select} name={name}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

/** Framer "Button 4" — the gold full-width submit button. */
export function SubmitButton({ label }: { label: string }) {
  return (
    <button type="submit" className={styles.button}>
      <p className={`preset-1snn53y ${styles.buttonText}`}>{label}</p>
    </button>
  );
}
