const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Nirgun Family',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      //md.set({ breaks: true })
      md.use(require('markdown-it-imsize'))
    }
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Family',
        link: '/family/',
      },
      {
        text: 'Festivals',
        link: '/config/'
      }
    ],
    sidebar: {
      '/family/': [
        {
          title: 'Member',
          collapsable: false,
          children: [
           { title: 'Prashant',  
           collapsable: false,                            
                children: [
                  '/family/prashant/about',
                  '/family/prashant/timeline'
                ]
            },
            { title: 'Swara',  
            collapsable: false,                            
                children: [
                  '/family/swara/about',
                  '/family/swara/timeline'
                ]
            }
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
