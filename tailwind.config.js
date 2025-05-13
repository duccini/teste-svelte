// tailwind.config.js (em modo ESM)
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

        colors: {
            rosaClaro: "#F7CDEE",
            rosaMedio: "#F7CDD7",
            verdeClaro: "#CDF7D8",
            vermelhoSuave: "#D76262",
        },
        fontFamily: {
          sans: ["'Nunito'", "sans-serif"],
        },
      },
    },
  plugins: [typography],
};
