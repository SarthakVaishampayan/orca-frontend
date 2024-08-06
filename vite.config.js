import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

import dns from "node:dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/users": "https://orca-server.ayushcodings.me/api/v1",
      "/services": "https://orca-server.ayushcodings.me/api/v1",
      "/containers": "https://orca-server.ayushcodings.me/api/v1",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
