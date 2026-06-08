<template>
  <main class="pt-16 min-h-screen bg-gray-50">
    <!-- ヒーロー -->
    <section class="bg-gradient-to-br from-kurage-900 via-kurage-800 to-kurage-700 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <div class="inline-block bg-kurage-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          💎 先行 100 社限定
        </div>
        <h1 class="text-3xl md:text-5xl font-black mb-4">
          ウェイトリスト
        </h1>
        <p class="text-lg md:text-xl text-kurage-100 mb-2 leading-relaxed">
          β アクセスを 11/17 まで自動延長 + <br class="md:hidden" />正式版から 1 年間 50% OFF。
        </p>
        <p class="text-sm text-kurage-200">
          β 試用中・前後を問わず応募可能 / 2026/6/9 〜 2026/11/17
        </p>
      </div>
    </section>

    <!-- ウェイトリストとは -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          ウェイトリストとは
        </h2>

        <p class="text-base text-gray-700 leading-relaxed mb-8">
          ウェイトリストは、β 試用後も継続利用される予定の方への
          <strong>「先行コミット」プログラム</strong>です。応募いただくと、β 試用が 9/8 で切れずに正式版開始まで連続利用でき、さらに正式版開始から 1 年間 50% OFF で継続できます。
        </p>

        <!-- 特典 ①: β 経験者のみ -->
        <div class="border-2 border-orange-400 bg-orange-50 rounded-2xl p-6 mb-4">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">①</div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1">
                β アクセスを 2026 年 11 月 17 日まで自動延長
              </h3>
              <p class="text-sm text-gray-700 leading-relaxed mb-2">
                試用が 9/8 で切れず、正式版（11/18）まで連続利用可能。
              </p>
              <p class="text-xs text-gray-600 leading-relaxed bg-white rounded p-3 border border-orange-200">
                <strong class="text-orange-700">★ β 経験者が応募した場合のみ</strong>有効です。
                β 未経験者が 9/9 以降に応募した場合、β アクセス権は付与されません。
              </p>
            </div>
          </div>
        </div>

        <!-- 特典 ②: 全応募者 -->
        <div class="border-2 border-cyan-400 bg-cyan-50 rounded-2xl p-6 mb-6">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">②</div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1">
                1 年間 月 ¥4,500（50% OFF）
              </h3>
              <p class="text-sm text-gray-700 leading-relaxed mb-2">
                2026/11/18 〜 2027/11/17 の 1 年間、Standard 通常価格 ¥9,800 の半額で継続できます。
              </p>
              <p class="text-xs text-gray-600 leading-relaxed bg-white rounded p-3 border border-cyan-200">
                <strong class="text-cyan-700">★ β 経験有無を問わず、全ウェイトリスト応募者に適用</strong>します。
              </p>
            </div>
          </div>
        </div>

        <!-- その他特典 -->
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h4 class="font-bold text-gray-900 mb-3">その他特典</h4>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>✅ 機能リクエスト優先対応</li>
            <li>✅ 月次オフィスアワー（担当者との 30 分・希望者のみ）</li>
            <li>✅ LP「Pioneers」ロゴ掲載（任意）</li>
            <li>✅ ウェイトリスト限定 Slack コミュニティ</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 応募方法 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          応募する
        </h2>

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 text-sm text-gray-700 leading-relaxed">
          <p class="font-semibold text-gray-900 mb-2">先行 100 社限定（branding）</p>
          <p>
            「先行 100 社限定」は緊急性を演出するブランディングですが、実態は柔軟に対応します。
            100 社満員後のご応募も、原則同条件で受け入れます。
          </p>
        </div>

        <!-- 応募完了 -->
        <div v-if="submitted" class="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
          <img src="/kurage-smile.svg" alt="クラゲくん" class="w-16 h-16 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-900 mb-2">ご応募ありがとうございます！</h3>
          <p v-if="trialExtended" class="text-sm text-gray-700 mb-4 leading-relaxed">
            <strong class="text-orange-600">β アクセスを 2026 年 11 月 17 日まで自動延長しました。</strong><br/>
            10 月中旬にクレジットカード登録のご案内をメールでお送りします。
          </p>
          <p v-else class="text-sm text-gray-700 mb-4 leading-relaxed">
            確認メールをお送りしました。<br/>
            10 月中旬にクレジットカード登録のご案内をメールでお送りします。
          </p>
          <a href="/" class="inline-block text-kurage-600 hover:underline font-medium">
            トップページに戻る
          </a>
        </div>

        <!-- 応募フォーム -->
        <form v-else @submit.prevent="submit" class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-5">
          <p class="text-xs text-gray-600 mb-2">
            ※ β 試用中の方は、応募と同じメールアドレスをご使用ください。自動的に照合され、β アクセスが 11/17 まで延長されます。
          </p>

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
                v-model="form.applicantName"
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
            <p class="text-xs text-gray-500 mt-1">β 試用と同じメールなら自動連携します。</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">役職</label>
              <input
                v-model="form.applicantRole"
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

          <!-- Cloudflare Turnstile -->
          <div class="cf-turnstile" :data-sitekey="turnstileSiteKey"></div>

          <div v-if="error" class="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {{ error }}
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="w-full bg-kurage-600 hover:bg-kurage-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            {{ submitting ? '送信中…' : 'ウェイトリストに登録する' }}
          </button>

          <p class="text-xs text-gray-500 text-center leading-relaxed">
            ※ 申込時クレジットカード不要 / ※ 11/18 から課金開始（10 月にメールで案内）
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
  path: '/waitlist',
  title: 'ウェイトリスト | クラゲディール',
  description:
    'クラゲディールのウェイトリスト。9/8 までに応募すると、βアクセスが 11/17 まで自動延長され正式版（11/18 目標）まで連続利用でき、さらに正式版から 1 年間 50% OFF で継続できます。先行 100 社限定。',
})

const runtimeConfig = useRuntimeConfig()
const turnstileSiteKey = runtimeConfig.public.turnstileSiteKey

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

const form = reactive({
  email: '',
  companyName: '',
  applicantName: '',
  applicantRole: '',
  teamSize: '',
  currentCrm: '',
})

const submitting = ref(false)
const submitted = ref(false)
const trialExtended = ref(false)
const error = ref('')

const faqs = [
  {
    q: 'ウェイトリスト 100 社が埋まったらどうなりますか？',
    a: '「先行 100 社限定」は緊急性を演出するブランディングですが、実態は柔軟に対応する方針です。100 社満員後のご応募についても、原則同条件で受け入れます。',
  },
  {
    q: 'β 試用中に応募すると、どうなりますか？',
    a: 'β アクセス期限が 2026 年 11 月 17 日まで自動延長されます。9 月 8 日の一斉終了を回避でき、正式版開始まで連続して利用可能です。\n※ β 試用と同じメールアドレスで応募してください。自動的に照合されます。',
  },
  {
    q: 'β 試用前 / 未経験で応募できますか？',
    a: 'はい、応募可能です。ただし「β アクセスを 11/17 まで延長」の特典は β 経験者のみが対象です。未経験者は「正式版から 1 年間 50% OFF」の特典のみとなります。',
  },
  {
    q: '試用が終了したあと（9/8 以降）、応募できますか？',
    a: 'はい、応募可能です。試用終了後 90 日以内であれば、ウェイトリスト応募で β アクセスを再開し、11 月 17 日まで延長できます。データも保持されているため、そのまま続けて利用可能です。',
  },
  {
    q: 'クレジットカードの登録はいつしますか？',
    a: '応募時には不要です。2026 年 10 月中旬に、11 月 18 日からの課金開始のご案内メールをお送りし、その際にクレジットカード登録の手順をご案内します。',
  },
  {
    q: '途中で解約できますか？',
    a: 'はい、いつでも解約可能です。半額期間中（2027/11/17 まで）に解約された場合も、解約日まで通常通りご利用いただけます。',
  },
]

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
    const res = await fetch(`${API_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.email,
        company_name: form.companyName,
        applicant_name: form.applicantName,
        applicant_role: form.applicantRole || null,
        team_size: form.teamSize || null,
        current_crm: form.currentCrm || null,
        source: 'lp_waitlist',
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
    const data = await res.json().catch(() => ({}))
    trialExtended.value = !!data.trial_extended
    submitted.value = true
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
