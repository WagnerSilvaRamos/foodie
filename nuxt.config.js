export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "datetimepicker.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"
      }
    ],
    script: [
      { src: "lightbox.js", type: "text/javascript" },
      {
        src: "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js",
        type: "text/javascript"
      },
      {
        src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js",
        type: "text/javascript"
      },

      {
        src: "datetimepicker.js",
        type: "text/javascript"
      },
      { src: "utils.js", type: "text/javascript" }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/main.scss", "~/assets/css/main.scss", "aos/dist/aos.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-carousel", ssr: false },
    "~/plugins/vuelidate"
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */

  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faAngleLeft"]
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  /* axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    "/api/": "http://www.wagneramos.com.br/api.json"
  },


*/
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    target: "static",
    router: {
      base: "/foodie-public/"
    },
    //publicPath: "http://www.wagneramos.com.br/clients/foodie",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
