<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

    <!-- Chat panel -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-if="open"
        class="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
        style="height: 480px;"
      >
        <!-- Header -->
        <div class="bg-kurage-700 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div class="flex items-center gap-2">
            <img src="/kurage-icon.svg" alt="" class="w-7 h-7" />
            <div>
              <p class="text-white font-bold text-sm leading-none">クラゲくん</p>
              <p class="text-kurage-200 text-xs mt-0.5">AIサポート</p>
            </div>
          </div>
          <button
            class="text-kurage-200 hover:text-white transition-colors p-1"
            @click="open = false"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesEl" class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            :class="['flex gap-2', msg.role === 'user' ? 'justify-end' : 'justify-start']"
          >
            <img
              v-if="msg.role === 'assistant'"
              src="/kurage-icon.svg"
              alt=""
              class="w-6 h-6 flex-shrink-0 mt-1"
            />
            <div
              :class="[
                'max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed',
                msg.role === 'user'
                  ? 'bg-kurage-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm',
              ]"
            >
              {{ msg.content }}
            </div>
          </div>

          <!-- Loading dots -->
          <div v-if="loading" class="flex gap-2 justify-start">
            <img src="/kurage-icon.svg" alt="" class="w-6 h-6 flex-shrink-0 mt-1" />
            <div class="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3">
              <span class="flex gap-1">
                <span class="w-1.5 h-1.5 bg-kurage-400 rounded-full animate-bounce" style="animation-delay:0ms" />
                <span class="w-1.5 h-1.5 bg-kurage-400 rounded-full animate-bounce" style="animation-delay:150ms" />
                <span class="w-1.5 h-1.5 bg-kurage-400 rounded-full animate-bounce" style="animation-delay:300ms" />
              </span>
            </div>
          </div>

          <!-- Escalated state -->
          <div v-if="escalated" class="bg-orange-50 border border-orange-200 rounded-xl p-3 text-xs text-orange-700 text-center">
            担当者に通知しました。1営業日以内にご連絡します。<br />
            <a href="/contact" class="underline font-semibold mt-1 inline-block">お問い合わせフォームはこちら →</a>
          </div>
        </div>

        <!-- Input -->
        <div class="px-3 py-3 border-t border-gray-100 bg-white flex-shrink-0">
          <form class="flex gap-2" @submit.prevent="send">
            <input
              v-model="input"
              :disabled="loading || escalated"
              type="text"
              placeholder="質問を入力..."
              class="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kurage-400 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-400"
            />
            <button
              type="submit"
              :disabled="!input.trim() || loading || escalated"
              class="bg-kurage-600 hover:bg-kurage-500 disabled:bg-gray-200 text-white rounded-xl px-3 py-2 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Toggle button row -->
    <div class="flex items-center gap-3">
      <!-- お問い合わせラベル（クリック不可） -->
      <span
        v-if="!open"
        class="bg-kurage-700 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg whitespace-nowrap"
      >
        お問い合わせ →
      </span>

      <!-- クラゲアイコンボタン -->
      <button
        class="w-14 h-14 bg-kurage-700 hover:bg-kurage-600 rounded-full shadow-lg flex items-center justify-center transition-colors kurage-float"
        @click="toggle"
      >
        <img v-if="!open" src="/kurage-icon.svg" alt="チャット" class="w-9 h-9" />
        <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
const API_URL = 'https://slacksfa-api-808596335261.asia-northeast1.run.app'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const open = ref(false)
const input = ref('')
const loading = ref(false)
const escalated = ref(false)
const messagesEl = ref<HTMLElement | null>(null)

const messages = ref<Message[]>([
  {
    role: 'assistant',
    content: 'こんにちは！クラゲくんです🪼 クラゲディールについて何でも聞いてください。',
  },
])

function toggle() {
  open.value = !open.value
}

async function send() {
  const text = input.value.trim()
  if (!text || loading.value) return

  messages.value.push({ role: 'user', content: text })
  input.value = ''
  loading.value = true

  await nextTick()
  scrollToBottom()

  try {
    const res = await fetch(`${API_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.value.map(m => ({ role: m.role, content: m.content })),
      }),
    })
    const data = await res.json()
    messages.value.push({ role: 'assistant', content: data.reply })
    if (data.escalated) escalated.value = true
  } catch {
    messages.value.push({ role: 'assistant', content: '申し訳ありません、少し時間をおいて再度お試しください。' })
  } finally {
    loading.value = false
    await nextTick()
    scrollToBottom()
  }
}

function scrollToBottom() {
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
}
</script>
