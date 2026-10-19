<template>
  <LpFrame main-id="pains">
    <!-- イントロ -->
    <section class="p-pains-hero">
      <div class="c-sec-ttl">
        <p class="c-sec-ttl__en" lang="en">Pains</p>
        <h1 class="c-sec-ttl__ja">営業の“あるある”<br />お悩み、ありませんか？</h1>
      </div>
      <p class="c-lead">
        CRM が続かない・進捗が見えない・マネジャーが足りない——<br />
        多くの営業チームがぶつかる 3 つの壁。クラゲディールがどう解くか、順に見ていきます。
      </p>
      <p class="p-pains-hero__back"><a href="/">← クラゲディール トップへ</a></p>
    </section>

    <!-- あるある 1: CRM が続かない -->
    <section class="p-pains__block" id="pain1">
      <img class="p-pains__fig" src="/lp/img/issue01.png" alt="" />
      <p class="p-pains__label">あるある お悩み 1</p>
      <h2 class="p-pains__ttl">CRM が、続かない。</h2>

      <div class="p-pains__voice">
        <p class="p-pains__voice-quote">「うちは CRM/SFA を入れたんですが、誰も入力しないんですよ」</p>
        <p class="p-pains__voice-text">
          入力に 1 日 30 分。<br />
          営業 10 人 × 月 20 日 × 0.5 時間 × 時給 ¥3,000 = 月 ¥300,000 の隠れコスト。
        </p>
        <p class="p-pains__voice-text">
          でも本当の問題はコストじゃなくて、<br />
          <strong>「データが揃わないから、AI を活かせない」</strong>ことです。
        </p>
      </div>

      <h3 class="p-pains__sub">なぜ続かないのか。答えはふたつ。</h3>
      <div class="p-pains__causes">
        <div class="p-pains__cause">
          <p class="p-pains__cause-ttl">① 入力の手間が、高すぎるから。</p>
          <p class="p-pains__cause-text">
            CRM にログインして、画面を開いて、ディール項目を埋めて、保存して、活動記録のページを出して、また入力して……
            ── 営業マンは、もう次のお客様に行きたい。
          </p>
        </div>
        <div class="p-pains__cause">
          <p class="p-pains__cause-ttl">② 入力する人に、何のご褒美もないから。</p>
          <p class="p-pains__cause-text">
            書いた内容が、自分の営業活動を前に進めるわけではない。<br />
            ただのコストでしかない。
          </p>
        </div>
      </div>

      <div class="p-pains__solution">
        <p class="p-pains__solution-head">★ クラゲディールは、こんなストレスから営業マンを解放します！</p>
        <div class="p-pains__solution-body">
          <p>
            Slack の<strong>［📝 活動をメモ］から書く</strong>。「田中さんと面談しました。予算 300 万」。<br />
            それだけで、AI がディールを更新し、ディール確度を計算し、<br />
            明日 AI コーチが「次は決裁者と会う段取りを」と問いかけてくれる。
          </p>
          <p class="p-pains__solution-strong">
            入力の手間ゼロ。書くたびに、営業活動が前に進む。<br />
            ★ これなら、続きます。
          </p>
        </div>
      </div>

      <p class="p-pains__next">でも、それだけじゃ足りません。<br />次は「営業の進捗が、見えない」問題です。</p>
    </section>

    <!-- あるある 2: 進捗が見えない -->
    <section class="p-pains__block p-pains__block--alt" id="pain2">
      <img class="p-pains__fig" src="/lp/img/issue02.png" alt="" />
      <p class="p-pains__label">あるある お悩み 2</p>
      <h2 class="p-pains__ttl">営業の進捗が、見えない。</h2>

      <div class="p-pains__voice">
        <p class="p-pains__voice-quote">
          「あの案件、進んでる？」<br />
          「先週の田中さんの件、どうなった?」<br />
          「うちのチーム、いま何件抱えてるんだっけ?」
        </p>
        <p class="p-pains__voice-text">毎週、営業マネジャーが部下に聞いて回る、この時間。</p>
        <p class="p-pains__voice-text">
          聞かれた部下も、悪いわけじゃない。<br />
          記憶に頼って、何件もの案件を追いかけているのだから。
        </p>
        <p class="p-pains__voice-text">
          でも、<strong>この時間こそが「営業の見えない時間」</strong>です。
        </p>
      </div>

      <h3 class="p-pains__sub">なぜ進捗が見えなくなるのか。答えはふたつ。</h3>
      <div class="p-pains__causes">
        <div class="p-pains__cause">
          <p class="p-pains__cause-ttl">① 案件数が増えると、人の記憶では追えない。</p>
          <p class="p-pains__cause-text">
            営業 5 人 × 案件 10 件 = 50 件。<br />
            各案件に「金額・ステージ・次の一手・最後の連絡日」がある。<br />
            ── 人の頭で追える限界を、とっくに超えています。
          </p>
        </div>
        <div class="p-pains__cause">
          <p class="p-pains__cause-ttl">② 動いていない案件は、誰の目にも入らない。</p>
          <p class="p-pains__cause-text">
            動いている案件は連絡が来るので目立つ。<br />
            けれど、本当に問題なのは「動いていない案件」の方。<br />
            「2 週間連絡してない」「気づいたら止まっていた」<br />
            ── 失注の多くは、こうして生まれます。
          </p>
        </div>
      </div>

      <div class="p-pains__solution">
        <p class="p-pains__solution-head">★ クラゲディールは、見えないものを、見えるようにします。</p>
        <div class="p-pains__solution-body">
          <div class="p-pains__solution-item">
            <p class="p-pains__solution-item-ttl">🌅 朝 9 時。今日のフォーカスが、Slack に届く。</p>
            <p class="p-pains__solution-item-text">
              「今日対応すべき案件は 3 件です。<br />
              ABC 商事 田中様: 提案書送付期日が今日。<br />
              XYZ 社 山田様: 14 日間動きなし、フォロー推奨。<br />
              DEF 株式会社 佐藤様: クロージング前の確認を。」
            </p>
          </div>
          <div class="p-pains__solution-item">
            <p class="p-pains__solution-item-ttl">🌆 夕方 17 時。1 日の振り返りと、明日の予告が届く。</p>
            <p class="p-pains__solution-item-text">
              「今日、3 件のうち 2 件が前進しました。<br />
              動きのなかった 1 件は、明日朝一で連絡を。<br />
              ── 退勤前に、明日が整理されます。」
            </p>
          </div>
          <div class="p-pains__solution-item">
            <p class="p-pains__solution-item-ttl">🧠 MEDDPICC 情報が更新されるたびに、ディール確度が動く。</p>
            <p class="p-pains__solution-item-text">
              決裁者と会えた。予算の根拠を確認した。競合を把握した。<br />
              ── そのたびに、クラゲくんがディール確度を見立て直します。<br />
              数字が動くから、今どこにいるかが見える。
            </p>
          </div>
          <div class="p-pains__solution-item">
            <p class="p-pains__solution-item-ttl">⚠️ 14 日間動きのない案件は、AI が自動検知して警告。</p>
            <p class="p-pains__solution-item-text">
              「忘れ去られる前に、フォローしましょう」と Slack に届く。<br />
              ── 動いていない案件にこそ、光が当たります。
            </p>
          </div>
          <p class="p-pains__solution-strong">
            マネジャーが聞き回らなくても、案件の状況が、立ち上がる。<br />
            ★ それが、進捗が見える営業チームです。
          </p>
        </div>
      </div>

      <!-- 朝夕の Slack ブリーフィング 2 枚モック -->
      <div class="p-pains__mock">
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
            <p class="font-bold mb-2">☀️ 今日のブリーフィング</p>
            <div class="bg-orange-50 border-l-2 border-orange-400 pl-3 py-2 mb-2">
              <p class="font-semibold">🔥 クローズ間近（ディール確度70%以上）</p>
              <p class="text-xs text-gray-600">ABC商事／田中様の提案　¥3M — ディール確度 72%</p>
            </div>
            <div class="bg-yellow-50 border-l-2 border-yellow-400 pl-3 py-2 mb-2">
              <p class="font-semibold">🚨 見直し候補（しばらく動きがないディール）</p>
              <p class="text-xs text-gray-600">XYZ社／山田様の案件 — 16日 連絡なし／ディール確度 25%</p>
            </div>
            <div class="bg-cyan-50 border-l-2 border-cyan-400 pl-3 py-2">
              <p class="font-semibold">📈 ディール確度アップ</p>
              <p class="text-xs text-gray-600">DEF社／佐藤様の案件　60% → 75%</p>
            </div>
          </SlackBotLine>
        </SlackMessageMock>
      </div>
      <div class="p-pains__mock">
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="17:00">
            <p class="font-bold mb-2">🌆 今日の振り返り・明日への引き継ぎ</p>
            <div class="bg-green-50 border-l-2 border-green-400 pl-3 py-2 mb-2">
              <p class="font-semibold">📈 今日の進捗</p>
              <p class="text-xs text-gray-600">3件のうち 2件でディール確度が前進</p>
            </div>
            <div class="bg-yellow-50 border-l-2 border-yellow-400 pl-3 py-2 mb-2">
              <p class="font-semibold">🎯 次の一手</p>
              <p class="text-xs text-gray-600">XYZ社／山田様 — 明日朝一で連絡を</p>
            </div>
            <div class="bg-cyan-50 border-l-2 border-cyan-400 pl-3 py-2">
              <p class="font-semibold">🌟 明日の重点</p>
              <p class="text-xs text-gray-600">DEF社／佐藤様 — クロージング確認</p>
            </div>
          </SlackBotLine>
        </SlackMessageMock>
      </div>
      <p class="p-pains__mock-note">毎朝・毎夕、あなたの DM に届きます。</p>

      <div class="p-pains__chips">
        <div class="p-pains__chip" v-for="(c, i) in pain2Chips" :key="i">
          <p class="p-pains__chip-icon">{{ c.icon }}</p>
          <p class="p-pains__chip-ttl">{{ c.title }}</p>
          <p class="p-pains__chip-text">{{ c.desc }}</p>
        </div>
      </div>

      <p class="p-pains__next">でも、まだあります。<br />次は「営業マネジャーが、足りない」問題です。</p>
    </section>

    <!-- あるある 3: マネジャーが足りない -->
    <section class="p-pains__block" id="pain3">
      <img class="p-pains__fig" src="/lp/img/issue03.png" alt="" />
      <p class="p-pains__label">あるある お悩み 3</p>
      <h2 class="p-pains__ttl">営業マネジャーが、足りない。</h2>

      <div class="p-pains__voice">
        <p class="p-pains__voice-quote">
          「うちの営業マネジャー、本当によくやってくれてる」<br />
          「でも 1 人で 5 人分のチームを見るのは限界」<br />
          「もう 1 人雇いたいけど、年収 800 万円……」
        </p>
        <p class="p-pains__voice-text">
          優秀な営業マネジャーは、いつもチームに問いかけています。<br />
          「あの案件、決裁者と会えてる？」「予算の根拠、確認した？」「競合は把握してる？」
        </p>
        <p class="p-pains__voice-text">
          その問いかけが、若手を育てる。<br />
          その問いかけが、案件を前に進める。
        </p>
        <p class="p-pains__voice-text">
          でも、マネジャーは 1 人。チームは増えていく。<br />
          <strong>★ 全員に同じ質を、毎日届けるのは、無理なのです。</strong>
        </p>
      </div>

      <h3 class="p-pains__sub">なぜマネジャーが足りなくなるのか。答えはふたつ。</h3>
      <div class="p-pains__causes">
        <div class="p-pains__cause">
          <p class="p-pains__cause-ttl">① 物理的限界 — 1 人で全員を見られない。</p>
          <p class="p-pains__cause-text">
            案件 50 件、メンバー 5 人。週 1on1 だけで 5 時間。<br />
            それで案件の細かい状況まで把握できるわけがない。
          </p>
        </div>
        <div class="p-pains__cause">
          <p class="p-pains__cause-ttl">② 属人化 — 営業ノウハウが、マネジャー個人に閉じている。</p>
          <p class="p-pains__cause-text">
            「決裁者に会う」「予算の根拠を確認する」「競合を把握する」<br />
            ── これらの判断は、ほとんどがマネジャーの頭の中。<br />
            メンバーが入れ替わるたびに、伝授しなおしです。
          </p>
        </div>
      </div>

      <div class="p-pains__solution">
        <p class="p-pains__solution-head">★ クラゲディールの AI が、マネジャーの分身になります。</p>
        <div class="p-pains__solution-body">
          <div class="p-pains__solution-item">
            <p class="p-pains__solution-item-ttl">🎓 /coach コマンドで、AI が MEDDPICC で深掘り。</p>
            <p class="p-pains__solution-item-text">
              「ABC 商事の状況は？」と聞くだけ。<br />
              AI が問い返します:<br />
              ・決裁者と会えていますか？(Economic Buyer)<br />
              ・予算の根拠は確認済みですか？(Metrics)<br />
              ・競合は把握していますか？(Competition)<br />
              ── 全メンバー、全案件に、同じ質の問いかけを。
            </p>
          </div>
          <div class="p-pains__solution-item">
            <p class="p-pains__solution-item-ttl">🌙 マネジャーが寝ている間も、AI は動く。</p>
            <p class="p-pains__solution-item-text">
              朝のブリーフィング・夕方のコーチングは、マネジャー不在でも届く。<br />
              出張中・休暇中のメンバーも、自分の時間で AI と対話できる。<br />
              ── マネジャーがいない時間も、チームに寄りそいます。
            </p>
          </div>
          <p class="p-pains__solution-strong">
            「マネジャーをもう 1 人雇うか？」<br />
            ★ その判断の前に、AI マネジャーを試してみてください。
          </p>
        </div>
      </div>

      <!-- /coach Slack モック -->
      <div class="p-pains__mock">
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="あなた" time="14:32">
            <p>/coach ABC商事</p>
          </SlackBotLine>
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="14:32">
            <p class="font-bold mb-2">ABC 商事の状況、いくつか確認させてください</p>
            <ol class="space-y-3 list-decimal list-inside">
              <li>
                <span class="font-semibold">決裁者と会えていますか？</span>
                <span class="block text-xs text-gray-500 ml-5">(Economic Buyer)</span>
              </li>
              <li>
                <span class="font-semibold">予算 ¥3M の根拠は、お客様からの情報ですか？推測ですか？</span>
                <span class="block text-xs text-gray-500 ml-5">(Metrics)</span>
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
      <p class="p-pains__mock-note">/coach コマンド一発で、こうした問いかけが届きます。</p>

      <div class="p-pains__chips">
        <div class="p-pains__chip" v-for="(c, i) in pain3Chips" :key="i">
          <p class="p-pains__chip-icon">{{ c.icon }}</p>
          <p class="p-pains__chip-ttl">{{ c.title }}</p>
          <p class="p-pains__chip-text">{{ c.desc }}</p>
        </div>
      </div>
    </section>

    <!-- クロージング CTA -->
    <section class="c-cta c-pixel c-pixel--top-only">
      <img class="c-cta__illust" :src="KURAGE_ICON" alt="クラゲくん" />
      <h2 class="c-cta__ttl">3 つのお悩みを、<br />Slack の中で。</h2>
      <p class="c-cta__text">
        そして顧客からの返信メールも、AI が下書きします。<br />
        ボタンを押すだけ。クラゲディールを見てみてください。
      </p>
      <a class="c-btn c-cta__btn" :href="installUrl" @click="onTrialClick">14日間無料で試す</a>
    </section>
  </LpFrame>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（option A・1ページ目）。
// 枠（ヘッダー／ナビ／フッター）と base.css/common.css は LpFrame 側が読み込む。
// ここではこのページ専有セクション用の pains.css だけを読み込む。
import '~/assets/css/lp/pains.css'

const installUrl = 'https://api.kuragedeal.ai/slack/install'

const { fire } = useConversion()
function onTrialClick() {
  fire('trial')
}

const pain2Chips = [
  { icon: '🌅🌆', title: '朝夕のブリーフィング', desc: '1 日のはじめと終わりに、AI が伴走' },
  { icon: '🧠', title: 'AI がディール確度を自動更新', desc: 'MEDDPICC 情報が増えるたびに計算し直す' },
  { icon: '⚠️', title: '14 日停滞、自動検知', desc: '忘れ去られる前にアラート' },
]
const pain3Chips = [
  { icon: '🎓', title: 'MEDDPICC コーチング', desc: 'AI が全員に質の高い問いかけ' },
  { icon: '🧭', title: '営業のコツを、チーム全員のものに', desc: 'マネジャー個人の判断を、AI に' },
  { icon: '🌙', title: 'いつでも相談できる', desc: 'マネジャーの不在時間も埋める' },
]

usePageSeo({
  path: '/pains',
  title: '営業の“あるある”お悩み | クラゲディール',
  description:
    'CRM が続かない・営業の進捗が見えない・営業マネジャーが足りない。多くの営業チームがぶつかる 3 つのお悩みと、クラゲディールが Slack の中でどう解くかを紹介します。',
})
</script>
