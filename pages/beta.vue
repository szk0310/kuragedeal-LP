<template>
  <main class="pt-16 min-h-screen bg-gray-50">
    <!-- ヒーロー -->
    <section class="bg-gradient-to-br from-kurage-900 via-kurage-800 to-kurage-700 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <div class="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          どなたでもご応募可
        </div>
        <h1 class="text-3xl md:text-5xl font-black mb-4">
          β 試用プログラム
        </h1>
        <p class="text-lg md:text-xl text-kurage-100 mb-2 leading-relaxed">
          4 ヶ月間、全機能を<br class="md:hidden" />完全無料で（10/15 まで）。
        </p>
        <p class="text-sm text-kurage-200">
          クレジットカード入力は不要。Slack に追加すれば、すぐに使えます
        </p>
      </div>
    </section>

    <!-- 期間と料金 -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          ★ 期間と料金
        </h2>

        <!-- β 試用 -->
        <div class="border-2 border-orange-400 bg-orange-50 rounded-2xl p-6 mb-4">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">1</div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1">
                β 試用（4 ヶ月無料・10/15 まで）
              </h3>
              <p class="text-2xl font-black text-orange-600 mb-2">4 ヶ月無料</p>
              <p class="text-sm text-gray-700 mb-3">
                すべての機能が完全無料。<br />
                クレジットカード入力は不要です。Slack に追加すれば、すぐに使えます。
              </p>
              <ul class="text-xs text-gray-700 space-y-1 leading-relaxed">
                <li>✅ Slack に追加するだけで、すぐに使えます</li>
                <li>✅ クレジットカード入力不要</li>
                <li>✅ データはいつでも CSV / Excel でエクスポート可能</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 矢印 -->
        <div class="text-center text-gray-400 text-2xl my-2">↓</div>

        <!-- ウェイトリスト経由の継続（β 経験者/未経験者で効果が異なる）-->
        <div class="border-2 border-cyan-400 bg-cyan-50 rounded-2xl p-6 mb-4">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">2</div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1">
                継続希望: ウェイトリストに応募
              </h3>
              <p class="text-sm text-gray-700 mb-3">
                β 試用後も使い続けたい方、最初からコミットしたい方はウェイトリストへ。
              </p>

              <div class="bg-white rounded-xl p-4 mb-3 border border-cyan-200">
                <p class="text-xs font-bold text-cyan-700 mb-2">特典 ①: 正式版リリース後も継続利用可能</p>
                <p class="text-xs text-gray-600 leading-relaxed">
                  β アクセスが 11/17 まで自動延長され、正式版（11/18 予定）まで連続して利用できます。
                </p>
              </div>

              <div class="bg-white rounded-xl p-4 mb-3 border border-cyan-200">
                <p class="text-xs font-bold text-cyan-700 mb-2">特典 ②: 正式版から 1 年間 50% OFF</p>
                <p class="text-xs text-gray-600 leading-relaxed">
                  Standard 通常価格の半額が 1 年間継続。<br />
                  <strong class="text-gray-800">β 経験有無を問わず、全ウェイトリスト応募者に適用</strong>。
                </p>
              </div>

              <p class="text-xs text-gray-600 mt-3">
                ※ ウェイトリストは先行 100 社限定（branding・実態は柔軟受け入れ）<br />
                ※ クレジットカード登録は正式版リリース前にメールでご案内します
              </p>
            </div>
          </div>
        </div>

        <!-- 矢印 -->
        <div class="text-center text-gray-400 text-2xl my-2">↓</div>

        <!-- 正式版以降 -->
        <div class="border border-gray-200 bg-gray-50 rounded-2xl p-6">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-lg">3</div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1">
                正式版リリース以降
              </h3>
              <p class="text-xl font-bold text-gray-700 mb-2">プランを選んで継続</p>
              <p class="text-sm text-gray-600">
                正式版は 2026/11/18 を予定しています。<br />
                解約はいつでも可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 何もしないとどうなるか -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
          <h3 class="text-lg font-bold text-gray-900 mb-3">📌 試用終了時に何もしないと？</h3>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>・試用終了日にアプリへのアクセスが停止します</li>
            <li>・データは <strong>90 日間保持</strong>されます（その期間中はいつでも CSV / Excel でエクスポート可）</li>
            <li>・90 日経過後はデータが削除されます</li>
            <li>・正式版リリース時にあらためてご契約いただくことも可能です（リリース時期は別途ご案内）</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ウェイトリスト 6 つの特典 -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-2 text-center">
          ウェイトリスト 6 つの特典
        </h2>
        <p class="text-sm text-gray-600 text-center mb-8">
          先行 100 社限定（branding）/ 試用中・前後を問わず応募可能
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(benefit, i) in benefits" :key="i" class="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div class="text-2xl mb-2">{{ benefit.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-1">{{ benefit.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 応募方法 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          β 試用に応募する
        </h2>

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 text-sm text-gray-700 leading-relaxed">
          <p class="font-semibold text-gray-900 mb-2">すぐに使えます</p>
          <p>
            メールアドレスと会社名を入力すると、Slack インストールリンクをメールでお送りします。
            リンクから Slack に追加した時点で、4 ヶ月の β 試用が自動的に開始します。
          </p>
        </div>

        <!-- 応募完了 -->
        <div v-if="submitted" class="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
          <img src="/kurage-smile.svg" alt="クラゲくん" class="w-16 h-16 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-900 mb-2">ご応募ありがとうございます！</h3>
          <p class="text-sm text-gray-700 mb-4 leading-relaxed">
            確認メールをお送りしました。<br />
            メール内の「Slack に追加」リンクから、4 ヶ月 β 試用を開始できます。
          </p>
          <a href="/" class="inline-block text-kurage-600 hover:underline font-medium">
            トップページに戻る
          </a>
        </div>

        <!-- 応募フォーム -->
        <form v-else @submit.prevent="submit" class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                会社名 <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.companyName"
                type="text"
                required
                maxlength="200"
                placeholder="株式会社○○"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                ご担当者 <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.contactName"
                type="text"
                required
                maxlength="100"
                placeholder="山田 太郎"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              メールアドレス <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="name@your-company.com"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
            />
            <p class="text-xs text-gray-500 mt-1">Slack インストールリンクをこのアドレス宛にお送りします。</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">役職</label>
              <input
                v-model="form.role"
                type="text"
                maxlength="100"
                placeholder="営業マネジャー / 経営層 / その他"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">チーム規模</label>
              <select
                v-model="form.teamSize"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent bg-white"
              >
                <option value="">選択してください</option>
                <option value="1-5">1〜5 人</option>
                <option value="6-10">6〜10 人</option>
                <option value="11-30">11〜30 人</option>
                <option value="31+">31 人以上</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              現在使用中の CRM / SFA
            </label>
            <input
              v-model="form.currentCrm"
              type="text"
              maxlength="200"
              placeholder="例: HubSpot、Salesforce、Excel、なし"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
            />
          </div>

          <!-- ロゴ・コミュニティ -->
          <div class="space-y-3 bg-gray-50 rounded-xl p-4">
            <label class="flex items-start gap-3 cursor-pointer">
              <input
                v-model="form.logoConsent"
                type="checkbox"
                class="mt-1 w-4 h-4 text-kurage-600 rounded focus:ring-kurage-500"
              />
              <span class="text-sm text-gray-700">
                LP・PR 素材へのロゴ掲載に同意する（任意・後から変更可）
              </span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input
                v-model="form.communityConsent"
                type="checkbox"
                class="mt-1 w-4 h-4 text-kurage-600 rounded focus:ring-kurage-500"
              />
              <span class="text-sm text-gray-700">
                ウェイトリスト限定 Slack コミュニティに参加する（任意・後から変更可）
              </span>
            </label>
          </div>

          <!-- Cloudflare Turnstile -->
          <div class="cf-turnstile" :data-sitekey="turnstileSiteKey"></div>

          <div v-if="error" class="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {{ error }}
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            {{ submitting ? '送信中…' : '4 ヶ月無料で試す（β 版）' }}
          </button>

          <p class="text-xs text-gray-500 text-center leading-relaxed">
            ★ クレジットカード入力は不要です。Slack に追加すれば、すぐに使えます。
          </p>
        </form>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          よくあるご質問
        </h2>
        <div class="space-y-4">
          <details v-for="(faq, i) in faqs" :key="i" class="bg-gray-50 border border-gray-200 rounded-xl p-5 group">
            <summary class="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
              <span>{{ faq.q }}</span>
              <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p class="text-sm text-gray-700 mt-3 leading-relaxed whitespace-pre-line">{{ faq.a }}</p>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

usePageSeo({
  path: '/beta',
  title: 'β 試用プログラム | クラゲディール',
  description:
    'クラゲディールのβ版を 4 ヶ月無料でお試しいただけます（2026/10/15 まで・クレジットカード不要）。10/15 までにウェイトリストへ応募すると正式版（11/18 予定）まで連続利用＋1 年間 50% OFF。',
})

const runtimeConfig = useRuntimeConfig()
const turnstileSiteKey = runtimeConfig.public.turnstileSiteKey

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

const form = reactive({
  email: '',
  companyName: '',
  contactName: '',
  role: '',
  teamSize: '',
  currentCrm: '',
  logoConsent: false,
  communityConsent: false,
})

const submitting = ref(false)
const submitted = ref(false)
const conversion = useConversion()
const error = ref('')

const benefits = [
  { icon: '⏰', title: '正式版まで継続利用可能', desc: '試用終了後も途切れずに正式版へつなげます。正式版のリリース時期は別途ご案内します。' },
  { icon: '💸', title: '正式版から 1 年間 50% OFF', desc: 'Standard 通常価格の半額が、1 年間続きます。' },
  { icon: '🎯', title: '機能リクエスト優先対応', desc: 'ウェイトリスト参加者からのご要望を、最優先で実装します。プロダクトの方向性に、直接関われます。' },
  { icon: '☕', title: '月次オフィスアワー', desc: '担当者との 30 分の 1on1 です（希望者のみ）。営業 DX の壁打ち相手として、お使いいただけます。' },
  { icon: '🌊', title: 'Pioneers ロゴ掲載', desc: 'LP・PR 素材に露出します（任意）。事例公開は、ブランド露出にもつながります。' },
  { icon: '💬', title: '限定 Slack コミュニティ', desc: 'ウェイトリスト参加者限定の Slack チャンネルです。経営層同士の情報交換にも使えます。' },
]

const faqs = [
  {
    q: 'β 試用とウェイトリスト、両方申し込めますか？',
    a: 'はい、両方ご応募いただけます。β 試用で気に入ったらウェイトリストへ、というのが一般的な流れです。最初からコミットしたい方は、両方を同時にご応募いただいても OK です。',
  },
  {
    q: 'ウェイトリスト 100 社が埋まったらどうなりますか？',
    a: '「先行 100 社限定」は緊急性を演出するブランディングですが、実態は柔軟に対応する方針です。100 社満員後のご応募についても、原則同条件で受け入れます。',
  },
  {
    q: 'β 試用中にウェイトリストに応募すると、どうなりますか？',
    a: 'β 試用後も継続利用できる特典が適用されます。正式版リリースまで途切れずにご利用いただけます。リリース時期は品質目標達成後に別途ご案内します。',
  },
  {
    q: '試用が終了したあと、ウェイトリストに応募できますか？',
    a: 'はい。試用終了後でもウェイトリストへのご応募は受け付けています。データも保持されているため、そのまま続けて利用可能です。',
  },
  {
    q: '正式版のリリース時期はいつですか？',
    a: '正式版は 2026/11/18 を予定しています。品質を最優先しているため、前後する場合があります。',
  },
  {
    q: 'データのエクスポートはどうやってやりますか？',
    a: 'ダッシュボードの Settings > データのエクスポート から、CSV / Excel 形式で contacts / deals / accounts / notes をエクスポートできます。試用期間中・終了後 90 日間、いつでもエクスポート可能です。',
  },
  {
    q: 'チーム規模が 31 人以上の場合は応募できますか？',
    a: 'もちろんご応募いただけますが、クラゲディールは 1〜10 人の小規模営業チームに最適化された製品です。31 人を超える場合は Enterprise プランの個別見積もり（カスタマイズ・SSO 対応など）が適切な場合もあります。応募時にその旨ご記入いただければ、その方向でご相談します。',
  },
  {
    q: '既存 β テスター各社との関係は？',
    a: '先行してご利用いただいている企業様は「ファウンダー β」として永続特典の特別枠です。新しい β 試用とは別枠で、本ページの応募とは関係なく既存条件で継続利用いただけます。',
  },
  {
    q: 'データのセキュリティは大丈夫ですか？',
    a: 'データは Google Cloud Platform 上で管理され、通信は SSL/TLS で暗号化されています。テナントごとに PostgreSQL の Row-Level Security で物理的に分離。お客様の営業データが AI の学習に使用されることはありません。',
  },
]

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
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(faqLd) }],
})

async function submit() {
  // Turnstile token を取得
  const tokenInput = document.querySelector('input[name="cf-turnstile-response"]') as HTMLInputElement | null
  const token = tokenInput?.value
  if (!token) {
    error.value = 'セキュリティチェックを完了してください'
    return
  }

  submitting.value = true
  error.value = ''

  // UTM パラメータ
  const url = new URL(window.location.href)

  try {
    const res = await fetch(`${API_URL}/api/beta-program/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.email,
        company_name: form.companyName,
        contact_name: form.contactName,
        team_size: form.teamSize || null,
        current_crm: form.currentCrm || null,
        applicant_role: form.role || null,
        logo_consent: form.logoConsent,
        community_consent: form.communityConsent,
        source: 'lp_beta_program',
        utm_source: url.searchParams.get('utm_source'),
        utm_medium: url.searchParams.get('utm_medium'),
        utm_campaign: url.searchParams.get('utm_campaign'),
        turnstileToken: token,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error ?? '応募に失敗しました')
    }
    submitted.value = true
    conversion.fire('beta')
  } catch (e) {
    error.value = e instanceof Error ? e.message : '応募に失敗しました'
    ;(window as any).turnstile?.reset?.()
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
details summary {
  list-style: none;
}
details summary::-webkit-details-marker {
  display: none;
}
</style>
