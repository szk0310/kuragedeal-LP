<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <img :src="KURAGE_ICON" alt="クラゲディール" class="w-8 h-8" />
        <span class="font-bold text-xl text-kurage-700">クラゲディール</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="/#price" class="hover:text-kurage-600 transition-colors">料金</a>
        <a href="/ai-support" class="hover:text-kurage-600 transition-colors">AIサポート</a>
        <a href="/pains" class="hover:text-kurage-600 transition-colors">お悩み解消</a>
        <a href="/#faq" class="hover:text-kurage-600 transition-colors">FAQ</a>
        <a href="/guide" class="hover:text-kurage-600 transition-colors">使い方ガイド</a>
        <a href="/manual" class="hover:text-kurage-600 transition-colors">マニュアル</a>
        <a
          href="https://api.kuragedeal.ai/slack/install"
          class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors font-bold"
          >14日間無料で試す</a
        >
      </div>

      <!-- Mobile CTA -->
      <a
        href="https://api.kuragedeal.ai/slack/install"
        class="lg:hidden bg-orange-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors font-bold"
        >14日間無料で試す</a
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>
