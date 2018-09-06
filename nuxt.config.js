module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'office',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Montserrat:400,700"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Kaushan+Script" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/vendors/line-icon/css/simple-line-icons.css" },
      { rel: "stylesheet", href: "/vendors/elegant-icon/style.css" },
      { rel: "stylesheet", href: "/vendors/revolution/css/settings.css" },      
      { rel: "stylesheet", href: "/vendors/revolution/css/layers.css" },
      { rel: "stylesheet", href: "/vendors/revolution/css/navigation.css" },
      { rel: "stylesheet", href: "/vendors/owl-carousel/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/vendors/bootstrap-selector/css/bootstrap-select.min.css" },
      { rel: "stylesheet", href: "/vendors/jquery-ui/jquery-ui.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/core-style.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/scss/style.scss" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/jquery-ui.min.css" },
      { rel: "stylesheet", href: "/css/nice-select.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.css" },
      { href: "/fonts/halveticaneue_medium-webfont.woff2" },
      { href: "/fonts/halveticaneue_medium-webfont.woff" }
    ],
    script:  [
      { src: 'js/jquery-3.2.1.min.js', type: 'text/javascript'},
      { src: 'js/popper.min.js', type: 'text/javascript'},
      { src: 'js/bootstrap.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/jquery.themepunch.tools.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/jquery.themepunch.revolution.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/extensions/revolution.extension.actions.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/extensions/revolution.extension.video.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/extensions/revolution.extension.slideanims.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/extensions/revolution.extension.layeranimation.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/extensions/revolution.extension.navigation.min.js', type: 'text/javascript'},
      { src: 'vendors/revolution/js/extensions/revolution.extension.slideanims.min.js', type: 'text/javascript'},
      { src: 'vendors/counterup/jquery.waypoints.min.js', type: 'text/javascript'},
      { src: 'vendors/counterup/jquery.counterup.min.js', type: 'text/javascript'},
      { src: 'vendors/owl-carousel/owl.carousel.min.js', type: 'text/javascript'},
      { src: 'vendors/bootstrap-selector/js/bootstrap-select.min.js', type: 'text/javascript'},
      { src: 'vendors/image-dropdown/jquery.dd.min.js', type: 'text/javascript'},
      { src: 'js/smoothscroll.js', type: 'text/javascript'},
      { src: 'vendors/isotope/imagesloaded.pkgd.min.js', type: 'text/javascript'},
      { src: 'vendors/isotope/isotope.pkgd.min.js', type: 'text/javascript'},
      { src: 'vendors/magnify-popup/jquery.magnific-popup.min.js', type: 'text/javascript'},
      { src: 'vendors/vertical-slider/js/jQuery.verticalCarousel.js'}
  ],
    css: [
      '@/assets/scss/style.scss'
    ],

    plugins: [
      '~/plugins/axios',
      '~/plugins/vue-notifications',
    ],

    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth'
    ],        
  },
  env: {
      myapi: process.env.myapi || "http://6e58c76b.ngrok.io"
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-notifications'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

