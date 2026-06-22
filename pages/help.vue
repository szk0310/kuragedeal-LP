<template>
  <main class="bg-gray-50 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">

      <!-- header -->
      <div class="text-center mb-12">
        <img src="/kurage-on-white.svg" alt="クラゲディール" class="w-14 h-14 mx-auto mb-3" />
        <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-2">ヘルプ（全機能ガイド）</h1>
        <p class="text-gray-500">クラゲディールでできることの一覧です。まず使ってみるなら <a href="/guide" class="text-kurage-600 underline">使い方ガイド</a> へ。</p>
      </div>

      <!-- 0. 設計思想 -->
      <div class="mb-12 bg-ocean-deep text-white rounded-2xl p-6 md:p-8">
        <p class="text-sm font-bold text-cyan-300 mb-2">はじめに：ふつうのCRMと、構造が違います</p>
        <p class="leading-relaxed text-kurage-100">
          ふつうのCRMは、別の画面を開いて項目を入力するツールです。
          クラゲディールは、<span class="text-white font-bold">Slackに話しかけるだけ。</span>新しいアプリを開かない、<span class="text-white font-bold">画面遷移も項目入力もありません。</span>
          通知だけ届く “Slackの出張所” ではなく、<span class="text-white font-bold">Slackそのものが営業ツール</span>です。
        </p>
        <p class="text-sm text-cyan-200 mt-3">※ 操作する画面はありません。同僚に報告するみたいに書けばOK。</p>
      </div>

      <!-- 1. できること（機能別） -->
      <section class="mb-12">
        <h2 class="text-xl font-black text-gray-800 mb-5">話しかけるだけでできること</h2>
        <div class="space-y-4">
          <div v-for="f in features" :key="f.title" class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h3 class="font-bold text-gray-900 mb-2">{{ f.title }}</h3>
            <ul class="space-y-1 mb-2">
              <li v-for="ex in f.examples" :key="ex" class="text-sm text-gray-700">
                <code class="bg-kurage-50 text-kurage-700 px-2 py-0.5 rounded text-xs">{{ ex }}</code>
              </li>
            </ul>
            <p v-if="f.note" class="text-xs text-gray-500 leading-relaxed">💡 {{ f.note }}</p>
          </div>
        </div>
      </section>

      <!-- 2. コマンド -->
      <section class="mb-12">
        <h2 class="text-xl font-black text-gray-800 mb-5">スラッシュコマンド</h2>
        <div class="space-y-4">
          <div v-for="g in commandGroups" :key="g.group" class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p class="text-xs font-bold text-kurage-600 mb-3">{{ g.group }}</p>
            <div class="space-y-3">
              <div v-for="c in g.cmds" :key="c.cmd" class="flex gap-3 items-start">
                <code class="bg-kurage-50 text-kurage-700 px-2.5 py-1 rounded font-mono text-sm whitespace-nowrap">{{ c.cmd }}</code>
                <p class="text-sm text-gray-700">{{ c.desc }}</p>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-400">
            ※ チャンネルの紐付けは、会社名に触れると自動で「紐付けますか？」と提案されます（手動の <code>/crm-link</code> は上級者向け）。
          </p>
        </div>
      </section>

      <!-- 3. チームで使う -->
      <section class="mb-12">
        <h2 class="text-xl font-black text-gray-800 mb-5">チームで使う・見え方</h2>
        <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm text-sm text-gray-700 leading-relaxed space-y-2">
          <p>・<b>DM（クラゲディールAppとの個別チャット）</b>＝あなただけのプライベート。入力も回答も他の人に見えません。</p>
          <p>・<b>共有チャンネル</b>＝メンバー全員に見えます（Slackの仕様）。チームで共有したい案件はこちら。チャンネルで会社名に触れると自動で紐付けを提案し、<b>会話から商談シグナルを自動でメモ</b>します。</p>
          <p>・データは担当者ごとに分離。一般メンバーは自分が担当のディール・顧客のみ、マネージャーはチーム全体を閲覧できます。</p>
        </div>
      </section>

      <!-- 4. FAQ -->
      <section class="mb-12">
        <h2 class="text-xl font-black text-gray-800 mb-5">よくある質問</h2>
        <div class="space-y-3">
          <details v-for="q in faqs" :key="q.q" class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <summary class="font-bold text-gray-900 cursor-pointer">{{ q.q }}</summary>
            <p class="text-sm text-gray-700 mt-3 leading-relaxed whitespace-pre-line">{{ q.a }}</p>
          </details>
        </div>
      </section>

      <p class="text-center text-sm text-gray-400">
        困ったら <code class="bg-gray-100 px-2 py-0.5 rounded">/kurage 〇〇が分かりにくい</code> で開発チームに直接届きます🪼
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
usePageSeo({
  path: '/help',
  title: 'ヘルプ（全機能ガイド） | クラゲディール',
  description: 'クラゲディールの全機能リファレンス。顧客登録・活動メモ・予定・商談・ステージ・一覧/絞り込み・検索・分析・コーチング・削除・修正、スラッシュコマンド、チームでの使い方、よくある質問。',
})

const features = [
  { title: '顧客・会社の登録', examples: ['田中さんを登録。会社はABC商事', 'ABC商事に田中さん、佐藤さんを登録（複数人OK）'], note: '同じ会社・同じ名前の人が既にいる場合は「別の方ですか？」と確認します。' },
  { title: '活動メモ', examples: ['田中さんに電話した。資料送付、返事待ち', 'ABC商事の佐藤さんと商談。好感触'], note: '書いた瞬間に記録。受注確率や次の一手にも反映されます。' },
  { title: '予定（リマインド）', examples: ['ABC商事と来週MTG予定', '田中さんに金曜フォロー予定'], note: '「〇〇予定」は予定ノートになり、活動欄ではなく顧客/会社の詳細＋朝のブリーフィングに表示されます。' },
  { title: '商談（ディール）を作る', examples: ['ABC商事と商談。予算500万、来月提案', '朝日社で新規案件。1000万'], note: '会社・担当者がなければ一緒に作成します。' },
  { title: 'ステージ更新', examples: ['ABC商事を受注に', '朝日社を失注にして', 'みらい商事を停滞に'], note: '' },
  { title: '一覧・絞り込み', examples: ['今アツいディールは？', '今月のディール一覧', '私の担当の顧客リスト', '進行中のディール'], note: '「今アツい」は受注確率の高い進行中を数件、「今週活動してる」は最近動いたものを返します。' },
  { title: '検索・属性をきく', examples: ['田中さんを検索', '田中さんの役職は？', 'ABC商事のディールを見せて'], note: '' },
  { title: '分析', examples: ['今月のディール数は？', '今月の合計金額は？', '平均受注確率は？'], note: '' },
  { title: '次の一手・コーチング', examples: ['ABC商事の次の一手を教えて', '/coach'], note: 'MEDDPICCに基づき、停滞理由や次のアクションを提案します。' },
  { title: 'メモの削除・修正', examples: ['直前のメモを消して', '田中さんの名前を田中太郎に変更'], note: '削除は確認のうえ実行（復元可能）。自分が作成したメモ、または管理者のみ削除できます。' },
]

const commandGroups = [
  { group: '情報を見る（一覧）', cmds: [
    { cmd: '/deal', desc: 'ディール一覧・検索・AI進捗評価' },
    { cmd: '/contact', desc: '顧客一覧' },
    { cmd: '/account', desc: '会社（取引先）一覧' },
  ]},
  { group: 'AI・確認', cmds: [
    { cmd: '/coach', desc: '商談コーチング（優先度の高い案件）' },
    { cmd: '/usage', desc: 'AI利用状況・残り予算・プラン確認' },
  ]},
  { group: '設定・その他', cmds: [
    { cmd: '/settings', desc: 'ナーチャリング・営業ポリシーの設定' },
    { cmd: '/kurage', desc: '改善要望・気づきを開発チームに送る' },
  ]},
]

const faqs = [
  { q: 'メモしたのに、ダッシュボードに出ません', a: '「〇〇予定」と書いた場合は"予定ノート"になり、活動欄ではなく顧客/会社の詳細ページ＋朝のブリーフィングに表示されます（仕様）。通常のメモは即時保存されます。担当者が未割当てのレコードは担当フィルタで自分の画面から隠れることがあります。' },
  { q: '担当者で絞って見たい', a: '「私の担当の顧客リスト」と話しかけてください。登録・商談化したときに、操作したご本人が自動で担当者になります。' },
  { q: '同じ人を二重に登録してしまった', a: '片方を削除して整理してください（メモは「直前のメモを消して」、顧客/ディールはダッシュボードから削除）。レコードの統合（マージ）機能は現在ありません。' },
  { q: 'DMとチャンネル、どちらで使う？', a: 'DM＝あなただけのプライベート（各自の機密パイプライン向け）。共有チャンネル＝チームに見える（共有したい案件向け）。' },
  { q: 'うまく汲み取ってもらえないとき', a: '言い回しを少し変えてみてください。「コマンドを教えて」で主要操作の一覧が出ます。改善要望は /kurage で開発チームに直接届きます。' },
]
</script>
