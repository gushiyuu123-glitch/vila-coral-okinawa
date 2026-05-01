import { useMemo } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

const INFO_ROWS = [
  { label: "REPLY", value: "24時間以内を目安" },
  { label: "PRICE", value: "空室確認後にご案内" },
  { label: "CONFIRM", value: "内容確認後に確定" },
];

export default function Reservation() {
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";

  const nights = useMemo(() => ["1泊", "2泊", "3泊", "4泊以上"], []);
  const guests = useMemo(() => ["1名", "2名", "3名", "4名"], []);

  const inputClass =
    "w-full border-0 border-b border-[rgba(32,63,65,0.14)] bg-transparent pb-2 font-sans text-[13px] tracking-[0.02em] text-[rgba(29,41,40,0.90)] outline-none transition duration-500 placeholder:text-[rgba(32,63,65,0.30)] focus:border-[rgba(32,63,65,0.38)]";

  const labelClass =
    "font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.44)]";

  return (
    <section
      id="reservation"
      ref={sectionRef}
      aria-label="Vila Coral reservation"
      className="relative overflow-hidden bg-base py-24 scroll-mt-[88px] sm:py-28 lg:py-32"
    >
      {/* right memory image */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[46%] overflow-hidden md:block lg:w-[38%]"
        aria-hidden="true"
      >
        <img
          src="/images/reservation-vertical.jpeg"
          alt=""
          className="h-full w-full object-cover object-[52%_50%] opacity-[0.28] brightness-[1.03] saturate-[0.76]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(247,245,239,0.00)_0%,rgba(247,245,239,0.18)_30%,rgba(247,245,239,0.88)_78%,rgba(247,245,239,1)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,32,34,0.08)_0%,rgba(18,32,34,0.00)_32%,rgba(18,32,34,0.10)_100%)]" />

        <div className="absolute inset-0">
          <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-base to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-base to-transparent" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base to-transparent" />
        </div>
      </div>

      {/* ambient word */}
      <div
        className="pointer-events-none absolute bottom-[8%] left-[-1.5vw] z-0 hidden lg:block"
        aria-hidden="true"
      >
        <p className="font-logo text-[118px] leading-none tracking-[0.045em] text-[rgba(32,63,65,0.045)]">
          RESERVE
        </p>
      </div>

      <div
        className="pointer-events-none absolute left-0 top-[22%] h-px w-full bg-[linear-gradient(90deg,transparent,rgba(32,63,65,0.10),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative pt-16 sm:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:items-start lg:gap-20">
            {/* left */}
            <div className="relative z-10 lg:pt-6">
              <p
                className={`${reveal.reveal} ${reveal.d1} ${inClass} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.44)]`}
              >
                RESERVATION
              </p>

             <h2
  className={`${reveal.reveal} ${reveal.d2} ${inClass} mt-8 font-serif text-[21px] leading-[1.72] tracking-[0.03em] text-[rgba(29,41,40,0.92)] sm:text-[27px] lg:text-[28px]`}
              >
               旅の日程が見えたら、
                <br />
               まず空室状況をご確認ください。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-7 max-w-[430px] font-sans text-[13px] leading-[2.08] tracking-[0.04em] text-[rgba(32,63,65,0.62)]`}
              >
  Vila Coralは、1日1組のみのご案内です。
ご希望日・泊数・人数をお送りいただければ、
空室状況と目安料金を確認してご返信します。
送信だけで予約は確定しません。
内容をご確認いただいたあと、正式なご予約へ進みます。
              </p>

              <div
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-10 max-w-[420px] border-y border-[rgba(32,63,65,0.10)] py-2`}
              >
                {INFO_ROWS.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between py-3 font-sans text-[11px] tracking-[0.16em] text-[rgba(32,63,65,0.44)] ${
                      index !== INFO_ROWS.length - 1
                        ? "border-b border-[rgba(32,63,65,0.08)]"
                        : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[rgba(32,63,65,0.60)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className={`${reveal.reveal} ${reveal.d5} ${inClass} mt-10 max-w-[390px] font-sans text-[10px] leading-[2.0] tracking-[0.13em] text-[rgba(32,63,65,0.38)]`}
              >
                料金は時期・泊数により変動します。送信だけで予約確定にはなりません。
              </p>
            </div>

            {/* right */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-x-4 top-8 h-[82%] border border-[rgba(32,63,65,0.06)] bg-[rgba(255,253,248,0.28)] shadow-[0_34px_90px_rgba(20,36,38,0.07)] sm:-inset-x-6"
                aria-hidden="true"
              />

              <div
                className={`${reveal.reveal} ${reveal.d2} ${inClass} relative border border-[rgba(32,63,65,0.11)] bg-[rgba(255,253,248,0.88)] shadow-[0_28px_80px_rgba(20,36,38,0.11)] backdrop-blur-[0.2px]`}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.36)_0%,rgba(255,255,255,0.00)_42%,rgba(32,63,65,0.025)_100%)]"
                  aria-hidden="true"
                />

                <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
                  <div className="flex items-start justify-between gap-8 border-b border-[rgba(32,63,65,0.10)] pb-8">
                    <div>
                      <p className={labelClass}>CHECK AVAILABILITY</p>

                      <p className="mt-4 font-serif text-[20px] leading-[1.8] tracking-[0.02em] text-[rgba(29,41,40,0.90)] sm:text-[23px]">
                        空室確認フォーム
                      </p>
                    </div>

                    <p className="hidden pt-1 text-right font-logo text-[32px] leading-none tracking-[0.06em] text-[rgba(32,63,65,0.10)] sm:block">
                      01
                    </p>
                  </div>

                  <form className="mt-9 grid gap-8">
                    <label className="grid gap-2">
                      <span className={labelClass}>NAME</span>
                      <input
                        type="text"
                        placeholder="お名前"
                        autoComplete="name"
                        className={inputClass}
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className={labelClass}>EMAIL</span>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                    </label>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className={labelClass}>CHECK-IN</span>
                        <input type="date" className={inputClass} />
                      </label>

                      <label className="grid gap-2">
                        <span className={labelClass}>NIGHTS</span>
                        <select className={inputClass} defaultValue={nights[0]}>
                          {nights.map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className={labelClass}>GUESTS</span>
                      <select className={inputClass} defaultValue={guests[1]}>
                        {guests.map((guest) => (
                          <option key={guest} value={guest}>
                            {guest}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className={labelClass}>MESSAGE</span>
                      <textarea
                        rows={4}
                        placeholder="到着時間、ご希望、確認したいことなど（任意）"
                        className={`${inputClass} resize-none leading-[2.0]`}
                      />
                    </label>

                    <div className="mt-2 border-t border-[rgba(32,63,65,0.10)] pt-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-[300px] font-sans text-[10px] leading-[1.9] tracking-[0.12em] text-[rgba(32,63,65,0.38)]">
                          空室状況と料金を確認後、24時間以内を目安にご連絡します。
                        </p>

                        <button
                          type="button"
                          className="group inline-flex w-fit items-center gap-4 border border-[rgba(32,63,65,0.15)] bg-[rgba(255,253,248,0.90)] px-7 py-[12px] font-sans text-[11px] tracking-[0.18em] text-[rgba(29,41,40,0.88)] shadow-[0_16px_44px_rgba(20,36,38,0.10)] transition duration-500 hover:border-[rgba(32,63,65,0.25)] hover:bg-[rgba(255,253,248,0.98)] hover:shadow-[0_22px_60px_rgba(20,36,38,0.14)] active:translate-y-[1px]"
                        >
                          <span>空室確認を送る</span>
                          <span
                            className="h-px w-10 bg-[rgba(29,41,40,0.26)] transition-all duration-500 group-hover:w-16 group-hover:bg-[rgba(29,41,40,0.46)]"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <p
                className={`${reveal.reveal} ${reveal.d4} ${inClass} mt-6 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
              >
                PRIVATE / SEASIDE / VILA CORAL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}