import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  buildDirectory: "rr",
  serverBuildFile: "s.js",
  serverBundles: () => "node",
  presets: [vercelPreset()],
} satisfies Config;
