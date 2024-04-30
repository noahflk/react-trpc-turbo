import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: '#1B416F',
      },
    },
  },
  plugins: [forms({ strategy: 'class' })],
};
export default config;
