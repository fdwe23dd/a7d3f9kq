// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#7AC6D2',
          default: '#3D90D7',
          dark: '#3A59D1',
        },
        blue: {
          highlight: '#3784c6',
        },
      },
    },
  },
  plugins: [],
}
