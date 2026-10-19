<template>
  <LpFrame main-id="guide">
    <div class="p-guide">

      <!-- インストール完了バナー -->
      <div v-if="installed" class="p-guide__banner c-info--success" style="display:block;">
        <p class="p-guide__banner-icon">✅</p>
        <p>
          クラゲディールを Slack に追加しました。次は、左のサイドバーの「アプリ」からクラゲディールを開いて［📋 メニュー］を押してください（見つからなければ Slack 上部の検索で「クラゲ」）。
        </p>
        <a href="slack://open" class="c-btn">Slackを開く →</a>
      </div>

      <!-- Header -->
      <div class="p-guide__head">
        <img :src="KURAGE_ICON" alt="クラゲディール" class="p-guide__head-icon" />
        <h1 class="p-guide__head-ttl">使い方ガイド</h1>
        <p class="p-guide__head-lead">インストールから毎日の使い方まで、<strong>この順番で</strong>ご案内します。</p>
      </div>

      <!-- 3ステップの全体像 -->
      <div class="p-guide__overview">
        <div class="p-guide__overview-cell c-card--flat" style="border-radius: calc(18 * var(--u));">
          <p class="p-guide__overview-num">①</p>
          <p class="p-guide__overview-label">Slackで<br />開けるようにする</p>
        </div>
        <div class="p-guide__overview-cell c-card--flat" style="border-radius: calc(18 * var(--u));">
          <p class="p-guide__overview-num">②</p>
          <p class="p-guide__overview-label">ボタンで<br />使ってみる</p>
        </div>
        <div class="p-guide__overview-cell c-card--flat" style="border-radius: calc(18 * var(--u));">
          <p class="p-guide__overview-num">③</p>
          <p class="p-guide__overview-label">毎朝の<br />ブリーフィングで進める</p>
        </div>
      </div>

      <!-- ① はじめる（インストール＆サイドバーに常駐） -->
      <section id="setup" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">1</span>まず Slack で開けるようにする</h2>
        <p class="p-guide__section-lead">クラゲディールは、Slack の <strong>DM（個別チャット）</strong>で使います。まずはそこを開けるようにしましょう。</p>

        <div class="p-guide__cards">
          <!-- STEP 1: 追加 -->
          <div class="c-card">
            <div class="c-step">
              <span class="c-step__num">1</span>
              <div class="c-step__body">
                <p class="p-guide__cmd-group-label">管理者が1回だけ</p>
                <p class="c-step__ttl">Slack ワークスペースに追加する</p>
              </div>
            </div>
            <div class="p-guide__step-grid p-guide__step-grid--2col">
              <div>
                <p class="c-step__text">このサイトの<strong>［14日間無料で試す］ボタン</strong>から<strong>「Slack に追加」</strong>を押す → Slack の<strong>認可画面で「許可」</strong>→ インストール完了。完了すると、クラゲくんからあいさつの DM が届きます。</p>
                <p class="p-guide__caption">※ チームで使う場合も、ワークスペースへの追加は管理者が1回だけ。メンバーの個別インストールは不要です。</p>
              </div>
              <!-- 流れの見え方（LP → 認可 → 完了） -->
              <div class="p-guide__flow">
                <div class="p-guide__flow-box">
                  <p class="p-guide__flow-label">🌐 このサイト</p>
                  <span class="p-guide__flow-chip">
                    <span class="p-guide__flow-chip-icon"><img :src="KURAGE_ICON" alt="" /></span> Slack に追加
                  </span>
                </div>
                <p class="p-guide__flow-arrow">↓</p>
                <div class="p-guide__flow-box">
                  <p class="p-guide__flow-label">🔓 Slack の認可画面</p>
                  <span class="p-guide__flow-chip p-guide__flow-chip--success">許可する</span>
                </div>
                <p class="p-guide__flow-arrow">↓</p>
                <div class="p-guide__flow-done">🎉 インストール完了・あいさつの DM が届く</div>
              </div>
            </div>
          </div>

          <!-- STEP 2: 開く（マウント） -->
          <div class="c-card">
            <div class="c-step">
              <span class="c-step__num">2</span>
              <p class="c-step__ttl" style="padding-top: calc(10 * var(--u));">サイドバーから「クラゲディール」を開く</p>
            </div>
            <div class="p-guide__step-grid p-guide__step-grid--2col">
              <p class="c-step__text">Slack 左側の <strong>「アプリ」</strong>欄に <strong>クラゲディール</strong> が出ていれば、それをクリックするだけ。<strong>DM（あなた専用のチャット）</strong>が開きます。</p>
              <!-- サイドバーの見え方（モック） -->
              <div class="p-guide__sidebar-mock">
                <p class="p-guide__sidebar-mock-label">エージェントとアプリ</p>
                <div class="p-guide__sidebar-mock-item"><span>💬</span>Slackbot</div>
                <div class="p-guide__sidebar-mock-item"><span>📅</span>Google Calendar</div>
                <div class="p-guide__sidebar-mock-item"><span>🔵</span>Slack</div>
                <div class="p-guide__sidebar-mock-item p-guide__sidebar-mock-item--active">
                  <img :src="KURAGE_ICON" alt="" />クラゲディール
                </div>
                <p class="p-guide__sidebar-mock-note">↑ クリックすると DM が開きます</p>
              </div>
            </div>

            <!-- 出ていない時 -->
            <div class="c-info" style="margin-top: calc(28 * var(--u));">
              <span class="c-info__icon">💡</span>
              <p><strong>サイドバーに出ていない時は？</strong><br />Slack 上部の検索窓（<code>Cmd / Ctrl + K</code>）に <strong>「クラゲ」</strong>（英字 <code>kuragedeal</code> でも可）と入力 → <strong>クラゲディール</strong>を選ぶと DM が開き、そのままサイドバーに常駐します。</p>
            </div>
          </div>

          <!-- 開いたら -->
          <div class="c-info--accent">
            <span class="c-info__icon">🪼</span>
            <p>開いたこの DM が、あなたの作業場所です。<strong>あなただけのプライベートな空間</strong>なので、入力もクラゲの返事も<strong>他の人には見えません</strong>。次は、ここで実際に使ってみましょう。</p>
          </div>
        </div>
      </section>

      <!-- ② クラゲを使う -->
      <section id="modes" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">2</span>クラゲを使う</h2>
        <p class="p-guide__section-lead">
          基本は<strong>ボタンを押していくだけ</strong>。クラゲが毎回、次に押せるボタンを案内します。
        </p>

        <div class="p-guide__cards">
          <!-- どう動くか -->
          <div class="c-card">
            <p class="c-step__ttl" style="font-size: calc(26 * var(--u));">画面に出ているボタンを押していくだけ</p>
            <p class="c-step__text">クラゲディールを開くと、いつも<strong>メニュー</strong>が目の前にあります。やりたいこと（顧客を登録／活動をメモ…）を押すと、<strong>次に必要なボタンが出てきます</strong>。それを選んでいくだけで、最後まで迷わず完了します。</p>
          </div>

          <!-- 具体例：活動メモが完了するまで -->
          <div>
            <p class="p-guide__cmd-group-label" style="margin-bottom: calc(20 * var(--u));">たとえば「活動をメモ」する流れ</p>
            <SlackMessageMock channel-name="💬 クラゲディール（DM）">
              <SlackBotLine name="あなた" :is-user="true" time="9:00"><p class="text-gray-400">メニュー</p></SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
                <p class="font-bold mb-2">メニュー　やりたいことを選んでください</p>
                <div class="flex flex-col gap-2">
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">👤 顧客を登録</span>
                  <span class="block w-full text-center border-2 border-kurage-400 bg-kurage-50 rounded-lg px-4 py-2.5 text-sm font-bold text-kurage-800">📝 活動をメモ</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">📊 ディールを登録</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">🎯 今やること</span>
                </div>
              </SlackBotLine>
              <SlackBotLine name="あなた" :is-user="true" time="9:00"><p class="text-gray-400">（「📝 活動をメモ」を押す）</p></SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
                <p class="font-bold mb-2">📝 活動をメモ　誰についてのメモですか？（最近やりとりした順）</p>
                <div class="flex flex-col gap-2">
                  <span class="block w-full text-center border-2 border-kurage-400 bg-kurage-50 rounded-lg px-4 py-2.5 text-sm font-bold text-kurage-800">👤 田中一郎</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">👤 佐藤花子</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">🔍 顧客を探す</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">✖ やめる</span>
                </div>
              </SlackBotLine>
              <SlackBotLine name="あなた" :is-user="true" time="9:00"><p class="text-gray-400">（「👤 田中一郎」を押す）</p></SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
                <p class="font-bold mb-2">どんな活動ですか？</p>
                <div class="flex flex-col gap-2">
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">📞 電話</span>
                  <span class="block w-full text-center border-2 border-kurage-400 bg-kurage-50 rounded-lg px-4 py-2.5 text-sm font-bold text-kurage-800">🤝 打ち合わせ</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">📧 メール</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">🏢 訪問</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">📝 メモ</span>
                </div>
              </SlackBotLine>
              <SlackBotLine name="あなた" :is-user="true" time="9:01"><p class="text-gray-400">（「🤝 打ち合わせ」を押す）</p></SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:01">
                <p class="mb-2">内容を書いてください（短くてOK）</p>
                <div class="flex flex-col gap-2">
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">スキップ</span>
                </div>
              </SlackBotLine>
              <SlackBotLine name="あなた" :is-user="true" time="9:01"><p>打ち合わせ。来週までに見積もりを出す。先方は役員会で検討</p></SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:01">
                <p class="mb-2">この内容で記録しますか？<br><b>田中一郎さん</b> / 打ち合わせ<br>「打ち合わせ。来週までに見積もりを出す。先方は役員会で検討」</p>
                <div class="flex flex-col gap-2">
                  <span class="block w-full text-center border-2 border-kurage-400 bg-kurage-50 rounded-lg px-4 py-2.5 text-sm font-bold text-kurage-800">✅ これで登録</span>
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">⟲ 最初から</span>
                </div>
              </SlackBotLine>
              <SlackBotLine name="あなた" :is-user="true" time="9:01"><p class="text-gray-400">（「✅ これで登録」を押す）</p></SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:01">
                <p>✅ 田中一郎さん（株式会社サンプル商事）の活動を記録しました（「打ち合わせ。来週までに見積もりを出す…」）🪼</p>
              </SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:01">
                <p class="font-bold mb-1">👉 今やること</p>
                <p>📝 メモから拾ったやること<br>・見積もりを出す（来週までに）　田中一郎さん（株式会社サンプル商事）</p>
                <div class="flex flex-col gap-2 mt-2">
                  <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">✅ 済んだ</span>
                </div>
              </SlackBotLine>
            </SlackMessageMock>
            <p class="p-guide__caption"><strong>ボタンを押す → 次のボタンが出る</strong>をくり返し、最後にひとことだけ入力すれば完了。案内に沿うだけで記録できて、書いた内容からやることまで拾ってくれます。</p>
          </div>

          <!-- 入力について -->
          <div class="c-info"><span class="c-info__icon">✏️</span><p>顧客名や会社名、金額、メモなどは、クラゲの案内に従って入力するだけでOKです。</p></div>
          <!-- 個人のお客様 -->
          <div class="c-info"><span class="c-info__icon">👤</span><p>個人のお客様（個人事業主・フリーランス等）は、<strong>会社なしで登録</strong>できます。一覧には「個人のお客様」と表示されます。</p></div>
          <!-- 行き止まりゼロ -->
          <div class="c-info"><span class="c-info__icon">🔁</span><p>どの画面にも次に押せるボタンがあるので、<strong>行き止まりになりません</strong>。最初に戻りたいときは <strong>「メニュー」</strong> と打てば、いつでもメニューが出ます。</p></div>
        </div>

        <!-- 次の一手の並び方 -->
        <div class="c-card--flat" style="margin-top: calc(60 * var(--u)); border-radius: calc(20 * var(--u)); padding: calc(28 * var(--u)) calc(30 * var(--u));">
          <p class="p-guide__cmd-ttl">📋 「次の一手」の並び方</p>
          <p class="c-step__text" style="margin-top: calc(10 * var(--u));">次の一手と期日から、クラゲが自動で並べます。<strong>なぜその順で出たかは、各行に理由が1行そえられる</strong>ので迷いません。</p>
          <ol style="margin-top: calc(18 * var(--u)); display:flex; flex-direction:column; gap: calc(10 * var(--u)); font-size: calc(23 * var(--u)); line-height: calc(38 * var(--u));">
            <li>1. <strong>⏰ 期限切れ</strong> — 次の一手の期日が過ぎているもの（最優先）</li>
            <li>2. <strong>📅 今日/明日</strong> — 期日が今日・明日のもの</li>
            <li>3. <strong>🔥 重要（期日なし）</strong> — 期日は無いが、ディール確度×金額の大きい順のもの</li>
            <li>4. <strong>✍️ 次の一手がまだないもの</strong> — クラゲのおすすめから［これにする］、または［✍️ 自分で書く］で決められます</li>
            <li>5. <strong>＋ メモから拾ったやること</strong> — メモに書いた内容をAIが読み取り、見つかったやることをリストの最後に追加します</li>
          </ol>
          <p class="p-guide__caption">DM で「今やること」と打つと、この順で表示されます。個別のディールを深掘りしたいときは <code>/coach</code> のAIコーチングをどうぞ。</p>
        </div>

        <!-- 困ったとき -->
        <div class="c-info--accent" style="margin-top: calc(40 * var(--u)); display:block;">
          <p class="p-guide__cmd-ttl">💡 困ったら、そのままクラゲに聞いてください</p>
          <p class="c-step__text" style="margin-top: calc(10 * var(--u));">
            わからないことは、そのままクラゲに聞いてください。<strong>具体的に聞く</strong>と、その場で答えます（例：<strong>「メモの消し方は？」</strong>「予定が出ないのはなぜ？」）。
            操作は<strong>［📋 メニュー］</strong>から。<strong>「使い方を教えて」</strong>と送ると、メニューとコマンドの一覧が出ます。
            案件を深掘りしたいときは <code>/coach</code> でコーチングも受けられます。
          </p>
        </div>
        <p class="p-guide__caption" style="margin-top: calc(24 * var(--u));">慣れてきたら、よく使うひとこと（TIPS）でも同じ画面を開けます（マニュアル12章）。</p>
      </section>

      <!-- ③ 毎朝のブリーフィングで進める -->
      <section id="briefing" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">3</span>毎朝のブリーフィングで進める</h2>
        <p class="p-guide__section-lead">
          毎朝9時に、今日やることが DM に届きます。夕方5時には一日の振り返り、月曜の朝には先週のまとめ・今週のスタートが届きます。届いたカードのボタン（［✅ 完了］［これにする］など）を押せば、そのまま次の一手に進めます。
        </p>
      </section>

      <!-- 言葉の役割 -->
      <section id="glossary" class="p-guide__section">
        <h2 class="p-guide__section-ttl" style="gap: calc(12 * var(--u));"><span>🗺️</span> 言葉の役割</h2>
        <p class="p-guide__section-lead">メモ・予定・ステージ・次の一手・クローズ予定——役割をはっきり分けています。迷ったらここへ。</p>

        <div class="c-doc-table-wrap" style="margin-top: calc(40 * var(--u));">
          <table class="c-doc-table">
            <thead>
              <tr><th>言葉</th><th>何を表すか</th><th>いつのこと</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight:700; white-space:nowrap;">活動メモ</td>
                <td>お客様とのやり取りの<strong>記録</strong>（「〇〇社と打ち合わせ」）</td>
                <td style="color: var(--color-gray-text); white-space:nowrap;">過去</td>
              </tr>
              <tr>
                <td style="font-weight:700; white-space:nowrap;">予定</td>
                <td>「〇〇する<strong>予定</strong>」という先の約束</td>
                <td style="color: var(--color-gray-text); white-space:nowrap;">未来</td>
              </tr>
              <tr>
                <td style="font-weight:700; white-space:nowrap;">状況（ステージ）</td>
                <td>ディールの<strong>進み具合</strong>（アプローチ中→進行中→停滞中→受注／失注）</td>
                <td style="color: var(--color-gray-text); white-space:nowrap;">今</td>
              </tr>
              <tr>
                <td style="font-weight:700; white-space:nowrap;">次の一手</td>
                <td>そのディールで<strong>次にやること</strong>（1行＋任意の期日）</td>
                <td style="color: var(--color-gray-text); white-space:nowrap;">直近</td>
              </tr>
              <tr>
                <td style="font-weight:700; white-space:nowrap;">今やること</td>
                <td><strong>次の一手</strong>のうち、期日が近いものや未設定のものを並べた<strong>一覧</strong></td>
                <td style="color: var(--color-gray-text); white-space:nowrap;">今</td>
              </tr>
              <tr>
                <td style="font-weight:700; white-space:nowrap;">クローズ予定</td>
                <td><strong>受注しそうな日</strong>（売上の見通し用）</td>
                <td style="color: var(--color-gray-text); white-space:nowrap;">見込み</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-guide__cards" style="margin-top: calc(28 * var(--u));">
          <div class="c-info"><span class="c-info__icon">📋</span><p>細かいやることはメモに書けばクラゲが拾います。「今やること」で、期日の近い順に理由つきで並びます。</p></div>
          <div class="c-info"><span class="c-info__icon">📅</span><p><strong>日付は2種類あります</strong>：「<strong>次の一手の期日</strong>」は、次の一手をいつやるか。「<strong>クローズ予定日</strong>」は、いつ受注しそうか（売上の見通しに使います）。</p></div>
          <div class="c-info"><span class="c-info__icon">👤</span><p><strong>個人のお客様</strong>：個人のお客様は会社なしで登録でき、「個人のお客様」と表示されます。検索は人・会社を横断するので迷子になりません。</p></div>
          <div class="c-info"><span class="c-info__icon">🔁</span><p><strong>勝手に動かしません</strong>：動きの止まったディールは「停滞にしますか？」と確認します。ステージをクラゲが勝手に変えることはありません。</p></div>
        </div>
      </section>

      <!-- クイックスタート：最初の1週間 -->
      <section id="first-week" class="p-guide__section">
        <div class="c-card--accent">
          <div class="c-step">
            <img :src="KURAGE_ICON" alt="クラゲくん" style="width: calc(50 * var(--u)); flex-shrink:0;" />
            <div>
              <p class="p-guide__cmd-group-label">クイックスタート</p>
              <p class="c-step__ttl" style="font-size: calc(32 * var(--u));">最初の 1 週間でやってみること</p>
            </div>
          </div>
          <p class="c-step__text" style="margin-top: calc(24 * var(--u));">
            クラゲディールの真価は、毎日少しずつ Slack に記録することで現れます。<br />
            まず 1 週間、下の流れに沿って試してみてください。<strong>すべてボタンで進められます</strong>（迷ったら DM で「メニュー」と打つだけ）。
          </p>
          <p class="p-guide__note-strip" style="margin-top: calc(24 * var(--u));">
            🔰 はじめての方は、先に <a href="#setup">① インストール</a> と <a href="#modes">② ボタンの使い方</a> に目を通すとスムーズです。慣れてきたら「よく使うひとこと」のショートカットも試してみてください。
          </p>

          <div>
            <div v-for="day in firstWeekPlan" :key="day.label" class="p-guide__day">
              <p class="p-guide__day-label">{{ day.label }} — {{ day.theme }}</p>
              <ul class="c-check-list">
                <li v-for="(task, i) in day.tasks" :key="i">{{ task }}</li>
              </ul>
            </div>
          </div>

          <p class="p-guide__quickstart-note">
            ※ 全部やる必要はありません。気になったところからどうぞ。<br />
            ※ うまくいかない時は、このページ右下のクラゲくんに、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <!-- 便利な機能とコマンド（リファレンス） -->
      <div class="p-guide__divider">
        <h2 class="p-guide__divider-ttl">便利な機能とコマンド</h2>
        <p class="p-guide__divider-lead">ここからはマニュアルです。コマンド・自動機能・設定・メール連携機能などは、いつでもお使いいただけます。</p>
      </div>

      <!-- スラッシュコマンド -->
      <section class="p-guide__section" style="margin-top: calc(60 * var(--u));">
        <p class="p-guide__sub-ttl">⌨️ スラッシュコマンド</p>
        <div class="c-info--accent" style="margin-bottom: calc(28 * var(--u));">
          <p>コマンドは、Slack の<strong>チャット入力欄（メッセージを打つところ）</strong>に <code>/coach</code> のように入力して<strong>送信</strong>すると実行されます。<code>/</code> を打つと候補が出るので、選んでもOKです。</p>
        </div>
        <div class="p-guide__cards">
          <div v-for="g in commandGroups" :key="g.group" class="c-card">
            <p class="p-guide__cmd-group-label">{{ g.group }}</p>
            <div class="p-guide__cmd-group">
              <div v-for="cmd in g.cmds" :key="cmd.cmd" class="p-guide__cmd-row">
                <code class="p-guide__cmd-code">{{ cmd.cmd }}</code>
                <div>
                  <p class="p-guide__cmd-ttl" style="font-size: calc(23 * var(--u));">{{ cmd.title }}</p>
                  <p class="p-guide__cmd-desc">{{ cmd.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- /setting でできること -->
      <section class="p-guide__section">
        <p class="p-guide__sub-ttl">⚙️ <code style="font-size: calc(28 * var(--u));">/setting</code> でできること</p>
        <p class="p-guide__sub-lead">Slackで <code>/setting</code> をチャット入力欄に入力して送信すると、設定メニューが開きます。おもな項目：</p>
        <div class="p-guide__feature-grid">
          <div class="c-card p-guide__feature-card"><span class="p-guide__feature-icon">🧭</span><p class="c-step__text" style="margin-top:0;"><strong>よく使うひとこと</strong> — 「メニュー」「今やること」など、ボタンと同じ画面を開くショートカットの一覧。</p></div>
          <div class="c-card p-guide__feature-card"><span class="p-guide__feature-icon">📧</span><p class="c-step__text" style="margin-top:0;"><strong>AI返信支援</strong> — 顧客メールの返信下書きの ON / OFF。</p></div>
          <div class="c-card p-guide__feature-card"><span class="p-guide__feature-icon">📋</span><p class="c-step__text" style="margin-top:0;"><strong>営業方針</strong> — クラゲの提案トーンを指定（例：「押し売りしない・課題解決型」）。</p></div>
          <div class="c-card p-guide__feature-card"><span class="p-guide__feature-icon">✉️</span><p class="c-step__text" style="margin-top:0;"><strong>送信元メールアドレス</strong> — 返信を送るときに使う、あなたのアドレス。</p></div>
          <div class="c-card p-guide__feature-card"><span class="p-guide__feature-icon">📨</span><p class="c-step__text" style="margin-top:0;"><strong>メール連携（顧客メールの取り込み）</strong> — あなた専用の取り込みアドレスが表示されます（<strong>下に詳しい手順</strong>）。</p></div>
          <div class="c-card p-guide__feature-card"><span class="p-guide__feature-icon">🌐</span><p class="c-step__text" style="margin-top:0;"><strong>Webダッシュボード</strong> — 個人ログインキーの発行（下に手順）。</p></div>
          <div class="c-card p-guide__feature-card" style="grid-column: 1 / -1;"><span class="p-guide__feature-icon">🎓</span><p class="c-step__text" style="margin-top:0;"><strong>サンプルデータ</strong> — はじめは<strong>サンプルデータが入った状態</strong>で、一覧・ディール確度・次の一手を<strong>すぐ体験</strong>できます。準備ができたら<strong>「🧹 サンプルを削除」</strong>で片づけてください。ご自身のデータを登録すると、サンプルは自動で片づきます。削除したサンプルは元に戻せません。</p></div>
        </div>
      </section>

      <!-- AIが自動でやること -->
      <section class="p-guide__section">
        <p class="p-guide__sub-ttl">🤖 AI が自動でやること</p>
        <p class="p-guide__sub-lead">あなたは書くだけ。詳しくは <a href="/ai-support">クラゲくんのAIサポート</a> をご覧ください。</p>
        <div class="p-guide__feature-grid">
          <div v-for="auto in autoFeatures" :key="auto.title" class="c-card">
            <p class="p-guide__feature-icon">{{ auto.icon }}</p>
            <p class="p-guide__feature-ttl" style="margin-top: calc(10 * var(--u));">{{ auto.title }}</p>
            <p class="p-guide__feature-desc">{{ auto.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Webダッシュボード -->
      <section class="p-guide__section">
        <p class="p-guide__sub-ttl">🌐 Web ダッシュボードにログインする</p>
        <p class="p-guide__sub-lead">Slackの会話が自動でCRMに蓄積されます。全体を俯瞰したい時は Web ダッシュボードをご利用ください。次の3ステップでログインできます。</p>
        <div class="p-guide__cards">
          <div class="c-card c-step">
            <span class="c-step__num">1</span>
            <p class="c-step__text" style="margin-top: calc(10 * var(--u));">Slackで <code>/setting</code> を開き、<strong>「🔑 発行する」ボタン</strong>を押すと、<strong>ログインキー</strong>がメッセージで届きます。</p>
          </div>
          <div class="c-card c-step">
            <span class="c-step__num">2</span>
            <p class="c-step__text" style="margin-top: calc(10 * var(--u));">届いたキーをコピーして、<strong>ダッシュボードのログイン画面に貼り付け</strong>ます。</p>
          </div>
          <div class="c-card c-step">
            <span class="c-step__num">3</span>
            <p class="c-step__text" style="margin-top: calc(10 * var(--u));">一度ログインすると、<strong>次回からは自動でサインイン</strong>されます。</p>
          </div>
        </div>
      </section>

      <!-- メール連携 -->
      <section class="p-guide__section">
        <p class="p-guide__sub-ttl">📨 顧客メールを取り込む（メール連携）</p>
        <p class="p-guide__sub-lead">顧客とのメールを<strong>転送するだけ</strong>で、クラゲが内容を読んで<strong>活動メモ・ディール確度に反映</strong>し、<strong>返信の下書き</strong>を Slack に届けます。やることは次の3つです。</p>
        <div class="p-guide__cards">
          <div class="c-card c-step">
            <span class="c-step__num">1</span>
            <p class="c-step__text" style="margin-top: calc(10 * var(--u));"><strong>取り込みアドレスをコピー</strong><br />Slackで <code>/setting</code> を開き、<strong>「📨 メール連携」セクション</strong>へ。表示される<strong>あなた専用のアドレス</strong>（<code>u…@kuragedeal.ai</code>）をコピーします。<br /><span style="color: var(--color-gray-text);">※ このアドレスはあなた専用です。他の人と共有しないでください。</span></p>
          </div>
          <div class="c-card c-step">
            <span class="c-step__num">2</span>
            <p class="c-step__text" style="margin-top: calc(10 * var(--u));"><strong>顧客メールを転送</strong><br /><strong>方法①：手動で転送（かんたん）</strong> — 取り込みたいメールを「転送」で上のアドレスへ送るだけ。<br /><strong>方法②：特定の顧客を自動で取り込む</strong> — Gmail の「メール転送と POP/IMAP」で<strong>転送先に上のアドレスを追加</strong> → クラゲから届く<strong>確認リンクをクリック</strong>して有効化 → <strong>フィルタ</strong>で「その顧客 → 転送」に設定。<br /><span style="color: var(--color-gray-text);">※「受信メールを“すべて”転送」は選ばないでください（顧客以外のメールも入ってしまいます）。</span></p>
          </div>
          <div class="c-card c-step">
            <span class="c-step__num">3</span>
            <p class="c-step__text" style="margin-top: calc(10 * var(--u));"><strong>Slack で返信を承認</strong><br />クラゲが <strong>返信の下書き</strong>を Slack の DM に届けます。<strong>「このまま送信／修正して送信／送らない／自分で対応」</strong>から選ぶだけ。承認すると、あなたの<strong>送信元アドレスから</strong>返信が送られます。</p>
          </div>
        </div>
        <div class="c-info--accent" style="margin-top: calc(28 * var(--u)); font-size: calc(22 * var(--u));">
          <p><strong>事前に1つだけ：</strong> 送信元のメールアドレスは、管理者が <code>/setting</code> の「送信元メール」で設定します。<br /><strong>中身の無いメールには返信案を作りません：</strong> テスト送信や自動通知など実質的な問い合わせが無いメールは、返信の下書きは作りません（活動メモには記録されます）。</p>
        </div>
      </section>

      <!-- プライバシー・データの扱い -->
      <section class="p-guide__section">
        <p class="p-guide__sub-ttl">🔒 プライバシーとデータの扱い</p>
        <div class="c-card">
          <p class="c-step__text" style="margin-top:0;">クラゲディールは <strong>DM（クラゲディール App との個別チャット）</strong>で使う、<strong>あなただけのプライベート</strong>な営業アシスタントです。入力もクラゲの回答も<strong>他の人には見えません</strong>。データも担当者ごとに分離されています。</p>
          <p class="c-step__text">クラゲディールとの<strong>1対1のDM</strong>で使います。チャンネルや、<strong>3人以上のグループDM</strong>では使えません（クラゲは返事をしません）。チャンネルに書いたことは、<strong>そのチャンネルの全員に見えます</strong>。</p>
        </div>
      </section>

      <!-- Footer CTA -->
      <div class="c-info--accent p-guide__footer-note" style="display:block;">
        <p>わからないことは、<strong>画面右下のクラゲくん</strong>に聞いてください。使い方をその場でお答えします🪼</p>
      </div>

    </div>
  </LpFrame>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（option A・2ページ目）。
// 枠（ヘッダー／ナビ／フッター）と base.css/common.css は LpFrame 側が読み込む。
// ここではこのページ専有セクション用の guide.css だけを読み込む。
import '~/assets/css/lp/guide.css'

usePageSeo({
  path: '/guide',
  title: '使い方ガイド | クラゲディール',
  description:
    'クラゲディールの使い方ガイド。インストールから、ボタンの使い方、よく使うひとこと、最初の1週間の進め方、コマンドやメール連携まで、順番にわかりやすく紹介します。',
})

const route = useRoute()
const installed = computed(() => route.query.installed === '1')

const commandGroups = [
  { group: '情報を見る（一覧）', cmds: [
    { cmd: '/deal', title: 'ディール一覧・検索', desc: 'ディールの一覧と検索。進み具合の見立てと、次の一手のおすすめも出ます。' },
    { cmd: '/contact', title: '顧客一覧', desc: '登録済みの顧客をSlack上で確認できます。' },
    { cmd: '/account', title: '会社一覧', desc: '登録済みの会社（取引先）を確認できます。' },
  ]},
  { group: 'AI・確認', cmds: [
    { cmd: '/coach', title: 'AIコーチング', desc: 'AIがディールの進め方をヒアリング形式でコーチングします。' },
    { cmd: '/usage', title: 'AI利用状況', desc: '今月の AI の利用状況とプランを確認できます。' },
  ]},
  { group: '設定・その他', cmds: [
    { cmd: '/setting', title: '設定', desc: 'AI返信支援・営業ポリシー・ログインキー発行・サンプルデータなどの設定メニュー。' },
    { cmd: '/kurage', title: 'フィードバック投稿', desc: '使ってみて感じたことを開発チームへ直接送れます。例: `/kurage 朝のブリーフィングが長く感じる`' },
  ]},
]

const autoFeatures = [
  { icon: '🧠', title: 'ディール確度の自動更新', desc: 'メモするたびに、AIが営業の型（MEDDPICC）に沿ってディール確度を計算し直します。' },
  { icon: '⚠️', title: '停滞検知', desc: '14日うごきのない案件は確度がそっと下がり、長期停滞も自動で通知。見落としに気づけます。' },
  { icon: '🎓', title: 'AIコーチング', desc: '「ABC商事はどう？」や /coach で、MEDDPICCに沿ってクラゲがやさしく問いかけます。' },
  { icon: '✉️', title: 'メール返信の代筆', desc: '顧客からの返信に下書きを用意。Slackでボタンを押すと、あなた本人のアドレスから送信されます。' },
  { icon: '📨', title: 'メール連携', desc: '顧客メールを転送すると、内容を読んで活動メモ・ディール確度に反映し、返信下書きまで届けます。' },
  { icon: '📊', title: 'パイプライン分析', desc: 'Webダッシュボードで、チーム全体の状況をいつでも俯瞰できます。' },
]

// 最初の1週間はボタン中心のパス。Day1 はサンプル（見本）でクラゲの動きを体験 → Day2 以降で自分のデータを入れる流れ。
const firstWeekPlan = [
  {
    label: 'Day 1（インストール当日）',
    theme: '最初から入っているサンプルデータで動きを体験',
    tasks: [
      'サイドバーの「クラゲディール」を開く',
      '最初から入っているサンプルデータで「📋 状況を見る」を押し、顧客・会社・ディールの一覧を眺める',
      '「🎯 今やること」を押して、ディール確度やおすすめの出かたを体験する',
    ],
  },
  {
    label: 'Day 2-3',
    theme: '自分のデータを入れてみる',
    tasks: [
      'メニュー →「👤 顧客を登録」で、自分の顧客を 1 件登録',
      'メニュー →「📊 ディールを登録」で、その顧客の案件を 1 件つくる',
      'メニュー →「📝 活動をメモ」でその案件にメモ → AI が案件のディール確度に反映するのを見る',
    ],
  },
  {
    label: 'Day 4-5',
    theme: 'AI コーチングと朝夕ブリーフィング',
    tasks: [
      '`/coach` で AI コーチングを体験',
      '朝 9:00「今日のフォーカス」／夕 17:00 の振り返り通知を受け取る',
      '`/setting` でログインキーを発行 → Web ダッシュボードにログイン',
    ],
  },
  {
    label: 'Day 6-7',
    theme: 'サンプルを片づけて、チームに広げる',
    tasks: [
      'メニュー →「📋 状況を見る」で、いまの顧客・会社・ディールの状況を見渡す',
      '`/setting` →「🧹 サンプルを削除」で片づけて、自分のデータの記録を本格的に始める（削除したサンプルは元に戻せません）',
      '同僚を 1 人さそう：その人が Slack で「クラゲ」を検索して「クラゲディール」を開くだけ（個別インストールは不要。開いた人それぞれに専用の DM ができます）',
    ],
  },
]
</script>
