<template>
  <LpFrame main-id="tokusho">
    <div class="p-legal">
      <h1 class="p-legal__ttl">特定商取引法に基づく表記</h1>
      <p class="p-legal__meta">最終更新：2026年10月28日</p>

      <div class="c-doc-table-wrap">
        <table class="c-doc-table">
          <tbody>
            <tr v-for="row in rows" :key="row.label">
              <th style="width: calc(180 * var(--u)); vertical-align: top;">{{ row.label }}</th>
              <td style="vertical-align: top;" v-html="row.value" />
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-legal__back">
        <NuxtLink to="/">← トップページに戻る</NuxtLink>
      </div>
    </div>
  </LpFrame>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（option A・最後の3ページ）。
// 本文（各行の内容）は一切変更していない。
import '~/assets/css/lp/legal.css'

usePageSeo({
  path: '/legal/tokusho',
  title: '特定商取引法に基づく表記 | クラゲディール',
  description: '特定商取引法に基づく表記（クラゲディール / 株式会社shiro）。',
})

const rows = [
  { label: '販売業者', value: '株式会社shiro' },
  { label: '代表者', value: '保田裕紀子' },
  { label: '所在地', value: '〒102-0071 東京都千代田区富士見1-3-10 CF1310 1F' },
  { label: '電話番号', value: '03-6272-4119<br><span class="text-gray-400 text-xs">（受付時間：平日 11:00〜17:00）</span>' },
  { label: 'メール', value: '<a href="mailto:support@kuragedeal.ai" class="text-kurage-600 underline">support@kuragedeal.ai</a>' },
  { label: 'サービス名', value: 'クラゲディール（Kurage Deal）' },
  { label: '販売価格', value: 'PERSONAL：月額¥2,980／年額¥29,800（基本人数1人）<br>TRIO：月額¥5,980／年額¥59,800（基本人数3人。4人目以降は1人ごとに+¥2,000/月、年額プランでも毎月のご請求。追加できる人数の上限は7人まで）<br>TEAM：月額¥14,980／年額¥149,800（基本人数10人）<br>11人以上はお問い合わせください。<br><span class="text-gray-400 text-xs">上記はすべて税別です。決済時に消費税10%が加わります。年額は10か月分の料金です。PERSONAL・TEAMには追加できる人数の枠はありません。基本人数を超えるユーザーは管理者の承認により利用できますが、追加できる人数の上限（TRIOは7人）を超える場合は、承認した月の翌月末までの期間に限り利用を認め、その後は上位プランへの変更が必要です。</span>' },
  { label: '必要費用', value: 'インターネット接続費用・通信費用はお客様負担となります' },
  { label: '支払方法', value: 'クレジットカード（Stripeによる決済。Visa・Mastercard・American Express・JCB）' },
  { label: '支払時期', value: '各プランの基本料金（基本人数分）は前払いで、課金開始日から起算して月額プランは毎月、年額プランは1年分を一括して自動課金します。基本人数を超える人数分の追加料金は、利用した月の翌月に後払いでご請求します。' },
  { label: '提供時期', value: '決済完了後、即時ご利用可能' },
  { label: '無料お試し', value: '利用を開始した日から14日間、すべての機能を無料でお試しいただけます（人数の制限なし・クレジットカード入力不要）。無料期間中に自動で課金されることはありません。無料期間の終了時までに有料プランのお申し込みがない場合、ご利用は停止します。' },
  { label: 'キャンセル', value: 'Webの設定画面またはSlackの「/setting」から、管理者権限を持つユーザーがいつでも解約できます。解約後も、その時点の契約期間の末日まで本サービスをご利用いただけます。契約期間の途中で解約した場合でも、日割り計算その他の方法による返金は行いません（年額プランを含みます）。' },
  { label: '動作環境', value: '最新バージョンの Chrome・Firefox・Safari・Edge 推奨。Slack アカウント（無料プラン以上）が必要です。' },
]
</script>
