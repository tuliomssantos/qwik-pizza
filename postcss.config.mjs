import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "tailwindcss";

export default {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
      autoprefixer: {
        grid: true,
        overrideBrowserslist: ["last 2 versions", "ie >= 11"],
      },
    }),
    tailwindcss("./tailwind.config.js"),
  ],
};
