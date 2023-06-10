import { defineConfig } from '@ice/app';
import jsxPlus from '@ice/plugin-jsx-plus';

const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;

export default defineConfig(() => ({
  minify,
  plugins: [jsxPlus()],
  server: {
    onDemand: true,
    format: 'esm',
  },
}));
