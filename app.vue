<template>
  <div>
    <TheNav v-if="!isTopPage" />
    <NuxtPage />
    <TheFooter v-if="!isTopPage" />
    <ChatWidget v-if="showChat" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// トップ（/）は test_kurage_261009b の新デザインを移植し、自前のヘッダー／ナビ／フッターを
// 内包している（pages/index.vue）。共通の TheNav/TheFooter を重ねて二重表示しない。
const isTopPage = computed(() => route.path === '/')
// フォームページ・トップでは、フローティング CTA（ChatWidget）を非表示
// （送信ボタンとの被り回避／トップは新デザインの固定フレームと競合するため）。
// /beta /waitlist /free はβ終了に伴い廃止・routeRules で / に 301 済みのため配列から除去
const formPaths = ['/contact']
const showChat = computed(() => !formPaths.includes(route.path) && !isTopPage.value)

// Organization 構造化データ（全ページ共通）。AI 検索／ナレッジパネル向け。
// ※ SNS の sameAs は開設順に追記（note / LinkedIn は開設後に追加）。
const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'クラゲディール',
  legalName: '株式会社shiro',
  url: 'https://kuragedeal.ai',
  logo: 'https://kuragedeal.ai/kurage-on-white.png',
  email: 'support@kuragedeal.ai',
  description: 'Slack だけで完結する AI 営業 CRM「クラゲディール」の提供元。株式会社shiro は Salesforce 認定コンサルティングパートナー。',
  sameAs: [
    'https://x.com/kuragedeal',
    'https://note.com/kuragedeal',
    'https://www.linkedin.com/company/101692196',
  ],
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(organizationLd) },
  ],
})
</script>
