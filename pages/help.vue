<template>
  <LpFrame main-id="help">
    <div class="p-guide">

      <!-- header -->
      <div class="p-guide__head">
        <img :src="KURAGE_ICON" alt="クラゲディール" class="p-guide__head-icon" />
        <h1 class="p-guide__head-ttl">よくある質問・困ったとき</h1>
        <p class="p-guide__head-lead">操作でつまずいたとき・「あれ？」と思ったときに。<br />使い方そのものは <NuxtLink to="/guide"><strong>使い方ガイド</strong></NuxtLink> へ。</p>
      </div>

      <!-- FAQ -->
      <div class="p-guide__faq-list" style="margin: calc(60 * var(--u)) 0;">
        <details v-for="q in faqs" :key="q.q" class="p-guide__faq">
          <summary>{{ q.q }}</summary>
          <p v-html="q.a"></p>
        </details>
      </div>

      <!-- コマンド早見表 -->
      <section class="p-guide__section">
        <p class="p-guide__sub-ttl" style="margin-bottom: calc(24 * var(--u));">コマンド早見表</p>
        <div class="c-card">
          <div class="p-guide__cmd-group" v-for="(g, i) in commandGroups" :key="g.group" :style="i > 0 ? 'margin-top: calc(24 * var(--u));' : ''">
            <p class="p-guide__cmd-group-label">{{ g.group }}</p>
            <div v-for="c in g.cmds" :key="c.cmd" class="p-guide__cmd-row">
              <code class="p-guide__cmd-code">{{ c.cmd }}</code>
              <p class="p-guide__cmd-desc" style="margin-top:0;">{{ c.desc }}</p>
            </div>
          </div>
          <p class="p-guide__caption" style="margin-top: calc(24 * var(--u));">※ クラゲディールは DM（個別チャット）でお使いください。</p>
        </div>
      </section>

      <p class="p-guide__footer-note">
        解決しないときは <code>/kurage</code>（例：<code>/kurage 予定の出し方が分かりにくい</code>）で開発チームに直接届きます🪼<br />
        <NuxtLink to="/contact">お問い合わせフォーム</NuxtLink>からも連絡できます。
      </p>
    </div>
  </LpFrame>
</template>

<script setup lang="ts">
// LP mock刷新・下層ページ統一指示書・タスク2（option A・5ページ目）。
// guide.vue/manual.vueと同じ部品（guide.css）を再利用。FAQアコーディオンだけ
// このページ固有のためguide.cssに.p-guide__faq系として追加した。
import '~/assets/css/lp/guide.css'

usePageSeo({
  path: '/help',
  title: 'よくある質問・困ったとき | クラゲディール',
  description: 'クラゲディールの使い方FAQ・困ったときの解決方法。メモが反映されない／担当者で絞りたい／重複登録／削除・修正／DMでの使い方／コマンド早見表など。',
})

const faqs = [
  { q: 'メモしたのに、どこにも出ません', a: 'メモは、内容によって出る場所が変わります。（1）「来週火曜にMTG予定」のように先の約束を書いたメモは「予定」になり、［📅 予定一覧］と朝のブリーフィングに出ます。（2）「見積もりを出す」のようなやることは、1〜2分後に「今やること」の「📝 メモから拾ったやること」に出ます。（3）メモそのものは［📝 メモ一覧］と、顧客・ディールの詳細で見られます。どこにも見当たらないときは、担当の設定を確認してください。' },
  { q: '担当者で絞って見たい', a: '「<b>私の担当の顧客リスト</b>」「<b>私の担当の会社リスト</b>」と送ってください。顧客やディールを登録すると、登録した人が担当者になります。' },
  { q: '同じ人を二重に登録してしまった', a: '重複を「まとめる」機能はありません。片方を削除して整理してください（メモは「直前のメモを消して」、顧客/ディールはダッシュボードから削除）。<br>両方に活動がある場合は、残す方にメモを追記してから削除すると安全です。' },
  { q: 'メモや名前を消したい・直したい', a: '<b>削除</b>：「直前のメモを消して」と送ると、確認のあと削除します（自分が書いたメモは自分で、全員分は管理者が消せます）。<br><b>修正</b>：「田中さんの名前を田中太郎に変更」のように送ってください。' },
  { q: '思ったとおりに動きません', a: '［📋 メニュー］のボタンから進めてください。「<b>コマンドを教えて</b>」で主要操作の一覧も出ます。ご要望は <code>/kurage</code> へどうぞ。' },
  { q: 'どこで使いますか？', a: 'クラゲディールは <b>DM</b>（クラゲディールAppとの個別チャット）で使う、あなただけのプライベートな営業アシスタントです。入力も回答も他の人には見えません。' },
  { q: '複数人まとめて登録できる？', a: '「ABC商事に田中さん、佐藤さんを登録」のように、読点や「と」で区切れば複数人を一度に登録できます（全員に担当者が付きます）。<br>※ ただし<b>別々の会社の人を一度に</b>はまとめられません。会社ごとに分けて「○○商事に△△を登録」としてください。' },
  { q: 'データは他の人に見えますか？', a: 'データは担当者ごとに分離されています。一般メンバーは自分が担当するディール・顧客のみ、マネージャーはチーム全体を閲覧できます。DM のやり取りは、ほかの人には見えません。' },
  { q: 'ディール確度はどう決まる？', a: 'MEDDPICC（営業フレームワーク）に基づき、会話の内容から自動で見立てます。「〇〇の次の一手を教えて」や /coach で、根拠やおすすめの次の一手も確認できます。' },
]

const commandGroups = [
  { group: '情報を見る（一覧）', cmds: [
    { cmd: '/deal', desc: 'ディール一覧・検索・進み具合の見立て' },
    { cmd: '/contact', desc: '顧客一覧' },
    { cmd: '/account', desc: '会社（取引先）一覧' },
  ]},
  { group: 'AI・確認', cmds: [
    { cmd: '/coach', desc: 'ディールコーチング' },
    { cmd: '/usage', desc: 'AI利用状況・プラン確認' },
  ]},
  { group: '設定・その他', cmds: [
    { cmd: '/setting', desc: 'ログインキー・メール連携・営業方針などの設定' },
    { cmd: '/kurage', desc: '改善要望を開発チームに送る' },
  ]},
]
</script>
