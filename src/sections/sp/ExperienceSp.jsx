import { useSectionReveal } from "../../hooks/useSectionReveal";
import reveal from "../../styles/SectionReveal.module.css";


export default function ExperienceSp() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-label="Experience"
      className="relative overflow-hidden bg-base px-5 py-24"
    >
      {/* atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(216,199,173,0.20),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(32,63,65,0.07),transparent_36%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[rgba(255,255,255,0.48)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-24 h-[72%] w-px bg-gradient-to-b from-transparent via-[rgba(32,63,65,0.10)] to-transparent"
      />

      <div className="relative mx-auto max-w-[480px]">
        {/* top label */}
        <div
          className={`${reveal.reveal} ${reveal.d1} ${inClass} flex items-center justify-between gap-5 font-sans`}
        >
          <p className="text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.42)]">
            EXPERIENCE
          </p>
          <span className="h-px flex-1 bg-[rgba(32,63,65,0.12)]" />
          <p className="text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.32)]">
            07:12
          </p>
        </div>

        {/* headline */}
        <div className="relative mt-12">
          <p
            aria-hidden="true"
            className={`${reveal.reveal} ${reveal.d1} ${inClass} pointer-events-none absolute -right-3 -top-8 font-serif text-[54px] leading-none tracking-[0.02em] text-[rgba(216,199,173,0.13)]`}
          >
            slow
          </p>

          <h2
            className={`${reveal.reveal} ${reveal.d2} ${inClass} relative font-serif text-[25px] leading-[1.78] tracking-[0.04em] text-[rgba(29,41,40,0.93)]`}
          >
            朝が、
            <br />
            旅の記憶になる。
          </h2>

          <p
            className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 font-serif text-[17px] leading-[1.95] tracking-[0.03em] text-[rgba(29,41,40,0.84)]`}
          >
            目覚ましではなく、
            <br />
            光の気配で起きる朝。
          </p>
        </div>

        {/* main visual */}
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-5 -top-8 h-56 bg-[radial-gradient(circle_at_58%_36%,rgba(216,199,173,0.20),transparent_62%)]"
          />

          <div
            className={`${reveal.imageSoft} ${reveal.d2} ${imageInClass} relative overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
          >
            <img
              src="/images/experience-morning.jpeg"
              alt="朝の光が入る室内とカーテンの気配"
              data-parallax="1"
              className="aspect-[0.78] w-full object-cover brightness-[0.99] saturate-[0.9]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.08)] via-transparent to-[rgba(29,41,40,0.16)]"
            />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 font-sans">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.72)]">
                  MORNING LIGHT
                </p>
                <p className="mt-2 text-[11px] leading-[1.7] tracking-[0.1em] text-[rgba(255,255,255,0.78)]">
                  curtain / sea breeze
                </p>
              </div>

              <span className="h-[5px] w-[5px] rounded-full bg-[rgba(255,255,255,0.72)]" />
            </div>
          </div>

          <p
            className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-4 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
          >
            THE DAY BEGINS SOFTLY.
          </p>
        </div>

        {/* prose */}
        <div className="relative mt-12 pl-7">
          <p
            className={`${reveal.reveal} ${reveal.d3} ${inClass} font-sans text-[13px] leading-[2.14] tracking-[0.045em] text-[rgba(32,63,65,0.60)]`}
          >
            カーテンがゆっくり揺れて、
            <br />
            白い壁に、海辺の明るさがにじむ。
            <br />
            コーヒーを淹れる音まで、
            <br />
            少しだけ特別に聞こえる。
          </p>
        </div>

        {/* detail image */}
        <div className="relative mt-14">
          <div className="ml-auto w-[64%]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-2 top-4 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.34)] blur-[28px]"
            />

            <div
              className={`${reveal.imageSoft} ${reveal.d4} ${imageInClass} relative overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
            >
              <img
                src="/images/experience-detail.jpeg"
                alt="リネンや木の質感、手触りのディテール"
                data-parallax="1"
                className="aspect-[0.82] w-full object-cover brightness-[0.985] saturate-[0.86]"
              />
            </div>

            <p
              className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-3 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
            >
              LINEN / WOOD / MORNING
            </p>
          </div>
        </div>

        {/* morning sequence */}
        <div
          className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-16 border-y border-[rgba(32,63,65,0.11)] py-6 font-sans`}
        >
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] text-[rgba(32,63,65,0.36)]">
              MORNING SEQUENCE
            </p>
            <span className="h-[5px] w-[5px] rounded-full bg-[rgba(216,199,173,0.72)]" />
          </div>

          <div className="grid gap-4">
            <div className="flex items-center justify-between gap-5">
              <span className="text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.42)]">
                07:12
              </span>
              <span className="h-px flex-1 bg-[rgba(32,63,65,0.09)]" />
              <span className="text-right text-[11px] tracking-[0.14em] text-[rgba(32,63,65,0.52)]">
                光で目覚める
              </span>
            </div>

            <div className="flex items-center justify-between gap-5">
              <span className="text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.42)]">
                08:03
              </span>
              <span className="h-px flex-1 bg-[rgba(32,63,65,0.09)]" />
              <span className="text-right text-[11px] tracking-[0.14em] text-[rgba(32,63,65,0.52)]">
                風とコーヒー
              </span>
            </div>

            <div className="flex items-center justify-between gap-5">
              <span className="text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.42)]">
                09:18
              </span>
              <span className="h-px flex-1 bg-[rgba(32,63,65,0.09)]" />
              <span className="text-right text-[11px] tracking-[0.14em] text-[rgba(32,63,65,0.52)]">
                海辺を歩く
              </span>
            </div>
          </div>
        </div>

        {/* route */}
        <div
          className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-12 flex items-center justify-between gap-5 font-sans`}
        >
          <a
            href="#stay"
            className="group inline-flex items-center gap-4 text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.82)] transition duration-500 hover:text-[rgba(29,41,40,1)]"
          >
            <span>Stay Plan</span>
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[rgba(29,41,40,0.25)] transition-all duration-500 group-hover:w-14 group-hover:bg-[rgba(29,41,40,0.48)]"
            />
          </a>

          <p className="text-right text-[10px] leading-[1.8] tracking-[0.14em] text-[rgba(32,63,65,0.36)]">
            滞在の
            <br />
            選び方へ
          </p>
        </div>
      </div>
    </section>
  );
}