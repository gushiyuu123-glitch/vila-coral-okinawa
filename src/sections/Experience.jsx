import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

export default function Experience() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-label="Experience"
      className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28"
    >
      {/* soft air */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(216,199,173,0.18),transparent_34%),radial-gradient(circle_at_14%_78%,rgba(32,63,65,0.06),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(255,255,255,0.42)] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* divider */}
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-[rgba(32,63,65,0.10)]" />
          <p
            className={`${reveal.reveal} ${reveal.d1} ${inClass} hidden font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.34)] sm:block`}
          >
            MORNING AT VILA CORAL
          </p>
        </div>

        <div className="relative pt-16 sm:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,460px)_1fr] lg:items-start lg:gap-16">
            {/* text */}
            <div className="relative z-10 lg:pt-8">
              <p
                className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.44)]`}
              >
                EXPERIENCE
              </p>

              <h2
                className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-8 font-serif text-[24px] leading-[1.72] tracking-[0.03em] text-[rgba(29,41,40,0.92)] sm:text-[30px] lg:text-[34px]`}
              >
                朝が、
                <br />
                旅の記憶になる。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-6 max-w-[420px] font-serif text-[18px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.86)] sm:text-[19px]`}
              >
                目覚ましではなく、光の気配で起きる朝。
              </p>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 max-w-[420px] font-sans text-[13px] leading-[2.08] tracking-[0.04em] text-[rgba(32,63,65,0.58)]`}
              >
                カーテンがゆっくり揺れて、
                <br />
                白い壁に、海辺の明るさがにじむ。
                <br />
                コーヒーを淹れる音まで、少しだけ特別に聞こえる。
              </p>

              {/* small memory timeline */}
              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-10 max-w-[420px] border-y border-[rgba(32,63,65,0.10)] py-5 font-sans`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]">
                    MORNING SEQUENCE
                  </span>
                  <span className="h-[5px] w-[5px] rounded-full bg-[rgba(216,199,173,0.68)]" />
                </div>

                <div className="grid gap-3 text-[11px] tracking-[0.15em] text-[rgba(32,63,65,0.46)]">
                  <div className="flex items-center justify-between">
                    <span className="uppercase">07:12</span>
                    <span className="opacity-90">CURTAIN / LIGHT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase">08:03</span>
                    <span className="opacity-90">COFFEE / BREEZE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase">09:18</span>
                    <span className="opacity-90">SEASIDE / SLOW WALK</span>
                  </div>
                </div>
              </div>

              {/* route */}
              <div
                className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-12 flex flex-col gap-4 sm:flex-row sm:items-center`}
              >
                <a
                  href="#stay"
                  className="group inline-flex w-fit items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.84)] transition duration-500 hover:text-[rgba(29,41,40,1)]"
                >
                  <span>Stay Plan</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-[rgba(29,41,40,0.26)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(29,41,40,0.46)]"
                  />
                </a>

                <span className="font-sans text-[11px] leading-[1.8] tracking-[0.14em] text-[rgba(32,63,65,0.40)]">
                  滞在の選び方へ。
                </span>
              </div>
            </div>

            {/* images */}
            <div className="relative">
              <div className="relative min-h-[620px] sm:min-h-[720px] lg:min-h-[780px]">
                {/* ambient word */}
                <div
                  aria-hidden="true"
                  className={`${reveal.reveal} ${reveal.d2} ${inClass} pointer-events-none absolute right-[4%] top-[-4%] hidden font-serif text-[72px] leading-none tracking-[0.02em] text-[rgba(216,199,173,0.13)] lg:block`}
                >
                  slow
                </div>

                {/* main image */}
                <div className="relative ml-auto w-[92%] sm:w-[86%] lg:w-[82%]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-5 bg-[radial-gradient(circle_at_55%_35%,rgba(216,199,173,0.20),transparent_58%)]"
                  />

                  <div className={reveal.imageTiltLeft}>
                    <div
                      className={`${reveal.imageSoft} ${reveal.d2} ${imageInClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                    >
                      <img
                        src="/images/experience-morning.jpeg"
                        alt="朝の光が入る室内とカーテンの気配"
                        data-parallax="1"
                        className="h-full w-full object-cover brightness-[0.99] saturate-[0.92]"
                      />
                    </div>
                  </div>

                  <div
                    className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-3 flex items-center justify-end gap-3 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                  >
                    <span className="h-px w-8 bg-[rgba(32,63,65,0.14)]" />
                    <p>MORNING LIGHT / SEA BREEZE</p>
                  </div>
                </div>

                {/* detail image */}
                <div className="absolute left-1/2 top-[66%] w-[62%] -translate-x-1/2 sm:top-[60%] sm:w-[46%] lg:top-[58%] lg:w-[36%]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.42),transparent_62%)]"
                  />

                  <div
                    className={`${reveal.imageSoft} ${reveal.d4} ${imageInClass} relative overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                  >
                    <img
                      src="/images/experience-detail.jpeg"
                      alt="リネンや木の質感、手触りのディテール"
                      data-parallax="1"
                      className="h-full w-full object-cover brightness-[0.985] saturate-[0.88]"
                    />
                  </div>

                  <p
                    className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-3 text-center font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                  >
                    LINEN / WOOD / MORNING
                  </p>
                </div>

                {/* note */}
                <div className="absolute bottom-0 right-[2%] hidden lg:block">
                  <p
                    className={`${reveal.reveal} ${reveal.d5} ${inClass} font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                  >
                    THE DAY BEGINS SOFTLY.
                  </p>
                </div>
              </div>
            </div>
            {/* /images */}
          </div>
        </div>
      </div>
    </section>
  );
}