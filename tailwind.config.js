/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        uni: "url('src/assets/uni.png')",
        sea: "url('src/assets/seaBlue.png')",
        turbo: "url('src/assets/turbo.png')",
      },
    },
  },
  plugins: [],
};
