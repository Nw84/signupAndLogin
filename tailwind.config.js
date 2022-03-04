module.exports = {
  content: [
    "./pages/**/*{html,cs}",
    "./index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          },
        }
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out"
      }
    },
  },
  plugins: [],
}
