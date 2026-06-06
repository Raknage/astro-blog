/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  bracketSameLine: true,
  printWidth: 100,
  endOfLine: "auto",
  overrides: [
    {
      files: "*.astro",
      htmlWhitespaceSensitivity: "ignore",
      options: {
        parser: "astro",
      },
    },
  ],
};
