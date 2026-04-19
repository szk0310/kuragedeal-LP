<template>
  <main class="pt-16">
    <!-- ============================================================
         HERO
    ============================================================ -->
    <section
      id="hero"
      class="relative bg-gradient-to-br from-kurage-900 via-kurage-800 to-kurage-700 text-white overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-72 h-72 rounded-full bg-kurage-300 blur-3xl" />
        <div class="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Left: copy -->
          <div class="flex-1">
            <!-- Main copy -->
            <h1 class="text-4xl md:text-6xl font-black mb-6">
              <span class="block mb-4">話しかけるだけで、</span>
              <span class="text-cyan-50">ディールが前に進む。</span>
            </h1>
            <p class="text-lg text-kurage-100 mb-10 max-w-2xl leading-relaxed">
              Slackに書いた一言が、自動で記録・分析・コーチングまでつながる。<br />
              1人〜30人の営業チームに最適。導入初日から全員が使えます。
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                :href="`${API_URL}/slack/install`"
                class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
              >
                無料で始める →
              </a>
              <a
                href="#features"
                class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-4 rounded-xl text-lg transition-colors"
              >
                機能を見る
              </a>
            </div>

            <!-- ROI banner -->
            <div class="bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 max-w-xl">
              <div class="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <p class="text-xl sm:text-2xl md:text-3xl font-black text-cyan-50 leading-tight">
                    <span class="hidden sm:inline">△</span>¥150,000
                  </p>
                  <p class="text-xs sm:text-xs text-kurage-200 mt-1">月間入力作業コスト削減<br/>（5人チーム試算）</p>
                </div>
                <div class="border-x border-white/20">
                  <p class="text-xl sm:text-2xl md:text-3xl font-black text-cyan-50 leading-tight">¥9,800</p>
                  <p class="text-xs text-kurage-200 mt-1">月額利用料<br/>（10人チーム）</p>
                </div>
                <div>
                  <p class="text-xl sm:text-2xl md:text-3xl font-black text-orange-400 leading-tight">15x</p>
                  <p class="text-xs text-kurage-200 mt-1">初月からの<br/>ROI</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: floating kurage icon -->
          <div class="hidden md:flex flex-shrink-0 items-center justify-center w-72 h-72">
            <img
              src="/kurage-icon.svg"
              alt="クラゲくん"
              class="w-64 h-64 kurage-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         TARGET SEGMENT
    ============================================================ -->
    <section class="bg-ocean-steel/75 py-16">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
      <p class="text-2xl font-bold text-gray-700 mb-3　">対象</p>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800  mb-4">
            1人〜30人の営業チームのためのAI営業ツール
          </h2>
          </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
          
        <div class="bg-white/80 rounded-2xl border border-ocean-tan/30 p-8 md:p-10 text-center">
          <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            一人社長のフリーランスから、営業チーム10名規模の成長企業まで。<br />
            「大手ベンダーのCRMは高すぎるし重すぎる。でもExcelの管理はもう限界」<br />
            ——そんな会社のために作りました。
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="p in personas"
              :key="p.icon"
              class="bg-ocean-mist/50 rounded-xl p-4 text-sm text-gray-700"
            >
              <p class="text-2xl mb-2">{{ p.icon }}</p>
              <p>{{ p.text }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- ============================================================
         FEATURES
    ============================================================ -->
    <section id="features" class="bg-ocean-steel py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <p class="text-2xl font-bold  text-cyan-100 mb-3">機能</p>
          <h2 class="text-3xl md:text-4xl font-black  text-gray-100 mb-4">4つの特徴</h2>
          <p class=" text-cyan-100 ">新しいアプリは不要。Slackだけで完結します。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="f in features"
            :key="f.title"
            class="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-shadow"
          >
            <p class="text-4xl mb-4">{{ f.icon }}</p>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ f.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         AI NURTURING
    ============================================================ -->
    <section id="nurturing" class="bg-gradient-to-br from-kurage-900 via-kurage-800 to-kurage-700 py-20 text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <p class="text-2xl font-bold text-cyan-100 mb-3">AIナーチャリング</p>
          <h2 class="text-3xl md:text-4xl font-black mb-4">
            <span class="block text-cyan-0 mb-4">返信が来たら、AIが次の一手を考える。</span>
          </h2>
          <p class="text-kurage-100 max-w-2xl mx-auto">
            手動でメールを書く時代は終わりました。<br />
            顧客からの返信をAIが読んで、次に送るべき文章を自動生成。<br />承認ボタン1つで送信。すべてのやりとりが自動でディールに記録されます。
          </p>
        </div>

        <!-- AIナーチャリング フロー図解 -->
        <div class="mb-12">
          <p class="text-center text-xl font-bold text-cyan-100 mb-9 uppercase tracking-widest">
            顧客から返信→AIが下書き→Slackで承認→送信
          </p>
          <div class="flex flex-col md:flex-row items-stretch gap-2">

            <!-- Step 1 -->
            <div class="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-4 text-center">
              <div class="w-7 h-7 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold flex items-center justify-center mx-auto mb-2">1</div>
              <p class="text-2xl mb-2">📧</p>
              <p class="font-bold text-xs mb-1">顧客からメール/問い合わせ</p>
              <p class="text-kurage-300 text-xs leading-relaxed">フォーム送信・返信・新規連絡を自動検知</p>
            </div>

            <div class="hidden md:flex items-center text-white/30 text-xl px-0.5">→</div>

            <!-- Step 2 -->
            <div class="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-4 text-center">
              <div class="w-7 h-7 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold flex items-center justify-center mx-auto mb-2">2</div>
              <p class="text-2xl mb-2">🧠</p>
              <p class="font-bold text-xs mb-1">AIが内容を分析・感情判定</p>
              <p class="text-kurage-300 text-xs leading-relaxed">前向き／要検討／断り気配をAIが判断</p>
            </div>

            <div class="hidden md:flex items-center text-white/30 text-xl px-0.5">→</div>

            <!-- Step 3 -->
            <div class="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-4 text-center">
              <div class="w-7 h-7 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold flex items-center justify-center mx-auto mb-2">3</div>
              <p class="text-2xl mb-2">🔔</p>
              <p class="font-bold text-xs mb-1">Slackにアラート通知</p>
              <p class="text-kurage-300 text-xs leading-relaxed">「前向きな反応です」「温度が下がっています」</p>
            </div>

            <div class="hidden md:flex items-center text-white/30 text-xl px-0.5">→</div>

            <!-- Step 4: ハイライト -->
            <div class="flex-1 bg-cyan-400/15 border-2 border-cyan-400/50 rounded-xl px-3 py-4 text-center relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-kurage-900 text-xs font-black px-3 py-0.5 rounded-full whitespace-nowrap">ボタン1つ ✅</div>
              <div class="w-7 h-7 rounded-full bg-cyan-400/30 border border-cyan-400/60 text-cyan-300 text-xs font-bold flex items-center justify-center mx-auto mb-2 mt-1">4</div>
              <p class="text-2xl mb-2">✍️</p>
              <p class="font-bold text-xs mb-1 text-cyan-200">AI返信下書き→承認→即送信</p>
              <p class="text-kurage-300 text-xs leading-relaxed">内容を確認して承認するだけ。修正も可能</p>
            </div>

            <div class="hidden md:flex items-center text-white/30 text-xl px-0.5">→</div>

            <!-- Step 5 -->
            <div class="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-4 text-center">
              <div class="w-7 h-7 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold flex items-center justify-center mx-auto mb-2">5</div>
              <p class="text-2xl mb-2">📊</p>
              <p class="font-bold text-xs mb-1">自動記録・確率更新</p>
              <p class="text-kurage-300 text-xs leading-relaxed">やりとりがすべてディールに記録。受注確率が自動で動く</p>
            </div>

          </div>
        </div>

        <!-- 3つの特徴カード -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p class="text-3xl mb-4">🤖</p>
            <h3 class="text-lg font-bold mb-2">AIが個別メッセージを生成</h3>
            <p class="text-kurage-200 text-sm leading-relaxed">
              ディールの進捗・過去の会話・顧客の反応をもとに、その人だけへのメッセージをAIが下書き。「田中さんは先週"予算は問題ない"と言っていた」——そのニュアンスまで反映します。
            </p>
          </div>
          <div class="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p class="text-3xl mb-4">💬</p>
            <h3 class="text-lg font-bold mb-2">返信をAIが読んで次を判断</h3>
            <p class="text-kurage-200 text-sm leading-relaxed">
              顧客から返信が来たら、AIがその内容を分析。「前向き」「要検討」「断り気配」を判定し、次に送るべきメッセージを自動生成。商談の温度に合わせてコミュニケーションが続きます。
            </p>
          </div>
          <div class="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p class="text-3xl mb-4">✅</p>
            <h3 class="text-lg font-bold mb-2">Slackで承認→即送信</h3>
            <p class="text-kurage-200 text-sm leading-relaxed">
              AIが作ったメッセージはSlackに届きます。内容を確認して「送信」ボタンを押すだけ。修正も可能。人間が判断・承認するから、AIが暴走する心配もありません。
            </p>
          </div>
        </div>

        <!-- メール補足 -->
        <p class="text-center text-kurage-300 text-sm">
          ※ notify_only（通知のみ）とdraft_reply（AI下書き生成）の2モードから選択できます。いつでも設定変更可能。
        </p>

        <!-- vs ステップメール比較 -->
        <div class="bg-white/5 border border-white/15 rounded-2xl p-8 mt-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p class="text-lg font-bold text-red-400 mb-4 uppercase tracking-widest">従来のステップメール</p>
              <ul class="space-y-3 text-sm text-kurage-200">
                <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> 全員に同じ内容を送信</li>
                <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> 返信が来ても自動で次のメッセージが送られるだけ</li>
                <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> 顧客の温度感・状況は無視</li>
                <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> 「買う気のない人」にも延々と送り続ける</li>
              </ul>
            </div>
            <div>
              <p class="text-lg font-bold text-cyan-300 mb-4 uppercase tracking-widest flex items-center gap-2">
                <img src="/kurage-icon.svg" alt="" class="w-6 h-6 inline-block" />
                クラゲディールのAIナーチャリング
              </p>
              <ul class="space-y-3 text-sm">
                <li class="flex items-start gap-2"><span class="text-cyan-300 mt-0.5">✓</span> 顧客ごとに個別メッセージをAIが生成</li>
                <li class="flex items-start gap-2"><span class="text-cyan-300 mt-0.5">✓</span> 返信内容をAIが読んで次のアクションを決定</li>
                <li class="flex items-start gap-2"><span class="text-cyan-300 mt-0.5">✓</span> 商談の進捗・過去の会話・センチメントを反映</li>
                <li class="flex items-start gap-2"><span class="text-cyan-300 mt-0.5">✓</span> 人間はSlackで確認→承認するだけ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         BENEFITS（コスト削減）
    ============================================================ -->
    <section id="benefits" class="bg-ocean-steel/75  py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <p class="text-2xl font-bold text-kurage-800 mb-3">導入効果</p>
          <h2 class="text-3xl md:text-4xl font-black text-cyan-900  mb-4">
            営業コストを、仕組みで下げる
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="b in benefits"
            :key="b.title"
            class="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <p class="text-4xl mb-4">{{ b.icon }}</p>
            <h3 class="text-lg font-bold text-gray-900 mb-3">{{ b.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ b.desc }}</p>
            <div class="bg-kurage-50 border border-kurage-100 rounded-xl p-4 text-sm text-kurage-800 font-medium">
              {{ b.metric }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         USE CASES
    ============================================================ -->
    <section id="usecases" class="bg-ocean-steel py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <p class="text-2xl font-bold text-cyan-100 mb-3">活用シーン</p>
          <h2 class="text-3xl md:text-4xl font-black text-gray-100 mb-4">
            こんな会社に、ぴったりです
          </h2>
        </div>

        <div class="space-y-6">
          <div
            v-for="uc in usecases"
            :key="uc.title"
            class="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            <div class="p-8 md:flex gap-8 items-start">
              <div class="text-5xl mb-4 md:mb-0 shrink-0">{{ uc.icon }}</div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ uc.title }}</h3>
                <p class="text-sm text-kurage-600 font-medium mb-3">{{ uc.subtitle }}</p>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ uc.problem }}</p>
                <div class="bg-kurage-50 border-l-4 border-kurage-500 pl-4 py-3 rounded-r-xl">
                  <p class="text-gray-800 text-sm leading-relaxed">{{ uc.solution }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         PRICING
    ============================================================ -->
    <section id="pricing" class="bg-ocean-deep py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <p class="text-2xl font-bold text-cyan-100 mb-3">料金</p>
          <h2 class="text-3xl md:text-4xl font-black text-kurage-50 mb-4">
            シンプルな料金体系
          </h2>
          <p class="text-gray-500">プラン内ユーザー数の追加費用なし。チーム全員で使えます。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="plan in pricing"
            :key="plan.name"
            :class="[
              'rounded-2xl border p-8 flex flex-col',
              plan.featured
                ? 'bg-kurage-700 text-white border-kurage-600 shadow-2xl scale-105'
                : 'bg-white border-gray-200',
            ]"
          >
            <div v-if="plan.featured" class="text-xs font-bold text-cyan-300 mb-3">
              ★ 最人気
            </div>
            <h3
              :class="['text-2xl font-black mb-1', plan.featured ? 'text-white' : 'text-gray-900']"
            >
              {{ plan.name }}
            </h3>
            <p :class="['text-4xl font-black mt-2 mb-1', plan.featured ? 'text-cyan-300' : 'text-kurage-700']">
              {{ plan.price }}
            </p>
            <p :class="['text-sm mb-6', plan.featured ? 'text-kurage-200' : 'text-gray-400']">
              /月（税別）
            </p>
            <ul class="space-y-3 flex-1 mb-8">
              <li
                v-for="item in plan.features"
                :key="item.label"
                class="flex items-start gap-2 text-sm"
              >
                <span :class="plan.featured ? 'text-cyan-300' : 'text-kurage-500'">
                  {{ item.ok ? '✅' : '—' }}
                </span>
                <span :class="plan.featured ? 'text-kurage-100' : 'text-gray-600'">
                  {{ item.label }}
                </span>
              </li>
            </ul>
            <a
              :href="plan.checkoutUrl"
              :class="[
                'text-center font-bold py-3 px-6 rounded-xl transition-colors',
                plan.featured
                  ? 'bg-orange-500 hover:bg-orange-400 text-white'
                  : 'bg-kurage-50 hover:bg-kurage-100 text-kurage-700 border border-kurage-200',
              ]"
            >
              {{ plan.cta }}
            </a>
          </div>
        </div>

        <p class="text-center text-sm text-gray-400 mt-8">
          50人以上の組織・カスタマイズが必要な場合は Enterprise プラン（個別見積もり）をご相談ください。
        </p>
      </div>
    </section>

    <!-- ============================================================
         COMPARISON
    ============================================================ -->
    <section id="comparison" class="bg-ocean-sand py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14">
          <p class="text-2xl font-bold text-gray-600 mb-3">比較</p>
          <h2 class="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            CRM + Slackとの違い
          </h2>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-ocean-mist/10 border-b border-gray-200">
                  <th class="text-left px-6 py-4 font-semibold text-gray-600 w-1/3">比較項目</th>
                  <th class="text-center px-6 py-4">
                    <span class="inline-flex items-center gap-1.5 font-bold text-kurage-700">
                      <img src="/kurage-icon.svg" alt="" class="w-5 h-5" />
                      クラゲディール
                    </span>
                  </th>
                  <th class="text-center px-6 py-4 font-semibold text-gray-400">
                    CRM + Slack
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, i) in comparison"
                  :key="row.label"
                  :class="[
                    'border-b border-gray-100',
                    i % 2 === 0 ? 'bg-white' : 'bg-ocean-mist/5',
                  ]"
                >
                  <td class="px-6 py-4 font-medium text-gray-700">{{ row.label }}</td>
                  <td class="px-6 py-4 text-center text-kurage-700 font-medium">{{ row.us }}</td>
                  <td class="px-6 py-4 text-center text-gray-400">{{ row.them }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         FAQ
    ============================================================ -->
    <section id="faq" class="bg-ocean-tan/80 py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">

        <!-- Trust badge -->
         <!--
        <div class="bg-kurage-50 border border-kurage-100 rounded-2xl p-8 mb-12">
          <div class="flex gap-4 items-start">
            <span class="text-4xl">🏅</span>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Salesforce 認定パートナーが、自分たちのために作ったツール
              </h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Salesforce 認定コンサルティングパートナーとして CRM 支援をするなかで気づきました。<br />
                「5〜30人のチームには、これは重すぎる」と。<br />
                だから私たち自身が毎日使えるものを、自分たちで作りました。
              </p>
            </div>
          </div>
        </div>-->

        <div class="text-center mb-14">
          <p class="text-2xl font-bold text-ocean-deep mb-3">FAQ</p>
          <h2 class="text-3xl md:text-4xl font-black text-gray-700 mb-4">よくある質問</h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="faq in faqs"
            :key="faq.q"
            class="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            <button
              class="w-full text-left px-6 py-5 flex justify-between items-start gap-4 font-semibold text-gray-900"
              @click="faq.open = !faq.open"
            >
              <span>Q. {{ faq.q }}</span>
              <span class="text-kurage-500 text-xl shrink-0">{{ faq.open ? '−' : '+' }}</span>
            </button>
            <div v-if="faq.open" class="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         BOTTOM CTA
    ============================================================ -->
    <section class="bg-gradient-to-br from-kurage-900 to-kurage-700 text-white py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <img src="/kurage-icon.svg" alt="クラゲディール" class="w-20 h-20 mx-auto mb-6 kurage-float" />
        <h2 class="text-3xl md:text-4xl font-black mb-4">
          今日から、Slackで営業管理を始めよう。
        </h2>
        <p class="text-kurage-200 mb-10 text-lg">
          導入初日から全員が使えます。セットアップは最短30分。
        </p>
        <a
          :href="`${API_URL}/slack/install`"
          class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-lg"
        >
          無料で始める →
        </a>
        <p class="text-kurage-300 text-xs mt-10">
          🌊 売上の一部は、<a href="https://www.nippon-foundation.or.jp/donation/ocean-project-fund" target="_blank" rel="noopener" class="underline hover:text-white transition-colors">日本財団 海洋プロジェクト基金</a>に寄付されます。
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const personas = [
  { icon: '🏢', text: '社員5人のIT企業。社長が営業も兼務。商談管理はスプレッドシート' },
  { icon: '👥', text: '営業3人の人材会社。CRMを導入したが誰も入力しない' },
  { icon: '🚀', text: '10人のスタートアップ。急成長で商談が増え、フォロー漏れが出始めた' },
  { icon: '🔧', text: '一人社長のコンサル。クライアント20社の関係を頭の中で管理している' },
]

const features = [
  {
    icon: '🎯',
    title: 'ディールベースでシンプル',
    desc: 'リード・取引先責任者・商談・活動…複雑なCRMの画面遷移は不要。「ディール」1画面に顧客・活動・成約見込み・コーチングが全部まとまる。初日から誰でも使える。',
  },
  {
    icon: '💬',
    title: 'Slackだけで完結',
    desc: '新しいアプリを覚える必要なし。「田中さんに電話した」とSlackに書くだけで記録完了。チーム全員が毎日使える。',
  },
  {
    icon: '🧠',
    title: 'AIが勝手に確率を更新する',
    desc: 'メールや会話のニュアンスをAIが読み取り、入力ゼロで受注確率が自動アップデートされる。「難しいですね」は断りシグナル、「費用はいくら？」はホットシグナル——人間が気づく前にAIが察知。さらにAIが返信メールの下書きをSlackに届け、ボタン1つで送信できる。',
  },
  {
    icon: '💰',
    title: '圧倒的な低価格',
    desc: '大手CRMの1/10以下。プラン内ユーザー数の追加費用なし。10人チームで月¥9,800。導入コストも運用ルール策定も不要。即日使い始められます。',
  },
]

const benefits = [
  {
    icon: '⏱️',
    title: '入力ゼロ → 営業時間を取り戻す',
    desc: '「CRMへの入力に1日30分」は業界の常識。クラゲディールなら、Slackに一言書くだけで自動記録。営業1人あたり月10時間の入力作業がゼロに。その時間を商談に使えば、1件でも多く受注できます。',
    metric: '📊 試算: 営業5人 × 10時間 × 時給¥3,000 = 月¥150,000の隠れコスト削減',
  },
  {
    icon: '🌱',
    title: '新人がベテラン並みに動ける → 採用コストを抑える',
    desc: 'AIコーチは、すべてのディールに対して「この案件、次に何をすべきか？」「決裁者に会えていますか？」とMEDDPICC方法論で問いかけます。エキスパート営業マネージャーの判断を、AIが全案件に24時間提供。',
    metric: '💡 営業マネージャー年収600〜900万円 → AIコーチ年額¥117,600（Standard）',
  },
  {
    icon: '🚨',
    title: 'フォロー漏れゼロ → 失注を防ぐ',
    desc: '「あの案件、2週間フォローしてなかった…」クラゲディールは14日放置された案件を自動検出し、毎朝のブリーフィングで警告。夕方にはコーチング質問をプッシュ通知。',
    metric: '1件の失注を防げれば、年間のクラゲディール利用料は余裕で回収できます',
  },
]

const usecases = [
  {
    icon: '🚀',
    title: 'エンジニア創業のスタートアップ',
    subtitle: '「営業を雇わなくていい」',
    problem:
      'プロダクトは強い。でも営業がいない。エンジニア2人で創業。問い合わせは来るけど、フォローが追いつかない。営業を1人雇うと月40万。でもまだそのフェーズじゃない。',
    solution:
      '→ クラゲディールなら、問い合わせをSlackにメモするだけでAIが管理。「あの見込み客、1週間放置してますよ」とAIが毎朝教えてくれる。コーチングが「次は決裁者に会いましょう」と具体的に指示。営業スタッフゼロでも、商談を前に進められます。',
  },
  {
    icon: '🏢',
    title: '社長が営業も兼務する会社',
    subtitle: '「頭の中の営業管理を外に出す」',
    problem:
      '社員5人。社長が営業もバックオフィスも全部やってる。クライアント30社の状況は全部社長の頭の中。たまにフォロー忘れて失注。「あの件どうなった？」と聞かれて焦る。',
    solution:
      '→ 「田中さんに電話した。来月デモ設定」とSlackに書くだけ。社長の頭の中が、検索できるディール管理に変わる。出張中でも毎朝ブリーフィングが来るから、抜け漏れゼロ。',
  },
  {
    icon: '👥',
    title: 'CRMを導入したけど誰も使わない会社',
    subtitle: '「ちゃんと続く営業管理」',
    problem:
      '営業3人の人材紹介会社。CRM入れたのに、入力率20%。「入力が面倒」「外出先で開けない」「項目が多すぎる」。結局マネージャーが口頭で聞いてExcelにまとめ直す日々。',
    solution:
      '→ Slackに「鈴木さんとMTGした。要件ヒアリング完了」と書くだけで記録完了。画面を開いて項目を埋める作業がゼロ。だから全員が毎日使える。記録が100%残るから、AIがコーチングを生成。',
  },
  {
    icon: '📈',
    title: '急成長中の10人チーム',
    subtitle: '「マネージャーの分身が欲しい」',
    problem:
      'SaaS営業10人。商談が月50件を超えて、マネージャーが全案件を見切れない。「あの案件、止まってない？」「競合出てきたの知ってる？」週1の1on1じゃ追いつかない。でもマネージャーをもう1人雇う余裕はない。',
    solution:
      '→ AIが全50案件を毎日診断。滞留・危険・クロージング間近を自動仕分け。「この案件14日止まってます。何がブロッカーですか？」マネージャーの問いかけを、AIが24時間×全案件でやってくれる。年収800万のマネージャーの仕事を、月¥9,800で。',
  },
  {
    icon: '🔧',
    title: 'フリーランス・一人社長',
    subtitle: '「自分専用のAI営業アシスタント」',
    problem:
      'コンサル業。クライアント15社を一人で回している。提案中・契約中・フォロー待ちが混在して、どこから手をつけるかわからない。「今月クローズできそうな案件は？」を即答できない。',
    solution:
      '→ Freeプランで十分。毎朝「今日やるべきこと」がSlackに届く。「山田商事、確率70%。クローズ日を確認しましょう」一人でもAIアシスタントがいれば、20社でも回せます。',
  },
]

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

const pricing = [
  {
    name: 'Free',
    price: '¥0',
    featured: false,
    cta: '無料で始める',
    checkoutUrl: `${API_URL}/slack/install`,
    features: [
      { ok: true, label: 'ユーザー 3名まで' },
      { ok: true, label: 'AI利用 月100回' },
      { ok: true, label: 'コーチング機能' },
      { ok: false, label: '日次ブリーフィング' },
      { ok: false, label: 'ナーチャリング' },
      { ok: false, label: '優先サポート' },
    ],
  },
  {
    name: 'Standard',
    price: '¥9,800',
    featured: true,
    cta: '今すぐ申し込む',
    checkoutUrl: `${API_URL}/slack/install`,
    features: [
      { ok: true, label: 'ユーザー 10名まで' },
      { ok: true, label: 'AI利用 月5,000回' },
      { ok: true, label: 'コーチング機能' },
      { ok: true, label: '日次ブリーフィング' },
      { ok: true, label: 'ナーチャリング' },
      { ok: false, label: '優先サポート' },
    ],
  },
  {
    name: 'Premium',
    price: '¥29,800',
    featured: false,
    cta: 'お問い合わせ',
    checkoutUrl: '/free',
    features: [
      { ok: true, label: 'ユーザー 無制限' },
      { ok: true, label: 'AI利用 無制限' },
      { ok: true, label: 'コーチング機能' },
      { ok: true, label: '日次ブリーフィング' },
      { ok: true, label: 'ナーチャリング' },
      { ok: true, label: '優先サポート' },
    ],
  },
]

const comparison = [
  {
    label: 'データ構造',
    us: 'ディール1画面に全集約（アプローチ中〜クローズまで）',
    them: 'リード・取引先責任者・商談・活動が別画面',
  },
  {
    label: '学習コスト',
    us: 'ゼロ（Slackに話すだけ）',
    them: '研修 + 運用ルール策定が必要',
  },
  {
    label: '月額（10人チーム）',
    us: '¥9,800',
    them: '¥56,000〜470,000',
  },
  {
    label: '導入期間',
    us: '30分',
    them: '3〜6ヶ月',
  },
  {
    label: '入力時間',
    us: '1行（Slackに書くだけ）',
    them: '1日30分（画面を開いて項目入力）',
  },
  {
    label: 'AIコーチング',
    us: '営業特化（MEDDPICC + 状況診断）',
    them: 'オプション',
  },
  {
    label: '会話センチメント分析',
    us: '自動（入力ゼロで確率変動）',
    them: 'オプション',
  },
  {
    label: 'AI返信下書き',
    us: 'あり（Slackで承認→即送信）',
    them: 'オプション',
  },
  {
    label: 'AI返信アシスト',
    us: '返信をAIが読んで下書き生成→Slackで承認→即送信',
    them: 'なし（手動入力のみ）',
  },
]

const faqs = reactive([
  {
    q: '将来、別のCRMに移行できますか？',
    a: 'はい。クラゲディールのデータはCSV/Excelでエクスポート可能です。組織が成長して部門間の権限設定等の機能が必要になった際には、スムースな移行が可能です。「今はクラゲディール、いつかマルチロールなCRM」——弊社はどちらのフェーズでもお手伝いできます。',
    open: false,
  },
  {
    q: '30人以上の会社でも使えますか？',
    a: 'Premiumプラン（¥29,800/月）でユーザー数無制限に対応しています。50人以上の組織でカスタマイズが必要な場合は、Enterpriseプラン（個別見積もり）をご相談ください。',
    open: false,
  },
  {
    q: '既存のSlackワークスペースに導入できますか？',
    a: 'はい。既存のSlackワークスペースにクラゲディールのアプリを追加するだけで利用開始できます。新しいワークスペースを作る必要はありません。',
    open: false,
  },
  {
    q: 'データのセキュリティは大丈夫ですか？',
    a: 'データはGCP（Google Cloud Platform）上で管理され、通信はSSL/TLSで暗号化されています。顧客データはテナントごとに分離して保管されます。',
    open: false,
  },
  {
    q: '営業データはAIの学習に使われますか？',
    a: 'いいえ。お客様の営業データ（顧客情報・商談内容・メール等）はAIのトレーニングには一切使用しません。データはお客様専用の領域に分離して保管されます。',
    open: false,
  },
])
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
</style>
