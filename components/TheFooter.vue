<template>
  <footer class="bg-ocean-deep text-kurage-100 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Top row: logo + links -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-10">

        <!-- Brand -->
        <div class="flex-shrink-0">
          <div class="flex items-center gap-2 mb-3">
            <img src="/kurage-icon.svg" alt="クラゲディール" class="w-9 h-9" />
            <span class="font-bold text-xl text-white">クラゲディール</span>
          </div>
          <p class="text-sm leading-relaxed max-w-xs">
            Slackだけで完結するAI営業CRM。<br />
            1人〜30人の営業チームに最適。
          </p>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
          <div>
            <p class="font-semibold text-white mb-3">プロダクト</p>
            <ul class="space-y-2">
              <li><a href="#features" class="hover:text-white transition-colors">機能</a></li>
              <li><a href="#pricing" class="hover:text-white transition-colors">料金</a></li>
              <li><a href="#comparison" class="hover:text-white transition-colors">比較</a></li>
              <li><a href="#faq" class="hover:text-white transition-colors">よくある質問</a></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-white mb-3">会社</p>
            <ul class="space-y-2">
              <li><a href="/contact" class="hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="/guide" class="hover:text-white transition-colors">使い方ガイド</a></li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Ocean donation -->
      <div class="border-t border-white/15 pt-6 mb-4 text-center text-xs text-kurage-300">
        🌊 売上の一部は、<a href="https://www.nippon-foundation.or.jp" target="_blank" rel="noopener" class="underline hover:text-white transition-colors">日本財団</a>の海洋プロジェクトに寄付されます。
      </div>

      <!-- Bottom row: copyright -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-kurage-200">
        <p>© 2026 クラゲディール. All rights reserved.</p>
        <p>開発元: shiro Inc.</p>
      </div>

    </div>
  </footer>
</template>
