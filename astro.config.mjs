import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lazzzarito.github.io/Portfolio',
  outDir: 'dist',
  publicDir: 'public',
  build: {
    assets: '_assets',
  },
});
