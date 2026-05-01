import { useEffect, useRef, useState } from "react";
import styles from "./NavSp.module.css";

const LINKS = [
  { id: "stay", label: "STAY" },
  { id: "scene", label: "SCENE" },
  { id: "plans", label: "PLANS" },
  { id: "access", label: "ACCESS" },
];

function NavSp() {
  const navRef = useRef(null);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("stay");

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(true), 180);

    const update = () => {
      const y = window.scrollY || 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, y / max));

      navRef.current?.style.setProperty("--nav-fill", progress.toFixed(3));
      setScrolled(y > 24);

      let current = LINKS[0].id;

      LINKS.forEach((link) => {
        const el = document.getElementById(link.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.38) {
          current = link.id;
        }
      });

      setActiveId(current);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    const top = window.scrollY + target.getBoundingClientRect().top - 88;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${show ? styles.show : ""} ${
        scrolled ? styles.scrolled : ""
      }`}
      aria-label="Vila Coral mobile navigation"
    >
      <div className={styles.main}>
        <a href="#top" className={styles.brand} onClick={scrollToTop}>
          <span className={styles.brandName}>Vila</span>
          <span className={styles.brandSub}> Coral</span>
        </a>

        <a
          href="#contact"
          className={styles.cta}
          onClick={(event) => scrollToSection(event, "contact")}
        >
          <span className={styles.ctaText}>RESERVE</span>
          <span className={styles.ctaLine} aria-hidden="true" />
        </a>
      </div>

      <div className={styles.rail} aria-label="Page sections">
        {LINKS.map((link) => {
          const active = activeId === link.id;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.link} ${active ? styles.active : ""}`}
              aria-current={active ? "true" : undefined}
              onClick={(event) => scrollToSection(event, link.id)}
            >
              <span className={styles.linkDot} aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default NavSp;