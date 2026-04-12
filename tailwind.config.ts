import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        kurage: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        ocean: {
          sand:  '#F2DEC8', // 浜辺・薄いサンド
          tan:   '#C4A882', // 濡れた砂
          sage:  '#9BB8AF', // 浅瀬・セージグリーン
          mist:  '#7AAAB8', // 水面・ミュートブルー
          steel: '#4E7F8F', // 深めの青緑
          deep:  '#2D5F70', // 深海ティール
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
