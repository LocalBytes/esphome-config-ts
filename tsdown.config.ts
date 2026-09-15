import { defineConfig } from "tsdown/config";
import { barrelPlugin } from "./src/generator/tsdown-plugin-barrel.ts";

export default defineConfig({
  dts: true,
  entry: { generate: "./src/generator/generate.ts" },
  exports: true,
  sourcemap: true,
  plugins: [
    barrelPlugin({
      lib: "src/lib",
      yaml: "src/yaml",
      components: "src/components",
    }),
  ],
})
