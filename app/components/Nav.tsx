"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#insights", label: "What I do" },
  { href: "/#career", label: "Career" },
  { href: "/#work", label: "Work" },
  { href: "/#expertise", label: "Expertise" },
];

export default function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header${variant === "light" ? " site-header--light" : ""}`}>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Kamogelo Mokone, home">
          <span className="brand-monogram">KM</span>
          <span className="brand-name">KAMOGELO MOKONE</span>
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span /><span />
        </button>
        <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-links">
          {links.map((link) => (
            <Link href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-contact" href="/#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk</Link>
        </div>
      </nav>
    </header>
  );
}
