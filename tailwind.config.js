/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
                extend: {
                    colors: {
                        "primary": "#539bf5", // GitHub Blue (Dimmed)
                        "github-bg": "#22272e", // GitHub Dark Dimmed BG
                        "github-card": "#2d333b", // GitHub Dark Dimmed Card
                        "github-border": "#444c56", // GitHub Dark Dimmed Border
                        "github-text": "#adbac7", // GitHub Dark Dimmed Text
                        "github-muted": "#768390", // GitHub Dark Dimmed Muted
                        "github-btn": "#373e47",
                        "github-btn-hover": "#444c56",
                        "github-success": "#238636",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "mono": ["Fira Code", "monospace"],
                    },
                    borderRadius: {
                        "DEFAULT": "6px",
                        "lg": "8px",
                        "xl": "12px",
                        "full": "9999px"
                    },
                },
            },
  plugins: [require("tailwindcss-animate")],
}
