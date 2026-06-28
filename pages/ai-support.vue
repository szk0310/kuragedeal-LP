<template>
  <main class="pt-16 min-h-screen">
    <!-- イントロ -->
    <section class="bg-ocean-deep py-16 md:py-20 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <img src="/kurage-on-green.svg" alt="クラゲくん" class="w-16 h-16 mx-auto mb-4" />
        <p class="text-cyan-300 font-bold tracking-widest mb-3">クラゲくんのAIサポート</p>
        <h1 class="text-3xl md:text-4xl font-black mb-4 leading-tight">
          あなたが書くだけで、<br />クラゲくんが、ずっと支えてくれます。
        </h1>
        <p class="text-white/80 leading-relaxed">
          Slack にメモするだけで、受注確率の更新も、次の一手の提案も、メールの下書きも、クラゲくんが裏でやってくれます。<br class="hidden md:block" />
          ここでは、クラゲくんがあなたのためにしてくれることを紹介します。
        </p>
        <a href="/" class="inline-block mt-6 text-sm text-cyan-200 underline hover:text-white">← クラゲディール トップへ</a>
      </div>
    </section>

    <!-- ① 受注確率の自動更新 -->
    <section class="bg-ocean-mist/30 py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <p class="text-base md:text-lg font-bold text-kurage-600 mb-2">🧠 受注確率の自動更新</p>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
          メモするたびに、確率が動きます。
        </h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          「決裁者と会えた」「予算の根拠を確認できた」「競合が分かった」——そんな一言を書くだけで、クラゲくんが営業の型（MEDDPICC）に沿って受注確率を計算し直してくれます。数字が動くから、その案件が今どこにいるのかが、ひと目で分かります。14 日間うごきがない案件は、時間とともに確率がそっと下がるので、見落としにも気づけます。
        </p>
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="あなた" :is-user="true" time="11:20"><p>ABC商事、決裁者の部長と面談できました</p></SlackBotLine>
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="11:20">
            <p>✅ 記録しました。決裁者との接触を確認できたので、受注確率を 48% → 66% に更新しました🪼</p>
          </SlackBotLine>
        </SlackMessageMock>
      </div>
    </section>

    <!-- ② MEDDPICC コーチング -->
    <section class="bg-white py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <p class="text-base md:text-lg font-bold text-kurage-600 mb-2">🎓 AIコーチング</p>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
          クラゲくんが、あなたの営業コーチになってくれます。
        </h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          「ABC商事はどう？」と聞くだけで、クラゲくんが営業の型（MEDDPICC）に沿って、やさしく問いかけてくれます。決裁者には会えているか、予算の根拠は確認できているか、競合は把握できているか——。経験豊富なマネジャーがいなくても、チーム全員が、同じ質の問いかけを受け取れます。
        </p>
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
    <section class="bg-ocean-sand py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <p class="text-base md:text-lg font-bold text-kurage-600 mb-2">✉️ メール返信の代筆</p>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
          返信は、クラゲくんが下書きしてくれます。
        </h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          顧客からの返信に、クラゲくんが過去のやり取りや商談ステージを踏まえて、返信の下書きを用意してくれます。あなたは Slack で内容を確認して、ボタンを 1 つ押すだけ。お客様には、いつもどおりあなた本人のアドレスから届きます。メール 1 通に 10 分かけていた時間が、ぐっと短くなります。
        </p>
        <SlackMessageMock channel-name="💬 クラゲディール（DM）">
          <SlackBotLine name="クラゲディール" :bot-badge="true" time="16:10">
            <p class="font-bold mb-1">📧 田中様への返信を下書きしました</p>
            <p class="text-xs text-gray-600 mb-2">件名: Re: お見積りについて</p>
            <p class="text-sm text-gray-700">いつもお世話になっております。ご検討いただき、ありがとうございます。料金プランの詳細は、担当より改めてご案内いたします……</p>
            <div class="flex flex-wrap gap-2 mt-3">
              <span class="inline-block border border-green-300 bg-green-50 rounded-md px-3 py-1.5 text-xs font-semibold text-green-800">👍 このまま送信</span>
              <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">✍️ 修正して送信</span>
              <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">📞 自分で対応</span>
            </div>
          </SlackBotLine>
        </SlackMessageMock>
        <p class="text-xs text-gray-500 mt-3">ボタン 1 つで承認すると、あなた本人のアドレスから送信されます。</p>
      </div>
    </section>

    <!-- ④ メール連携（顧客メールの取り込み） -->
    <section class="bg-white py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <p class="text-base md:text-lg font-bold text-kurage-600 mb-2">📨 メール連携</p>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
          顧客とのメールも、クラゲくんが読んでくれます。
        </h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          顧客とのメールを、あなた専用の取り込みアドレスに転送するだけ。クラゲくんが内容を読んで、活動メモと受注確率に反映し、返信の下書きまで Slack に届けてくれます。メールのやり取りも、自然と営業の記録になっていきます。
        </p>
        <p class="text-sm text-gray-600 leading-relaxed">
          設定のしかたは、<a href="/guide" class="text-kurage-600 font-bold underline hover:text-kurage-700">使い方ガイド</a>でご案内しています。
        </p>
      </div>
    </section>

    <!-- クロージング CTA -->
    <section class="bg-gradient-to-br from-kurage-900 to-kurage-700 text-white py-20">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl md:text-3xl font-black mb-4 leading-relaxed">
          あなたは書くだけ。あとは、クラゲくんにおまかせください。
        </h2>
        <p class="text-white/85 leading-relaxed mb-8">
          受注確率も、コーチングも、メールも。クラゲくんが、あなたの営業をそっと支えます。
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
usePageSeo({
  path: '/ai-support',
  title: 'クラゲくんのAIサポート | クラゲディール',
  description:
    'クラゲディールのAIサポート機能。Slack にメモするだけで、受注確率の自動更新・MEDDPICC コーチング・メール返信の代筆・顧客メールの取り込みを、クラゲくんがまとめて支えます。',
})
</script>
