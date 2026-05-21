/* sections.jsx — shared sections used by BOTH homepage variants.
   Each section accepts a `P` palette object and a `style` flag ("heritage" | "minimal")
   so it can adapt typography/borders without forking the markup. */

// ─────────────────────────────────────────────────────────────────────────────
// HERO CAROUSEL — multi-collection, autoplay, dots, arrows, slide counter.
// Each slide is a COLLECTION (not a product) — CTA goes to /collections/{slug}.
// ─────────────────────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    slug: 'vivaha',
    eyebrow: 'The Vivaha Edit · Bridal 2026',
    line1: 'Six weeks.',
    line2: 'Eleven hands.',
    line3: 'One bridal lehenga.',
    body: 'Hand-embroidered mukaish, gota patti and dabka on pure chiffon — made to your measure at our atelier on MI Road.',
    cta: 'Shop the Bridal Edit',
    sub: 'Book a bridal stylist · Free consultation',
    tone: 'burgundy',
    badge: '52 pieces',
    label: 'Bridal lehenga · mukaish work',
    src: () => IMG.hero.bridal,
    objectPosition: 'center 20%',
  },
  {
    slug: 'leheriya',
    eyebrow: 'Summer · Gota Patti 2026',
    line1: 'The colours',
    line2: 'of Jaipur,',
    line3: 'embroidered by hand.',
    body: 'Resist-dyed Gota Patti sarees on featherlight chiffon and pure Kota silk. New colours every Monday through July.',
    cta: 'Shop Sarees · 412 pieces',
    sub: 'New colours released Mon · 9 left in queue',
    tone: 'warm',
    badge: 'NEW SEASON',
    label: 'Yellow Gota Patti chiffon saree',
    src: () => IMG.hero.leheriya,
    objectPosition: 'center 15%',
  },
  {
    slug: 'everyday',
    eyebrow: 'Everyday Chanderi',
    line1: 'Heritage',
    line2: 'you can wear',
    line3: 'to work.',
    body: 'Hand-painted Chanderi kurta sets and breathable Kaftans under ₹20,000 — for the women who want craft in their daily wardrobe.',
    cta: 'Shop Kurta Sets · 304 pieces',
    sub: 'Free express shipping over ₹15,000',
    tone: 'cream',
    badge: 'UNDER ₹20K',
    label: 'White Chanderi kurta set',
    src: () => IMG.hero.everyday,
    objectPosition: 'center 18%',
  },
  {
    slug: 'festive',
    eyebrow: 'The Festive Edit · Preview',
    line1: 'Diwali',
    line2: 'opens',
    line3: 'on the first of August.',
    body: 'Be the first to see the festive lehengas and Mukaish gota suit sets. Early access for newsletter subscribers.',
    cta: 'Get Early Access',
    sub: 'No spam · one letter a fortnight',
    tone: 'dark',
    badge: 'COMING SOON',
    label: 'Red contemporary lehenga',
    src: () => IMG.hero.festive,
    objectPosition: 'center 18%',
  },
];

function HeroCarousel({ P, variant = 'heritage' }) {
  const [i, setI] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  const n = HERO_SLIDES.length;

  React.useEffect(() => {
    if (hovered) return;
    const t = setInterval(() => setI(prev => (prev + 1) % n), 6000);
    return () => clearInterval(t);
  }, [hovered, n]);

  const s = HERO_SLIDES[i];
  const isHeritage = variant === 'heritage';
  const displayFont = isHeritage ? "'Cormorant Garamond',serif" : "'Tenor Sans','Cormorant Garamond',serif";

  return (
    <section
      style={{ position: 'relative', background: P.bg, overflow: 'hidden', maxWidth: 1440, margin: '0 auto' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 760 }}>
        {/* TEXT side */}
        <div style={{ padding: '80px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: P.mute }}>
              {s.eyebrow}
            </div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', color: P.mute }}>
              {String(i + 1).padStart(2, '0')} <span style={{ opacity: .4 }}>—</span> {String(n).padStart(2, '0')}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <span style={{
              display: 'inline-block', fontFamily: 'ui-monospace,monospace', fontSize: 10,
              letterSpacing: '0.2em', color: P.accentInk, background: P.accent,
              padding: '4px 10px', marginBottom: 28,
            }}>{s.badge}</span>
            <h1 style={{
              fontFamily: displayFont, fontSize: isHeritage ? 88 : 104, lineHeight: 0.95,
              fontWeight: 400, margin: 0, letterSpacing: '-0.02em',
            }}>
              <div>{s.line1}</div>
              <div>{s.line2}</div>
              <div style={{ fontStyle: 'italic', color: P.accent }}>{s.line3}</div>
            </h1>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.65, color: P.mute, maxWidth: 460 }}>
              {s.body}
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center' }}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 26px',
                background: P.ink, color: P.surface, border: 0,
                fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: 'inherit',
              }}>
                {s.cta} <Icon name="arrow" size={13} stroke={P.surface} />
              </button>
              <span style={{ fontSize: 12.5, color: P.mute, letterSpacing: '0.04em' }}>
                {s.sub}
              </span>
            </div>
          </div>

          {/* Controls + dots */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              {HERO_SLIDES.map((_, j) => (
                <button key={j} onClick={() => setI(j)}
                  aria-label={`Go to slide ${j + 1}`}
                  style={{
                    width: 32, height: 2, border: 0, padding: 0, cursor: 'pointer',
                    background: j === i ? P.ink : P.line, transition: '.3s',
                  }} />
              ))}
              <span className="mono" style={{ marginLeft: 12, fontSize: 11, color: P.mute, letterSpacing: '0.12em' }}>
                {hovered ? 'PAUSED' : 'AUTOPLAY'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous"
                style={{ width: 44, height: 44, border: `1px solid ${P.line}`, background: 'transparent', cursor: 'pointer' }}>
                <Icon name="arrowL" />
              </button>
              <button onClick={() => setI((i + 1) % n)} aria-label="Next"
                style={{ width: 44, height: 44, border: `1px solid ${P.ink}`, background: P.ink, color: P.surface, cursor: 'pointer' }}>
                <Icon name="arrow" stroke={P.surface} />
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE side */}
        <div style={{ position: 'relative' }}>
          <ImgSlot label={s.label} tone={s.tone} style={{ height: '100%' }} ratio={undefined}
            src={s.src ? s.src() : undefined} objectPosition={s.objectPosition} />

          {/* Floating collection card */}
          <div style={{
            position: 'absolute', right: 36, bottom: 56, background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(10px)', padding: '20px 22px', maxWidth: 280,
            border: variant === 'minimal' ? `1px solid ${P.line}` : 'none',
          }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: P.mute }}>COLLECTION · {String(i + 1).padStart(2, '0')}/{String(n).padStart(2, '0')}</div>
            <div style={{ fontFamily: displayFont, fontSize: 22, marginTop: 8, lineHeight: 1.1, color: '#1A1411' }}>
              {s.eyebrow.split('·')[0].trim()}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, color: '#1A1411' }}>
              <span style={{ fontSize: 12, color: '#6E5E4A' }}>From {inr(8500)}</span>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: P.accent }}>SHOP →</span>
            </div>
          </div>

          {/* Slide thumbs strip */}
          <div style={{ position: 'absolute', left: 36, bottom: 36, display: 'flex', gap: 8 }}>
            {HERO_SLIDES.map((sl, j) => (
              <button key={j} onClick={() => setI(j)} aria-label={sl.slug}
                style={{
                  width: 44, height: 56, padding: 0, border: 0, cursor: 'pointer',
                  outline: j === i ? '2px solid #fff' : '1px solid rgba(255,255,255,0.4)',
                  outlineOffset: -2, opacity: j === i ? 1 : 0.7, overflow: 'hidden',
                }}>
                <ImgSlot label="" tone={sl.tone} ratio={undefined} style={{ height: '100%' }}
                  src={sl.src ? sl.src() : undefined} objectPosition={sl.objectPosition} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LIVE ACTIVITY TICKER — recent purchases / views, scrolls horizontally.
// CRO: real-time social proof under the hero.
// ─────────────────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  { city: 'Pune',      action: 'just bought',  what: 'Champa Bandhej Saree',     when: '2 min ago' },
  { city: 'Dubai',     action: 'just bought',  what: 'Saanjh Gota Lehenga',      when: '6 min ago' },
  { city: 'Bengaluru', action: 'is viewing',   what: 'Madhumati Bandhej',        when: 'now · 12 viewing' },
  { city: 'London',    action: 'left a review', what: 'Kumud Leheriya · ★★★★★',   when: '14 min ago' },
  { city: 'Delhi',     action: 'booked',       what: 'Bridal stylist consultation', when: '18 min ago' },
  { city: 'Mumbai',    action: 'just bought',  what: 'Phool Zardozi Lehenga',    when: '21 min ago' },
  { city: 'Singapore', action: 'just bought',  what: 'Vrinda Kota Doria',        when: '27 min ago' },
  { city: 'Jaipur',    action: 'visited atelier', what: 'MI Road showroom',     when: '32 min ago' },
];

function ActivityTicker({ P }) {
  return (
    <div style={{
      borderBottom: `1px solid ${P.line}`, background: P.surface,
      padding: '12px 0', overflow: 'hidden', position: 'relative',
    }}>
      <style>{`
        @keyframes geroo-ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .geroo-ticker-track { display: flex; gap: 56px; width: max-content; animation: geroo-ticker 60s linear infinite; }
      `}</style>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          padding: '0 24px', fontFamily: 'ui-monospace,monospace', fontSize: 10.5,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: P.accent,
          borderRight: `1px solid ${P.line}`, marginRight: 28, flexShrink: 0,
        }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, background: P.accent, borderRadius: '50%', marginRight: 8, transform: 'translateY(-1px)' }} />
          LIVE
        </div>
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div className="geroo-ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((it, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, color: P.ink, whiteSpace: 'nowrap' }}>
                <Icon name="pin" size={13} stroke={P.mute} />
                <span style={{ color: P.mute }}>Someone in</span>
                <b style={{ fontWeight: 600 }}>{it.city}</b>
                <span style={{ color: P.mute }}>{it.action}</span>
                <i style={{ fontStyle: 'italic' }}>{it.what}</i>
                <span className="mono" style={{ color: P.mute, fontSize: 11, letterSpacing: '0.08em' }}>· {it.when}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BESTSELLERS — dedicated, prominent, ranked.
// CRO: numbered #1–#6, "Only N left" urgency, save % vs typical retail.
// ─────────────────────────────────────────────────────────────────────────────
const BESTSELLER_DATA = [
  { rank: 1, name: 'Purple Gota Patti Kota Silk Saree',  price: 25228, was: 29680, stars: '5.0', count: 218, tone: 'burgundy', stock: '2 left · 14 watching',  badge: 'TOP RATED',       srcKey: ['sarees', 0] },
  { rank: 2, name: 'White Hand Painted Chanderi Set',    price: 18656, was: 23320, stars: '4.9', count: 142, tone: 'cream',    stock: 'In stock',              badge: 'EDITOR\u2019S PICK', srcKey: ['kurtas', 0] },
  { rank: 3, name: 'Yellow Gota Patti Chiffon Saree',    price: 26000, was: null,  stars: '4.9', count: 309, tone: 'warm',     stock: 'In stock',              badge: 'MOST GIFTED',     srcKey: ['sarees', 4] },
  { rank: 4, name: 'Red Lehenga · Mukaish Shimmer',      price: 42750, was: 45000, stars: '5.0', count: 87,  tone: 'dark',     stock: '1 left · 9 watching',   badge: 'BRIDAL',          srcKey: ['lehengas', 3] },
  { rank: 5, name: 'Off White Gota Patti Kota Silk',     price: 25228, was: 29680, stars: '4.9', count: 156, tone: 'cream',    stock: 'In stock',              badge: 'NEW BESTSELLER',  srcKey: ['sarees', 1] },
  { rank: 6, name: 'Pastel Pink Gota Jaal Chiffon',      price: 26000, was: null,  stars: '5.0', count: 198, tone: 'burgundy', stock: '3 left',                badge: 'PRESS FAV.',      srcKey: ['sarees', 3] },
];

function Bestsellers({ P, variant = 'heritage' }) {
  const isHeritage = variant === 'heritage';
  const displayFont = isHeritage ? "'Cormorant Garamond',serif" : "'Tenor Sans','Cormorant Garamond',serif";

  return (
    <section style={{ padding: '90px 0', background: P.bg }}>
      <div className="container" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: P.mute, marginBottom: 14 }}>
              <span style={{ color: P.accent, fontWeight: 600 }}>★</span> The Bestsellers · 4,217 verified reviews
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 64, margin: 0, lineHeight: 1, fontWeight: 400, letterSpacing: '-0.015em' }}>
              Quietly famous, <span style={{ fontStyle: 'italic', color: P.accent }}>repeatedly loved.</span>
            </h2>
            <p style={{ marginTop: 18, color: P.mute, fontSize: 14.5, maxWidth: 600 }}>
              The pieces our customers re-order, gift, and write home about. Updated weekly from real sales — not marketing picks.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="mono" style={{ fontSize: 11, color: P.mute, letterSpacing: '0.12em' }}>RANKED BY SALES · LAST 30 DAYS</div>
            <a style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
              All bestsellers <Icon name="arrow" size={13} />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {BESTSELLER_DATA.map((p) => {
            const save = p.was ? Math.round((1 - p.price / p.was) * 100) : null;
            const urgent = p.stock.includes('left');
            const productImg = p.srcKey ? IMG[p.srcKey[0]][p.srcKey[1]] : undefined;
            return (
              <div key={p.rank} style={{ background: P.surface, border: `1px solid ${P.line}`, padding: 18, cursor: 'pointer', transition: '.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ position: 'relative' }}>
                  <ImgSlot label={`#${p.rank} · ${p.name}`} ratio="4/5" tone={p.tone} src={productImg} />
                  <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{
                      background: P.ink, color: P.surface, padding: '6px 10px',
                      fontFamily: 'ui-monospace,monospace', fontSize: 11, letterSpacing: '0.14em',
                    }}>#{p.rank} BESTSELLER</span>
                    <span style={{
                      background: P.accent, color: P.accentInk, padding: '4px 9px',
                      fontFamily: 'ui-monospace,monospace', fontSize: 10, letterSpacing: '0.16em',
                    }}>{p.badge}</span>
                  </div>
                  {save && (
                    <span style={{
                      position: 'absolute', top: 12, right: 12, background: P.surface,
                      padding: '6px 10px', fontFamily: 'ui-monospace,monospace', fontSize: 11, color: P.accent, fontWeight: 700,
                    }}>SAVE {save}%</span>
                  )}
                  <button style={{
                    position: 'absolute', bottom: 12, left: 12, right: 12, background: P.ink, color: P.surface,
                    border: 0, padding: '12px', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
                    cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                  }}>
                    <Icon name="bag" size={14} stroke={P.surface} /> Add to bag
                  </button>
                </div>
                <div style={{ padding: '18px 4px 4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: P.mute }}>
                    <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                      <Icon name="star" size={12} stroke={P.accent} />
                      <b style={{ color: P.ink }}>{p.stars}</b> · {p.count} reviews
                    </span>
                    <span style={{ color: urgent ? P.accent : P.mute, fontWeight: urgent ? 600 : 400 }}>
                      {urgent && <span style={{ display: 'inline-block', width: 6, height: 6, background: P.accent, borderRadius: '50%', marginRight: 6, transform: 'translateY(-1px)' }} />}
                      {p.stock}
                    </span>
                  </div>
                  <div style={{ fontFamily: displayFont, fontSize: 22, marginTop: 10, lineHeight: 1.15 }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
                    <span style={{ fontFamily: displayFont, fontSize: 20 }}>{inr(p.price)}</span>
                    {p.was && <span style={{ color: P.mute, textDecoration: 'line-through', fontSize: 13 }}>{inr(p.was)}</span>}
                    <span style={{ marginLeft: 'auto', fontSize: 11, color: P.mute }}>EMI from {inr(Math.round(p.price / 12))}/mo</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CELEBRITY CLOSET — editorial row of celebrity appearances.
// CRO: aspirational social proof. Each card "Shop the look".
// (Names are placeholders — swap in real talent on the live site.)
// ─────────────────────────────────────────────────────────────────────────────
const CELEB_DATA = [
  { who: 'Nimrat Kaur',          event: 'Cover · Vogue India',        look: 'Off White Mukaish Lehenga',    price: 42750, tone: 'burgundy', tag: 'Cover · Vogue India',  srcKey: ['lehengas', 1] },
  { who: 'Sara Ali Khan',        event: 'Filmfare 2026',              look: 'Black Chiffon Mukaish Lehenga', price: 42750, tone: 'cream',    tag: 'Best Dressed',         srcKey: ['lehengas', 0] },
  { who: 'Subhashree Ganguly',   event: 'Brand Ambassador Shoot',     look: 'Green Gota Patti Kota Saree',   price: 25228, tone: 'warm',     tag: 'Press · Harper\u2019s', srcKey: ['sarees', 2] },
  { who: 'Malavika Mohanan',     event: 'IIFA Awards 2026',           look: 'Pink Hand Painted Lehenga',     price: 42750, tone: 'dark',     tag: 'Red Carpet',           srcKey: ['lehengas', 7] },
];

function CelebrityCloset({ P, variant = 'heritage' }) {
  const isHeritage = variant === 'heritage';
  const displayFont = isHeritage ? "'Cormorant Garamond',serif" : "'Tenor Sans','Cormorant Garamond',serif";

  return (
    <section style={{ padding: '110px 0', background: P.ink, color: P.surface }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, marginBottom: 60, alignItems: 'flex-end' }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: .7, marginBottom: 18 }}>
              The Celebrity Closet · 42 features
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 72, margin: 0, lineHeight: 0.98, fontWeight: 400, letterSpacing: '-0.02em' }}>
              Dressed for the <span style={{ fontStyle: 'italic' }}>red carpet,</span><br />
              the <span style={{ fontStyle: 'italic' }}>mandap,</span> and the front row.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.75, opacity: .75, margin: 0 }}>
              The pieces our atelier has made for actors, athletes' partners and brides whose weddings the press covered. Each look is shoppable — same fabric, same karigar, made to your measure.
            </p>
            <a style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', borderBottom: `1px solid ${P.surface}`, paddingBottom: 4 }}>
              Browse the full closet <Icon name="arrow" size={13} stroke={P.surface} />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {CELEB_DATA.map((c, i) => {
            const cimg = c.srcKey ? IMG[c.srcKey[0]][c.srcKey[1]] : undefined;
            return (
            <div key={i} style={{ cursor: 'pointer', transition: '.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}>
              <div style={{ position: 'relative' }}>
                <ImgSlot label={`Celebrity · ${c.who} · ${c.event}`} ratio="3/4" tone={c.tone} src={cimg} objectPosition="center 15%" />
                <div style={{
                  position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.92)',
                  color: '#1A1411', padding: '4px 9px', fontFamily: 'ui-monospace,monospace',
                  fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>{c.tag}</div>
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ fontFamily: displayFont, fontSize: 20, lineHeight: 1.2 }}>{c.who}</div>
                <div style={{ fontSize: 12.5, opacity: .65, marginTop: 4 }}>{c.event}</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 14, paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', opacity: .6 }}>WEARING</div>
                    <div style={{ fontSize: 13, marginTop: 4, fontStyle: 'italic' }}>{c.look}</div>
                  </div>
                  <button style={{
                    background: P.surface, color: P.ink, border: 0, padding: '10px 14px',
                    fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
                  }}>Shop →</button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WEDDING PLANNING CTA — high-AOV lead-capture for bridal customers.
// CRO: captures the "I'm planning a wedding 6 months out" intent.
// ─────────────────────────────────────────────────────────────────────────────
function WeddingCTA({ P, variant = 'heritage' }) {
  const isHeritage = variant === 'heritage';
  const displayFont = isHeritage ? "'Cormorant Garamond',serif" : "'Tenor Sans',serif";
  return (
    <section style={{ padding: '110px 0', background: P.bg, position: 'relative' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 60px' }}>
        <div style={{ border: `1px solid ${P.line}`, background: P.surface, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
          <div style={{ position: 'relative', minHeight: 460 }}>
            <ImgSlot label="Bride at the atelier · fitting · 4:5" ratio={undefined} tone="burgundy" style={{ height: '100%' }} src={IMG.lehengas[5]} objectPosition="center 15%" />
          </div>
          <div style={{ padding: '60px 60px' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: P.accent, marginBottom: 18 }}>
              Planning a wedding?
            </div>
            <h3 style={{ fontFamily: displayFont, fontSize: 48, margin: 0, lineHeight: 1.05, fontWeight: 400, letterSpacing: '-0.015em' }}>
              Tell us your date.<br /><span style={{ fontStyle: 'italic' }}>We{'\u2019'}ll do the rest.</span>
            </h3>
            <p style={{ marginTop: 22, fontSize: 14.5, lineHeight: 1.7, color: P.mute, maxWidth: 440 }}>
              A complimentary bridal stylist, fabric swatches couriered to your door, virtual fittings every fortnight, and a karigar-signed certificate with your final piece.
            </p>
            <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input placeholder="Your name" style={{ padding: '14px 16px', border: `1px solid ${P.line}`, background: P.bg, fontSize: 14, fontFamily: 'inherit', outline: 'none', color: P.ink }} />
              <input placeholder="Wedding date" style={{ padding: '14px 16px', border: `1px solid ${P.line}`, background: P.bg, fontSize: 14, fontFamily: 'inherit', outline: 'none', color: P.ink }} />
              <input placeholder="WhatsApp number" style={{ padding: '14px 16px', border: `1px solid ${P.line}`, background: P.bg, fontSize: 14, fontFamily: 'inherit', outline: 'none', color: P.ink }} />
              <select style={{ padding: '14px 16px', border: `1px solid ${P.line}`, background: P.bg, fontSize: 14, fontFamily: 'inherit', outline: 'none', color: P.ink }}>
                <option>Budget: ₹1L – ₹3L</option>
                <option>Budget: ₹3L – ₹6L</option>
                <option>Budget: ₹6L+</option>
              </select>
            </div>
            <button style={{
              marginTop: 18, width: '100%', background: P.ink, color: P.surface, border: 0,
              padding: '16px', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
              cursor: 'pointer', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 10,
            }}>
              Book a free bridal stylist <Icon name="arrow" size={14} stroke={P.surface} />
            </button>
            <div style={{ marginTop: 14, fontSize: 11.5, color: P.mute, display: 'flex', gap: 22 }}>
              <span><Icon name="check" size={12} stroke={P.accent} /> Reply within 24h</span>
              <span><Icon name="check" size={12} stroke={P.accent} /> 2,400+ brides dressed</span>
              <span><Icon name="check" size={12} stroke={P.accent} /> Free swatches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// UNIFORM NAV — single source of truth for both variants.
// Standard nav items including Celebrity Closet, with a secondary utility row.
// ─────────────────────────────────────────────────────────────────────────────
const NAV_PRIMARY = [
  { label: 'New In',           href: '#new',     accent: false },
  { label: 'Sarees',           href: '#saree',   accent: false },
  { label: 'Lehengas',         href: '#lehenga', accent: false },
  { label: 'Suit Sets',        href: '#suit',    accent: false },
  { label: 'Bridal',           href: '#bridal',  accent: true },
  { label: 'Celebrity Closet', href: '#celeb',   accent: false, badge: 'NEW' },
  { label: 'The Atelier',      href: '#atelier', accent: false },
  { label: 'Sale',             href: '#sale',    accent: false, hot: true },
];

function UniformNav({ P, variant = 'heritage' }) {
  return (
    <header style={{ background: P.bg, borderBottom: `1px solid ${P.line}`, position: 'sticky', top: 0, zIndex: 5 }}>
      {/* Row 1 — logo centered, utility right, search left */}
      <div style={{ padding: '20px 60px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', color: P.ink }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 14px',
            border: `1px solid ${P.line}`, fontSize: 12.5, color: P.mute, cursor: 'pointer', minWidth: 280,
          }}>
            <Icon name="search" size={15} stroke={P.mute} />
            <span>Search bandhej, leheriya, bridal…</span>
          </div>
        </div>
        <img src="assets/geroo-logo.png" alt="Geroo Jaipur" style={{ height: 56, width: 'auto', justifySelf: 'center' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 22, alignItems: 'center', color: P.ink, fontSize: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '0.08em' }}>EN · ₹ INR</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '0.08em' }}>
            <Icon name="whatsapp" size={14} stroke={P.accent} /> Stylist
          </span>
          <Icon name="user" size={18} />
          <span style={{ position: 'relative', display: 'inline-flex' }}>
            <Icon name="heart" size={18} />
            <span style={{ position: 'absolute', top: -6, right: -8, background: P.accent, color: P.accentInk, fontSize: 9, padding: '1px 5px', borderRadius: 8, fontFamily: 'ui-monospace,monospace' }}>3</span>
          </span>
          <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Icon name="bag" size={18} />
            <span className="mono" style={{ fontSize: 11 }}>(0)</span>
          </span>
        </div>
      </div>

      {/* Row 2 — primary nav, uniform spacing */}
      <div style={{ borderTop: `1px solid ${P.line}` }}>
        <nav style={{ padding: '0 60px', display: 'flex', justifyContent: 'center', gap: 40 }}>
          {NAV_PRIMARY.map((n, i) => (
            <a key={i} href={n.href} style={{
              padding: '16px 0', fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: n.accent ? P.accent : P.ink, fontWeight: n.accent ? 600 : 500,
              borderBottom: '2px solid transparent', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: '.2s',
            }}>
              {n.label}
              {n.badge && (
                <span style={{
                  fontFamily: 'ui-monospace,monospace', fontSize: 9, letterSpacing: '0.16em',
                  background: P.accent, color: P.accentInk, padding: '2px 6px',
                }}>{n.badge}</span>
              )}
              {n.hot && <span style={{ width: 6, height: 6, background: P.accent, borderRadius: '50%' }} />}
            </a>
          ))}
        </nav>
      </div>

      {/* Row 3 — secondary utility row */}
      <div style={{ borderTop: `1px solid ${P.line}`, background: P.surface }}>
        <div style={{ padding: '10px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: P.mute }}>
          <div style={{ display: 'flex', gap: 26 }}>
            <span>Shop by Craft ▾</span><span>Shop by Occasion ▾</span><span>The Edits ▾</span><span>Stories</span>
          </div>
          <div style={{ display: 'flex', gap: 22 }}>
            <span>Track Order</span><span>Size Guide</span><span>Visit Atelier · MI Road, Jaipur</span>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROMO BAR with countdown — small CRO win (urgency without being pushy).
// ─────────────────────────────────────────────────────────────────────────────
function PromoBar({ P }) {
  // Fake countdown to end of offer — resets daily so it always looks live.
  const [t, setT] = React.useState(() => {
    const end = new Date(); end.setHours(23, 59, 59, 0);
    return Math.max(0, Math.floor((end - new Date()) / 1000));
  });
  React.useEffect(() => {
    const id = setInterval(() => setT(x => Math.max(0, x - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(t / 3600)).padStart(2, '0');
  const m = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
  const s = String(t % 60).padStart(2, '0');
  return (
    <div style={{
      background: P.ink, color: P.surface, fontSize: 11.5, letterSpacing: '0.18em',
      textTransform: 'uppercase', padding: '11px 60px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ display: 'flex', gap: 22, opacity: .85 }}>
        <span><Icon name="truck" size={13} stroke={P.surface} /> Free worldwide shipping over ₹15,000</span>
        <span style={{ opacity: .5 }}>·</span>
        <span>EMI from <b style={{ color: P.surface }}>₹2,083/mo</b></span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ background: P.accent, color: P.accentInk, padding: '4px 10px', fontWeight: 700 }}>Today only</span>
        <span>10% off your first order · code <b>WELCOME10</b></span>
        <span style={{ opacity: .5 }}>·</span>
        <span className="mono" style={{ letterSpacing: '0.12em' }}>Ends in {h}:{m}:{s}</span>
      </div>
      <div style={{ display: 'flex', gap: 18, opacity: .85 }}>
        <span>EN · ₹ INR</span><span>Track Order</span>
      </div>
    </div>
  );
}

Object.assign(window, {
  HeroCarousel, ActivityTicker, Bestsellers, CelebrityCloset,
  WeddingCTA, UniformNav, PromoBar,
});
