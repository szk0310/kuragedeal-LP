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

      <!-- はじめに：ふつうのCRMと構造が違う -->
      <div class="mb-14 bg-ocean-deep text-white rounded-2xl p-6 md:p-8">
        <p class="text-sm font-bold text-cyan-300 mb-2">はじめに</p>
        <p class="leading-relaxed text-kurage-100">
          ふつうのCRMは、別の画面を開いて項目を入力するツールです。<br />
          クラゲディールは、<span class="text-white font-bold">Slackに話しかけるだけ。</span>新しいアプリを開かない、<span class="text-white font-bold">画面遷移も、項目入力もありません。</span><br />
          通知だけ届く “Slackの出張所” ではなく、<span class="text-white font-bold">Slackそのものが営業ツール</span>です。
        </p>
        <p class="text-sm text-cyan-200 mt-3 leading-relaxed">
          ※ 操作する画面はありません。同僚に報告するみたいに書けばOK。「CRMを操作している」感覚は、いったん忘れてください。
        </p>
      </div>

      <!-- 導入する（セットアップ） -->
      <section id="setup" class="mb-14 scroll-mt-20">
        <h2 class="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">0</span>
          はじめる（かんたん2ステップ）
        </h2>
        <p class="text-sm text-gray-500 mb-4">まずは<b>自分ひとりで</b>。クラゲに DM して話しかけるだけ。チャンネルは不要です。</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p class="text-xs font-bold text-orange-500 mb-1">STEP 1（管理者が1回）</p>
            <h3 class="font-bold text-gray-900 mb-2">Slack に追加</h3>
            <p class="text-sm text-gray-600 leading-relaxed">β 登録後に届く<b>メールの「Slack に追加」ボタン</b>を押す → Slack の<b>認可画面で「許可」</b>→ ワークスペースにインストール完了。完了するとクラゲくんから welcome DM が届きます。<br /><span class="text-gray-400">※ チームで使う場合、ワークスペースへの追加は管理者が1回だけ。メンバーは個別インストール不要です。</span></p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p class="text-xs font-bold text-orange-500 mb-1">STEP 2</p>
            <h3 class="font-bold text-gray-900 mb-2">クラゲに DM して話しかける</h3>
            <p class="text-sm text-gray-600 leading-relaxed">左サイドバー「アプリ」→ <b>クラゲディール</b> を開いて、そのまま自然文で一言。<b>あなただけのプライベート空間</b>です（他の人には見えません）。</p>
          </div>
        </div>

        <!-- オプション: チームで共有 -->
        <div class="bg-white border border-dashed border-gray-300 rounded-2xl p-5 mt-4">
          <p class="font-bold text-gray-800 mb-2">💡 オプション：チームでみんなと使いたいとき</p>
          <p class="text-sm text-gray-600 leading-relaxed">
            営業用チャンネル（例 <code class="bg-gray-100 px-1 rounded">#営業-crm</code>）を作成 → チャンネルで <code class="bg-gray-100 px-1 rounded">/invite @クラゲディール</code>（または チャンネル詳細 → インテグレーション → アプリを追加）→ メンバーを招待。
            招待された人は<b>各自の Slack ID でそのまま利用開始</b>（個別インストール不要）。<br />
            <span class="text-gray-500">※ 共有チャンネルでは、発言とクラゲの回答が<b>メンバー全員に見えます</b>。チームで共有して構わない場合に向いています。</span>
          </p>
        </div>

        <div class="bg-kurage-50 border border-kurage-200 rounded-xl p-4 mt-4 text-sm text-gray-700 leading-relaxed">
          🔒 <b>プライバシー</b>：<b>DM ＝ あなただけのプライベート</b>（入力もクラゲの回答も他人に見えません）。<b>共有チャンネル ＝ メンバー全員に見えます</b>。各自の機密データは <b>DM のご利用がおすすめ</b>、チームで共有したいときはチャンネルで。<br />
          <span class="text-gray-500">※ サイドバーにアプリが出ない時は、Slack 上部の検索窓（Cmd / Ctrl + K）に「クラゲディール」（英字 kuragedeal でも可）と入力して選ぶと、DM が開いて常駐します。</span>
        </div>
      </section>

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
          <p class="text-sm text-gray-600 mb-4">Slackでクラゲディール App に DM するか、招待済みチャンネルで<b>そのまま書くだけ</b>（<code class="bg-gray-100 px-1 rounded">@クラゲディール</code> のメンションは任意）。</p>
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
        <div class="space-y-4">
          <div v-for="g in commandGroups" :key="g.group" class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p class="text-xs font-bold text-kurage-600 mb-3">{{ g.group }}</p>
            <div class="space-y-4">
              <div v-for="cmd in g.cmds" :key="cmd.cmd" class="flex gap-4 items-start">
                <code class="bg-kurage-50 text-kurage-700 px-3 py-1 rounded-lg font-mono text-sm whitespace-nowrap">{{ cmd.cmd }}</code>
                <div>
                  <p class="text-sm font-semibold text-gray-800">{{ cmd.title }}</p>
                  <p class="text-sm text-gray-500">{{ cmd.desc }}</p>
                </div>
              </div>
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

const commandGroups = [
  { group: '情報を見る（一覧）', cmds: [
    { cmd: '/deal', title: 'ディール一覧・検索', desc: '商談の一覧・検索、AI進捗評価とネクストアクション提案。' },
    { cmd: '/contact', title: '顧客一覧', desc: '登録済みの顧客をSlack上で確認できます。' },
    { cmd: '/account', title: '会社一覧', desc: '登録済みの会社（取引先）を確認できます。' },
  ]},
  { group: 'AI・確認', cmds: [
    { cmd: '/coach', title: 'AIコーチング', desc: 'AIが商談の進め方をヒアリング形式でコーチングします。' },
    { cmd: '/usage', title: 'AI利用状況', desc: '今月のAI利用量・残り予算・プラン情報を確認できます。' },
  ]},
  { group: '設定・その他', cmds: [
    { cmd: '/settings', title: '設定', desc: 'ナーチャリング・営業ポリシーの設定ができます。' },
    { cmd: '/kurage', title: 'フィードバック投稿', desc: '使ってみて感じたことを開発チームへ直接送れます。例: `/kurage 朝のブリーフィングが長く感じる`' },
  ]},
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
      'クラゲディール App に DM して挨拶（まずは自分ひとりで・プライベート）',
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
