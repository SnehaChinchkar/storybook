import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}', // Adjust to your project structure
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
        h2: ['1.875rem', { lineHeight: '2.25rem' }],
        body: ['1rem', { lineHeight: '1.5rem' }],
        caption: ['0.75rem', { lineHeight: '1rem' }],
      },
      fontWeight: {
        heading: '700',
        body: '400',
      },
    },
  },
  plugins: [],
};

export default config;
