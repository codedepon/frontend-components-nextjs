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
    // Compiles sass and bundles it with js
    postcss({
      extract: false,
    }),
    // Translates ts code into js
    typescript({ objectHashIgnoreUnknownHack: false }),
  ],
  // Packages left out of compilation
  external: ["react", "react-dom", "react-transition-group", "next/link"],
};
