/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY BRAND COLORS
        primaryGold: '#FFD700',       // For main brand accents (logo, buttons, headings)
        secondaryGold: '#C5A017',     // For borders, hover states
        accentGlow: '#FFDF00',        // For glow effects, highlights
        
        // BASE COLORS
        baseBackGround: '#000000',         // For main background, navbar, footer
        baseCard: '#1A1A1A',      // For secondary sections, cards
        baseOffWhite: '#FFD700',      // For body text, light areas
        
        // UTILITY COLORS
        shadowDark: '#2E2E2E',        // For shadows, separators
      },
    },
  },
  plugins: [],
}
