import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    host: "0.0.0.0", // Dışarıdan erişilebilir yapmak için
    allowedHosts: [".nanocamkesmemakinesi.com"], // Bu satırı ekleyin
  },
});
