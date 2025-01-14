import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FreeTimeAI",
  description: "A VitePress Site For FreeTimeAI",
  head: [
    ['link', { rel: 'icon', href: 'https://globalai.chat/source/face-with-monocle.webp', type: 'image/webp' }],
    ['script', { type: 'text/javascript' }, `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "pt5s5wgdhw");
    `]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/tutorial' },
      { text: '定价', link: '/pricing' },
      { text: '联系我', link: '/contact' },
      { text: '语言', items: [
        { text: '中文', link: '/' },
        { text: 'English', link: '/en/' }

      ]}
    ],
    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'API 示例', link: '/api-examples' },
          { text: '教程', link: '/tutorial' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/libaxuan/vitepress_freetimeai' }
    ]
  }
})
