import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2026-07-21',
    ssr: true,
    devtools: { enabled: false },
    app: {
        head: {
            title: 'HotoRas',
            htmlAttrs: {
                lang: 'ko'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
    css: ['bootstrap/scss/bootstrap.scss'],
    nitro: {
        preset: 'static',
        prerender: {
            routes: ['/', '/portfolio', '/about', '/contact', '/otoge']
        }
    }
})
