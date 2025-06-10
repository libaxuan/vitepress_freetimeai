import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "FreeTimeAI",
      description: "A VitePress Site For FreeTimeAI",
      head: [
        ['link', { rel: 'icon', href: 'https://nav.globalnextai.cn/source/face-with-monocle.webp', type: 'image/webp' }],
        ['meta', { name: 'keywords', content: 'FreeTimeAI, AI, 人工智能, 智能分析, 高效集成, 创新影像, 个性化支持' }],
        ['meta', { property: 'og:image', content: 'https://nav.globalnextai.cn/source/face-with-monocle.webp' }],
        ['script', { src: '/.vitepress/theme/clarity.js', async: '', defer: '' }]
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '首页', link: '/' },
          { text: '教程', link: '/tutorial' },
          { text: '定价', link: '/pricing' },
          { text: '联系我', link: '/contact' }
        ],
        sidebar: [
          {
            text: '核心功能',
            items: [
              { text: 'AI 分析', link: '/ai-analysis' },
              { text: '高效集成', link: '/efficient-integration' },
              { text: '创新影像', link: '/innovative-imaging' },
              { text: '个性化支持', link: '/personalized-support' }
            ]
          },
          {
            text: '产品与服务',
            items: [
              { text: '应用商店', link: '/app-store' },
              { text: '定价', link: '/pricing' }
            ]
          },
          {
            text: '教程与示例',
            items: [
              { text: 'API 示例', link: '/api-examples' },
              { text: '教程', link: '/tutorial' }
            ]
          },
          {
            text: '关于我们',
            items: [
              { text: '联系我们', link: '/contact' },
              { text: '数据安全', link: '/data-security' },
              { text: '发现', link: '/discover' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/libaxuan/vitepress_freetimeai' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "FreeTimeAI",
      description: "A VitePress Site For FreeTimeAI",
      head: [
        ['link', { rel: 'icon', href: 'https://nav.globalnextai.cn/source/face-with-monocle.webp', type: 'image/webp' }],
        ['meta', { name: 'keywords', content: 'FreeTimeAI, AI, Artificial Intelligence, Intelligent Analysis, Efficient Integration, Innovative Imaging, Personalized Support' }],
        ['meta', { property: 'og:image', content: 'https://nav.globalnextai.cn/source/face-with-monocle.webp' }],
        ['script', { src: '/.vitepress/theme/clarity.js', async: '', defer: '' }]
      ],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Tutorial', link: '/en/tutorial' },
          { text: 'Pricing', link: '/en/pricing' },
          { text: 'Contact Us', link: '/en/contact' }
        ],
        sidebar: [
          {
            text: 'Core Features',
            items: [
              { text: 'AI Analysis', link: '/en/ai-analysis' },
              { text: 'Efficient Integration', link: '/en/efficient-integration' },
              { text: 'Innovative Imaging', link: '/en/innovative-imaging' },
              { text: 'Personalized Support', link: '/en/personalized-support' }
            ]
          },
          {
            text: 'Products & Services',
            items: [
              { text: 'App Store', link: '/en/app-store' },
              { text: 'Pricing', link: '/en/pricing' }
            ]
          },
          {
            text: 'Tutorials & Examples',
            items: [
              { text: 'API Examples', link: '/en/api-examples' },
              { text: 'Tutorial', link: '/en/tutorial' }
            ]
          },
          {
            text: 'About Us',
            items: [
              { text: 'Contact Us', link: '/en/contact' },
              { text: 'Data Security', link: '/en/data-security' },
              { text: 'Discover', link: '/en/discover' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/libaxuan/vitepress_freetimeai' }
        ]
      }
    }
  }
})
