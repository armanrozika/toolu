module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities, config }) => {
      let colors = config("colors", []);
      const newColors = {};
      let hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
            }
          : null;
      };
      for (i in colors) {
        let c = hexToRgb(colors[i]);
        if (c) {
          let nms = {
            ".1": "10",
            ".2": "20",
            ".3": "30",
            ".4": "40",
            ".5": "50",
            ".6": "60",
            ".7": "70",
            ".8": "80",
            ".9": "90",
            "1.0": "100",
          };
          for (o in nms) {
            newColors[`.bg-${i}-${nms[o]}`] = {
              "background-color": `rgba(${c.r},${c.g},${c.b}, ${o})`,
            };
          }
        }
      }
      addUtilities(newColors);
    },
  ],
};
