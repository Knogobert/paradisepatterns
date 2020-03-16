import pkg from './package'
import info from './content/setup/info'
import path from 'path'
import glob from 'glob'

var dynamicRoutes = getDynamicPaths({
  '/page': 'page/*.json',
});

console.log(dynamicRoutes);

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: info.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:type', content: 'profile'},
      { property: 'og:title', content: 'Paradise Patterns'},
      { property: 'og:url', content: 'https://paradisepatterns.com'},
      // { property: 'og:image', content: 'https://paradisepatterns.com/ogp.jpg'},
      { property: 'profile:first_name', content: 'Sanna'},
      { property: 'profile:last_name', content: 'Myers'},
      { name: 'msapplication-TileColor', content: '#fab315'},
      { name: 'msapplication-config', content: 'browserconfig.xml'},
      { name: 'theme-color', content: '#fab315'},
      { name: 'robots', content: 'index, follow' },
      // { name: 'google-site-verification', content: '' },
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#fab315' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Gotu&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fab315' },

  /*
  ** Global CSS
  */
  css: [
    'assets/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true


  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  generate: {
    routes: dynamicRoutes
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
