<template>
  <main class="pt-16 min-h-screen bg-ocean-mist/20">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">

      <!-- インストール完了バナー -->
      <div v-if="installed" class="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10 text-center">
        <p class="text-3xl mb-2">🎉</p>
        <h2 class="text-lg font-black text-green-800 mb-1">Slackへのインストールが完了しました！</h2>
        <p class="text-sm text-green-700 mb-4">このページの順番どおりに、クラゲくんに話しかけてみてください。</p>
        <a href="slack://open"
          class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
          Slackを開く →
        </a>
      </div>

      <!-- Header -->
      <div class="text-center mb-12">
        <img src="/kurage-on-white.svg" alt="クラゲディール" class="w-16 h-16 mx-auto mb-4" />
        <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-3">使い方ガイド</h1>
        <p class="text-gray-500">インストールから毎日の使い方まで、<b class="text-gray-600">この順番で</b>ご案内します。</p>
      </div>

      <!-- 3ステップの全体像 -->
      <div class="mb-14 grid grid-cols-3 gap-3 text-center">
        <div class="bg-white rounded-xl border border-gray-200 p-4">
          <p class="text-2xl mb-1">①</p>
          <p class="text-xs font-bold text-gray-800 leading-snug">Slackで<br />開けるようにする</p>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 p-4">
          <p class="text-2xl mb-1">②</p>
          <p class="text-xs font-bold text-gray-800 leading-snug">ボタンで<br />使ってみる</p>
        </div>
        <div class="bg-white rounded-xl border border-gray-200 p-4">
          <p class="text-2xl mb-1">③</p>
          <p class="text-xs font-bold text-gray-800 leading-snug">慣れたら<br />会話で速く</p>
        </div>
      </div>

      <!-- ① はじめる（インストール＆サイドバーに常駐） -->
      <section id="setup" class="mb-16 scroll-mt-20">
        <h2 class="text-xl font-black text-gray-800 mb-2 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
          まず Slack で開けるようにする
        </h2>
        <p class="text-sm text-gray-500 mb-5">クラゲディールは、Slack の <b>DM（個別チャット）</b>で使います。まずはそこを開けるようにしましょう。</p>

        <!-- STEP 1: 追加 -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm mb-4">
          <div class="flex items-start gap-3 mb-3">
            <span class="shrink-0 bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <p class="text-xs font-bold text-orange-500">管理者が1回だけ</p>
              <h3 class="font-bold text-gray-900">Slack ワークスペースに追加する</h3>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-5 items-center">
            <div>
              <p class="text-sm text-gray-600 leading-relaxed">β 登録後に届く<b>メールの「Slack に追加」ボタン</b>を押す → Slack の<b>認可画面で「許可」</b>→ インストール完了。完了すると、クラゲくんから welcome の DM が届きます。</p>
              <p class="text-xs text-gray-400 mt-2">※ チームで使う場合も、ワークスペースへの追加は管理者が1回だけ。メンバーの個別インストールは不要です。</p>
            </div>
            <!-- 流れの見え方（メール → 認可 → 完了） -->
            <div class="bg-gray-50 rounded-xl p-4 space-y-1.5">
              <div class="bg-white rounded-lg border border-gray-200 p-3">
                <p class="text-[11px] text-gray-400 mb-2">✉️ β 登録の確認メール</p>
                <span class="inline-flex items-center gap-1.5 bg-[#4A154B] text-white rounded-md px-3 py-2 text-xs font-bold">
                  <img src="/kurage-on-white.svg" class="w-4 h-4" alt="" /> Slack に追加
                </span>
              </div>
              <p class="text-center text-gray-300 leading-none text-sm">↓</p>
              <div class="bg-white rounded-lg border border-gray-200 p-3">
                <p class="text-[11px] text-gray-400 mb-2">🔓 Slack の認可画面</p>
                <span class="inline-block bg-green-600 text-white rounded-md px-3 py-2 text-xs font-bold">許可する</span>
              </div>
              <p class="text-center text-gray-300 leading-none text-sm">↓</p>
              <div class="bg-green-50 border border-green-200 rounded-lg p-3 text-xs text-green-800 font-bold">🎉 インストール完了・welcome DM が届く</div>
            </div>
          </div>
        </div>

        <!-- STEP 2: 開く（マウント） -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="shrink-0 bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</span>
            <h3 class="font-bold text-gray-900">サイドバーから「クラゲディール」を開く</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-5 items-center">
            <div>
              <p class="text-sm text-gray-600 leading-relaxed">Slack 左側の <b>「アプリ」</b>欄に <b>クラゲディール</b> が出ていれば、それをクリックするだけ。<b>DM（あなた専用のチャット）</b>が開きます。</p>
            </div>
            <!-- サイドバーの見え方（モック） -->
            <div class="bg-ocean-deep rounded-xl p-3 shadow-sm">
              <p class="text-[11px] font-bold text-kurage-200/70 mb-2 px-2">エージェントとアプリ</p>
              <ul class="space-y-0.5 text-sm">
                <li class="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-kurage-100/60"><span class="w-4 text-center">💬</span>Slackbot</li>
                <li class="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-kurage-100/60"><span class="w-4 text-center">📅</span>Google Calendar</li>
                <li class="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-kurage-100/60"><span class="w-4 text-center">🔵</span>Slack</li>
                <li class="flex items-center gap-2.5 px-2 py-1.5 rounded-md bg-kurage-500/25 text-white font-bold ring-1 ring-kurage-400/50">
                  <img src="/kurage-on-white.svg" class="w-5 h-5" alt="" />クラゲディール
                </li>
              </ul>
              <p class="text-[11px] text-kurage-200/60 mt-2 px-2">↑ クリックすると DM が開きます</p>
            </div>
          </div>

          <!-- 出ていない時 -->
          <div class="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            <b class="text-gray-800">サイドバーに出ていない時は？</b><br />
            Slack 上部の検索窓（<code class="bg-white px-1.5 py-0.5 rounded text-xs">Cmd / Ctrl + K</code>）に <b>「クラゲ」</b>（英字 <code class="bg-white px-1.5 py-0.5 rounded text-xs">kuragedeal</code> でも可）と入力 → <b>クラゲディール</b>を選ぶと DM が開き、そのままサイドバーに常駐します。
          </div>
        </div>

        <!-- 開いたら -->
        <div class="bg-kurage-50 border border-kurage-200 rounded-xl p-4 mt-4 text-sm text-gray-700 leading-relaxed">
          🪼 開いたこの DM が、あなたの作業場所です。<b>あなただけのプライベートな空間</b>なので、入力もクラゲの返事も<b>他の人には見えません</b>。次は、ここで実際に使ってみましょう。
        </div>
      </section>

      <!-- ②③ 2つのモードの使い方 -->
      <section id="modes" class="mb-16 scroll-mt-20">
        <h2 class="text-xl font-black text-gray-800 mb-2 flex items-center gap-2">
          <span class="bg-kurage-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
          クラゲを使う
        </h2>
        <p class="text-sm text-gray-500 mb-5 leading-relaxed">
          使い方は2つあります。最初は<b>迷わない「ボタンモード」</b>（既定）から。慣れてきたら、自然文ひとつで進む<b>「会話モード」</b>が最速です。
          <b>いつでも設定で切り替えられます</b>。設定は、<code class="bg-white px-1 rounded text-xs">/setting</code> と<b>チャット入力欄に入力して送信</b>すると開きます。
        </p>

        <!-- タブ -->
        <div class="inline-flex rounded-xl border border-kurage-200 bg-white p-1 mb-5">
          <button type="button" @click="guideMode = 'button'"
            :class="guideMode === 'button' ? 'bg-kurage-500 text-white' : 'text-gray-600 hover:text-kurage-700'"
            class="px-4 py-2 rounded-lg text-sm font-bold transition-colors">🟢 ボタンモード（既定）</button>
          <button type="button" @click="guideMode = 'talk'"
            :class="guideMode === 'talk' ? 'bg-kurage-500 text-white' : 'text-gray-600 hover:text-kurage-700'"
            class="px-4 py-2 rounded-lg text-sm font-bold transition-colors">💬 会話モード（慣れたら）</button>
        </div>

        <!-- ボタンモード -->
        <div v-show="guideMode === 'button'" class="space-y-5">
          <!-- どう動くか -->
          <div class="bg-white rounded-xl border border-gray-200 p-4 text-sm text-gray-700 leading-relaxed">
            <p class="font-bold text-gray-900 mb-1">画面に出ているボタンを押していくだけ</p>
            クラゲディールを開くと、いつも<b>メニュー</b>が目の前にあります。やりたいこと（顧客を登録／活動をメモ…）を押すと、<b>次に必要なボタンが出てきます</b>。それを選んでいくだけで、最後まで迷わず完了します。
          </div>

          <!-- 具体例：活動メモが完了するまで -->
          <p class="text-sm font-bold text-gray-900">たとえば「活動をメモ」する流れ</p>
          <SlackMessageMock channel-name="💬 クラゲディール（DM）">
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
              <p class="font-bold mb-2">👉 何をしますか？</p>
              <div class="flex flex-wrap gap-2">
                <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">👤 顧客を登録</span>
                <span class="inline-block border-2 border-kurage-400 bg-kurage-50 rounded-md px-3 py-1.5 text-xs font-bold text-kurage-800">📝 活動をメモ</span>
                <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">📊 ディールを登録</span>
                <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">📋 状況を見る</span>
              </div>
            </SlackBotLine>
            <SlackBotLine name="あなた" :is-user="true" time="9:00"><p class="text-gray-400">（「📝 活動をメモ」を押す）</p></SlackBotLine>
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
              <p class="mb-2">誰についてのメモですか？</p>
              <div class="flex flex-wrap gap-2">
                <span class="inline-block border-2 border-kurage-400 bg-kurage-50 rounded-md px-3 py-1.5 text-xs font-bold text-kurage-800">👤 田中さん</span>
                <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">👤 佐藤さん</span>
                <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">🔍 顧客を探す</span>
              </div>
            </SlackBotLine>
            <SlackBotLine name="あなた" :is-user="true" time="9:00"><p class="text-gray-400">（「👤 田中さん」を押す）</p></SlackBotLine>
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
              <p class="mb-2">どんな活動でしたか？</p>
              <div class="flex flex-wrap gap-2">
                <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">📞 電話</span>
                <span class="inline-block border-2 border-kurage-400 bg-kurage-50 rounded-md px-3 py-1.5 text-xs font-bold text-kurage-800">🤝 商談</span>
                <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">✉️ メール</span>
              </div>
            </SlackBotLine>
            <SlackBotLine name="あなた" :is-user="true" time="9:01"><p class="text-gray-400">（「🤝 商談」を押す）</p></SlackBotLine>
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:01">
              <p>最後に、ひとことメモを入力してください。<span class="text-gray-400">（例：予算300万、来月判断）</span></p>
            </SlackBotLine>
            <SlackBotLine name="あなた" :is-user="true" time="9:01"><p>予算300万、競合は1社。来月末に判断</p></SlackBotLine>
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:01">
              <p>✅ 田中さんの商談メモを記録しました。受注確率も更新しました🪼</p>
            </SlackBotLine>
          </SlackMessageMock>
          <p class="text-xs text-gray-500"><b>ボタンを押す → 次のボタンが出る</b>をくり返し、最後にひとことだけ入力すれば完了。データ構造を知らなくても、案内に沿うだけで記録できます。</p>

          <!-- 入力について -->
          <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            ✏️ 顧客や会社名・金額・メモなどは、クラゲが <b>「○○を入力してください」</b>と聞いたら、ふつうに打ち込めば OK です。
          </div>

          <!-- 行き止まりゼロ -->
          <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            🔁 どの画面にも次に押せるボタンがあるので、<b>行き止まりになりません</b>。最初に戻りたいときは <b>「メニュー」</b> と打てば、いつでもメニューが出ます。
          </div>
        </div>

        <!-- 会話モード -->
        <div v-show="guideMode === 'talk'" class="space-y-5">
          <div class="bg-white rounded-xl border border-gray-200 p-4 text-sm text-gray-700 leading-relaxed">
            <p class="font-bold text-gray-900 mb-1">ふだんの言葉で、そのまま書くだけ</p>
            同僚に報告するみたいに、一言どうぞ。慣れてきたら、こちらが最速です。切り替えは <code class="bg-gray-100 px-1 rounded text-xs">/setting</code> →「操作モード」から。
          </div>

          <SlackMessageMock channel-name="💬 クラゲディール（DM）">
            <SlackBotLine name="あなた" :is-user="true" time="14:30"><p>田中さんを顧客に追加して。会社はABC商事</p></SlackBotLine>
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="14:30"><p>✅ 田中さん（ABC商事）を登録しました。</p></SlackBotLine>
            <SlackBotLine name="あなた" :is-user="true" time="14:31"><p>田中さんと商談しました。予算300万、競合は1社</p></SlackBotLine>
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="14:31"><p>✅ 記録しました。受注確率を更新しました。次にやることも、そっとお知らせします🪼</p></SlackBotLine>
          </SlackMessageMock>

          <div>
            <p class="font-bold text-gray-900 mb-2 text-sm">こんなふうに書けます</p>
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

          <div>
            <p class="font-bold text-gray-900 mb-2 text-sm">よく使うフレーズ一覧</p>
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
          </div>
        </div>

        <!-- 困ったとき（両モード共通のフォールバック） -->
        <div class="mt-6 bg-kurage-50 border border-kurage-200 rounded-2xl p-5">
          <p class="font-black text-gray-900 mb-1">💡 困ったら、そのままクラゲに聞いてください</p>
          <p class="text-sm text-gray-700 leading-relaxed">
            どちらのモードでも、迷ったら<b>ふつうの言葉で聞く</b>のがいちばん確実です。
            「次なにすればいい？」と聞けば<b>いまのおすすめ</b>を、「田中さんって誰だっけ？」と聞けば<b>その場で調べて</b>答えてくれます。
            案件を深掘りしたいときは <code class="bg-white px-1 rounded text-xs">/coach</code> でコーチングも受けられます。
          </p>
        </div>
      </section>

      <!-- クイックスタート：最初の1週間 -->
      <section id="first-week" class="mb-16 scroll-mt-20">
        <div class="bg-gradient-to-br from-kurage-50 via-cyan-50 to-ocean-mist/40 border-2 border-kurage-200 rounded-2xl p-6 md:p-8">
          <div class="flex items-center gap-3 mb-4">
            <img src="/kurage-smile.svg" alt="クラゲくん" class="w-8 h-8 flex-shrink-0" />
            <div>
              <p class="text-xs font-bold text-orange-500 uppercase tracking-widest">クイックスタート</p>
              <h2 class="text-xl md:text-2xl font-black text-gray-900">最初の 1 週間でやってみること</h2>
            </div>
          </div>
          <p class="text-sm text-gray-600 mb-4 leading-relaxed">
            クラゲディールの真価は、毎日少しずつ Slack に記録することで現れます。<br />
            まず 1 週間、下の流れに沿って試してみてください。<b>すべてボタンで進められます</b>（迷ったら DM で「メニュー」と打つだけ）。
          </p>
          <p class="text-xs text-gray-500 mb-6 bg-white/60 rounded-lg px-3 py-2">
            🔰 はじめての方は、先に <a href="#setup" class="text-kurage-700 font-bold underline">① インストール</a> と <a href="#modes" class="text-kurage-700 font-bold underline">② ボタンモードの使い方</a> に目を通すとスムーズです。慣れてきたら、自然文ひとつで進む<b>会話モード</b>も試してみてください。
          </p>

          <div class="space-y-6">
            <div v-for="day in firstWeekPlan" :key="day.label">
              <p class="font-bold text-kurage-800 mb-2 text-sm">{{ day.label }} — {{ day.theme }}</p>
              <div class="space-y-2">
                <div v-for="(task, i) in day.tasks" :key="i" class="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-start gap-2.5 text-sm text-gray-700">
                  <span class="text-green-500 mt-0.5 flex-shrink-0">✅</span>
                  <span>{{ task }}</span>
                </div>
              </div>
            </div>
          </div>

          <p class="text-xs text-gray-500 mt-6 italic leading-relaxed">
            ※ 全部やる必要はありません。気になったところからどうぞ。<br />
            ※ うまくいかない時は、このページ右下のクラゲくんに、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <!-- 便利な機能とコマンド（リファレンス：両モード共通） -->
      <div class="border-t border-gray-200 pt-10 mb-8">
        <h2 class="text-2xl font-black text-gray-900 mb-1">便利な機能とコマンド</h2>
        <p class="text-sm text-gray-500">ここからはマニュアルです。コマンド・自動機能・設定・メール連携機能などは、ボタン・会話どちらのモードでもお使いいただけます。</p>
      </div>

      <!-- スラッシュコマンド -->
      <section class="mb-10">
        <h3 class="text-lg font-black text-gray-800 mb-1 flex items-center gap-2">⌨️ スラッシュコマンド</h3>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed mb-4">
          コマンドは、Slack の<b>チャット入力欄（メッセージを打つところ）</b>に <code class="bg-white px-1.5 py-0.5 rounded text-xs">/coach</code> のように入力して<b>送信</b>すると実行されます。<code class="bg-white px-1.5 py-0.5 rounded text-xs">/</code> を打つと候補が出るので、選んでもOKです。
        </div>
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

      <!-- /setting でできること -->
      <section class="mb-10">
        <h3 class="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
          ⚙️ <code class="bg-kurage-50 text-kurage-700 px-2 py-0.5 rounded font-mono text-base">/setting</code> でできること
        </h3>
        <p class="text-sm text-gray-500 mb-4">Slackで <code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/setting</code> をチャット入力欄に入力して送信すると、設定メニューが開きます。おもな項目：</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-3">
            <span class="shrink-0 text-xl leading-none">🧭</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">操作モード</b> — <b>ボタンモード</b>（既定・ボタン中心でクラゲが案内）／<b>会話モード</b>（自然文ひとつで軽快）を切り替えられます。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-3">
            <span class="shrink-0 text-xl leading-none">📧</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">AI返信支援</b> — 顧客メールの返信下書きの ON / OFF。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-3">
            <span class="shrink-0 text-xl leading-none">📋</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">AI営業ポリシー</b> — クラゲの提案トーンを指定（例：「押し売りしない・課題解決型」）。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-3">
            <span class="shrink-0 text-xl leading-none">✉️</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">送信元メールアドレス</b> — 返信を送るときに使う、あなたのアドレス。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-3">
            <span class="shrink-0 text-xl leading-none">📨</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">メール連携（顧客メールの取り込み）</b> — あなた専用の取り込みアドレスが表示されます（<b>下に詳しい手順</b>）。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-3">
            <span class="shrink-0 text-xl leading-none">🌐</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">Webダッシュボード</b> — 個人ログインキーの発行（下に手順）。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-3 sm:col-span-2">
            <span class="shrink-0 text-xl leading-none">🎓</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">学習モード（サンプルデータ）</b> — はじめは<b>サンプルデータが入った状態</b>で、一覧・受注確率・次の一手を<b>すぐ体験</b>できます。<b>「🧹 サンプルを削除」</b>でサンプルデータだけ片づけられます（あなたの実データは残ります）。もう一度試したいときは<b>「🎓 サンプルを入れる」</b>で戻せます。</p>
          </div>
        </div>
      </section>

      <!-- AIが自動でやること -->
      <section class="mb-10">
        <h3 class="text-lg font-black text-gray-800 mb-1 flex items-center gap-2">🤖 AI が自動でやること</h3>
        <p class="text-sm text-gray-500 mb-4">あなたは書くだけ。詳しくは <a href="/ai-support" class="text-kurage-600 font-bold underline hover:text-kurage-700">クラゲくんのAIサポート</a> をご覧ください。</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="auto in autoFeatures" :key="auto.title" class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p class="text-2xl mb-2">{{ auto.icon }}</p>
            <p class="font-bold text-gray-800 mb-1">{{ auto.title }}</p>
            <p class="text-sm text-gray-500">{{ auto.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Webダッシュボード -->
      <section class="mb-10">
        <h3 class="text-lg font-black text-gray-800 mb-2 flex items-center gap-2">🌐 Web ダッシュボードにログインする</h3>
        <p class="text-sm text-gray-500 mb-4">Slackの会話が自動でCRMに蓄積されます。全体を俯瞰したい時は Web ダッシュボードをご利用ください。次の3ステップでログインできます。</p>
        <div class="grid gap-3">
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-4 items-start">
            <span class="bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <p class="text-sm text-gray-700 leading-relaxed">Slackで <code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/setting</code> を開き、<b>「🔑 発行する」ボタン</b>を押すと、<b>ログインキー</b>がメッセージで届きます。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-4 items-start">
            <span class="bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <p class="text-sm text-gray-700 leading-relaxed">届いたキーをコピーして、<b>ダッシュボードのログイン画面に貼り付け</b>ます。</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-4 items-start">
            <span class="bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <p class="text-sm text-gray-700 leading-relaxed">一度ログインすると、<b>次回からは自動でサインイン</b>されます。</p>
          </div>
        </div>
      </section>

      <!-- メール連携 -->
      <section class="mb-10">
        <h3 class="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">📨 顧客メールを取り込む（メール連携）</h3>
        <p class="text-sm text-gray-500 mb-4">顧客とのメールを<b>転送するだけ</b>で、クラゲが内容を読んで<b>活動メモ・受注確率に反映</b>し、<b>返信ドラフト</b>を Slack に届けます。やることは次の3つです。</p>
        <div class="grid gap-3">
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-4 items-start">
            <span class="shrink-0 bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">取り込みアドレスをコピー</b><br />Slackで <code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/setting</code> を開き、<b>「📨 メール連携」セクション</b>へ。表示される<b>あなた専用のアドレス</b>（<code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">u…@kuragedeal.ai</code>）をコピーします。<br /><span class="text-gray-400">※ このアドレスはあなた専用です。他の人と共有しないでください。</span></p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-4 items-start">
            <span class="shrink-0 bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">顧客メールを転送</b><br /><b>方法①：手動で転送（かんたん・確実）</b> — 取り込みたいメールを「転送」で上のアドレスへ送るだけ。<br /><b>方法②：特定の顧客を自動で取り込む</b> — Gmail の「メール転送と POP/IMAP」で<b>転送先に上のアドレスを追加</b> → クラゲから届く<b>確認リンクをクリック</b>して有効化 → <b>フィルタ</b>で「その顧客 → 転送」に設定。<br /><span class="text-gray-400">※「受信メールを“すべて”転送」は選ばないでください（顧客以外のメールも入ってしまいます）。フィルタ設定の詳しい手順は、準備中のヘルプページでご案内します。</span></p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm flex gap-4 items-start">
            <span class="shrink-0 bg-kurage-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
            <p class="text-sm text-gray-700 leading-relaxed"><b class="text-gray-800">Slack で返信を承認</b><br />クラゲが <b>返信ドラフト</b>を Slack の DM に届けます。<b>「このまま送信／修正して送信／送らない／自分で対応」</b>から選ぶだけ。承認すると、あなたの<b>送信元アドレスから</b>返信が送られます。</p>
          </div>
        </div>
        <div class="mt-4 bg-kurage-50 border border-kurage-100 rounded-xl p-4 text-xs text-gray-600 leading-relaxed">
          <b class="text-gray-800">事前に1つだけ：</b> 返信を送るには、<code class="bg-white px-1.5 py-0.5 rounded">/setting</code> の「✉️ 送信元メールアドレス」であなたのアドレスを設定・認証しておいてください（認証が済むとクラゲがそのアドレスから返信できます）。<br />
          <b class="text-gray-800">中身の無いメールには返信案を作りません：</b> テスト送信や自動通知など実質的な問い合わせが無いメールは、クラゲが判断して返信ドラフトをスキップします（活動メモには記録されます）。
        </div>
      </section>

      <!-- プライバシー・データの扱い -->
      <section class="mb-10">
        <h3 class="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">🔒 プライバシーとデータの扱い</h3>
        <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-sm text-gray-700 leading-relaxed">
          クラゲディールは <b>DM（クラゲディール App との個別チャット）</b>で使う、<b>あなただけのプライベート</b>な営業アシスタントです。入力もクラゲの回答も<b>他の人には見えません</b>。データも担当者ごとに分離されています。
        </div>
      </section>

    </div>
  </main>
</template>

<script setup lang="ts">
usePageSeo({
  path: '/guide',
  title: '使い方ガイド | クラゲディール',
  description:
    'クラゲディールの使い方ガイド。インストールから、ボタンモード／会話モードの使い方、最初の1週間の進め方、コマンドやメール連携まで、順番にわかりやすく紹介します。',
})

const guideMode = ref<'button' | 'talk'>('button')
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
    { cmd: '/setting', title: '設定', desc: '操作モード・AI返信支援・営業ポリシー・ログインキー発行・学習モード（サンプル）などの設定メニュー。' },
    { cmd: '/kurage', title: 'フィードバック投稿', desc: '使ってみて感じたことを開発チームへ直接送れます。例: `/kurage 朝のブリーフィングが長く感じる`' },
  ]},
]

const autoFeatures = [
  { icon: '🧠', title: '受注確率の自動更新', desc: 'メモするたびに、AIが営業の型（MEDDPICC）に沿って受注確率を計算し直します。' },
  { icon: '⚠️', title: '停滞検知', desc: '14日うごきのない案件は確率がそっと下がり、長期停滞も自動で通知。見落としに気づけます。' },
  { icon: '🎓', title: 'AIコーチング', desc: '「ABC商事はどう？」や /coach で、MEDDPICCに沿ってクラゲがやさしく問いかけます。' },
  { icon: '✉️', title: 'メール返信の代筆', desc: '顧客からの返信に下書きを用意。Slackでボタンを押すと、あなた本人のアドレスから送信されます。' },
  { icon: '📨', title: 'メール連携', desc: '顧客メールを転送すると、内容を読んで活動メモ・受注確率に反映し、返信下書きまで届けます。' },
  { icon: '☀️', title: '朝夕ブリーフィング', desc: '毎朝9時に「今日のフォーカス」、夕方17時に振り返りを、クラゲからお届けします。' },
  { icon: '📊', title: 'パイプライン分析', desc: 'Webダッシュボードで、チーム全体の状況をいつでも俯瞰できます。' },
]

// 最初の1週間は「初心者＝ボタンモード」のパス。会話モードは別パスなので混ぜない。
// Day1 はサンプル（見本）でクラゲの動きを体験 → Day2 以降で自分のデータを入れる流れ。
const firstWeekPlan = [
  {
    label: 'Day 1（インストール当日）',
    theme: '最初から入っているサンプルデータで動きを体験',
    tasks: [
      'サイドバーの「クラゲディール」を開く',
      '最初から入っているサンプルデータで「📋 状況を見る」を押し、顧客・会社・ディールの一覧を眺める',
      '「🎯 次にやること」を押して、受注確率やおすすめの出かたを体験する',
    ],
  },
  {
    label: 'Day 2-3',
    theme: '自分のデータを入れてみる',
    tasks: [
      'メニュー →「👤 顧客を登録」で、自分の顧客を 1 件登録',
      'メニュー →「📊 ディールを登録」で、その顧客の案件を 1 件つくる',
      'メニュー →「📝 活動をメモ」でその案件にメモ → AI が案件の受注確率に反映するのを見る',
    ],
  },
  {
    label: 'Day 4-5',
    theme: 'AI コーチングと朝夕ブリーフィング',
    tasks: [
      '`/coach` で AI コーチングを体験（コマンドはどちらのモードでも使えます）',
      '朝 9:00「今日のフォーカス」／夕 17:00 の振り返り通知を受け取る',
      '`/setting` でログインキーを発行 → Web ダッシュボードにログイン',
    ],
  },
  {
    label: 'Day 6-7',
    theme: '片づけ + チーム展開',
    tasks: [
      'メニュー →「📋 状況を見る」で、いまの顧客・会社・ディールの状況を見渡す',
      '`/setting` →「🧹 サンプルを削除」でサンプルデータを片づける（自分のデータは残ります）',
      '同僚を 1 人さそう：その人が Slack で「クラゲ」を検索して「クラゲディール」を開くだけ（個別インストールは不要。開いた人それぞれに専用の DM ができます）',
    ],
  },
]
</script>
