import typescript from "rollup-plugin-typescript2";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";
export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    postcss({
      extract: false,
    }),
    typescript({ objectHashIgnoreUnknownHack: false }),
  ],
  external: [
    "react",
    "react-dom",
    "react-transition-group",
    "react-router-dom",
  ],
};
