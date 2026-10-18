<template>
  <div>
    <TheNav v-if="!usesLpFrame" />
    <NuxtPage />
    <TheFooter v-if="!usesLpFrame" />
    <ChatWidget v-if="showChat" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// 新デザイン（test_kurage_261009b）へ移植済みのページは、自前のヘッダー／ナビ／フッター
// （components/LpFrame.vue）を内包している。共通の TheNav/TheFooter を重ねて二重表示しない。
// LP mock刷新・下層ページ統一指示書・タスク2: 下層ページを1ページずつ LpFrame 化するたび、
// この配列にパスを足す（全ページ移行が済んだらこの分岐ごと削除する）。
//
// 2026-10-19・オッパ指摘（不具合）: 本番では /pains から /pains/ へ308リダイレクトされ、
// route.path が末尾スラッシュ付きになる。lpFramePagesとの完全一致（includes）だけだと
// 本番環境でこの判定が外れ、古いTheNav/TheFooterがLpFrame自前のヘッダー／フッターに
// 重なって二重表示される（ローカルのプレビューだけでは気づけない）。ルートでない限り
// 末尾スラッシュを落としてから比較する。
function stripTrailingSlash(path: string): string {
  return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path
}
const lpFramePages = ['/', '/pains', '/guide', '/ai-support', '/manual']
const normalizedPath = computed(() => stripTrailingSlash(route.path))
const usesLpFrame = computed(() => lpFramePages.includes(normalizedPath.value))
// フォームページ・LpFrame採用ページでは、フローティング CTA（ChatWidget）を非表示
// （送信ボタンとの被り回避／新デザインの固定フレームと競合するため）。
// /beta /waitlist /free はβ終了に伴い廃止・routeRules で / に 301 済みのため配列から除去
const formPaths = ['/contact']
const showChat = computed(() => !formPaths.includes(normalizedPath.value) && !usesLpFrame.value)

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
