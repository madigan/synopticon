import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue(), UnoCSS()],
});
