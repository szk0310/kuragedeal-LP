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
// 鈴木さん判断（2026-10-19）: LPのチャットはDMでの質問とは別配線で答えに
// ずれが出るため撤去を確定。components/ChatWidget.vue本体も削除済み
// （slackSFA側のLPチャット受け口ルートも併せて無効化）。

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
