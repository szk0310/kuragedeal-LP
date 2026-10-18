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
usePageSeo({
  path: '/legal/tokusho',
  title: '特定商取引法に基づく表記 | クラゲディール',
  description: '特定商取引法に基づく表記（クラゲディール / 株式会社shiro）。',
})

const rows = [
  { label: '販売業者', value: '株式会社shiro' },
  { label: '代表者', value: '鈴木隆弥' },
  { label: '所在地', value: '〒102-0071 東京都千代田区富士見1-3-10 CF1310 1F' },
  { label: '電話番号', value: '03-6272-4119<br><span class="text-gray-400 text-xs">（受付時間：平日 10:00〜18:00）</span>' },
  { label: 'メール', value: '<a href="mailto:support@kuragedeal.ai" class="text-kurage-600 underline">support@kuragedeal.ai</a>' },
  { label: 'サービス名', value: 'クラゲディール（Kurage Deal）' },
  { label: '販売価格', value: 'PERSONAL：月額¥2,980／年額¥29,800（基本人数1名）<br>TRIO：月額¥5,980／年額¥59,800（基本人数3名。4名目以降は1名ごとに月額+¥2,000／年額+¥20,000、追加できる人数の上限は7名まで）<br>TEAM：月額¥14,980／年額¥149,800（基本人数10名）<br>11名以上はお問い合わせください。<br><span class="text-gray-400 text-xs">上記はすべて税別です。決済時に消費税10%が加わります。年額は10か月分の料金です。PERSONAL・TEAMには追加できる人数の枠はありません。基本人数を超えるユーザーは管理者の承認により利用できますが、追加できる人数の上限（TRIOは7名）を超える場合は、承認した月の翌月末までの期間に限り利用を認め、その後は上位プランへの変更が必要です。</span>' },
  { label: '必要費用', value: 'インターネット接続費用・通信費用はお客様負担となります' },
  { label: '支払方法', value: 'クレジットカード（Stripeによる決済。Visa・Mastercard・American Express・JCB）' },
  { label: '支払時期', value: '各プランの基本料金（基本人数分）は前払いで、契約日を起算日として月額プランは毎月、年額プランは1年分を一括して自動課金します。基本人数を超える人数分の追加料金は、利用した月の翌月に後払いでご請求します。' },
  { label: '提供時期', value: '決済完了後、即時ご利用可能' },
  { label: '無料お試し', value: 'Slackへの追加日から14日間、すべての機能を無料でお試しいただけます（人数の制限なし・クレジットカード入力不要）。無料期間中に自動で課金されることはありません。無料期間の終了時までに有料プランのお申し込みがない場合、ご利用は停止します。' },
  { label: 'キャンセル', value: 'Webの設定画面またはSlackの「/setting」から、管理者権限を持つユーザーがいつでも解約できます。解約後も、その時点の契約期間の末日まで本サービスをご利用いただけます。契約期間の途中で解約した場合でも、日割り計算その他の方法による返金は行いません（年額プランを含みます）。' },
  { label: '動作環境', value: '最新バージョンの Chrome・Firefox・Safari・Edge 推奨。Slack アカウント（無料プラン以上）が必要です。' },
]
</script>
