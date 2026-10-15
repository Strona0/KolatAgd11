/* ===== Kolat Agd – skrypt strony ===== */

// ---------- Ustawienia sklepu (edytuj tutaj) ----------
const FREE_SHIPPING = 199;       // próg darmowej dostawy (zł)
const SHIPPING_COST = 14.99;     // koszt dostawy poniżej progu (zł)
const COUPONS = { KOLAT10: 0.10 }; // kody rabatowe: kod -> ułamek zniżki
const HERO_WORDS = ['zupy', 'steki', 'sosy', 'dania wok', 'obiady'];

// ---------- Dane produktów ----------
// art: typ rysunku (pot, set, dutch, pan, grill, wok, knife, knifeset, board, utensils, scale, kettle)
// color: kolor akcentu lub 'steel' dla stali
const ALL = ['gaz', 'ceramiczna', 'indukcja'];
const PRODUCTS = [
  { id: 1,  name: 'Garnek ze stali nierdzewnej 5 l', cat: 'garnki', art: 'pot', color: 'steel', price: 129.99, old: 159.99, badge: 'Promocja',
    desc: 'Gruby, trójwarstwowy spód. Pasuje na każdą płytę.', hobs: ALL, use: ['zupy', 'codzienne'],
    specs: { 'Materiał': 'Stal nierdzewna', 'Pojemność': '5 l', 'Pokrywka': 'Szklana / stalowa', 'Płyty': 'Gaz, ceramika, indukcja' } },
  { id: 2,  name: 'Garnek żeliwny do duszenia 4 l', cat: 'garnki', art: 'dutch', color: '#c8382c', price: 249.00, badge: 'Bestseller',
    desc: 'Równomiernie rozprowadza ciepło, idealny do gulaszy.', hobs: ALL, use: ['zupy', 'mieso'],
    specs: { 'Materiał': 'Żeliwo emaliowane', 'Pojemność': '4 l', 'Piekarnik': 'Tak', 'Płyty': 'Gaz, ceramika, indukcja' } },
  { id: 3,  name: 'Zestaw garnków 6 elementów', cat: 'garnki', art: 'set', color: 'steel', price: 399.00, old: 479.00, badge: 'Zestaw',
    desc: 'Komplet na początek: garnki, rondel i pokrywki.', hobs: ALL, use: ['zupy', 'codzienne'],
    specs: { 'Materiał': 'Stal nierdzewna', 'Elementy': '6 (3 garnki + 3 pokrywki)', 'Zmywarka': 'Tak', 'Płyty': 'Gaz, ceramika, indukcja' } },
  { id: 4,  name: 'Patelnia nieprzywierająca 28 cm', cat: 'patelnie', art: 'pan', color: '#34343b', price: 89.99,
    desc: 'Powłoka marmurkowa, smażysz niemal bez tłuszczu.', hobs: ALL, use: ['codzienne', 'mieso'],
    specs: { 'Średnica': '28 cm', 'Powłoka': 'Marmurkowa, nieprzywierająca', 'Rączka': 'Bakelitowa', 'Płyty': 'Gaz, ceramika, indukcja' } },
  { id: 5,  name: 'Patelnia grillowa żeliwna', cat: 'patelnie', art: 'grill', color: '#2f2f35', price: 169.00, badge: 'Nowość',
    desc: 'Idealne ślady grillowania na steku i warzywach.', hobs: ALL, use: ['mieso'],
    specs: { 'Materiał': 'Żeliwo', 'Średnica': '26 cm', 'Piekarnik': 'Tak', 'Płyty': 'Gaz, ceramika, indukcja' } },
  { id: 6,  name: 'Wok indukcyjny 32 cm', cat: 'patelnie', art: 'wok', color: '#3b3f46', price: 119.00,
    desc: 'Lekki, szybko się nagrzewa, świetny do dań azjatyckich.', hobs: ALL, use: ['azja', 'codzienne'],
    specs: { 'Materiał': 'Stal węglowa', 'Średnica': '32 cm', 'Dno': 'Płaskie', 'Płyty': 'Gaz, ceramika, indukcja' } },
  { id: 7,  name: 'Nóż szefa kuchni 20 cm', cat: 'noze', art: 'knife', color: 'steel', price: 99.00, old: 129.00, badge: 'Promocja',
    desc: 'Kuta stal, wygodna rączka, długo utrzymuje ostrość.', hobs: ALL, use: ['codzienne'],
    specs: { 'Ostrze': '20 cm, stal kuta', 'Rączka': 'Tworzywo, ergonomiczna', 'Mycie': 'Ręczne (zalecane)' } },
  { id: 8,  name: 'Zestaw noży z blokiem (5 szt.)', cat: 'noze', art: 'knifeset', color: 'steel', price: 289.00,
    desc: 'Pięć noży do codziennych zadań w eleganckim bloku.', hobs: ALL, use: ['codzienne'],
    specs: { 'Elementy': '5 noży + blok', 'Blok': 'Drewno', 'Mycie': 'Ręczne (zalecane)' } },
  { id: 9,  name: 'Deska do krojenia bambusowa', cat: 'akcesoria', art: 'board', color: '#b9824a', price: 49.99,
    desc: 'Twarda, ekologiczna, z rowkiem na sok.', hobs: ALL, use: ['codzienne'],
    specs: { 'Materiał': 'Bambus', 'Wymiary': '40 × 28 cm', 'Rowek': 'Na sok' } },
  { id: 10, name: 'Zestaw łyżek i szpatułek silikonowych', cat: 'akcesoria', art: 'utensils', color: '#e8574a', price: 59.00, badge: 'Nowość',
    desc: 'Bezpieczne dla powłok, odporne na wysoką temperaturę.', hobs: ALL, use: ['codzienne'],
    specs: { 'Materiał': 'Silikon + stal', 'Elementy': '3 przybory + pojemnik', 'Zmywarka': 'Tak' } },
  { id: 11, name: 'Waga kuchenna elektroniczna', cat: 'akcesoria', art: 'scale', color: '#f2a33a', price: 44.00,
    desc: 'Dokładność do 1 g, funkcja tarowania.', hobs: ALL, use: ['codzienne'],
    specs: { 'Dokładność': '1 g', 'Funkcje': 'Tarowanie', 'Zasilanie': 'Baterie' } },
  { id: 12, name: 'Czajnik ze stali z gwizdkiem 3 l', cat: 'akcesoria', art: 'kettle', color: 'steel', price: 79.00,
    desc: 'Klasyczny design, pasuje na wszystkie typy płyt.', hobs: ALL, use: ['codzienne'],
    specs: { 'Materiał': 'Stal nierdzewna', 'Pojemność': '3 l', 'Gwizdek': 'Tak', 'Płyty': 'Gaz, ceramika, indukcja' } }
];
const CAT_NAMES = { garnki: 'Garnki', patelnie: 'Patelnie', noze: 'Noże', akcesoria: 'Akcesoria' };
const HOB_NAMES = { gaz: 'gaz', ceramiczna: 'płyta ceramiczna', indukcja: 'indukcja' };

// ---------- Pomocnicze ----------
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = n => n.toFixed(2).replace('.', ',') + ' zł';
const norm = s => s.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const byId = id => PRODUCTS.find(p => p.id === id);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = window.matchMedia('(hover: hover)').matches;
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

// ---------- Rysunki produktów (SVG) ----------
let uid = 0;
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const f = c => Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt);
  return '#' + [n >> 16, (n >> 8) & 255, n & 255].map(f).map(x => x.toString(16).padStart(2, '0')).join('');
}
function tint(color) { return color === 'steel' ? '#8fa0ad' : color; }

function art(type, color = '#c8382c') {
  const id = 'a' + (++uid);
  const base = color === 'steel' ? '#aab4bc' : color;
  const l = shade(base, .3), d = shade(base, -.3);
  const defs = `<defs>
    <linearGradient id="${id}m" x1="0" x2="1"><stop offset="0" stop-color="${l}"/><stop offset=".55" stop-color="${base}"/><stop offset="1" stop-color="${d}"/></linearGradient>
    <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#f1f4f6"/><stop offset=".5" stop-color="#b7c0c7"/><stop offset="1" stop-color="#7f8a93"/></linearGradient>
    <linearGradient id="${id}w" x1="0" x2="1"><stop offset="0" stop-color="#e3b97f"/><stop offset="1" stop-color="#b9824a"/></linearGradient>
  </defs>`;
  const M = `url(#${id}m)`, S = `url(#${id}s)`, W = `url(#${id}w)`, K = '#26262a';
  const shadow = '<ellipse cx="100" cy="184" rx="64" ry="7" fill="#000" opacity=".16"/>';

  const potBody = m => `
    <rect x="20" y="94" width="26" height="9" rx="4.5" fill="${K}"/>
    <rect x="154" y="94" width="26" height="9" rx="4.5" fill="${K}"/>
    <path d="M42 84h116v78a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14z" fill="${m}"/>
    <rect x="52" y="96" width="7" height="66" rx="3.5" fill="#fff" opacity=".28"/>
    <path d="M44 76a56 22 0 0 1 112 0z" fill="${S}"/>
    <rect x="36" y="74" width="128" height="12" rx="6" fill="${S}"/>
    <rect x="96" y="44" width="8" height="10" fill="${K}"/>
    <circle cx="100" cy="42" r="8" fill="${K}"/>`;

  const panBase = (r1, r2) => `
    <rect x="128" y="91" width="68" height="18" rx="9" fill="${K}"/>
    <circle cx="140" cy="100" r="2.6" fill="${S}"/><circle cx="154" cy="100" r="2.6" fill="${S}"/>
    <circle cx="78" cy="100" r="${r1}" fill="${K}"/>
    <circle cx="78" cy="100" r="${r2}" fill="${M}"/>`;

  const T = {
    pot: () => shadow + potBody(M),
    set: () => shadow + `<g transform="translate(6 40) scale(.72)">${potBody(M)}</g><g transform="translate(92 78) scale(.5)">${potBody(S)}</g>`,
    dutch: () => shadow + `
      <circle cx="21" cy="112" r="9" fill="none" stroke="${K}" stroke-width="6"/>
      <circle cx="179" cy="112" r="9" fill="none" stroke="${K}" stroke-width="6"/>
      <path d="M26 98h148v10c0 38-30 68-74 68S26 146 26 108z" fill="${M}"/>
      <path d="M30 98a70 30 0 0 1 140 0z" fill="${M}"/>
      <path d="M30 98a70 30 0 0 1 140 0z" fill="#000" opacity=".12"/>
      <rect x="24" y="94" width="152" height="9" rx="4.5" fill="${M}"/>
      <rect x="94" y="54" width="12" height="10" fill="${K}"/><circle cx="100" cy="52" r="9" fill="${K}"/>
      <path d="M44 112c0 20 8 40 26 52" stroke="#fff" opacity=".3" stroke-width="6" fill="none" stroke-linecap="round"/>`,
    pan: () => `<g transform="rotate(-16 100 100)">${panBase(64, 56)}
      <circle cx="78" cy="100" r="44" fill="#000" opacity=".16"/>
      <path d="M38 78a46 46 0 0 1 34-26" stroke="#fff" opacity=".35" stroke-width="5" fill="none" stroke-linecap="round"/></g>`,
    grill: () => `<g transform="rotate(-16 100 100)">${panBase(64, 56)}
      <clipPath id="${id}c"><circle cx="78" cy="100" r="50"/></clipPath>
      <g clip-path="url(#${id}c)" stroke="${d}" stroke-width="8" opacity=".9"><path d="M20 62H140M20 78H140M20 94H140M20 110H140M20 126H140M20 142H140"/></g>
      <path d="M38 78a46 46 0 0 1 34-26" stroke="#fff" opacity=".25" stroke-width="5" fill="none" stroke-linecap="round"/></g>`,
    wok: () => `<g transform="rotate(-14 100 100)">
      <rect x="2" y="94" width="22" height="12" rx="6" fill="${K}"/>
      <rect x="140" y="92" width="58" height="16" rx="8" fill="${K}"/>
      <circle cx="82" cy="100" r="68" fill="${S}"/>
      <circle cx="82" cy="100" r="60" fill="${M}"/>
      <circle cx="82" cy="100" r="38" fill="#000" opacity=".14"/>
      <circle cx="82" cy="100" r="18" fill="#000" opacity=".18"/>
      <path d="M34 74a56 56 0 0 1 38-26" stroke="#fff" opacity=".4" stroke-width="5" fill="none" stroke-linecap="round"/></g>`,
    knife: () => `<g transform="rotate(-30 100 100)">
      <path d="M64 90H164Q186 98 190 114Q124 120 64 114Z" fill="${S}"/>
      <path d="M64 90H164Q176 93 183 99H64Z" fill="#fff" opacity=".45"/>
      <rect x="58" y="88" width="8" height="28" rx="3" fill="#8a949c"/>
      <rect x="12" y="88" width="52" height="26" rx="13" fill="${K}"/>
      <circle cx="28" cy="101" r="3" fill="${S}"/><circle cx="46" cy="101" r="3" fill="${S}"/></g>`,
    knifeset: () => shadow + `
      <rect x="64" y="66" width="14" height="46" rx="5" fill="${K}"/>
      <rect x="92" y="56" width="14" height="50" rx="5" fill="${K}"/>
      <rect x="120" y="46" width="14" height="54" rx="5" fill="${K}"/>
      <path d="M50 112L150 90V172a8 8 0 0 1-8 8H58a8 8 0 0 1-8-8z" fill="${W}"/>
      <path d="M50 112L150 90V104L50 126z" fill="#fff" opacity=".18"/>
      <path d="M60 140h80M60 156h80" stroke="#8a5a2b" opacity=".3" stroke-width="3" stroke-linecap="round"/>`,
    board: () => `<g transform="rotate(-10 100 100)">
      <rect x="30" y="50" width="140" height="100" rx="18" fill="${W}"/>
      <rect x="30" y="50" width="140" height="100" rx="18" fill="none" stroke="#8a5a2b" stroke-width="3" opacity=".5"/>
      <circle cx="150" cy="66" r="6" fill="#8a5a2b" opacity=".7"/>
      <rect x="46" y="124" width="84" height="8" rx="4" fill="#8a5a2b" opacity=".35"/>
      <path d="M44 74c30-8 60 6 90-2M44 92c34 6 62-8 96 0M44 108c28-6 58 6 88 0" stroke="#8a5a2b" opacity=".3" stroke-width="3" fill="none" stroke-linecap="round"/></g>`,
    utensils: () => shadow + `
      <g transform="rotate(-10 74 120)"><rect x="70" y="58" width="9" height="90" rx="4.5" fill="${K}"/><ellipse cx="74.5" cy="46" rx="15" ry="22" fill="${M}"/></g>
      <g><rect x="96" y="56" width="9" height="92" rx="4.5" fill="${K}"/><rect x="83" y="22" width="34" height="42" rx="7" fill="${M}"/><path d="M92 26v34M100 26v34M108 26v34" stroke="#000" opacity=".15" stroke-width="3"/></g>
      <g transform="rotate(10 126 120)"><rect x="122" y="58" width="9" height="90" rx="4.5" fill="${K}"/><circle cx="126.5" cy="42" r="19" fill="${M}"/></g>
      <path d="M54 118H146V166a14 14 0 0 1-14 14H68a14 14 0 0 1-14-14z" fill="${S}"/>
      <rect x="50" y="114" width="100" height="10" rx="5" fill="${S}"/>
      <rect x="62" y="130" width="7" height="40" rx="3.5" fill="#fff" opacity=".35"/>`,
    scale: () => shadow + `
      <rect x="34" y="104" width="132" height="66" rx="16" fill="${S}"/>
      <rect x="40" y="82" width="120" height="20" rx="10" fill="${M}"/>
      <rect x="40" y="82" width="120" height="8" rx="4" fill="#fff" opacity=".25"/>
      <rect x="72" y="120" width="56" height="26" rx="6" fill="#13261f"/>
      <text x="100" y="139" text-anchor="middle" font-size="16" font-weight="700" fill="#7dffb0" font-family="monospace">250g</text>
      <circle cx="52" cy="158" r="3.5" fill="#7f8a93"/><circle cx="148" cy="158" r="3.5" fill="#7f8a93"/>`,
    kettle: () => shadow + `
      <path d="M56 112Q18 100 38 62Q58 52 80 66" fill="none" stroke="${K}" stroke-width="10" stroke-linecap="round"/>
      <path d="M144 134Q172 108 180 78L170 74Q164 102 142 114Z" fill="${S}"/>
      <path d="M48 174C42 124 62 94 100 94S158 124 152 174Z" fill="${M}"/>
      <path d="M62 150c-2-24 4-40 18-50" stroke="#fff" opacity=".35" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="100" cy="94" rx="32" ry="9" fill="${S}"/>
      <rect x="95" y="76" width="10" height="12" fill="${K}"/><circle cx="100" cy="74" r="8" fill="${K}"/>
      <rect x="44" y="168" width="108" height="10" rx="5" fill="${K}" opacity=".85"/>`
  };
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${defs}${(T[type] || T.pot)()}</svg>`;
}

// Wstaw rysunki do elementów z data-art
function paintArt(root = document) {
  $$('[data-art]', root).forEach(el => {
    if (!el.dataset.painted) { el.innerHTML = art(el.dataset.art, el.dataset.color || '#c8382c'); el.dataset.painted = '1'; }
  });
}
paintArt();
$('#loaderArt').innerHTML = art('pot', '#c8382c');

// ---------- Ładowanie ----------
window.addEventListener('load', () => setTimeout(() => $('#loader').classList.add('is-hidden'), 500));

// ---------- Podział nagłówka na słowa ----------
function splitWords(el) {
  let i = 0;
  (function walk(node) {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          const w = document.createElement('span'); w.className = 'w';
          const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--i', i++);
          w.appendChild(s); frag.appendChild(w);
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1 && !ch.classList.contains('rot')) walk(ch);
      else if (ch.classList && ch.classList.contains('rot')) i++;
    });
  })(el);
}
$$('[data-split]').forEach(splitWords);

// Rotujące słowo w nagłówku
(function rotator() {
  const el = $('#rotWord'); let i = 0;
  if (!el || reduceMotion) return;
  setInterval(() => {
    el.classList.add('out');
    setTimeout(() => {
      i = (i + 1) % HERO_WORDS.length;
      el.textContent = HERO_WORDS[i];
      el.classList.remove('out'); el.classList.add('in');
      void el.offsetWidth; el.classList.remove('in');
    }, 350);
  }, 2600);
})();

// ---------- Nagłówek, pasek postępu ----------
const header = $('#header'), progress = $('#progress');
function onScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
}
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// ---------- Menu mobilne ----------
const burger = $('#burger'), nav = $('#nav');
function toggleNav(open) {
  burger.classList.toggle('is-open', open); nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
}
burger.addEventListener('click', () => toggleNav(!nav.classList.contains('is-open')));
$$('#nav a').forEach(a => a.addEventListener('click', () => toggleNav(false)));

// ---------- Motyw ----------
const themeBtn = $('#themeBtn');
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
  save('kolat-theme', t);
}
setTheme(load('kolat-theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

// ---------- Animacje przy przewijaniu ----------
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObs.unobserve(e.target); } });
}, { threshold: .12 });
$$('.reveal').forEach((el, i) => { el.style.setProperty('--d', (i % 4) * .08 + 's'); revealObs.observe(el); });

// ---------- Liczniki ----------
$('#statProducts').dataset.count = PRODUCTS.length;
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, t0 = performance.now(), dur = 1600;
    (function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
    countObs.unobserve(el);
  });
}, { threshold: .6 });
$$('[data-count]').forEach(el => countObs.observe(el));

// ---------- Hero: paralaksa, poświata, bąbelki ----------
const hero = $('#hero');
if (canHover && !reduceMotion) {
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    hero.style.setProperty('--mx', (x + .5) * 100 + '%');
    hero.style.setProperty('--my', (y + .5) * 100 + '%');
    $$('.hero__item').forEach(it => {
      const d = +it.dataset.depth;
      it.style.setProperty('--px', x * d + 'px'); it.style.setProperty('--py', y * d + 'px');
    });
  });
  hero.addEventListener('mouseleave', () => $$('.hero__item').forEach(it => { it.style.setProperty('--px', '0px'); it.style.setProperty('--py', '0px'); }));
}

(function bubbles() {
  if (reduceMotion) return;
  const cv = $('#bubbles'), ctx = cv.getContext('2d');
  let W, H, list = [], running = true;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const make = (initial) => ({ x: Math.random() * W, y: initial ? Math.random() * H : H + 20, r: 4 + Math.random() * 16, v: .25 + Math.random() * .6, a: .12 + Math.random() * .25, p: Math.random() * 6 });
  resize(); list = Array.from({ length: 34 }, () => make(true));
  addEventListener('resize', resize);
  new IntersectionObserver(en => { running = en[0].isIntersecting; if (running) frame(); }).observe(cv);
  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    list.forEach((b, i) => {
      b.y -= b.v; b.p += .02; b.x += Math.sin(b.p) * .4;
      if (b.y < -30) list[i] = make(false);
      const g = ctx.createRadialGradient(b.x - b.r * .3, b.y - b.r * .3, 1, b.x, b.y, b.r);
      g.addColorStop(0, `rgba(255,255,255,${b.a + .25})`); g.addColorStop(1, `rgba(242,163,58,${b.a * .5})`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 7); ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  frame();
})();

// Magnetyczne przyciski
if (canHover && !reduceMotion) {
  $$('.magnetic').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .28 - 2}px)`;
    });
    b.addEventListener('mouseleave', () => b.style.transform = '');
  });
}

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('is-show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('is-show'), 2400);
}

// ---------- Stan: ulubione, koszyk, kupon ----------
let favs = load('kolat-favs', []);
let cart = load('kolat-cart', []).filter(i => byId(i.id));
let coupon = load('kolat-coupon', null);
const state = { filter: 'all', sort: 'default' };

// ---------- Produkty ----------
const grid = $('#productGrid');

function productCard(p, i) {
  const isFav = favs.includes(p.id);
  return `
  <article class="card" data-id="${p.id}" style="--d:${i * .06}s; --c:${tint(p.color)}">
    ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
    <button class="heart ${isFav ? 'is-on' : ''}" data-fav="${p.id}" aria-label="Ulubione" aria-pressed="${isFav}">${isFav ? '♥' : '♡'}</button>
    <div class="card__img" data-view="${p.id}" role="button" tabindex="0" aria-label="Podgląd: ${p.name}">
      <div class="card__art">${art(p.art, p.color)}</div>
      <span class="quick">Szybki podgląd</span>
    </div>
    <div class="card__body">
      <span class="card__cat">${CAT_NAMES[p.cat]}</span>
      <h3 class="card__title">${p.name}</h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__foot">
        <div class="price">${p.old ? `<del>${money(p.old)}</del>` : ''}${money(p.price)}</div>
        <button class="add-btn" data-add="${p.id}">Do koszyka</button>
      </div>
    </div>
  </article>`;
}

function visibleProducts() {
  let list = state.filter === 'all' ? [...PRODUCTS]
    : state.filter === 'fav' ? PRODUCTS.filter(p => favs.includes(p.id))
    : PRODUCTS.filter(p => p.cat === state.filter);
  if (state.sort === 'asc') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'desc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'pl'));
  return list;
}

function renderProducts() {
  const list = visibleProducts();
  grid.innerHTML = list.map(productCard).join('');
  $('#gridEmpty').hidden = list.length > 0;
  $('#favCount').textContent = favs.length;
  initTilt();
}

function applyFilter(filter) {
  state.filter = filter;
  $$('.filter').forEach(b => b.classList.toggle('is-active', b.dataset.filter === filter));
  const cards = $$('.card', grid);
  cards.forEach(c => c.classList.add('is-hiding'));
  setTimeout(renderProducts, cards.length ? 280 : 0);
}

$('#filters').addEventListener('click', e => { const b = e.target.closest('.filter'); if (b) applyFilter(b.dataset.filter); });
$('#sort').addEventListener('change', e => { state.sort = e.target.value; applyFilter(state.filter); });
$$('.cat').forEach(c => c.addEventListener('click', () => { applyFilter(c.dataset.filter); $('#produkty').scrollIntoView({ behavior: 'smooth' }); }));

function initTilt() {
  if (!canHover || reduceMotion) return;
  $$('.card', grid).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}

function toggleFav(id, btn) {
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
  save('kolat-favs', favs);
  $('#favCount').textContent = favs.length;
  $$(`[data-fav="${id}"]`).forEach(b => {
    const on = favs.includes(id);
    b.classList.remove('is-on'); void b.offsetWidth; b.classList.toggle('is-on', on);
    b.textContent = on ? '♥' : '♡'; b.setAttribute('aria-pressed', on);
  });
  toast(favs.includes(id) ? 'Dodano do ulubionych ♥' : 'Usunięto z ulubionych');
  if (state.filter === 'fav') applyFilter('fav');
}

grid.addEventListener('click', e => {
  const add = e.target.closest('[data-add]'), fav = e.target.closest('[data-fav]'), view = e.target.closest('[data-view]');
  if (add) addToCart(+add.dataset.add, 1, add);
  else if (fav) toggleFav(+fav.dataset.fav);
  else if (view) openProduct(+view.dataset.view);
});
grid.addEventListener('keydown', e => {
  const view = e.target.closest('[data-view]');
  if (view && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openProduct(+view.dataset.view); }
});

// ---------- Modal ----------
const modal = $('#modal'), modalBody = $('#modalBody');
let lastFocus = null;
function openModal(html) {
  lastFocus = document.activeElement;
  modalBody.innerHTML = html; modal.classList.add('is-open'); document.body.classList.add('no-scroll');
  setTimeout(() => $('#modalClose').focus(), 50);
}
function closeModal() {
  modal.classList.remove('is-open');
  if (!drawer.classList.contains('is-open') && !search.classList.contains('is-open')) document.body.classList.remove('no-scroll');
  if (lastFocus) lastFocus.focus();
}
$('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

function openProduct(id) {
  const p = byId(id);
  openModal(`
    <div class="pview" style="--c:${tint(p.color)}">
      <div class="pview__art"><div>${art(p.art, p.color)}</div></div>
      <div class="pview__info">
        <span class="card__cat">${CAT_NAMES[p.cat]}</span>
        <h2>${p.name}</h2>
        <div class="pview__price">${p.old ? `<del>${money(p.old)}</del>` : ''}${money(p.price)}</div>
        <p style="color:var(--muted)">${p.desc}</p>
        <dl class="specs">${Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        <div class="pview__buy">
          <div class="qty"><button id="qMinus" aria-label="Mniej">−</button><span id="qVal">1</span><button id="qPlus" aria-label="Więcej">+</button></div>
          <button class="btn btn--primary" id="qAdd">Dodaj do koszyka</button>
        </div>
      </div>
    </div>`);
  let q = 1;
  $('#qMinus').onclick = () => { q = Math.max(1, q - 1); $('#qVal').textContent = q; };
  $('#qPlus').onclick = () => { q = Math.min(20, q + 1); $('#qVal').textContent = q; };
  $('#qAdd').onclick = e => { addToCart(id, q, e.currentTarget); closeModal(); };
}

// ---------- Wyszukiwarka ----------
const search = $('#search'), sInput = $('#searchInput'), sResults = $('#searchResults');
function openSearch() { search.classList.add('is-open'); document.body.classList.add('no-scroll'); setTimeout(() => sInput.focus(), 60); runSearch(); }
function closeSearch() { search.classList.remove('is-open'); if (!drawer.classList.contains('is-open') && !modal.classList.contains('is-open')) document.body.classList.remove('no-scroll'); }
function runSearch() {
  const q = norm(sInput.value.trim());
  const list = (q ? PRODUCTS.filter(p => norm(p.name + ' ' + p.desc + ' ' + CAT_NAMES[p.cat]).includes(q)) : PRODUCTS.slice(0, 5)).slice(0, 6);
  sResults.innerHTML = list.length ? list.map(p => `
    <li><button data-open="${p.id}">
      <div class="thumb">${art(p.art, p.color)}</div>
      <div><strong>${p.name}</strong><small>${CAT_NAMES[p.cat]}</small></div>
      <b>${money(p.price)}</b>
    </button></li>`).join('') : `<li class="search__none">Brak wyników dla „${sInput.value}”.</li>`;
}
$('#searchBtn').addEventListener('click', openSearch);
$('#searchClose').addEventListener('click', closeSearch);
search.addEventListener('click', e => { if (e.target === search) closeSearch(); });
sInput.addEventListener('input', runSearch);
$$('.search__chips button').forEach(b => b.addEventListener('click', () => { sInput.value = b.dataset.q; runSearch(); sInput.focus(); }));
sResults.addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) { closeSearch(); openProduct(+b.dataset.open); } });

// ---------- Koszyk ----------
const drawer = $('#drawer'), overlay = $('#overlay'), cartBtn = $('#cartBtn');
function openCart() { drawer.classList.add('is-open'); overlay.classList.add('is-open'); document.body.classList.add('no-scroll'); }
function closeCart() { drawer.classList.remove('is-open'); overlay.classList.remove('is-open'); if (!modal.classList.contains('is-open')) document.body.classList.remove('no-scroll'); }
cartBtn.addEventListener('click', openCart);
$('#closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

function totals() {
  const sub = cart.reduce((s, it) => s + byId(it.id).price * it.qty, 0);
  const disc = coupon && COUPONS[coupon] ? sub * COUPONS[coupon] : 0;
  const after = sub - disc;
  const ship = !cart.length || after >= FREE_SHIPPING ? 0 : SHIPPING_COST;
  return { sub, disc, after, ship, total: after + ship, count: cart.reduce((s, i) => s + i.qty, 0) };
}

function renderCart() {
  const list = $('#cartList');
  list.innerHTML = cart.length ? cart.map(it => {
    const p = byId(it.id);
    return `<li class="item" data-id="${p.id}">
      <div class="thumb">${art(p.art, p.color)}</div>
      <div>
        <div class="item__name">${p.name}</div>
        <div class="item__price">${money(p.price)}</div>
        <div class="qty"><button data-dec="${p.id}" aria-label="Mniej">−</button><span>${it.qty}</span><button data-inc="${p.id}" aria-label="Więcej">+</button></div>
      </div>
      <button class="item__remove" data-remove="${p.id}" aria-label="Usuń">✕</button>
    </li>`;
  }).join('') : `<li class="drawer__empty"><div>🛒</div>Koszyk jest pusty.<br>Dodaj coś do swojej kuchni!</li>`;

  const t = totals();
  $('#cartCount').textContent = t.count;
  $('#sumSub').textContent = money(t.sub);
  $('#sumDiscRow').hidden = !t.disc;
  $('#sumDisc').textContent = '−' + money(t.disc);
  const shipEl = $('#sumShip');
  shipEl.textContent = !cart.length ? '–' : t.ship ? money(t.ship) : 'Gratis'; shipEl.classList.toggle('green', cart.length && !t.ship);
  $('#cartTotal').textContent = money(t.total);

  const left = FREE_SHIPPING - t.after;
  $('#shipText').innerHTML = !cart.length ? `Darmowa dostawa od <b>${money(FREE_SHIPPING)}</b>`
    : left > 0 ? `Brakuje <b>${money(left)}</b> do darmowej dostawy`
    : '🎉 Masz <b>darmową dostawę</b>!';
  $('#shipFill').style.width = Math.min(100, cart.length ? t.after / FREE_SHIPPING * 100 : 0) + '%';
  $('#couponMsg').textContent = coupon ? `Zastosowano kod ${coupon} (−${COUPONS[coupon] * 100}%)` : '';
  save('kolat-cart', cart);
}

function addToCart(id, qty = 1, fromEl) {
  const it = cart.find(i => i.id === id);
  it ? it.qty += qty : cart.push({ id, qty });
  renderCart();
  if (fromEl && !reduceMotion) flyToCart(fromEl, byId(id));
  cartBtn.classList.remove('bump'); void cartBtn.offsetWidth; cartBtn.classList.add('bump');
  toast('Dodano do koszyka ✓');
}

function flyToCart(fromEl, p) {
  const a = fromEl.getBoundingClientRect(), b = cartBtn.getBoundingClientRect();
  const fly = document.createElement('div');
  fly.className = 'fly'; fly.innerHTML = art(p.art, p.color);
  fly.style.left = a.left + a.width / 2 - 28 + 'px'; fly.style.top = a.top + a.height / 2 - 28 + 'px';
  document.body.appendChild(fly);
  requestAnimationFrame(() => {
    fly.style.transform = `translate(${b.left + b.width / 2 - a.left - a.width / 2}px, ${b.top + b.height / 2 - a.top - a.height / 2}px) scale(.25) rotate(360deg)`;
    fly.style.opacity = '.3';
  });
  setTimeout(() => fly.remove(), 900);
}

$('#cartList').addEventListener('click', e => {
  const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]'), rem = e.target.closest('[data-remove]');
  if (inc) { cart.find(i => i.id === +inc.dataset.inc).qty++; renderCart(); }
  if (dec) { const it = cart.find(i => i.id === +dec.dataset.dec); it.qty--; if (it.qty <= 0) cart = cart.filter(i => i !== it); renderCart(); }
  if (rem) {
    const li = rem.closest('.item'), id = +rem.dataset.remove;
    li.classList.add('is-removing');
    setTimeout(() => { cart = cart.filter(i => i.id !== id); renderCart(); }, 280);
  }
});

$('#couponForm').addEventListener('submit', e => {
  e.preventDefault();
  const code = $('#couponInput').value.trim().toUpperCase();
  if (!code) return;
  if (COUPONS[code]) { coupon = code; save('kolat-coupon', coupon); $('#couponInput').value = ''; renderCart(); toast('Kod rabatowy zastosowany 🎉'); }
  else { $('#couponMsg').textContent = 'Nieprawidłowy kod rabatowy.'; const i = $('#couponInput'); i.classList.remove('is-error'); void i.offsetWidth; i.classList.add('is-error'); }
});

// ---------- Kasa (demonstracyjna) ----------
$('#checkoutBtn').addEventListener('click', () => {
  if (!cart.length) return toast('Koszyk jest pusty');
  closeCart();
  const t = totals();
  openModal(`
    <form class="checkout" id="checkoutForm" novalidate>
      <h2>Dane do zamówienia</h2>
      <p>Do zapłaty: <strong>${money(t.total)}</strong> (${t.count} szt.)</p>
      <div class="form-grid">
        <div class="field"><label for="cName">Imię i nazwisko</label><input id="cName" required autocomplete="name"></div>
        <div class="field"><label for="cMail">E-mail</label><input id="cMail" type="email" required autocomplete="email"></div>
        <div class="field full"><label for="cAddr">Ulica i numer</label><input id="cAddr" required autocomplete="street-address"></div>
        <div class="field"><label for="cZip">Kod pocztowy</label><input id="cZip" placeholder="00-000" required autocomplete="postal-code"></div>
        <div class="field"><label for="cCity">Miasto</label><input id="cCity" required autocomplete="address-level2"></div>
      </div>
      <button class="btn btn--primary btn--block" type="submit">Złóż zamówienie</button>
      <p class="demo-note">To strona demonstracyjna – płatności i zamówienia nie są jeszcze podłączone.</p>
    </form>`);
  $('#checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    const rules = { cName: v => v.trim().length > 2, cMail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), cAddr: v => v.trim().length > 3, cZip: v => /^\d{2}-\d{3}$/.test(v.trim()), cCity: v => v.trim().length > 1 };
    let ok = true;
    Object.entries(rules).forEach(([id, test]) => {
      const el = document.getElementById(id);
      if (!test(el.value)) { ok = false; el.classList.remove('is-error'); void el.offsetWidth; el.classList.add('is-error'); }
    });
    if (!ok) return toast('Uzupełnij poprawnie zaznaczone pola');
    modalBody.innerHTML = `
      <div class="success">
        <svg class="success__check" viewBox="0 0 100 100"><circle cx="50" cy="50" r="41"/><path d="M30 52l14 14 27-30"/></svg>
        <h2>Dziękujemy za zamówienie!</h2>
        <p>To tylko demonstracja, więc nic nie zostało wysłane – ale tak mogłoby wyglądać potwierdzenie.</p>
        <button class="btn btn--primary" id="okBtn">Wróć do sklepu</button>
      </div>`;
    $('#okBtn').onclick = closeModal;
    cart = []; coupon = null; save('kolat-coupon', null); renderCart(); confetti();
  });
});

function confetti() {
  if (reduceMotion) return;
  const colors = ['#c8382c', '#f2a33a', '#e8574a', '#2e9c5b', '#4a8fe8', '#ffd166'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('i'); c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw'; c.style.background = colors[i % colors.length];
    c.style.setProperty('--x', (Math.random() * 200 - 100) + 'px'); c.style.setProperty('--r', (Math.random() * 900 - 450) + 'deg');
    c.style.setProperty('--t', 2 + Math.random() * 1.8 + 's'); c.style.animationDelay = Math.random() * .5 + 's';
    document.body.appendChild(c); setTimeout(() => c.remove(), 4600);
  }
}

// ---------- Kreator doboru ----------
const pick = { hob: null, use: null };
const finderResult = $('#finderResult');
$$('.chips').forEach(group => group.addEventListener('click', e => {
  const chip = e.target.closest('.chip'); if (!chip) return;
  $$('.chip', group).forEach(c => c.classList.toggle('is-active', c === chip));
  pick[group.dataset.group] = chip.dataset.v;
  renderFinder();
}));

function renderFinder() {
  if (!pick.hob || !pick.use) { finderResult.innerHTML = `<p class="finder__hint">Wybierz ${!pick.hob ? 'płytę' : 'rodzaj dań'}, aby zobaczyć propozycje.</p>`; return; }
  const list = PRODUCTS.filter(p => (p.cat === 'garnki' || p.cat === 'patelnie') && p.hobs.includes(pick.hob) && p.use.includes(pick.use)).slice(0, 3);
  finderResult.innerHTML = list.length
    ? `<p class="finder__label">Polecamy na ${HOB_NAMES[pick.hob]}:</p><div class="finder__list">${list.map((p, i) => `
      <div class="rec" style="--d:${i * .1}s">
        <div class="thumb" style="width:84px;height:84px">${art(p.art, p.color)}</div>
        <div><h4>${p.name}</h4><small>${money(p.price)} · ${CAT_NAMES[p.cat]}</small></div>
        <div class="rec__btns"><button data-view="${p.id}">Podgląd</button><button data-add="${p.id}">Do koszyka</button></div>
      </div>`).join('')}</div>`
    : `<p class="finder__hint">Nie mamy jeszcze dokładnie takiego produktu. Zajrzyj do pełnej oferty poniżej.</p>`;
}
finderResult.addEventListener('click', e => {
  const add = e.target.closest('[data-add]'), view = e.target.closest('[data-view]');
  if (add) addToCart(+add.dataset.add, 1, add);
  if (view) openProduct(+view.dataset.view);
});

// ---------- FAQ ----------
$$('.faq__q').forEach(q => q.addEventListener('click', () => {
  const open = q.getAttribute('aria-expanded') === 'true';
  $$('.faq__q').forEach(o => o.setAttribute('aria-expanded', 'false'));
  q.setAttribute('aria-expanded', String(!open));
}));

// ---------- Newsletter ----------
$('#newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = $('#email'), msg = $('#formMsg');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
    input.classList.remove('is-error'); void input.offsetWidth; input.classList.add('is-error');
    msg.textContent = 'Wpisz poprawny adres e-mail.'; return;
  }
  msg.innerHTML = 'Dziękujemy! Twój kod rabatowy: <strong>KOLAT10</strong> 🎉';
  input.value = ''; confetti();
});

// ---------- Skróty klawiszowe ----------
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSearch(); closeModal(); closeCart(); toggleNav(false); }
  if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
});

// ---------- Start ----------
$('#year').textContent = new Date().getFullYear();
renderProducts();
renderCart();