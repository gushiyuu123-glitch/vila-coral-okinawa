import { useEffect, useRef, useState } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery-01.jpeg",
    alt: "朝の光が入るVila Coralの室内",
    caption: "MORNING LIGHT",
    cols: "col-span-12 sm:col-span-7 lg:col-span-6 lg:pr-8",
    tilt: -1.4,
    imgClass: "brightness-[0.995] saturate-[0.92]",
    captionAlign: "left",
  },
  {
    src: "/images/gallery-02.jpeg",
    alt: "外壁と素材の質感",
    caption: "STONE TEXTURE",
    cols: "col-span-10 col-start-3 sm:col-span-5 sm:col-start-auto lg:col-span-3 lg:pt-20 lg:pl-3",
    tilt: 1.8,
    imgClass: "brightness-[0.985] saturate-[0.90]",
    captionAlign: "left",
  },
  {
    src: "/images/gallery-03.jpeg",
    alt: "海辺に近いVila Coral周辺の景色",
    caption: "PALE SEA",
    cols: "col-span-6 col-start-1 sm:col-span-4 lg:col-span-3 lg:pt-36 lg:pl-8",
    tilt: -0.6,
    imgClass: "brightness-[0.995] saturate-[0.88]",
    captionAlign: "right",
  },
  {
    src: "/images/gallery-04.jpeg",
    alt: "カーテン越しに光が入る室内",
    caption: "CURTAIN / BREEZE",
    cols: "col-span-11 col-start-2 sm:col-span-6 sm:col-start-auto lg:col-span-4 lg:-mt-2 lg:pl-6",
    tilt: 1.1,
    imgClass: "brightness-[0.995] saturate-[0.90]",
    captionAlign: "left",
  },
  {
    src: "/images/gallery-05.jpeg",
    alt: "Vila Coralの外観と海辺の景色",
    caption: "SEASIDE VILLA",
    cols: "col-span-12 sm:col-span-6 lg:col-span-8 lg:pl-14 lg:pr-4",
    tilt: -1.2,
    imgClass: "brightness-[0.995] saturate-[0.91]",
    captionAlign: "left",
  },
];

export default function Gallery() {
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
          }, order * 120);

          timeoutsRef.current.push(timeout);
        });
      },
      {
        root: null,
        rootMargin: "-14% 0px -30% 0px",
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
      className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28"
    >
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-18%] top-[10%] h-[360px] w-[360px] rounded-full bg-[rgba(204,222,218,0.20)] blur-[90px]" />
        <div className="absolute right-[-18%] bottom-[6%] h-[430px] w-[430px] rounded-full bg-[rgba(216,199,173,0.17)] blur-[100px]" />
        <div className="absolute left-1/2 top-[45%] h-px w-[76%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(32,63,65,0.10),transparent)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative pt-16 sm:pt-20 lg:pt-24">
          {/* heading */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
            <div>
              <p
                className={`${reveal.reveal} ${reveal.d1} ${headIn} font-sans text-[10px] tracking-[0.22em] text-[rgba(32,63,65,0.44)]`}
              >
                GALLERY
              </p>

              <h2
                className={`${reveal.reveal} ${reveal.d2} ${headIn} mt-8 font-serif text-[24px] leading-[1.72] tracking-[0.03em] text-[rgba(29,41,40,0.92)] sm:text-[30px] lg:text-[34px]`}
              >
                旅の記憶は、
                <br />
                光と手触りで残っていく。
              </h2>

              <p
                className={`${reveal.reveal} ${reveal.d3} ${headIn} mt-7 max-w-[390px] font-sans text-[13px] leading-[2.05] tracking-[0.04em] text-[rgba(32,63,65,0.58)]`}
              >
                朝の光、窓辺の布、海までの距離、
                <br />
                石の質感、風が抜ける室内。
                <br />
                Vila Coralで過ごす時間を、
                <br />
                光の断片として残しました。
              </p>
            </div>

            <div className="flex items-end lg:justify-end">
              <p
                className={`${reveal.reveal} ${reveal.d4} ${headIn} font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
              >
                LIGHT / SEA / STONE / LINEN / ROOM
              </p>
            </div>
          </div>

          {/* collage */}
          <div className="relative mt-[4.5rem] sm:mt-20 lg:mt-28">
            <div
              className="pointer-events-none absolute left-[7%] top-[14%] hidden font-serif text-[92px] leading-none tracking-[0.08em] text-[rgba(32,63,65,0.032)] lg:block"
              aria-hidden="true"
            >
              memory
            </div>

            <div className="grid grid-cols-12 gap-y-12 sm:gap-x-8 sm:gap-y-14 lg:gap-x-12 lg:gap-y-[4.8rem]">
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
                          className={`${reveal.imageSoft} ${reveal.d2} ${imgIn} ${reveal.memoryFrame} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
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
                            className={reveal.memoryEdgeBlur}
                          />
                          <span
                            aria-hidden="true"
                            className={reveal.memoryVeil}
                          />
                        </div>
                      </div>

                      <p
                        className={`${reveal.reveal} ${reveal.d3} ${capIn} mt-3 font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)] ${
                          item.captionAlign === "right" ? "text-right" : ""
                        }`}
                      >
                        {item.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* note */}
          <div className="mt-16 flex justify-end sm:mt-20">
            <p
              className={`${reveal.reveal} ${reveal.d5} ${headIn} max-w-[350px] text-right font-serif text-[17px] leading-[1.9] tracking-[0.02em] text-[rgba(29,41,40,0.76)]`}
            >
              気に入った景色を、
              <br />
              あとから何度も思い出せるように。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}