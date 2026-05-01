import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

const PLANS = [
  {
    name: "STANDARD STAY",
    jp: "一泊で整える、海辺の時間。",
    price: "¥48,000〜",
    unit: "/ night",
    meta: ["1 group / day", "2 guests", "seasonal"],
    points: [
      "到着した日から、部屋でゆっくり過ごせる一泊プラン。",
      "海辺まで歩ける距離にありながら、室内では落ち着いて過ごせます。",
      "観光を詰め込みすぎず、滞在そのものを楽しみたい方に。",
    ],
  },
  {
    name: "SLOW STAY",
    jp: "朝まで残る、二泊の余韻。",
    price: "¥88,000〜",
    unit: "/ 2 nights",
    meta: ["1 group / day", "2 guests", "seasonal"],
    points: [
      "一泊では足りない時間を、もう少しゆっくり味わう二泊プラン。",
      "朝の光、海風、部屋で過ごす時間まで含めて楽しめます。",
      "予定を詰める旅より、滞在を中心に過ごしたい方におすすめです。",
    ],
  },
];

export default function Stay() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageFlatIn : "";

  return (
    <section
      id="stay"
      ref={sectionRef}
      aria-label="Stay Plan"
      className="relative overflow-hidden bg-base py-20 scroll-mt-[88px] sm:py-24 lg:py-28"
    >
      {/* memory strip / curtain-linen */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[30%] overflow-hidden sm:w-[25%] lg:w-[20%]">
        <img
          src="/images/stay-vertical.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_50%] opacity-[0.24] brightness-[1.01] saturate-[0.78]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,245,239,0.20)_0%,rgba(247,245,239,0.06)_28%,rgba(247,245,239,0.00)_58%,rgba(247,245,239,0.00)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,245,239,0.00)_0%,rgba(247,245,239,0.15)_56%,rgba(247,245,239,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,32,34,0.035)_0%,rgba(18,32,34,0.00)_30%,rgba(18,32,34,0.055)_100%)]" />

        <div className="absolute inset-0">
          <div className="absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-base to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base to-transparent" />
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-base to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base to-transparent" />
        </div>
      </div>

      {/* thin atmosphere */}
      <div
        className="pointer-events-none absolute left-[11%] top-[12%] z-0 h-[260px] w-[260px] rounded-full bg-[rgba(216,199,173,0.12)] blur-[70px] sm:h-[340px] sm:w-[340px] lg:left-[18%] lg:top-[16%]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[8%] right-[8%] z-0 h-[220px] w-[220px] rounded-full bg-[rgba(255,253,248,0.40)] blur-[80px] sm:h-[300px] sm:w-[300px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="pt-16 sm:pt-20 lg:pt-24">
          <div className="mx-auto w-full max-w-[980px]">
            {/* heading */}
            <p
              className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.44)]`}
            >
              STAY PLAN
            </p>

            <h2
              className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-8 font-serif text-[24px] leading-[1.72] tracking-[0.03em] text-[rgba(29,41,40,0.92)] sm:text-[30px] lg:text-[34px]`}
            >
             一泊で整えるか、
              <br />
              二泊でほどくか。
            </h2>

            <p
              className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 max-w-[580px] font-sans text-[13px] leading-[2.05] tracking-[0.04em] text-[rgba(32,63,65,0.58)]`}
            >
              Vila Coralでは、1日1組の滞在に合わせて、
              <br />
              一泊と二泊のプランをご用意しています。
              <br />
              料金は季節や日程により変動するため、ご相談時に最新の空き状況とあわせてご案内します。
            </p>

            {/* stay info */}
            <div
              className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-10 grid max-w-[560px] gap-3 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.44)]`}
            >
              <div className="flex items-center justify-between border-b border-[rgba(32,63,65,0.10)] pb-3">
                <span>CHECK-IN</span>
                <span className="text-[rgba(29,41,40,0.86)]">15:00</span>
              </div>

              <div className="flex items-center justify-between border-b border-[rgba(32,63,65,0.10)] pb-3">
                <span>CHECK-OUT</span>
                <span className="text-[rgba(29,41,40,0.86)]">11:00</span>
              </div>

              <div className="flex items-center justify-between">
                <span>CAPACITY</span>
                <span className="text-[rgba(29,41,40,0.86)]">2 guests</span>
              </div>
            </div>

            {/* note image */}
            <div className="mt-14 max-w-[520px]">
              <div
                className={`${reveal.imageFlat} ${reveal.d3} ${imageInClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
              >
                <img
                  src="/images/stay-note.jpeg"
                  alt="白いリネンカーテンと朝の光"
                  data-parallax="1"
                  className="h-full w-full object-cover brightness-[0.995] saturate-[0.88]"
                />
              </div>

              <p
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-3 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
              >
                CURTAIN / LINEN / MORNING LIGHT
              </p>
            </div>

            {/* plan list */}
            <div className="mt-16 border-t border-[rgba(32,63,65,0.10)]">
              {PLANS.map((plan, index) => (
                <div
                  key={plan.name}
                  className="relative border-b border-[rgba(32,63,65,0.10)] py-12"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(216,199,173,0.00),rgba(216,199,173,0.34),rgba(216,199,173,0.00))]"
                    aria-hidden="true"
                  />

                  <p
                    className={`${reveal.reveal} ${reveal.d2} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.44)]`}
                  >
                    {plan.name}
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
                    {/* left */}
                    <div>
                      <p
                        className={`${reveal.reveal} ${reveal.d3} ${inClass} font-serif text-[20px] leading-[1.85] tracking-[0.03em] text-[rgba(29,41,40,0.90)] sm:text-[22px]`}
                      >
                        {plan.jp}
                      </p>

                      <div
                        className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.42)]`}
                      >
                        {plan.meta.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      <ul className="mt-8 space-y-2">
                        {plan.points.map((point) => (
                          <li
                            key={point}
                            className={`${reveal.reveal} ${reveal.d4} ${inClass} font-sans text-[13px] leading-[2.0] tracking-[0.04em] text-[rgba(32,63,65,0.58)]`}
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* right */}
                    <div className="lg:text-right">
                      <p
                        className={`${reveal.reveal} ${reveal.d3} ${inClass} font-logo text-[34px] leading-none tracking-[0.02em] text-[rgba(29,41,40,0.92)] sm:text-[40px]`}
                      >
                        {plan.price}
                      </p>

                      <p
                        className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-2 font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.42)]`}
                      >
                        {plan.unit} · seasonal
                      </p>

                      <p
                        className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-8 max-w-[260px] font-sans text-[11px] leading-[1.9] tracking-[0.08em] text-[rgba(32,63,65,0.42)] lg:ml-auto`}
                      >
                        表示料金は目安です。日程・季節により変動します。
                      </p>
                    </div>
                  </div>

                  {index === 0 && (
                    <div
                      className="pointer-events-none absolute bottom-0 right-0 hidden h-[68%] w-[1px] bg-[linear-gradient(180deg,rgba(32,63,65,0.00),rgba(32,63,65,0.10),rgba(32,63,65,0.00))] lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* closing line */}
            <div className="mt-12 flex justify-end">
              <p
                className={`${reveal.reveal} ${reveal.d6} ${inClass} max-w-[420px] text-right font-serif text-[17px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.76)]`}
              >
                旅の予定に合わせて、
                <br />
                ちょうどいい滞在をお選びください。
              </p>
            </div>

            {/* reservation bridge */}
            <div
              className={`${reveal.reveal} ${reveal.d6} ${inClass} mt-12 border-t border-[rgba(32,63,65,0.10)] pt-8`}
            >
              <p className="max-w-[620px] font-sans text-[12px] leading-[2.0] tracking-[0.05em] text-[rgba(32,63,65,0.48)]">
                空き状況・正確な料金・連泊のご相談は、ページ下部のフォームよりお問い合わせください。
                内容を確認のうえ、通常24時間以内にご案内いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}