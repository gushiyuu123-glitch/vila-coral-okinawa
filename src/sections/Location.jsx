import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

const FACTS = [
  { label: "AREA", value: "OKINAWA · SEASIDE" },
  { label: "FROM AIRPORT", value: "約70分 / BY CAR" },
  { label: "ACCESS", value: "CAR / TAXI" },
  { label: "PARKING", value: "AVAILABLE" },
];

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Villa%20Coral%20Okinawa";

export default function Location() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      id="location"
      ref={sectionRef}
      aria-label="Location"
      className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28"
    >
      {/* faint atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[18%] h-[520px] w-[520px] rounded-full bg-[rgba(216,199,173,0.10)] blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] bottom-[8%] h-[520px] w-[520px] rounded-full bg-[rgba(112,151,150,0.08)] blur-[100px]"
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
                LOCATION
              </p>

              <h2
                className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-8 font-serif text-[24px] leading-[1.72] tracking-[0.03em] text-[rgba(29,41,40,0.92)] sm:text-[30px] lg:text-[34px]`}
              >
              空港を出て、
                <br />
              海の気配へ向かう。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-6 max-w-[430px] font-serif text-[18px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.86)] sm:text-[19px]`}
              >
                車で約70分。海の気配が近づくころ、
                <br className="hidden sm:block" />
                滞在はゆっくり始まります。
              </p>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 max-w-[440px] font-sans text-[13px] leading-[2.05] tracking-[0.04em] text-[rgba(32,63,65,0.58)]`}
              >
                Vila Coral は、沖縄の海辺に佇む一日一組のヴィラです。
                <br />
                レンタカーやタクシーで向かいやすく、敷地内には駐車スペースも
                ご用意しています。
              </p>

              {/* facts */}
              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-10 grid max-w-[430px] gap-3 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.44)]`}
              >
                {FACTS.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between gap-6 ${
                      index !== FACTS.length - 1
                        ? "border-b border-[rgba(32,63,65,0.10)] pb-3"
                        : ""
                    }`}
                  >
                    <span className="uppercase">{item.label}</span>
                    <span className="text-right opacity-90">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* access note */}
              <div
                className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-8 max-w-[430px] border-l border-[rgba(32,63,65,0.16)] pl-5`}
              >
                <p className="font-sans text-[12px] leading-[2] tracking-[0.05em] text-[rgba(32,63,65,0.56)]">
                  詳細な所在地は、ご予約確定後にご案内します。
                  <br />
                  初めてお越しの方にも分かりやすいよう、到着前にルートの目安を
                  お送りします。
                </p>
              </div>

              {/* quiet links */}
              <div
                className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-12 flex flex-col gap-4 sm:flex-row sm:items-center`}
              >
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.84)] transition duration-500 hover:text-[rgba(29,41,40,1)]"
                >
                  <span>View Map</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-[rgba(29,41,40,0.26)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(29,41,40,0.46)]"
                  />
                </a>

                <a
                  href="#stay"
                  className="group inline-flex w-fit items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.62)] transition duration-500 hover:text-[rgba(29,41,40,0.9)]"
                >
                  <span>Stay Plan</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[rgba(29,41,40,0.18)] transition-all duration-500 group-hover:w-12 group-hover:bg-[rgba(29,41,40,0.34)]"
                  />
                </a>
              </div>
            </div>

            {/* images */}
            <div className="relative">
              <div className="relative min-h-[620px] sm:min-h-[720px] lg:min-h-[780px]">
                {/* main image */}
                <div className="relative ml-auto w-[92%] sm:w-[86%] lg:w-[82%]">
                  <div className={reveal.imageTiltLeft}>
                    <div
                      className={`${reveal.imageSoft} ${reveal.d2} ${imageInClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                    >
                      <img
                        src="/images/location-01.jpeg"
                        alt="海辺へ続く道と沖縄の光"
                        data-parallax="1"
                        className="h-full w-full object-cover brightness-[0.99] saturate-[0.90]"
                      />
                    </div>
                  </div>

                  <p
                    className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-3 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                  >
                    COAST ROAD / SOFT LIGHT
                  </p>
                </div>

                {/* detail image */}
                <div className="absolute right-[0%] top-[66%] w-[52%] sm:right-[2%] sm:top-[60%] sm:w-[42%] lg:right-[2%] lg:top-[56%] lg:w-[34%]">
                  <div className={reveal.imageTiltRight}>
                    <div
                      className={`${reveal.imageSoft} ${reveal.d4} ${imageInClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                    >
                      <img
                        src="/images/location-02.jpeg"
                        alt="沖縄の素材感が伝わるヴィラ周辺のディテール"
                        data-parallax="1"
                        className="h-full w-full object-cover brightness-[0.985] saturate-[0.88]"
                      />
                    </div>
                  </div>

                  <p
                    className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-3 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
                  >
                    STONE / WIND / LOCAL TEXTURE
                  </p>
                </div>

                {/* small vertical note */}
                <div
                  aria-hidden="true"
                  className={`${reveal.reveal} ${reveal.d5} ${inClass} absolute left-[2%] bottom-[6%] hidden font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.28)] lg:block [writing-mode:vertical-rl]`}
                >
                  FROM AIRPORT TO THE SEA
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