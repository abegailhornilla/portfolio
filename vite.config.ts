import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path to your GitHub repo name for correct asset paths on GitHub Pages
  base: "/abegailhornilla-portfolio-website/",

  server: {
    host: "::", // Allows IPv6 and localhost access
    port: 8080,
  },

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
