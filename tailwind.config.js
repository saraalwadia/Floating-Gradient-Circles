/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techDark: '#1F2937',        // Dark slate / تقني
        femininePink: '#F472B6',    // Soft pink / أنوثة
        optimizationGreen: '#10B981', // Optimization / نمو
        lightGray: '#F9FAFB',       // Background light
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
