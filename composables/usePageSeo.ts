/**
 * ページ別 SEO/OGP メタ + canonical を一括設定する共通コンポーザブル。
 * 各ページで usePageSeo({ path, title, description }) を呼ぶだけで、
 * description / OG / Twitter Card / canonical が正しく揃う。
 */
export const SITE_URL = 'https://kuragedeal.ai'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

interface PageSeo {
  /** ルートパス（例 '/beta'、トップは '/'） */
  path: string
  title: string
  description: string
  /** 個別 OGP 画像（未指定はブランド既定画像） */
  image?: string
}

export function usePageSeo(opts: PageSeo) {
  const canonical = opts.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${opts.path}`
  const image = opts.image ?? DEFAULT_OG_IMAGE

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage: image,
    ogSiteName: 'クラゲディール',
    ogLocale: 'ja_JP',
    twitterCard: 'summary_large_image',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
