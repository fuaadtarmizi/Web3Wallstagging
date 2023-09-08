const manifestForPlugIn = {
  name: 'React-vite-app',
  short_name: 'react-vite-app',
  description: 'I am a simple vite app',
  icons: [
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon',
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
  ],
  theme_color: '#171717',
  background_color: '#f0e7db',
  display: 'standalone',
  scope: '/',
  start_url: '/',
}

export default manifestForPlugIn
