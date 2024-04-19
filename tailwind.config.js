/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "560px",
        md: "768px",
        lg: "1060px",
        xl: "1200px",
        xxl: "1440px",
        xxxl: "1600px",
        xxxxl: "2000px",
      },
      fontFamily: {
        neueRegradeBold: ['Neue-regrade-bold', 'sans-serif'],
      },
      colors: {
        ltPrimary: '#6270EF',
        ltPrimaryDark: '#525fdb',
        ltPrimaryBG: '#6270ef29',
        dtPrimary: '#6f7af9',
        BGLight: '#ffffff',
        BGSemiLight: '#F4F4F7',
        BGSemiNormal: '#F0F0F2',
        BGSemiDark: '#272733',
        BGDark: '#1f1f2a',
        TextLight: '#ffffff',
        TextNormal: '#7b7988',
        TextSemiDark: '#3e3d45',
        TextDark: '#26262f',
        ltBorder: '#DBDBDB',
        ltBorderNormal: '#C1BFC6',
        ltRange: '#b0b0b0',
        ltBoxShadow: '#00000029',
        ltScrollbarBG: '#dfdfdf',
        ltScrollbarThumb: '#b6b6b6',
        ltBGPositive: '#E2FCDC',
        ltBGNegative: '#FDD6DB',
        ltTextPositive: '#4DAA57',
        ltTextNegative: '#FC536B',
        ltHoverPrimary: '#E9ECFF',
        BGNavDropdown: '#f9f9fc',
      }
    },
  },
  plugins: [],
}