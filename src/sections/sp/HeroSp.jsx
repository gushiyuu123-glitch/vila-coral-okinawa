import { useEffect, useRef, useState } from "react";
import styles from "./HeroSp.module.css";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeroSp() {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const rafId = requestAnimationFrame(() => {
      if (mounted) setInView(true);
    });

    const img = imgRef.current;

    if (img?.complete) {
      setImgLoaded(true);
    }

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  const revealClass = inView ? styles.in : "";
  const imageClass = imgLoaded ? styles.heroImageIn : "";

  const handleImageDone = () => {
    setImgLoaded(true);
  };

  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="Vila Coral hero section"
    >
      <div data-parallax-hero="3" className={styles.bg} aria-hidden="true">
        <img
          ref={imgRef}
          src="/images/vila-coral-hero2.png"
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={handleImageDone}
          onError={handleImageDone}
          className={cx(styles.heroImage, imageClass)}
        />
      </div>

      <div data-veil="0.56" aria-hidden="true" className={styles.scrollVeil} />

      <div aria-hidden="true" className={styles.sky} />
      <div aria-hidden="true" className={styles.seaAir} />
      <div aria-hidden="true" className={styles.textHalo} />
      <div aria-hidden="true" className={styles.depth} />
      <div aria-hidden="true" className={styles.vignette} />

      <svg aria-hidden="true" focusable="false" className={styles.grain}>
        <filter id="vila-coral-hero-sp-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#vila-coral-hero-sp-grain)"
        />
      </svg>

      <div aria-hidden="true" className={styles.frame} />

      <div className={styles.contentShell}>
        <div data-drift="2" className={styles.content}>
          <p className={cx(styles.fade, styles.d0, revealClass, styles.kicker)}>
            Okinawa · Seaside Villa
          </p>

          <h1
            className={cx(
              styles.fade,
              styles.d1,
              revealClass,
              styles.title,
              "font-logo"
            )}
          >
            <span>Vila Coral</span>
          </h1>

          <div
            className={cx(styles.fade, styles.d2, revealClass, styles.mark)}
            aria-hidden="true"
          >
            <span />
          </div>

          <p className={cx(styles.fade, styles.d3, revealClass, styles.copy)}>
            <span className={styles.copySmall}>
              カーテンが揺れる、遅い朝。
            </span>

            <span className={styles.copyLarge}>
              <span>何もしない時間が、</span>
              <span>贅沢になる。</span>
            </span>
          </p>

          <div
            className={cx(styles.fade, styles.d4, revealClass, styles.action)}
          >
            <a href="#reservation" className={styles.cta}>
              <span>宿泊プランを見る</span>
              <span aria-hidden="true" className={styles.ctaLine} />
            </a>

            <span className={styles.note}>1日1組限定</span>
          </div>
        </div>
      </div>

      <div
        className={cx(styles.fade, styles.d5, revealClass, styles.bottomMeta)}
      >
        <span>Private stay</span>
        <span className={styles.metaLine} aria-hidden="true" />
        <span>1 group / day</span>
      </div>
    </section>
  );
}

export default HeroSp;