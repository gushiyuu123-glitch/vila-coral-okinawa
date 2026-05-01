import { useEffect, useState } from "react";
import fade from "./HeroFade.module.css";

function Hero() {
  const [inView, setInView] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setInView(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const inClass = inView ? fade.in : "";
  const imageInClass = imgLoaded ? fade.heroImageIn : "";

  return (
    <section
      id="hero"
      className={`${fade.hero} relative min-h-[100svh] overflow-hidden`}
      aria-label="Vila Coral hero section"
    >
      {/* Background image */}
      <div data-parallax-hero="14" className="absolute inset-0">
        <img
          src="/images/vila-coral-hero2.png"
          alt="Vila Coral 沖縄の海辺のヴィラ"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
          className={`${fade.heroImage} ${imageInClass} h-full w-full object-cover object-[50%_54%]`}
        />
      </div>

      {/* ScrollTrigger veil */}
      <div
        data-veil="0.78"
        aria-hidden="true"
        className={fade.scrollVeil}
      />

      {/* Atmosphere layers */}
      <div aria-hidden="true" className={fade.sky} />
      <div aria-hidden="true" className={fade.seaAir} />
      <div aria-hidden="true" className={fade.textHalo} />
      <div aria-hidden="true" className={fade.depth} />
      <div aria-hidden="true" className={fade.vignette} />

      {/* SVG grain */}
      <svg aria-hidden="true" className={fade.grain}>
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      <div aria-hidden="true" className={fade.frame} />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div
          data-drift="10"
          className="pt-[19vh] sm:pt-[17vh] lg:pt-[15vh]"
        >
          <div className="ml-auto w-full max-w-[560px] pr-0 text-right sm:pr-4 lg:pr-10">
            <h1
              className={`${fade.fade} ${fade.d1} ${inClass} ${fade.ink} font-logo text-[58px] leading-[0.88] tracking-[0.002em] text-[rgba(29,41,40,0.92)] sm:text-[76px] lg:text-[96px]`}
            >
              <span className="block">Vila Coral</span>

              <span className="mt-3 block whitespace-nowrap font-sans text-[12px] uppercase tracking-[0.26em] text-[rgba(32,63,65,0.58)]">
                Okinawa
                <span className="px-[0.18em] opacity-45">·</span>
                Seaside
              </span>
            </h1>

            <div
              className={`${fade.fade} ${fade.d2} ${inClass} mt-7 flex justify-end`}
              aria-hidden="true"
            >
              <span className={fade.dot} />
            </div>

            <p
              className={`${fade.fade} ${fade.d3} ${inClass} ${fade.inkSoft} mt-9 ml-auto max-w-[540px] font-serif leading-[1.7] tracking-[0.035em] text-[rgba(29,41,40,0.94)]`}
            >
              <span className="block text-[18px] text-[rgba(29,41,40,0.88)] sm:text-[21px]">
                カーテンが揺れる、遅い朝。
              </span>

              <span className="mt-2 block whitespace-nowrap text-[28px] sm:text-[36px]">
                何もしない時間が、贅沢になる。
              </span>
            </p>

            <div
              className={`${fade.fade} ${fade.d4} ${inClass} mt-12 flex flex-col items-end gap-4`}
            >
              <a href="#reservation" className={fade.cta}>
                <span>宿泊プランを見る</span>
                <span aria-hidden="true" className={fade.ctaLine} />
              </a>

              <span className="font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.40)]">
                1日1組限定
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 text-[rgba(29,41,40,0.34)] sm:flex lg:right-16">
        <span className="font-sans text-[10px] tracking-[0.24em]">
          Scroll
        </span>
        <span className="h-px w-10 bg-[rgba(29,41,40,0.22)]" />
      </div>
    </section>
  );
}

export default Hero;