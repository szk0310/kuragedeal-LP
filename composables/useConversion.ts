// クリック/フォーム成功時のコンバージョン計測（GA4 イベント + Google 広告 conversion）。
// gtag 未ロード（ID未設定）なら no-op。
// 'trial' = トップの「14日間無料で試す」クリック（Slackインストールへ離脱する直前に発火）。
// 'contact' = お問い合わせフォーム送信成功時のみ呼ぶこと（二重発火は submitted ガードで防止）。
type ConvKind = 'trial' | 'contact'

export function useConversion() {
  const pub = useRuntimeConfig().public as Record<string, string>

  function fire(kind: ConvKind) {
    if (!import.meta.client) return
    const gtag = (window as any).gtag
    if (typeof gtag !== 'function') return // 未ロード=無害

    // GA4 イベント
    if (kind === 'trial') gtag('event', 'sign_up', { method: 'trial' })
    else gtag('event', 'generate_lead', { type: kind })

    // Google 広告 conversion（ラベルが設定されている場合のみ）
    const label = kind === 'trial' ? pub.adsLabelTrial : pub.adsLabelContact
    if (pub.gtagAdsId && label) {
      gtag('event', 'conversion', { send_to: `${pub.gtagAdsId}/${label}` })
    }
  }

  return { fire }
}
