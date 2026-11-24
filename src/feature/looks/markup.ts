// 5つのデザイン違いページ（/roast など）のマークアップ。
// スタイルは public/looks/looks.css、動きは public/looks/looks.js。
// メニュー画像だけは microCMS の menus から受け取る（CMS の使い方はトップページと同じ）。

export const LOOKS = ["roast", "morning", "pop", "kissa", "mono"] as const;
export type Look = (typeof LOOKS)[number];
export const isLook = (v: unknown): v is Look => LOOKS.includes(v as Look);

export type LookMenu = { url: string; width: number; height: number };

type Texts = {
    eyebrow: string;
    h1: string[];
    sub: string;
    aboutE: string;
    brew: string;
    quiz: string;
    menu: string;
    timer: string;
    access: string;
    gallery: string;
    foot: string;
    menuLead: string;
};

export const LOOK_TEXT: Record<Look, Texts> = {
    roast: {
        eyebrow: "Specialty coffee — Kakegawa, Shizuoka",
        h1: ["Number <em>A</em>", "Coffee"],
        sub: "進化するスペシャルティコーヒー",
        aboutE: "About",
        brew: "Three ways<br>to <em>brew.</em>",
        quiz: "今日の<br><em>一杯</em>診断",
        menu: "The <em>menu.</em>",
        timer: "Brew it<br>at <em>home.</em>",
        access: "Come <em>visit.</em>",
        gallery: "At the <em>counter.</em>",
        foot: "Number <em>A</em><br>Coffee",
        menuLead:
            "カードの山を左右にスワイプしてめくれます。タップで拡大し、ピンチやホイールでズームできます。",
    },
    morning: {
        eyebrow: "掛川・水垂のスペシャルティコーヒー",
        h1: ["一杯の中に、", "<em>多様性</em>を。"],
        sub: "Number A Coffee",
        aboutE: "はじめに",
        brew: "三つの<em>淹れ方</em>",
        quiz: "今日の<em>一杯</em>",
        menu: "メニュー",
        timer: "おうちで<em>ドリップ</em>",
        access: "お店への<em>道</em>",
        gallery: "カウンターから",
        foot: "Number A<br><em>Coffee</em>",
        menuLead:
            "本のページをめくるように、左右のスワイプで1枚ずつ。タップで拡大できます。",
    },
    pop: {
        eyebrow: "★ Specialty coffee ★ Kakegawa",
        h1: ["Number A", "<em>Coffee!</em>"],
        sub: "進化するスペシャルティコーヒー",
        aboutE: "About us",
        brew: "3 ways<br>to <em>brew!</em>",
        quiz: "Today's<br><em>cup?</em>",
        menu: "<em>Menu</em>",
        timer: "Drip<br><em>timer!</em>",
        access: "Come <em>on in!</em>",
        gallery: "<em>Snap</em> shots",
        foot: "Number A<br><em>Coffee</em>",
        menuLead:
            "扇形に広げたカードを、投げるようにスワイプ！タップで拡大できます。",
    },
    kissa: {
        eyebrow: "Coffee & Espresso",
        h1: ["<em>珈琲</em>"],
        sub: "Number A Coffee ・ 掛川",
        aboutE: "ご挨拶",
        brew: "抽出の<em>作法</em>",
        quiz: "本日の<em>一杯</em>占い",
        menu: "お<em>品書き</em>",
        timer: "手淹れの<em>時間</em>",
        access: "<em>交通</em>案内",
        gallery: "店内の<em>風景</em>",
        foot: "<em>珈琲</em><br>Number A Coffee",
        menuLead:
            "金の額縁の中で、スワイプすると次のお品書きに切り替わります。タップで拡大できます。",
    },
    mono: {
        eyebrow: "N° A — Specialty coffee bar",
        h1: ["Number A", "Coffee"],
        sub: "",
        aboutE: "00 — About",
        brew: "01 — Brew<br>methods",
        quiz: "02 — Today's<br>cup",
        menu: "03 — Menu",
        timer: "04 — Drip<br>timer",
        access: "05 — Visit",
        gallery: "06 — Counter",
        foot: "Number A<br>Coffee",
        menuLead:
            "罫線のカードを左右に送ります。後ろのページはモノクロ、手前だけカラー。タップで拡大できます。",
    },
};

const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export const renderLookMarkup = (look: Look, menus: LookMenu[]): string => {
    const T = LOOK_TEXT[look];
    const t = (k: keyof Texts) => (k === "h1" ? "" : (T[k] as string));
    const h1 = T.h1
        .map((l) => `<span class="line" data-split>${l}</span>`)
        .join("");
    const picks =
        menus.length > 1 ? [menus[0], menus[menus.length - 1]] : menus;
    const galleryMenus = picks
        .map(
            (m) =>
                `<div class="tile" data-tilt><img src="${esc(
                    m.url,
                )}?w=600" alt="メニュー" style="object-position:top" loading="lazy"></div>`,
        )
        .join("");
    return `<div id="opening" aria-hidden="true">
  <div class="op op-roast">
    <div class="stage">
      <img class="op-logo" src="/looks/logo.png" alt="">
      <svg viewBox="0 0 220 170">
        <defs><clipPath id="cupClip"><path d="M40 70h120l-10 70a16 16 0 0 1-16 14H66a16 16 0 0 1-16-14z"/></clipPath></defs>
        <path class="stream" d="M110 0v70" stroke="#e3b47c" stroke-width="5" stroke-linecap="round" stroke-dasharray="120" fill="none"/>
        <g clip-path="url(#cupClip)"><rect class="pour" x="30" y="78" width="160" height="90" fill="#6b3a24"/><rect class="pour" x="30" y="78" width="160" height="8" fill="#e3b47c" opacity=".7"/></g>
        <path d="M40 70h120l-10 70a16 16 0 0 1-16 14H66a16 16 0 0 1-16-14z" fill="none" stroke="#f4ece2" stroke-width="3"/>
        <path d="M158 86h12a16 16 0 0 1 0 32h-16" fill="none" stroke="#f4ece2" stroke-width="3"/>
        <path d="M24 162h172" stroke="#f4ece2" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
  <div class="op op-morning"><div class="slats"><i style="--k:0"></i><i style="--k:1"></i><i style="--k:2"></i><i style="--k:3"></i><i style="--k:4"></i><i style="--k:5"></i><i style="--k:6"></i><i style="--k:7"></i></div><img class="op-logo" src="/looks/logo.png" alt=""></div>
  <div class="op op-pop"><i class="ink"></i><i class="ink"></i><i class="ink"></i><img class="op-logo" src="/looks/logo.png" alt=""><span class="bang">GOOD COFFEE!</span></div>
  <div class="op op-kissa"><div class="neon">珈琲</div><p>NUMBER A COFFEE</p></div>
  <div class="op op-mono"><i class="gl h"></i><i class="gl h"></i><i class="gl v"></i><i class="gl v"></i><span class="tag">Number A Coffee — Loading</span><b class="count" id="count">000<small>%</small></b></div>
  <button class="skip" type="button" id="skip">スキップ</button>
</div>

<div id="cur"><svg viewBox="0 0 22 30" aria-hidden="true"><ellipse cx="11" cy="15" rx="10" ry="14" fill="#6b3a24" stroke="#171513" stroke-width="2"/><path d="M11 2c-4 7 4 19 0 26" stroke="#171513" stroke-width="2" fill="none"/></svg><span>見る</span></div>
<div id="dot"></div><div id="spot"></div><div id="xhx"></div><div id="xhy"></div><div id="xhl"></div>

<header class="hdr" id="hdr">
  <div class="wrap bar">
    <a class="logo" href="#top" data-go="top" aria-label="Number A Coffee トップへ"><img src="/looks/logo.png" alt="Number A Coffee"></a>
    <nav aria-label="メイン">
      <a href="#about" data-go="about" data-scr>About</a><a href="#brew" data-go="brew" data-scr>Brew</a><a href="#quiz" data-go="quiz" data-scr>Quiz</a><a href="#menu" data-go="menu" data-scr>Menu</a><a href="#timer" data-go="timer" data-scr>Timer</a><a href="#access" data-go="access" data-scr>Access</a>
    </nav>
    <div class="right">
      <span class="status" id="status"><i></i><span>営業中</span></span>
      <button class="burger" id="burger" type="button" aria-label="メニューを開く"><span></span></button>
    </div>
  </div>
  <div class="progress" id="progress"></div>
</header>

<div class="drawer" id="drawer" aria-hidden="true">
  <button class="round close" id="dclose" type="button" aria-label="閉じる">✕</button>
  <a href="#about" data-go="about">About<small>私たちについて</small></a>
  <a href="#brew" data-go="brew">Brew<small>抽出方法</small></a>
  <a href="#quiz" data-go="quiz">Quiz<small>今日の一杯診断</small></a>
  <a href="#menu" data-go="menu">Menu<small>メニュー</small></a>
  <a href="#timer" data-go="timer">Timer<small>ドリップタイマー</small></a>
  <a href="#access" data-go="access">Access<small>アクセス</small></a>
</div>

<main id="top">
  <section class="hero" aria-label="Number A Coffee">
    <div class="bg" id="herobg">
      <video src="/numberA.mp4" poster="/looks/hero.jpg" autoplay muted loop playsinline></video>
      <div class="rays" aria-hidden="true"></div>
      <div class="slats2" aria-hidden="true"><i style="--k:0"></i><i style="--k:1"></i><i style="--k:2"></i><i style="--k:3"></i><i style="--k:4"></i><i style="--k:5"></i></div>
    </div>
    <div class="shade" aria-hidden="true"></div>
    <canvas id="steam" aria-hidden="true"></canvas>
    <svg class="badge" viewBox="0 0 200 200" aria-hidden="true">
      <defs><path id="circ" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/></defs>
      <circle cx="100" cy="100" r="97" fill="#d8432b" stroke="#171513" stroke-width="5"/>
      <g class="spin"><text font-family="Anton, sans-serif" font-size="21" letter-spacing="2.6" fill="#fff"><textPath href="#circ">SPECIALTY COFFEE ★ KAKEGAWA ★ NUMBER A ★</textPath></text></g>
      <text x="100" y="128" text-anchor="middle" font-family="Anton, sans-serif" font-size="76" fill="#f1c232" stroke="#171513" stroke-width="3">A</text>
    </svg>
    <div class="wrap copy" id="herocopy">
      <p class="eyebrow" data-t="eyebrow">${t("eyebrow")}</p>
      <div class="sign"><h1 id="h1" aria-label="Number A Coffee">__H1__</h1></div>
      <div class="clock" id="clock"><b>Local time</b><span id="clockT">--:--:--</span><b>Position</b><span>34.7921° N, 138.0255° E</span><b>Open</b><span id="clockO">—</span></div>
      <div class="sub">
        <p data-t="sub">${t("sub")}</p>
        <a class="cue" href="#about" data-go="about"><i></i>SCROLL</a>
      </div>
    </div>
  </section>

  <div class="marquee" aria-hidden="true"><div class="row" id="mq1"></div><div class="row rev" id="mq2"></div></div>

  <section class="sec" id="about">
    <div class="wrap about">
      <div>
        <p class="eyebrow" data-t="aboutE">${t("aboutE")}</p>
        <p class="reading" id="reading">進化するスペシャルティコーヒー。その鍵となるのは<span class="hl">生産者の努力</span>、<span class="hl">ロースターの情熱</span>、そして<span class="hl">バリスタの探求心</span>。カップの中に表現されたフレーバーの多様性を感じてみて下さい。</p>
        <div class="facts" data-reveal>
          <div><b>3</b><span>抽出方法</span></div>
          <div><b>7:30</b><span>土日祝の開店</span></div>
          <div><b>+¥22</b><span>豆乳に変更</span></div>
        </div>
      </div>
      <div class="photo clip" data-parallax><img src="/image02.jpg" alt="カウンターに置かれたコーヒーカップ"></div>
    </div>
  </section>

  <section class="sec" id="brew">
    <div class="pin">
      <div class="wrap head">
        <div><p class="eyebrow">Specialty Coffee</p><h2 class="h2" data-t="brew" data-scr>${t(
            "brew",
        )}</h2></div>
        <p>同じ豆でも、淹れ方で味わいは変わります。スペシャルティコーヒーは3つの抽出方法から選べます。</p>
      </div>
      <div class="track" id="track">
        <article class="method box">
          <div class="no"><span>HAND DRIP</span><span>香り</span></div>
          <svg viewBox="0 0 120 120" aria-hidden="true"><path d="M24 24h72L70 70H50z"/><path d="M18 24h84"/><path d="M96 34h8a8 8 0 0 1 0 16h-10"/><path d="M40 78h40v24a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8z"/><path class="liq" d="M42 94h36v8a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6z"/><path d="M60 70v8" stroke-dasharray="2 4"/></svg>
          <div><div class="kana">ハンドドリップ</div><h3>Hand Drip V60</h3></div>
          <p>円すい形のドリッパーは、コーヒー粉層が深くなるのでコーヒーがお湯にふれる時間が長くなり、香りや味をしっかり抽出します。</p>
          <div class="glow"></div>
        </article>
        <article class="method box">
          <div class="no"><span>AERO PRESS</span><span>味わい</span></div>
          <svg viewBox="0 0 120 120" aria-hidden="true"><rect x="42" y="8" width="36" height="16" rx="3"/><rect x="38" y="24" width="44" height="58" rx="4"/><path class="liq" d="M41 58h38v20a3 3 0 0 1-3 3H44a3 3 0 0 1-3-3z"/><path d="M30 86h60"/><path d="M38 92h44v14a6 6 0 0 1-6 6H44a6 6 0 0 1-6-6z"/><path d="M60 2v6"/></svg>
          <div><div class="kana">エアロプレス</div><h3>Aero Press</h3></div>
          <p>空気の圧力で抽出する方法。抽出の際にかかる圧力により、コーヒーの味わいをしっかり感じられます。</p>
          <div class="glow"></div>
        </article>
        <article class="method box">
          <div class="no"><span>PRESS</span><span>豆本来の味</span></div>
          <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="58" cy="8" r="5"/><path d="M58 13v38"/><path d="M36 51h44"/><rect x="34" y="30" width="48" height="80" rx="5"/><path class="liq" d="M37 60h42v46a3 3 0 0 1-3 3H40a3 3 0 0 1-3-3z"/><path d="M82 46h10a6 6 0 0 1 6 6v34a6 6 0 0 1-6 6H82"/></svg>
          <div><div class="kana">プレス</div><h3>Press</h3></div>
          <p>4分間お湯に浸して抽出する方法。コーヒーの香りや油分をカットすることなく、豆本来の味をダイレクトに楽しめます。</p>
          <div class="glow"></div>
        </article>
        <article class="method box cta">
          <div class="no"><span>AT HOME</span><span>おうちで</span></div>
          <h3>家でも<br>淹れてみる？</h3>
          <p>ハンドドリップの手順を、タイマーで一緒に。注ぐ量と時間をガイドします。</p>
          <a class="btn dark" href="#timer" data-go="timer" data-cursor="開く">ドリップタイマーへ →</a>
        </article>
      </div>
    </div>
  </section>

  <section class="sec" id="quiz">
    <div class="wrap quiz">
      <div data-reveal>
        <p class="eyebrow">Today's cup</p>
        <h2 class="h2" data-t="quiz" data-scr>${t("quiz")}</h2>
        <p class="lead">3つの質問に答えると、メニューの中から今の気分に合う一杯をおすすめします。</p>
      </div>
      <div class="qcard box" id="qcard" data-reveal></div>
    </div>
  </section>

  <section class="sec" id="menu">
    <div class="wrap menuwrap">
      <div data-reveal>
        <p class="eyebrow">Menu</p>
        <h2 class="h2" data-t="menu" data-scr>${t("menu")}</h2>
        <p class="lead" data-t="menuLead">${t("menuLead")}</p>
        <p style="color:var(--mute);font-size:12px">※価格は全て税込です。アレルギーの方はご相談ください。</p>
      </div>
      <div style="display:grid;gap:22px">
        <div class="stack" id="stack" aria-label="メニュー画像"></div>
        <div class="mctl">
          <button class="round" id="mprev" type="button" aria-label="前のメニュー">←</button>
          <span class="mcount" id="mcount">1 / 4</span>
          <button class="round" id="mnext" type="button" aria-label="次のメニュー">→</button>
        </div>
        <div class="thumbs" id="thumbs"></div>
      </div>
    </div>
  </section>

  <section class="sec" id="timer">
    <div class="wrap timer">
      <div data-reveal>
        <p class="eyebrow">Drip timer</p>
        <h2 class="h2" data-t="timer" data-scr>${t("timer")}</h2>
        <p class="lead">ハンドドリップの手順を、時間と注ぐ量でガイドします。</p>
        <div class="recipe"><span>豆 15g</span><span>お湯 240g</span><span>92℃</span><span>V60</span></div>
        <p style="color:var(--mute);font-size:12px;margin-top:12px">※レシピは一般的な例です。お店のレシピに差し替えできます。</p>
      </div>
      <div class="tbox box" data-reveal>
        <div class="tmain">
          <div class="ring">
            <svg viewBox="0 0 100 100"><circle class="bgc" cx="50" cy="50" r="44"/><circle class="fg" id="ringfg" cx="50" cy="50" r="44" stroke-dasharray="276.46" stroke-dashoffset="276.46"/></svg>
            <div class="mid"><b id="tclock">0:00</b><span>/ 2:45</span></div>
          </div>
          <div>
            <div class="gram"><span id="tgram">0</span><small>g</small></div>
            <p class="now" id="tnow">準備ができたらスタート</p>
            <p id="tnote">ドリッパーにフィルターと粉15gをセット</p>
          </div>
        </div>
        <div class="steps" id="tsteps"></div>
        <div class="tctl">
          <button class="btn fill" id="tstart" type="button">スタート</button>
          <button class="btn" id="treset" type="button">リセット</button>
          <label class="speed"><input type="checkbox" id="tfast"> デモ用に10倍速</label>
        </div>
      </div>
    </div>
  </section>

  <section class="sec" id="access">
    <div class="wrap">
      <div data-reveal style="margin-bottom:40px"><p class="eyebrow">Access</p><h2 class="h2" data-t="access" data-scr>${t(
          "access",
      )}</h2></div>
      <div class="access">
        <div class="left">
          <div class="mapbox box" data-reveal>
            <iframe title="Number A Coffee の地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.549313999379!2d138.02546375083418!3d34.79211948572804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601af909253d8bff%3A0xff0a0c6917eac090!2sNumber%20A%20coffee!5e0!3m2!1sja!2sjp!4v1659802293476!5m2!1sja!2sjp" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="week" id="week" data-reveal></div>
        </div>
        <div class="right">
          <div class="countdown" id="countdown" data-reveal><span>いまの営業状況</span><b>—</b><span></span></div>
          <dl class="info" data-reveal>
            <div><dt>住所</dt><dd>〒436-0061 静岡県掛川市水垂936-1</dd><button class="pill" type="button" data-copy="静岡県掛川市水垂936-1">コピー</button></div>
            <div><dt>電話</dt><dd>0537-28-7242</dd><button class="pill" type="button" data-copy="0537-28-7242">コピー</button></div>
            <div><dt>平日</dt><dd>9:00 – 17:00</dd><span></span></div>
            <div><dt>土日祝</dt><dd>7:30 – 17:00</dd><span></span></div>
          </dl>
          <div style="display:flex;flex-wrap:wrap;gap:10px" data-reveal>
            <a class="btn fill" href="https://maps.google.com/?q=Number+A+coffee" target="_blank" rel="noopener" data-cursor="地図">Google マップで開く ↗</a>
            <a class="btn" href="tel:0537287242" data-cursor="電話">電話する</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="sec" id="gallery" style="padding-top:0">
    <div class="wrap">
      <div data-reveal style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:16px;margin-bottom:32px">
        <div><p class="eyebrow">Instagram</p><h2 class="h2" data-t="gallery" data-scr>${t(
            "gallery",
        )}</h2></div>
        <a class="btn" href="https://www.instagram.com/numbera.coffee/" target="_blank" rel="noopener" data-cursor="開く">Instagram を見る ↗</a>
      </div>
      <div class="gallery" data-reveal>
        <div class="tile big" data-tilt><video src="/numberA.mp4" muted loop playsinline autoplay></video></div>
        <div class="tile" data-tilt><img src="/image01.jpg" alt="ブラウンのカップのコーヒー"></div>
        <div class="tile" data-tilt><img src="/image02.jpg" alt="カウンターのコーヒー"></div>
        __GALLERY_MENUS__
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <p class="big" data-t="foot">${t("foot")}</p>
    <div class="row"><span>〒436-0061 静岡県掛川市水垂936-1 ・ 0537-28-7242</span><span>© 2022 Number A Coffee</span></div>
  </div>
</footer>

<button class="totop" id="totop" type="button" aria-label="ページの先頭へ">
  <svg viewBox="0 0 54 54"><circle cx="27" cy="27" r="24" style="stroke:var(--line)"/><circle id="toring" cx="27" cy="27" r="24" style="stroke:var(--accent)" stroke-dasharray="150.8" stroke-dashoffset="150.8"/></svg>
  <span class="t">TOP</span>
</button>


<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="メニュー拡大">
  <div class="top"><span id="lbcount">1 / 4</span><span>ピンチ・ホイール・ダブルクリックで拡大</span><button class="round" id="lbclose" type="button" aria-label="閉じる">✕</button></div>
  <div class="view" id="lbview"><img id="lbimg" alt="メニュー" draggable="false"></div>
  <div class="bottom"><button class="round" id="lbprev" type="button" aria-label="前へ">←</button><button class="pill" id="lbzoom" type="button">拡大 / 戻す</button><button class="round" id="lbnext" type="button" aria-label="次へ">→</button></div>
</div>
<div class="toast" id="toast" role="status"></div>`
        .replace("__H1__", h1)
        .replace("__GALLERY_MENUS__", galleryMenus);
};
