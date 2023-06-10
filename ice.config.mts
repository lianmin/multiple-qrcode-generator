import { defineConfig } from '@ice/app';
import jsxPlus from '@ice/plugin-jsx-plus';

export default defineConfig(() => ({
  minify: process.env.NODE_ENV === 'production',
  plugins: [jsxPlus()],
  publicPath: '/multiple-qrcode-generator/',
  outputDir: 'docs',
  routes: {
    defineRoutes: (route) => {
      route('/multiple-qrcode-generator', 'index.tsx');
    },
  },
  server: {
    onDemand: true,
    format: 'esm',
  },
}));
