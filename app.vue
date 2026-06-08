<template>
  <div>
    <TheNav />
    <NuxtPage />
    <TheFooter />
    <ChatWidget v-if="showChat" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// フォームページではフローティング CTA を非表示（送信ボタンとの被り回避）
const formPaths = ['/beta', '/waitlist', '/free', '/contact']
const showChat = computed(() => !formPaths.includes(route.path))

// Organization 構造化データ（全ページ共通）。AI 検索／ナレッジパネル向け。
// ※ SNS の sameAs は開設順に追記（note / LinkedIn は開設後に追加）。
const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'クラゲディール',
  legalName: '株式会社shiro',
  url: 'https://kuragedeal.ai',
  logo: 'https://kuragedeal.ai/kurage-on-white.svg',
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
