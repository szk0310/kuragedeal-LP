// gtag.js（GA4 + Google 広告）をクライアントで読み込む。
// ID 未設定（env 空）の場合は何もしない＝本番無害。
export default defineNuxtPlugin(() => {
  const { gtagGa4, gtagAdsId } = useRuntimeConfig().public as Record<string, string>
  const ids = [gtagGa4, gtagAdsId].filter(Boolean)
  if (ids.length === 0) return // 計測ID未設定 → ロードしない

  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.gtag = function () { w.dataLayer.push(arguments) }
  w.gtag('js', new Date())
  for (const id of ids) w.gtag('config', id)

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${ids[0]}`
  document.head.appendChild(s)
})
