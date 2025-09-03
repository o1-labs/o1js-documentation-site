import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    hookTimeout: 1_000_000,
    testTimeout: 1_000_000,
    teardownTimeout: 10_000,
    exclude: ["versioned_docs", "node_modules", "build"],
  },
});
