<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（2026-10-19完了）: 全ページ
// （トップ＋下層9ページ）がLpFrame.vue（自前のヘッダー／ナビ／フッター）に
// 移行済みのため、共通のTheNav/TheFooterとの出し分け分岐・ChatWidgetは
// 削除した（新デザインの固定フレームと常に競合するため、ChatWidgetは
// タスク2着手以降すでに全ページで非表示の状態になっていた）。
// ChatWidget自体を今後どう扱うか（完全撤去／別の形で復活）は未決定のため、
// コンポーネント本体（components/ChatWidget.vue）はそのまま残してある。

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
