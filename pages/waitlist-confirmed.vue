<template>
  <main class="pt-16 min-h-screen bg-gray-50 flex items-center">
    <section class="max-w-xl mx-auto px-4 sm:px-6 py-16 text-center">
      <template v-if="status === 'ok'">
        <img src="/kurage-smile.png" alt="クラゲくん" class="w-16 h-16 mx-auto mb-4" />
        <h1 class="text-2xl md:text-3xl font-black text-gray-900 mb-4">
          β アクセスを延長しました
        </h1>
        <p class="text-sm text-gray-700 leading-relaxed mb-8">
          2026 年 11 月 17 日まで継続してご利用いただけます。<br />
          10 月中旬にクレジットカード登録のご案内をメールでお送りします。
        </p>
      </template>
      <template v-else>
        <img src="/kurage-smile.png" alt="クラゲくん" class="w-16 h-16 mx-auto mb-4 opacity-70" />
        <h1 class="text-2xl md:text-3xl font-black text-gray-900 mb-4">
          リンクが無効です
        </h1>
        <p class="text-sm text-gray-700 leading-relaxed mb-8">
          このリンクの有効期限が切れているか、すでに URL が変更されている可能性があります。<br />
          お手数ですが、ウェイトリストへ再度ご応募ください。
        </p>
      </template>
      <a href="/" class="inline-block text-kurage-600 hover:underline font-medium">
        トップページに戻る
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
// W4/B-2 (2026-09-01・S-3封鎖): GET /api/waitlist/confirm の着地先。
// クエリの status(ok|invalid) 以外は何も表示しない（延長対象のメール/会社名等はここでは出さない
// ＝このページ自体は未認証で誰でも開けるため、個人情報は一切乗せない設計）。
usePageSeo({
  path: '/waitlist-confirmed',
  title: 'β アクセス延長 | クラゲディール',
  description: 'ウェイトリストからのβアクセス延長手続きの結果ページです。',
})

const route = useRoute()
const status = computed(() => (route.query.status === 'ok' ? 'ok' : 'invalid'))
</script>
