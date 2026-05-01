import { useEffect, useRef } from "react";
import { useSectionReveal } from "../hooks/useSectionReveal";
import reveal from "../styles/SectionReveal.module.css";

export default function Film() {
  const videoRef = useRef(null);
  const [sectionRef, visible] = useSectionReveal();
  const inClass = visible ? reveal.in : "";

  useEffect(() => {
    // デバッグ：visibleが切り替わっているか確認（本番前に削除）
    console.log("[Film] visible:", visible);

    const v = videoRef.current;
    if (!v) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    if (visible) {
      v.play?.().catch((e) => console.warn("[Film] play() rejected:", e));
    } else {
      v.pause?.();
    }
  }, [visible]);

  return (
    <section
      id="film"
      ref={sectionRef}
      aria-label="Film"
      className="relative overflow-hidden bg-base py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-[rgba(32,63,65,0.10)]" />

        <div className="relative pt-16 sm:pt-20 lg:pt-24">
          {/*
            修正①: reveal.imageFlat / reveal.imageFlatIn をフレームに当てるのをやめた。
            アニメーションの opacity:0 が原因で動画が非表示になる可能性を排除。
            代わりにフレーム全体をシンプルな fade-in にしておく。
            もし reveal.imageFlatIn が transform のみの演出なら元に戻してOK。
          */}
          <div
            className={`${reveal.reveal} ${reveal.d2} ${inClass} overflow-hidden border border-[rgba(32,63,65,0.10)] bg-paper shadow-soft`}
          >
            <div className="relative aspect-[16/9] w-full">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.98] saturate-[0.84]"
                src="/video/sanpo.mp4"
                muted
                autoPlay        // 修正②: autoPlay 属性を追加
                playsInline
                loop
                preload="auto"  // 修正③: metadata → auto に変更（モバイルでの再生開始を助ける）
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,239,0.08)_0%,rgba(247,245,239,0.02)_38%,rgba(18,32,34,0.08)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(18,32,34,0.05)_0%,rgba(18,32,34,0.00)_44%,rgba(18,32,34,0.06)_100%)]" />
            </div>
          </div>

          <p
            className={`${reveal.reveal} ${reveal.d3} ${inClass} mt-6 text-right font-sans text-[10px] tracking-[0.18em] text-[rgba(32,63,65,0.34)]`}
          >
            A QUIET MEMORY IN MOTION
          </p>
        </div>
      </div>
    </section>
  );
}