<template>
  <div class="lp-page">
    <!-- PC 背景装飾 -->
    <div class="l-pc-bg" aria-hidden="true"></div>
    <div class="l-pc-side" aria-hidden="true">
      <img class="l-pc-side__ttl" src="/lp/img/pc-ttl.svg" alt="クラゲディール" />
      <p class="l-pc-side__catch">Slackネイティブな<br />AI営業支援ツール</p>
    </div>

    <div class="l-main">
      <div class="l-main__inner" ref="scrollerRef">
        <header class="l-header">
          <h1 class="l-header__logo">
            <a href="/"><img src="/lp/img/logo.svg" alt="クラゲディール" /></a>
          </h1>
          <button
            class="l-header__menu"
            type="button"
            aria-controls="js-nav"
            :aria-expanded="navOpen"
            @click="navOpen = !navOpen"
          >
            <span></span><span></span><span></span>
            <span class="u-visually-hidden">{{ navOpen ? 'メニューを閉じる' : 'メニューを開く' }}</span>
          </button>
        </header>

        <!-- ハンバーガーメニュー -->
        <nav class="l-nav" :class="{ 'is-open': navOpen }" id="js-nav" aria-label="メインメニュー">
          <ul class="c-link-list l-nav__list">
            <li><a href="/#price" @click="navOpen = false">料金</a></li>
            <li><a href="/#faq" @click="navOpen = false">FAQ</a></li>
            <li><a href="/guide" @click="navOpen = false">使い方ガイド</a></li>
            <li><a href="/pains" @click="navOpen = false">お悩み解消</a></li>
            <li><a href="/ai-support" @click="navOpen = false">AIサポート</a></li>
            <li><a href="/manual" @click="navOpen = false">マニュアル</a></li>
          </ul>
          <a class="c-btn" :href="installUrl" @click="onTrialClick">14日間無料で試す</a>
        </nav>

        <main :id="mainId">
          <slot />
        </main>

        <footer class="l-footer">
          <div class="l-footer__inner">
            <div class="l-footer__head">
              <p class="l-footer__logo"><img src="/lp/img/logo-text.svg" alt="クラゲディール" /></p>
              <ul class="l-footer__sns">
                <li>
                  <a class="l-footer__x" href="https://x.com/kuragedeal" target="_blank" rel="noopener"><img src="/lp/img/icon-x.svg" alt="X" /></a>
                </li>
                <li><a class="l-footer__note" href="https://note.com/kuragedeal/" target="_blank" rel="noopener" lang="en">note</a></li>
              </ul>
            </div>
            <p class="l-footer__tagline">Slackだけで完結するAI営業CRM。<br />ひとりから、小さな営業チームまで。</p>
            <p class="l-footer__require">※ご利用には Slack が必要です（無料プラン可）</p>
            <nav class="l-footer__nav" aria-label="フッターメニュー">
              <ul class="c-link-list">
                <li><a href="/#price">料金</a></li>
                <li><a href="/#faq">FAQ</a></li>
                <li><a href="/guide">使い方ガイド</a></li>
                <li><a href="/pains">お悩み解消</a></li>
                <li><a href="/ai-support">AIサポート</a></li>
                <li><a href="/manual">マニュアル</a></li>
              </ul>
            </nav>
            <ul class="l-footer__sub">
              <li><a href="/legal/terms">利用規約</a></li>
              <li><a href="/legal/privacy">プライバシーポリシー</a></li>
              <li><a href="/legal/tokusho">特定商取引法</a></li>
            </ul>
            <div class="l-footer__info">
              <p>
                最新情報は <a href="https://note.com/kuragedeal/" target="_blank" rel="noopener">note</a> と
                <a href="https://x.com/kuragedeal" target="_blank" rel="noopener">X</a> でお知らせしています。
              </p>
              <p><small>©2026クラゲディール. All rights reserved. ― 開発元：株式会社shiro</small></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// トップ（index.vue）が内包していたヘッダー／ナビ／フッターの「枠」を共通コンポーネント化
// （LP mock刷新・下層ページ統一指示書・タスク2）。base.css（全体リセット）とcommon.css
// （.l-*枠＋.c-*共通部品）はここで読み込み、全ページ共通にする。top.cssはindex.vue
// 専有セクション（.p-mv/.p-mode等）だけのため、ここでは読み込まない（呼び出し側が
// 必要なページ専用CSSを個別に読み込む）。
import '~/assets/css/lp/base.css'
import '~/assets/css/lp/common.css'

withDefaults(defineProps<{
  /** <main>に付けるid（トップのみ#topへのアンカーのため"top"を渡す）。 */
  mainId?: string
}>(), {
  mainId: undefined,
})

const installUrl = 'https://slacksfa-api-808596335261.asia-northeast1.run.app/slack/install'

const navOpen = ref(false)
const scrollerRef = ref<HTMLElement | null>(null)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') navOpen.value = false
}

// 768px〜: 枠の外でホイールしても中央カラムをスクロール（元デザインの common.js 相当）
function onWheel(e: WheelEvent) {
  if (!window.matchMedia('(min-width: 768px)').matches) return
  const scroller = scrollerRef.value
  if (!scroller) return
  const target = e.target as Node
  if (scroller.contains(target)) return
  scroller.scrollBy({ top: e.deltaY, left: 0 })
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('wheel', onWheel, { passive: true })
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('wheel', onWheel)
})

// 計測: 「14日間無料で試す」クリックをコンバージョンとして記録（UTM はインストールURLに引き継がない）。
const { fire } = useConversion()
function onTrialClick() {
  fire('trial')
}
</script>
