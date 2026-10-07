import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4395A6',
          dark: '#02707A',
        },
        accent: {
          green: '#9CC064',
          gold: '#CCA652',
        },
        navy: '#254153',
      },
      fontFamily: {
        // Adobe Fonts web name is "p22-mackinac-pro"; desktop names included as fallbacks
        mackinac: [
          'p22-mackinac-pro',
          'P22 Mackinac Pro',
          'P22 Mackinac',
          'Georgia',
          'serif',
        ],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4395A6 0%, #02707A 100%)',
        'gradient-text': 'linear-gradient(135deg, #4395A6 0%, #9CC064 100%)',
        'gradient-hero': 'linear-gradient(135deg, #e0f2ff 0%, #f0f9ff 50%, #fef3e2 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
