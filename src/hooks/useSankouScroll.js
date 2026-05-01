import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clamp01 = gsap.utils.clamp(0, 1);

function toNumber(value, fallback) {
  if (value === null || value === undefined || value === "") return fallback;

  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function getComputedOpacity(el, fallback = 0) {
  if (typeof window === "undefined") return fallback;

  const opacity = Number.parseFloat(window.getComputedStyle(el).opacity);
  return Number.isFinite(opacity) ? opacity : fallback;
}

/**
 * 酔いづらいSANKOU感：
 * - translate / scale は使わない
 * - スクロールで「膜の濃度」「画像トーン」「背景ワードの濃度」だけ変える
 *
 * 対応属性：
 * - data-veil="0.85"
 * - data-veil-start="0"
 * - data-parallax="1"
 * - data-floatword
 * - data-floatword-start="0.35"
 * - data-floatword-end="1"
 */
export default function useSankouScroll(scopeRef, options = {}) {
  const {
    heroSelector = "#hero",
    veilSelector = "[data-veil]",
    toneSelector = "[data-parallax]",
    floatwordSelector = "[data-floatword]",
  } = options;

  useLayoutEffect(() => {
    const scope = scopeRef?.current;
    if (!scope || typeof window === "undefined") return;

    const mm = gsap.matchMedia();
    let refreshId = null;

    mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
      const ctx = gsap.context(() => {
        const hero = scope.querySelector(heroSelector);

        const getTrigger = (el) =>
          hero || el.closest("[data-scroll-section]") || el.closest("section") || el;

        /**
         * 1) Veil
         * 膜の濃度だけ変える。
         * CSS側で opacity: 0; にしておくと一番きれい。
         */
        gsap.utils.toArray(veilSelector, scope).forEach((el) => {
          const maxOpacity = clamp01(toNumber(el.getAttribute("data-veil"), 1));

          const startOpacity = clamp01(
            el.hasAttribute("data-veil-start")
              ? toNumber(el.getAttribute("data-veil-start"), 0)
              : getComputedOpacity(el, 0)
          );

          gsap.fromTo(
            el,
            {
              opacity: startOpacity,
            },
            {
              opacity: maxOpacity,
              ease: "none",
              scrollTrigger: {
                trigger: getTrigger(el),
                start: hero ? "top top" : "top 85%",
                end: hero ? "bottom top" : "bottom 15%",
                scrub: 0.2,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        /**
         * 2) Tone
         * data-parallax という名前は残すが、実際は移動ではなくトーン変化だけ。
         */
        gsap.utils.toArray(toneSelector, scope).forEach((el) => {
          const strength = gsap.utils.clamp(
            0.5,
            3,
            toNumber(el.getAttribute("data-parallax"), 1)
          );

          const startBrightness = gsap.utils.clamp(
            0.96,
            0.995,
            0.985 - 0.004 * (strength - 1)
          );

          const startSaturate = gsap.utils.clamp(
            0.9,
            0.98,
            0.94 - 0.01 * (strength - 1)
          );

          gsap.fromTo(
            el,
            {
              filter: `brightness(${startBrightness}) saturate(${startSaturate})`,
            },
            {
              filter: "brightness(1) saturate(1)",
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("[data-scroll-section]") || el.closest("section") || el,
                start: "top 85%",
                end: "bottom 20%",
                scrub: 0.25,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        /**
         * 3) Float Word
         * 位置は動かさず、存在感だけ立ち上げる。
         */
        gsap.utils.toArray(floatwordSelector, scope).forEach((el) => {
          const startOpacity = clamp01(
            toNumber(el.getAttribute("data-floatword-start"), 0.35)
          );

          const endOpacity = clamp01(
            toNumber(el.getAttribute("data-floatword-end"), 1)
          );

          gsap.fromTo(
            el,
            {
              opacity: startOpacity,
            },
            {
              opacity: endOpacity,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("[data-scroll-section]") || el.closest("section") || el,
                start: "top 85%",
                end: "bottom 20%",
                scrub: 0.25,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      }, scope);

      refreshId = window.requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        if (refreshId) {
          window.cancelAnimationFrame(refreshId);
          refreshId = null;
        }

        ctx.revert();
      };
    });

    return () => {
      if (refreshId) {
        window.cancelAnimationFrame(refreshId);
        refreshId = null;
      }

      mm.revert();
    };
  }, [scopeRef, heroSelector, veilSelector, toneSelector, floatwordSelector]);
}