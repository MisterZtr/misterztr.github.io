import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MisterZtr Site",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Меню',
        items: [
          { text: 'Обо мне', link: '/page/about-me' },
          { text: 'Pixel-GSI', link: '/page/Pixel' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MisterZtr' }
    ]
  }
})
