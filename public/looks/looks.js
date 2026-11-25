// Number A Coffee デザイン違いページの動き。データは #nac-data（look とメニュー画像）から受け取る。
(() => {
  const dataEl = document.getElementById("nac-data");
  if (!dataEl) return;
  const DATA = JSON.parse(dataEl.textContent || "{}");
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // microCMS menus の contents[].menu（getStaticProps で取得したもの）
  const cmsMenus = (DATA.menus || []).map((m, i) => ({ id: "menu" + i, menu: m }));
  const sized = (u, w) => u + (u.includes("?") ? "&" : "?") + "w=" + w;

  /* ---------- look ---------- */
  const LOOKS = {
    roast: { openMs: 2300, particles: "steam" },
    morning: { openMs: 1700, particles: "motes" },
    pop: { openMs: 1500, particles: "none" },
    kissa: { openMs: 2200, particles: "smoke" },
    mono: { openMs: 1900, particles: "none" },
  };
  const look = LOOKS[DATA.look] ? DATA.look : "roast";
  root.dataset.look = look;

  const toast = msg => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 1800); };

  /* ---------- text + split ---------- */
  let ci = 0;
  const splitChars = el => {
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const f = document.createDocumentFragment();
        [...n.textContent].forEach(ch => { const s = document.createElement("span"); s.className = "ch"; s.style.setProperty("--i", ci++); s.textContent = ch === " " ? " " : ch; f.appendChild(s); });
        n.replaceWith(f);
      } else walk(n);
    });
    walk(el);
  };
  const splitHero = () => { ci = 0; $$("#h1 [data-split]").forEach(splitChars); };

  /* ---------- scramble (mono) ---------- */
  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=";
  const orig = new WeakMap();
  const scramble = el => {
    if (reduce || look !== "mono") return;
    const nodes = []; const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n;
    while ((n = tw.nextNode())) if (n.textContent.trim()) { if (!orig.has(n)) orig.set(n, n.textContent); nodes.push(n); }
    const start = performance.now(), dur = 700;
    cancelAnimationFrame(el._sr);
    const frame = now => {
      const p = clamp((now - start) / dur, 0, 1);
      nodes.forEach(t => { const o = orig.get(t); const k = Math.floor(o.length * p); t.textContent = o.slice(0, k) + [...o.slice(k)].map(c => c === " " || c === " " ? c : GLYPHS[Math.random() * GLYPHS.length | 0]).join(""); });
      if (p < 1) el._sr = requestAnimationFrame(frame); else nodes.forEach(t => t.textContent = orig.get(t));
    };
    el._sr = requestAnimationFrame(frame);
  };
  $$("nav [data-scr]").forEach(a => a.addEventListener("pointerenter", () => scramble(a)));
  const scrIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) scramble(e.target); }), { rootMargin: "0px 0px -15% 0px" });
  $$(".h2[data-scr]").forEach(h => scrIO.observe(h));

  /* ---------- opening ---------- */
  const opening = $("#opening");
  const finishOpening = () => {
    clearTimeout(playOpening._t); opening.classList.add("done"); document.body.classList.add("ready");
    if (look === "mono") $$("#h1 .line").forEach(scramble);
  };
  function playOpening() {
    document.body.classList.remove("ready");
    opening.classList.remove("play", "done"); void opening.offsetWidth; opening.classList.add("play");
    if (look === "mono") { const c = $("#count"), t0 = performance.now(); const step = now => { const p = clamp((now - t0) / 1400, 0, 1); c.firstChild.nodeValue = String(Math.round(p * 100)).padStart(3, "0"); if (p < 1 && opening.classList.contains("play")) requestAnimationFrame(step); }; requestAnimationFrame(step); }
    clearTimeout(playOpening._t); playOpening._t = setTimeout(finishOpening, LOOKS[look].openMs);
  }
  $("#skip").addEventListener("click", finishOpening);
  // ブラウザの「戻る」でページが復元されたときにオープニングが残らないように
  addEventListener("pageshow", e => { if (e.persisted) finishOpening(); });

  /* ---------- marquee ---------- */
  const items = [["Cafe Latte", "8oz ¥528"], ["Flat White", "5oz ¥506"], ["Cappuccino", "5oz ¥506"], ["Gibraltar", "4.5oz ¥506"], ["Honey Lemon Latte", "¥583"], ["Caramel Latte", "¥583"], ["Popcorn Latte", "¥583"], ["Matcha Latte", "¥583"]];
  const items2 = [["Espresso Limone", "¥605"], ["Espresso Orange Soda", "¥605"], ["Cafe Latte Coffee Jelly", "¥627"], ["Espresso Float", "¥627"], ["Frozen Latte", "¥638〜"], ["Lemonade", "¥495"], ["Banana Juice", "¥495"], ["Iced Coffee", "¥528"]];
  const mq = arr => { const h = arr.map(([n, p]) => `<span>${n}<b>${p}</b></span>`).join(""); return h + h; };
  $("#mq1").innerHTML = mq(items); $("#mq2").innerHTML = mq(items2);

  /* ---------- reading ---------- */
  const reading = $("#reading");
  const wrapChars = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) { const f = document.createDocumentFragment(); [...n.textContent].forEach(ch => { const s = document.createElement("span"); s.className = "c" + (node.classList && node.classList.contains("hl") ? " hl" : ""); s.textContent = ch; f.appendChild(s); }); n.replaceWith(f); }
    else wrapChars(n);
  });
  wrapChars(reading);
  const chars = $$("#reading .c");

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove("pre"); e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -12% 0px" });
  if (!reduce) {
    $$("[data-reveal]").forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pre"); io.observe(el); } });
    $$(".photo.clip").forEach(el => { if (el.getBoundingClientRect().top > innerHeight) io.observe(el); else el.classList.add("in"); });
  } else $$(".photo.clip").forEach(el => el.classList.add("in"));

  /* ---------- status / countdown / week / clock ---------- */
  const jst = () => new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  const hours = d => (d === 0 || d === 6) ? [7.5, 17] : [9, 17];
  const fmt = h => `${Math.floor(h)}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  $("#week").innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => { const [o, c] = hours(d); return `<div data-d="${d}"><b>${days[d]}</b><span>${fmt(o)}</span><span>${fmt(c)}</span></div>`; }).join("");
  const updateStatus = () => {
    const n = jst(), d = n.getDay(), h = n.getHours() + n.getMinutes() / 60, [o, c] = hours(d), open = h >= o && h < c;
    const st = $("#status"); st.classList.toggle("closed", !open); st.querySelector("span").textContent = open ? "営業中" : "準備中";
    $$("#week div").forEach(el => el.classList.toggle("today", +el.dataset.d === d));
    const [lab, big, sub] = $("#countdown").children;
    const left = m => { const hh = Math.floor(m / 60), mm = Math.round(m % 60); return (hh ? `${hh}時間` : "") + `${mm}分`; };
    if (open) { lab.textContent = "営業中・閉店まであと"; big.textContent = left((c - h) * 60); sub.textContent = `本日は ${fmt(o)} – ${fmt(c)}`; }
    else if (h < o) { lab.textContent = "開店まであと"; big.textContent = left((o - h) * 60); sub.textContent = `本日は ${fmt(o)} – ${fmt(c)}`; }
    else { const t = hours((d + 1) % 7)[0]; lab.textContent = "本日の営業は終了しました"; big.textContent = `明日は ${fmt(t)} から`; sub.textContent = "祝日は土日と同じ 7:30 開店"; }
    $("#clockO").textContent = open ? `Open until ${fmt(c)}` : `Opens ${fmt(h < o ? o : hours((d + 1) % 7)[0])}`;
  };
  updateStatus(); setInterval(updateStatus, 30000);
  setInterval(() => { if (look !== "mono") return; const n = jst(); $("#clockT").textContent = [n.getHours(), n.getMinutes(), n.getSeconds()].map(v => String(v).padStart(2, "0")).join(":") + " JST"; }, 1000);

  $$("[data-copy]").forEach(b => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); toast("コピーしました"); }
    catch (_) { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast("選択しました。コピーしてください"); }
  }));

  /* ---------- nav / drawer ---------- */
  const drawer = $("#drawer");
  const setDrawer = open => { drawer.classList.toggle("open", open); drawer.setAttribute("aria-hidden", String(!open)); };
  $("#burger").addEventListener("click", () => setDrawer(true));
  $("#dclose").addEventListener("click", () => setDrawer(false));
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-go]"); if (!a) return;
    e.preventDefault(); setDrawer(false);
    const el = document.getElementById(a.dataset.go); if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  });

  /* ---------- particles ---------- */
  const cv = $("#steam"), cx = cv.getContext("2d"); let parts = [], heroVisible = true;
  const sizeCv = () => { const r = cv.getBoundingClientRect(); cv.width = Math.max(1, r.width * devicePixelRatio); cv.height = Math.max(1, r.height * devicePixelRatio); };
  sizeCv(); addEventListener("resize", sizeCv);
  new IntersectionObserver(([e]) => heroVisible = e.isIntersecting).observe(cv);
  const spawn = (mode, W, H, D) => {
    if (mode === "steam") return { x: W * (.52 + (Math.random() - .5) * .14), y: H * .72, r: 10 * D, vx: (Math.random() - .5) * .4, vy: -(.5 + Math.random() * .7) * D, grow: .32 * D, peak: .16, life: 0, rgb: "255,248,240" };
    if (mode === "smoke") return { x: W * (.3 + Math.random() * .4), y: H * .95, r: 30 * D, vx: (Math.random() - .5) * .3, vy: -(.25 + Math.random() * .35) * D, grow: .4 * D, peak: .1, life: 0, rgb: "255,214,200" };
    const bg = $("#herobg").getBoundingClientRect(), hr = cv.getBoundingClientRect();
    return { x: (bg.left - hr.left + Math.random() * bg.width) * D, y: (bg.top - hr.top + Math.random() * bg.height) * D, r: (1 + Math.random() * 2.2) * D, vx: (.1 + Math.random() * .25) * D, vy: (-.1 - Math.random() * .2) * D, grow: 0, peak: .85, life: 0, rgb: "255,240,200", mote: true };
  };
  const loopP = () => {
    const mode = LOOKS[look].particles;
    if (heroVisible && !reduce && mode !== "none") {
      const W = cv.width, H = cv.height, D = devicePixelRatio, max = mode === "motes" ? 70 : mode === "smoke" ? 34 : 46;
      if (parts.length < max && Math.random() < (mode === "motes" ? .35 : .5)) parts.push(spawn(mode, W, H, D));
      cx.clearRect(0, 0, W, H);
      parts.forEach(p => {
        p.life++; p.x += p.vx + (p.mote ? 0 : Math.sin((p.life + p.y) / 40) * .35); p.y += p.vy; p.r += p.grow;
        p.a = p.mote ? Math.sin(Math.min(Math.PI, p.life / 260 * Math.PI)) * p.peak : (p.life < 30 ? p.life / 30 * p.peak : Math.max(0, p.peak - (p.life - 30) / 900));
        if (p.mote) { cx.fillStyle = `rgba(${p.rgb},${p.a})`; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); return; }
        const g = cx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r); g.addColorStop(0, `rgba(${p.rgb},${p.a})`); g.addColorStop(1, `rgba(${p.rgb},0)`);
        cx.fillStyle = g; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill();
      });
      parts = parts.filter(p => (p.mote ? p.life < 260 : p.a > .002) && p.y > -p.r);
    }
    requestAnimationFrame(loopP);
  };
  requestAnimationFrame(loopP);

  /* ---------- scroll-driven ---------- */
  const brew = $("#brew"), track = $("#track"), pinMq = matchMedia("(min-width: 900px)");
  const setupBrew = () => {
    if (pinMq.matches && !reduce) { brew.classList.add("pinned"); track.style.transform = ""; const extra = track.scrollWidth - innerWidth; brew.style.height = (innerHeight + Math.max(0, extra) + 120) + "px"; }
    else { brew.classList.remove("pinned"); brew.style.height = ""; track.style.transform = ""; }
  };
  setupBrew(); addEventListener("resize", setupBrew); addEventListener("load", setupBrew);
  const hdr = $("#hdr"), prog = $("#progress"), totop = $("#totop"), toring = $("#toring");
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight, p = max > 0 ? y / max : 0;
    hdr.classList.toggle("solid", y > 40);
    prog.style.transform = `scaleX(${p})`;
    totop.classList.toggle("show", y > innerHeight * .8);
    toring.style.strokeDashoffset = 150.8 * (1 - p);
    if (!reduce) {
      const hp = clamp(y / innerHeight, 0, 1), full = look === "roast" || look === "kissa";
      $("#herobg").style.transform = full ? `scale(${1 + hp * .15}) translateY(${hp * 60}px)` : `translateY(${hp * 40}px)`;
      $("#herocopy").style.transform = `translateY(${hp * -80}px)`; $("#herocopy").style.opacity = full ? 1 - hp * 1.1 : 1;
      $$("[data-parallax] img").forEach(img => { const r = img.parentElement.getBoundingClientRect(); const t = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; img.style.transform = `scale(1.12) translateY(${t * -40}px)`; });
      if (brew.classList.contains("pinned")) { const r = brew.getBoundingClientRect(); const len = brew.offsetHeight - innerHeight; const bp = clamp(-r.top / len, 0, 1); track.style.transform = `translateX(${-bp * Math.max(0, track.scrollWidth - innerWidth)}px)`; }
    }
    const r = reading.getBoundingClientRect(); const rp = clamp((innerHeight * .85 - r.top) / (r.height + innerHeight * .4), 0, 1);
    const n = reduce ? chars.length : Math.round(rp * chars.length); chars.forEach((c, i) => c.classList.toggle("on", i < n));
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- quiz ---------- */
  const R = (name, ja, desc, price, temp, menu) => ({ name, ja, desc, price, temp, menu });
  const results = {
    "hot-clear-strong": R("Hand Drip V60", "ハンドドリップ", "円すい形のドリッパーで、香りや味をしっかり抽出。豆の個性をいちばん素直に味わえます。", "", "HOT", 0),
    "hot-clear-mid": R("Aero Press", "エアロプレス", "空気の圧力で抽出。コーヒーの味わいをしっかり、でも軽やかに。", "", "HOT", 0),
    "hot-clear-soft": R("Honey Lemon Latte", "ハニーレモンラテ", "すりおろしたレモンピールとはちみつ。爽やかな甘さのレモン香るラテ。", "¥583", "HOT", 0),
    "hot-milk-strong": R("Gibraltar", "ジブラルタル", "フォームミルクの甘さとエスプレッソの苦み。小さなグラスで濃く味わう一杯。", "4.5oz ¥506", "HOT", 0),
    "hot-milk-mid": R("Flat White", "フラットホワイト", "きめ細かなスチームミルクとエスプレッソ。コーヒーとミルクのちょうど真ん中。", "5oz ¥506", "HOT", 0),
    "hot-milk-soft": R("Cafe Latte", "カフェラテ", "たっぷりのミルクとエスプレッソ。やさしく、ほっとする定番。", "8oz ¥528", "HOT", 0),
    "hot-sweet-strong": R("Cafe Mocha", "カフェモカ", "エスプレッソ、ミルク、チョコレートソース。ほろ苦さと甘さのご褒美。", "¥583", "HOT", 0),
    "hot-sweet-mid": R("Caramel Latte", "キャラメルラテ", "キャラメルシロップとソース、ふわふわのフォームミルク。やさしい甘さ。", "¥583", "HOT", 0),
    "hot-sweet-soft": R("Popcorn Latte", "ポップコーンラテ", "香ばしいポップコーンシロップにエスプレッソ。ちょっと楽しい新感覚。", "¥583", "HOT", 0),
    "ice-clear-strong": R("Iced Coffee", "本日のアイスコーヒー", "その日のアイスコーヒー。すっきり、ごくごく飲みたいときに。", "¥528", "ICE", 1),
    "ice-clear-mid": R("Espresso Limone", "エスプレッソリモーネ", "しぼったレモンにソーダとシュガーシロップ、エスプレッソをダブルで。", "¥605", "ICE", 1),
    "ice-clear-soft": R("Lemonade Soda", "レモネードソーダ", "はちみつ、きび砂糖でレモンを煮詰めた自家製シロップをソーダで。", "¥550", "ICE", 1),
    "ice-milk-strong": R("Iced Cafe Latte", "アイスカフェラテ", "たっぷりのミルクに、ブラジル エルドラドのエスプレッソ。", "¥528", "ICE", 1),
    "ice-milk-mid": R("Iced Matcha Latte", "抹茶ラテ", "一杯ずつ点てた抹茶の上品な香りと、エスプレッソの重なり。", "¥583", "ICE", 1),
    "ice-milk-soft": R("Banana Juice", "バナナジュース", "完熟バナナとミルクのみ。砂糖不使用の自然な甘さ。", "¥495", "ICE", 1),
    "ice-sweet-strong": R("Espresso Float", "エスプレッソフロート", "氷とダブルショットに濃厚なバニラアイス。良質な苦味とほどよい酸味。", "¥627", "ICE", 1),
    "ice-sweet-mid": R("Cafe Latte Coffee Jelly", "カフェラテ コーヒーゼリー", "自家製コーヒーゼリーがたっぷり。ほんのり甘いデザートドリンク。", "¥627", "ICE", 1),
    "ice-sweet-soft": R("Frozen Chocolate Banana", "フローズン チョコバナナ", "完熟バナナ×チョコレート。人気のフローズンドリンク。", "¥704〜", "ICE", 1),
  };
  const Q = [
    { q: "今日はどっちの気分？", key: "t", opts: [["hot", "☕", "あたたかい", "ゆっくり座って"], ["ice", "❄", "つめたい", "すっきり冷たく"]] },
    { q: "どんな味わいにする？", key: "m", opts: [["clear", "◎", "すっきり", "コーヒーやフルーツの爽やかさ"], ["milk", "◐", "ミルクでまろやか", "やさしいラテ系"], ["sweet", "✦", "甘いご褒美", "シロップやチョコで"]] },
    { q: "コーヒーの強さは？", key: "s", opts: [["strong", "●", "しっかり", "コーヒーが主役"], ["mid", "◑", "ほどほど", "バランスよく"], ["soft", "○", "控えめ", "コーヒーは少しでいい"]] },
  ];
  const qcard = $("#qcard"); let ans = {}, step = 0;
  const renderQ = () => {
    const bar = `<div class="qsteps">${Q.map((_, i) => `<i class="${i <= step ? "on" : ""}"></i>`).join("")}</div>`;
    if (step < Q.length) {
      const s = Q[step];
      qcard.innerHTML = `${bar}<div class="qanim" style="display:grid;gap:22px"><p class="eyebrow">Question ${step + 1} / ${Q.length}</p><h3 class="qq">${s.q}</h3><div class="opts">${s.opts.map(([v, em, t, sm]) => `<button class="opt" type="button" data-v="${v}" data-cursor="選ぶ"><span class="em">${em}</span><span>${t}<small>${sm}</small></span></button>`).join("")}</div>${step ? '<button class="pill" type="button" id="qback" style="justify-self:start">← 戻る</button>' : ""}</div>`;
    } else {
      const r = results[`${ans.t}-${ans.m}-${ans.s}`];
      qcard.innerHTML = `${bar}<div class="result qanim"><span class="tag">YOUR CUP ・ ${r.temp}</span><h3>${r.name}</h3><div class="ja">${r.ja}</div><p>${r.desc}</p>${r.price ? `<div class="price">${r.price}</div>` : `<div style="color:var(--mute);font-size:13px">価格は店頭でご確認ください</div>`}<div class="acts"><button class="btn fill" type="button" id="qmenu" data-cursor="見る">メニューで見る</button><button class="btn" type="button" id="qagain">もう一度</button></div></div>`;
      $("#qmenu").addEventListener("click", () => { $("#menu").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); });
      $("#qagain").addEventListener("click", () => { ans = {}; step = 0; renderQ(); });
      beans();
    }
    bindCursor(qcard);
  };
  qcard.addEventListener("click", e => {
    const o = e.target.closest(".opt"); if (o) { ans[Q[step].key] = o.dataset.v; step++; renderQ(); return; }
    if (e.target.id === "qback") { step--; renderQ(); }
  });
  const beans = () => {
    if (reduce) return;
    const n = look === "pop" ? 36 : 22;
    for (let i = 0; i < n; i++) {
      const b = document.createElement("div"); b.className = "bean";
      b.innerHTML = `<svg viewBox="0 0 16 22"><ellipse cx="8" cy="11" rx="7" ry="10" fill="${i % 3 ? "#6b3a24" : "var(--accent)"}"/><path d="M8 2c-3 5 3 13 0 18" stroke="#2a1a12" stroke-width="1.4" fill="none"/></svg>`;
      b.style.left = "50%"; b.style.top = "40%"; qcard.appendChild(b);
      const a = Math.random() * Math.PI * 2, d = 120 + Math.random() * 220;
      b.animate([{ transform: "translate(0,0) rotate(0) scale(.4)", opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d + 160}px) rotate(${Math.random() * 720 - 360}deg) scale(1)`, opacity: 0 }], { duration: 1200 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.4,1)" }).onfinish = () => b.remove();
    }
  };

  /* ---------- menu stack (look-specific motion) ---------- */
  const stack = $("#stack"), thumbs = $("#thumbs"); let order = cmsMenus.map((_, i) => i);
  stack.innerHTML = cmsMenus.map((m, i) => `<div class="card" data-i="${i}" data-cursor="めくる"><img src="${sized(m.menu.url, 1000)}" alt="メニュー ${i + 1}">${i === 0 ? '<span class="hint">← スワイプでめくる / タップで拡大 →</span>' : ""}</div>`).join("");
  thumbs.innerHTML = cmsMenus.map((m, i) => `<button type="button" data-i="${i}" aria-label="メニュー ${i + 1}"><img src="${sized(m.menu.url, 200)}" alt=""></button>`).join("");
  const cards = $$("#stack .card");
  const STYLE = {
    roast: { at: p => [p ? `translateY(${p * -14}px) scale(${1 - p * .05}) rotate(${(p % 2 ? 1 : -1) * p * 2.5}deg)` : "none", p > 2 ? 0 : 1], out: d => [`translateX(${d * 130}%) rotate(${d * 18}deg)`, 0] },
    morning: { origin: "left center", at: p => [p ? `translate(${p * 7}px, ${p * 7}px)` : "none", p > 2 ? 0 : 1], out: () => [`rotateY(-115deg)`, 0] },
    pop: { at: p => [p ? `translateX(${p * 26}px) rotate(${p * 5}deg)` : "rotate(-2deg)", p > 3 ? 0 : 1], out: d => [`translate(${d * 150}%, -60px) rotate(${d * 35}deg)`, 1] },
    kissa: { at: p => [p ? "scale(.94)" : "none", p ? 0 : 1], out: () => ["scale(1.06)", 0] },
    mono: { at: p => [p ? `translate(${p * 12}px, ${p * -12}px)` : "none", p > 2 ? 0 : 1], out: d => [`translateX(${d * 112}%)`, 0] },
  };
  const layout = () => {
    const S = STYLE[look];
    order.forEach((idx, pos) => {
      const c = cards[idx], [t, o] = S.at(pos);
      c.style.transformOrigin = S.origin || "center"; c.style.zIndex = 10 - pos; c.style.transform = t; c.style.opacity = o; c.classList.toggle("back", pos > 0);
    });
    $("#mcount").textContent = cards.length ? `${order[0] + 1} / ${cards.length}` : "—";
    $$("#thumbs button").forEach((b, i) => b.classList.toggle("on", i === order[0]));
  };
  const goMenu = idx => { if (!cards.length) return; idx = Math.min(idx, cards.length - 1); while (order[0] !== idx) order.push(order.shift()); layout(); };
  const next = () => { order.push(order.shift()); layout(); }, prev = () => { order.unshift(order.pop()); layout(); };
  const fling = dir => {
    if (cards.length < 2) return;
    const c = cards[order[0]], [t, o] = STYLE[look].out(dir);
    c.style.transform = t; c.style.opacity = o;
    setTimeout(() => { dir > 0 ? prev() : next(); }, reduce ? 0 : 280);
  };
  $("#mnext").addEventListener("click", () => fling(-1)); $("#mprev").addEventListener("click", () => prev());
  thumbs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) goMenu(+b.dataset.i); });
  let drag = null;
  stack.addEventListener("pointerdown", e => { const c = e.target.closest(".card"); if (!c || +c.dataset.i !== order[0]) return; drag = { c, x: e.clientX, t: Date.now(), dx: 0 }; c.classList.add("drag"); c.setPointerCapture(e.pointerId); });
  stack.addEventListener("pointermove", e => { if (!drag) return; drag.dx = e.clientX - drag.x; drag.c.style.transform = look === "morning" ? `rotateY(${clamp(drag.dx / 4, -80, 0)}deg)` : `translateX(${drag.dx}px) rotate(${drag.dx / 18}deg)`; });
  const endDrag = () => {
    if (!drag) return; const { c, dx, t } = drag; drag = null; c.classList.remove("drag");
    if (Math.abs(dx) > 90) fling(dx > 0 ? 1 : -1);
    else { layout(); if (Math.abs(dx) < 6 && Date.now() - t < 400) openLb(order[0]); }
  };
  stack.addEventListener("pointerup", endDrag); stack.addEventListener("pointercancel", endDrag);

  /* ---------- lightbox ---------- */
  const lb = $("#lb"), lbimg = $("#lbimg"), view = $("#lbview"); let li = 0, z = { s: 1, x: 0, y: 0 };
  const applyZ = () => { lbimg.style.transform = `translate(${z.x}px, ${z.y}px) scale(${z.s})`; view.classList.toggle("zoomed", z.s > 1.01); };
  const resetZ = () => { z = { s: 1, x: 0, y: 0 }; applyZ(); };
  const showLb = i => { if (!cards.length) return; li = (i + cards.length) % cards.length; lbimg.src = cmsMenus[li].menu.url; $("#lbcount").textContent = `${li + 1} / ${cards.length}`; resetZ(); };
  const openLb = i => { showLb(i); lb.classList.add("open"); $("#lbclose").focus(); };
  const closeLb = () => { lb.classList.remove("open"); goMenu(li); };
  $("#lbclose").addEventListener("click", closeLb);
  $("#lbprev").addEventListener("click", () => showLb(li - 1)); $("#lbnext").addEventListener("click", () => showLb(li + 1));
  $("#lbzoom").addEventListener("click", () => { z.s > 1.01 ? resetZ() : (z.s = 2.4, applyZ()); });
  lbimg.addEventListener("dblclick", e => { if (z.s > 1.01) return resetZ(); const r = lbimg.getBoundingClientRect(); z.s = 2.4; z.x = (r.left + r.width / 2 - e.clientX) * 1.4; z.y = (r.top + r.height / 2 - e.clientY) * 1.4; applyZ(); });
  view.addEventListener("wheel", e => { e.preventDefault(); z.s = clamp(z.s * Math.exp(-e.deltaY * .0018), 1, 4); if (z.s === 1) { z.x = z.y = 0; } applyZ(); }, { passive: false });
  const pts = new Map(); let pinch = null, pan = null, swipe = null;
  view.addEventListener("pointerdown", e => {
    view.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), s: z.s }; pan = swipe = null; }
    else if (z.s > 1.01) pan = { x: e.clientX - z.x, y: e.clientY - z.y }; else swipe = { x: e.clientX };
  });
  view.addEventListener("pointermove", e => {
    if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pts.size === 2) { const [a, b] = [...pts.values()]; z.s = clamp(pinch.s * Math.hypot(a.x - b.x, a.y - b.y) / pinch.d, 1, 4); applyZ(); }
    else if (pan) { z.x = e.clientX - pan.x; z.y = e.clientY - pan.y; applyZ(); }
  });
  const up = e => {
    pts.delete(e.pointerId);
    if (swipe && pts.size === 0) { const dx = e.clientX - swipe.x; if (Math.abs(dx) > 60) showLb(li + (dx < 0 ? 1 : -1)); else if (e.target === view) closeLb(); }
    if (pts.size < 2) pinch = null; if (pts.size === 0) { pan = null; swipe = null; if (z.s <= 1.01) resetZ(); }
  };
  view.addEventListener("pointerup", up); view.addEventListener("pointercancel", up);

  /* ---------- timer ---------- */
  const STEPS = [
    { from: 0, to: 30, g0: 0, g1: 40, label: "蒸らし", note: "40gを注いで、粉全体を湿らせて30秒待つ" },
    { from: 30, to: 60, g0: 40, g1: 120, label: "1投目", note: "中心から「の」の字を描くように120gまで" },
    { from: 60, to: 90, g0: 120, g1: 180, label: "2投目", note: "液面を一定に保ちながら180gまで" },
    { from: 90, to: 120, g0: 180, g1: 240, label: "3投目", note: "合計240gまで注ぐ" },
    { from: 120, to: 165, g0: 240, g1: 240, label: "落ちきり", note: "落ちきったらドリッパーを外して完成" },
  ];
  const TOTAL = 165, CIRC = 276.46, mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  $("#tsteps").innerHTML = STEPS.map((s, i) => `<div data-i="${i}"><b>${mmss(s.from)}</b><span>${s.label}</span><span>${s.g1}g</span></div>`).join("");
  let tState = { run: false, el: 0, last: 0 }, raf = 0;
  const tDraw = () => {
    const t = Math.min(tState.el, TOTAL), i = STEPS.findIndex(s => t < s.to), si = i < 0 ? STEPS.length - 1 : i, s = STEPS[si];
    const g = t >= TOTAL ? 240 : s.g0 + (s.g1 - s.g0) * clamp((t - s.from) / (s.to - s.from), 0, 1);
    $("#tclock").textContent = mmss(t); $("#tgram").textContent = Math.round(g);
    $("#ringfg").style.strokeDashoffset = CIRC * (1 - t / TOTAL);
    $$("#tsteps div").forEach((d, k) => { d.classList.toggle("on", tState.el > 0 && k === si && t < TOTAL); d.classList.toggle("done", k < si || t >= TOTAL); });
    if (t >= TOTAL) { $("#tnow").textContent = "完成！"; $("#tnote").textContent = "おつかれさまでした。いい一杯を。"; }
    else if (tState.el > 0) { $("#tnow").textContent = s.label; $("#tnote").textContent = s.note; }
  };
  const tick = now => {
    if (!tState.run) return;
    tState.el += (now - tState.last) / 1000 * ($("#tfast").checked ? 10 : 1); tState.last = now; tDraw();
    if (tState.el >= TOTAL) { tState.run = false; $("#tstart").textContent = "スタート"; toast("ドリップ完了"); return; }
    raf = requestAnimationFrame(tick);
  };
  $("#tstart").addEventListener("click", () => {
    if (tState.el >= TOTAL) tState.el = 0;
    tState.run = !tState.run; $("#tstart").textContent = tState.run ? "一時停止" : "再開";
    if (tState.run) { tState.last = performance.now(); raf = requestAnimationFrame(tick); }
  });
  $("#treset").addEventListener("click", () => { tState = { run: false, el: 0, last: 0 }; cancelAnimationFrame(raf); $("#tstart").textContent = "スタート"; $("#tnow").textContent = "準備ができたらスタート"; $("#tnote").textContent = "ドリッパーにフィルターと粉15gをセット"; tDraw(); });
  tDraw();

  /* ---------- tilt ---------- */
  if (fine && !reduce) $$("[data-tilt]").forEach(t => {
    t.addEventListener("pointermove", e => { const r = t.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height; t.style.transform = `rotateY(${(px - .5) * 14}deg) rotateX(${(.5 - py) * 14}deg) scale(1.02)`; t.style.setProperty("--mx", px * 100 + "%"); t.style.setProperty("--my", py * 100 + "%"); });
    t.addEventListener("pointerleave", () => { t.style.transform = ""; });
  });

  /* ---------- cursors ---------- */
  const cur = $("#cur"), dot = $("#dot"), curLabel = cur.querySelector("span");
  let mx = -200, my = -200, cxp = -200, cyp = -200, ang = 0;
  function bindCursor(rootEl) {
    (rootEl || document).querySelectorAll("a, button, .card, [data-cursor]").forEach(el => {
      if (el._cb) return; el._cb = 1;
      el.addEventListener("pointerenter", () => { cur.classList.add("big"); curLabel.textContent = el.dataset.cursor || (el.tagName === "A" ? "開く" : "押す"); });
      el.addEventListener("pointerleave", () => cur.classList.remove("big"));
    });
  }
  const hero = $(".hero");
  if (fine && !reduce) {
    document.body.classList.add("cursor-on");
    addEventListener("pointermove", e => {
      mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`;
      if (look === "kissa") { root.style.setProperty("--x", mx + "px"); root.style.setProperty("--y", my + "px"); }
      if (look === "mono") { $("#xhx").style.transform = `translateY(${my}px)`; $("#xhy").style.transform = `translateX(${mx}px)`; const l = $("#xhl"); l.style.transform = `translate(${mx}px, ${my}px)`; l.textContent = `X ${String(mx).padStart(4, "0")}  Y ${String(Math.round(my + scrollY)).padStart(5, "0")}`; }
    });
    const loop = () => {
      const k = look === "morning" ? .08 : .18, vx = mx - cxp;
      cxp += (mx - cxp) * k; cyp += (my - cyp) * k; ang += (clamp(vx, -40, 40) - ang) * .2;
      cur.style.transform = `translate(${cxp}px, ${cyp}px)` + (look === "pop" && !cur.classList.contains("big") ? ` rotate(${ang}deg)` : "");
      requestAnimationFrame(loop);
    };
    loop(); bindCursor();
    $$(".btn, .round").forEach(b => {
      b.addEventListener("pointermove", e => { if (look === "pop" || look === "mono") return; const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`; });
      b.addEventListener("pointerleave", () => b.style.transform = "");
    });
    // pop: letters near the pointer swell
    hero.addEventListener("pointermove", e => {
      if (look !== "pop") return;
      $$("#h1 .ch").forEach(ch => { const r = ch.getBoundingClientRect(); const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)); const k = Math.max(0, 1 - d / 260); ch.style.transform = k ? `translateY(${-k * 14}px) scale(${1 + k * .28}) rotate(${(e.clientX - r.left - r.width / 2) / 40 * k}deg)` : ""; });
    });
    hero.addEventListener("pointerleave", () => $$("#h1 .ch").forEach(ch => ch.style.transform = ""));
  }

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", e => {
    if (lb.classList.contains("open")) { if (e.key === "Escape") closeLb(); if (e.key === "ArrowRight") showLb(li + 1); if (e.key === "ArrowLeft") showLb(li - 1); return; }
    if (e.key === "Escape") setDrawer(false);
    const r = stack.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) { if (e.key === "ArrowRight") fling(-1); if (e.key === "ArrowLeft") prev(); }
  });

  /* ---------- init ---------- */
  let seen = false; try { const key = "nac-open-" + look; seen = sessionStorage.getItem(key) === "1"; sessionStorage.setItem(key, "1"); } catch (_) {}
  splitHero(); renderQ(); sizeCv(); setupBrew(); layout(); onScroll();
  if (!seen && !reduce) playOpening(); else finishOpening();
})();
