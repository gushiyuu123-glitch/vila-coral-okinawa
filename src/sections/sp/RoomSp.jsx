import { useSectionReveal } from "../../hooks/useSectionReveal";
import reveal from "../../styles/SectionReveal.module.css";

export default function RoomSp() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      id="room"
      ref={sectionRef}
      aria-label="Room"
      className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-32"
    >
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_10%,rgba(222,205,178,0.20),transparent_34%),radial-gradient(circle_at_8%_58%,rgba(255,255,255,0.36),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.44),transparent_38%,rgba(226,218,201,0.18))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-22%] top-[20%] h-[360px] w-[360px] rounded-full bg-[rgba(255,255,255,0.38)] blur-[46px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-26%] bottom-[8%] h-[300px] w-[300px] rounded-full bg-[rgba(207,188,158,0.18)] blur-[54px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative pt-14 sm:pt-18 lg:pt-24">
          {/* section head */}
          <div className="relative z-10 mb-12 lg:mb-16">
            <p
              className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.42)]`}
            >
              ROOM
            </p>

            <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-end">
              <h2
                className={`${reveal.reveal} ${reveal.d2} ${inClass} font-serif text-[25px] leading-[1.72] tracking-[0.035em] text-[rgba(29,41,40,0.93)] sm:text-[31px] lg:text-[38px]`}
              >
                白い光が、
                <br />
                部屋の輪郭を
                <br className="sm:hidden" />
                やわらかくする。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} max-w-[500px] font-sans text-[13px] leading-[2.05] tracking-[0.045em] text-[rgba(32,63,65,0.58)] lg:ml-auto lg:text-right`}
              >
                海を近くに感じながら、室内には余分な主張を置かない。
                <br className="hidden sm:block" />
                朝の光、軽いリネン、石と木の質感が、
                <br className="hidden sm:block" />
                滞在のリズムをゆっくり戻していく。
              </p>
            </div>
          </div>

          {/* visual stage */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -right-4 top-[-28px] hidden h-[118px] w-[118px] border border-[rgba(32,63,65,0.08)] sm:block"
              aria-hidden="true"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-14">
              {/* main image */}
              <div className="relative">
                <div
                  className={`${reveal.imageSoft} ${reveal.d2} ${imageInClass} relative overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                >
                  <img
                    src="/images/room-main.jpeg"
                    alt="白い光が入るヴィラの室内"
                    data-parallax="1"
                    className="aspect-[4/5] w-full object-cover brightness-[0.995] saturate-[0.90] contrast-[0.98] sm:aspect-[16/10] lg:aspect-[16/9]"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%,rgba(29,41,40,0.10))]"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute left-5 top-5 h-14 w-px bg-[rgba(255,255,255,0.42)] sm:left-7 sm:top-7"
                    aria-hidden="true"
                  />
                </div>

                <p
                  className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-3 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                >
                  WHITE LIGHT / PRIVATE ROOM
                </p>

                <div
                  className={`${reveal.reveal} ${reveal.d4} ${inClass} pointer-events-none absolute bottom-7 left-5 max-w-[230px] sm:bottom-8 sm:left-8`}
                >
                  <p className="font-serif text-[16px] leading-[1.9] tracking-[0.04em] text-[rgba(255,255,255,0.88)] drop-shadow-[0_2px_18px_rgba(0,0,0,0.18)] sm:text-[18px]">
                    旅の熱が、
                    <br />
                    少しずつほどけていく。
                  </p>
                </div>
              </div>

              {/* side text / detail */}
              <div className="relative grid gap-7 sm:grid-cols-[0.72fr_1fr] sm:items-end lg:block">
                <div className="relative w-[74%] sm:w-full lg:ml-auto lg:w-[82%]">
                  <div
                    className={`${reveal.imageSoft} ${reveal.d4} ${imageInClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                  >
                    <img
                      src="/images/room-detail.jpeg"
                      alt="石や木の質感が伝わる室内のディテール"
                      data-parallax="1"
                      className="aspect-[4/5] w-full object-cover brightness-[0.99] saturate-[0.88] contrast-[0.98]"
                    />
                  </div>

                  <p
                    className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-3 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                  >
                    STONE / WOOD / LINEN
                  </p>
                </div>

                <div
                  className={`${reveal.reveal} ${reveal.d5} ${inClass} border-t border-[rgba(32,63,65,0.10)] pt-6 sm:pt-7 lg:mt-10 lg:text-right`}
                >
                  <p className="font-serif text-[15px] leading-[1.95] tracking-[0.035em] text-[rgba(29,41,40,0.74)]">
                    窓辺に残る光まで、
                    <br />
                    滞在の一部として。
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 font-sans text-[10px] tracking-[0.16em] text-[rgba(32,63,65,0.38)] lg:justify-end">
                    <span>VILLA CORAL ROOM</span>
                    <span>NATURAL LIGHT</span>
                    <span>CORAL AIR</span>
                  </div>

                  <a
                    href="#gallery"
                    className="group mt-8 inline-flex w-fit items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.82)] transition duration-500 hover:text-[rgba(29,41,40,1)] lg:ml-auto"
                  >
                    <span>Room Photos</span>
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-[rgba(29,41,40,0.26)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(29,41,40,0.46)]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom whisper */}
          <div
            className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-14 flex items-center justify-between gap-6 border-t border-[rgba(32,63,65,0.08)] pt-6 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
          >
            <span>LIGHT AND SILENCE</span>
            <span className="hidden sm:inline">Vila Coral</span>
          </div>
        </div>
      </div>
    </section>
  );
}