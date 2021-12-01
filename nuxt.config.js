export default {
    components: true,
    head: {
        titleTemplate: "Mastering Nuxt: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs:{
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8",
        }]
    },
    router: {
        prefetchLinks: false,
    },
    plugins:[ 
        '~/plugins/maps.client', 
        '~/plugins/dataApi', 
        '~/plugins/auth.client', 
        '~/plugins/vCalendar.client',
        '~/plugins/stripe.client',
    ],
    modules:[
        '~/modules/auth', 
        '~/modules/algolia', 
        '~/modules/cloudinary', 
        '@nuxtjs/cloudinary',
        '~/modules/stripe',
    ],
    buildModules:['@nuxtjs/tailwindcss', '@nuxt/image'],
    cloudinary:{
        cloudName: 'masteringnuxt',
    },
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/masteringnuxt/image/upload/'
        }
    },
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    },
    publicRuntimeConfig:{
        rootUrl: process.env.NODE_ENV === 'production' ? process.env.BASE_URL_PRODUCTION : 'http://localhost:3000',
        maps: {
            key: process.env.GOOGLE_API_KEY
        },
        auth:{
            cookieName: 'idToken',
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
        },
        algolia:{
            appId: process.env.ALGOLIA_APP_ID,
            key: process.env.ALGOLIA_PUBLIC_KEY,
        },
        cloudinary:{
            apiKey: process.env.CLOUDINARY_API_KEY,
        },
        stripe:{
            key: process.env.STRIPE_PUBLIC_KEY,
        },
    },
    privateRuntimeConfig:{
        algolia:{
            appId: process.env.ALGOLIA_APP_ID,
            key: process.env.ALGOLIA_SECRET_KEY,
        },
        cloudinary:{
            apiSecret: process.env.CLOUDINARY_SECRET_KEY,
        },
        stripe:{
            secretKey: process.env.STRIPE_SECRET_KEY,
        },
    },

}