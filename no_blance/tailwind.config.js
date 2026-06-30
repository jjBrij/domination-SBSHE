// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Spotify-inspired dark theme
        'spotify-black': '#121212',
        'spotify-dark': '#181818',
        'spotify-mid': '#1f1f1f',
        'spotify-card': '#252525',
        'spotify-card-mid': '#272727',
        'spotify-green': '#1ed760',
        'spotify-green-dark': '#1db954',
        'spotify-white': '#ffffff',
        'spotify-silver': '#b3b3b3',
        'spotify-silver-light': '#cbcbcb',
        'spotify-light': '#fdfdfd',
        'spotify-border': '#4d4d4d',
        'spotify-border-light': '#7c7c7c',
        'spotify-negative': '#f3727f',
        'spotify-warning': '#ffa42b',
        'spotify-announcement': '#539df5',
        'spotify-light-surface': '#eeeeee',
        // Legacy support
        'brand-dark': '#121212',
        'brand-card': '#181818',
        'brand-accent': '#1ed760',
        'brand-amber': '#ffa42b',
        'brand-text': '#ffffff',
        'brand-muted': '#b3b3b3',
        'brand-border': '#4d4d4d',
      },
      fontFamily: {
        'spotify': ['SpotifyMixUI', 'CircularSp', 'Helvetica Neue', 'helvetica', 'arial', 'sans-serif'],
        'spotify-title': ['SpotifyMixUITitle', 'CircularSp', 'Helvetica Neue', 'helvetica', 'arial', 'sans-serif'],
      },
      borderRadius: {
        'pill': '500px',
        'full-pill': '9999px',
        'circle': '50%',
        'spotify': '6px',
        'spotify-card': '8px',
      },
      boxShadow: {
        'spotify-heavy': 'rgba(0,0,0,0.5) 0px 8px 24px',
        'spotify-medium': 'rgba(0,0,0,0.3) 0px 8px 8px',
        'spotify-light': 'rgba(0,0,0,0.1) 0px 4px 4px',
        'spotify-inset': 'rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset',
      },
      letterSpacing: {
        'button': '1.4px',
        'button-wide': '2px',
      },
    },
  },
  plugins: [],
}