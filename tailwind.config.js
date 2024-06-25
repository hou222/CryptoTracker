/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        uni: "url('src/assets/uni.png')",
        uniWhite: "url('src/assets/uniWhite.png')",
        sea: "url('src/assets/seaBlue.png')",
        seaWhite: "url('src/assets/seaWhite.png')",
        turbo: "url('src/assets/turbo.png')",
        turboWhite: "url('src/assets/turboWhite.png')",
      },
    },
  },
  plugins: [],
};
