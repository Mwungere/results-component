/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        lightSlateBlue: 'hsl(252, 100%, 67%)',
        lightRoyalBlue: 'hsl(241, 81%, 54%)',
        violetBlue: 'hsl(256, 72%, 46%)',
        persianBlue: 'hsla(241, 72%, 46%, 0)', // transparent because of alpha 0
        darkGrayBlue: 'hsl(224, 30%, 27%)',
        lightLavender: 'hsl(241, 100%, 89%)',
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      fontSize: {
        paragraph: ['18px', '1.5'], // 18px font size with line height of 1.5
      },
    },
  },
  plugins: []
};