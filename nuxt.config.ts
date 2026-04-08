export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages',
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap',
        },
      ],
    },
  },
})
