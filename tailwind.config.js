

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-pink": "#b12b72",
        "text-pink": "#CC4452",
        "from-grey": "#dcdcdc",
        "to-grey": "#eeeeee",
        "tahomaColor": "#5E5C5C",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        tahoma: ['var(--font-tahoma)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        eagleLake: ['var(--font-eaglelake)', 'serif'],
        caudex: ['var(--font-caudex)', 'serif'],
        roboto_slab: ['var(--font-roboto_slab)', 'serif'],
      },
    },
  },
  plugins: [],
  important: '#__next',
};
