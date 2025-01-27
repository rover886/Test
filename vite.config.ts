import pluginTypescript from "@rollup/plugin-typescript";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    pluginTypescript({
      tsconfig: "tsconfig.json",
      sourceMap: true,
      inlineSources: true
    })
  ],
  base: "./",
  build: {
    target: "es2023",
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
        output: {
            // Prevent hashes from turning up in the output files.
            // We don't need to cache anything at the moment, since we run inside SP.
            // This prevents multiple hashed versions of the same file ending up in parts of the AppDev repo.
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
        }
    }
  }
})
