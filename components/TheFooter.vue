<template>
  <footer class="bg-gray-900 text-gray-400 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🪼</span>
            <span class="font-bold text-xl text-white">クラゲディール</span>
          </div>
          <p class="text-sm max-w-xs leading-relaxed">
            Slackだけで完結するAI営業CRM。<br />
            1人〜30人の営業チームに最適。
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 text-sm">
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
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 クラゲディール. All rights reserved.</p>
        <p>
          開発元: 株式会社シロ —
          <span class="text-kurage-400">Salesforce認定コンサルティングパートナー</span>
        </p>
      </div>
    </div>
  </footer>
</template>
