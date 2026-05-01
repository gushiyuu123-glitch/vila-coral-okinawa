import { useSectionReveal } from "../../hooks/useSectionReveal";
import reveal from "../../styles/SectionReveal.module.css";

export default function InterludeSp() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      ref={sectionRef}
      aria-label="Interlude"
      className="relative overflow-hidden bg-base py-10 sm:py-12 lg:py-10"
    >
      {/* ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(216,199,173,0.16),transparent_34%),radial-gradient(circle_at_72%_42%,rgba(255,255,255,0.54),transparent_38%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[50%] h-px w-[34vw] rotate-[-16deg] bg-[linear-gradient(90deg,transparent,rgba(32,63,65,0.12),transparent)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[36%] h-px w-[18vw] rotate-[-16deg] bg-[linear-gradient(90deg,transparent,rgba(216,199,173,0.20),transparent)]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative py-24 sm:py-28 lg:py-32">
          {/* image */}
          <div className="pointer-events-none absolute left-[-8%] top-[54%] z-0 w-[250px] sm:left-[-4%] sm:top-[47%] sm:w-[330px] lg:left-[-3%] lg:top-[40%] lg:w-[460px]">
            <div
              className={`${reveal.imageSoft} ${reveal.imageTiltRight} ${reveal.d2} ${imageInClass} relative overflow-hidden shadow-soft`}
            >
              <img
                src="/images/interlude-curtain.png"
                alt="カーテン越しの静かな光"
                data-parallax="1"
                className="h-full w-full object-cover brightness-[0.98] saturate-[0.86] contrast-[0.96]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,243,236,0.08),rgba(246,243,236,0.28)_68%,rgba(246,243,236,0.46))]"
              />
            </div>
          </div>

          {/* quiet word */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[50%] z-0 -translate-x-1/2 -translate-y-1/2 font-logo text-[54px] tracking-[0.14em] text-[rgba(32,63,65,0.035)] sm:text-[76px] lg:text-[104px]"
          >
            PAUSE
          </div>

          {/* text */}
          <div className="relative z-10 flex justify-center">
            <div className="w-full max-w-[720px] text-center">
              <p
                className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.42)]`}
              >
                A QUIET PAUSE BY THE SEA
              </p>

              <p
                className={`${reveal.reveal} ${reveal.d2} ${inClass} ${reveal.ink} mt-8 font-serif text-[22px] leading-[1.95] tracking-[0.035em] text-[rgba(29,41,40,0.91)] sm:text-[26px] lg:text-[30px]`}
              >
                予定を詰め込む旅から、
                <br />
                海辺の余白へ。
              </p>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} ${reveal.inkSoft} mx-auto mt-7 max-w-[520px] font-sans text-[13px] leading-[2.12] tracking-[0.04em] text-[rgba(32,63,65,0.57)]`}
              >
                白いカーテンを抜けた光と、
                <br />
                遠くでほどけていく海風。
               <br />
                何かを足すより、静かに戻っていくための時間。
              </p>

              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-10 flex items-center justify-center gap-5`}
                aria-hidden="true"
              >
                <span className="h-px w-12 bg-[rgba(32,63,65,0.14)]" />
                <span className="h-[6px] w-[6px] rounded-full bg-[rgba(216,199,173,0.62)]" />
                <span className="h-px w-12 bg-[rgba(32,63,65,0.14)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[rgba(32,63,65,0.08)]" />
      </div>
    </section>
  );
}