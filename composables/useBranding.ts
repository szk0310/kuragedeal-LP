/**
 * クラゲくんキャラクター画像の参照を1箇所にまとめる。
 * 2026-10-19・鈴木さん指示: 正式なキャラクターデータが届くまでの暫定として
 * 新キャラクター（オレンジのクラゲ）kurage.svgを正とする。差し替えが必要に
 * なったらここだけ直せば全ページ・コンポーネントに反映される。
 */
export const KURAGE_ICON = '/lp/img/kurage.svg'

/** 構造化データ(schema.org Organization logo)用の512px PNG。SVGでなくPNGを要求する実装のため別途書き出し。 */
export const KURAGE_LOGO_PNG = 'https://kuragedeal.ai/kurage-logo-512.png'
