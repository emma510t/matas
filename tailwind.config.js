/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      "matas-blue": "#002643",
      "matas-white": "#F7F5F5",
      "matas-grey": "#75787B",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "4/1": "4 / 1",
      },
      width: {
        "40px": "40px",
      },
    },
  },
  plugins: [],
};
