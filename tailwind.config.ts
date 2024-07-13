/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        // Card Shadow
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        /********  ShadCN  ********/
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /********  End of ShadCN  ********/

        /********  Custom Presets  ********/
        // buttons presets
        "primary-button": {
          DEFAULT: "var(--primary-foreground)",
          background: "var(--primary-background)",
          border: "var(--primary-border)",
        },

        "secondary-button": {
          DEFAULT: "var(--secondary-foreground)",
          background: "var(--secondary-background)",
          border: "var(--secondary-border)",
        },
        // Card Background Colors
        "primary-card-background": {
          DEFAULT: "var(--primary-card-background)",
        },
        /********  End of Custom Presets  ********/
      },
      borderColor: {
        // Card Border Colors
        "card-border": {
          DEFAULT: "var(--primary-border)",
        },
      },
      // backgroundColor 는 대형 요소에 대해서만 여기서 설정해준다.
      // button 등, card 까지의 소형 요소 백그라운드 컬러는 color 섹션에서 담당해주자.
      // 사용예제: bg-primary-wrapper
      backgroundColor: {
        // wrapper presets
        "primary-wrapper": {
          DEFAULT: "var(--app-background)",
        },
        "secondary-wrapper": {
          DEFAULT: "var(--app-background)",
        },
      },
      // 사용예제: p-primary-button
      padding: {
        "primary-button": "0.6rem 2rem",
        "secondary-button": "0.4rem 1.2rem",
      },
      // 사용예제
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        earthquake: {
          "0%, 100%": { transform: "rotate(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "rotate(-3deg)" },
          "20%, 40%, 60%, 80%": { transform: "rotate  3deg" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        refine: {
          "0%": { left: "0%" },
          "20%": { left: "-50%" },
          "40%": { left: "0%" },
          "60%": { left: "50%" },
          "80%": { left: "0%" },
          "100%": { left: "0%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "earthquake-random": "earthquake 1s ease-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "refine-slide": "refine 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
