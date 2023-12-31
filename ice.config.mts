import { defineConfig } from '@ice/app';
import jsxPlus from '@ice/plugin-jsx-plus';

export default defineConfig(() => ({
  minify: process.env.NODE_ENV === 'production',
  plugins: [jsxPlus()],
  publicPath: '/multiple-qrcode-generator/',
  outputDir: 'dist',
  routes: {
    defineRoutes: (route) => {
      route('/multiple-qrcode-generator', 'index.tsx');
    },
  },
  ssg: false,
  ssr: false,
}));
