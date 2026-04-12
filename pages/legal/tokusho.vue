<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">特定商取引法に基づく表記</h1>
        <p class="text-sm text-gray-400 mb-8">最終更新：2026年4月13日</p>

        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <tbody class="divide-y divide-gray-100">
              <tr v-for="row in rows" :key="row.label" class="align-top">
                <th class="py-4 pr-6 text-left font-semibold text-gray-700 whitespace-nowrap w-40">{{ row.label }}</th>
                <td class="py-4 text-gray-600 leading-relaxed" v-html="row.value" />
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
          <NuxtLink to="/" class="hover:text-kurage-600 transition-colors">← トップページに戻る</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '特定商取引法に基づく表記 | クラゲディール' })

const rows = [
  { label: '販売業者', value: '株式会社シロ' },
  { label: '代表者', value: '鈴木隆弥' },
  { label: '所在地', value: '〒102-0071 東京都千代田区富士見1-3-10 CF1310 1F' },
  { label: '電話番号', value: '03-6272-4119<br><span class="text-gray-400 text-xs">（受付時間：平日 10:00〜18:00）</span>' },
  { label: 'メール', value: '<a href="mailto:support@kuragedeal.ai" class="text-kurage-600 underline">support@kuragedeal.ai</a>' },
  { label: 'サービス名', value: 'クラゲディール（Kurage Deal）' },
  { label: '販売価格', value: 'Free プラン：¥0/月<br>Standard プラン：¥9,800/月（税込）<br>Premium プラン：¥29,800/月（税込）' },
  { label: '必要費用', value: 'インターネット接続費用・通信費用はお客様負担となります' },
  { label: '支払方法', value: 'クレジットカード（Visa・Mastercard・American Express・JCB）' },
  { label: '支払時期', value: '月次自動更新（契約日を起算日として毎月同日に自動課金）' },
  { label: '提供時期', value: '決済完了後、即時ご利用可能' },
  { label: 'キャンセル', value: 'サービスの性質上、提供済み期間分の返金はいたしかねます。解約はマイページまたは <a href="mailto:support@kuragedeal.ai" class="text-kurage-600 underline">support@kuragedeal.ai</a> へのご連絡により、次回請求日の前日までに手続きいただくことで翌月以降の課金が停止します。' },
  { label: '動作環境', value: '最新バージョンの Chrome・Firefox・Safari・Edge 推奨。Slack アカウント（無料プラン以上）が必要です。' },
]
</script>
