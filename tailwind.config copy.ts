import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      text: "#e6e6e6",
      black: "#000000",
      primary: "#00750A",
      secondary: "#a8ffb1",
      accent: "#00A80E",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        birdy: ["var(--font-birdy)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
