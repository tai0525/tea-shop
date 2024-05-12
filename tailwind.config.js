/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'main': '#994e3d',
        'secondary': '#b8a77b'
      },
      backgroundImage: {
        'banner': "url('@/assets/images/banner.jpg')",
        'coupon': "url('@/assets/images/coupon.jpg')"
      },
    },
  },
  plugins: [],
}

