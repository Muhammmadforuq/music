/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        xxl:"87.5rem"
      },
      maxWidth:{
        xxl:"98.125rem"
      },
      fontFamily:{
        "inter-tight":['Inter Tight', 'sans-serif']
      },
      fontSize:{
        "1xl":['1.375rem'],
      },
      colors:{
        brand:{
          "red-dark":"#E62117",
          "red-lighter":"#FF251A",
          "green-lighter":"#1ED760",
          "green-dark":"#1ABD53",
          'wheat':"#F7F8F9"
        },
      },
      spacing:{
        50:"29.375rem"
      },
      boxShadow:{
        main:"0px 3px 6px #00000029"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
