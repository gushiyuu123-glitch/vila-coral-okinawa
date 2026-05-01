import { useEffect, useRef, useState } from "react";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import reveal from "../../styles/SectionReveal.module.css";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery-01.jpeg",
    alt: "朝の光が入るVila Coralの室内",
    caption: "MORNING LIGHT",
    note: "朝は、音よりも先に光が入ってくる。",
    cols: "col-span-12 sm:col-span-7 lg:col-span-6 lg:pr-10",
    tilt: -1.2,
    imgClass: "brightness-[0.995] saturate-[0.9] contrast-[0.98]",
    captionAlign: "left",
  },
  {
    src: "/images/gallery-02.jpeg",
    alt: "外壁と素材の静かな質感",
    caption: "STONE TEXTURE",
    note: "触れた記憶だけが、少し遅れて残る。",
    cols: "col-span-10 col-start-3 sm:col-span-5 sm:col-start-auto lg:col-span-3 lg:pt-24 lg:pl-3",
    tilt: 1.6,
    imgClass: "brightness-[0.985] saturate-[0.88] contrast-[0.98]",
    captionAlign: "left",
  },
  {
    src: "/images/gallery-03.jpeg",
    alt: "海辺に近いVila Coral周辺の景色",
    caption: "PALE SEA",
    note: "海は近い。けれど、ここでは急がなくていい。",
    cols: "col-span-7 col-start-1 sm:col-span-4 lg:col-span-3 lg:pt-40 lg:pl-8",
    tilt: -0.5,
    imgClass: "brightness-[1] saturate-[0.86] contrast-[0.97]",
    captionAlign: "right",
  },
  {
    src: "/images/gallery-04.jpeg",
    alt: "カーテン越しにやわらかな光が入る室内",
    caption: "CURTAIN / BREEZE",
    note: "布が揺れるだけで、時間の流れが変わる。",
    cols: "col-span-11 col-start-2 sm:col-span-6 sm:col-start-auto lg:col-span-4 lg:-mt-4 lg:pl-6",
    tilt: 1,
    imgClass: "brightness-[0.995] saturate-[0.88] contrast-[0.98]",
    captionAlign: "left",
  },
  {
    src: "/images/gallery-05.jpeg",
    alt: "海辺に近いVila Coral周辺の景色",
    caption: "SEASIDE VILLA",
    note: "旅の終わりに、思い出す場所がある。",
    cols: "col-span-12 sm:col-span-6 lg:col-span-8 lg:pl-16 lg:pr-6",
    tilt: -1,
    imgClass: "brightness-[0.995] saturate-[0.89] contrast-[0.98]",
    captionAlign: "left",
  },
];

export default function GallerySp() {
  const [sectionRef, headVisible] = useSectionReveal();
  const headIn = headVisible ? reveal.in : "";

  const [seen, setSeen] = useState(() =>
    Array(GALLERY_ITEMS.length).fill(false)
  );

  const itemRefs = useRef([]);
  const observed = useRef(new Set());
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean);

    if (!nodes.length) return;
    if (typeof window === "undefined") return;

    const revealAll = () => {
      setSeen(() => Array(GALLERY_ITEMS.length).fill(true));
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const upcoming = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            el: entry.target,
            idx: Number(entry.target.getAttribute("data-gi")),
            top: entry.boundingClientRect.top,
          }))
          .filter((item) => !Number.isNaN(item.idx));

        if (!upcoming.length) return;

        upcoming.sort((a, b) => a.top - b.top);

        upcoming.forEach((item, order) => {
          if (observed.current.has(item.idx)) return;

          observed.current.add(item.idx);
          io.unobserve(item.el);

          const timeout = window.setTimeout(() => {
            setSeen((prev) => {
              if (prev[item.idx]) return prev;

              const next = [...prev];
              next[item.idx] = true;
              return next;
            });
          }, order * 135);

          timeoutsRef.current.push(timeout);
        });
      },
      {
        root: null,
        rootMargin: "-12% 0px -28% 0px",
        threshold: 0.12,
      }
    );

    nodes.forEach((node) => {
      const idx = Number(node.getAttribute("data-gi"));

      if (!observed.current.has(idx)) {
        io.observe(node);
      }
    });

    return () => {
      io.disconnect();
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, []);

  const memoryStyle = (src) => ({
    "--memory-image": `url('${src}')`,
  });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      aria-label="Gallery"
      className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-32"
    >
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-28%] top-[5%] h-[420px] w-[420px] rounded-full bg-[rgba(204,222,218,0.20)] blur-[96px]" />
        <div className="absolute right-[-30%] bottom-[8%] h-[520px] w-[520px] rounded-full bg-[rgba(216,199,173,0.18)] blur-[110px]" />
        <div className="absolute left-[8%] top-[38%] h-[260px] w-[260px] rounded-full bg-[rgba(255,255,255,0.34)] blur-[80px]" />
        <div className="absolute left-1/2 top-[46%] h-px w-[82%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(32,63,65,0.11),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_32%,rgba(235,229,216,0.22)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative pt-14 sm:pt-20 lg:pt-24">
          {/* heading */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,430px)_1fr] lg:gap-16">
            <div>
              <p
                className={`${reveal.reveal} ${reveal.d1} ${headIn} font-sans text-[10px] tracking-[0.24em] text-[rgba(32,63,65,0.42)]`}
              >
                SCENES
              </p>

              <h2
                className={`${reveal.reveal} ${reveal.d2} ${headIn} mt-8 font-serif text-[25px] leading-[1.72] tracking-[0.035em] text-[rgba(29,41,40,0.92)] sm:text-[30px] lg:text-[36px]`}
              >
                旅の記憶は、
                <br />
                光と手触りで
                <br className="sm:hidden" />
                残っていく。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${headIn} mt-7 max-w-[390px] font-sans text-[13px] leading-[2.08] tracking-[0.045em] text-[rgba(32,63,65,0.58)]`}
              >
                朝の光、窓辺の布、海までの距離。
                <br />
                石の質感、風が抜ける室内。
                <br />
                Vila Coralで過ごす時間を、
                <br />
                静かな断片として残しました。
              </p>
            </div>

            <div className="flex items-end lg:justify-end">
              <div
                className={`${reveal.reveal} ${reveal.d4} ${headIn} max-w-[420px] lg:text-right`}
              >
                <p className="font-sans text-[10px] tracking-[0.2em] text-[rgba(32,63,65,0.34)]">
                  LIGHT / SEA / STONE / LINEN / ROOM
                </p>

                <p className="mt-5 hidden font-serif text-[15px] leading-[2] tracking-[0.035em] text-[rgba(29,41,40,0.54)] lg:block">
                  写真は、説明ではなく記憶に近い。
                  <br />
                  見た景色よりも、そこで流れていた時間を残す。
                </p>
              </div>
            </div>
          </div>

          {/* collage */}
          <div className="relative mt-[4.8rem] sm:mt-20 lg:mt-28">
            <div
              className="pointer-events-none absolute left-[5%] top-[12%] hidden font-serif text-[104px] leading-none tracking-[0.08em] text-[rgba(32,63,65,0.035)] lg:block"
              aria-hidden="true"
            >
              memory
            </div>

            <div
              className="pointer-events-none absolute right-[4%] top-[44%] hidden -rotate-90 font-sans text-[10px] tracking-[0.28em] text-[rgba(32,63,65,0.22)] lg:block"
              aria-hidden="true"
            >
              AFTER THE QUIET STAY
            </div>

            <div className="grid grid-cols-12 gap-y-13 sm:gap-x-8 sm:gap-y-16 lg:gap-x-12 lg:gap-y-[5.2rem]">
              {GALLERY_ITEMS.map((item, index) => {
                const imgIn = seen[index] ? reveal.imageIn : "";
                const capIn = seen[index] ? reveal.in : "";

                return (
                  <div key={item.src} className={item.cols}>
                    <div
                      ref={(node) => {
                        itemRefs.current[index] = node;
                      }}
                      data-gallery-item="true"
                      data-gi={index}
                      className="relative"
                    >
                      <div
                        style={{
                          transform: item.tilt
                            ? `rotate(${item.tilt}deg)`
                            : "none",
                          transformOrigin: "center",
                        }}
                      >
                        <div
                          style={memoryStyle(item.src)}
                          className={`${reveal.imageSoft} ${reveal.d2} ${imgIn} ${reveal.memoryFrame} group relative overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            data-parallax="1"
                            loading={index < 2 ? "eager" : "lazy"}
                            decoding="async"
                            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 56vw, 92vw"
                            className={`${reveal.memoryMain} h-full w-full object-cover ${item.imgClass}`}
                          />

                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_36%,rgba(21,37,38,0.10)_100%)] opacity-80"
                          />
                          <span
                            aria-hidden="true"
                            className={reveal.memoryEdgeBlur}
                          />
                          <span
                            aria-hidden="true"
                            className={reveal.memoryVeil}
                          />
                        </div>
                      </div>

                      <div
                        className={`${reveal.reveal} ${reveal.d3} ${capIn} mt-4 ${
                          item.captionAlign === "right" ? "text-right" : ""
                        }`}
                      >
                        <p className="font-sans text-[10px] tracking-[0.2em] text-[rgba(32,63,65,0.36)]">
                          {item.caption}
                        </p>

                        <p className="mt-2 font-serif text-[13px] leading-[1.85] tracking-[0.025em] text-[rgba(29,41,40,0.58)]">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* note */}
          <div className="mt-18 flex justify-end sm:mt-22 lg:mt-24">
            <div
              className={`${reveal.reveal} ${reveal.d5} ${headIn} max-w-[380px] text-right`}
            >
              <p className="font-serif text-[18px] leading-[1.9] tracking-[0.025em] text-[rgba(29,41,40,0.78)] sm:text-[20px]">
                気に入った景色を、
                <br />
                あとから何度も
                <br className="sm:hidden" />
                思い出せるように。
              </p>

              <p className="mt-5 font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.32)]">
                Vila Coral / MEMORY ARCHIVE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}