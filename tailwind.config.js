module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        body: "Poppins",
      },
      fontSize: {
        home: "2.75rem",
      },
      borderRadius: {
        large: "40px",
        contact: "20px",
      },
      colors: {
        primary: {
          90: "#7A4823",
          80: "#93643B",
          70: "#B5885A",
          60: "#DBB588",
          50: "#FFE3BB",
          40: "#FFECCB",
          30: "#FFF1D6",
          20: "#FFF7E3",
          10: "#FFFBF1",
        },
        secondary: {
          90: "#15563A",
          80: "#246844",
          70: "#388154",
          60: "#40925F",
          50: "#71B47E",
          40: "#97D29D",
          30: "#B4E8B4",
          20: "#D5F7D2",
          10: "#ECFBE8",
        },
        neutral: {
          90: "#2B2726",
          80: "#4D4845",
          70: "#706A66",
          60: "#94908D",
          50: "#B2AFAD",
          40: "#C8C8C8",
          30: "#DADADA",
          20: "#EFEEEE",
          10: "#FAFAFA",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
