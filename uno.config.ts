import { defineConfig } from 'unocss';
import presetMini from 'unocss/preset-mini';
import presetWebFonts from '@unocss/preset-web-fonts';
export default defineConfig({
  presets: [
    presetMini(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        mono: ['Hack Nerd Font Mono'],
      },
    }),
  ],
  rules: [],
  preflights: [
    {
      getCSS: () => `
        @font-face {
          font-family: 'Hack Nerd Font Mono';
          src: url('./src/assets/fonts/hack/HackNerdFontMono-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Hack Nerd Font Mono';
          src: url('./src/assets/fonts/hack/HackNerdFontMono-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: 'Hack Nerd Font Mono';
          src: url('./src/assets/fonts/hack/HackNerdFontMono-Italic.ttf') format('truetype');
          font-weight: 400;
          font-style: italic;
        }
        @font-face {
          font-family: 'Hack Nerd Font Mono';
          src: url('./src/assets/fonts/hack/HackNerdFontMono-BoldItalic.ttf') format('truetype');
          font-weight: 700;
          font-style: italic;
        }
      `,
    },
  ],
});
