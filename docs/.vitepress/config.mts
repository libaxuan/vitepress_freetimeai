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
      { text: 'Home', link: '/' },
      { text: '教程', link: '/tutorial' },
      { text: '定价', link: '/pricing' },
      { text: '联系我', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/libaxuan/vitepress_freetimeai' }
    ]
  }
})
