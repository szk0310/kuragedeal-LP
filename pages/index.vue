<template>
  <main class="pt-16">
    <!-- ============================================================
         01. ヒーロー
    ============================================================ -->
    <section
      id="hero"
      class="relative bg-gradient-to-br from-kurage-900 via-kurage-800 to-kurage-700 text-white overflow-hidden"
    >
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-72 h-72 rounded-full bg-kurage-300 blur-3xl" />
        <div class="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:pl-11 py-24 md:py-32">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="flex-1">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span class="block mb-4">話しかけるだけで、</span>
              <span class="text-cyan-50">ディールが前に進む。</span>
            </h1>

            <!-- クラゲくん コアフレーズ -->
            <div class="border-l-2 border-cyan-400/60 pl-4 mb-4 max-w-lg">
              <p class="text-base text-cyan-100 italic leading-relaxed">
                ぼくには脳がない。記憶もない。<br />
                でも、きみのことは全部覚えてる。
              </p>
            </div>

            <p class="text-lg text-kurage-100 mb-2 max-w-2xl leading-relaxed">
              Slackに書いた一言が、自動で記録・コーチングまでつながる。
            </p>
            <p class="text-base text-kurage-100 mb-10 max-w-2xl leading-relaxed">
              1人から10人の営業チームのために、ゼロから設計しました。<br />
              導入初日から、全員が使えます。<br />
              <span class="text-sm text-kurage-200">（11人以上は Enterprise プランで対応）</span>
            </p>

            <!-- CTA（phase1: β 試用 self-serve 主 CTA 一本のみ）-->
            <div class="mb-4">
              <a
                href="/beta"
                class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
              >
                β 版を試す →
              </a>
            </div>
            <p class="text-xs text-kurage-200 max-w-xl leading-relaxed">
              ※ 正式版は 11/18 を目標にしています（品質目標 次第でリスケすることがあります）。
            </p>
          </div>

          <div class="hidden lg:flex flex-shrink-0 items-center justify-center w-72 h-72 lg:mr-8">
            <img
              src="/kurage-on-green.svg"
              alt="クラゲくん"
              class="w-64 h-64 kurage-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         02. ターゲット
    ============================================================ -->
    <section class="bg-ocean-steel/75 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            1〜10 人の営業チームのために、ゼロから設計したAIツール
          </h2>
          <p class="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
            一人社長のフリーランスから、営業チーム10名規模の成長企業まで。<br />
            「大手ベンダーのCRM/SFAは高すぎるし重すぎる。」<br />
            ──そんな会社のために作りました。
          </p>
          <p class="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-4">
            1〜10 人の営業チームは、大手 CRM の主戦場ではありません。<br />
            だからこそ、私たちはこのサイズの「現場の手触り」から、<br />
            ゼロから設計しました。
          </p>
          <p class="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
            将来チームが大きく育ったときは、Salesforce 等への移行も<br />
            弊社（Salesforce 認定コンサルティングパートナー）が支援します。<br />
            クラゲディールは、あなたのチームの "今" にぴったり寄り添うために。
          </p>
        </div>
        <div class="bg-white/80 rounded-2xl border border-ocean-tan/30 p-8 md:p-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="(p, i) in personas"
              :key="i"
              class="bg-ocean-mist/50 rounded-xl p-5 text-base text-gray-700 leading-relaxed"
            >
              <p class="text-2xl mb-2">{{ p.icon }}</p>
              <p>{{ p.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         03. あるある 1: CRM が続かない
    ============================================================ -->
    <section id="pain1" class="bg-white py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-cry.svg" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
          <p class="text-base md:text-lg font-bold text-orange-500 uppercase tracking-widest">あるある お悩み 1</p>
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
          CRM が、続かない。
        </h2>

        <!-- 共感 -->
        <div class="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-6 mb-10">
          <p class="text-lg text-gray-800 font-bold mb-4 leading-relaxed">
            「うちは CRM/SFA を入れたんですが、誰も入力しないんですよ」
          </p>
          <p class="text-base text-gray-700 leading-relaxed mb-3">
            入力に 1 日 30 分。<br />
            営業 10 人 × 月 20 日 × 0.5 時間 × 時給 ¥3,000 = 月 ¥300,000 の隠れコスト。
          </p>
          <p class="text-base text-gray-700 leading-relaxed">
            でも本当の問題はコストじゃなくて、<br />
            <span class="font-bold text-orange-700">「データが揃わないから、AI を活かせない」</span>ことです。
          </p>
        </div>

        <!-- 原因 -->
        <h3 class="text-xl font-bold text-gray-900 mb-6">なぜ続かないのか。答えはふたつ。</h3>
        <div class="space-y-5 mb-12">
          <div class="bg-gray-50 rounded-xl p-6">
            <p class="font-bold text-gray-900 mb-2">① 入力の認知負荷が、高すぎるから。</p>
            <p class="text-gray-700 leading-relaxed">
              CRM にログインして、画面を開いて、商談項目を埋めて、保存して、
              活動記録のページを出して、また入力して……
              <br />── 営業マンは、もう次のお客様に行きたい。
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <p class="font-bold text-gray-900 mb-2">② 入力する人に、何のご褒美もないから。</p>
            <p class="text-gray-700 leading-relaxed">
              書いた内容が、自分の営業活動を前に進めるわけではない。<br />
              ただのコストでしかない。
            </p>
          </div>
        </div>

        <!-- 解決 -->
        <div class="bg-gradient-to-br from-kurage-50 to-cyan-50 border-2 border-kurage-200 rounded-2xl p-8 mb-10">
          <p class="text-lg md:text-xl font-bold text-kurage-700 mb-4 leading-relaxed">
            ★ クラゲディールは、こんなストレスから営業マンを解放します！
          </p>
          <p class="text-gray-800 leading-relaxed mb-4">
            Slack に「田中さんと商談しました。予算 300 万」と<strong>投げる</strong>。<br />
            それだけで、AI がディールを更新し、受注確率を計算し、<br />
            明日 AI コーチが「次は決裁者と会う段取りを」と問いかけてくれる。
          </p>
          <p class="text-lg font-bold text-kurage-800">
            認知負荷ゼロ。書くたびに、営業活動が前に進む。<br />
            ★ これなら、続きます。
          </p>
        </div>

        <!-- ROI バナー（対比構造） -->
        <p class="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">チーム規模別の料金比較</p>
        <div class="bg-gradient-to-br from-kurage-900 to-kurage-700 text-white rounded-2xl p-6 md:p-8 mb-10 shadow-lg overflow-x-auto">
          <table class="w-full text-sm text-center min-w-[400px]">
            <thead>
              <tr class="border-b border-white/20">
                <th class="pb-3 text-kurage-200 font-normal">チーム規模</th>
                <th class="pb-3 text-cyan-200 font-bold">クラゲディール</th>
                <th class="pb-3 text-kurage-200 font-normal text-xs">従来の Slack 連携 CRM</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr>
                <td class="py-3 text-kurage-200">1 人</td>
                <td class="py-3 font-black text-xl text-cyan-50">¥1,980<span class="text-xs font-normal text-kurage-200">/月</span></td>
                <td class="py-3 text-kurage-300 text-xs">約 ¥16,000〜¥21,000/月</td>
              </tr>
              <tr>
                <td class="py-3 text-kurage-200">3 人</td>
                <td class="py-3 font-black text-xl text-cyan-50">¥4,980<span class="text-xs font-normal text-kurage-200">/月</span></td>
                <td class="py-3 text-kurage-300 text-xs">約 ¥48,000〜¥63,000/月</td>
              </tr>
              <tr>
                <td class="py-3 text-kurage-200">10 人</td>
                <td class="py-3 font-black text-xl text-orange-400">¥9,800<span class="text-xs font-normal text-kurage-200">/月</span></td>
                <td class="py-3 text-kurage-300 text-xs">約 ¥160,000〜¥210,000/月</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 3 つの特徴チップ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(c, i) in pain1Chips" :key="i" class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">{{ c.icon }}</p>
            <p class="font-bold text-gray-900 mb-1">{{ c.title }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>

        <!-- 次セクションへの繋ぎ -->
        <p class="text-center text-gray-500 mt-12 italic">
          でも、それだけじゃ足りません。<br />次は「営業の進捗が、見えない」問題です。
        </p>
      </div>
    </section>

    <!-- ============================================================
         04. あるある お悩み 2: 進捗が見えない
    ============================================================ -->
    <section id="pain2" class="bg-ocean-steel/75 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-anger.svg" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
          <p class="text-base md:text-lg font-bold text-orange-500 uppercase tracking-widest">あるある お悩み 2</p>
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
          営業の進捗が、見えない。
        </h2>

        <!-- 共感 -->
        <div class="bg-white border-l-4 border-orange-400 rounded-r-xl p-6 mb-10 shadow-sm">
          <div class="space-y-2 text-lg text-gray-800 font-bold mb-4 leading-relaxed">
            <p>「あの案件、進んでる？」</p>
            <p>「先週の田中さんの件、どうなった?」</p>
            <p>「うちのチーム、いま何件抱えてるんだっけ?」</p>
          </div>
          <p class="text-base text-gray-700 leading-relaxed mb-3">
            毎週、営業マネジャーが部下に聞いて回る、この時間。
          </p>
          <p class="text-base text-gray-700 leading-relaxed mb-3">
            聞かれた部下も、悪いわけじゃない。<br />
            記憶に頼って、何件もの案件を追いかけているのだから。
          </p>
          <p class="text-base text-gray-800 font-bold leading-relaxed">
            でも、<span class="text-orange-700">この時間こそが「営業の見えない時間」</span>です。
          </p>
        </div>

        <!-- 原因 -->
        <h3 class="text-xl font-bold text-gray-900 mb-6">なぜ進捗が見えなくなるのか。答えはふたつ。</h3>
        <div class="space-y-5 mb-12">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <p class="font-bold text-gray-900 mb-2">① 案件数が増えると、人の記憶では追えない。</p>
            <p class="text-gray-700 leading-relaxed">
              営業 5 人 × 案件 10 件 = 50 件。<br />
              各案件に「金額・ステージ・次のアクション・最後の連絡日」がある。<br />
              ── 人の頭で追える限界を、とっくに超えています。
            </p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <p class="font-bold text-gray-900 mb-2">② 動いていない案件は、誰の目にも入らない。</p>
            <p class="text-gray-700 leading-relaxed">
              動いている案件は連絡が来るので目立つ。<br />
              けれど、本当に問題なのは「動いていない案件」の方。<br />
              「2 週間連絡してない」「気づいたら止まっていた」<br />
              ── 失注の多くは、こうして生まれます。
            </p>
          </div>
        </div>

        <!-- 解決 -->
        <div class="bg-gradient-to-br from-white to-kurage-50 border-2 border-kurage-200 rounded-2xl p-8 mb-10 shadow-sm">
          <p class="text-lg md:text-xl font-bold text-kurage-700 mb-6 leading-relaxed">
            ★ クラゲディールは、見えないものを、見えるようにします。
          </p>

          <div class="space-y-6">
            <div>
              <p class="font-bold text-gray-900 mb-2">🌅 朝 9 時。今日のフォーカスが、Slack に届く。</p>
              <p class="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-kurage-200">
                「今日対応すべき案件は 3 件です。<br />
                ABC 商事 田中様: 提案書送付期日が今日。<br />
                XYZ 社 山田様: 14 日間動きなし、フォロー推奨。<br />
                DEF 株式会社 佐藤様: クロージング前の確認を。」
              </p>
            </div>
            <div>
              <p class="font-bold text-gray-900 mb-2">🌆 夕方 17 時。1 日の振り返りと、明日の予告が届く。</p>
              <p class="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-kurage-200">
                「今日、3 件のうち 2 件が前進しました。<br />
                動きのなかった 1 件は、明日朝一で連絡を。<br />
                ── 退勤前に、明日が整理されます。」
              </p>
            </div>
            <div>
              <p class="font-bold text-gray-900 mb-2">🧠 MEDDPICC 情報が更新されるたびに、受注確率が動く。</p>
              <p class="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-kurage-200">
                決裁者と会えた。予算の根拠を確認した。競合を把握した。<br />
                ── そのたびに、AI が確率を計算し直します。<br />
                数字が動くから、今どこにいるかが見える。
              </p>
            </div>
            <div>
              <p class="font-bold text-gray-900 mb-2">⚠️ 14 日間動きのない案件は、AI が自動検知して警告。</p>
              <p class="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-kurage-200">
                「忘れ去られる前に、フォローしましょう」と Slack に届く。<br />
                ── 動いていない案件にこそ、光が当たります。
              </p>
            </div>
          </div>

          <p class="text-base font-bold text-kurage-800 mt-6 leading-relaxed">
            マネジャーが聞き回らなくても、案件の状況が、立ち上がる。<br />
            ★ それが、進捗が見える営業チームです。
          </p>
        </div>

        <!-- 朝夕の Slack ブリーフィング 2 枚並列モック -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <SlackMessageMock channel-name="#sales-team">
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
              <p class="font-bold mb-2">🌅 おはようございます！今日のフォーカス</p>
              <div class="bg-orange-50 border-l-2 border-orange-400 pl-3 py-2 mb-2">
                <p class="font-semibold">🔥 期日今日</p>
                <p class="text-xs text-gray-600">ABC商事 田中様（¥3M）— 提案書送付</p>
              </div>
              <div class="bg-yellow-50 border-l-2 border-yellow-400 pl-3 py-2 mb-2">
                <p class="font-semibold">⚠️ 14日停滞</p>
                <p class="text-xs text-gray-600">XYZ社 山田様 — フォロー推奨</p>
              </div>
              <div class="bg-cyan-50 border-l-2 border-cyan-400 pl-3 py-2">
                <p class="font-semibold">📈 確率上昇</p>
                <p class="text-xs text-gray-600">DEF佐藤様 60% → 75%</p>
              </div>
            </SlackBotLine>
          </SlackMessageMock>

          <SlackMessageMock channel-name="#sales-team">
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="17:00">
              <p class="font-bold mb-2">🌆 1 日お疲れさまでした。今日の振り返り</p>
              <div class="bg-green-50 border-l-2 border-green-400 pl-3 py-2 mb-2">
                <p class="font-semibold">📈 進捗</p>
                <p class="text-xs text-gray-600">3件のうち 2件が前進</p>
              </div>
              <div class="bg-yellow-50 border-l-2 border-yellow-400 pl-3 py-2 mb-2">
                <p class="font-semibold">⚠️ 停滞</p>
                <p class="text-xs text-gray-600">1件は明日朝一で連絡を</p>
              </div>
              <div class="bg-cyan-50 border-l-2 border-cyan-400 pl-3 py-2">
                <p class="font-semibold">🌟 明日朝一</p>
                <p class="text-xs text-gray-600">DEF 佐藤様 — クロージング確認</p>
              </div>
            </SlackBotLine>
          </SlackMessageMock>
        </div>
        <p class="text-center text-sm text-gray-600 mb-12 italic">毎朝・毎夕、これが Slack に届きます。</p>

        <!-- 3 つの特徴チップ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(c, i) in pain2Chips" :key="i" class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">{{ c.icon }}</p>
            <p class="font-bold text-gray-900 mb-1">{{ c.title }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>

        <p class="text-center text-gray-700 mt-12 italic">
          でも、まだあります。<br />次は「営業マネジャーが、足りない」問題です。
        </p>
      </div>
    </section>

    <!-- ============================================================
         05. あるある お悩み 3: マネジャーが足りない
    ============================================================ -->
    <section id="pain3" class="bg-white py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-cry.svg" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
          <p class="text-base md:text-lg font-bold text-orange-500 uppercase tracking-widest">あるある お悩み 3</p>
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">
          営業マネジャーが、足りない。
        </h2>

        <!-- 共感 -->
        <div class="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-6 mb-10">
          <div class="space-y-2 text-lg text-gray-800 font-bold mb-4 leading-relaxed">
            <p>「うちの営業マネジャー、本当によくやってくれてる」</p>
            <p>「でも 1 人で 5 人分のチームを見るのは限界」</p>
            <p>「もう 1 人雇いたいけど、年収 800 万円……」</p>
          </div>
          <p class="text-base text-gray-700 leading-relaxed mb-3">
            優秀な営業マネジャーは、いつもチームに問いかけています。<br />
            「あの案件、決裁者と会えてる？」「予算の根拠、確認した？」「競合は把握してる？」
          </p>
          <p class="text-base text-gray-700 leading-relaxed mb-3">
            その問いかけが、若手を育てる。<br />
            その問いかけが、案件を前に進める。
          </p>
          <p class="text-base text-gray-800 font-bold leading-relaxed">
            でも、マネジャーは 1 人。チームは増えていく。<br />
            <span class="text-orange-700">★ 全員に同じ質を、毎日届けるのは、無理なのです。</span>
          </p>
        </div>

        <!-- 原因 -->
        <h3 class="text-xl font-bold text-gray-900 mb-6">なぜマネジャーが足りなくなるのか。答えはふたつ。</h3>
        <div class="space-y-5 mb-12">
          <div class="bg-gray-50 rounded-xl p-6">
            <p class="font-bold text-gray-900 mb-2">① 物理的限界 — 1 人で全員を見られない。</p>
            <p class="text-gray-700 leading-relaxed">
              案件 50 件、メンバー 5 人。週 1on1 だけで 5 時間。<br />
              それで案件の細かい状況まで把握できるわけがない。
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <p class="font-bold text-gray-900 mb-2">② 属人化 — 営業ノウハウが、マネジャー個人に閉じている。</p>
            <p class="text-gray-700 leading-relaxed">
              「決裁者に会う」「予算の根拠を確認する」「競合を把握する」<br />
              ── これらの判断は、ほとんどがマネジャーの頭の中。<br />
              メンバーが入れ替わるたびに、伝授しなおしです。
            </p>
          </div>
        </div>

        <!-- 解決 -->
        <div class="bg-gradient-to-br from-kurage-50 to-cyan-50 border-2 border-kurage-200 rounded-2xl p-8 mb-10">
          <p class="text-lg md:text-xl font-bold text-kurage-700 mb-6 leading-relaxed">
            ★ クラゲディールの AI が、マネジャーの分身になります。
          </p>

          <div class="space-y-6">
            <div>
              <p class="font-bold text-gray-900 mb-2">🎓 /coach コマンドで、AI が MEDDPICC で深掘り。</p>
              <p class="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-kurage-200">
                「ABC 商事の状況は？」と聞くだけ。<br />
                AI が問い返します:<br />
                ・決裁者と会えていますか？(Decision Maker)<br />
                ・予算の根拠は確認済みですか？(Economic Buyer)<br />
                ・競合は把握していますか？(Competition)<br />
                ── 全メンバー、全案件に、同じ質の問いかけを。
              </p>
            </div>
            <div>
              <p class="font-bold text-gray-900 mb-2">🌙 マネジャーが寝ている間も、AI は動く。</p>
              <p class="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-kurage-200">
                朝のブリーフィング・夕方のコーチングは、マネジャー不在でも届く。<br />
                出張中・休暇中のメンバーも、自分の時間で AI と対話できる。<br />
                ── 人間マネジャーの 5 倍の時間、チームに伴走します。
              </p>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-kurage-200">
            <p class="text-sm text-gray-700 leading-relaxed">
              そして月に 1 度、担当者との 30 分のオフィスアワー。<br />
              AI では届かない「経営の悩み」「業界の動向」は、人間が答えます。
            </p>
            <p class="text-xs text-gray-500 mt-2 italic">
              ※ 月次オフィスアワーは、正式版リリース後に開始予定の特典です。
              詳しくは、このページの最後でご案内します。
            </p>
          </div>

          <p class="text-base font-bold text-kurage-800 mt-6 leading-relaxed">
            「マネジャーをもう 1 人雇うか？」<br />
            ★ その判断の前に、AI マネジャーを試してみてください。
          </p>
        </div>

        <!-- /coach Slack mock -->
        <div class="mb-8 max-w-2xl mx-auto">
          <SlackMessageMock channel-name="#sales-coach">
            <SlackBotLine name="あなた" time="14:32">
              <p>/coach ABC商事</p>
            </SlackBotLine>
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="14:32">
              <p class="font-bold mb-2">ABC 商事の状況、いくつか確認させてください</p>
              <ol class="space-y-3 list-decimal list-inside">
                <li>
                  <span class="font-semibold">決裁者と会えていますか？</span>
                  <span class="block text-xs text-gray-500 ml-5">(Decision Maker / Economic Buyer)</span>
                </li>
                <li>
                  <span class="font-semibold">予算 ¥3M の根拠は、お客様からの情報ですか？推測ですか？</span>
                  <span class="block text-xs text-gray-500 ml-5">(Decision Criteria)</span>
                </li>
                <li>
                  <span class="font-semibold">競合の存在は把握できていますか？</span>
                  <span class="block text-xs text-gray-500 ml-5">(Competition)</span>
                </li>
              </ol>
              <p class="mt-3 text-xs text-gray-500">気になる項目から、整理していきましょう</p>
            </SlackBotLine>
          </SlackMessageMock>
        </div>
        <p class="text-center text-sm text-gray-600 mb-12 italic">/coach コマンド一発で、こうした問いかけが届きます。</p>

        <!-- 3 つの特徴チップ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(c, i) in pain3Chips" :key="i" class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">{{ c.icon }}</p>
            <p class="font-bold text-gray-900 mb-1">{{ c.title }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>

        <p class="text-center text-gray-500 mt-12 italic">
          そして、顧客からの返信メール。<br />
          これも AI が、代筆してくれます ↓
        </p>
      </div>
    </section>

    <!-- ============================================================
         06. AI 返信支援 — AI が返信を、代筆する
    ============================================================ -->
    <section id="reply-assist" class="bg-ocean-sand py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-smile.svg" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
          <p class="text-base md:text-lg font-bold text-orange-500 uppercase tracking-widest">機能スポットライト</p>
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
          AI が返信を、代筆する。
        </h2>
        <p class="text-lg text-gray-700 font-bold mb-10 leading-relaxed">
          メール 1 通 10 分の世界を、終わらせる。
        </p>

        <!-- 共感 -->
        <div class="bg-white border-l-4 border-orange-400 rounded-r-xl p-6 mb-10">
          <p class="text-base text-gray-800 leading-relaxed mb-3">
            営業マネジャーの 1 日で、地味に多いのが、メール返信。
          </p>
          <p class="text-base text-gray-700 leading-relaxed mb-3">
            「予算の根拠は？」「来週月曜は？」「競合は？」<br />
            ── 毎日 5〜10 通、1 通 5〜10 分。<br />
            営業マネジャー 1 人で、月 30〜60 時間。
          </p>
          <p class="text-base text-gray-700 leading-relaxed mb-4">
            その時間、本当は若手と話したかった。<br />
            新規開拓に行きたかった。
          </p>
          <p class="text-base text-gray-800 font-bold leading-relaxed">
            <span class="text-orange-700">★ メール返信は、AI に代筆させましょう。</span>
          </p>
        </div>

        <!-- 解決ステップ -->
        <div class="bg-gradient-to-br from-kurage-50 to-cyan-50 border-2 border-kurage-200 rounded-2xl p-8 mb-10">
          <p class="text-lg md:text-xl font-bold text-kurage-700 mb-6 leading-relaxed">
            ★ クラゲディールは、こうします。
          </p>

          <div class="space-y-5">
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-kurage-500 text-white font-bold flex items-center justify-center text-sm">1</div>
              <div>
                <p class="font-bold text-gray-900 mb-1">顧客から返信が届く</p>
                <p class="text-sm text-gray-700 leading-relaxed">Gmail / Outlook 等、既存メールはそのまま使用。</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-kurage-500 text-white font-bold flex items-center justify-center text-sm">2</div>
              <div>
                <p class="font-bold text-gray-900 mb-1">AI が文脈を読んで、返信を下書き</p>
                <p class="text-sm text-gray-700 leading-relaxed">過去のやり取り・商談ステージ・会社の方針を踏まえて生成。</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-kurage-500 text-white font-bold flex items-center justify-center text-sm">3</div>
              <div>
                <p class="font-bold text-gray-900 mb-1">Slack で確認 → ワンクリックで送信</p>
                <p class="text-sm text-gray-700 leading-relaxed">そのまま送る / 編集する / 送らない、を 3 ボタンで判断。</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-kurage-500 text-white font-bold flex items-center justify-center text-sm">4</div>
              <div>
                <p class="font-bold text-gray-900 mb-1">自社アドレスから送信</p>
                <p class="text-sm text-gray-700 leading-relaxed">お客様にはいつもどおり営業マネジャー本人からの返信に見えます。</p>
              </div>
            </div>
          </div>

          <p class="text-base font-bold text-kurage-800 mt-6 leading-relaxed">
            ★ メール 1 通 30 秒の世界。
          </p>
        </div>

        <!-- AI 返信支援 Slack mock -->
        <div class="mb-8 max-w-2xl mx-auto">
          <SlackMessageMock channel-name="#sales-team">
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="10:08">
              <p class="font-bold mb-2">📧 田中様（ABC 商事）より受信</p>
              <div class="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 leading-relaxed mb-3">
                ご提案ありがとうございます。<br />
                予算は問題ありませんが、競合 1 社と比較中で、最終決定は来週月曜になる予定です。<br />
                追加で資料を頂けますでしょうか？
              </div>

              <p class="text-xs font-bold text-orange-600 mb-2">✨ AI が返信下書きを生成しました</p>
              <div class="border border-kurage-200 rounded-lg p-3 text-sm text-gray-800 leading-relaxed bg-white mb-3">
                田中様<br /><br />
                ご連絡ありがとうございます。<br />
                月曜のご決定タイミング、承知いたしました。<br /><br />
                競合比較のための追加資料として、<br />
                お客様の事業規模に合わせた ROI 試算を作成しお送りいたします。<br />
                本日中にご提供できる予定です。<br /><br />
                田中様のご検討の一助となれば幸いです。<br /><br />
                株式会社shiro 鈴木
              </div>

              <div class="flex flex-col sm:flex-row gap-2">
                <button type="button" class="flex-1 bg-green-500 hover:bg-green-400 text-white text-xs font-bold px-3 py-2 rounded-md transition-colors">✅ そのまま送信</button>
                <button type="button" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3 py-2 rounded-md transition-colors">✏️ 編集する</button>
                <button type="button" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3 py-2 rounded-md transition-colors">❌ 送信しない</button>
              </div>
            </SlackBotLine>
          </SlackMessageMock>
        </div>
        <p class="text-center text-sm text-gray-600 mb-12 italic">ボタン 1 つで承認 → お客様には鈴木さん本人の社内アドレスから送信。</p>

        <!-- 3 つの特徴チップ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(c, i) in replyAssistChips" :key="i" class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">{{ c.icon }}</p>
            <p class="font-bold text-gray-900 mb-1">{{ c.title }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>

        <p class="text-center text-gray-500 mt-12 italic">
          3 つのあるある お悩みと、その解決策をご一緒に見てきました。<br />
          最後に、従来の Slack 連携 CRM ではなく、<br />
          なぜクラゲディールが選ばれているのか。その理由を整理させてください。
        </p>
      </div>
    </section>

    <!-- ============================================================
         07. 他のツールとの違い（3 ピラー）
    ============================================================ -->
    <section id="comparison" class="bg-ocean-deep py-20 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <p class="text-sm font-bold text-cyan-300 uppercase tracking-widest mb-3 text-center">他のツールとの違い</p>
        <h2 class="text-3xl md:text-4xl font-black mb-8 text-center leading-relaxed">
          1〜10 人の営業チームのために、<br class="hidden md:inline" />ゼロから設計した営業 AI です。
        </h2>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 text-kurage-100 leading-relaxed">
          <p class="mb-4">
            営業ツールには、たくさんの選択肢があります。従来の Slack 連携 CRM もそのひとつ。それぞれ素晴らしい製品です。
          </p>
          <p class="mb-4">
            ただ、1〜10 人の小さな営業チームから見ると、どれも「自分たちのサイズ」には合いません。
          </p>
          <p class="text-cyan-200 font-bold mb-6">
            重い。高い。柔軟じゃない。Slack に住んでくれない。
          </p>
          <p class="mt-4 pt-4 border-t border-white/10">
            <span class="text-cyan-200 font-bold">大手 CRM の主戦場（20 人以上の組織）とは、別の場所で。</span><br />
            1〜10 人専用に、ゼロから組み上げた営業 AI です。
          </p>
        </div>

        <!-- 理由 1: 経済性 -->
        <div class="bg-white/10 rounded-2xl p-6 md:p-8 mb-6">
          <p class="text-2xl mb-2">💰</p>
          <h3 class="text-xl md:text-2xl font-black mb-3">理由 1: 経済性 — チームが大きくなっても、月額は変わらない。</h3>
          <p class="text-kurage-100 leading-relaxed mb-4">
            従来の Slack 連携 CRM は、多くがユーザー数課金です。チームが 1 人から 10 人に増えれば、月額もリニアに増えていきます。
            さらに、ほとんどの場合 Slack Pro 以上の有料プランも必要です。
          </p>
          <p class="text-cyan-200 font-bold mb-2">
            ★ クラゲディールは違います。1 人 ¥1,980、3 人 ¥4,980、10 人 ¥9,800。ユーザー数追加課金なし。
          </p>
          <p class="text-cyan-200 font-bold mb-6">
            ★ しかも、Slack の Free プランでも完全に動作します。
          </p>

          <div class="bg-white/5 border border-white/15 rounded-xl overflow-hidden mb-4">
            <table class="w-full text-sm">
              <thead class="bg-white/10">
                <tr>
                  <th class="text-left px-4 py-3 text-cyan-200">チーム規模</th>
                  <th class="text-left px-4 py-3 text-cyan-200">クラゲディール</th>
                  <th class="text-left px-4 py-3 text-cyan-200">従来の Slack 連携 CRM<sup>*</sup></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr><td class="px-4 py-3">1 人</td><td class="px-4 py-3 font-bold text-cyan-200">¥1,980/月</td><td class="px-4 py-3 text-kurage-300">約 ¥16,000〜¥21,000/月</td></tr>
                <tr><td class="px-4 py-3">3 人</td><td class="px-4 py-3 font-bold">¥4,980/月</td><td class="px-4 py-3 text-kurage-300">約 ¥48,000〜¥63,000/月</td></tr>
                <tr><td class="px-4 py-3">10 人</td><td class="px-4 py-3 font-bold text-cyan-200">¥9,800/月</td><td class="px-4 py-3 text-orange-300">約 ¥160,000〜¥210,000/月</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-kurage-300 mb-4">
            <sup>*</sup>「従来の Slack 連携 CRM」環境の合計コスト = CRM ライセンス料（1 ユーザー月 ¥15,000〜¥20,000）+ Slack Pro プラン（1 ユーザー月 ¥925）で算出した目安です。
          </p>

          <p class="text-kurage-100 leading-relaxed mb-3">
            1 人 ¥1,980 から始めて、チームが 10 人に成長しても月額 ¥9,800。<br />
            ── 従来環境との差は、月 15〜20 万円（年 180〜240 万円）に。
          </p>
          <p class="text-kurage-100 leading-relaxed mb-3">
            しかも、Slack の今のプラン（Free / Pro）のまま使えます。プラン乗り換え、不要です。
          </p>
          <p class="text-kurage-200 text-sm leading-relaxed mb-4">
            11 人以上の規模になったら、Enterprise プランで個別対応します。
          </p>
          <div class="bg-orange-500/20 border border-orange-400/40 rounded-xl p-4 text-cyan-100 text-sm leading-relaxed">
            <strong class="text-orange-300">★</strong> 今なら <strong class="text-orange-300">3 ヶ月無料</strong>の β 試用を提供中（〜9/15・クレカ不要・審査なし・即時アクティベート）。<br />
            どなたでも、Slack に追加するだけで即日ご利用いただけます。
          </div>
        </div>

        <!-- 理由 2: 営業 AI 思考力 -->
        <div class="bg-white/10 rounded-2xl p-6 md:p-8 mb-6">
          <p class="text-2xl mb-2">🎓</p>
          <h3 class="text-xl md:text-2xl font-black mb-3">理由 2: 営業 AI 思考力 — 24 時間動く、AI コーチ。</h3>
          <p class="text-kurage-100 leading-relaxed mb-4">
            従来の Slack 連携 CRM は、多くが「データの入れ物」。通知が届く。記録が貯まる。それで終わり。
          </p>
          <p class="text-cyan-200 font-bold mb-4">
            ★ クラゲディールは、営業マネジャーの分身として、AI が 24 時間チームに問いかける。
          </p>
          <ul class="space-y-2 text-kurage-100 text-sm leading-relaxed">
            <li>・自然言語で「田中さんと商談した」と書くだけで、ディール自動更新</li>
            <li>・MEDDPICC で AI が決裁者・予算・競合を問う</li>
            <li>・MEDDPICC 情報の更新で受注確率が自動計算</li>
            <li>・14 日停滞案件を自動検知</li>
            <li>・顧客メールの返信を AI が下書き → Slack 承認 → 自社送信</li>
            <li>・朝 9 時・夕方 17 時の自動ブリーフィング</li>
          </ul>
          <p class="text-kurage-100 leading-relaxed mt-4">
            従来の Slack 連携 CRM には、この深さは備わっていません。営業に特化した AI を、営業のためだけに鍛えました。
          </p>
        </div>

        <!-- 理由 3: 独立性 -->
        <div class="bg-white/10 rounded-2xl p-6 md:p-8 mb-12">
          <p class="text-2xl mb-2">🔓</p>
          <h3 class="text-xl md:text-2xl font-black mb-3">理由 3: 独立性 — データは、あなたのもの。</h3>
          <p class="text-kurage-100 leading-relaxed mb-4">
            クラゲディールを使い続けるかどうかは、いつでもあなたが決められます。
          </p>
          <p class="text-kurage-100 leading-relaxed mb-4">
            データは、いつでも CSV / Excel でエクスポート可能。Slack をやめても、Web ダッシュボードからアクセスできます。<br />
            将来、本格的な大手 CRM に移行する日が来たら、弊社（Salesforce 認定コンサルティングパートナー）が移行を支援します。
          </p>
          <p class="text-cyan-200 font-bold leading-relaxed">
            「逃げ道がある」ことが、一番の信頼の根拠だと、わたしたちは考えています。
          </p>
        </div>

        <!-- 締め -->
        <p class="text-center text-lg md:text-xl text-cyan-100 leading-loose">
          クラゲディールは、1〜10 人の営業チームに最適化された、<br />
          <strong class="text-cyan-50">唯一の営業 AI</strong> です。<br />
          <span class="text-base">あなたのチームのサイズに、ぴったり寄り添うために。</span>
        </p>
      </div>
    </section>

    <!-- ============================================================
         07.5. 今できること、正直に話します。（クラゲくん語り口）
    ============================================================ -->
    <section id="honesty" class="bg-kurage-50/60 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10">
          <img src="/kurage-smile.svg" alt="クラゲくん" class="w-16 h-16 mx-auto mb-4" />
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
            今できること、正直に話します。
          </h2>
          <!-- クラゲくん リード文 -->
          <div class="bg-white border-2 border-kurage-200 rounded-2xl p-6 text-left max-w-xl mx-auto shadow-sm">
            <p class="text-base text-gray-700 leading-relaxed mb-2">
              ぼくができることは、まだ多くありません。<br />
              でも、毎日使えるものだけを、ちゃんと動かしています。
            </p>
            <p class="text-base text-kurage-700 font-bold">正直に話しますね。</p>
          </div>
        </div>

        <!-- 今すぐ使える機能 -->
        <div class="bg-white border border-kurage-200 rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
          <div class="flex items-center gap-2 mb-5">
            <span class="text-green-500 text-lg font-black">✅</span>
            <h3 class="text-xl font-black text-gray-900">今すぐ使える</h3>
          </div>
          <div class="space-y-5">
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">📝</span>
              <div>
                <p class="font-bold text-gray-900 mb-1">Slack で話しかけるだけで記録できます</p>
                <p class="text-sm text-gray-600 leading-relaxed">「田中さんと商談しました。予算 300 万」と書くだけで、ディールと活動メモが更新されます。フォームはいりません。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">🔍</span>
              <div>
                <p class="font-bold text-gray-900 mb-1">名前を呼べば、ぼくが調べます</p>
                <p class="text-sm text-gray-600 leading-relaxed">顧客情報・会社情報・活動履歴・ディール一覧。「田中さんの役職は?」「ABC 商事のディールを見せて」</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">🌅</span>
              <div>
                <p class="font-bold text-gray-900 mb-1">毎朝 9 時と毎夕 17 時に、状況をお届けします</p>
                <p class="text-sm text-gray-600 leading-relaxed">今日やるべきこと、1 日の振り返り。14 日間動きのない案件は、ぼくが先に知らせます。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0 font-bold text-kurage-600">/</span>
              <div>
                <p class="font-bold text-gray-900 mb-1"><code class="bg-gray-100 text-kurage-700 px-1.5 py-0.5 rounded text-sm">/coach</code> — 案件を一緒に深掘りします</p>
                <p class="text-sm text-gray-600 leading-relaxed">MEDDPICC で、決裁者・予算・競合を確認します。全員に、同じ質の問いかけを届けます。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">✉️</span>
              <div>
                <p class="font-bold text-gray-900 mb-1">メールの返信下書きを作ります</p>
                <p class="text-sm text-gray-600 leading-relaxed">顧客からのメールが届いたら、文脈を読んで返信案を用意します。送るかどうかは、きみが決めてください。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">📊</span>
              <div>
                <p class="font-bold text-gray-900 mb-1">活動を記録するたびに、受注確率を計算し直します</p>
                <p class="text-sm text-gray-600 leading-relaxed">MEDDPICC 情報が増えるたびに、数字が動きます。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">💬</span>
              <div>
                <p class="font-bold text-gray-900 mb-1">気になることは <code class="bg-gray-100 text-kurage-700 px-1.5 py-0.5 rounded text-sm">/kurage</code> で教えてください</p>
                <p class="text-sm text-gray-600 leading-relaxed">ぼくが覚えておきます。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 正規版で追加される機能 -->
        <div class="bg-kurage-900/5 border border-kurage-200 rounded-2xl p-6 md:p-8 mb-8">
          <div class="flex items-center gap-2 mb-5">
            <span class="text-xl">🌊</span>
            <h3 class="text-xl font-black text-gray-700">正規版リリースで追加される予定</h3>
          </div>
          <div class="space-y-5">
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">📈</span>
              <div>
                <p class="font-bold text-gray-700 mb-1">アナリティクスダッシュボード</p>
                <p class="text-sm text-gray-500 leading-relaxed">月別推移・ステージ別件数・活動種別・成約率など。数字で営業を振り返れるようにします。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">💌</span>
              <div>
                <p class="font-bold text-gray-700 mb-1">メールの感情読み取り（センチメント分析）</p>
                <p class="text-sm text-gray-500 leading-relaxed">「難しいですね」という返信を、ぼくが読み取って受注確率に反映します。今は /coach での手動更新です。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">📝</span>
              <div>
                <p class="font-bold text-gray-700 mb-1">グラウンディング型ドラフト生成</p>
                <p class="text-sm text-gray-500 leading-relaxed">「半年活動のない顧客に AI 動向のメールを書いて」のような指示で、顧客情報と外部知識を組み合わせた下書きを生成します。</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl flex-shrink-0">📖</span>
              <div>
                <p class="font-bold text-gray-700 mb-1">/guide 用語集</p>
                <p class="text-sm text-gray-500 leading-relaxed">クラゲディールで使う言葉の意味を、いつでも調べられます。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- クロージング — クラゲくん語り口 -->
        <div class="bg-white border-2 border-kurage-200 rounded-2xl p-6 text-center shadow-sm">
          <p class="text-base text-gray-700 leading-relaxed mb-3">
            まだ完成していないものがあります。<br />
            でもぼくは、毎日覚えることが増えています。
          </p>
          <p class="text-base text-gray-700 leading-relaxed mb-4">
            きみが使うたびに、ぼくは育ちます。<br />
            よろしくお願いします。
          </p>
          <p class="text-kurage-500 font-bold flex items-center justify-end gap-2">— クラゲくん <img src="/kurage-smile.svg" alt="クラゲくん" class="w-6 h-6 inline-block" /></p>
        </div>
      </div>
    </section>

    <!-- ============================================================
         08. 料金（β 特典強調）
    ============================================================ -->
    <section id="pricing" class="bg-ocean-sand py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <p class="text-2xl font-bold text-gray-800 mb-3">料金</p>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">シンプルな料金体系</h2>
          <p class="text-gray-700">ユーザー数課金なし。チーム全員で使えます。</p>
        </div>

        <!-- 4 プラン -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div
            v-for="(plan, i) in pricing"
            :key="i"
            :class="[
              'rounded-2xl p-6 bg-white border-2 transition-shadow flex flex-col',
              plan.featured ? 'border-kurage-500 shadow-lg' : 'border-gray-200'
            ]"
          >
            <div v-if="plan.featured" class="inline-block bg-kurage-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
              ★ 最人気
            </div>
            <div v-else-if="plan.badge" class="inline-block bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
              {{ plan.badge }}
            </div>
            <h3 class="text-xl font-black text-gray-900 mb-2">{{ plan.name }}</h3>
            <p
              :class="[
                'font-black text-gray-900 mb-4 whitespace-nowrap',
                plan.price.length > 5 ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl',
              ]"
            >
              {{ plan.price }}<span v-if="plan.priceNote" class="text-sm text-gray-500 font-normal ml-1">{{ plan.priceNote }}</span>
            </p>
            <ul class="space-y-2 mb-4 flex-1">
              <li v-for="(f, j) in plan.features" :key="j" class="flex items-start gap-2 text-sm">
                <span class="text-green-500">✅</span>
                <span class="text-gray-700">{{ f.label }}</span>
              </li>
            </ul>
            <p class="text-xs text-gray-500 mb-3">{{ plan.startNote }}</p>
            <a v-if="plan.cta" :href="plan.checkoutUrl" :class="[
              'block text-center px-5 py-3 rounded-xl font-bold text-sm transition-colors',
              plan.featured
                ? 'bg-orange-500 hover:bg-orange-400 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            ]">{{ plan.cta }}</a>
          </div>
        </div>

        <!-- 全プラン共通 注記 -->
        <div class="bg-kurage-50 border border-kurage-200 rounded-xl p-4 text-center mb-12">
          <p class="text-sm text-gray-700 font-bold">
            ★ 上記は正式版（11/18 目標 ※QC 次第でリスケあり）の料金です。正式版では全プラン共通で 14 日間の無料トライアルが付きます。
          </p>
          <p class="text-xs text-gray-500 mt-1">
            いまは下記のβ版なら、9/15 まで全機能を無料でお使いいただけます（クレジットカード入力不要）。
          </p>
        </div>

        <!-- β 試用枠 -->
        <div class="bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 border-2 border-orange-400 rounded-2xl p-8 md:p-10 shadow-lg">
          <div class="text-center mb-6">
            <div class="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              3 ヶ月間、全機能を無料で（9/15 まで）
            </div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-900 mb-2">β 試用</h3>
          </div>

          <div class="bg-white rounded-xl p-6 mb-6 text-center">
            <p class="text-3xl md:text-4xl font-black text-orange-600 mb-2">3 ヶ月無料</p>
            <p class="text-sm text-gray-700">9/15 まで、すべての機能を、クレカ不要で。</p>
            <p class="text-sm text-gray-700 font-bold mt-3">審査なし・即時アクティベート</p>
          </div>

          <div class="flex justify-center mb-6">
            <ul class="text-sm text-gray-700 leading-relaxed space-y-1.5 inline-block text-left">
              <li>✅ Slack に追加するだけで即時アクティベート</li>
              <li>✅ クレジットカード入力不要</li>
              <li>✅ データはいつでも CSV / Excel でエクスポート可能</li>
              <li class="text-xs text-gray-500">正式版は 11/18 を目標にしています（品質目標 次第でリスケすることがあります）。</li>
            </ul>
          </div>

          <div class="text-center">
            <a
              href="/beta"
              class="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors"
            >
              β 版を試す →
            </a>
            <p class="text-xs text-gray-600 mt-3">
              継続オプションの詳細は /beta ページでご案内しています。
            </p>
          </div>
        </div>

        <!-- Enterprise 補足 -->
        <div class="mt-12 max-w-2xl mx-auto bg-gradient-to-br from-kurage-50 via-cyan-50 to-ocean-mist/60 rounded-2xl border border-kurage-200 p-8">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Enterprise プラン について</h3>
          <p class="text-sm text-gray-700 mb-4 leading-relaxed">
            11 人以上のチーム・カスタマイズが必要な企業向けに、Enterprise プランをご用意しています。
          </p>
          <ul class="space-y-2 text-sm text-gray-700 mb-6">
            <li>・ユーザー数に応じた個別見積もり</li>
            <li>・カスタム機能開発のご相談</li>
            <li>・優先サポート</li>
            <li>・SSO・セキュリティ要件への対応</li>
          </ul>
          <a
            href="/contact?subject=enterprise"
            class="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            Enterprise についてご相談 →
          </a>
          <p class="text-xs text-gray-500 mt-4 leading-relaxed">
            ※ クラゲディールは小規模営業チーム向けに最適化された製品です。
            大規模なエンタープライズ用途では Salesforce 等の選択肢もご検討いただくことをお勧めしています。
            弊社（Salesforce 認定コンサルティングパートナー）が、最適な選択をご一緒に検討します。
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================================
         09. 仲間（β 4 社）— 各社の許諾取得まで非表示
    ============================================================ -->
    <!--
    <section id="pioneers" class="bg-white py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-2xl font-bold text-gray-800 mb-3">Pioneers</p>
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">すでに、選んでくださった会社があります。</h2>
        <p class="text-gray-700 leading-relaxed mb-10">
          2026 年 5 月、プライベート β を開始しました。<br />
          最初の仲間は、4 社の経営層でした。
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div v-for="p in pioneers" :key="p.name" class="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center">
            <p class="text-3xl mb-2">{{ p.icon }}</p>
            <p class="font-bold text-gray-900 mb-1">{{ p.name }}</p>
            <p class="text-xs text-gray-500">{{ p.industry }}</p>
          </div>
        </div>

        <p class="text-sm text-gray-600 leading-relaxed">
          共通するのは、「Slack で営業を回す現場」を持っていること。<br />
          そしてみなさん、経営層が直接、毎日触ってくださっています。
        </p>
        <p class="text-sm text-gray-500 mt-4 italic">
          正式版ローンチに合わせて、もうすぐ事例公開を予定しています。
        </p>
      </div>
    </section>
    -->

    <!-- ============================================================
         10. FAQ
    ============================================================ -->
    <section id="faq" class="bg-ocean-tan/80 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center">よくあるご質問</h2>

        <div class="space-y-3">
          <details
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-white border border-gray-200 rounded-xl group"
          >
            <summary class="font-semibold text-gray-900 cursor-pointer p-5 flex items-center justify-between list-none">
              <span>{{ faq.q }}</span>
              <span class="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3">▼</span>
            </summary>
            <p class="text-sm text-gray-700 px-5 pb-5 leading-relaxed whitespace-pre-line">{{ faq.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- ============================================================
         11. 最終 CTA + β 参加プログラム告知
    ============================================================ -->
    <section class="bg-gradient-to-br from-kurage-900 to-kurage-700 text-white py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <img src="/kurage-smile.svg" alt="クラゲディール" class="w-20 h-20 mx-auto mb-6 kurage-float" />

        <p class="text-base text-kurage-100 mb-3 leading-relaxed">
          ここまで読んでくれたんですね。<br />
          ぼく、全部覚えてますよ。
        </p>
        <p class="text-base text-kurage-100 mb-10 leading-relaxed">
          もし「自分の営業チームに合いそうだ」と思ったなら、<br />
          9/15 まで、3 ヶ月間ぼくを試してみてください。<br />
          <span class="text-kurage-200 text-sm">きみが使うたびに、ぼくは覚えていきます。</span>
        </p>

        <!-- β 試用（self-serve 主訴求を最大化、副 CTA なし） -->
        <div class="bg-orange-500/15 border border-orange-400/40 rounded-2xl p-6 md:p-8 mb-8">
          <p class="text-base font-bold text-orange-200 mb-3 text-center">3 ヶ月間、無料で試せます（9/15 まで）。</p>
          <div class="flex justify-center mb-5">
            <ul class="space-y-2 text-sm text-kurage-50 inline-block text-left">
              <li>✅ Slack に追加するだけで、即時アクティベート</li>
              <li>✅ 9/15 まで、すべての機能を完全無料で</li>
              <li>✅ クレジットカード入力不要・審査なし</li>
              <li>✅ データはいつでも CSV / Excel エクスポート可能</li>
            </ul>
          </div>
          <div class="text-center">
            <a
              href="/beta"
              class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              β 版を試す →
            </a>
          </div>
        </div>

        <p class="text-xs text-kurage-200 mb-3">
          それまで、note と X で開発状況をお伝えしています。
        </p>
        <div class="flex justify-center gap-4 mb-10 text-xs text-kurage-200">
          <a href="#" class="underline hover:text-white">note</a>
          <a href="#" class="underline hover:text-white">X</a>
        </div>

        <p class="text-kurage-300 text-xs">
          🌊 売上の一部は、<a href="https://www.nippon-foundation.or.jp/donation/ocean-project-fund" target="_blank" rel="noopener" class="underline hover:text-white transition-colors">日本財団 海洋プロジェクト基金</a>に寄付されます。
        </p>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
// LP_FULL_COPY 最新版: ウェイトリスト関連 CTA は /beta ページ内のみで提示
// （メイン LP は β 試用の self-serve 主訴求を最大化、副 CTA なし）

const personas = [
  { icon: '🏢', text: '社員5人のIT企業。社長が営業も兼務。商談管理はスプレッドシート' },
  { icon: '👥', text: '営業3人の人材会社。CRMを導入したが誰も入力しない' },
  { icon: '🚀', text: '6人のスタートアップ。急成長で商談が増え、フォロー漏れが出始めた' },
  { icon: '🔧', text: '一人社長のコンサル。クライアント20社の関係を頭の中で管理している' },
]

const pain1Chips = [
  { icon: '🎯', title: 'ディールベース', desc: 'ディール 1 画面に、商談・顧客・活動を集約' },
  { icon: '💬', title: 'Slack だけで完結', desc: '新しいアプリも研修も、いらない' },
  { icon: '💰', title: 'Slack をそのまま使う', desc: '今のプランで、強力な営業ツールに' },
]

const pain2Chips = [
  { icon: '🌅🌆', title: '朝夕のブリーフィング', desc: '1 日のはじめと終わりに、AI が伴走' },
  { icon: '🧠', title: 'AI が受注確率を自動更新', desc: 'MEDDPICC 情報が増えるたびに計算し直す' },
  { icon: '⚠️', title: '14 日停滞、自動検知', desc: '忘れ去られる前にアラート' },
]

const pain3Chips = [
  { icon: '🎓', title: 'MEDDPICC コーチング', desc: 'AI が全員に質の高い問いかけ' },
  { icon: '🧭', title: '営業ノウハウの形式知化', desc: 'マネジャー個人の判断を、AI に' },
  { icon: '🌙', title: '24 時間動く', desc: 'マネジャーの不在時間も埋める' },
]

const replyAssistChips = [
  { icon: '✍️', title: 'AI 代筆', desc: '過去文脈を踏まえた自然な返信' },
  { icon: '💌', title: '自社送信', desc: 'いつもの社内メールアドレスから' },
  { icon: '🎚', title: '編集自由', desc: '承認前に必要なら手直し可能' },
]

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

const pricing = [
  {
    name: 'Personal',
    price: '¥1,980',
    priceNote: '/ 月',
    featured: false,
    cta: '',
    checkoutUrl: '',
    startNote: '14 日間無料トライアル・クレカ不要',
    features: [
      { ok: true, label: '1 名まで' },
      { ok: true, label: 'AI 月 100 回' },
      { ok: true, label: '全機能' },
    ],
  },
  {
    name: 'Trio',
    price: '¥4,980',
    priceNote: '/ 月',
    featured: false,
    badge: '★ Solo 3名まで',
    cta: '',
    checkoutUrl: '',
    startNote: '14 日間無料トライアル・クレカ不要',
    features: [
      { ok: true, label: '3 名まで' },
      { ok: true, label: 'AI 月 500 回' },
      { ok: true, label: '全機能' },
    ],
  },
  {
    name: 'Standard',
    price: '¥9,800',
    priceNote: '/ 月',
    featured: true,
    cta: '',
    checkoutUrl: '',
    startNote: '14 日間無料トライアル・クレカ不要',
    features: [
      { ok: true, label: '10 名まで' },
      { ok: true, label: 'AI 月 5,000 回' },
      { ok: true, label: '全機能' },
    ],
  },
  {
    name: 'Enterprise',
    price: 'お問い合わせ',
    priceNote: '',
    featured: false,
    cta: 'ご相談',
    checkoutUrl: '/contact?subject=enterprise',
    startNote: '11 名以上・個別対応',
    features: [
      { ok: true, label: '11 名以上' },
      { ok: true, label: 'AI 個別設定' },
      { ok: true, label: '全機能' },
      { ok: true, label: '優先サポート' },
      { ok: true, label: 'カスタマイズ対応' },
    ],
  },
]

const pioneers = [
  { name: 'OPRO',    icon: '📦', industry: '帳票・CRM SaaS' },
  { name: 'Opti',    icon: '🛒', industry: 'eコマース・D2C' },
  { name: 'WeLearn', icon: '🎓', industry: '人材・教育' },
  { name: 'SI Inc',  icon: '🏗', industry: 'SI・受託' },
]

const faqs = [
  {
    q: 'β 試用は本当に無料ですか？',
    a: 'はい。クレジットカード入力も不要、審査もありません。\n3 ヶ月間（9/15 一斉終了）、すべての機能を無料でお試しいただけます。Slack に追加するだけで即時アクティベートします。\n正式版は 11/18 を目標にしています（品質目標 次第でリスケすることがあります）。継続オプションの詳細は /beta ページでご案内しています。',
  },
  {
    q: '従来の Slack 連携 CRM との違いは？',
    a: 'クラゲディールは「Slack そのものが営業ツール」として設計されています。従来の Slack 連携 CRM では、別途 CRM の利用契約が必要で、Slack は「通知パイプ」や「lightweight な機能」の役割にとどまります。クラゲディールは MEDDPICC コーチング・自動メール下書きなど、営業に特化した深い AI 機能を Slack 内で完結して提供します。また、ユーザー数課金がないため、チームが大きくなっても月額が一定です。',
  },
  {
    q: '将来、別の CRM に移行できますか？',
    a: 'はい。クラゲディールのデータはいつでも CSV / Excel でエクスポート可能です。組織が成長してより大規模な CRM が必要になった際、弊社は Salesforce 認定コンサルティングパートナーとして、移行先の選定からデータマイグレーションまでスムーズに支援します。',
  },
  {
    q: '11 人以上の営業チームでも使えますか？',
    a: 'クラゲディールは 1〜10 人の小規模営業チームに最適化された製品です。11 人以上のチームは Enterprise プラン（個別見積もり）で対応します。ユーザー数・必要な機能・セキュリティ要件等に応じてご提案します。\n30 人を超える大規模チームでは、Salesforce 等の選択肢もご検討いただくことをお勧めしています。弊社は Salesforce 認定コンサルティングパートナーとして、最適な選択をご一緒に検討します。',
  },
  {
    q: '既存の Slack ワークスペースに導入できますか？',
    a: 'はい。既存の Slack ワークスペースに「クラゲディールを追加」ボタン 1 つで完了します。新しいワークスペースを作る必要はありません。',
  },
  {
    q: 'Slack を使っていない会社でも使えますか？',
    a: 'クラゲディールは Slack ワークスペースが前提です。Slack の Free プランでも導入できますので、まず Slack を導入していただくことをお勧めします。',
  },
  {
    q: 'データのセキュリティは大丈夫ですか？',
    a: 'データは Google Cloud Platform 上で管理され、通信は SSL/TLS で暗号化されています。テナントごとに PostgreSQL の Row-Level Security で物理的に分離。お客様の営業データが AI の学習に使用されることはありません。',
  },
  {
    q: 'チャンネルで使うと、ほかのメンバーに自分の営業データを見られませんか？',
    a: '使う場所で選べます。\n・DM（クラゲディール App との個別チャット）で使えば完全プライベートです。あなたの入力もクラゲの回答も、ほかの人には見えません。各自の機密パイプラインはこちらがおすすめです。\n・共有チャンネルで使うと、そのチャンネルのメンバー全員に発言とクラゲの回答が見えます（Slack の仕様）。チームで意図的に共有したい場合に向いています。\nなお、データ自体も担当者ごとに分離されており、一般メンバーは自分が担当するディール・顧客のみ閲覧できます（マネージャーはチーム全体）。',
  },
  {
    q: 'AI が提案する受注確率はどのように計算されますか？',
    a: '活動記録と MEDDPICC 情報（決裁者との接触 / 予算の根拠確認 / 競合の把握など）を AI が分析して更新します。/coach で情報を入力するたびに計算し直されます。14 日間動きがない場合は時間減衰で自動的に下方修正されます。',
  },
]

// ── SEO / AIO メタ ───────────────────────────────────────
usePageSeo({
  path: '/',
  title: 'クラゲディール — Slackだけで完結するAI営業CRM',
  description:
    'Slack に一言書くだけで CRM 入力が完了。AI が営業コーチとして毎朝ブリーフィングし、受注確率・次のアクション・メール下書きを支援します。1〜10 人の営業チームで月¥9,800。いまならβ版を 3 ヶ月無料（9/15 まで・クレカ不要）。',
})

// SoftwareApplication 構造化データ（料金は正準モデルに一致。虚偽 rating は入れない）
const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'クラゲディール',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Slack',
  url: 'https://kuragedeal.ai',
  description:
    'Slack に書くだけで CRM 入力が完了する AI 営業 CRM。AI が MEDDPICC コーチング・受注確率の算出・メール下書きを支援する。ユーザー数課金なし。',
  offers: [
    {
      '@type': 'Offer',
      name: 'β 試用（3 ヶ月無料・2026/9/15 まで）',
      price: 0,
      priceCurrency: 'JPY',
      description: 'β 期間中は全機能を 3 ヶ月無料で利用可能（2026/9/15 一斉終了・クレジットカード不要・審査なし）。',
    },
    {
      '@type': 'Offer',
      name: 'Personal（正式版・2026/11/18 目標）',
      price: 1980,
      priceCurrency: 'JPY',
      description: '1 名まで。正式版では 14 日間の無料トライアル付き。',
    },
    {
      '@type': 'Offer',
      name: 'Trio（正式版・2026/11/18 目標）',
      price: 4980,
      priceCurrency: 'JPY',
      description: '3 名まで。正式版では 14 日間の無料トライアル付き。',
    },
    {
      '@type': 'Offer',
      name: 'Standard（正式版・2026/11/18 目標）',
      price: 9800,
      priceCurrency: 'JPY',
      description: '10 名まで。正式版では 14 日間の無料トライアル付き。',
    },
  ],
  publisher: { '@type': 'Organization', name: '株式会社shiro' },
}

// FAQPage 構造化データ（表示中の faqs 配列からそのまま生成 → 表示と完全一致）
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(softwareLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqLd) },
  ],
})
</script>

<style scoped>
@keyframes float {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-16px); }
  100% { transform: translateY(0px); }
}

.kurage-float {
  animation: float 4s ease-in-out infinite;
}

/* details の summary をモダンに */
details summary::-webkit-details-marker {
  display: none;
}
</style>
