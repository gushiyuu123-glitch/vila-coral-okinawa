import { useSectionReveal } from "../../hooks/useSectionReveal";
import reveal from "../../styles/SectionReveal.module.css";
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

export default function FooterSp() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";

  return (
    <footer
      id="footer"
      ref={sectionRef}
      aria-label="Footer"
      className="relative overflow-hidden bg-base px-6 pb-12 pt-28"
    >
      {/* background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/images/footer-vertical.jpeg"
          alt=""
          loading="lazy"
          decoding="async"
          className="
            h-full w-full object-cover object-[50%_76%]
            opacity-[0.64]
            brightness-[1.04] saturate-[0.9] contrast-[0.98]
          "
        />

        {/* soft veil */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,239,0.34)_0%,rgba(247,245,239,0.12)_34%,rgba(247,245,239,0.18)_68%,rgba(247,245,239,0.62)_100%)]" />

        {/* readability */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,245,239,0.78)_0%,rgba(247,245,239,0.48)_42%,rgba(247,245,239,0.14)_100%)]" />

        {/* coral / light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.12)_28%,rgba(255,255,255,0)_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_86%,rgba(218,194,162,0.26)_0%,rgba(218,194,162,0.08)_32%,rgba(218,194,162,0)_62%)]" />

        {/* edge blend */}
        <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-base to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[520px]">
        <div className="h-px w-full bg-[rgba(32,63,65,0.12)]" />

        <div className="pt-14">
          <p
            className={`${reveal.reveal} ${reveal.d1} ${inClass} font-logo text-[38px] leading-none tracking-[0.02em] text-[rgba(29,41,40,0.94)]`}
          >
            Vila Coral
          </p>

          <div
            className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-5 flex flex-wrap gap-x-4 gap-y-2`}
          >
            {FOOTER_META.map((item) => (
              <span
                key={item}
                className="font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.52)]"
              >
                {item}
              </span>
            ))}
          </div>

          <p
            className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-12 font-serif text-[20px] leading-[1.9] tracking-[0.025em] text-[rgba(29,41,40,0.86)]`}
          >
            海辺の時間を、
            <br />
            一棟まるごと味わうために。
          </p>

          <p
            className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-7 font-sans text-[13px] leading-[2.08] tracking-[0.04em] text-[rgba(32,63,65,0.64)]`}
          >
            Vila Coralは、1日1組だけを迎えるプライベートヴィラです。
            <br />
            誰にも急かされず、海と光に囲まれた時間をお過ごしください。
          </p>

          {/* chapters */}
          <div className="mt-16 border-t border-[rgba(32,63,65,0.12)] pt-9">
            <p
              className={`${reveal.reveal} ${reveal.d2} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.46)]`}
            >
              CHAPTERS
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4">
              {SITE_MAP.map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  className={`${reveal.reveal} ${reveal.d3} ${inClass} group flex items-center justify-between border-b border-[rgba(32,63,65,0.08)] pb-4 font-sans text-[11px] tracking-[0.17em] text-[rgba(32,63,65,0.62)] transition duration-300 hover:text-[rgba(32,63,65,0.92)]`}
                  style={{ transitionDelay: `${160 + index * 34}ms` }}
                >
                  <span>{label}</span>
                  <span className="h-px w-8 bg-[rgba(32,63,65,0.2)] transition-all duration-300 group-hover:w-12 group-hover:bg-[rgba(32,63,65,0.42)]" />
                </a>
              ))}
            </div>
          </div>

          {/* credit */}
          <div className="mt-14">
            <p
              className={`${reveal.reveal} ${reveal.d2} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.46)]`}
            >
              CREDIT
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="https://gushikendesign.com"
                target="_blank"
                rel="noreferrer noopener"
                className={`${reveal.reveal} ${reveal.d3} ${inClass} group flex items-center justify-between font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.62)] transition duration-300 hover:text-[rgba(32,63,65,0.92)]`}
              >
                <span>GUSHIKEN DESIGN</span>
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[rgba(32,63,65,0.22)] transition-all duration-300 group-hover:w-12 group-hover:bg-[rgba(32,63,65,0.42)]"
                />
              </a>

              <a
                href="https://note.com/"
                target="_blank"
                rel="noreferrer noopener"
                className={`${reveal.reveal} ${reveal.d3} ${inClass} group flex items-center justify-between font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.62)] transition duration-300 hover:text-[rgba(32,63,65,0.92)]`}
              >
                <span>制作記録 / note</span>
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[rgba(32,63,65,0.22)] transition-all duration-300 group-hover:w-12 group-hover:bg-[rgba(32,63,65,0.42)]"
                />
              </a>

              <p
                className={`${reveal.reveal} ${reveal.d4} ${inClass} pt-3 font-sans text-[10px] leading-[1.8] tracking-[0.18em] text-[rgba(32,63,65,0.42)]`}
              >
                Concept work / portfolio piece.
              </p>
            </div>
          </div>

          {/* back to top */}
          <div
            className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-14 inline-flex`}
          >
            <a
              href="#hero"
              className="group inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(32,63,65,0.54)] transition duration-500 hover:text-[rgba(32,63,65,0.84)]"
            >
              <span>Back to top</span>
              <span className="h-px w-10 bg-[rgba(32,63,65,0.24)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(32,63,65,0.46)]" />
            </a>
          </div>

          {/* bottom */}
          <div className="mt-16 border-t border-[rgba(32,63,65,0.12)] pt-6">
            <p
              className={`${reveal.reveal} ${reveal.d4} ${inClass} font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.44)]`}
            >
              © {new Date().getFullYear()} Vila Coral Okinawa
            </p>

            <p
              className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-3 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.38)]`}
            >
              SEA / CORAL / PRIVATE STAY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}