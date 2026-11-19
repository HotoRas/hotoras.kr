import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import nuxtConfig from './nuxt.config'
import vite from '@vitejs/plugin-vue';

export default mergeConfig(
  nuxtConfig.vite!,
  defineConfig({
    plugins: [vite()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
