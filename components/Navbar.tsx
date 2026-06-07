"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  ["Origin", "/about"],
  ["Products", "/products"],
  ["Dubai", "/export-to-dubai"],
  ["OEM", "/oem-private-label"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="brand" aria-label="Delta Prime Global home">
          <Image
            src="/images/logoexport.png"
            alt="Delta Prime Global logo"
            width={46}
            height={46}
            priority
            className="brand-logo"
          />

          <div className="brand-text">
            <span>DELTA PRIME</span>
            <strong>GLOBAL</strong>
          </div>
        </Link>

        <nav className="navlinks" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="navCta">
          Request Quote
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      <div
        className={`sidebar-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="sidebar-brand">
          <Image
            src="/images/logoexport.png"
            alt="Delta Prime Global logo"
            width={65}
            height={65}
            priority
          />

          <div className="sidebar-brand-text">
            <span>DELTA PRIME</span>
            <strong>GLOBAL</strong>
          </div>
        </div>

        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="sidebar-quote"
          onClick={() => setMenuOpen(false)}
        >
          Request Quote
        </Link>
      </aside>
    </>
  );
}