import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

const SITE_MAP = [
  ["Concept", "#concept"],
  ["Room", "#room"],
  ["Experience", "#experience"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
  ["Stay Plan", "#stay"],
  ["Reservation", "#reservation"],
];

const FOOTER_META = ["ONE GROUP", "PRIVATE VILLA", "OKINAWA"];

export default function Footer() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";

  return (
    <footer
      id="footer"
      ref={sectionRef}
      aria-label="Footer"
      className="relative overflow-hidden bg-base py-24 sm:py-28 lg:py-32"
    >
      {/* background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/images/footer-vertical.jpeg"
          alt=""
          loading="lazy"
          decoding="async"
          className="
            h-full w-full object-cover object-[50%_72%]
            opacity-[0.52]
            brightness-[1.02] saturate-[0.92] contrast-[0.98]
          "
        />

        {/* soft paper layer */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,239,0.38)_0%,rgba(247,245,239,0.12)_36%,rgba(247,245,239,0.16)_70%,rgba(247,245,239,0.46)_100%)]" />

        {/* text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,245,239,0.72)_0%,rgba(247,245,239,0.46)_34%,rgba(247,245,239,0.18)_66%,rgba(247,245,239,0.04)_100%)]" />

        {/* light / coral tone */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0.12)_26%,rgba(255,255,255,0)_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_88%,rgba(218,194,162,0.22)_0%,rgba(218,194,162,0.08)_30%,rgba(218,194,162,0)_60%)]" />

        {/* edge blend */}
        <div className="absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-base to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-base to-transparent" />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-base to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative pt-16 sm:pt-20 lg:pt-24">
          {/* ambient word */}
          <div className="pointer-events-none absolute right-0 top-[-18px] hidden lg:block">
            <p className="font-logo text-[96px] tracking-[0.035em] text-[rgba(32,63,65,0.06)]">
              VILA CORAL
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-[54px] right-0 hidden lg:block">
            <p className="font-sans text-[10px] tracking-[0.32em] text-[rgba(32,63,65,0.30)] [writing-mode:vertical-rl]">
              A PRIVATE VILLA BY THE SEA
            </p>
          </div>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* brand / epilogue */}
            <div className="lg:col-span-5">
              <p
                className={`${reveal.reveal} ${reveal.d1} ${inClass} font-logo text-[34px] tracking-[0.02em] text-[rgba(29,41,40,0.94)] sm:text-[40px]`}
              >
                Vila Coral
              </p>

              <div
                className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-5 flex flex-wrap gap-x-4 gap-y-2`}
              >
                {FOOTER_META.map((item) => (
                  <span
                    key={item}
                    className="font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.50)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-10 max-w-[470px] font-serif text-[18px] leading-[1.95] tracking-[0.025em] text-[rgba(29,41,40,0.84)] sm:text-[19px]`}
              >
                海辺の時間を、
                <br />
                一棟まるごと味わうために。
              </p>

              <p
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-8 max-w-[470px] font-sans text-[13px] leading-[2.08] tracking-[0.04em] text-[rgba(32,63,65,0.62)]`}
              >
                Vila Coralは、1日1組だけを迎えるプライベートヴィラです。
                <br />
                誰にも急かされず、海と光に囲まれた時間をお過ごしください。
              </p>

              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-12 inline-flex`}
              >
                <a
                  href="#hero"
                  className="group inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(32,63,65,0.54)] transition duration-500 hover:text-[rgba(32,63,65,0.82)]"
                >
                  <span>Back to top</span>
                  <span className="h-px w-10 bg-[rgba(32,63,65,0.22)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(32,63,65,0.42)]" />
                </a>
              </div>
            </div>

            {/* map / credit */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                  <p
                    className={`${reveal.reveal} ${reveal.d2} ${inClass} font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.46)]`}
                  >
                    CHAPTERS
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-4">
                    {SITE_MAP.map(([label, href]) => (
                      <a
                        key={href}
                        href={href}
                        className={`${reveal.reveal} ${reveal.d3} ${inClass} group inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.60)] transition duration-300 hover:text-[rgba(32,63,65,0.90)]`}
                      >
                        <span className="h-px w-4 bg-[rgba(32,63,65,0.18)] transition-all duration-300 group-hover:w-6 group-hover:bg-[rgba(32,63,65,0.36)]" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 lg:text-right">
                  <p
                    className={`${reveal.reveal} ${reveal.d2} ${inClass} font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.46)]`}
                  >
                    CREDIT
                  </p>

                  <div className="mt-7 space-y-4">
                    <a
                      href="https://gushikendesign.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`${reveal.reveal} ${reveal.d3} ${inClass} group inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.60)] transition duration-300 hover:text-[rgba(32,63,65,0.90)] lg:justify-end`}
                    >
                      <span>GUSHIKEN DESIGN</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-[rgba(32,63,65,0.22)] transition-all duration-300 group-hover:w-12 group-hover:bg-[rgba(32,63,65,0.40)]"
                      />
                    </a>

                    <a
                      href="https://note.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`${reveal.reveal} ${reveal.d3} ${inClass} group inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.60)] transition duration-300 hover:text-[rgba(32,63,65,0.90)] lg:justify-end`}
                    >
                      <span>制作記録 / note</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-[rgba(32,63,65,0.22)] transition-all duration-300 group-hover:w-12 group-hover:bg-[rgba(32,63,65,0.40)]"
                      />
                    </a>

                    <p
                      className={`${reveal.reveal} ${reveal.d4} ${inClass} font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.40)]`}
                    >
                      Concept work / portfolio piece.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom line */}
          <div className="mt-16 border-t border-[rgba(32,63,65,0.10)] pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p
                className={`${reveal.reveal} ${reveal.d4} ${inClass} font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.44)]`}
              >
                © {new Date().getFullYear()} Vila Coral Okinawa
              </p>

              <p
                className={`${reveal.reveal} ${reveal.d5} ${inClass} font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.38)]`}
              >
                SEA / CORAL / PRIVATE STAY
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}