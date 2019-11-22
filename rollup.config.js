import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import flow from "rollup-plugin-flow";
import replace from "@rollup/plugin-replace";

export default {
  input: "./index",
  output: {
    file: "dist/react.js",
    format: "umd",
    name: "react"
  },
  plugins: [
    flow(),
    resolve(),
    babel({
      exclude: "node_modules/**" // 只编译我们的源代码
    }),
    commonjs(),

    replace({
      __DEV__: true,
      "process.env.NODE_ENV": JSON.stringify("development"),
      __PROFILE__: "true",
      __EXPERIMENTAL__: "true"
    })
  ]
};
