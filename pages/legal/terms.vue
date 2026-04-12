<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">

      <!-- Legal nav -->
      <nav class="flex gap-2 mb-6 flex-wrap">
        <NuxtLink to="/legal/tokusho" class="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-full hover:border-kurage-400 hover:text-kurage-600 transition-colors">特定商取引法</NuxtLink>
        <span class="px-3 py-1.5 bg-kurage-600 text-white text-xs font-semibold rounded-full">利用規約</span>
        <NuxtLink to="/legal/privacy" class="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-full hover:border-kurage-400 hover:text-kurage-600 transition-colors">プライバシーポリシー</NuxtLink>
      </nav>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 prose prose-sm max-w-none">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">クラゲディール 利用規約</h1>
        <p class="text-sm text-gray-400 mb-8 not-prose">最終更新：2026年4月13日</p>

        <p>本利用規約（以下「本規約」）は、株式会社shiro（以下「当社」）が提供するクラゲディール（Kurage Deal）（以下「本サービス」）の利用条件を定めるものです。ご利用前に必ずお読みください。</p>

        <h2>第1条（適用）</h2>
        <p>本規約は、お客様と当社との間の本サービスの利用に関する一切の関係に適用されます。本サービスをご利用いただくことで、本規約に同意したものとみなします。</p>

        <h2>第2条（定義）</h2>
        <table>
          <thead><tr><th>用語</th><th>定義</th></tr></thead>
          <tbody>
            <tr><td>テナント</td><td>本サービスを利用する法人または個人</td></tr>
            <tr><td>ユーザー</td><td>テナントに属し本サービスを利用する個人</td></tr>
            <tr><td>管理者</td><td>テナント内で管理権限を持つユーザー</td></tr>
            <tr><td>コンテンツ</td><td>お客様が本サービスに入力・送信・保存した情報</td></tr>
          </tbody>
        </table>

        <h2>第3条（アカウント・テナント）</h2>
        <ol>
          <li>本サービスの利用には Slack ワークスペースの連携が必要です。</li>
          <li>管理者はテナント内のユーザー管理に責任を負います。</li>
          <li>アカウント情報の管理はお客様の責任において行うものとします。</li>
          <li>不正利用が発覚した場合、当社は予告なくアカウントを停止できます。</li>
        </ol>

        <h2>第4条（料金・支払）</h2>
        <ol>
          <li>各プランの料金は当社 Web サイト（kuragedeal.ai）に掲載する金額とします。</li>
          <li>料金は月次で自動更新されます。</li>
          <li>支払いは Stripe を通じたクレジットカード決済とします。</li>
          <li>一度支払われた料金は、本規約に別段の定めがある場合を除き返金いたしません。</li>
        </ol>

        <h2>第5条（プランの変更・解約）</h2>
        <ol>
          <li>プランのアップグレード・ダウングレードは、Webダッシュボードの「設定」画面から行えます。変更は即時反映され、差額は即時精算されます。</li>
          <li>解約は、Webダッシュボードの「設定」画面にある「解約する」ボタン、またはサポート（support@kuragedeal.ai）へのご連絡により行えます。解約後も現在の請求期間終了日までサービスをご利用いただけます。</li>
          <li>解約後もデータは30日間保持されます。30日経過後に自動削除されます。</li>
          <li>一度支払われた料金は返金いたしません。</li>
        </ol>

        <h2>第6条（AIの利用）</h2>
        <ol>
          <li>本サービスは AI（Anthropic Claude）を利用してコーチング・分析・返信下書き生成等を行います。</li>
          <li>AI の出力はあくまで参考情報であり、営業判断・意思決定はお客様自身の責任において行ってください。</li>
          <li>AI の出力が常に正確であることを当社は保証しません。</li>
        </ol>

        <h2>第7条（禁止事項）</h2>
        <p>お客様は以下の行為を行ってはなりません。</p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>第三者の知的財産権・プライバシー・名誉を侵害する行為</li>
          <li>本サービスの運営を妨害する行為（過度なアクセス・スパム等）</li>
          <li>本サービスのリバースエンジニアリング・複製・改変</li>
          <li>競合他社への情報提供を目的とした利用</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>

        <h2>第8条（コンテンツの取り扱い）</h2>
        <ol>
          <li>お客様が入力したコンテンツの知的財産権はお客様に帰属します。</li>
          <li>当社は、サービス提供に必要な範囲でコンテンツを利用する権利を有します。</li>
          <li>当社はコンテンツを第三者に販売・開示しません（法令による開示要求を除く）。</li>
          <li>AI モデルの学習目的でコンテンツを使用しません。</li>
        </ol>

        <h2>第9条（サービスの変更・停止）</h2>
        <ol>
          <li>当社は事前通知のうえ、本サービスの内容を変更することがあります。</li>
          <li>メンテナンス・障害等により一時的にサービスを停止することがあります。</li>
          <li>本サービスを終了する場合は、30日前までにお客様へ通知します。</li>
        </ol>

        <h2>第10条（免責事項）</h2>
        <ol>
          <li>当社は、本サービスの完全性・正確性・有用性を保証しません。</li>
          <li>お客様が本サービスを通じて得た営業成果について、当社は一切の責任を負いません。</li>
          <li>当社の故意または重過失による場合を除き、損害賠償責任は月額利用料金を上限とします。</li>
        </ol>

        <h2>第11条（個人情報）</h2>
        <p>個人情報の取り扱いについては、別途定める「<NuxtLink to="/legal/privacy">プライバシーポリシー</NuxtLink>」に従います。</p>

        <h2>第12条（規約の変更）</h2>
        <ol>
          <li>当社は、本規約を変更する場合、変更内容と施行日を本サービス上または登録メールアドレスへの通知により告知します。</li>
          <li>変更後も継続して本サービスをご利用いただいた場合、変更後の規約に同意したものとみなします。</li>
        </ol>

        <h2>第13条（準拠法・管轄）</h2>
        <p>本規約は日本法に準拠します。本規約に関する紛争については、東京簡易裁判所を第一審の専属的合意管轄裁判所とします。</p>

        <h2>お問い合わせ</h2>
        <p>株式会社shiro　サポート窓口<br>
        メール：<a href="mailto:support@kuragedeal.ai">support@kuragedeal.ai</a></p>

        <div class="not-prose mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
          <NuxtLink to="/" class="hover:text-kurage-600 transition-colors">← トップページに戻る</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '利用規約 | クラゲディール' })
</script>
