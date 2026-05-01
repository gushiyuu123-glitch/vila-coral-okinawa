import { useSectionReveal } from "../../hooks/useSectionReveal";
import reveal from "../../styles/SectionReveal.module.css";

const FACTS = [
  { label: "AREA", value: "OKINAWA · SEASIDE" },
  { label: "FROM AIRPORT", value: "約70分 / BY CAR" },
  { label: "ACCESS", value: "CAR / TAXI" },
  { label: "PARKING", value: "AVAILABLE" },
];

const FOOTER_LINKS = [
  { label: "Stay", href: "#stay" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Okinawa%20seaside%20villa";

export default function FooterSp() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      id="location"
      ref={sectionRef}
      aria-label="Location and footer"
      className="relative overflow-hidden bg-base text-[rgba(29,41,40,0.92)]"
    >
      {/* background image */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src="/images/location-01.jpeg"
          alt=""
          className="absolute inset-x-0 bottom-0 h-[82%] w-full scale-[1.03] object-cover object-[50%_68%] opacity-[0.58] brightness-[0.98] saturate-[0.86]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base via-[rgba(244,241,233,0.74)] to-[rgba(244,241,233,0.30)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,233,0.90)_0%,rgba(244,241,233,0.66)_44%,rgba(244,241,233,0.20)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[rgba(30,45,43,0.34)] via-[rgba(30,45,43,0.08)] to-transparent" />
      </div>

      {/* atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-34%] top-[20%] h-[520px] w-[520px] rounded-full bg-[rgba(216,199,173,0.24)] blur-[96px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-42%] bottom-[18%] h-[560px] w-[560px] rounded-full bg-[rgba(112,151,150,0.16)] blur-[110px]"
      />

      {/* large word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[7%] left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-serif text-[12vw] leading-none tracking-[0.04em] text-white/18 lg:block"
      >
        Vila Coral
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="h-px w-full bg-[rgba(32,63,65,0.12)]" />

        <div className="grid gap-14 pt-16 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-20 lg:pt-24">
          {/* text */}
          <div className="relative z-10">
            <p
              className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.48)]`}
            >
              LOCATION
            </p>

            <h2
              className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-8 font-serif text-[25px] leading-[1.72] tracking-[0.035em] text-[rgba(25,39,38,0.95)] sm:text-[32px] lg:text-[38px]`}
            >
              空港を出る。
              <br />
              街の音が、少しずつ遠ざかる。
            </h2>

            <p
              className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 max-w-[470px] font-serif text-[17px] leading-[2.05] tracking-[0.03em] text-[rgba(29,41,40,0.82)] sm:text-[19px]`}
            >
              車で約70分。海の気配が近づくころ、
              <br className="hidden sm:block" />
              滞在はゆっくりと始まります。
            </p>

            <p
              className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 max-w-[480px] font-sans text-[13px] leading-[2.15] tracking-[0.05em] text-[rgba(32,63,65,0.62)]`}
            >
              Vila Coral は、沖縄の海辺に佇む一日一組のヴィラです。
              観光地の賑わいから少し離れ、光と風の気配だけが残る場所へ。
              レンタカーやタクシーで向かいやすく、敷地内には駐車スペースも
              ご用意しています。
            </p>

            {/* facts */}
            <div
              className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-11 max-w-[470px] border-y border-[rgba(32,63,65,0.13)] py-5 font-sans`}
            >
              {FACTS.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-6 py-3 text-[10px] tracking-[0.18em] ${
                    index !== FACTS.length - 1
                      ? "border-b border-[rgba(32,63,65,0.09)]"
                      : ""
                  }`}
                >
                  <span className="text-[rgba(32,63,65,0.44)]">
                    {item.label}
                  </span>
                  <span className="text-right text-[rgba(29,41,40,0.78)]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* note */}
            <div
              className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-8 max-w-[470px] border-l border-[rgba(32,63,65,0.18)] pl-5`}
            >
              <p className="font-sans text-[12px] leading-[2.05] tracking-[0.055em] text-[rgba(32,63,65,0.58)]">
                詳細な所在地は、ご予約確定後にご案内します。
                <br />
                初めてお越しの方にも分かりやすいよう、到着前にルートの目安を
                お送りします。
              </p>
            </div>

            {/* links */}
            <div
              className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-12 flex flex-col gap-4 sm:flex-row sm:items-center`}
            >
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-4 font-sans text-[11px] tracking-[0.2em] text-[rgba(29,41,40,0.88)] transition duration-500 hover:text-[rgba(29,41,40,1)]"
              >
                <span>View Map</span>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[rgba(29,41,40,0.30)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(29,41,40,0.54)]"
                />
              </a>

              <a
                href="#stay"
                className="group inline-flex w-fit items-center gap-4 font-sans text-[11px] tracking-[0.2em] text-[rgba(29,41,40,0.62)] transition duration-500 hover:text-[rgba(29,41,40,0.92)]"
              >
                <span>Stay Plan</span>
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[rgba(29,41,40,0.20)] transition-all duration-500 group-hover:w-12 group-hover:bg-[rgba(29,41,40,0.38)]"
                />
              </a>
            </div>
          </div>

          {/* visual */}
          <div className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[720px]">
            <div className="absolute right-0 top-0 w-[86%] sm:w-[74%] lg:w-[68%]">
              <div className={reveal.imageTiltLeft}>
                <div
                  className={`${reveal.imageSoft} ${reveal.d2} ${imageInClass} aspect-[4/5] overflow-hidden border border-white/40 bg-paper shadow-soft`}
                >
                  <img
                    src="/images/location-02.jpeg"
                    alt="沖縄の素材感が伝わるヴィラ周辺のディテール"
                    data-parallax="1"
                    className="h-full w-full object-cover brightness-[0.98] saturate-[0.88]"
                  />
                </div>
              </div>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-3 text-right font-sans text-[10px] tracking-[0.2em] text-[rgba(32,63,65,0.38)]`}
              >
                STONE / WIND / LOCAL TEXTURE
              </p>
            </div>

            <div
              className={`${reveal.reveal} ${reveal.d4} ${inClass} absolute left-0 top-[47%] w-[66%] border border-[rgba(255,255,255,0.42)] bg-[rgba(244,241,233,0.68)] px-6 py-7 shadow-soft sm:w-[50%] lg:w-[42%]`}
            >
              <p className="font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.42)]">
                ARRIVAL
              </p>
              <p className="mt-5 font-serif text-[18px] leading-[1.9] tracking-[0.04em] text-[rgba(29,41,40,0.86)]">
                目的地に着く前から、
                <br />
                心が少し静かになる。
              </p>
            </div>

            <div
              aria-hidden="true"
              className={`${reveal.reveal} ${reveal.d5} ${inClass} absolute bottom-[8%] right-[5%] hidden font-sans text-[10px] tracking-[0.28em] text-[rgba(32,63,65,0.30)] lg:block [writing-mode:vertical-rl]`}
            >
              FROM AIRPORT TO THE SEA
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className="relative mt-20 border-t border-[rgba(32,63,65,0.13)] pt-10 sm:mt-24 lg:mt-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-serif text-[28px] tracking-[0.08em] text-[rgba(25,39,38,0.9)] sm:text-[36px]">
                Vila Coral
              </p>
              <p className="mt-3 font-sans text-[10px] tracking-[0.28em] text-[rgba(32,63,65,0.42)]">
                PRIVATE SEASIDE VILLA / OKINAWA
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-7 gap-y-4"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[10px] tracking-[0.22em] text-[rgba(29,41,40,0.58)] transition duration-500 hover:text-[rgba(29,41,40,0.92)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 flex flex-col gap-3 font-sans text-[10px] tracking-[0.16em] text-[rgba(32,63,65,0.38)] sm:flex-row sm:items-center sm:justify-between">
            <p>© Vila Coral. All rights reserved.</p>
            <p>Quiet stay, soft light, sea breeze.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}