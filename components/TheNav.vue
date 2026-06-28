<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <img src="/kurage-on-white.svg" alt="クラゲディール" class="w-8 h-8" />
        <span class="font-bold text-xl text-kurage-700">クラゲディール</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="/pains" class="hover:text-kurage-600 transition-colors">お悩み</a>
        <a href="/#reply-assist" class="hover:text-kurage-600 transition-colors">AI 返信支援</a>
        <a href="/#pricing" class="hover:text-kurage-600 transition-colors">料金</a>
        <a href="/#comparison" class="hover:text-kurage-600 transition-colors">比較</a>
        <a href="/#faq" class="hover:text-kurage-600 transition-colors">FAQ</a>
        <a href="/guide" class="hover:text-kurage-600 transition-colors">使い方ガイド</a>
        <a
          href="/beta"
          class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors font-bold"
          >β 参加プログラム</a
        >
      </div>

      <!-- Mobile CTA -->
      <a
        href="/beta"
        class="lg:hidden bg-orange-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors font-bold"
        >β 参加プログラム</a
      >
    </nav>
  </header>
</template>
