import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

const NAV_ITEMS = [
  { id: "concept", label: "Concept" },
  { id: "room", label: "Room" },
  { id: "experience", label: "Experience" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
  { id: "stay", label: "Stay Plan" },
];

const ACTIVE_TARGETS = [...NAV_ITEMS.map((item) => item.id), "reservation"];

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export default function Nav() {
  const navRef = useRef(null);

  const [show, setShow] = useState(false);
  const showRef = useRef(false);

  const [activeId, setActiveId] = useState("");
  const activeRef = useRef("");

  const setActive = (id) => {
    if (!id || activeRef.current === id) return;
    activeRef.current = id;
    setActiveId(id);
  };

  // Heroを抜けたらNavを出す
  useEffect(() => {
    const hero = document.getElementById("hero");

    const initial =
      (window.location.hash && window.location.hash !== "#hero") ||
      window.scrollY > 24;

    if (initial || !hero) {
      showRef.current = true;
      setShow(true);
    }

    if (!hero) return;

    const SHOW_AT = 0.88;
    const HIDE_AT = 0.965;

    const io = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (!showRef.current && ratio < SHOW_AT) {
          showRef.current = true;
          setShow(true);
          return;
        }

        if (showRef.current && ratio > HIDE_AT) {
          showRef.current = false;
          setShow(false);
        }
      },
      {
        threshold: [0, 0.5, 0.88, 0.965, 1],
      }
    );

    io.observe(hero);

    return () => io.disconnect();
  }, []);

  // 現在位置の検知
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash && document.getElementById(hash)) {
      setActive(hash);
    }

    const targets = ACTIVE_TARGETS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    if (!targets.length) return;

    let raf = 0;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
            top: Math.abs(entry.boundingClientRect.top),
          }));

        if (!visible.length) return;

        visible.sort((a, b) => {
          if (b.ratio !== a.ratio) return b.ratio - a.ratio;
          return a.top - b.top;
        });

        const next = visible[0]?.id;
        if (!next || next === activeRef.current) return;

        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setActive(next));
      },
      {
        root: null,
        rootMargin: "-36% 0px -54% 0px",
        threshold: [0.01, 0.06, 0.12, 0.2, 0.35, 0.5],
      }
    );

    targets.forEach((target) => io.observe(target));

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  // Navの質感だけ少し変える。ScrollTriggerは使わない。
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    let raf = 0;
    let heroHeight = 520;

    const setBase = () => {
      nav.style.setProperty("--nav-bg-alpha", "0.52");
      nav.style.setProperty("--nav-blur", "6px");
      nav.style.setProperty("--nav-border-alpha", "0.12");
      nav.style.setProperty("--nav-shadow-alpha", "0.08");
      nav.style.setProperty("--nav-fill", "0");
    };

    const measure = () => {
      const hero = document.getElementById("hero");
      heroHeight = hero?.offsetHeight || 520;
    };

    const updateDepth = () => {
      const progress = clamp(window.scrollY / heroHeight);

      const bg = 0.52 - 0.08 * progress;
      const blur = 6 - 2 * progress;
      const border = 0.12 + 0.05 * progress;
      const shadow = 0.08 + 0.03 * progress;

      nav.style.setProperty("--nav-bg-alpha", bg.toFixed(3));
      nav.style.setProperty("--nav-blur", `${blur.toFixed(2)}px`);
      nav.style.setProperty("--nav-border-alpha", border.toFixed(3));
      nav.style.setProperty("--nav-shadow-alpha", shadow.toFixed(3));
      nav.style.setProperty("--nav-fill", progress.toFixed(3));
    };

    const requestUpdate = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateDepth);
    };

    const onResize = () => {
      measure();
      requestUpdate();
    };

    setBase();
    measure();

    if (reduceMotion.matches || coarsePointer.matches) {
      return () => {
        cancelAnimationFrame(raf);
        setBase();
      };
    }

    updateDepth();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", onResize);
      setBase();
    };
  }, []);

  const handleAnchorClick = (event, id) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();

    setActive(id);

    const navHeight = navRef.current?.offsetHeight || 0;
    const offset = id === "hero" ? 0 : navHeight + 18;

    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

    if (id === "hero") {
      showRef.current = false;
      setShow(false);
    } else if (!showRef.current) {
      showRef.current = true;
      setShow(true);
    }

    window.history.replaceState(null, "", `#${id}`);
  };

  const isActive = (id) => activeId === id;

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${show ? styles.show : ""}`}
      aria-label="Primary navigation"
    >
      <div className={styles.inner}>
        <a
          href="#hero"
          className={styles.brand}
          aria-label="Vila Coral home"
          onClick={(event) => handleAnchorClick(event, "hero")}
        >
          Vila Coral
        </a>

        <div className={styles.links} aria-label="Site sections">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.id);

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.link} ${active ? styles.active : ""}`}
                aria-current={active ? "location" : undefined}
                onClick={(event) => handleAnchorClick(event, item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#reservation"
          className={`${styles.cta} ${
            activeId === "reservation" ? styles.ctaActive : ""
          }`}
          aria-label="Reservation"
          aria-current={activeId === "reservation" ? "location" : undefined}
          onClick={(event) => handleAnchorClick(event, "reservation")}
        >
          <span className={styles.ctaText}>Reservation</span>
          <span className={styles.ctaLine} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}