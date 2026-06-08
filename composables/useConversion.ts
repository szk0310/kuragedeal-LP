// フォーム成功時のコンバージョン計測（GA4 イベント + Google 広告 conversion）。
// gtag 未ロード（ID未設定）なら no-op。成功パスからのみ呼ぶこと（二重発火は submitted ガードで防止）。
type ConvKind = 'beta' | 'waitlist' | 'contact'

export function useConversion() {
  const pub = useRuntimeConfig().public as Record<string, string>

  function fire(kind: ConvKind) {
    if (!import.meta.client) return
    const gtag = (window as any).gtag
    if (typeof gtag !== 'function') return // 未ロード=無害

    // GA4 イベント
    if (kind === 'beta') gtag('event', 'sign_up', { method: 'beta' })
    else gtag('event', 'generate_lead', { type: kind })

    // Google 広告 conversion（ラベルが設定されている場合のみ）
    const label = kind === 'beta' ? pub.adsLabelBeta
      : kind === 'waitlist' ? pub.adsLabelWaitlist
      : pub.adsLabelContact
    if (pub.gtagAdsId && label) {
      gtag('event', 'conversion', { send_to: `${pub.gtagAdsId}/${label}` })
    }
  }

  return { fire }
}
