<template>
  <LpFrame main-id="contact">
    <div class="p-contact">
      <div class="c-sec-ttl">
        <img :src="KURAGE_ICON" alt="クラゲディール" class="p-contact__head-icon" />
        <h1 class="c-sec-ttl__ja">
          {{ isEnterprise ? '11 人以上のご相談' : 'お問い合わせ' }}
        </h1>
      </div>
      <p class="c-lead" style="margin-top: calc(24 * var(--u));">
        <template v-if="isEnterprise">
          11 人以上のチーム・カスタマイズが必要な企業向けの個別ご相談窓口です。<br />
          数営業日以内に鈴木より直接ご連絡いたします。
        </template>
        <template v-else>
          ご質問・ご要望は下記フォームからお気軽にどうぞ。<br />
          14 日間無料トライアルは <a href="https://api.kuragedeal.ai/slack/install" style="color: var(--color-accent3); text-decoration: underline;">Slack に追加</a> するだけで、今すぐ始められます。
        </template>
      </p>

      <div class="c-card" style="margin-top: calc(50 * var(--u));">

        <!-- Success state -->
        <div v-if="submitted" class="p-contact__success">
          <img :src="KURAGE_ICON" alt="クラゲディール" class="p-contact__success-icon kurage-float" />
          <p class="p-contact__success-ttl">送信完了しました！</p>
          <p class="p-contact__success-text">
            お問い合わせありがとうございます<br />
            <!-- E-231【不具合】: 11人以上のご相談以外（一般/取材/不具合報告）でも
                 一律「鈴木より」と個人名を出していた。種別に応じて出し分ける。 -->
            <template v-if="isEnterprise">数営業日以内に鈴木より直接ご連絡いたします。</template>
            <template v-else>数営業日以内に担当者より直接ご連絡いたします。</template>
          </p>
          <a href="/" class="p-contact__success-link">トップに戻る</a>
        </div>

        <form v-else @submit.prevent="submit">
          <!-- お問い合わせ種別 -->
          <div class="c-form-group">
            <label class="c-form-label">お問い合わせ種別</label>
            <select v-model="form.subject" class="c-form-input">
              <option value="enterprise">11 人以上のご相談</option>
              <option value="general">一般的なお問い合わせ</option>
              <option value="press">取材・PR・パートナーシップ</option>
              <option value="bug">不具合報告</option>
            </select>
          </div>

          <div class="c-form-row c-form-row--2" style="margin-bottom: calc(36 * var(--u));">
            <div>
              <label class="c-form-label">会社名 <span class="c-form-required">*</span></label>
              <input v-model="form.company" type="text" required placeholder="株式会社〇〇" class="c-form-input" />
            </div>
            <div>
              <label class="c-form-label">お名前 <span class="c-form-required">*</span></label>
              <input v-model="form.name" type="text" required placeholder="山田 太郎" class="c-form-input" />
            </div>
          </div>

          <div class="c-form-group">
            <label class="c-form-label">メールアドレス <span class="c-form-required">*</span></label>
            <input v-model="form.email" type="email" required placeholder="taro@example.com" class="c-form-input" />
          </div>

          <div class="c-form-group">
            <label class="c-form-label">営業チームの人数</label>
            <select v-model="form.teamSize" class="c-form-input">
              <option value="">選択してください</option>
              <option value="1">1人（一人社長・フリーランス）</option>
              <option value="2-5">2〜5人</option>
              <option value="6-10">6〜10人</option>
              <option value="11-30">11〜30人</option>
              <option value="31+">31人以上</option>
            </select>
          </div>

          <div class="c-form-group">
            <label class="c-form-label">現在使用中の CRM / SFA</label>
            <select v-model="form.currentCrm" class="c-form-input">
              <option value="">選択してください</option>
              <option value="excel">Excel / スプレッドシート</option>
              <option value="salesforce">Salesforce</option>
              <option value="hubspot">HubSpot</option>
              <option value="other_crm">その他のCRM</option>
              <option value="none">なし</option>
            </select>
          </div>

          <div class="c-form-group">
            <label class="c-form-label">
              ご要望・ご質問
              <span v-if="isEnterprise" class="c-form-required">*</span>
              <span v-else class="c-form-optional">（任意）</span>
            </label>
            <textarea
              v-model="form.message"
              :rows="isEnterprise ? 6 : 4"
              :required="isEnterprise"
              :placeholder="isEnterprise
                ? 'ご検討中の利用人数、必要なカスタマイズ、セキュリティ要件、現在の課題など、できるだけ詳しくお書きください'
                : '具体的なご要望・ご質問内容'"
              class="c-form-input"
            />
          </div>

          <!-- Cloudflare Turnstile -->
          <div style="display:flex; justify-content:center; margin-bottom: calc(36 * var(--u));">
            <div ref="turnstileEl"></div>
          </div>

          <button type="submit" :disabled="submitting" class="c-form-submit">
            {{ submitting ? '送信中…' : '送信する →' }}
          </button>

          <p class="c-form-note">
            送信することで、プライバシーポリシーに同意したものとみなします。
          </p>
        </form>

      </div>

      <div class="p-contact__dev-box">
        <p><strong>開発元：株式会社shiro</strong></p>
        <div style="display:flex; align-items:center; justify-content:center; gap: calc(14 * var(--u));">
          <img src="/sf-partner-logo.png" alt="Salesforce Partner" />
          <p style="margin:0; color: var(--color-accent3);">Salesforce 認定コンサルティングパートナー</p>
        </div>
      </div>
    </div>
  </LpFrame>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（option A・6ページ目）。
// フォーム部品はこのページだけで使うためcontact.css（新規）に閉じた。
import '~/assets/css/lp/contact.css'

// /contact は SSR/prerender を無効化し client-only でレンダリング。
// 理由: 静的 HTML に form.subject の初期値 (enterprise) が焼き付き、
// hydration 後に subject を書き換えても <h1> や <select> の表示が
// 古いまま残る hydration mismatch が発生していたため。
// client-only にすれば初回 setup() が URL クエリ読める状態で実行され
// 確実に正しい値で描画される。
definePageMeta({ ssr: false })

usePageSeo({
  path: '/contact',
  title: 'お問い合わせ | クラゲディール',
  description:
    'クラゲディール（株式会社shiro）へのお問い合わせ。11 人以上のご相談、一般的なご質問、取材のご依頼などを受け付けています。',
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const turnstileSiteKey = runtimeConfig.public.turnstileSiteKey

const VALID_SUBJECTS = ['enterprise', 'general', 'press', 'bug'] as const

// SSR/prerender 時は route.query が空のため、SSR では暫定で 'general' を初期値にし、
// クライアントハイドレーション後に onMounted で URL クエリを読み直して上書きする。
// (Cloudflare Pages の prerender で生成された静的 HTML に query が反映されない問題への対処)
function pickSubjectFromQuery(): string {
  const q = (route.query.subject as string | undefined)?.toLowerCase()
  if (q && (VALID_SUBJECTS as readonly string[]).includes(q)) return q
  // E-231【不具合】: ?subject= を付けずに普通に開いたとき（サイト内にリンクが無く、
  // 直打ち/外部リンク経由が主）は「お問い合わせ」の見出しになるべきなのに、
  // 以前はここが 'enterprise' 固定だったため「11人以上のご相談」が誤って出ていた。
  return 'general'
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

// Turnstile を明示レンダリング。client-only/SPA では implicit 描画＋文字列コールバックが
// 不安定だったため、api.js ロード後に turnstile.render() を自前で呼び、直接コールバックで
// トークンを ref に保持する（確実）。
const turnstileEl = ref<HTMLElement | null>(null)
const turnstileTokenRef = ref('')
let turnstileWidgetId: string | undefined
onMounted(() => {
  const render = (): boolean => {
    const ts = (window as any).turnstile
    if (turnstileWidgetId !== undefined) return true
    if (!ts || !turnstileEl.value) return false
    turnstileWidgetId = ts.render(turnstileEl.value, {
      sitekey: turnstileSiteKey,
      callback: (t: string) => { turnstileTokenRef.value = t || '' },
      'error-callback': () => { turnstileTokenRef.value = '' },
      'expired-callback': () => { turnstileTokenRef.value = '' },
    })
    return true
  }
  if (!render()) {
    const iv = setInterval(() => { if (render()) clearInterval(iv) }, 200)
    setTimeout(() => clearInterval(iv), 10000)
  }
})

const submitting = ref(false)
const submitted = ref(false)
const conversion = useConversion()

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

const SUBJECT_LABEL: Record<string, string> = {
  enterprise: '11人以上のご相談',
  general: '一般お問い合わせ',
  press: '取材・PR・パートナーシップ',
  bug: '不具合報告',
}

async function submit() {
  // 明示レンダリングのコールバックで保持したトークンを使用。未取得なら公式 API を試す（try/catch）。
  let turnstileToken = turnstileTokenRef.value
  if (!turnstileToken) {
    try {
      const ts = (window as any).turnstile
      if (ts && typeof ts.getResponse === 'function') turnstileToken = (ts.getResponse(turnstileWidgetId) || '') as string
    } catch { /* noop */ }
  }
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
        // subject を明示的に送る → API 側で一般のお問い合わせとの分岐に使う。
        // これにより /contact 経由の 11 人以上のご相談者に「Slack インストールリンク」が
        // 誤送信される事故を防ぐ。
        subject: form.subject,
        turnstileToken,
      }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data.error ?? '送信に失敗しました。時間をおいて再度お試しください。')
      if (typeof (window as any).turnstile !== 'undefined') {
        (window as any).turnstile.reset(turnstileWidgetId); turnstileTokenRef.value = ''
      }
      return
    }
    submitted.value = true
    conversion.fire('contact')
  } catch {
    alert('通信エラーが発生しました。時間をおいて再度お試しください。')
    if (typeof (window as any).turnstile !== 'undefined') {
      (window as any).turnstile.reset(turnstileWidgetId); turnstileTokenRef.value = ''
    }
  } finally {
    submitting.value = false
  }
}
</script>
