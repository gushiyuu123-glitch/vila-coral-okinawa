import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

export default function Room() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      id="room"
      ref={sectionRef}
      aria-label="Room"
      className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28"
    >
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(216,199,173,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.34),transparent_38%,rgba(255,255,255,0.18))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-12%] top-[18%] h-[360px] w-[360px] rounded-full bg-[rgba(255,255,255,0.34)] blur-[42px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* divider */}
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative pt-16 sm:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,460px)_1fr] lg:items-start lg:gap-16">
            {/* text */}
            <div className="relative z-10 lg:pt-8">
              <p
                className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.44)]`}
              >
                ROOM
              </p>

              <h2
                className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-8 font-serif text-[24px] leading-[1.72] tracking-[0.03em] text-[rgba(29,41,40,0.92)] sm:text-[30px] lg:text-[34px]`}
              >
               白い光が、 <br />
部屋の輪郭をやわらかくする。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-6 max-w-[420px] font-serif text-[18px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.86)] sm:text-[19px]`}
              >
                旅の熱が、少しずつほどけていく。
              </p>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 max-w-[400px] font-sans text-[13px] leading-[2.05] tracking-[0.04em] text-[rgba(32,63,65,0.58)]`}
              >
                海を近くに感じながら、
                <br />
                室内には余分な主張を置かない。
                <br />
                朝の光、軽いリネン、石と木の質感が、
                <br />
                滞在のリズムをゆっくり戻していく。
              </p>

              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-10 flex flex-wrap gap-x-6 gap-y-3 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.42)]`}
              >
                <span>VILA CORAL ROOM</span>
                <span>NATURAL LIGHT</span>
                <span>STONE &amp; WOOD</span>
              </div>

              <div
                className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-12 flex flex-col gap-4 sm:flex-row sm:items-center`}
              >
                <a
                  href="#gallery"
                  className="group inline-flex w-fit items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.84)] transition duration-500 hover:text-[rgba(29,41,40,1)]"
                >
                  <span>Room Photos</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-[rgba(29,41,40,0.26)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(29,41,40,0.46)]"
                  />
                </a>

                <span className="font-sans text-[11px] tracking-[0.14em] text-[rgba(32,63,65,0.40)]">
                  光と素材で、整える一室。
                </span>
              </div>
            </div>

            {/* images */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -right-8 top-[-34px] h-[120px] w-[120px] border border-[rgba(32,63,65,0.08)]"
                aria-hidden="true"
              />

              <div className="grid gap-8 sm:gap-10">
                {/* main image */}
                <div className="relative ml-auto w-full lg:w-[92%]">
                  <div
                    className={`${reveal.imageSoft} ${reveal.d2} ${imageInClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                  >
                    <img
                      src="/images/room-main.jpeg"
                      alt="白い光が入るヴィラの室内"
                      data-parallax="1"
                      className="h-full w-full object-cover brightness-[0.99] saturate-[0.92] contrast-[0.98]"
                    />
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%,rgba(32,63,65,0.06))]"
                    aria-hidden="true"
                  />

                  <p
                    className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-3 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                  >
                    WHITE LIGHT / PRIVATE ROOM
                  </p>
                </div>

                {/* lower row */}
                <div className="grid grid-cols-12 items-end gap-6">
                  <div className="col-span-12 sm:col-span-5 lg:col-span-4">
                    <div
                      className={`${reveal.imageSoft} ${reveal.d4} ${imageInClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                    >
                      <img
                        src="/images/room-detail.jpeg"
                        alt="石や木の質感が伝わる室内のディテール"
                        data-parallax="1"
                        className="h-full w-full object-cover brightness-[0.985] saturate-[0.90] contrast-[0.98]"
                      />
                    </div>

                    <p
                      className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-3 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                    >
                      STONE / WOOD / LINEN
                    </p>
                  </div>

                  <div className="col-span-12 sm:col-span-7 lg:col-span-8">
                    <div
                      className={`${reveal.reveal} ${reveal.d5} ${inClass} ml-auto max-w-[360px] border-t border-[rgba(32,63,65,0.10)] pt-5 text-right`}
                    >
                      <p className="font-serif text-[15px] leading-[1.9] tracking-[0.03em] text-[rgba(29,41,40,0.72)]">
                        窓辺に残る光まで、
                        <br />
                        滞在の一部として。
                      </p>

                      <p className="mt-4 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]">
                        LIGHT / LINEN / CORAL AIR
                      </p>
                    </div>
                  </div>
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