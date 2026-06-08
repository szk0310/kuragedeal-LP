<template>
  <main class="pt-16 min-h-screen bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">

      <!-- インストール完了バナー -->
      <div v-if="installed" class="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10 text-center">
        <p class="text-3xl mb-2">🎉</p>
        <h2 class="text-lg font-black text-green-800 mb-1">Slackへのインストールが完了しました！</h2>
        <p class="text-sm text-green-700 mb-4">クラゲくんに話しかけてみてください。</p>
        <a href="slack://open"
          class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
          Slackを開く →
        </a>
      </div>

      <!-- Header -->
      <div class="text-center mb-14">
        <img src="/kurage-on-white.svg" alt="クラゲディール" class="w-16 h-16 mx-auto mb-4" />
        <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-3">使い方ガイド</h1>
        <p class="text-gray-500">Slackにインストールしたら、まずこれだけ覚えてください。</p>
      </div>

      <!-- 最初の 1 週間でやってほしいこと -->
      <section id="first-week" class="mb-14 scroll-mt-20">
        <div class="bg-gradient-to-br from-kurage-50 via-cyan-50 to-ocean-mist/40 border-2 border-kurage-200 rounded-2xl p-6 md:p-8">
          <div class="flex items-center gap-3 mb-4">
            <img src="/kurage-smile.svg" alt="クラゲくん" class="w-8 h-8 flex-shrink-0" />
            <div>
              <p class="text-xs font-bold text-orange-500 uppercase tracking-widest">クイックスタート</p>
              <h2 class="text-xl md:text-2xl font-black text-gray-900">最初の 1 週間でやってほしいこと</h2>
            </div>
          </div>
          <p class="text-sm text-gray-600 mb-6 leading-relaxed">
            クラゲディールの真価は、毎日少しずつ Slack に記録することで現れます。<br />
            まず 1 週間、下のチェックリストに沿って試してみてください。
          </p>

          <div class="space-y-5">
            <div v-for="day in firstWeekPlan" :key="day.label" class="bg-white/70 rounded-xl p-4">
              <p class="font-bold text-kurage-800 mb-2 text-sm">{{ day.label }} — {{ day.theme }}</p>
              <ul class="space-y-1.5 text-sm text-gray-700">
                <li v-for="(task, i) in day.tasks" :key="i" class="flex items-start gap-2">
                  <span class="text-green-500 mt-0.5 flex-shrink-0">✅</span>
                  <span>{{ task }}</span>
                </li>
              </ul>
            </div>
          </div>

          <p class="text-xs text-gray-500 mt-6 italic leading-relaxed">
            ※ 全部やる必要はありません。気になったところからどうぞ。<br />
            ※ うまくいかない時は画面右下のクラゲくんに話しかけてください。
          </p>
        </div>
      </section>

      <!-- Step 1: 最初にやること -->
      <section class="mb-10">
        <h2 class="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
          クラゲくんに話しかける
        </h2>
        <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <p class="text-sm text-gray-600 mb-4">SlackでクラゲディールAppにDMするか、チャンネルで <code class="bg-gray-100 px-1 rounded">@クラゲディール</code> とメンションしてください。</p>
          <div class="space-y-3">
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="text-xs text-gray-400 mb-1 font-semibold">まずは顧客を登録</p>
              <p class="font-mono text-sm text-gray-800">田中さんを顧客に追加して。会社はABC商事</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="text-xs text-gray-400 mb-1 font-semibold">活動メモを記録（最もよく使う）</p>
              <p class="font-mono text-sm text-gray-800">田中さん、今日オンライン商談しました。予算は300万、来月末までに決める方向で話が進んでいます。</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="text-xs text-gray-400 mb-1 font-semibold">メールした記録</p>
              <p class="font-mono text-sm text-gray-800">田中さんにメールしました。提案書を送付、来週返事をもらう予定。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Step 2: よく使うフレーズ -->
      <section class="mb-10">
        <h2 class="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
          よく使うフレーズ一覧
        </h2>
        <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-50 border-b border-gray-200">
                <th class="text-left px-5 py-3 font-semibold text-gray-700 w-1/2">Slackで入力</th>
                <th class="text-left px-5 py-3 font-semibold text-gray-700">動作</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="ex in examples" :key="ex.input">
                <td class="px-5 py-3 font-mono text-gray-800">{{ ex.input }}</td>
                <td class="px-5 py-3 text-gray-500">{{ ex.action }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Step 3: スラッシュコマンド -->
      <section class="mb-10">
        <h2 class="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">3</span>
          スラッシュコマンド
        </h2>
        <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
          <div v-for="cmd in commands" :key="cmd.cmd" class="flex gap-4 items-start">
            <code class="bg-kurage-50 text-kurage-700 px-3 py-1 rounded-lg font-mono text-sm whitespace-nowrap">{{ cmd.cmd }}</code>
            <div>
              <p class="text-sm font-semibold text-gray-800">{{ cmd.title }}</p>
              <p class="text-sm text-gray-500">{{ cmd.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Step 4: AIが自動でやること -->
      <section class="mb-10">
        <h2 class="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">4</span>
          AIが自動でやること
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="auto in autoFeatures" :key="auto.title" class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p class="text-2xl mb-2">{{ auto.icon }}</p>
            <p class="font-bold text-gray-800 mb-1">{{ auto.title }}</p>
            <p class="text-sm text-gray-500">{{ auto.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Webアプリ -->
      <section class="mb-10">
        <h2 class="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">5</span>
          Webダッシュボードにログインする
        </h2>
        <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
          <p class="text-sm text-gray-600">Slackの会話が自動でCRMに蓄積されます。全体を俯瞰したい時はWebダッシュボードをご利用ください。</p>
          <!-- ステップ -->
          <div class="space-y-3">
            <div class="flex gap-3 items-start">
              <span class="bg-kurage-100 text-kurage-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <p class="text-sm text-gray-700">Slackで <code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/setting</code> を実行すると、ログインキーがメッセージで届きます</p>
            </div>
            <div class="flex gap-3 items-start">
              <span class="bg-kurage-100 text-kurage-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <p class="text-sm text-gray-700">届いたキーをコピーして、ダッシュボードのログイン画面に貼り付けます</p>
            </div>
            <div class="flex gap-3 items-start">
              <span class="bg-kurage-100 text-kurage-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <p class="text-sm text-gray-700">一度ログインすると次回からは自動でサインインされます</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer CTA -->
      <div class="bg-kurage-50 border border-kurage-100 rounded-2xl p-6 text-center">
        <p class="text-sm text-gray-600">困ったことがあればお気軽に画面右下のクラゲくんにお問合せください</p>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
usePageSeo({
  path: '/guide',
  title: '使い方ガイド | クラゲディール',
  description:
    'クラゲディールの使い方ガイド。Slack に書くだけで CRM 入力、/coach で AI コーチング、受注確率の算出やメール下書きまで。主要コマンドと機能をわかりやすく紹介します。',
})

const route = useRoute()
const installed = computed(() => route.query.installed === '1')

const examples = [
  { input: '顧客一覧を見せて', action: '登録済み顧客の一覧を表示' },
  { input: '田中さんを顧客に追加して。会社はABC商事', action: '新規顧客を登録' },
  { input: '田中さんを検索して', action: '顧客情報を表示' },
  { input: '田中さんの電話番号は？', action: '電話番号を表示' },
  { input: '田中さんにメールしました。〇〇の件で返事待ち。', action: 'メール活動をメモに記録' },
  { input: '田中さんと商談しました。〇〇の件、来月判断とのこと。', action: '商談活動をメモに記録' },
  { input: '田中さんに電話しました。〇〇を確認、来週再度連絡予定。', action: '電話活動をメモに記録' },
  { input: '今日のパイプラインを見せて', action: '進行中ディール一覧を表示' },
  { input: 'ABC商事で新規ディールを作って', action: '新規ディールを登録' },
  { input: '間違えた。田中さんのメモにして', action: '直前のメモの対象を修正' },
]

const commands = [
  { cmd: '/list', title: '顧客・ディール一覧', desc: '登録済みの顧客や商談をSlack上で確認できます。' },
  { cmd: '/deal', title: 'ディール詳細・AI進捗評価', desc: '特定の商談のAI分析とネクストアクション提案を表示します。' },
  { cmd: '/coach', title: 'AIコーチング', desc: 'AIが商談の進め方をヒアリング形式でコーチングします。' },
  { cmd: '/usage', title: 'AI利用状況', desc: '今月のAI利用量・残り予算・プラン情報を確認できます。' },
  { cmd: '/setting', title: '設定', desc: 'AI 返信支援モードの切替・営業ポリシーの設定ができます。' },
  { cmd: '/kurage', title: 'クラゲくんに話しかける（フィードバック投稿）', desc: '使ってみて感じたことを開発チームへ直接送れます。例: `/kurage 朝のブリーフィングが長く感じる`' },
]

const autoFeatures = [
  { icon: '🧠', title: '受注確率の自動計算', desc: 'メモの内容からAIが受注確率を自動更新します。' },
  { icon: '📧', title: 'AIメール下書き', desc: '顧客からのメール受信後、AIが返信案をSlackに届けます。' },
  { icon: '⚠️', title: '停滞検知', desc: '長期間動きのない案件を自動で検知して通知します。' },
  { icon: '📊', title: 'パイプライン分析', desc: 'Webダッシュボードで全体の状況をいつでも確認できます。' },
]

const firstWeekPlan = [
  {
    label: 'Day 1（インストール当日）',
    theme: 'まずクラゲくんに話しかけてみる',
    tasks: [
      'Slack で「@クラゲディール」とメンション or DM して挨拶',
      '顧客を 1 件登録（例:「田中さんを顧客に追加して。会社は ABC 商事」）',
      '活動メモを 1 件記録（例:「田中さんと商談しました。予算 300 万」）',
    ],
  },
  {
    label: 'Day 2-3',
    theme: 'AI コーチングと Web ダッシュボード',
    tasks: [
      'ディールを 1 件登録（例:「ABC 商事で新規ディールを作って」）',
      '`/coach` コマンドで MEDDPICC 深掘り体験',
      '`/setting` でログインキーを発行 → Web ダッシュボードにログイン',
    ],
  },
  {
    label: 'Day 4-5',
    theme: '朝夕ブリーフィングを受け取る',
    tasks: [
      '朝 9:00 の今日のフォーカス通知を確認',
      '夕 17:00 の振り返り通知を確認',
      '活動メモを書くたびに受注確率が動くのを体感する',
    ],
  },
  {
    label: 'Day 6-7',
    theme: '振り返り + チーム展開',
    tasks: [
      '`/list` で 1 週間の記録を振り返る',
      'チームメンバーを 1 人招待してみる（Slack ワークスペース管理者経由）',
      '`/kurage 使ってみて感じたこと` を送る（鈴木が直接拝見します）',
    ],
  },
]
</script>
