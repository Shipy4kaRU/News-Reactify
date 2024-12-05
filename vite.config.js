import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://shipy4karu.github.io/News-Reactify/",
  plugins: [react()],
});
