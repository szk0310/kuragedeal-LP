<template>
  <main class="pt-16 min-h-screen bg-gray-50">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 py-20">
      <div class="text-center mb-12">
        <img src="/kurage-on-white.svg" alt="クラゲディール" class="w-16 h-16 mx-auto mb-4" />
        <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          {{ isEnterprise ? 'Enterprise プラン ご相談' : 'お問い合わせ' }}
        </h1>
        <p class="text-sm text-gray-600 leading-relaxed">
          <template v-if="isEnterprise">
            11 人以上のチーム・カスタマイズが必要な企業向けの個別ご相談窓口です。<br />
            数営業日以内に鈴木より直接ご連絡いたします。
          </template>
          <template v-else>
            ご質問・ご要望は下記フォームからお気軽にどうぞ。<br />
            β 試用のお申し込みは <a href="/beta" class="text-kurage-600 underline">/beta</a> から。
          </template>
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

        <!-- Success state -->
        <div v-if="submitted" class="flex flex-col items-center justify-center text-center py-12">
          <img src="/kurage-smile.svg" alt="クラゲディール" class="w-20 h-20 mx-auto mb-4 kurage-float" />
          <h2 class="text-2xl font-black text-gray-900 mb-3">送信完了しました！</h2>
          <p class="text-gray-600 mb-2">
            お問い合わせありがとうございます🪼
          </p>
          <p class="text-gray-500 mb-6">
            数営業日以内に鈴木より直接ご連絡いたします。
          </p>
          <a href="/" class="text-kurage-600 font-medium hover:underline">トップに戻る</a>
        </div>

        <form v-else @submit.prevent="submit" class="space-y-6">
          <!-- お問い合わせ種別 -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              お問い合わせ種別
            </label>
            <select
              v-model="form.subject"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent bg-white"
            >
              <option value="enterprise">Enterprise プラン ご相談（11 人以上）</option>
              <option value="general">一般的なお問い合わせ</option>
              <option value="press">取材・PR・パートナーシップ</option>
              <option value="bug">不具合報告</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                会社名 <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.company"
                type="text"
                required
                placeholder="株式会社〇〇"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                お名前 <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                required
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
              placeholder="taro@example.com"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              営業チームの人数
            </label>
            <select
              v-model="form.teamSize"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent bg-white"
            >
              <option value="">選択してください</option>
              <option value="1">1人（一人社長・フリーランス）</option>
              <option value="2-5">2〜5人</option>
              <option value="6-10">6〜10人</option>
              <option value="11-30">11〜30人</option>
              <option value="31+">31人以上</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              現在使用中の CRM / SFA
            </label>
            <select
              v-model="form.currentCrm"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent bg-white"
            >
              <option value="">選択してください</option>
              <option value="excel">Excel / スプレッドシート</option>
              <option value="salesforce">Salesforce</option>
              <option value="hubspot">HubSpot</option>
              <option value="other_crm">その他のCRM</option>
              <option value="none">なし</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              ご要望・ご質問
              <span v-if="isEnterprise" class="text-red-500">*</span>
              <span v-else class="text-gray-400 text-xs">（任意）</span>
            </label>
            <textarea
              v-model="form.message"
              :rows="isEnterprise ? 6 : 4"
              :required="isEnterprise"
              :placeholder="isEnterprise
                ? 'ご検討中の利用人数、必要なカスタマイズ、セキュリティ要件、現在の課題など、できるだけ詳しくお書きください'
                : '具体的なご要望・ご質問内容'"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent resize-none"
            />
          </div>

          <!-- Cloudflare Turnstile -->
          <div class="flex justify-center">
            <div
              class="cf-turnstile"
              :data-sitekey="turnstileSiteKey"
              data-callback="onTurnstileSuccess"
            ></div>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            {{ submitting ? '送信中…' : '送信する →' }}
          </button>

          <p class="text-xs text-gray-400 text-center">
            送信することで、プライバシーポリシーに同意したものとみなします。
          </p>
        </form>

      </div>

      <div class="mt-8 bg-kurage-50 border border-kurage-100 rounded-2xl p-6 text-center">
        <p class="text-sm text-gray-600 mb-3">
          <strong>開発元: shiro Inc.</strong>
        </p>
        <div class="flex items-center justify-center gap-3">
          <img src="/sf-partner-logo.png" alt="Salesforce Partner" class="h-10 w-auto" />
          <p class="text-sm text-kurage-600">Salesforce 認定コンサルティングパートナー</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'お問い合わせ | クラゲディール' })

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const turnstileSiteKey = runtimeConfig.public.turnstileSiteKey

const VALID_SUBJECTS = ['enterprise', 'general', 'press', 'bug'] as const

// SSR/prerender 時は route.query が空のため、SSR では暫定で 'enterprise' を初期値にし、
// クライアントハイドレーション後に onMounted で URL クエリを読み直して上書きする。
// (Cloudflare Pages の prerender で生成された静的 HTML に query が反映されない問題への対処)
function pickSubjectFromQuery(): string {
  const q = (route.query.subject as string | undefined)?.toLowerCase()
  if (q && (VALID_SUBJECTS as readonly string[]).includes(q)) return q
  // LP の Enterprise カードからの導線が主用途なのでデフォルト enterprise
  return 'enterprise'
}

const form = reactive({
  subject: pickSubjectFromQuery(),
  company: '',
  name: '',
  email: '',
  teamSize: '',
  currentCrm: '',
  message: '',
})

// ハイドレーション後に再評価。Nuxt prerender + Cloudflare Pages の組み合わせで
// route.query が hydration 時点で空のままになることがあるため、window.location.search を
// 最優先で読み取り、route.query は補助的に使う。
onMounted(() => {
  // 1. window.location.search を最優先 (確実に URL から取れる)
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const q = (params.get('subject') || '').toLowerCase()
    if (q && (VALID_SUBJECTS as readonly string[]).includes(q)) {
      form.subject = q
      return
    }
  }
  // 2. fallback: route.query (Vue Router 経由、SPA 内遷移の場合はこちらで取れる)
  const fromRoute = pickSubjectFromQuery()
  if (fromRoute !== form.subject) {
    form.subject = fromRoute
  }
})

const isEnterprise = computed(() => form.subject === 'enterprise')

const submitting = ref(false)
const submitted = ref(false)

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

const SUBJECT_LABEL: Record<string, string> = {
  enterprise: 'Enterprise プラン相談',
  general: '一般お問い合わせ',
  press: '取材・PR・パートナーシップ',
  bug: '不具合報告',
}

async function submit() {
  const turnstileInput = document.querySelector('input[name="cf-turnstile-response"]') as HTMLInputElement | null
  const turnstileToken = turnstileInput?.value
  if (!turnstileToken) {
    alert('セキュリティチェックを完了してから送信してください。')
    return
  }

  // 既存 /api/contact API は subject を扱わないため、message 冒頭に件名を prepend する。
  // 鈴木さんが受信メール本文の先頭で問い合わせ種別を判別できる。
  const subjectLabel = SUBJECT_LABEL[form.subject] ?? '一般お問い合わせ'
  const enrichedMessage = `[件名] ${subjectLabel}\n\n${form.message || '（本文なし）'}`

  submitting.value = true
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        company: form.company,
        name: form.name,
        email: form.email,
        teamSize: form.teamSize,
        currentCrm: form.currentCrm,
        message: enrichedMessage,
        // subject を明示的に送る → API 側で /free (β 申込み) との分岐に使う。
        // これにより /contact 経由の Enterprise 相談者に「Slack インストールリンク」が
        // 誤送信される事故を防ぐ。
        subject: form.subject,
        turnstileToken,
      }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data.error ?? '送信に失敗しました。時間をおいて再度お試しください。')
      if (typeof (window as any).turnstile !== 'undefined') {
        (window as any).turnstile.reset()
      }
      return
    }
    submitted.value = true
  } catch {
    alert('通信エラーが発生しました。時間をおいて再度お試しください。')
    if (typeof (window as any).turnstile !== 'undefined') {
      (window as any).turnstile.reset()
    }
  } finally {
    submitting.value = false
  }
}
</script>
