import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://echopbx.org",
  // Keeps the space between text and inline links that wrap onto their own line.
  compressHTML: false,
  integrations: [icon()],
  vite: { plugins: [tailwindcss()] },
});
