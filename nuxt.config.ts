export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {
      // Cloudflare Turnstile site key（公開可。HTML埋め込み用）
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAADEHhYQdYWLR1h0u',
    },
  },
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
  nitro: {
    output: {
      publicDir: 'out',
    },
  },
  // /beta-program は /beta に統一（旧 URL は 301 で恒久リダイレクト）
  // /contact は当面 /free（β 申込み + 問い合わせ）にリダイレクト
  // ※ Enterprise 専用フォーム分離時にここを解除
  routeRules: {
    '/beta-program': { redirect: { to: '/beta', statusCode: 301 } },
    '/beta-program/**': { redirect: { to: '/beta', statusCode: 301 } },
    '/contact': { redirect: { to: '/free', statusCode: 302 } },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'クラゲディール — Slackだけで完結するAI営業CRM',
      meta: [
        {
          name: 'description',
          content:
            'クラゲでもできる、Slack営業管理。チーム全員で月¥9,800。Slackに一言書くだけでCRM入力完了。AIが営業コーチとして毎朝ブリーフィング。1人〜30人の営業チームに最適。',
        },
        { property: 'og:title', content: 'クラゲディール — Slackだけで完結するAI営業CRM' },
        {
          property: 'og:description',
          content: 'Slackに書くだけでCRM入力完了。AIが営業コーチとして次のアクションを提案。チーム全員で月¥9,800。',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/kurage-on-white.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap',
        },
      ],
      script: [
        // Cloudflare Turnstile（問い合わせフォームの bot 対策）
        { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js', async: true, defer: true },
      ],
    },
  },
})
