<template>
  <main class="bg-gray-50 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">

      <!-- header -->
      <div class="text-center mb-10">
        <img src="/kurage-on-white.svg" alt="クラゲディール" class="w-14 h-14 mx-auto mb-3" />
        <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-2">よくある質問・困ったとき</h1>
        <p class="text-gray-500">操作でつまずいたとき・「あれ？」と思ったときに。<br />使い方そのものは <a href="/guide" class="text-kurage-600 underline">使い方ガイド</a> へ。</p>
      </div>

      <!-- FAQ -->
      <div class="space-y-3 mb-10">
        <details v-for="q in faqs" :key="q.q" class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <summary class="font-bold text-gray-900 cursor-pointer">{{ q.q }}</summary>
          <p class="text-sm text-gray-700 mt-3 leading-relaxed whitespace-pre-line" v-html="q.a"></p>
        </details>
      </div>

      <!-- コマンド早見表 -->
      <section class="mb-10">
        <h2 class="text-lg font-black text-gray-800 mb-3">コマンド早見表</h2>
        <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm space-y-4">
          <div v-for="g in commandGroups" :key="g.group">
            <p class="text-xs font-bold text-kurage-600 mb-2">{{ g.group }}</p>
            <div class="space-y-2">
              <div v-for="c in g.cmds" :key="c.cmd" class="flex gap-3 items-start">
                <code class="bg-kurage-50 text-kurage-700 px-2.5 py-1 rounded font-mono text-sm whitespace-nowrap">{{ c.cmd }}</code>
                <p class="text-sm text-gray-700">{{ c.desc }}</p>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-400 pt-1">※ クラゲディールは DM（個別チャット）でお使いください。</p>
        </div>
      </section>

      <p class="text-center text-sm text-gray-400">
        解決しないときは <code class="bg-gray-100 px-2 py-0.5 rounded">/kurage 〇〇が分かりにくい</code> で開発チームに直接届きます🪼
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
usePageSeo({
  path: '/help',
  title: 'よくある質問・困ったとき | クラゲディール',
  description: 'クラゲディールの使い方FAQ・トラブルシューティング。メモが反映されない／担当者で絞りたい／重複登録／削除・修正／DMでの使い方／コマンド早見表など。',
})

const faqs = [
  { q: 'メモしたのに、ダッシュボードに出ません', a: '主な原因は2つです。<br>① <b>「〇〇予定」</b>と書くと“予定ノート”になり、活動欄ではなく<b>顧客/会社の詳細ページ＋朝のブリーフィング</b>に表示されます（仕様）。通常のメモは即時保存されます。<br>② <b>担当者が未割当て</b>のレコードは、担当フィルタで自分の画面から隠れることがあります（登録・商談化すると操作した本人が担当者になります）。' },
  { q: '担当者で絞って見たい', a: '「<b>私の担当の顧客リスト</b>」と話しかけてください。登録・商談化したときに、操作したご本人が自動で担当者になります。' },
  { q: '同じ人を二重に登録してしまった', a: '片方を削除して整理してください（メモは「直前のメモを消して」、顧客/ディールはダッシュボードから削除）。<br>レコードの統合（マージ）機能は現在ありません。両方に活動がある場合は、残す方にメモを追記してから削除すると安全です。' },
  { q: 'メモや名前を消したい・直したい', a: '<b>削除</b>：「直前のメモを消して」（確認のうえ削除・復元可能・作成者または管理者のみ）。<br><b>修正</b>：「田中さんの名前を田中太郎に変更」のように話しかけてください。' },
  { q: 'うまく汲み取ってもらえません', a: '言い回しを少し変えてみてください。「<b>コマンドを教えて</b>」で主要操作の一覧が出ます。改善要望は <code>/kurage</code> で開発チームに直接届きます。' },
  { q: 'どこで使いますか？', a: 'クラゲディールは <b>DM</b>（クラゲディールAppとの個別チャット）で使う、あなただけのプライベートな営業アシスタントです。入力も回答も他の人には見えません。' },
  { q: '複数人まとめて登録できる？', a: '「ABC商事に田中さん、佐藤さんを登録」のように、読点や「と」で区切れば複数人を一度に登録できます（全員に担当者が付きます）。<br>※ ただし<b>別々の会社の人を一度に</b>はまとめられません。会社ごとに分けて「○○商事に△△を登録」としてください。' },
  { q: 'データは他の人に見えますか？', a: 'データは担当者ごとに分離されています。一般メンバーは自分が担当するディール・顧客のみ、マネージャーはチーム全体を閲覧できます。DMでの入力は完全プライベートです。' },
  { q: '受注確率はどう決まる？', a: 'MEDDPICC（営業フレームワーク）に基づき、会話の内容から自動で算出します。「〇〇の次の一手を教えて」や /coach で、根拠と次のアクションも確認できます。' },
]

const commandGroups = [
  { group: '情報を見る（一覧）', cmds: [
    { cmd: '/deal', desc: 'ディール一覧・検索・AI進捗評価' },
    { cmd: '/contact', desc: '顧客一覧' },
    { cmd: '/account', desc: '会社（取引先）一覧' },
  ]},
  { group: 'AI・確認', cmds: [
    { cmd: '/coach', desc: '商談コーチング' },
    { cmd: '/usage', desc: 'AI利用状況・プラン確認' },
  ]},
  { group: '設定・その他', cmds: [
    { cmd: '/settings', desc: 'ナーチャリング・営業ポリシー設定' },
    { cmd: '/kurage', desc: '改善要望を開発チームに送る' },
  ]},
]
</script>
