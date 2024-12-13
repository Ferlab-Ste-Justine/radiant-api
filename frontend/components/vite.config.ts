import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json'), // Correct property
      compilerOptions: {
        allowImportingTsExtensions: true,
        noEmit: true, // Set for declaration-only purposes in this override
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/App.tsx'),
      name: 'variant',
      fileName: (format) => `variant.${format}.js`
    }
  }
})

