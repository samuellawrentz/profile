// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samuellawrentz.com',
  trailingSlash: 'always',
  redirects: {
    '/hacks/react/coding-standards-husky-typescript-lint-staged': '/blog/coding-standards-husky-typescript-lint-staged/',
    '/blog/how-i-salvaged-my-website-from-the-dead/': '/blog/how-i-saved-my-website-from-gatsby-screwup/',
    '/blog/useful-css-generators/': '/blog/useful-amazing-css-tools-and-generators/',
    '/blog/leverage-ai-to-understand-complete-repo/': '/blog/how-to-understand-complex-code-with-ai/',
    '/blog/vim-is-a-blackhole/': '/blog/vim-experience-nvim-dev-experience/',
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.omc/**'],
      },
    },
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
