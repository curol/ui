const { fontFamily } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
const _config = {
  darkMode: ["class"],
  // Paths are relative to your project root, not your tailwind.config.js file, so if your tailwind.config.js file is in a custom location, you should still write your paths relative to the root of your project.
  content: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

const banner = `
:'#######:::'######::'##::::'##:'########:::'#######::'##:::::::::::::'##:'########::::'###::::'####:'##:::::::'##:::::'##:'####:'##::: ##:'########::
'##.... ##:'##... ##: ##:::: ##: ##.... ##:'##.... ##: ##::::::::::::'##::... ##..::::'## ##:::. ##:: ##::::::: ##:'##: ##:. ##:: ###:: ##: ##.... ##:
 ##'### ##: ##:::..:: ##:::: ##: ##:::: ##: ##:::: ##: ##:::::::::::'##:::::: ##:::::'##:. ##::: ##:: ##::::::: ##: ##: ##:: ##:: ####: ##: ##:::: ##:
 ## ### ##: ##::::::: ##:::: ##: ########:: ##:::: ##: ##::::::::::'##::::::: ##::::'##:::. ##:: ##:: ##::::::: ##: ##: ##:: ##:: ## ## ##: ##:::: ##:
 ## #####:: ##::::::: ##:::: ##: ##.. ##::: ##:::: ##: ##:::::::::'##:::::::: ##:::: #########:: ##:: ##::::::: ##: ##: ##:: ##:: ##. ####: ##:::: ##:
 ##.....::: ##::: ##: ##:::: ##: ##::. ##:: ##:::: ##: ##::::::::'##::::::::: ##:::: ##.... ##:: ##:: ##::::::: ##: ##: ##:: ##:: ##:. ###: ##:::: ##:
. #######::. ######::. #######:: ##:::. ##:. #######:: ########:'##:::::::::: ##:::: ##:::: ##:'####: ########:. ###. ###::'####: ##::. ##: ########::
:.......::::......::::.......:::..:::::..:::.......:::........::..:::::::::::..:::::..:::::..::....::........:::...::...:::....::..::::..::........:::
`

module.exports = plugin(({ config, theme }) => {
  console.log(banner)
}, _config)
