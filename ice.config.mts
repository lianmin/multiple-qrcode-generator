import { defineConfig } from '@ice/app';
import jsxPlus from '@ice/plugin-jsx-plus';

export default defineConfig(() => ({
  minify: process.env.NODE_ENV === 'production',
  plugins: [jsxPlus()],
  publicPath: '/multiple-qrcode-generator/dist/',
  outputDir: 'dist',
  routes: {
    defineRoutes: (route) => {
      route('/multiple-qrcode-generator', 'index.tsx');
      route('/multiple-qrcode-generator/dist', 'index.tsx');
    },
  },
  ssg: false,
  ssr: false,
}));
