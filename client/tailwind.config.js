/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#2D9CDB',
        accent: '#27AE60',
        light: '#E3F2FD',
        neutral: '#BDBDBD',
        dark: '#333333',
        gray_bg: "#f1f5f9",
      },
      spacing: {
        '28': '7rem',  // Custom value for 7rem
        '32': '8rem',  // Custom value for 8rem
        '40': '10rem', // Custom value for 10rem
        '48': '11rem',  // Custom value for 7rem
        '50': '12rem',  // Custom value for 8rem
        '58': '13rem', // Custom value for 10rem
        '100': '25rem',  // Custom value to get more margin
        "108": "26rem",
        "116": "27rem",
      },
      screens: {
        "xs": "300px",
      },
      transitionDuration: {
        2000: '2000ms', // 2 seconds
        3000: '3000ms', // 3 seconds
        4000: '4000ms', // 4 seconds
      },
    },
  },
  plugins: [],
}

