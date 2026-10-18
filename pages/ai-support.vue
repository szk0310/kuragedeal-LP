<template>
  <LpFrame main-id="ai-support">
    <!-- イントロ -->
    <section class="p-ai-hero">
      <img src="/kurage-on-white.png" alt="クラゲくん" class="p-ai-hero__icon" />
      <div class="c-sec-ttl">
        <p class="c-sec-ttl__en" lang="en">AI Support</p>
        <h1 class="c-sec-ttl__ja">あなたが書くだけで、<br />クラゲくんが、ずっと支えてくれます。</h1>
      </div>
      <p class="c-lead" style="margin-top: calc(30 * var(--u));">
        Slack にメモするだけで、ディール確度の更新も、次の一手の提案も、メールの下書きも、クラゲくんが裏でやってくれます。<br />
        ここでは、クラゲくんがあなたのためにしてくれることを紹介します。
      </p>
      <p class="p-ai-hero__back"><a href="/">← クラゲディール トップへ</a></p>
    </section>

    <!-- ① ディール確度の自動更新 -->
    <section class="p-ai__block">
      <p class="p-ai__label">🧠 ディール確度の自動更新</p>
      <h2 class="p-ai__ttl">メモするたびに、確度が動きます。</h2>
      <p class="p-ai__text">
        「決裁者と会えた」「予算の根拠を確認できた」「競合が分かった」——そんな一言を書くだけで、クラゲくんが営業の型（MEDDPICC）に沿ってディール確度を計算し直してくれます。数字が動くから、その案件が今どこにいるのかが、ひと目で分かります。14 日間うごきがない案件は、時間とともに確度がそっと下がるので、見落としにも気づけます。
      </p>
      <div class="p-ai__mock">
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="あなた" :is-user="true" time="11:20"><p>ABC商事、決裁者の部長と面談できました</p></SlackBotLine>
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="11:20">
            <p>✅ 記録しました。決裁者との接触を確認できたので、ディール確度を 48% → 66% に更新しました🪼</p>
          </SlackBotLine>
        </SlackMessageMock>
      </div>
    </section>

    <!-- ② MEDDPICC コーチング -->
    <section class="p-ai__block p-ai__block--alt">
      <p class="p-ai__label">🎓 AIコーチング</p>
      <h2 class="p-ai__ttl">クラゲくんが、あなたの営業コーチになってくれます。</h2>
      <p class="p-ai__text">
        「ABC商事はどう？」と聞くだけで、クラゲくんが営業の型（MEDDPICC）に沿って、やさしく問いかけてくれます。決裁者には会えているか、予算の根拠は確認できているか、競合は把握できているか——。経験豊富なマネジャーがいなくても、チーム全員が、同じ質の問いかけを受け取れます。
      </p>
      <div class="p-ai__mock">
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="あなた" :is-user="true" time="14:32"><p>/coach ABC商事</p></SlackBotLine>
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="14:32">
            <p class="font-bold mb-2">ABC 商事の状況、いくつか確認させてください</p>
            <ol class="space-y-2 list-decimal list-inside">
              <li>決裁者と会えていますか？</li>
              <li>予算 ¥3M の根拠は、お客様からの情報ですか？</li>
              <li>競合の存在は把握できていますか？</li>
            </ol>
            <p class="mt-2 text-xs text-gray-500">気になる項目から、一緒に整理していきましょう</p>
          </SlackBotLine>
        </SlackMessageMock>
      </div>
    </section>

    <!-- ③ メール返信の代筆 -->
    <section class="p-ai__block">
      <p class="p-ai__label">✉️ メール返信の代筆</p>
      <h2 class="p-ai__ttl">返信は、クラゲくんが下書きしてくれます。</h2>
      <p class="p-ai__text">
        顧客からの返信に、クラゲくんが過去のやり取りやディールのステージを踏まえて、返信の下書きを用意してくれます。あなたは Slack で内容を確認して、ボタンを 1 つ押すだけ。お客様には、いつもどおりあなた本人のアドレスから届きます。メール 1 通に 10 分かけていた時間が、ぐっと短くなります。
      </p>
      <div class="p-ai__mock">
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="16:10">
            <p class="font-bold mb-1">📧 田中様への返信を下書きしました</p>
            <p class="text-xs text-gray-600 mb-2">件名: Re: お見積りについて</p>
            <p class="text-sm text-gray-700">いつもお世話になっております。ご検討いただき、ありがとうございます。料金プランの詳細は、担当より改めてご案内いたします……</p>
            <div class="flex flex-col gap-2 mt-3">
              <span class="block w-full text-center border-2 border-green-400 bg-green-50 rounded-lg px-4 py-2.5 text-sm font-bold text-green-800">👍 このまま送信</span>
              <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">✍️ 修正して送信</span>
              <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">❌ 送らない</span>
              <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">📞 自分で対応</span>
            </div>
          </SlackBotLine>
        </SlackMessageMock>
      </div>
      <p class="p-ai__caption">ボタン 1 つで承認すると、あなた本人のアドレスから送信されます。</p>
    </section>

    <!-- ④ メール連携（顧客メールの取り込み） -->
    <section class="p-ai__block p-ai__block--alt">
      <p class="p-ai__label">📨 メール連携</p>
      <h2 class="p-ai__ttl">顧客とのメールも、クラゲくんが読んでくれます。</h2>
      <p class="p-ai__text">
        顧客とのメールを、あなた専用の取り込みアドレスに転送するだけ。クラゲくんが内容を読んで、活動メモとディール確度に反映し、返信の下書きまで Slack に届けてくれます。メールのやり取りも、自然と営業の記録になっていきます。<br />
        専用アドレスは Slack の <code>/setting</code> →「📨 メール連携」で確認できます。
      </p>
      <p class="p-ai__link-note">設定のしかたは、<a href="/guide">使い方ガイド</a>でご案内しています。</p>
    </section>

    <!-- クロージング CTA -->
    <section class="c-cta c-pixel c-pixel--top-only">
      <img class="c-cta__illust" src="/lp/img/kurage.svg" alt="クラゲくん" />
      <h2 class="c-cta__ttl">あなたは書くだけ。<br />あとは、クラゲくんにおまかせください。</h2>
      <p class="c-cta__text">ディール確度も、コーチングも、メールも。クラゲくんが、あなたの営業をそっと支えます。</p>
      <a class="c-btn c-cta__btn" :href="installUrl" @click="onTrialClick">14日間無料で試す</a>
    </section>
  </LpFrame>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（option A・3ページ目）。
import '~/assets/css/lp/ai-support.css'

const installUrl = 'https://api.kuragedeal.ai/slack/install'

const { fire } = useConversion()
function onTrialClick() {
  fire('trial')
}

usePageSeo({
  path: '/ai-support',
  title: 'クラゲくんのAIサポート | クラゲディール',
  description:
    'クラゲディールのAIサポート機能。Slack にメモするだけで、ディール確度の自動更新・MEDDPICC コーチング・メール返信の代筆・顧客メールの取り込みを、クラゲくんがまとめて支えます。',
})
</script>
