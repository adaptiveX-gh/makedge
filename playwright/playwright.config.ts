import { defineConfig } from "@playwright/test"

export default defineConfig({
  webServer: {
    command: "npm run dev",
    port: 5173,
    reuseExistingServer: true,
  },
  testDir: "playwright",
  use: {
    baseURL: "http://localhost:5173",
    headless: true,
  },
})
