<template>
  <main class="pt-16 min-h-screen">
    <!-- ============================================================
         イントロ
    ============================================================ -->
    <section class="bg-ocean-deep py-16 md:py-20 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-orange-300 font-bold tracking-widest mb-3">あるある お悩み</p>
        <h1 class="text-3xl md:text-4xl font-black mb-4 leading-tight">
          営業の“あるある”お悩み、ありませんか？
        </h1>
        <p class="text-white/80 leading-relaxed">
          CRM が続かない・進捗が見えない・マネジャーが足りない——<br class="hidden md:block" />
          多くの営業チームがぶつかる 3 つの壁。クラゲディールがどう解くか、順に見ていきます。
        </p>
        <a href="/" class="inline-block mt-6 text-sm text-cyan-200 underline hover:text-white">← クラゲディール トップへ</a>
      </div>
    </section>

    <!-- ============================================================
         あるある 1: CRM が続かない
    ============================================================ -->
    <section id="pain1" class="bg-ocean-mist/40 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-cry.png" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
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

        <!-- 次セクションへの繋ぎ -->
        <p class="text-center text-gray-800 mt-12 text-xl md:text-2xl font-black leading-relaxed">
          でも、それだけじゃ足りません。<br />次は「営業の進捗が、見えない」問題です。
        </p>
      </div>
    </section>

    <!-- ============================================================
         あるある お悩み 2: 進捗が見えない
    ============================================================ -->
    <section id="pain2" class="bg-ocean-steel/75 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-anger.png" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
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
          <SlackMessageMock channel-name="💬 クラゲディール（DM）">
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

          <SlackMessageMock channel-name="💬 クラゲディール（DM）">
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
        <p class="text-center text-sm text-gray-600 mb-12 italic">毎朝・毎夕、あなたの DM に届きます。</p>

        <!-- 3 つの特徴チップ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(c, i) in pain2Chips" :key="i" class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">{{ c.icon }}</p>
            <p class="font-bold text-gray-900 mb-1">{{ c.title }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>

        <p class="text-center text-gray-800 mt-12 text-lg md:text-xl font-bold leading-relaxed">
          でも、まだあります。<br />次は「営業マネジャーが、足りない」問題です。
        </p>
      </div>
    </section>

    <!-- ============================================================
         あるある お悩み 3: マネジャーが足りない
    ============================================================ -->
    <section id="pain3" class="bg-ocean-mist/40 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-cry.png" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
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
            </p>
          </div>

          <p class="text-base font-bold text-kurage-800 mt-6 leading-relaxed">
            「マネジャーをもう 1 人雇うか？」<br />
            ★ その判断の前に、AI マネジャーを試してみてください。
          </p>
        </div>

        <!-- /coach Slack mock -->
        <div class="mb-8 max-w-2xl mx-auto">
          <SlackMessageMock channel-name="💬 クラゲディール（DM）">
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
      </div>
    </section>

    <!-- ============================================================
         クロージング CTA（本体へ戻す）
    ============================================================ -->
    <section class="bg-gradient-to-br from-kurage-900 to-kurage-700 text-white py-20">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl md:text-3xl font-black mb-4 leading-relaxed">
          3 つのお悩みを、Slack の中で。
        </h2>
        <p class="text-white/85 leading-relaxed mb-8">
          そして顧客からの返信メールも、AI が下書きします。<br />
          ボタンを押すだけ・話しかけるだけ。クラゲディールを見てみてください。
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/" class="inline-flex items-center justify-center gap-2 bg-white text-kurage-700 font-bold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors">
            ← クラゲディールを見る
          </a>
          <a href="/free" class="inline-flex items-center justify-center gap-2 bg-kurage-500 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-kurage-400 transition-colors ring-1 ring-white/30">
            β を無料で試す →
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
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

usePageSeo({
  path: '/pains',
  title: '営業の“あるある”お悩み | クラゲディール',
  description:
    'CRM が続かない・営業の進捗が見えない・営業マネジャーが足りない。多くの営業チームがぶつかる 3 つのお悩みと、クラゲディールが Slack の中でどう解くかを紹介します。',
})
</script>
