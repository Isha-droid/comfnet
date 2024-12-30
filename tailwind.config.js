/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports={
        content: [
                "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
                extend: {
                        colors: {
                                background: "var(--background)",
                                foreground: "var(--foreground)",
                                transitionProperty: {
                                        'height': 'height',
                                        'spacing': 'margin, padding',
                                }
                        },
                },
        },
        plugins: [],
=======
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
>>>>>>> 7dfb1ee06a38fabcaa95116f4656a9d75e8667b1
};
