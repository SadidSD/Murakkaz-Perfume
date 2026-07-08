"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Products", href: "/" },
  { label: "Men", href: "/" },
  { label: "Occasions", href: "/" },
  { label: "Fragrance", href: "/" },
  { label: "Events", href: "/events" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navbarWrapper}>
          <Image
            src="/images/navbar/navbar M.svg"
            alt="Murakkaz Navigation"
            width={1348}
            height={64}
            priority
            className={styles.navbarSvg}
          />
        </div>
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.navLinkActive : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
