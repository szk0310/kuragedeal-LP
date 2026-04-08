<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <span class="text-2xl">🪼</span>
        <span class="font-bold text-xl text-kurage-700">クラゲディール</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#features" class="hover:text-kurage-600 transition-colors">機能</a>
        <a href="#pricing" class="hover:text-kurage-600 transition-colors">料金</a>
        <a href="#comparison" class="hover:text-kurage-600 transition-colors">比較</a>
        <a href="#faq" class="hover:text-kurage-600 transition-colors">FAQ</a>
        <a
          href="/contact"
          class="bg-kurage-600 text-white px-4 py-2 rounded-lg hover:bg-kurage-700 transition-colors"
          >無料で始める</a
        >
      </div>

      <!-- Mobile CTA -->
      <a
        href="/contact"
        class="md:hidden bg-kurage-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-kurage-700 transition-colors"
        >無料で始める</a
      >
    </nav>
  </header>
</template>
