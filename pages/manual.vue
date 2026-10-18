<template>
  <LpFrame main-id="manual">
    <div class="p-guide">

      <!-- Header -->
      <div class="p-guide__head">
        <img src="/kurage-on-white.png" alt="クラゲディール" class="p-guide__head-icon" />
        <h1 class="p-guide__head-ttl">クラゲディール マニュアル</h1>
        <p class="p-guide__head-lead">
          クラゲディールの機能を、章ごとに引けるようにまとめたマニュアルです。<br />
          操作はすべてボタンで進められます。よく使う操作は、決まったひとこと（公式フレーズ）を打つだけでも呼び出せるので、各章に TIPS として添えています。初めての方は
          <NuxtLink to="/guide"><strong>「使い方ガイド」</strong></NuxtLink>
          からどうぞ。
        </p>
      </div>

      <!-- 目次 -->
      <nav class="c-card" style="margin: calc(60 * var(--u)) 0;">
        <p class="p-guide__toc-label">目次</p>
        <ol class="p-guide__toc-list">
          <li><a href="#ch1"><span class="p-guide__toc-num">1</span>はじめに</a></li>
          <li><a href="#ch2"><span class="p-guide__toc-num">2</span>言葉の役割</a></li>
          <li><a href="#ch3"><span class="p-guide__toc-num">3</span>顧客と会社</a></li>
          <li><a href="#ch4"><span class="p-guide__toc-num">4</span>ディール</a></li>
          <li><a href="#ch5"><span class="p-guide__toc-num">5</span>メモ・予定・やること</a></li>
          <li><a href="#ch6"><span class="p-guide__toc-num">6</span>毎日の使い方</a></li>
          <li><a href="#ch7"><span class="p-guide__toc-num">7</span>コーチング</a></li>
          <li><a href="#ch8"><span class="p-guide__toc-num">8</span>メール</a></li>
          <li><a href="#ch9"><span class="p-guide__toc-num">9</span>Webダッシュボードと取り込み</a></li>
          <li><a href="#ch10"><span class="p-guide__toc-num">10</span>チームと権限</a></li>
          <li><a href="#ch11"><span class="p-guide__toc-num">11</span>設定と契約</a></li>
          <li><a href="#ch12"><span class="p-guide__toc-num">12</span>困ったときと公式フレーズ一覧</a></li>
        </ol>
      </nav>

      <!-- 1. はじめに -->
      <section id="ch1" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">1</span>はじめに</h2>
        <p class="p-guide__section-lead">クラゲディールは、Slack の DM でボタンを押していくだけで使える営業のアシスタントです。別の画面でたくさんの項目を入力する必要はありません。</p>

        <div class="p-guide__cards">
          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">インストール</p>
            <ol class="p-guide__list p-guide__list--num">
              <li>このサイトの［14日間無料で試す］から、Slack の確認画面を開きます。</li>
              <li>［許可する］を押すと完了です。ワークスペースへの追加は、管理者が1回行えば十分です。メンバーが個別にインストールする必要はありません。</li>
              <li>追加した日から14日間は無料ですべての機能を使えます（クレジットカードは不要）。</li>
            </ol>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">DM を開く</p>
            <ul class="p-guide__list">
              <li>左のサイドバーの「アプリ」にクラゲディールがあれば、クリックすると DM が開きます。</li>
              <li>見当たらないときは、Slack 上部の検索（Cmd / Ctrl + K）で「クラゲ」と入力して選んでください。</li>
              <li>同僚も「クラゲ」で検索して開けば、その人専用の DM ができます。プランの人数の範囲内ならすぐに使えて、管理者に通知が届きます。人数を超える人は、管理者が許可すると使えるようになります（<a href="#ch10">10章</a>）。無料期間中は人数に関係なく、誰でもすぐに使えます。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">ボタンで進める</p>
            <ul class="p-guide__list">
              <li>［📋 メニュー］を押すと、やりたいことがボタンで並びます。ボタンを押していけば、名前やメモの内容など必要なところだけ入力して完了します。何をすればよいか、迷いません。</li>
              <li><strong>TIPS（公式フレーズ）：</strong> 「メニュー」「今やること」「メモ一覧」など、決まったひとことを打つと、ボタンと同じ画面が開きます。慣れてきたら便利な近道です（<a href="#ch12">12章</a>に一覧）。</li>
              <li>メニューの下には、日替わりで公式フレーズをひとつ紹介しています。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">見本データ</p>
            <ul class="p-guide__list">
              <li>はじめは「【サンプル】」付きの見本データが入っているので、一覧や「今やること」をすぐに試せます。</li>
              <li>一通り試したら <code>/setting</code> の［🧹 サンプルを削除］で片づけ、ご自身のデータを入れていきます。ご自身のデータを登録すると、見本は自動で片づきます。見本とご自身のデータが同じ画面に混ざることはありません。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">はじめかた（使い始めの14日間）</p>
            <p class="c-step__text" style="margin-top:0;">使い始めの14日間は、毎朝のブリーフィングの冒頭に「はじめかた」が届きます。不要になったら［今後このお知らせを表示しない］を押してください（<code>/setting</code> で戻せます）。</p>
          </div>
        </div>
      </section>

      <!-- 2. 言葉の役割 -->
      <section id="ch2" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">2</span>言葉の役割</h2>
        <p class="p-guide__section-lead">クラゲディールで使う言葉は、役割をはっきり分けています。</p>

        <div class="c-doc-table-wrap" style="margin-top: calc(40 * var(--u));">
          <table class="c-doc-table">
            <thead><tr><th>言葉</th><th>何を表すか</th></tr></thead>
            <tbody>
              <tr><td style="font-weight:700; white-space:nowrap;">顧客</td><td>お客様（人）。会社に所属していない個人のお客様も登録できます</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">会社</td><td>取引先の会社や団体</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">ディール</td><td>受注を目指す案件。1つの会社、1人の顧客に、いくつでも持てます</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">メモ（活動メモ）</td><td>お客様とのやり取りの記録（打ち合わせ・訪問・電話・メールなど）</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">予定</td><td>「〇月〇日に〇〇する」という先の約束。朝のブリーフィングでお知らせします</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">次の一手</td><td>そのディールで、次にやること。あなたが決める「案件の旗」（1ディールに1つ）</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">クラゲくんのおすすめ</td><td>次の一手がまだないときにクラゲくんが出す「候補」。［これにする］で旗になります</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">メモから拾ったやること</td><td>メモに書いた「〜する」をクラゲくんが拾った「付箋」（いくつでも）</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">今やること</td><td>旗（次の一手）と付箋（やること）のうち、今取りかかるものを並べた一覧</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">ステージ（状況）</td><td>ディールの進み具合（<a href="#ch4">4章</a>に一覧）</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">ディール確度</td><td>受注できそうな度合い。メモややり取りからクラゲくんが自動で見立てます</td></tr>
              <tr><td style="font-weight:700; white-space:nowrap;">クローズ予定</td><td>受注しそうな日（売上の見通し用）。次の一手の期日とは別物です</td></tr>
            </tbody>
          </table>
        </div>

        <div class="c-card" style="margin-top: calc(40 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">「旗」と「付箋」：やることの3つの形</p>
          <p class="c-step__text" style="margin-top:0; margin-bottom: calc(24 * var(--u));">やることを一つずつ入力する必要はありません。やることは、次の3つの形で自然にたまっていきます。</p>
          <div class="c-doc-table-wrap" style="overflow-x:auto;">
            <table class="c-doc-table" style="min-width: 640px;">
              <thead>
                <tr><th></th><th>次の一手</th><th>クラゲくんのおすすめ</th><th>メモから拾ったやること</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-weight:700; white-space:nowrap;">ひとことで</td>
                  <td>案件の「旗」</td><td>旗がないときの「候補」</td><td>メモから拾った「付箋」</td>
                </tr>
                <tr>
                  <td style="font-weight:700; white-space:nowrap;">例</td>
                  <td>決裁者との打ち合わせを設定する</td><td>決裁者（キーマン）を特定する</td><td>見積もりを出す（来週まで）</td>
                </tr>
                <tr>
                  <td style="font-weight:700; white-space:nowrap;">誰が決める</td>
                  <td>あなた</td><td>クラゲくんが提案し、あなたが［これにする］で旗に</td><td>クラゲくんが拾う</td>
                </tr>
                <tr>
                  <td style="font-weight:700; white-space:nowrap;">数</td>
                  <td>1ディールに1つ</td><td>1つ</td><td>いくつでも</td>
                </tr>
                <tr>
                  <td style="font-weight:700; white-space:nowrap;">終わったら</td>
                  <td>［✅ 完了］</td><td>―</td><td>［✅ 済んだ］</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 3. 顧客と会社 -->
      <section id="ch3" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">3</span>顧客と会社</h2>

        <div class="c-doc-table-wrap" style="margin-top: calc(40 * var(--u));">
          <table class="c-doc-table">
            <thead><tr><th>やりたいこと</th><th>ボタン</th><th>TIPS（公式フレーズ）</th></tr></thead>
            <tbody>
              <tr><td style="font-weight:700;">顧客を登録</td><td>［👤 顧客を登録］</td><td style="color: var(--color-gray-text);">―</td></tr>
              <tr><td style="font-weight:700;">詳しく見る</td><td>一覧から選ぶ</td><td style="color: var(--color-gray-text);">「〇〇さんを教えて」「株式会社〇〇を教えて」</td></tr>
              <tr><td style="font-weight:700;">一覧を見る</td><td>［👤 顧客一覧］［🏢 会社一覧］</td><td style="color: var(--color-gray-text);">―</td></tr>
              <tr><td style="font-weight:700;">メール・電話・役職などを変える</td><td>詳細の［✏️ 編集］</td><td style="color: var(--color-gray-text);">―</td></tr>
              <tr><td style="font-weight:700;">削除する</td><td>Web の一覧の［🗑］</td><td style="color: var(--color-gray-text);">―</td></tr>
            </tbody>
          </table>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <ul class="p-guide__list">
            <li><strong>個人のお客様：</strong> 会社なしで登録でき、画面では「個人のお客様」と表示されます。</li>
            <li><strong>同じ名前の人：</strong> 候補には会社名などの手がかりが添えられます。</li>
            <li><strong>重複の確認：</strong> 同じ会社・同じ名前、または同じメールアドレスの人を登録しようとすると確認が出ます。照合するのは自分の担当のお客様だけです。</li>
            <li><strong>削除：</strong> 顧客とディールは担当者か管理者が、会社は管理者だけが削除できます（会社を消すと、配下の顧客・ディール・メモも消えます）。削除は元に戻せません。前に確認が出ます。</li>
            <li>重複を「まとめる（統合）」機能はありません。片方を削除して整理してください。</li>
          </ul>
        </div>
      </section>

      <!-- 4. ディール -->
      <section id="ch4" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">4</span>ディール</h2>

        <div class="c-doc-table-wrap" style="margin-top: calc(40 * var(--u));">
          <table class="c-doc-table">
            <thead><tr><th>やりたいこと</th><th>ボタン</th><th>TIPS（公式フレーズ）</th></tr></thead>
            <tbody>
              <tr><td style="font-weight:700;">ディールを作る</td><td>［📊 ディールを登録］（ディール名とステージを選べる。名前を省くと「〇〇の案件」）</td><td style="color: var(--color-gray-text);">―</td></tr>
              <tr><td style="font-weight:700;">受注・失注にする</td><td>［📊 ディール一覧］→ 詳細 →［ステージを変える］</td><td style="color: var(--color-gray-text);">「〇〇を受注に」「〇〇を失注に」</td></tr>
              <tr><td style="font-weight:700;">そのほかのステージにする</td><td>［📊 ディール一覧］→ 詳細 →［ステージを変える］</td><td style="color: var(--color-gray-text);">「ステージを変えたい」</td></tr>
              <tr><td style="font-weight:700;">一覧を見る</td><td>［📊 ディール一覧］</td><td style="color: var(--color-gray-text);">「〇〇のディール一覧」「進行中のディール」「停滞中のディール」</td></tr>
              <tr><td style="font-weight:700;">ディール名を変える</td><td>Web のディール詳細の✏️</td><td style="color: var(--color-gray-text);">―</td></tr>
            </tbody>
          </table>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(16 * var(--u));">ステージ（状況）</p>
          <div class="c-doc-table-wrap" style="margin-bottom: calc(20 * var(--u));">
            <table class="c-doc-table">
              <thead><tr><th>ステージ</th><th>意味</th></tr></thead>
              <tbody>
                <tr><td style="font-weight:700; white-space:nowrap;">⏸️ 待機</td><td>まだ動き出していない案件。次の一手を決めると「アプローチ中」になります</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">🌱 アプローチ中</td><td>お客様と接点を作っている段階</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">🔥 進行中</td><td>提案や見積もりなど、話が動いている段階</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">💤 停滞中</td><td>しばらく動きが止まっている案件。クラゲくんが「停滞にしますか？」と確認してから変わります</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">✅ 受注</td><td>契約が決まった</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">❌ 失注</td><td>見送りになった</td></tr>
              </tbody>
            </table>
          </div>
          <p class="c-step__text" style="margin-top:0;">「今やること」や朝のブリーフィングに出るのは、アプローチ中・進行中・停滞中のディールです。</p>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <ul class="p-guide__list">
            <li><strong>ディール確度：</strong> メモややり取りの内容をもとに、営業の型（MEDDPICC：決裁者・予算の根拠・競合など）でクラゲくんが自動で見立てます。最後の活動から日がたつほど、少しずつ下がります。</li>
            <li>ステージをクラゲくんが勝手に変えることはありません。動きの止まったディールは「停滞にしますか？」と確認します。</li>
          </ul>
        </div>
      </section>

      <!-- 5. メモ・予定・やること -->
      <section id="ch5" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">5</span>メモ・予定・やること</h2>

        <div class="p-guide__cards" style="margin-top: calc(40 * var(--u));">
          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">メモ（活動の記録）</p>
            <ul class="p-guide__list">
              <li>［📝 活動をメモ］→ 顧客を選ぶ → 種類（🤝 打ち合わせ／🏢 訪問／📞 電話／📧 メール／📝 メモ）→ 内容を入力。内容は「予算は500万くらい。来週までに見積もりを出す」のように、ふつうに書けば大丈夫です。</li>
              <li>ディール詳細・顧客詳細の［📝 メモする］から書くと、そのディール・顧客に紐付いたメモになります。</li>
              <li><strong>見返す：</strong> ［📝 メモ一覧］。自分が書いたメモが10件ずつ出ます。TIPS：「メモ一覧」「最近のメモ」「先週の活動を見せて」（今週・今月・先月も可）「〇〇さんのメモ見せて」。</li>
              <li><strong>消す：</strong> メモ一覧の［🗑 削除］。消せるのは自分が書いたメモです。AI がまとめたメモや、取り込んだメールから作られたメモは消せません。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">予定</p>
            <ul class="p-guide__list">
              <li>ディール詳細・顧客詳細の［📅 予定を追加］、または「次の一手」を表示したときの［📅 予定を入れる］から入れます。</li>
              <li>メモの内容に「来週火曜にMTG予定」のように先のことを書いた場合も、予定として記録されます。</li>
              <li>予定は朝のブリーフィングでお知らせします。一覧は［📅 予定一覧］（TIPS：「予定一覧」）。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">メモから拾うやること</p>
            <ul class="p-guide__list">
              <li>メモを保存すると、クラゲくんが「あなたがこれからやること」を拾います（1〜2分後。例：「見積もりを出す（来週まで）」）。</li>
              <li>拾わないもの：相手がやること（「先方が検討する」「発注書をもらえる」）、もう済んだこと、感想、曖昧なもの。</li>
              <li>拾ったやることは「今やること」の最後と、顧客・ディールの詳細に並びます。</li>
              <li>済んだら［✅ 済んだ］。押し間違えたら［↩ 取り消す］。押せるのはメモを書いた本人だけです。</li>
              <li>メモを消すと、そのメモから拾ったやることも消えます。</li>
              <li>画像やファイルはまだ読めません。内容を文章で送ってください。</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 6. 毎日の使い方 -->
      <section id="ch6" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">6</span>毎日の使い方</h2>

        <div class="p-guide__cards" style="margin-top: calc(40 * var(--u));">
          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">朝のブリーフィング（毎朝9時・DM）</p>
            <ul class="p-guide__list">
              <li>進行中のディールの合計金額と、月の目標に対する割合</li>
              <li>クローズ間近（ディール確度70%以上）</li>
              <li>要アクション（ディール確度50%未満）と、それぞれの次の一手のおすすめ</li>
              <li>損切り候補：長く動きのないディール（活動がないものは作成日から数えます）。［継続］か［このディールを失注に］を選べます</li>
              <li>使い始めの14日間は、冒頭に「はじめかた」</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">今やること</p>
            <p class="c-step__text" style="margin-top:0; margin-bottom: calc(18 * var(--u));">［🎯 今やること］（TIPS：「今やること」）で、自分が担当する進行中のディールを次の順に並べます（各区分最大5件）。</p>
            <ol class="p-guide__list p-guide__list--num" style="margin-bottom: calc(18 * var(--u));">
              <li>次の一手の期日を過ぎたもの</li>
              <li>期日が今日・明日のもの</li>
              <li>次の一手はあるが期日がないもの（確度×金額の大きい順）</li>
              <li>次の一手がまだないもの（クラゲくんのおすすめ付き。［これにする］か［✍️ 自分で書く］）</li>
              <li>📝 メモから拾ったやること（相手の名前と期日付き）</li>
            </ol>
            <p class="c-step__text" style="margin-top:0;">期日が明後日以降の次の一手は、ここには出ません（時期が来たら出ます）。</p>
          </div>
        </div>
      </section>

      <!-- 7. コーチング -->
      <section id="ch7" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">7</span>コーチング</h2>

        <div class="c-card" style="margin-top: calc(40 * var(--u));">
          <ul class="p-guide__list">
            <li>ディール詳細や「今やること」から、そのディールの次の一手と、動かすためのヒントを開けます（TIPS：「〇〇の次の一手」）。カードから［📅 予定を入れる］［📝 メモする］［📋 詳しく見る（全体評価）］［完了］を選べます。</li>
            <li>「詳しく見る」では、MEDDPICC の要素ごとの状況と、クラゲくんからの問いかけ（「決裁者と会えていますか？」など）が出ます。</li>
            <li><code>/coach</code> でも、優先度の高いディールのコーチングを受けられます。</li>
            <li><strong>次の一手を決めるのはあなたです。</strong> クラゲくんはおすすめを出すだけで、［これにする］を押すか［✍️ 自分で書く］で書いて初めて次の一手になります。</li>
          </ul>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">MEDDPICC（メドピック）とは</p>
          <p class="c-step__text" style="margin-top:0; margin-bottom: calc(24 * var(--u));">案件の抜け漏れを防ぐための営業の型です。クラゲくんは、次の8つの視点で案件を見立て、足りないところを問いかけます。</p>
          <div class="c-doc-table-wrap" style="margin-bottom: calc(24 * var(--u));">
            <table class="c-doc-table">
              <thead><tr><th>要素</th><th>見るところ</th></tr></thead>
              <tbody>
                <tr><td style="font-weight:700; white-space:nowrap;">Metrics（指標）</td><td>導入でどんな効果が数字で出るか</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">Economic Buyer（決裁者）</td><td>最終的にお金を出すと決める人に会えているか</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">Decision Criteria（選定基準）</td><td>何を基準に選ぶのか</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">Decision Process（購買プロセス）</td><td>どんな順番・日程で決まるのか</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">Paper Process（社内手続き）</td><td>稟議や契約の手続きに何が必要か</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">Identify Pain（課題）</td><td>お客様が本当に困っていることは何か</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">Champion（社内推進者）</td><td>お客様の社内で推してくれる人がいるか</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">Competition（競合）</td><td>ほかに検討されている選択肢は何か</td></tr>
              </tbody>
            </table>
          </div>
          <p class="c-step__text" style="margin-top:0;">メモにこのあたりのことが書かれているほど、ディール確度の見立ても精度が上がります。</p>
        </div>
      </section>

      <!-- 8. メール -->
      <section id="ch8" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">8</span>メール</h2>

        <div class="p-guide__cards" style="margin-top: calc(40 * var(--u));">
          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">お客様のメールを取り込む</p>
            <ol class="p-guide__list p-guide__list--num">
              <li><code>/setting</code> の「📨 メール連携」で、自分専用の取り込みアドレスをコピーします。</li>
              <li>お客様から届いたメールを、そのアドレスに転送します（Gmail のフィルタで自動転送にもできます）。</li>
              <li>クラゲくんが内容を読んで、活動の記録とディール確度に反映します。</li>
            </ol>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">返信の下書き</p>
            <ul class="p-guide__list">
              <li>取り込んだメールへの返信をクラゲくんが下書きし、Slack に届けます。</li>
              <li>［このまま送信］［修正して送信］［送らない］［自分で対応］から選びます。送信すると、あなたの送信元アドレスからお客様に届きます。</li>
              <li>下書きを送れるのは、そのお客様の担当者と管理者だけです。担当者が決まっていないお客様の下書きは、管理者に届きます。</li>
              <li>送信元のメールアドレスは、管理者が <code>/setting</code> の「送信元メール」で設定します。</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 9. Webダッシュボードと取り込み -->
      <section id="ch9" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">9</span>Webダッシュボードと取り込み</h2>

        <div class="p-guide__cards" style="margin-top: calc(40 * var(--u));">
          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">ログイン</p>
            <p class="c-step__text" style="margin-top:0;">
              <code>/setting</code> の［🔑 発行する］で個人のログインキー（<code>kdu_…</code>）が届きます。ダッシュボードのログイン画面に貼ると、次回からは自動でサインインします。Slack のメニューやホームの［📊 ダッシュボード］からも開けます。
            </p>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">画面</p>
            <ul class="p-guide__list">
              <li><strong>ダッシュボード：</strong> AI 推奨アクション（［詳細→］でディール詳細へ）、最近の活動、月別のディール内訳（直近12か月）、AI メール下書きの状況など。</li>
              <li><strong>顧客・会社・ディールの一覧と詳細：</strong> 編集、削除（🗑）、ディール名の変更（✏️）。ステージの変更は Slack で行います。</li>
              <li><strong>CSV の書き出し（管理者）：</strong> 顧客・ディール・メモを書き出せます。個人のお客様の会社名は空欄になります。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">データの取り込み（管理者）</p>
            <ul class="p-guide__list">
              <li>CSV（Excel で保存したものも可）で、会社・顧客・ディール（Salesforce などから書き出した CSV も使えます）をまとめて取り込めます。画面から見本の CSV をダウンロードできます。</li>
              <li>「担当者メール」の列にメンバーの Slack のプロフィールに登録したメールアドレスを入れると、その人の担当になります。空欄や一致しないときは、取り込んだ管理者の担当になり、結果画面に表示されます。</li>
              <li>取り込む前に「新規 N 件／すでにあるもの M 件」を確認できます。途中でエラーがあれば、取り込みは丸ごと取り消されます。</li>
              <li>1回に取り込めるのは、種類ごとに1,000行までです。</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 10. チームと権限 -->
      <section id="ch10" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">10</span>チームと権限</h2>

        <div class="c-doc-table-wrap" style="margin-top: calc(40 * var(--u));">
          <table class="c-doc-table">
            <thead><tr><th></th><th>メンバー</th><th>管理者（マネージャー）</th></tr></thead>
            <tbody>
              <tr><td style="font-weight:700;">見られる顧客・ディール</td><td>自分が担当のもの</td><td>チーム全員のもの</td></tr>
              <tr><td style="font-weight:700;">見られるメモ</td><td>自分のディールに付いたメモと、自分が書いたメモ</td><td>全員のメモ</td></tr>
              <tr><td style="font-weight:700;">メモから拾ったやること</td><td>自分のもの（済ませられるのは自分のものだけ）</td><td>詳細画面で全員分を見られる（済ませるのは書いた本人）</td></tr>
              <tr><td style="font-weight:700;">設定（送信元メール・営業方針・AIの一時停止）</td><td style="color: var(--color-gray-text);">―</td><td>できる</td></tr>
              <tr><td style="font-weight:700;">契約・解約、CSV の書き出しと取り込み、会社の削除</td><td style="color: var(--color-gray-text);">―</td><td>できる</td></tr>
            </tbody>
          </table>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <ul class="p-guide__list">
            <li><strong>DM はあなただけ：</strong> クラゲくんとの DM のやり取りは、他の人には見えません。</li>
            <li><strong>DM で使う：</strong> クラゲディールとの 1 対 1 の DM で使います。チャンネルや、3 人以上のグループ DM では使えません（クラゲは返事をしません）。チャンネルに書いたことは、そのチャンネルの全員に見えます。</li>
            <li><strong>会社ごとの分離：</strong> データは会社（ワークスペース）ごとに分けて保管され、他の会社からは見えません。お客様の営業データが AI の学習に使われることはありません。</li>
            <li><strong>同僚を誘う：</strong> その人が Slack で「クラゲ」を検索して開きます。プランの人数の範囲内ならすぐに使え、管理者に通知が届きます。人数を超える人は、管理者が許可するまで保留になります（無料期間中は人数に関係なくすぐに使えます）。</li>
          </ul>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">メンバー管理（管理者）</p>
          <p class="c-step__text" style="margin-top:0; margin-bottom: calc(18 * var(--u));">
            <code>/setting</code> の［👥 メンバー管理］か、Web の［👥 メンバー管理］から、チームで使う人を管理できます。
          </p>
          <ul class="p-guide__list">
            <li><strong>一覧：</strong> 名前、役割、状態（利用中／許可待ち／停止中）、最後に使った日を見られます。</li>
            <li><strong>許可する：</strong> 許可待ちの人を使えるようにします。</li>
            <li><strong>利用を止める：</strong> その人はクラゲを使えなくなります。Web ダッシュボードにも入れません。データは残り、その人宛ての通知は管理者に届きます。止めた人は［許可する］でいつでも再開できます。</li>
            <li><strong>管理者にする／メンバーに戻す：</strong> 役割を切り替えます。自分自身と、最後の1人の管理者は止めたりメンバーに戻したりできません。</li>
            <li>許可・停止・役割の変更は、誰がいつ行ったかが記録に残ります。</li>
          </ul>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">新しい人が使い始めたとき</p>
          <ul class="p-guide__list">
            <li>プランの基本人数の範囲内なら、すぐに使えます。管理者には「〇〇さんが使い始めました」と通知が届きます。</li>
            <li>基本人数を超える人は、管理者が許可するまで使えません。本人には「利用には管理者の許可が必要です。依頼を送りました。」と案内が出て、管理者には［許可する］ボタン付きの通知が届きます。許可すると、本人に「ご利用が許可されました！」と届きます。</li>
            <li>追加料金がかかる場合は、［許可する］を押したときに金額の確認が出ます。</li>
            <li>無料期間中は、人数に関係なく誰でもすぐに使えます。基本人数を超えたときは、管理者にお知らせだけが届きます。</li>
            <li>退職した人の担当は、CSV の「担当者メール」の列で付け替えられます（<a href="#ch9">9章</a>）。</li>
          </ul>
        </div>
      </section>

      <!-- 11. 設定と契約 -->
      <section id="ch11" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">11</span>設定と契約</h2>

        <div class="p-guide__cards" style="margin-top: calc(40 * var(--u));">
          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));"><code style="font-size: calc(24 * var(--u));">/setting</code> でできること</p>
            <ul class="p-guide__list">
              <li>プランの状況（無料期間の期限、契約中のプラン、解約予定の日）</li>
              <li>メール連携（取り込みアドレス）、ログインキーの発行、見本データの片づけ、「はじめかた」の表示の切り替え</li>
              <li>（管理者）送信元メール、営業方針、AI の一時停止、解約</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">料金プラン</p>
            <div class="c-doc-table-wrap" style="margin-bottom: calc(18 * var(--u)); overflow-x:auto;">
              <table class="c-doc-table" style="min-width: 560px;">
                <thead><tr><th>プラン</th><th>月額</th><th>年額</th><th>人数</th></tr></thead>
                <tbody>
                  <tr><td style="font-weight:700; white-space:nowrap;">PERSONAL</td><td>¥2,980</td><td>¥29,800</td><td style="color: var(--color-gray-text);">1名まで</td></tr>
                  <tr><td style="font-weight:700; white-space:nowrap;">TRIO</td><td>¥5,980（4人目から+¥2,000）</td><td>¥59,800（追加1人+¥20,000）</td><td style="color: var(--color-gray-text);">3名（7名まで追加可）</td></tr>
                  <tr><td style="font-weight:700; white-space:nowrap;">TEAM</td><td>¥14,980</td><td>¥149,800</td><td style="color: var(--color-gray-text);">10名まで</td></tr>
                </tbody>
              </table>
            </div>
            <p class="p-guide__caption">11名以上はお問い合わせください。価格はすべて税別で、決済時に消費税10%が加わります。年額は10か月分の料金です。</p>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">人数の数え方と追加料金</p>
            <ul class="p-guide__list">
              <li>人数は、その月にクラゲを使った人（メッセージ・ボタン・コマンド）で数えます。朝のブリーフィングを受け取っただけの人は数えません。</li>
              <li>基本人数分の料金は前払いです。TRIO の4〜7人目の追加分は、使った月の分を翌月に後払いでご請求します（日割りはありません）。</li>
              <li>基本人数を超えて使う人がいる場合、その人の利用には管理者の許可が必要です。許可するときに追加料金が表示されるので、知らないうちに増えることはありません。</li>
              <li>追加できる人数の上限は TRIO のみ7人まで（PERSONAL・TEAM には追加の枠がありません）。この上限を超える場合は、許可した月の翌月末までの期間に限りご利用いただけます。それまでに上位プランへの変更などで人数を上限の範囲内に収めていただけない場合、新しく許可された人から順に利用が一時停止します（TRIO の4〜7人目はこの対象外で、料金を払う限り続けてお使いいただけます）。</li>
              <li>解約する月に発生した追加人数分の料金は、請求しません。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">無料期間と契約</p>
            <ul class="p-guide__list">
              <li>Slack に追加した日から14日間は無料です（1つのワークスペースにつき1回）。無料期間中は人数の制限もありません。</li>
              <li>無料期間が終わっても自動で課金はされません。有料プランに申し込まなければ利用が停止します。</li>
            </ul>
          </div>

          <div class="c-card">
            <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">解約</p>
            <ul class="p-guide__list">
              <li>管理者が、Web の設定画面の［解約する］か、Slack の <code>/setting</code> の［解約する］から手続きします（メールでの手続きはありません）。</li>
              <li>契約期間の終わりまで今のまま使え、その後は利用が停止します。<code>/setting</code> に「〇月〇日に終了予定」と表示されます。</li>
              <li>データは解約後30日間保管します。その間に再開すればそのまま引き継げ、CSV で書き出すこともできます。年額を含め、途中解約の返金はありません。</li>
              <li>停止中は、管理者には再開のリンクが、メンバーには「管理者が再開すれば使えます」という案内が届きます。</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 12. 困ったときと公式フレーズ一覧 -->
      <section id="ch12" class="p-guide__section">
        <h2 class="p-guide__section-ttl"><span class="c-step__num">12</span>困ったときと公式フレーズ一覧</h2>

        <div class="c-card" style="margin-top: calc(40 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(14 * var(--u));">困ったとき</p>
          <ul class="p-guide__list">
            <li><strong>迷ったら：</strong> ［📋 メニュー］からボタンで進めてください。ひとことで呼び出せるのは、下の公式フレーズです。使い方が分からないときは「使い方を教えて」と聞けば、クラゲくんがその場で答えます。</li>
            <li><strong>手続きの途中で別のことをしたい：</strong> 途中で公式フレーズを打つと「終わってから打ってください」と案内します。今の手続きを終えてからどうぞ。</li>
            <li><strong>メモしたのに出ない：</strong> メモは、内容によって出る場所が変わります。（1）「来週火曜にMTG予定」のように先の約束を書いたメモは「予定」になり、［📅 予定一覧］と朝のブリーフィングに出ます。（2）「見積もりを出す」のようなやることは、1〜2分後に「今やること」の「📝 メモから拾ったやること」に出ます。（3）メモそのものは［📝 メモ一覧］と、顧客・ディールの詳細で見られます。どこにも見当たらないときは、担当の紐付けを確認してください。</li>
            <li><strong>画像を送った：</strong> 画像やファイルはまだ読めません。</li>
            <li><strong>要望を伝えたい：</strong> <code>/kurage</code> で開発チームに届きます。</li>
          </ul>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">公式フレーズ一覧（TIPS）</p>
          <p class="c-step__text" style="margin-top:0; margin-bottom: calc(24 * var(--u));">ボタンと同じ画面を、ひとことで開ける近道です。「〇〇」には名前や会社名を入れます。</p>
          <div class="c-doc-table-wrap" style="overflow-x:auto;">
            <table class="c-doc-table" style="min-width: 640px;">
              <thead><tr><th>やりたいこと</th><th>言い方</th><th>同じボタン</th></tr></thead>
              <tbody>
                <tr><td style="font-weight:700; white-space:nowrap;">メニューを出す</td><td>「メニュー」</td><td style="color: var(--color-gray-text);">［📋 メニュー］</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">今やること</td><td>「今やること」</td><td style="color: var(--color-gray-text);">［🎯 今やること］</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">メモを見る</td><td>「メモ一覧」「最近のメモ」「先週の活動を見せて」「〇〇さんのメモ見せて」</td><td style="color: var(--color-gray-text);">［📝 メモ一覧］</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">予定を見る</td><td>「予定一覧」</td><td style="color: var(--color-gray-text);">［📅 予定一覧］</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">ディールを見る</td><td>「〇〇のディール一覧」「進行中のディール」「停滞中のディール」</td><td style="color: var(--color-gray-text);">［📊 ディール一覧］</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">次の一手</td><td>「〇〇の次の一手」</td><td style="color: var(--color-gray-text);">ディール詳細から</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">詳しく見る</td><td>「〇〇さんを教えて」「株式会社〇〇を教えて」</td><td style="color: var(--color-gray-text);">一覧から選ぶ</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">会社を登録</td><td>「株式会社〇〇を登録」</td><td style="color: var(--color-gray-text);">―</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">受注・失注</td><td>「〇〇を受注に」「〇〇を失注に」</td><td style="color: var(--color-gray-text);">―</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">ステージを変える</td><td>「ステージを変えたい」</td><td style="color: var(--color-gray-text);">―</td></tr>
                <tr><td style="font-weight:700; white-space:nowrap;">操作の一覧</td><td>「コマンドを教えて」</td><td style="color: var(--color-gray-text);">―</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="c-card" style="margin-top: calc(28 * var(--u));">
          <p class="p-guide__cmd-ttl" style="margin-bottom: calc(10 * var(--u));">スラッシュコマンド</p>
          <p class="c-step__text" style="margin-top:0;">
            <code>/setting</code>（設定）、
            <code>/coach</code>（コーチング）、
            <code>/contact</code>（顧客一覧）、
            <code>/deal</code>（ディール一覧）、
            <code>/account</code>（会社一覧）、
            <code>/usage</code>（AI の利用状況）、
            <code>/kurage</code>（要望を送る）
          </p>
        </div>
      </section>

      <!-- Footer -->
      <div style="margin-top: calc(100 * var(--u)); padding-top: calc(50 * var(--u)); border-top: calc(2 * var(--u)) solid var(--color-gray); text-align: center; font-size: calc(23 * var(--u)); color: var(--color-gray-text);">
        <NuxtLink to="/guide" style="text-decoration: underline;">使い方ガイドを見る</NuxtLink>
        <span style="margin: 0 calc(16 * var(--u));">·</span>
        <NuxtLink to="/" style="text-decoration: underline;">← トップページに戻る</NuxtLink>
      </div>

    </div>
  </LpFrame>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（option A・4ページ目）。
// このページはguide.vueの「便利な機能とコマンド」を章立てで拡張した内容と
// 構造が同じ（章番号つき見出し・カード・参照テーブル・箇条書き）ため、
// 専用CSSを作らずguide.css（.p-guide__*）をそのまま再利用する。
import '~/assets/css/lp/guide.css'

usePageSeo({
  path: '/manual',
  title: 'マニュアル | クラゲディール',
  description:
    'クラゲディールの機能を章ごとに引けるマニュアル。言葉の役割、顧客・会社・ディールの操作、メモとやること、コーチング、メール連携、Webダッシュボード、チームと権限、設定と契約、公式フレーズ一覧まで。',
})
</script>
