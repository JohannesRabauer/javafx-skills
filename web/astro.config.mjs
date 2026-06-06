import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

export default defineConfig({
  site: 'https://johannesrabauer.github.io',
  base: '/javafx-skills',
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    resolve: {
      alias: {
        '@skills': fileURLToPath(new URL('../skills', import.meta.url))
      }
    },
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});
