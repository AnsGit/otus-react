export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Pixel Art Box",
        [
          "App",
          "Svg",
          ["Instance", "Line", "Rect"],
          "Grid",
          "Field",
          ["Instance", "Cell"],
        ],
      ],
    },
  },
};
