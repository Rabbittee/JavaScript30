import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/JavaScript30/day01/Husky/dist/",
  server: {
    fs: {
      allow: [".."],
    },
  },
});
