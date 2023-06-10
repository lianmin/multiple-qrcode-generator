import { defineConfig } from '@ice/app';
import jsxPlus from '@ice/plugin-jsx-plus';

export default defineConfig(() => ({
  minify: process.env.NODE_ENV === 'production',
  plugins: [jsxPlus()],
  publicPath: '/multiple-qrcode-generator/',
  outputDir: 'docs',
  server: {
    onDemand: true,
    format: 'esm',
  },
}));
