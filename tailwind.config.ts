import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {colors: {
      'sand': {
        DEFAULT: '#433923',
        '50': '#433923',
        '100': '#403621',
        '200': '#39301D',
        '300': '#322B1A',
        '400': '#2C2517',
        '500': '#251F13',
        '600': '#1E1A10',
        '700': '#18140C',
        '800': '#110E09',
        '900': '#0A0905',
        '950': '#070603'
      },},
    
}
  },
  plugins: [],
};
export default config;
