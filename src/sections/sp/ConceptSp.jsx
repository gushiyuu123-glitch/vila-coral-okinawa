import { useSectionReveal } from "../../hooks/useSectionReveal";
import reveal from "../../styles/SectionReveal.module.css";

const CONCEPT_POINTS = [
  {
    label: "LIGHT",
    text: "白い光と影が、時間の流れをゆっくり見せる。",
  },
  {
    label: "PRIVATE",
    text: "一日一組だから、景色を急がず、滞在を分け合わない。",
  },
  {
    label: "BREEZE",
    text: "海風、石垣、部屋の静けさが、旅の速度をほどく。",
  },
];

export default function ConceptSp() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";
  const imageInClass = visible ? reveal.imageIn : "";

  return (
    <section
      id="concept"
      ref={sectionRef}
      className="relative overflow-hidden bg-base text-text"
      aria-label="Concept"
    >
      {/* ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_10%,rgba(216,199,173,0.2),transparent_36%),radial-gradient(circle_at_12%_72%,rgba(32,63,65,0.06),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.2),transparent_42%,rgba(32,63,65,0.035))]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(32,63,65,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(32,63,65,0.55)_1px,transparent_1px)] [background-size:84px_84px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-18px] top-10 font-logo text-[74px] leading-none tracking-[0.06em] text-[rgba(32,63,65,0.035)]"
      >
        CONCEPT
      </div>

      <div className="relative mx-auto w-full px-6">
        <div className="pb-24 pt-28">
          {/* header */}
          <div className="relative">
            <p
              className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.26em] text-[rgba(32,63,65,0.48)]`}
            >
              CONCEPT
            </p>

            <h2
              className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-7 font-serif text-[31px] leading-[1.58] tracking-[0.02em] text-[rgba(29,41,40,0.94)]`}
            >
              沖縄の光を、
              <br />
              一組の時間へ。
            </h2>

            <p
              className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-8 font-sans text-[14px] leading-[2.08] tracking-[0.035em] text-[rgba(32,63,65,0.64)]`}
            >
             Vila Coral は、
              <br />
              一日一組のための静かなヴィラ。
              <br />
              白い光、海風、部屋に残る余韻を、
              <br />
              自分たちの速度で味わうための場所です。
            </p>
          </div>

          {/* main image */}
          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-5 h-[82%] w-[82%] border border-[rgba(32,63,65,0.08)]"
            />

            <div
              className={`${reveal.imageSoft} ${reveal.imageTiltLeft} ${reveal.d2} ${imageInClass} relative h-[390px] overflow-hidden border border-[rgba(32,63,65,0.1)] bg-paper shadow-soft`}
            >
              <img
                src="/images/concept-sea.png"
                alt="海辺の風景"
                data-parallax="12"
                className="h-full w-full object-cover brightness-[0.98] saturate-[0.94] contrast-[0.98]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12),transparent_42%,rgba(32,63,65,0.11))]"
              />
            </div>

            <p
              className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-5 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.38)]`}
            >
              PRIVATE EDGE OF OKINAWA
            </p>
          </div>

          {/* one group */}
          <div
            className={`${reveal.reveal} ${reveal.d4} ${inClass} relative mt-20 border-l border-[rgba(32,63,65,0.16)] pl-6`}
          >
            <p className="font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.46)]">
              ONE GROUP / ONE DAY
            </p>

            <p className="mt-5 font-serif text-[19px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.92)]">
              一日一組にしているのは、
              <br />
              景色も、時間も、気配も、
              <br />
              薄めずに味わってほしいから。
            </p>

            <p className="mt-6 font-sans text-[13px] leading-[2.05] tracking-[0.03em] text-[rgba(32,63,65,0.6)]">
              共用のにぎわいや、人の出入りをできるだけ遠ざけることで、
              滞在そのものがゆっくり深まっていく。大切にしているのは、
              豪華さよりも、旅の輪郭が整っていく感覚です。
            </p>
          </div>

          {/* detail image */}
          <div className="relative mt-20 w-[78%]">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-[74%] w-[76%] border border-[rgba(32,63,65,0.08)]"
            />

            <div
              className={`${reveal.imageSoft} ${reveal.imageTiltRight} ${reveal.d4} ${imageInClass} relative h-[270px] overflow-hidden border border-[rgba(32,63,65,0.1)] bg-paper shadow-soft`}
            >
              <img
                src="/images/concept-stone2.jpeg"
                alt="石垣と光のディテール"
                data-parallax="10"
                className="h-full w-full object-cover brightness-[0.99] saturate-[0.92]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_44%,rgba(32,63,65,0.08))]"
              />
            </div>

            <p
              className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-5 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.4)]`}
            >
              WHITE LIGHT / OLD STONE
            </p>
          </div>

          {/* concept points */}
          <div className="mt-20">
            {CONCEPT_POINTS.map((item, index) => (
              <div
                key={item.label}
                className={`${reveal.reveal} ${
                  index === 0
                    ? reveal.d3
                    : index === 1
                      ? reveal.d4
                      : reveal.d5
                } ${inClass} border-t border-[rgba(32,63,65,0.1)] py-8 ${
                  index === CONCEPT_POINTS.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <p className="font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.48)]">
                  {item.label}
                </p>

                <p className="mt-4 font-serif text-[17px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.9)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* next link */}
          <div className="mt-16 flex justify-end">
            <a
              href="#room"
              className={`${reveal.reveal} ${reveal.d5} ${inClass} group inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.84)] transition duration-500 hover:text-[rgba(29,41,40,1)]`}
            >
              <span>Room</span>
              <span className="h-px w-10 bg-[rgba(29,41,40,0.22)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(29,41,40,0.46)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}