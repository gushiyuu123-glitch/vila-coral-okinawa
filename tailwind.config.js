/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /* ---------- Colors: CSS変数 + alpha対応 ---------- */
      colors: {
        base: "rgb(var(--base) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        sea: "rgb(var(--sea) / <alpha-value>)",
        deep: "rgb(var(--deep) / <alpha-value>)",
        sand: "rgb(var(--sand) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },

      /* ---------- Font Family ---------- */
      fontFamily: {
        logo: ['"Marcellus"', '"Times New Roman"', "serif"],

        serif: [
          '"Noto Serif JP"',
          '"Yu Mincho"',
          '"Hiragino Mincho ProN"',
          "serif",
        ],

        sans: [
          '"Noto Sans JP"',
          '"Yu Gothic"',
          '"Hiragino Sans"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],

        en: ['"Marcellus"', '"Times New Roman"', "serif"],
      },

      /* ---------- Screens ---------- */
      screens: {
        xs: "390px",
        "3xl": "1800px",
      },

      /* ---------- Layout Width ---------- */
      maxWidth: {
        stage: "1440px",
        reading: "760px",
        narrow: "960px",
        wide: "1680px",
      },

      /* ---------- Spacing ---------- */
      spacing: {
        section: "clamp(96px, 12vw, 180px)",
        "section-sm": "clamp(72px, 9vw, 128px)",
        "section-lg": "clamp(120px, 16vw, 240px)",
      },

      /* ---------- Border Radius ---------- */
      borderRadius: {
        pill: "9999px",
        soft: "28px",
        calm: "36px",
      },

      /* ---------- Shadow ---------- */
      boxShadow: {
        soft: "0 10px 30px rgba(29, 41, 40, 0.08)",
        lift: "0 18px 50px rgba(29, 41, 40, 0.12)",
        veil: "0 24px 80px rgba(29, 41, 40, 0.10)",
        nav: "0 14px 34px rgba(29, 41, 40, 0.08), 0 1px 0 rgba(255, 253, 248, 0.45)",
      },

      /* ---------- Easing ---------- */
      transitionTimingFunction: {
        still: "cubic-bezier(0.22, 0.1, 0.28, 1)",
        soft: "cubic-bezier(0.18, 0.72, 0.18, 1)",
        quiet: "cubic-bezier(0.16, 0.78, 0.16, 1)",
      },

      /* ---------- Duration ---------- */
      transitionDuration: {
        still: "680ms",
        breath: "1050ms",
        slow: "1400ms",
      },

      /* ---------- Letter Spacing ---------- */
      letterSpacing: {
        villa: "0.08em",
        whisper: "0.18em",
        label: "0.22em",
        title: "0.04em",
      },

      /* ---------- Font Size ---------- */
      fontSize: {
        label: ["11px", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        whisper: ["12px", { lineHeight: "1.9", letterSpacing: "0.16em" }],
        lead: ["15px", { lineHeight: "2.05", letterSpacing: "0.03em" }],
      },

      /* ---------- Background Image ---------- */
      backgroundImage: {
        /* Heroの光膜 */
        "hero-veil":
          "linear-gradient(90deg, rgba(255,253,248,0.08) 0%, rgba(255,253,248,0.05) 34%, rgba(255,253,248,0.10) 64%, rgba(255,253,248,0.20) 100%)",

        "hero-edge":
          "linear-gradient(180deg, rgba(255,253,248,0.08) 0%, rgba(255,253,248,0.02) 36%, rgba(32,63,65,0.10) 100%)",

        /* 紙っぽい静かな下地 */
        "paper-soft":
          "radial-gradient(circle at 50% 0%, rgba(255,253,248,0.72), rgba(247,245,239,0) 42%)",

        /* 海・砂・紙の薄い空気 */
        "villa-air":
          "linear-gradient(135deg, rgba(157,191,195,0.12) 0%, rgba(255,253,248,0.34) 46%, rgba(216,199,173,0.14) 100%)",

        /* 下方向に締める膜 */
        "bottom-shade":
          "linear-gradient(180deg, rgba(29,41,40,0) 0%, rgba(29,41,40,0.18) 100%)",
      },

      /* ---------- Keyframes ---------- */
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 18px, 0) scale(0.995)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0) scale(1)",
          },
        },

        "soft-float": {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
          },
          "50%": {
            transform: "translate3d(0, -8px, 0)",
          },
        },

        "slow-breathe": {
          "0%, 100%": {
            opacity: "0.72",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.92",
            transform: "scale(1.015)",
          },
        },
      },

      /* ---------- Animation ---------- */
      animation: {
        "fade-up": "fade-up 1050ms cubic-bezier(0.22, 0.1, 0.28, 1) both",
        "soft-float": "soft-float 8s cubic-bezier(0.22, 0.1, 0.28, 1) infinite",
        "slow-breathe": "slow-breathe 12s cubic-bezier(0.22, 0.1, 0.28, 1) infinite",
      },

      /* ---------- Z Index ---------- */
      zIndex: {
        base: "1",
        float: "10",
        nav: "60",
        modal: "100",
      },
    },
  },

  plugins: [],
};