import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

export default function Concept() {
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(216,199,173,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.16),transparent_42%,rgba(32,63,65,0.035))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.035] [background-image:linear-gradient(rgba(32,63,65,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(32,63,65,0.55)_1px,transparent_1px)] [background-size:96px_96px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36">
          {/* 背景の気配 */}
          <div
            data-floatword
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-10 font-logo text-[86px] leading-none tracking-[0.05em] text-[rgba(32,63,65,0.035)] sm:text-[130px] lg:text-[205px]"
          >
            VILA CORAL
          </div>

          <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">
            {/* 左カラム */}
            <div className="relative col-span-12 lg:col-span-5">
              <p
                className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.46)]`}
              >
                CONCEPT
              </p>

              <h2
                className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-8 font-serif text-[30px] leading-[1.62] tracking-[0.02em] text-[rgba(29,41,40,0.92)] sm:text-[38px]`}
              >
                沖縄の光を、
                <br />
                一組の時間へ。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-10 max-w-[430px] font-sans text-[14px] leading-[2.1] tracking-[0.03em] text-[rgba(32,63,65,0.64)]`}
              >
                Vila Coral は、一日一組のためのヴィラ。
                <br />
                誰かの予定に合わせるのではなく、
                <br />
            白い光、海風、部屋の静けさを、
                <br />
          自分たちの速度で味わうための場所です。
              </p>

              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-10 h-px w-[120px] bg-[linear-gradient(90deg,rgba(32,63,65,0.20),rgba(32,63,65,0))]`}
                aria-hidden="true"
              />

              {/* one group reason */}
              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-12 max-w-[410px] border-l border-[rgba(32,63,65,0.16)] pl-6`}
              >
                <p className="font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.45)]">
                  ONE GROUP / ONE DAY
                </p>

                <p className="mt-5 font-serif text-[18px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.9)]">
                  一日一組にしているのは、
                  <br />
                  景色も、時間も、気配も、
                  <br />
                  薄めずに味わってほしいから。
                </p>

                <p className="mt-5 font-sans text-[13px] leading-[2] tracking-[0.03em] text-[rgba(32,63,65,0.58)]">
                  共用のにぎわいや、人の出入りをできるだけ遠ざけることで、
                  滞在そのものがゆっくり深まっていく。Vila Coral が大切にしているのは、
                  豪華さよりも、旅の輪郭が整っていく感覚です。
                </p>
              </div>

              {/* 2枚目（右傾き）：ディテール */}
  {/* 2枚目（右傾き）：ディテール */}
<div className="relative mt-32 ml-2 w-[255px] sm:mt-30 sm:ml-6 sm:w-[325px] lg:mt-34 lg:-ml-2 lg:w-[365px] xl:w-[392px]">
  <div
    aria-hidden="true"
    className="absolute -left-6 -top-6 h-[72%] w-[72%] border border-[rgba(32,63,65,0.08)]"
  />

  <div
    className={`${reveal.imageSoft} ${reveal.imageTiltRight} ${reveal.d4} ${imageInClass} relative overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
  >
    <img
      src="/images/concept-stone2.jpeg"
      alt="石垣と光のディテール"
      data-parallax="14"
      className="h-full w-full object-cover brightness-[0.99] saturate-[0.92]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_44%,rgba(32,63,65,0.08))]"
    />
  </div>

  <p
    className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-5 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.40)]`}
  >
    WHITE LIGHT / OLD STONE
  </p>
</div>
            </div>

            {/* 右カラム */}
            <div className="relative col-span-12 lg:col-span-7">
              {/* 1枚目（左傾き）：メイン */}
              <div className="relative ml-auto w-[88%] sm:w-[82%] lg:w-[78%]">
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -top-7 h-[82%] w-[88%] border border-[rgba(32,63,65,0.08)]"
                />
                <div
                  className={`${reveal.imageSoft} ${reveal.imageTiltLeft} ${reveal.d2} ${imageInClass} relative overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                >
                  <img
                    src="/images/concept-sea.png"
                    alt="海辺の風景"
                    data-parallax="18"
                    className="h-full w-full object-cover brightness-[0.98] saturate-[0.94] contrast-[0.98]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10),transparent_42%,rgba(32,63,65,0.10))]"
                  />
                </div>

                <p
                  className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-6 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.38)]`}
                >
                  PRIVATE EDGE OF OKINAWA
                </p>
              </div>

              {/* テキスト行 */}
              <div className="mt-16 lg:mt-20">
                <div
                  className={`${reveal.reveal} ${reveal.d3} ${inClass} border-t border-[rgba(32,63,65,0.10)] py-9`}
                >
                  <div className="grid grid-cols-12 gap-6">
                    <p className="col-span-12 font-sans text-[11px] tracking-[0.22em] text-[rgba(32,63,65,0.50)] sm:col-span-4">
                      LIGHT
                    </p>
                    <p className="col-span-12 font-serif text-[18px] leading-[1.85] text-[rgba(29,41,40,0.92)] sm:col-span-8">
                      白い光と影が、時間の流れをゆっくり見せる。
                    </p>
                  </div>
                </div>

                <div
                  className={`${reveal.reveal} ${reveal.d4} ${inClass} border-t border-[rgba(32,63,65,0.10)] py-9`}
                >
                  <div className="grid grid-cols-12 gap-6">
                    <p className="col-span-12 font-sans text-[11px] tracking-[0.22em] text-[rgba(32,63,65,0.50)] sm:col-span-4">
                      PRIVATE
                    </p>
                    <p className="col-span-12 font-serif text-[18px] leading-[1.85] text-[rgba(29,41,40,0.92)] sm:col-span-8">
                      一日一組だから、景色を急がず、滞在を分け合わない。
                    </p>
                  </div>
                </div>

                <div
                  className={`${reveal.reveal} ${reveal.d5} ${inClass} border-y border-[rgba(32,63,65,0.10)] py-9`}
                >
                  <div className="grid grid-cols-12 gap-6">
                    <p className="col-span-12 font-sans text-[11px] tracking-[0.22em] text-[rgba(32,63,65,0.50)] sm:col-span-4">
                      BREEZE
                    </p>
                    <p className="col-span-12 font-serif text-[18px] leading-[1.85] text-[rgba(29,41,40,0.92)] sm:col-span-8">
                      海風、石垣、部屋の余白が、旅の速度をほどく。
                    </p>
                  </div>
                </div>
              </div>

              {/* 下の余韻 */}
              <div className="mt-20 flex justify-end">
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
        </div>
      </div>
    </section>
  );
}