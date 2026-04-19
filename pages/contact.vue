<template>
  <main class="pt-16 min-h-screen bg-gray-50">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 py-20">
      <div class="text-center mb-12">
        <img src="/kurage-icon.svg" alt="クラゲディール" class="w-16 h-16 mx-auto mb-4" />
        <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">お問い合わせ</h1>
        <p class="text-gray-500">
          まずはお気軽にご連絡ください。<br />
          担当者より1営業日以内にご連絡いたします。
        </p>
      </div>

      <div class="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

        <!-- Success state -->
        <div v-if="submitted" class="flex flex-col items-center justify-center text-center py-12">
          <img src="/kurage-icon.svg" alt="クラゲディール" class="w-20 h-20 mx-auto mb-4 kurage-float" />
          <h2 class="text-2xl font-black text-gray-900 mb-3">送信完了しました！</h2>
          <p class="text-gray-500 mb-6">1営業日以内にご連絡いたします。</p>
          <a href="/" class="text-kurage-600 font-medium hover:underline">トップに戻る</a>
        </div>

        <form v-else @submit.prevent="submit" class="space-y-6">
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
              今使っている営業管理ツール
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
              ご要望・ご質問（任意）
            </label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="デモを希望する、特定の機能について聞きたい、など"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent resize-none"
            />
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
        <p class="text-sm text-gray-600 mb-1">
          <strong>開発元: 株式会社シロ</strong>
        </p>
        <p class="text-sm text-kurage-600">Salesforce 認定コンサルティングパートナー</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'お問い合わせ | クラゲディール' })

const form = reactive({
  company: '',
  name: '',
  email: '',
  teamSize: '',
  currentCrm: '',
  message: '',
})

const submitting = ref(false)
const submitted = ref(false)

const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

async function submit() {
  submitting.value = true
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) {
      const data = await res.json()
      alert(data.error ?? '送信に失敗しました。時間をおいて再度お試しください。')
      return
    }
    submitted.value = true
  } catch {
    alert('通信エラーが発生しました。時間をおいて再度お試しください。')
  } finally {
    submitting.value = false
  }
}
</script>
