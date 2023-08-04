const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const tailwindNesting = require('tailwindcss/nesting')

const config = {
  plugins: [
    //Tailwind nesting is needed if we nest tailwind styles, like in the checkbox scss file
    //with @apply
    tailwindNesting(),
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
}

module.exports = config
