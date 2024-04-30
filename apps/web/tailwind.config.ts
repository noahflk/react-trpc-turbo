import type { Config } from 'tailwindcss';

import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [sharedConfig],
};

export default config;
