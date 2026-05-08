<template>
  <main class="pt-16 min-h-screen bg-gray-50">
    <!-- ヒーロー -->
    <section class="bg-gradient-to-br from-kurage-900 via-kurage-800 to-kurage-700 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <div class="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          🪼 100 社限定
        </div>
        <h1 class="text-3xl md:text-5xl font-black mb-4">
          β 参加プログラム
        </h1>
        <p class="text-lg md:text-xl text-kurage-100 mb-2 leading-relaxed">
          クラゲディールを、<br class="md:hidden" />最初に使う 100 社へ。
        </p>
        <p class="text-sm text-kurage-200">
          2026 年 6 月 9 日 募集開始 / 2026 年 11 月 17 日まで完全無料
        </p>

        <!-- 残り枠カウンター -->
        <div v-if="stats" class="mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-2xl">
          <span class="text-3xl font-black text-cyan-50">{{ stats.remaining }}</span>
          <span class="text-sm text-kurage-100">/ 100 社 残り</span>
          <span v-if="stats.total > 0" class="text-xs text-kurage-200 ml-2">
            （現在 {{ stats.total }} 社が応募中）
          </span>
        </div>
      </div>
    </section>

    <!-- 期間と料金（最重要セクション） -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          ★ 期間と料金
        </h2>

        <div class="space-y-4">
          <!-- ピリオド 1 -->
          <div class="border-2 border-orange-400 bg-orange-50 rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">
                  ピリオド 1（6/9 〜 11/17・約 5 ヶ月）
                </h3>
                <p class="text-2xl font-black text-orange-600 mb-2">完全無料</p>
                <p class="text-sm text-gray-700">
                  Standard プラン相当の全機能をご利用いただけます。クレジットカード入力は不要です。
                </p>
              </div>
            </div>
          </div>

          <!-- 矢印 -->
          <div class="text-center text-gray-400 text-2xl">↓</div>

          <!-- ピリオド 2 -->
          <div class="border-2 border-cyan-400 bg-cyan-50 rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">
                  ピリオド 2 移行（11/18 〜・1 年間）
                </h3>
                <p class="text-2xl font-black text-cyan-600 mb-2">月額 ¥4,500</p>
                <p class="text-sm text-gray-700">
                  通常価格 ¥9,800 の 50% OFF。10 月中旬にクレジットカード登録のご案内をお送りします。
                </p>
              </div>
            </div>
          </div>

          <!-- 矢印 -->
          <div class="text-center text-gray-400 text-2xl">↓</div>

          <!-- ピリオド 3 -->
          <div class="border border-gray-200 bg-gray-50 rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">
                  2027/11/18 以降
                </h3>
                <p class="text-xl font-bold text-gray-700 mb-2">月額 ¥9,800（通常価格）</p>
                <p class="text-sm text-gray-600">
                  解約はいつでも可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6 つの特典 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          β 参加プログラム の 6 つの特典
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(benefit, i) in benefits" :key="i" class="bg-white border border-gray-200 rounded-xl p-5">
            <div class="text-2xl mb-2">{{ benefit.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-1">{{ benefit.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 応募方法 -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          応募方法
        </h2>

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 text-sm text-gray-700 leading-relaxed">
          <p class="font-semibold text-gray-900 mb-2">先着 100 社限定</p>
          <p class="mb-3">
            鈴木が応募内容を確認した上で、5 営業日以内に個別にご返信します。
            応募多数の場合、すべての応募に β 枠をご用意できないことをあらかじめご了承ください。
          </p>
          <p class="font-semibold text-gray-900 mb-1">選抜基準（参考）</p>
          <ul class="list-disc list-inside space-y-1 text-gray-600">
            <li>5〜30 人の営業チームを持つ法人</li>
            <li>週 1 回以上、フィードバックを共有いただける</li>
            <li>新しい営業ツールに前向きな経営層</li>
          </ul>
        </div>

        <!-- 満員時 -->
        <div v-if="stats?.isFull" class="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 text-center">
          <p class="text-2xl mb-3">🪼</p>
          <h3 class="text-xl font-bold text-gray-900 mb-2">100 社満員に達しました</h3>
          <p class="text-sm text-gray-700 mb-4">
            たくさんのご応募ありがとうございました。<br/>
            通常のウェイトリストにご登録いただくと、11/18 の正式版開始時にご案内いたします。
          </p>
          <a href="/" class="inline-block text-kurage-600 hover:underline font-medium">
            正式版ウェイトリストに登録 →
          </a>
        </div>

        <!-- 応募完了 -->
        <div v-else-if="submitted" class="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
          <p class="text-5xl mb-4">🪼</p>
          <h3 class="text-xl font-bold text-gray-900 mb-2">ご応募ありがとうございます！</h3>
          <p class="text-sm text-gray-700 mb-4 leading-relaxed">
            確認メールをお送りしました。<br/>
            鈴木より 5 営業日以内に個別にご返信いたします。
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
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              チーム規模 <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.teamSize"
              required
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent bg-white"
            >
              <option value="">選択してください</option>
              <option value="1-5">1〜5 人</option>
              <option value="6-10">6〜10 人</option>
              <option value="11-30">11〜30 人</option>
              <option value="31+">31 人以上</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              現在使用中の CRM/SFA
            </label>
            <input
              v-model="form.currentCrm"
              type="text"
              maxlength="200"
              placeholder="例: HubSpot、Salesforce、Excel、なし"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              応募動機 <span class="text-red-500">*</span>
              <span class="text-gray-400 font-normal">（100 文字以上）</span>
            </label>
            <textarea
              v-model="form.motivation"
              required
              rows="5"
              maxlength="2000"
              placeholder="例: HubSpot Slack 連携を使っているが営業特化機能が物足りない。チーム全員での入力定着に苦労していて、Slack 完結の営業 CRM を試したい。営業 8 名、マネジャー 1 名のチーム。"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent resize-none"
            ></textarea>
            <p class="text-xs text-gray-500 mt-1">
              現在 {{ form.motivation.length }} / 100 文字以上
            </p>
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
                限定 Slack コミュニティに参加する（任意・後から変更可）
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
            :disabled="submitting || !canSubmit"
            class="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            {{ submitting ? '送信中…' : 'β 参加プログラムに応募する' }}
          </button>

          <p class="text-xs text-gray-500 text-center leading-relaxed">
            ★ クレジットカード入力は不要です。10 月中旬にメールでご案内します。
          </p>
        </form>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          よくあるご質問
        </h2>
        <div class="space-y-4">
          <details v-for="(faq, i) in faqs" :key="i" class="bg-white border border-gray-200 rounded-xl p-5 group">
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
import { ref, reactive, computed, onMounted } from 'vue'

useHead({ title: 'β 参加プログラム | クラゲディール' })

const runtimeConfig = useRuntimeConfig()
const turnstileSiteKey = runtimeConfig.public.turnstileSiteKey

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

interface Stats {
  remaining: number
  total: number
  limit: number
  isFull: boolean
}
const stats = ref<Stats | null>(null)

const form = reactive({
  email: '',
  companyName: '',
  contactName: '',
  teamSize: '',
  currentCrm: '',
  motivation: '',
  logoConsent: false,
  communityConsent: false,
})

const submitting = ref(false)
const submitted = ref(false)
const error = ref('')

const canSubmit = computed(() => form.motivation.trim().length >= 100)

const benefits = [
  { icon: '✨', title: 'ピリオド 1 完全無料', desc: '6/9 〜 11/17（5 ヶ月）の利用は完全無料。クレジットカード登録も不要です。' },
  { icon: '💸', title: 'ピリオド 2 から 1 年間 50% OFF', desc: '11/18 〜 月額 ¥4,500（通常 ¥9,800 の半額）が 1 年間継続。' },
  { icon: '🎯', title: '機能リクエスト優先対応', desc: 'β 参加者からのご要望を最優先で実装します。プロダクト方向性に直接関与できます。' },
  { icon: '☕', title: '月次オフィスアワー', desc: '鈴木との 30 分の 1on1（希望者のみ）。営業 DX の壁打ち相手として。' },
  { icon: '🪼', title: 'ロゴ掲載・限定コミュニティ', desc: 'LP・PR 素材への露出（任意）+ β 参加者限定 Slack コミュニティ。' },
  { icon: '🚀', title: 'AgentExchange Featured 露出機会', desc: 'Salesforce AgentExchange 公開時の Featured Customer として紹介可能。' },
]

const faqs = [
  {
    q: '5 ヶ月の間、本当に完全無料ですか?',
    a: 'はい。6/9 〜 11/17 の期間中はクレジットカード入力も不要です。'
  },
  {
    q: '11/18 から自動的に課金されますか?',
    a: '10 月中旬にメールでお知らせします。クレジットカード登録はその時点で個別にご案内します。\n登録なしの場合、サービス利用は 11/17 で終了します（自動課金されません）。'
  },
  {
    q: '100 社満員になったらどうなりますか?',
    a: '通常のウェイトリストにご登録いただけます。11 月の正式版開始時に Free / Standard / Premium のいずれかをお選びいただけます。'
  },
  {
    q: '既存 β テスター 4 社との関係は?',
    a: '既存 4 社（OPRO・Opti・WeLearn・SI Inc）は「ファウンダー β」として永続特典の特別枠です。\n新しい β 100 社プログラムとは別枠で、100 社の枠を消費しません。'
  },
  {
    q: '応募から承認までの流れは?',
    a: '1. フォーム送信 → 確認メール自動送付\n2. 鈴木が応募内容を確認（5 営業日以内）\n3. 承認の場合、Slack インストールリンクと共にご返信\n4. 6/9 から β プログラム利用開始'
  },
  {
    q: 'チーム規模が 31 人以上の場合は?',
    a: 'β 参加プログラムにご応募いただけますが、Enterprise プランの個別見積もりが適切な場合もあります。応募時に「Enterprise 検討」と書いていただければ、その方向でもご相談に乗ります。'
  },
]

async function loadStats() {
  try {
    const res = await fetch(`${API_URL}/api/beta-program/stats`)
    if (res.ok) {
      stats.value = await res.json()
    }
  } catch (e) {
    console.warn('[beta-program] stats load failed:', e)
  }
}

onMounted(() => {
  loadStats()
})

async function submit() {
  if (!canSubmit.value) {
    error.value = '応募動機は 100 文字以上でご記入ください'
    return
  }

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
        team_size: form.teamSize,
        current_crm: form.currentCrm || null,
        motivation: form.motivation,
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
      // 満員時は再読み込みして UI 切替
      if (data.isFull) {
        await loadStats()
      }
      throw new Error(data.error ?? '応募に失敗しました')
    }
    submitted.value = true
  } catch (e) {
    error.value = e instanceof Error ? e.message : '応募に失敗しました'
    // Turnstile リセット
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
