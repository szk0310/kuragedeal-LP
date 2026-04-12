<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 prose prose-sm max-w-none">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
        <p class="text-sm text-gray-400 mb-8 not-prose">最終更新：2026年4月13日</p>

        <p>株式会社シロ（以下「当社」）は、クラゲディール（以下「本サービス」）において取得する個人情報の取り扱いについて、以下のとおり定めます。</p>

        <h2>1. 取得する情報</h2>
        <p><strong>お客様から直接提供いただく情報:</strong></p>
        <ul>
          <li>氏名・会社名・メールアドレス（お問い合わせフォーム・契約時）</li>
          <li>支払情報（クレジットカード情報はStripeが直接管理し、当社は保持しません）</li>
        </ul>
        <p><strong>本サービス利用により自動取得する情報:</strong></p>
        <ul>
          <li>Slack ユーザー ID・ワークスペース ID（OAuth連携時）</li>
          <li>本サービスへの入力データ（顧客・ディール・活動ログ等）</li>
          <li>アクセスログ・利用状況データ</li>
        </ul>

        <h2>2. 利用目的</h2>
        <ol>
          <li>本サービスの提供・運営・改善</li>
          <li>サポート対応・お問い合わせへの返答</li>
          <li>請求・決済処理</li>
          <li>障害対応・セキュリティ確保</li>
          <li>本サービスに関する重要なお知らせの送付</li>
          <li>利用規約違反への対応</li>
        </ol>

        <h2>3. 第三者提供</h2>
        <p>当社は、以下の場合を除き、個人情報を第三者に提供しません。</p>
        <ul>
          <li>お客様の同意がある場合</li>
          <li>法令に基づく開示要求がある場合</li>
          <li>人の生命・身体・財産の保護のために必要な場合</li>
        </ul>

        <h2>4. 業務委託先への提供</h2>
        <p>当社は、サービス提供のために以下の事業者に情報を提供することがあります。これらの事業者は当社の指示に従い適切に情報を管理します。</p>
        <table>
          <thead><tr><th>事業者</th><th>用途</th></tr></thead>
          <tbody>
            <tr><td>Anthropic</td><td>AI処理（Claude）</td></tr>
            <tr><td>Stripe</td><td>決済処理</td></tr>
            <tr><td>Slack Technologies</td><td>Slack連携</td></tr>
            <tr><td>Google Cloud</td><td>インフラ（Cloud Run・Cloud SQL）</td></tr>
            <tr><td>Twilio SendGrid</td><td>メール送信</td></tr>
          </tbody>
        </table>

        <h2>5. AI処理について</h2>
        <ol>
          <li>本サービスはAnthropicのClaude APIを利用してコーチング・分析・返信下書き生成等を行います。</li>
          <li>AIに送信されるデータには、お客様が入力したディール情報・活動ログ・顧客情報が含まれます。</li>
          <li>これらのデータはAnthropicのAPI利用規約に基づき処理されます。AIモデルの学習には使用されません。</li>
        </ol>

        <h2>6. データの保管・セキュリティ</h2>
        <ol>
          <li>データはGoogle Cloud（東京リージョン）に保管します。</li>
          <li>通信はTLS暗号化により保護されます。</li>
          <li>データベースへのアクセスはテナントごとに分離されています（Row Level Security）。</li>
        </ol>

        <h2>7. データの保持期間</h2>
        <ul>
          <li>アクティブなアカウント：契約期間中</li>
          <li>解約後：30日間保持後に自動削除</li>
          <li>ログデータ：最大90日間</li>
        </ul>

        <h2>8. お客様の権利</h2>
        <p>お客様は以下の権利を有します。</p>
        <ul>
          <li>保有個人情報の開示請求</li>
          <li>内容の訂正・追加・削除請求</li>
          <li>利用停止・消去請求</li>
        </ul>
        <p>これらの請求は <a href="mailto:support@kuragedeal.ai">support@kuragedeal.ai</a> までご連絡ください。</p>

        <h2>9. Cookie・アクセス解析</h2>
        <p>本サービスではセッション管理のためにCookieを使用します。ブラウザの設定によりCookieを無効にすることができますが、一部機能が利用できなくなる場合があります。</p>

        <h2>10. 未成年者</h2>
        <p>本サービスは18歳以上を対象としています。18歳未満の方は保護者の同意のうえでご利用ください。</p>

        <h2>11. プライバシーポリシーの変更</h2>
        <p>本ポリシーを変更する場合、変更内容と施行日を本サービス上または登録メールアドレスへの通知により告知します。</p>

        <h2>お問い合わせ</h2>
        <p>株式会社シロ　個人情報お問い合わせ窓口<br>
        メール：<a href="mailto:support@kuragedeal.ai">support@kuragedeal.ai</a><br>
        住所：〒102-0071 東京都千代田区富士見1-3-10 CF1310 1F</p>

        <div class="not-prose mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
          <NuxtLink to="/" class="hover:text-kurage-600 transition-colors">← トップページに戻る</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'プライバシーポリシー | クラゲディール' })
</script>
