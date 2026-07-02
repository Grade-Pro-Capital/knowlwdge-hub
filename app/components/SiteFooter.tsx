import Image from "next/image";
import Link from "next/link";

/**
 * Site footer — a ditto port of the Grade Institute website footer
 * (D:\we-have-to-make-a-website\src\components\Footer.jsx). Styling lives in
 * globals.css under the `.footer*` classes, copied verbatim from that project.
 */
const FOOTER_COLUMNS: string[][] = [
  ["Programs", "Crypto Literacy Program", "Certified Crypto Advisor", "Grade Certified Professional"],
  ["For Professionals", "Chartered Accountants", "Mutual Fund Distributors", "Wealth Advisors"],
  ["Resources", "Blog", "Fact Check", "Premium Resources"],
  ["Company", "About", "Contact", "Privacy Policy", "Terms of Use"],
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link className="logo flex items-center" href="/" aria-label="Grade Capital home">
          <Image
            src="/logo.png"
            alt="Grade Capital"
            width={508}
            height={198}
            className="logo-image"
          />
        </Link>
        <p>A Grade Capital Initiative • institute.grade.capital</p>
      </div>

      {FOOTER_COLUMNS.map(([title, ...links]) => (
        <div
          className={`footer-col footer-${title.toLowerCase().replace(/\s+/g, "-")}`}
          key={title}
        >
          <h3>{title}</h3>
          {links.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      ))}

      <div className="footer-bottom">
        <span>
          © 2026 Atlantease Ventures Inc (Trademark : &apos;Grade&apos; &amp; &apos;GRADE&apos;) All
          rights reserved.
        </span>
        <span>Data sources: Chainalysis, CoinGecko, Bitwise, ETFGI, Coinbase Institutional</span>
      </div>
    </footer>
  );
}
