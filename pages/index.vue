<template>
  <LpFrame main-id="top">
          <!-- MV -->
          <section class="p-mv">
            <h2 class="p-mv__catch">Slack に一言メモるだけ。<br />それだけで、<em>営業が進みます！</em></h2>
            <p class="p-mv__read">
              学習コスト、入力ストレス、どちらもゼロ。<br />
              ボタンで簡単操作。<br />
              今日から始められる<br />
              Slack があれば、特別なアプリはいりません。
            </p>
            <div class="p-mv__image">
              <img src="/lp/img/mv-image.png" alt="Slackで働くチームとクラゲくん" />
            </div>
            <a class="c-btn p-mv__btn" :href="installUrl" @click="onTrialClick">14日間無料で試す</a>
          </section>

          <!-- MODE -->
          <section class="p-mode" id="mode">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">How it works</p>
              <h2 class="c-sec-ttl__ja">ボタンを押すだけ。<br />迷わず進める。</h2>
            </div>
            <p class="c-lead">
              むずかしい操作は一切ありません。<br />
              次にやることがボタンで並ぶので迷いません。
            </p>
            <div class="p-mode__list">
              <article class="p-mode__item">
                <p class="p-mode__target"><span class="c-bubble">まずはボタンで迷わず進める。</span></p>
                <div class="p-mode__card">
                  <h3 class="p-mode__ttl"><img src="/lp/img/icon-mode-btn.svg" alt="ボタン" />ボタンで進める</h3>
                  <p class="p-mode__text">クラゲディールが「次はこれ」と<br />ボタンで案内。タップして選ぶだけ。<br />何をすればいいか、迷いません。</p>
                  <div class="p-mode__mock">
                    <SlackMessageMock channel-name="💬 クラゲディール（DM）">
                      <SlackBotLine name="クラゲディール" :bot-badge="true" time="9:00">
                        <p class="font-bold mb-2">メニュー　やりたいことを選んでください</p>
                        <div class="flex flex-col gap-2">
                          <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">👤 顧客を登録</span>
                          <span class="block w-full text-center border-2 border-kurage-400 bg-kurage-50 rounded-lg px-4 py-2.5 text-sm font-bold text-kurage-800">📝 活動をメモ</span>
                          <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">📊 ディールを登録</span>
                          <span class="block w-full text-center border border-gray-300 bg-white rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-800">🎯 今やること</span>
                        </div>
                      </SlackBotLine>
                    </SlackMessageMock>
                  </div>
                </div>
              </article>
            </div>
            <p class="c-lead">
              メモも、ボタン［📝 活動をメモ］から書くだけ。<br />
              「田中さんと打ち合わせ。来週までに見積もりを出す」と書けば、<br />
              クラゲくんが「見積もりを出す」を拾って、<br />
              そのまま「今やること」に並びます。
            </p>
          </section>

          <!-- FOR SMALL TEAMS -->
          <section class="p-teams c-arc" id="teams">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">For small teams</p>
              <h2 class="c-sec-ttl__ja">ひとりから、小さな営業チームまで<br />ゼロから設計したAIツール</h2>
            </div>
            <p class="c-lead">
              1人社長のフリーランスから、<br />
              営業チーム10名規模の成長企業まで。<br />
              「大手ベンダーのCRM/SFAは<br />
              高すぎるし重すぎる。」<br />
              そんな会社のために作りました。
            </p>
            <h3 class="p-teams__ribbon">このような会社にピッタリ！</h3>
            <ul class="p-teams__list">
              <li>
                <div class="p-teams__img"><img src="/lp/img/team01.png" alt="忙しく働く社長" /></div>
                <p>社員5人のIT企業。<br />社長が営業も兼務。<br />ディール管理はスプレッドシートで<br />回しています</p>
              </li>
              <li>
                <div class="p-teams__img"><img src="/lp/img/team02.png" alt="データを確認する営業担当" /></div>
                <p>営業3人の人材会社。<br />CRMを導入したが誰も入力しない</p>
              </li>
              <li>
                <div class="p-teams__img"><img src="/lp/img/team03.png" alt="やることに追われる人" /></div>
                <p>6人のスタートアップ。<br />急成長でディールが増え、<br />フォロー漏れが出始めた</p>
              </li>
              <li>
                <div class="p-teams__img"><img src="/lp/img/team04.png" alt="税理士" /></div>
                <p>一人社長の税理士。<br />クライアント20社の関係を<br />頭の中で管理している</p>
              </li>
            </ul>
          </section>

          <!-- BENEFITS -->
          <section class="p-benefits c-arc" id="benefits">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">Benefits</p>
              <h2 class="c-sec-ttl__ja">クラゲディールが選ばれる<br />3つの理由</h2>
            </div>
            <div class="p-benefits__list">
              <article class="p-benefits__item">
                <p class="p-benefits__num" aria-hidden="true"><span class="p-benefits__num-big">01</span><span class="p-benefits__num-label">Features</span></p>
                <div class="p-benefits__card">
                  <img class="p-benefits__img" src="/lp/img/benefit01.png" alt="クラゲくんがメールを代筆" />
                  <h3 class="p-benefits__ttl">入力に時間を取られない</h3>
                  <p class="p-benefits__text">
                    忙しいスモールチームの、面倒な作業をもっとシンプルに。「ABC商事とディール、競合が一社」とメモするだけで、ディール確度や次の一手を自動で提案。さらに、ビジネスメールの返信もクラゲディールが代筆します。あなたは、最終確認するだけ。空いた時間を、お客様や自分のために使えます。
                  </p>
                </div>
              </article>
              <article class="p-benefits__item p-benefits__item--reverse">
                <p class="p-benefits__num" aria-hidden="true"><span class="p-benefits__num-big">02</span><span class="p-benefits__num-label">Features</span></p>
                <div class="p-benefits__card">
                  <img class="p-benefits__img" src="/lp/img/benefit02.png" alt="チームで協力する様子" />
                  <h3 class="p-benefits__ttl">ひとりなら月¥2,980、<br />3人のチームでも¥5,980</h3>
                  <p class="p-benefits__text">クラゲディールは、シンプルな 3 段階の料金体系。人数に合わせて、ぴったりのプランを選べます。</p>
                  <p class="p-benefits__box p-benefits__box--accent">
                    まずは<strong>14日間無料</strong>でお試しいただけます<br />（クレジットカード不要）。<br />Slack に追加するだけで、その日からご利用いただけます。
                  </p>
                </div>
              </article>
              <article class="p-benefits__item">
                <p class="p-benefits__num" aria-hidden="true"><span class="p-benefits__num-big">03</span><span class="p-benefits__num-label">Features</span></p>
                <div class="p-benefits__card">
                  <img class="p-benefits__img" src="/lp/img/benefit03.png" alt="クラゲくんのAIサポート" />
                  <h3 class="p-benefits__ttl">専任の営業マンがいなくても、<br />しっかりサポート</h3>
                  <p class="p-benefits__text">
                    営業の型「MEDDPICC」に基づいて、クラゲくんが案件ごとに「決裁者と会えていますか？」「予算の根拠は？」「競合は把握していますか？」と、やさしく問いかけてくれます。経験豊富なマネジャーがいなくても、チーム全員に同じ質のコーチングが届きます。クラゲくんが、あなたの営業コーチになってくれます。
                  </p>
                  <p class="p-benefits__box p-benefits__box--note">
                    ※ MEDDPICC（メドピック）＝ディールの抜け漏れを防ぐ営業フレームワーク。指標(Metrics)・決裁者(Economic Buyer)・選定基準(Decision Criteria)・購買プロセス(Decision
                    Process)・社内手続き(Paper Process)・課題(Identify Pain)・社内推進者(Champion)・競合(Competition)の8要素で案件を見立てます。
                  </p>
                </div>
              </article>
            </div>
          </section>

          <!-- CTA（キャッチコピー） -->
          <section class="c-cta c-pixel" id="trial">
            <img class="c-cta__illust" src="/lp/img/kurage.svg" alt="クラゲくん" />
            <h2 class="c-cta__ttl">いちばん軽いメモが、<br />いちばん賢い営業になる。</h2>
            <p class="c-cta__text">クラゲディールは、Slack にメモするだけで<br />AI機能が営業活動を自動でサポート！<br />余った時間はあなたのために使ってください。</p>
            <p class="c-cta__catch">
              <span class="c-bubble c-bubble--orange">まずは14日間、<strong>すべての機能を無料</strong>で</span>
            </p>
            <a class="c-btn c-cta__btn" :href="installUrl" @click="onTrialClick">14日間無料で試す</a>
          </section>

          <!-- PRICE -->
          <section class="p-price" id="price">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">Price</p>
              <h2 class="c-sec-ttl__ja">シンプルな料金体系</h2>
            </div>
            <p class="c-lead">どのプランも、最初の14日間は無料で<br />すべての機能をお試しいただけます。<br />無料期間中は人数の制限もありません。</p>
            <div class="p-price__list">
              <article class="p-price__plan">
                <h3 class="p-price__name" lang="en">Personal</h3>
                <p class="p-price__catch">まずはあなた1人から。</p>
                <p class="p-price__amount"><span lang="en">¥2,980</span>/ 月</p>
                <p class="p-price__amount-annual">年額 ¥29,800</p>
                <ul class="c-check-list c-check-list--yellow p-price__features">
                  <li>1名まで</li>
                  <li>全機能</li>
                </ul>
                <p class="p-price__target">個人事業主、フリーランス、一人親方、1人営業窓口、営業担当1名で試したい会社</p>
              </article>
              <article class="p-price__plan p-price__plan--popular">
                <h3 class="p-price__name" lang="en">Trio</h3>
                <p class="p-price__badge">おすすめ</p>
                <img class="p-price__kurage" src="/lp/img/kurage.svg" alt="クラゲくん" />
                <p class="p-price__catch">営業チーム本格スタート</p>
                <p class="p-price__amount"><span lang="en">¥5,980</span>/ 月</p>
                <p class="p-price__amount-sub">4人目から1人ごとに ¥2,000</p>
                <p class="p-price__amount-annual">年額 ¥59,800（追加1人ごとに ¥20,000）</p>
                <ul class="c-check-list c-check-list--yellow p-price__features">
                  <li>3名（7名まで追加可）</li>
                  <li>全機能</li>
                </ul>
                <p class="p-price__target">中小企業、小さな営業チーム</p>
                <p class="p-price__note-small">マネージャーはチーム全員のディールを見られます。メンバーは自分の担当だけ。部下の進み具合を、聞いて回らずに把握できます。</p>
              </article>
              <article class="p-price__plan">
                <h3 class="p-price__name" lang="en">Team</h3>
                <p class="p-price__catch">チーム全員で使う</p>
                <p class="p-price__amount"><span lang="en">¥14,980</span>/ 月</p>
                <p class="p-price__amount-annual">年額 ¥149,800</p>
                <ul class="c-check-list c-check-list--yellow p-price__features">
                  <li>10名まで</li>
                  <li>全機能</li>
                </ul>
                <p class="p-price__target">8〜10人の営業チーム</p>
              </article>
            </div>
            <div class="p-price__common">
              <p class="p-price__common-ttl">全プラン共通の「全機能」</p>
              <ul class="c-check-list c-check-list--yellow">
                <li>Slack の DM でメモ・顧客・ディールの登録（ボタンで）</li>
                <li>毎朝のブリーフィングと「今やること」</li>
                <li>ディール確度と次の一手の自動提案、MEDDPICC コーチング</li>
                <li>メールの取り込みと返信の下書き</li>
                <li>Web ダッシュボードと CSV の書き出し</li>
              </ul>
            </div>
            <div class="p-price__note">
              <ul>
                <li>11名以上のチームはお問い合わせください。</li>
                <li>価格はすべて税別です。決済時に消費税10%が加わります。</li>
                <li>年額は10か月分の料金です（2か月分お得）。</li>
                <li>人数は、その月にクラゲを使った人（メッセージ・ボタン・コマンド）で数えます。朝のブリーフィングを受け取っただけの人は数えません。</li>
                <li>TRIO の追加分（4〜7人目）は、使った月の分を翌月にご請求します。追加料金が発生する人は、管理者が許可してから使えるようになります。</li>
                <li>基本人数は PERSONAL 1人・TRIO 3人・TEAM 10人です。追加できる人数の上限は TRIO のみ7人まで（PERSONAL・TEAM に追加の枠はありません）。上限を超える場合は、許可した月の翌月末までの期間に限りご利用いただけ、その後は上位プランへの変更が必要です。</li>
                <li>無料期間のあとに有料プランへ申し込まない場合、利用は停止されます（自動で課金はされません）。</li>
                <li>解約は Web の設定画面か Slack の /setting からいつでもできます。契約期間の終わりまで使えます。</li>
              </ul>
            </div>
          </section>

          <!-- COMPARE -->
          <section class="p-compare" id="compare">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">Compare</p>
              <h2 class="c-sec-ttl__ja">大企業向けCRMとの料金比較</h2>
            </div>
            <div class="p-compare__table">
              <div class="p-compare__group">
                <h3 class="p-compare__name">クラゲディール</h3>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">人数</th>
                      <th scope="col">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1人</th>
                      <td><em>¥2,980</em>/月</td>
                    </tr>
                    <tr>
                      <th scope="row">3人</th>
                      <td><em>¥5,980</em>/月</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="p-compare__group p-compare__group--other">
                <h3 class="p-compare__name">大手企業向けCRM</h3>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">人数</th>
                      <th scope="col">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1人</th>
                      <td>約 ¥16,000〜¥21,000/月</td>
                    </tr>
                    <tr>
                      <th scope="row">3人</th>
                      <td>約 ¥48,000〜¥63,000/月</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- CTA（14日間無料で試す） -->
          <section class="c-cta c-pixel">
            <img class="c-cta__illust" src="/lp/img/kurage.svg" alt="クラゲくん" />
            <h2 class="c-cta__ttl">14日間無料で試す</h2>
            <ul class="c-check-list c-cta__list">
              <li>Slack に追加するだけ</li>
              <li>無料期間中はクレジットカード不要</li>
              <li>データはいつでも CSV で書き出せる</li>
            </ul>
            <a class="c-btn c-cta__btn" :href="installUrl" @click="onTrialClick">14日間無料で試す</a>
          </section>

          <!-- ISSUE -->
          <section class="p-issue" id="issue">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">Issue</p>
              <h2 class="c-sec-ttl__ja">3 つのお悩みを<br />クラゲディールが解消</h2>
            </div>
            <p class="c-lead">多くの営業チームがぶつかる 3 つの壁を<br />クラゲディールは Slack の中で解決します。</p>
            <ol class="p-issue__list">
              <li class="p-issue__item">
                <div class="p-issue__fig">
                  <span class="p-issue__num" aria-hidden="true">01</span>
                  <img src="/lp/img/issue01.png" alt="入力に悩む人" />
                </div>
                <div class="p-issue__body">
                  <h3 class="p-issue__ttl">CRM が続かない</h3>
                  <p class="p-issue__text p-issue__text--sm">入力が面倒で、誰も書かない。<br />データが揃わずAIも活かせない。</p>
                </div>
              </li>
              <li class="p-issue__item p-issue__item--reverse">
                <div class="p-issue__fig">
                  <span class="p-issue__num" aria-hidden="true">02</span>
                  <img src="/lp/img/issue02.png" alt="進捗を確認する人" />
                </div>
                <div class="p-issue__body">
                  <h3 class="p-issue__ttl">進捗が見えない</h3>
                  <p class="p-issue__text">「あの案件どうなった？」と<br />聞いて回る。<br />止まった案件が失注に。</p>
                </div>
              </li>
              <li class="p-issue__item">
                <div class="p-issue__fig">
                  <span class="p-issue__num" aria-hidden="true">03</span>
                  <img src="/lp/img/issue03.png" alt="手が回らないマネジャー" />
                </div>
                <div class="p-issue__body">
                  <h3 class="p-issue__ttl">マネジャーが足りない</h3>
                  <p class="p-issue__text">1 人で全員は見られない。<br />良い問いかけを全員に<br />毎日は無理。</p>
                </div>
              </li>
            </ol>
            <a class="c-btn p-issue__btn" href="/pains">詳しく見る</a>
          </section>

          <!-- FEATURE SPOTLIGHT -->
          <section class="p-feature c-arc" id="feature">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">Feature spotlight</p>
              <h2 class="c-sec-ttl__ja">クラゲディールが返信を代筆</h2>
            </div>
            <p class="c-lead">
              営業マネジャーにとって、<br />
              意外と時間を取られるのがメール返信。<br />
              クラゲディールなら返信業務の<br />
              負担を軽くします。
            </p>
            <div class="p-feature__problem">
              <p>毎日5〜10通、1通5〜10分。<br />メール返信だけで、月30〜60時間。<br />その時間を、若手との対話や<br />新規開拓に使えたら…。</p>
              <img class="p-feature__man" src="/lp/img/feature-man.png" alt="疲れた様子の人" />
            </div>
            <div class="p-feature__solution">
              <h3 class="p-feature__head">クラゲディールならこうします！</h3>
              <ol class="p-feature__steps">
                <li>
                  <h4>顧客から届いたメールを転送</h4>
                  <p>
                    顧客から届いたメールを、クラゲディール専用アドレスに転送することで返信文をクラゲディールが考えます。<br />Gmail / Outlook はそのまま使えます。専用アドレスは Slack の /setting →「📨
                    メール連携」で確認できます。
                  </p>
                </li>
                <li>
                  <h4>クラゲディールが文脈を読んで、<br />返信を下書きします</h4>
                  <p>過去のやり取り・ディールのステージ・会社の方針をふまえて、下書きを作ります。</p>
                </li>
                <li>
                  <h4>Slackで確認、ワンクリックで送信</h4>
                  <p>そのまま送る / 編集する / 送らない、をボタンで判断。</p>
                </li>
                <li>
                  <h4>自社アドレスから送信</h4>
                  <p>お客様にはいつもどおり営業マネジャー本人からの返信に見えます。</p>
                </li>
              </ol>
              <p class="p-feature__result"><span>メールの返信が、ぐっと短い時間で済みます。</span></p>
              <a class="c-btn p-feature__btn" href="/ai-support">詳しく見る</a>
            </div>
          </section>

          <!-- FAQ -->
          <section class="p-faq" id="faq">
            <div class="c-sec-ttl">
              <p class="c-sec-ttl__en" lang="en">FAQ</p>
              <h2 class="c-sec-ttl__ja">よくあるご質問</h2>
            </div>
            <div class="p-faq__list">
              <details v-for="faq in faqs" :key="faq.q" class="p-faq__item">
                <summary>{{ faq.q }}</summary>
                <div class="p-faq__answer">
                  <p>{{ faq.a }}</p>
                </div>
              </details>
            </div>
          </section>

          <!-- CTA（14日間無料で試す） -->
          <section class="c-cta c-pixel c-pixel--top-only">
            <img class="c-cta__illust" src="/lp/img/kurage.svg" alt="クラゲくん" />
            <h2 class="c-cta__ttl">14日間無料で試す</h2>
            <ul class="c-check-list c-cta__list">
              <li>Slack に追加するだけ</li>
              <li>無料期間中はクレジットカード不要</li>
              <li>データはいつでも CSV で書き出せる</li>
            </ul>
            <a class="c-btn c-cta__btn" :href="installUrl" @click="onTrialClick">14日間無料で試す</a>
          </section>
  </LpFrame>
</template>

<script setup lang="ts">
// 新デザイン（test_kurage_261009b・a62bd1c）の移植。文言は正本（LP改訂案とマニュアル構成）に合わせている。
// 枠（ヘッダー／ナビ／フッター）はLpFrame.vueへ切り出し済み（LP mock刷新・下層ページ
// 統一指示書・タスク2）。base.css/common.cssの読み込みもLpFrame側が担うため、ここでは
// このページ専有セクション用のtop.cssだけを読み込む。
import '~/assets/css/lp/top.css'

const installUrl = 'https://api.kuragedeal.ai/slack/install'

// 計測: 「14日間無料で試す」クリックをコンバージョンとして記録（UTM はインストールURLに引き継がない）。
const { fire } = useConversion()
function onTrialClick() {
  fire('trial')
}

const faqs = [
  { q: '無料期間はどうなっていますか？', a: 'Slack に追加した日から14日間、すべての機能を無料で使えます。クレジットカードの入力は不要です。無料期間は1つのワークスペースにつき1回です。' },
  { q: '従来のSlack連携CRMとの違いは？', a: 'ほかの Slack 連携 CRM は、CRM を別に契約し、Slack は通知を受け取る場所として使います。クラゲディールは、記録・コーチング・メールの下書きまで、Slack の中だけで使えます。' },
  { q: '将来、別の CRM に移行できますか？', a: 'はい。クラゲディールのデータはいつでも CSV で書き出せます。組織が成長してより大規模な CRM が必要になった際、弊社は Salesforce 認定コンサルティングパートナーとして、移行先の選定からデータの引っ越しまでお手伝いします。' },
  { q: '何人まで使えますか？', a: 'TRIO は3人から1人ずつ追加でき（1人 月¥2,000・7人まで）、8〜10人なら TEAM がお得です。11人以上はお問い合わせください。30 人を超える大規模チームでは、Salesforce 等の選択肢もご検討いただくことをお勧めしています。弊社は Salesforce 認定コンサルティングパートナーとして、最適な選択をご一緒に検討します。' },
  { q: '既存のSlackワークスペースに導入できますか？', a: 'はい。既存の Slack ワークスペースに「クラゲディールを追加」ボタン 1 つで完了します。新しいワークスペースを作る必要はありません。' },
  { q: 'インストールしたのに、サイドバーにアプリが出てきません', a: 'Slack 画面上部の検索窓（または Cmd / Ctrl + K）に「クラゲディール」（英字 kuragedeal でも可）と入力し、表示されたアプリを選んでください。クラゲディールとの DM が開き、サイドバーに常駐します。あとは、DM の［📋 メニュー］を押すだけです。はじめにクラゲくんからあいさつのメッセージが届きます。反映が遅いときは Slack を再読み込み（Cmd / Ctrl + R）してください。なお、ワークスペースへの追加（インストール）は管理者が 1 回行えば完了で、メンバーの個別インストールは不要です。' },
  { q: 'Slackを使っていない会社でも使えますか？', a: 'クラゲディールは Slack ワークスペースが前提です。Slack の無料プランでも導入できますので、まず Slack を導入していただくことをお勧めします。' },
  { q: 'データのセキュリティは大丈夫ですか？', a: 'データは Google Cloud Platform 上で管理され、通信は SSL/TLS で暗号化されています。データは会社ごとに分けて保管され、ほかの会社からは見えません。お客様の営業データが AI の学習に使用されることはありません。' },
  { q: '他のメンバーに自分の営業データを見られませんか？', a: 'いいえ。クラゲディールは DM（クラゲディール App との個別チャット）で使う、あなた専用のプライベートな営業アシスタントです。あなたの入力もクラゲの回答も、ほかの人には見えません。さらにデータ自体も担当者ごとに分離されており、一般メンバーは自分が担当するディール・顧客のみ閲覧できます（マネージャーはチーム全体）。設定や契約の変更は管理者だけが行えます。' },
  { q: 'AI が提案するディール確度はどのように計算されますか？', a: '活動記録と MEDDPICC 情報（決裁者との接触 / 予算の根拠確認 / 競合の把握など）を AI が分析して更新します。/coach で情報を入力するたびに計算し直されます。最後の活動から日がたつほど、少しずつ下がります。' },
  { q: '解約はどうすればよいですか？', a: 'Web の設定画面の「解約する」か、Slack の /setting の「解約する」からいつでもできます（管理者のみ）。契約期間の終わりまで今のまま使え、その後利用が停止します。データは解約後30日間保管し、その間に再開すればそのまま引き継げます。年額を含め、途中解約の返金はありません。' },
  { q: '無料期間が終わったらどうなりますか？', a: '自動で課金されることはありません。有料プランに申し込まなければ利用が停止します。停止中も管理者は設定画面から申し込め、データの CSV 書き出しもできます。' },
  { q: '使い方が分からないときは？', a: 'Slack のクラゲディールに「使い方を教えて」と聞けば、その場で答えます。' },
  { q: 'メモからやることを拾うとは？', a: '書いたメモの中から、あなたがこれからやること（「見積もりを出す」「資料を送る」など）をクラゲくんが拾い、「今やること」と顧客・ディールの詳細に並べます。相手がやることや、もう済んだことは拾いません。済んだら［✅ 済んだ］を押すだけです。' },
  { q: '今使っている顧客リストを移せますか？', a: '管理者が CSV ファイルで会社・顧客・ディールをまとめて取り込めます。見本の CSV をダウンロードして、その形に合わせてください。「担当者メール」の列にメンバーのメールアドレスを入れると、その人の担当になります。' },
  { q: '使い方を覚えられるか不安です', a: '使い始めの14日間は、毎朝のブリーフィングに「はじめかた」が届きます。迷ったら「使い方を教えて」と聞けば、クラゲくんがその場で答えます。' },
  { q: '人数はどう数えますか？', a: 'その月にクラゲを使った人（メッセージを送った・ボタンを押した・コマンドを使った人）を数えます。朝のブリーフィングを受け取っただけの人は数えません。' },
  { q: 'メンバーを増やすとどうなりますか？', a: 'プランの人数の範囲内なら、新しい人はすぐに使えます。超える人は、管理者が許可すると使えるようになります。許可するときに追加料金が表示されるので、知らないうちに料金が増えることはありません。' },
  { q: '追加分はいつ請求されますか？', a: '使った月の分を、翌月の請求に加えます。月の途中から使い始めても日割りにはせず、1人分として数えます。' },
  { q: '無料期間中は何人で試せますか？', a: '人数の制限はありません。チーム全員でお試しください。' },
]

// ── SEO / AIO メタ ───────────────────────────────────────
usePageSeo({
  path: '/',
  title: 'クラゲディール — Slackだけで完結するAI営業CRM',
  description:
    'Slack のボタンで、営業の記録が完了。AI が営業コーチとして毎朝ブリーフィングし、ディール確度・次の一手・メール下書きを支援します。ひとりから小さな営業チームまで。PERSONAL ¥2,980/月〜。14日間無料でお試しいただけます。',
})

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'クラゲディール',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Slack',
  url: 'https://kuragedeal.ai',
  description:
    'Slack のボタンで、営業の記録が完了する AI 営業 CRM。AI が MEDDPICC コーチング・ディール確度の算出・メール下書きを支援する。',
  offers: [
    { '@type': 'Offer', name: 'PERSONAL', price: 2980, priceCurrency: 'JPY', description: '1名まで。14日間の無料トライアル付き。' },
    { '@type': 'Offer', name: 'TRIO', price: 5980, priceCurrency: 'JPY', description: '3名まで（4名目から1名ごとに+¥2,000、7名まで）。14日間の無料トライアル付き。' },
    { '@type': 'Offer', name: 'TEAM', price: 14980, priceCurrency: 'JPY', description: '10名まで。14日間の無料トライアル付き。' },
  ],
  publisher: { '@type': 'Organization', name: '株式会社shiro' },
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(softwareLd) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqLd) },
  ],
})
</script>
