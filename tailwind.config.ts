import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        content: "842px",
      },
      minWidth: {
        content: "842px",
      },

      colors: {
        blue: {
          50: "#f7fafd",
          120: "#d7e7f2",
          300: "#9be0fd",
          400: "#7baed4",
          1000: "#0071ce",
          1050: "#0063b4",
          lightBlue: "#6ac2e8",
          deep: "#415464",
        },

        grey: {
          20: "#fbfbfb",
          30: "#f6f7f9",
          60: "#eef0f2",
          90: "#e6e9ea",
          150: "#d9dcde",
          250: "#bbc0c3",
          400: "#989d9f",
          470: "#858b8e",
          550: "#6d7274",
          580: "#686d6e",
          700: "#4d5151",
          800: "#323434",
        },

        yellow: {
          1000: "#f4be49",
        },

        aqua: {
          DEFAULT: "#75dff0",
        },

        green: {
          bright: "#c5ff33",
          paleGreen: "#ecf3da",
        },

        orange: {
          bright: "#f96939",
        },

        black: "#212322",
      },
    },
  },
  plugins: [],
};
export default config;
