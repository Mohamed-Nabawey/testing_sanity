export default {
  content: [
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './stories/**/*.{js,jsx,ts,tsx,vue}',
  ],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
    backgroundImage: {
      'default-black': 'linear-gradient(82.48deg, #010710 1.76%, #0C2441 68.84%)'
    }
  },
  plugins: [],
};