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
      // 計測タグ（未設定なら gtag をロードせず CV も no-op＝無害）
      gtagGa4: process.env.NUXT_PUBLIC_GTAG_GA4 ?? '',        // 例: G-XXXXXXXX
      gtagAdsId: process.env.NUXT_PUBLIC_GTAG_ADS_ID ?? '',   // 例: AW-XXXXXXXXX
      // Google広告コンバージョンラベル（"AW-xxx/labelxxx" の send_to 値）
      // β終了に伴いadsLabelBeta/adsLabelWaitlistは廃止。トップの「14日間無料で試す」はadsLabelTrial。
      adsLabelTrial: process.env.NUXT_PUBLIC_ADS_LABEL_TRIAL ?? '',
      adsLabelContact: process.env.NUXT_PUBLIC_ADS_LABEL_CONTACT ?? '',
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
  // /contact は 2026-05-18 から専用ページ (11人以上の相談 + 一般お問い合わせ) に独立
  // /contact は ssr: false で client-only に。理由は contact.vue の definePageMeta 参照
  // β プログラム終了(2026-10)に伴い /beta /free /waitlist /waitlist-confirmed は廃止 → トップへ 301 で恒久リダイレクト
  routeRules: {
    '/beta-program': { redirect: { to: '/beta', statusCode: 301 } },
    '/beta-program/**': { redirect: { to: '/beta', statusCode: 301 } },
    '/contact': { ssr: false },
    '/beta': { redirect: { to: '/', statusCode: 301 } },
    '/beta/**': { redirect: { to: '/', statusCode: 301 } },
    '/free': { redirect: { to: '/', statusCode: 301 } },
    '/free/**': { redirect: { to: '/', statusCode: 301 } },
    '/waitlist': { redirect: { to: '/', statusCode: 301 } },
    '/waitlist/**': { redirect: { to: '/', statusCode: 301 } },
    '/waitlist-confirmed': { redirect: { to: '/', statusCode: 301 } },
    '/waitlist-confirmed/**': { redirect: { to: '/', statusCode: 301 } },
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
            'Slackに一言書くだけでCRM入力完了。AIが営業コーチとして毎朝ブリーフィング。ひとりから、小さな営業チームまで。PERSONAL 月¥2,980〜。14日間無料でお試しいただけます。',
        },
        { property: 'og:title', content: 'クラゲディール — Slackだけで完結するAI営業CRM' },
        {
          property: 'og:description',
          content: 'Slackに書くだけでCRM入力完了。AIが営業コーチとしてディール確度・次の一手を提案。PERSONAL 月¥2,980〜、14日間無料。',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'クラゲディール' },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'og:image', content: 'https://kuragedeal.ai/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://kuragedeal.ai/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/kurage-on-white.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap',
        },
      ],
      script: [
        // Google Tag Manager（GA4／広告コンバージョンを内包するコンテナ GTM-TVMFWFFG）。
        // head の可能な限り上位で読み込む（tagPosition:'head'）。
        {
          tagPosition: 'head',
          innerHTML:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TVMFWFFG');",
        },
        // Cloudflare Turnstile（問い合わせフォームの bot 対策）
        { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js', async: true, defer: true },
      ],
      noscript: [
        // Google Tag Manager (noscript) — <body> 直後（bodyOpen）に配置
        {
          tagPosition: 'bodyOpen',
          innerHTML:
            '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVMFWFFG" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
        },
      ],
    },
  },
})
