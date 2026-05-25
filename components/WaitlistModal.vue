<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        @click.self="close"
      >
        <div class="bg-white rounded-2xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto">
          <!-- 完了状態 -->
          <div v-if="completed" class="text-center py-8">
            <img src="/kurage-smile.svg" alt="クラゲくん" class="w-16 h-16 mx-auto mb-4" />
            <h4 class="text-xl font-bold text-gray-900 mb-2">ご登録ありがとうございます！</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              確認メールをお送りしました。<br/>
              2026 年秋の正式版ローンチをお楽しみに。
            </p>
            <button
              @click="close"
              class="mt-6 text-kurage-600 hover:underline font-medium"
            >閉じる</button>
          </div>

          <!-- 入力フォーム -->
          <template v-else>
            <div class="flex items-start justify-between mb-6">
              <div>
                <h3 class="text-2xl font-bold text-gray-900">正式版ウェイトリスト</h3>
                <p class="text-sm text-gray-500 mt-2 leading-relaxed">
                  2026 年秋ローンチ時、アーリーアダプター 100 社プログラムを<br/>
                  <strong>24 時間先行</strong>でご案内します。
                </p>
              </div>
              <button
                @click="close"
                class="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                aria-label="閉じる"
              >×</button>
            </div>

            <form @submit.prevent="submit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="name@your-company.com"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kurage-500 focus:border-kurage-500 outline-none transition-shadow"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">会社名</label>
                <input
                  v-model="form.companyName"
                  type="text"
                  maxlength="200"
                  placeholder="株式会社○○"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kurage-500 focus:border-kurage-500 outline-none transition-shadow"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">チーム規模</label>
                <select
                  v-model="form.teamSize"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kurage-500 focus:border-kurage-500 outline-none transition-shadow bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="1-5">1〜5 人</option>
                  <option value="6-10">6〜10 人</option>
                  <option value="11-30">11〜30 人</option>
                  <option value="31+">31 人以上</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  興味を持った理由（任意）
                </label>
                <textarea
                  v-model="form.reason"
                  rows="3"
                  maxlength="1000"
                  placeholder="例: HubSpot Slack 連携を使っているが不満があるため、別の選択肢を探しています"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kurage-500 focus:border-kurage-500 outline-none transition-shadow resize-none"
                ></textarea>
              </div>

              <!-- Cloudflare Turnstile -->
              <div class="cf-turnstile" :data-sitekey="turnstileSiteKey"></div>

              <div v-if="error" class="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {{ error }}
              </div>

              <button
                type="submit"
                :disabled="submitting"
                class="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors"
              >
                {{ submitting ? '登録中…' : 'ウェイトリストに登録する' }}
              </button>

              <p class="text-xs text-gray-500 text-center leading-relaxed">
                登録時、確認メールをお送りします。<br/>
                配信解除はメール本文末尾のリンクからいつでも可能です。
              </p>
            </form>
          </template>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const runtimeConfig = useRuntimeConfig()
const turnstileSiteKey = runtimeConfig.public.turnstileSiteKey as string

// API base URL（pages/index.vue と統一）
const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

const form = reactive({
  email: '',
  companyName: '',
  teamSize: '',
  reason: '',
})
const submitting = ref(false)
const completed = ref(false)
const error = ref('')

function close() {
  emit('close')
  // 閉じた後に状態リセット（次回開いたときフレッシュに）
  setTimeout(() => {
    completed.value = false
    error.value = ''
  }, 300)
}

async function submit() {
  submitting.value = true
  error.value = ''

  // Turnstile token を取得
  const tokenInput = document.querySelector('[name="cf-turnstile-response"]') as HTMLInputElement | null
  const token = tokenInput?.value
  if (!token) {
    error.value = 'セキュリティチェックを完了してください'
    submitting.value = false
    return
  }

  // UTM パラメータを取得（ある場合）
  const url = new URL(window.location.href)

  try {
    const res = await fetch(`${API_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.email,
        company_name: form.companyName || null,
        team_size: form.teamSize || null,
        reason: form.reason || null,
        source: 'lp_modal',
        utm_source: url.searchParams.get('utm_source'),
        utm_medium: url.searchParams.get('utm_medium'),
        utm_campaign: url.searchParams.get('utm_campaign'),
        turnstileToken: token,
      }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error ?? '登録に失敗しました')
    }
    completed.value = true
  } catch (e) {
    error.value = e instanceof Error ? e.message : '登録に失敗しました'
    // Turnstile をリセットして再挑戦可能に
    ;(window as any).turnstile?.reset?.()
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
