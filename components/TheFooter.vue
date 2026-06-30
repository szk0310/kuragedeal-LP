<template>
  <footer class="bg-ocean-deep text-kurage-100 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Top row: logo + links -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-10">

        <!-- Brand -->
        <div class="flex-shrink-0 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2 mb-3">
            <img src="/kurage-on-green.png" alt="クラゲディール" class="w-9 h-9" />
            <span class="font-bold text-xl text-white">クラゲディール</span>
          </div>
          <p class="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Slackだけで完結するAI営業CRM。<br />
            1人〜30人の営業チームに最適。
          </p>
          <div class="flex items-center justify-center md:justify-start gap-4 mt-4">
            <a href="https://x.com/kuragedeal" target="_blank" rel="noopener noreferrer" aria-label="X" class="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://note.com/kuragedeal/" target="_blank" rel="noopener noreferrer" aria-label="note" class="inline-flex items-center px-2 py-0.5 rounded border border-current text-xs font-bold hover:text-white hover:border-white transition-colors">note</a>
          </div>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
          <div>
            <p class="font-semibold text-white mb-3">プロダクト</p>
            <ul class="space-y-2">
              <li><a href="/#features" class="hover:text-white transition-colors">機能</a></li>
              <li><a href="/#pricing" class="hover:text-white transition-colors">料金</a></li>
              <li><a href="/ai-support" class="hover:text-white transition-colors">AIサポート</a></li>
              <li><a href="/#faq" class="hover:text-white transition-colors">よくある質問</a></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-white mb-3">会社</p>
            <ul class="space-y-2">
              <li><a href="/guide" class="hover:text-white transition-colors">使い方ガイド</a></li>
              <li><a href="/help" class="hover:text-white transition-colors">よくある質問・困ったとき</a></li>
              <li><a href="/legal/terms" class="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="/legal/privacy" class="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="/legal/tokusho" class="hover:text-white transition-colors">特定商取引法</a></li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Bottom row: dev status + 寄付 + copyright -->
      <div class="border-t border-white/10 pt-6 space-y-2 text-xs text-kurage-200 text-center md:text-left">
        <p>開発の状況は、<a href="https://note.com/kuragedeal/" target="_blank" rel="noopener" class="underline hover:text-white">note</a> と <a href="https://x.com/kuragedeal" target="_blank" rel="noopener" class="underline hover:text-white">X</a> で発信しています。</p>
        <p class="text-kurage-300">🌊 売上の一部は、<a href="https://www.nippon-foundation.or.jp/donation/ocean-project-fund" target="_blank" rel="noopener" class="underline hover:text-white transition-colors">日本財団 海洋プロジェクト基金</a>に寄付されます。</p>
        <p>© 2026 クラゲディール. All rights reserved. ― 開発元: shiro Inc.</p>
      </div>

    </div>
  </footer>
</template>
