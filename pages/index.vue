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
            <h1 class="text-3xl md:text-4xl lg:text-[2.7rem] font-extrabold mb-6 leading-tight">
              <span class="block mb-4">Slack に一言メモるだけ。</span>
              <span class="text-cyan-50">それだけで、ディールが進みます！</span>
            </h1>

            <p class="text-lg md:text-xl font-bold text-kurage-100 mb-4 max-w-2xl leading-relaxed">
              学習コストはゼロ。今日から<br />AI 営業を始めませんか？
            </p>
            <p class="text-lg md:text-xl font-bold text-kurage-100 mb-4 max-w-2xl leading-relaxed">
              初めてでも迷わない「ボタンモード」と、話し言葉で操作する「会話モード」。どちらのモードでも、入力ストレスゼロ！
            </p>
            <p class="text-lg md:text-xl font-bold text-kurage-100 mb-10 max-w-2xl leading-relaxed">
              クラゲディールは、今日から始められる Slack ネイティブな AI 営業支援ツールです。
            </p>

            <!-- CTA（phase1: β 試用 self-serve 主 CTA 一本のみ）-->
            <div class="mb-4 flex items-center gap-4">
              <a
                href="/beta"
                class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
              >
                β 版を試す →
              </a>
              <!-- モバイル用クラゲ（lg ではヒーロー右の大きいクラゲを表示） -->
              <img src="/kurage-on-green.png" alt="クラゲくん" class="lg:hidden w-20 h-20 kurage-float flex-shrink-0" />
            </div>
          </div>

          <div class="hidden lg:flex flex-shrink-0 items-center justify-center w-72 h-72 lg:mr-8">
            <img
              src="/kurage-on-green.png"
              alt="クラゲくん"
              class="w-64 h-64 kurage-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         01.5 誰でも使える、2つのモード（こう使う統合・ビジュアル）
    ============================================================ -->
    <section class="bg-ocean-sand py-16 md:py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-3">誰でも使える、2つのモード。</h2>
          <p class="text-gray-600 leading-relaxed">むずかしい操作は一切ありません。<b>ボタンを押す</b>か、<b>自然言語で話す</b>か。2つのモードは、いつでも切り替えができます。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- ボタンモード（既定） -->
          <div class="bg-kurage-50 rounded-2xl border border-kurage-200 p-6">
            <div class="flex items-center gap-2 mb-1">
              <p class="text-lg font-black text-gray-900">🟢 ボタンモード</p>
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-kurage-600 text-white">既定</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-4">クラゲが「次はこれ」と<b>ボタンで案内</b>。タップして選ぶだけ。何をすればいいか、迷いません。</p>
            <SlackMessageMock channel-name="💬 クラゲディール（DM）">
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
                <p class="font-bold mb-2">👉 何をしますか？</p>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">👤 顧客を登録</span>
                  <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">📝 活動をメモ</span>
                  <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">📊 ディールを登録</span>
                  <span class="inline-block border border-gray-300 bg-white rounded-md px-3 py-1.5 text-xs font-semibold text-gray-800">🎯 次にやること</span>
                </div>
              </SlackBotLine>
            </SlackMessageMock>
            <p class="text-xs text-gray-500 mt-3">＝ はじめての人・営業ツールが苦手な人に。</p>
          </div>

          <!-- 会話モード -->
          <div class="bg-[#dbe9ec] rounded-2xl border border-[#7aaab8]/60 p-6">
            <p class="text-lg font-black text-gray-900 mb-1">⚡ 会話モード</p>
            <p class="text-sm text-gray-700 leading-relaxed mb-4">「ABC商事と商談、競合が一社」と<b>一言書くだけ</b>。最速で記録できます！</p>
            <SlackMessageMock channel-name="💬 クラゲディール（DM）">
              <SlackBotLine name="あなた" :is-user="true" time="14:30">
                <p>ABC商事と商談。予算500万、競合は1社</p>
              </SlackBotLine>
              <SlackBotLine name="クラゲディール" :bot-badge="true" time="14:30">
                <p class="font-bold mb-1">✅ 記録しました</p>
                <p class="text-xs text-gray-600">受注確率を自動で更新しました（48% → 62%）。次にやることも、そっとお知らせします🪼</p>
              </SlackBotLine>
            </SlackMessageMock>
            <p class="text-xs text-gray-500 mt-3">＝ サクサク進めたい人に。</p>
          </div>
        </div>

        <p class="text-center text-base text-gray-600 mt-8 leading-relaxed">
          どちらのモードも、学習はいりません。入力のストレスもありません。<br />
          あなたのスタイルのまま、クラゲくんと一緒に進めていきましょう。
        </p>
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
        </div>
        <div class="bg-white/80 rounded-2xl border border-ocean-tan/30 p-8 md:p-10">
          <p class="text-center text-xl md:text-2xl font-black text-gray-900 mb-6">このような会社にピッタリ！</p>
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

        <!-- 3 つの特徴 -->
        <div class="mt-10 space-y-5 max-w-3xl mx-auto">
          <div class="bg-white/85 rounded-2xl border border-ocean-tan/30 p-6 md:p-8">
            <h3 class="text-xl font-black text-gray-900 mb-3">特徴 1　入力に時間を取られない</h3>
            <p class="text-gray-700 leading-relaxed mb-3">
              さまざまな業務を兼任するスモールチームは、時間がいくらあっても足りません。<br />
              「ABC 商事と商談、競合が一社」——そうメモするだけで、受注確率も、次にやることも返ってきます。入力に追われる時間も、ツールを開く手間もいりません。
            </p>
            <p class="text-gray-700 leading-relaxed mb-3">
              さらに、クラゲがビジネスメールの返信を代筆します。あなたは、<a href="#reply-assist" class="text-kurage-600 font-bold underline hover:text-kurage-700">最終確認のボタンを押すだけ</a> でOK。
            </p>
            <p class="text-gray-800 font-bold leading-relaxed">
              空いた時間は、お客様と向き合うことや、あなた自身の暮らしのために。
            </p>
          </div>

          <div class="bg-white/85 rounded-2xl border border-ocean-tan/30 p-6 md:p-8">
            <h3 class="text-xl font-black text-gray-900 mb-3">特徴 2　チームが大きくなっても、月額は変わらない</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              クラゲディールは、シンプルな 3 段階の料金体系。枠内ならユーザー数が増えても月額は変わりません。
            </p>
            <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
              <strong class="text-orange-600">★</strong> 今なら <strong class="text-orange-600">4 ヶ月無料</strong>の β 試用を提供中（〜10/15・クレジットカード不要）。Slack に追加するだけで、その日からご利用いただけます。
            </div>
          </div>

          <div class="bg-white/85 rounded-2xl border border-ocean-tan/30 p-6 md:p-8">
            <h3 class="text-xl font-black text-gray-900 mb-3">特徴 3　専任の営業マンがいなくても、しっかりサポート</h3>
            <p class="text-gray-700 leading-relaxed">
              営業の型「MEDDPICC」に基づいて、クラゲくんが案件ごとに「決裁者と会えていますか？」「予算の根拠は？」「競合は把握していますか？」と、やさしく問いかけてくれます。<br />
              経験豊富なマネジャーがいなくても、チーム全員に同じ質のコーチングが届きます。クラゲくんが、あなたの営業コーチになってくれます。
            </p>
            <div class="bg-ocean-sand/60 border border-ocean-tan/40 rounded-xl p-4 mt-4 text-xs text-gray-600 leading-relaxed">
              ※ MEDDPICC（メドピック）＝商談の抜け漏れを防ぐ営業フレームワーク。指標(Metrics)・決裁者(Economic Buyer)・選定基準(Decision Criteria)・購買プロセス(Decision Process)・社内手続き(Paper Process)・課題(Identify Pain)・社内推進者(Champion)・競合(Competition)の8要素で案件を見立てます。
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         02.5. ブランドタグライン＋設計思想
    ============================================================ -->
    <section class="bg-ocean-deep py-20 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-8 leading-relaxed">
          <span class="block mb-3">いちばん軽いメモが、</span>
          <span class="block">いちばん賢い営業になる。</span>
        </h2>
        <div class="text-lg md:text-xl text-kurage-100 max-w-2xl mx-auto leading-relaxed space-y-2">
          <p>クラゲディールは、Slack にいるクラゲくんにメモするだけ。</p>
          <p>それだけで、AI 機能が営業活動を自動でサポートしてくれます。</p>
          <p>余った時間は、あなたのためだけに使ってください。</p>
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
            ★ 上記は正式版の料金です。正式版では全プラン共通で、14 日間の無料トライアルが付きます。
          </p>
          <p class="text-sm md:text-base text-gray-600 mt-1">
            β 参加プログラムに登録すると、10/15 まで全機能を無料でお使いいただけます（クレジットカードの入力は不要です）。
          </p>
        </div>

        <!-- 大企業向けCRMとの料金比較 -->
        <p class="text-center text-lg md:text-xl font-bold text-gray-600 mb-4">大企業向けCRMとの料金比較</p>
        <div class="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-12 shadow-sm overflow-x-auto">
          <table class="w-full text-sm text-center min-w-[400px]">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="pb-3 text-gray-500 font-normal">チーム規模</th>
                <th class="pb-3 text-kurage-700 font-black">クラゲディール</th>
                <th class="pb-3 text-gray-500 font-normal text-sm">大企業向けCRM</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="py-3 text-gray-600 font-bold">1 人</td>
                <td class="py-3 font-black text-xl text-kurage-600">¥1,980<span class="text-xs font-normal text-gray-400">/月</span></td>
                <td class="py-3 text-gray-500 text-base">約 ¥16,000〜¥21,000/月</td>
              </tr>
              <tr>
                <td class="py-3 text-gray-600 font-bold">3 人</td>
                <td class="py-3 font-black text-xl text-kurage-600">¥4,980<span class="text-xs font-normal text-gray-400">/月</span></td>
                <td class="py-3 text-gray-500 text-base">約 ¥48,000〜¥63,000/月</td>
              </tr>
              <tr>
                <td class="py-3 text-gray-600 font-bold">10 人</td>
                <td class="py-3 font-black text-xl text-orange-500">¥9,800<span class="text-xs font-normal text-gray-400">/月</span></td>
                <td class="py-3 text-gray-500 text-base">約 ¥160,000〜¥210,000/月</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- β 参加プログラム枠 -->
        <div class="bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 border-2 border-orange-400 rounded-2xl p-8 md:p-10 shadow-lg">
          <div class="text-center mb-6">
            <div class="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              4 ヶ月間、全機能を無料で（10/15 まで）
            </div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-900 mb-2">β 参加プログラム</h3>
          </div>

          <div class="bg-white rounded-xl p-6 mb-6 text-center">
            <p class="text-3xl md:text-4xl font-black text-orange-600 mb-2">4 ヶ月無料</p>
            <p class="text-base text-gray-700">10/15 まで、すべての機能を無料でお試しいただけます。</p>
          </div>

          <div class="flex justify-center mb-6">
            <ul class="text-sm text-gray-700 leading-relaxed space-y-1.5 inline-block text-left">
              <li>✅ Slack に追加するだけで、すぐにお使いいただけます</li>
              <li>✅ クレジットカードの入力は不要です</li>
              <li>✅ データはいつでも CSV / Excel でエクスポートできます</li>
            </ul>
          </div>

          <div class="text-center">
            <a
              href="/beta"
              class="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors"
            >
              β 版を試す →
            </a>
            <p class="text-sm text-gray-600 mt-3">
              継続オプションの詳細は /beta ページでご案内しています。
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================================
         03. あるある お悩み（詳しくは /pains へ）
    ============================================================ -->
    <section class="bg-ocean-mist/40 py-16 md:py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div class="flex items-center justify-center gap-3 mb-3">
          <img src="/kurage-on-white.png" alt="" class="w-10 h-10 md:w-12 md:h-12" />
          <p class="text-base md:text-lg font-bold text-orange-500 uppercase tracking-widest">あるある お悩み</p>
        </div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
          3 つの「お悩み」を、クラゲディールが解消します。
        </h2>
        <p class="text-gray-700 leading-relaxed mb-8">
          CRM が続かない／進捗が見えない／マネジャーが足りない——<br class="hidden md:block" />
          多くの営業チームがぶつかる 3 つの壁を、クラゲディールは Slack の中で解きます。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
          <div class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">😩</p>
            <p class="font-bold text-gray-900 mb-1">CRM が続かない</p>
            <p class="text-sm text-gray-600 leading-relaxed">入力が面倒で、誰も書かない。データが揃わず AI も活かせない。</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">🌫️</p>
            <p class="font-bold text-gray-900 mb-1">進捗が見えない</p>
            <p class="text-sm text-gray-600 leading-relaxed">「あの案件どうなった？」と聞いて回る。止まった案件が失注に。</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">🧑‍💼</p>
            <p class="font-bold text-gray-900 mb-1">マネジャーが足りない</p>
            <p class="text-sm text-gray-600 leading-relaxed">1 人で全員は見られない。良い問いかけを全員に毎日は無理。</p>
          </div>
        </div>
        <a href="/pains" class="inline-flex items-center gap-2 bg-kurage-600 hover:bg-kurage-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
          3 つのお悩みと解決を詳しく見る →
        </a>
      </div>
    </section>

    <!-- ============================================================
         06. メール返信支援 — クラゲくんが代筆
    ============================================================ -->
    <section id="reply-assist" class="bg-ocean-sand py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="flex items-center gap-3 mb-3">
          <img src="/kurage-on-white.png" alt="" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
          <p class="text-base md:text-lg font-bold text-orange-500 uppercase tracking-widest">機能スポットライト</p>
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
          クラゲくんが、返信を代筆します！
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
            <span class="text-orange-700">★ メール返信は、クラゲくんにおまかせください。</span>
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
                <p class="font-bold text-gray-900 mb-1">顧客から届いたメールを転送</p>
                <p class="text-sm text-gray-700 leading-relaxed">顧客から届いたメールを、クラゲの専用アドレスに転送することで返信文をクラゲが考えてくれます。Gmail / Outlook はそのまま使えます。</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-kurage-500 text-white font-bold flex items-center justify-center text-sm">2</div>
              <div>
                <p class="font-bold text-gray-900 mb-1">クラゲくんが文脈を読んで、返信を下書きします</p>
                <p class="text-sm text-gray-700 leading-relaxed">過去のやり取り・商談ステージ・会社の方針を踏まえて生成。</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-kurage-500 text-white font-bold flex items-center justify-center text-sm">3</div>
              <div>
                <p class="font-bold text-gray-900 mb-1">Slack で確認 → ワンクリックで送信</p>
                <p class="text-sm text-gray-700 leading-relaxed">そのまま送る / 編集する / 送らない、をボタンで判断。</p>
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
          <SlackMessageMock channel-name="💬 クラゲディール（DM）">
            <SlackBotLine name="クラゲディール" :bot-badge="true" time="10:08">
              <p class="font-bold mb-2">📧 田中様（ABC 商事）より受信</p>
              <div class="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 leading-relaxed mb-3">
                ご提案ありがとうございます。<br />
                予算は問題ありませんが、競合 1 社と比較中で、最終決定は来週月曜になる予定です。<br />
                追加で資料を頂けますでしょうか？
              </div>

              <p class="text-xs font-bold text-orange-600 mb-2">✨ クラゲくんが返信の下書きを用意しました</p>
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
        <p class="text-center text-base text-gray-600 mb-12 italic">ボタン 1 つで承認すると、お客様には鈴木さん本人の社内アドレスから送信されます。</p>

        <!-- 3 つの特徴チップ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(c, i) in replyAssistChips" :key="i" class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-2xl mb-2">{{ c.icon }}</p>
            <p class="font-bold text-gray-900 mb-1">{{ c.title }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>

        <p class="text-center text-gray-800 mt-12 text-lg md:text-xl font-bold leading-relaxed">
          入力の手間も、進捗の見えなさも、マネジャー不足も、メール返信も。<br />
          クラゲディールが、まるごと引き受けます。
        </p>
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
        <img src="/kurage-smile.png" alt="クラゲディール" class="w-20 h-20 mx-auto mb-6 kurage-float" />

        <p class="text-base text-kurage-100 mb-3 leading-relaxed">
          ここまで読んでくれて嬉しいです！
        </p>
        <p class="text-base text-kurage-100 mb-10 leading-relaxed">
          もし「自分の営業チームに合いそうだ」と思ったなら、<br />
          10/15 まで、4 ヶ月間ぼくを試してみてください。<br />
          <span class="text-kurage-200 text-sm">きみが使うたびに、ぼくは覚えていきます。</span>
        </p>

        <!-- β 試用（self-serve 主訴求を最大化、副 CTA なし） -->
        <div class="bg-orange-500/15 border border-orange-400/40 rounded-2xl p-6 md:p-8 mb-8">
          <p class="text-base font-bold text-orange-200 mb-3 text-center">4 ヶ月間、無料で試せます（10/15 まで）。</p>
          <div class="flex justify-center mb-5">
            <ul class="space-y-2 text-sm text-kurage-50 inline-block text-left">
              <li>✅ Slack に追加するだけで、すぐに使えます</li>
              <li>✅ 10/15 まで、すべての機能を完全無料で</li>
              <li>✅ クレジットカードの入力は不要です</li>
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

      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
// LP_FULL_COPY 最新版: ウェイトリスト関連 CTA は /beta ページ内のみで提示
// （メイン LP は β 試用の self-serve 主訴求を最大化、副 CTA なし）


const personas = [
  { icon: '🏢', text: '社員5人のIT企業。社長が営業も兼務。商談管理はスプレッドシートで回しています' },
  { icon: '👥', text: '営業3人の人材会社。CRMを導入したが誰も入力しない' },
  { icon: '🚀', text: '6人のスタートアップ。急成長で商談が増え、フォロー漏れが出始めた' },
  { icon: '🔧', text: '一人社長の税理士。クライアント20社の関係を頭の中で管理している' },
]



const replyAssistChips = [
  { icon: '✍️', title: 'クラゲくんが代筆', desc: '過去のやり取りを踏まえて、自然に返信します' },
  { icon: '💌', title: '自社送信', desc: 'いつもの社内アドレスから送れます' },
  { icon: '🎚', title: '編集自由', desc: '承認の前に、必要なら手直しできます' },
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
    startNote: '14 日間、無料でお試しいただけます',
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
    startNote: '14 日間、無料でお試しいただけます',
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
    startNote: '14 日間、無料でお試しいただけます',
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
    startNote: '11 名以上は個別にご相談ください',
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
    a: 'はい。クレジットカードの入力は不要です。\n4 ヶ月間（10/15 まで）、すべての機能を無料でお試しいただけます。Slack に追加すれば、すぐにお使いいただけます。\n継続オプションの詳細は /beta ページでご案内しています。',
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
    q: 'インストールしたのに、サイドバーにアプリが出てきません',
    a: 'Slack 画面上部の検索窓（または Cmd / Ctrl + K）に「クラゲディール」（英字 kuragedeal でも可）と入力し、表示されたアプリを選んでください。クラゲディールとの DM が開き、サイドバーに常駐します。\nあとは、その DM で自然文を打つだけ。初回のやり取りで welcome DM も届きます。\n反映が遅いときは Slack を再読み込み（Cmd / Ctrl + R）してください。\nなお、ワークスペースへの追加（インストール）は管理者が 1 回行えば完了で、メンバーの個別インストールは不要です。',
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
    q: '他のメンバーに自分の営業データを見られませんか？',
    a: 'いいえ。クラゲディールは DM（クラゲディール App との個別チャット）で使う、あなた専用のプライベートな営業アシスタントです。あなたの入力もクラゲの回答も、ほかの人には見えません。\nさらにデータ自体も担当者ごとに分離されており、一般メンバーは自分が担当するディール・顧客のみ閲覧できます（マネージャーはチーム全体）。',
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
    'Slack に一言書くだけで CRM 入力が完了。AI が営業コーチとして毎朝ブリーフィングし、受注確率・次のアクション・メール下書きを支援します。1〜10 人の営業チームで月¥9,800。いまならβ版を 4 ヶ月無料（10/15 まで・クレカ不要）。',
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
      name: 'β 試用（4 ヶ月無料・2026/10/15 まで）',
      price: 0,
      priceCurrency: 'JPY',
      description: 'β 期間中は全機能を 4 ヶ月無料で利用可能（2026/10/15 一斉終了・クレジットカード不要）。',
    },
    {
      '@type': 'Offer',
      name: 'Personal（正式版）',
      price: 1980,
      priceCurrency: 'JPY',
      description: '1 名まで。正式版では 14 日間の無料トライアル付き。',
    },
    {
      '@type': 'Offer',
      name: 'Trio（正式版）',
      price: 4980,
      priceCurrency: 'JPY',
      description: '3 名まで。正式版では 14 日間の無料トライアル付き。',
    },
    {
      '@type': 'Offer',
      name: 'Standard（正式版）',
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
