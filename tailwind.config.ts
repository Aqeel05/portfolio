import type { Config } from "tailwindcss";

export default {
  content: ["./client/src/**/*.{ts,tsx,html}", "./client/index.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
