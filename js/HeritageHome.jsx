/* HeritageHome.jsx — Variant A · "The Atelier" — heritage editorial */

const HeritageHome = ({ palette }) => {
  const P = palette || {
    bg: '#F4ECD8', surface: '#FBF6E9', ink: '#1A1411', mute: '#6E5E4A',
    line: '#D9CDB1', accent: '#6B0F1A', accentInk: '#FBF6E9',
  };

  const css = `
    .ht { --bg:${P.bg}; --surface:${P.surface}; --ink:${P.ink}; --mute:${P.mute};
          --line:${P.line}; --accent:${P.accent}; --accentInk:${P.accentInk};
          background: var(--bg); color: var(--ink); width:100%;
          font-family: 'Manrope', system-ui, sans-serif; font-size:14px; line-height:1.5; }
    .ht .display { font-family:'Tenor Sans','Cormorant Garamond',serif; font-weight:400; letter-spacing:-0.005em; }
    .ht .serif { font-family:'Cormorant Garamond',serif; font-weight:500; letter-spacing:-0.01em; }
    .ht .italic-accent { font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:500; }
    .ht .mono { font-family: ui-monospace,"SF Mono",Menlo,monospace; }
    .ht .eyebrow { font-family: ui-monospace,"SF Mono",Menlo,monospace; font-size:10.5px; letter-spacing:0.22em; text-transform:uppercase; color:var(--mute); }
    .ht .btn { display:inline-flex; align-items:center; gap:10px; padding:14px 22px;
               font-size:12px; letter-spacing:0.18em; text-transform:uppercase; cursor:pointer; border:0; font-family:inherit; }
    .ht .btn-ink { background:var(--ink); color:var(--surface); }
    .ht .btn-out { background:transparent; color:var(--ink); border:1px solid var(--ink); }
    .ht .link { font-size:12px; letter-spacing:0.18em; text-transform:uppercase; display:inline-flex; align-items:center; gap:8px; cursor:pointer; }
    .ht .container { max-width:1320px; margin:0 auto; padding:0 60px; }
    .ht .card-hover { transition:.3s; }
    .ht .card-hover:hover { transform: translateY(-4px); }
    .ht a, .ht button { color:inherit; }
    .ht footer .footer-link { position:relative; display:block; width:fit-content; cursor:pointer; }
    .ht footer .footer-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:var(--surface); transition:width 0.25s ease; }
    .ht footer .footer-link:hover::after { width:100%; }
  `;

  const categories = [
    { name: 'Sarees',          tag: 'Gota Patti · Kota Silk',         n: 412, src: IMG.sarees[0],  tone: 'warm' },
    { name: 'Lehengas',        tag: 'Festive & Bridal',              n: 168, src: IMG.lehengas[3], tone: 'burgundy' },
    { name: 'Suit Sets',       tag: 'Chanderi · Garara · Sharara',    n: 304, src: IMG.kurtas[0],  tone: 'cream' },
    { name: 'Bridal',          tag: 'The Vivaha Edit',               n: 86,  src: IMG.lehengas[0], tone: 'dark' },
    { name: 'Dupattas',        tag: 'Mukaish · Gota Patti',           n: 142, src: IMG.sarees[3],  tone: 'stone' },
    { name: 'Dress Materials', tag: 'Unstitched yardage',            n: 198, src: IMG.kurtas[3],  tone: 'bone' },
  ];

  const crafts = [
    { name: 'Bandhej',     count: 124, line: 'Tied & dyed in Sikar' },
    { name: 'Leheriya',    count: 86,  line: 'The wave of Jaipur' },
    { name: 'Kota Doria',  count: 64,  line: 'Honeycomb weave of Kaithoon' },
    { name: 'Block Print', count: 92,  line: 'Wooden blocks of Bagru' },
    { name: 'Zardozi',     count: 41,  line: 'Goldwork embroidery' },
    { name: 'Gota Patti',  count: 58,  line: 'Appliqué of the royals' },
  ];

  const newArrivals = [
    { name: 'Green Gota Patti Kota Silk Saree',   price: 25228, tone: 'burgundy', src: IMG.sarees[2] },
    { name: 'Onion Pink Garara Kurta Set',         price: 14840, tone: 'warm',     src: IMG.kurtas[2] },
    { name: 'Black Hand Embroidered Kota Saree',   price: 25228, tone: 'cream',    src: IMG.sarees[7] },
    { name: 'Off White Mukaish Lehenga',           price: 42750, tone: 'stone',    src: IMG.lehengas[1] },
    { name: 'Maroon Hand Block Printed Kaftan',    price: 13356, tone: 'warm',     src: IMG.kurtas[1] },
  ];

  const reviews = [
    { who: 'Anika R.', city: 'Bengaluru', body: 'Wore the Champa bandhej for my engagement. The craftsmanship is unreal — every dot tied by hand. Compliments did not stop. Worth every rupee.', product: 'Champa Bandhej Saree' },
    { who: 'Meher S.', city: 'London',    body: 'Shipped to the UK in eight days, packed like a treasure. The colour is exactly what I saw on the screen. Geroo has earned a forever customer.', product: 'Kumud Leheriya' },
    { who: 'Devyani P.', city: 'Mumbai',  body: 'I was nervous spending this much online from a brand I did not know. Their stylist called me on WhatsApp, sent fabric swatches by courier. That is service.', product: 'Saanjh Gota Lehenga' },
  ];

  const press = ['Vogue India', "Harper\u2019s Bazaar", 'Elle', 'Verve', 'Grazia', 'The Voice of Fashion'];

  return (
    <div className="ht">
      <style>{css}</style>

      <PromoBar P={P} />
      <UniformNav P={P} variant="minimal" />
      <HeroCarousel P={P} variant="minimal" />
      <ActivityTicker P={P} />

      {/* TRUST STRIP */}
      <section style={{ borderBottom: `1px solid ${P.line}`, background: P.surface }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '22px 60px' }}>
          {[
            { i: 'truck',   t: 'Free worldwide shipping',  s: 'Over ₹15,000 · DDP to 60+ countries' },
            { i: 'refresh', t: 'Easy 7-day returns',       s: 'Unworn, with tags — full refund' },
            { i: 'shield',  t: 'Karigar-signed authenticity', s: 'Each piece signed by its maker' },
            { i: 'check',   t: 'COD up to ₹50,000',        s: 'Pay on delivery, pan-India' },
            { i: 'pin',     t: 'Visit our atelier',        s: 'MI Road, Jaipur · By appointment' },
          ].map((x, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 14, paddingRight: 18, borderRight: i < arr.length - 1 ? `1px solid ${P.line}` : 'none' }}>
              <div style={{ marginTop: 2, color: P.accent }}><Icon name={x.i} size={22} /></div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{x.t}</div>
                <div style={{ fontSize: 12, color: P.mute, marginTop: 2 }}>{x.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BESTSELLERS — promoted, immediately after trust */}
      <Bestsellers P={P} variant="minimal" />

      {/* SHOP BY CATEGORY */}
      <section style={{ padding: '90px 0', borderTop: `1px solid ${P.line}` }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>The Wardrobe · 1,284 pieces</div>
              <h2 className="display" style={{ fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: '-0.015em' }}>Shop by category</h2>
            </div>
            <span className="link">View all pieces <Icon name="arrow" size={14} /></span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {categories.map((c, i) => (
              <div key={i} className="card-hover" style={{ cursor: 'pointer' }}>
                <ImgSlot src={c.src} ratio="3/4" tone={c.tone} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 18 }}>
                  <div>
                    <div className="display" style={{ fontSize: 26, lineHeight: 1.1 }}>{c.name}</div>
                    <div style={{ fontSize: 12.5, color: P.mute, marginTop: 4, letterSpacing: '0.04em' }}>{c.tag} · {c.n} pieces</div>
                  </div>
                  <Icon name="arrow" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CELEBRITY CLOSET */}
      <CelebrityCloset P={P} variant="minimal" />

      {/* SHOP BY CRAFT */}
      <section style={{ padding: '110px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Six crafts. One atelier.</div>
            <h2 className="display" style={{ fontSize: 72, margin: 0, lineHeight: 1, letterSpacing: '-0.02em' }}>
              Shop by <span className="italic-accent">craft</span>
            </h2>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}><OrnRule color={P.accent} /></div>
            <p style={{ maxWidth: 560, margin: '24px auto 0', color: P.mute, fontSize: 15 }}>
              Each Geroo piece is signed by the karigar who made it. These are the techniques their families have practised for generations.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${P.line}` }}>
            {crafts.map((c, i) => (
              <div key={i} className="card-hover" style={{ padding: 36, borderRight: (i + 1) % 3 !== 0 ? `1px solid ${P.line}` : 'none', borderBottom: i < 3 ? `1px solid ${P.line}` : 'none', cursor: 'pointer', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="mono" style={{ fontSize: 11, color: P.mute }}>0{i + 1}</div>
                  <div className="mono" style={{ fontSize: 11, color: P.mute }}>{c.count} pieces</div>
                </div>
                <div className="display" style={{ fontSize: 44, marginTop: 60, letterSpacing: '-0.015em' }}>{c.name}</div>
                <div style={{ fontSize: 13.5, color: P.mute, marginTop: 8 }}>{c.line}</div>
                <div style={{ marginTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="link" style={{ color: P.accent }}>Explore <Icon name="arrow" size={12} stroke={P.accent} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section style={{ padding: '70px 0', background: P.surface, borderTop: `1px solid ${P.line}`, borderBottom: `1px solid ${P.line}` }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Fresh from the loom · Updated Mondays at noon</div>
              <h2 className="display" style={{ fontSize: 48, margin: 0, lineHeight: 1, letterSpacing: '-0.015em' }}>New arrivals</h2>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ width: 44, height: 44, border: `1px solid ${P.line}`, background: 'transparent', cursor: 'pointer' }}><Icon name="arrowL" /></button>
              <button style={{ width: 44, height: 44, border: `1px solid ${P.ink}`, background: P.ink, color: P.surface, cursor: 'pointer' }}><Icon name="arrow" stroke={P.surface} /></button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>
            {newArrivals.map((p, i) => (
              <div key={i} className="card-hover" style={{ cursor: 'pointer' }}>
                <div style={{ position: 'relative' }}>
                  <ImgSlot src={p.src} label={`New arrival ${i + 1}`} ratio="3/4" tone={p.tone} />
                  <span style={{ position: 'absolute', top: 12, left: 12, background: P.ink, color: P.surface, fontSize: 10, letterSpacing: '0.16em', padding: '4px 8px' }}>NEW</span>
                  <button style={{ position: 'absolute', top: 10, right: 10, width: 34, height: 34, background: P.surface, border: 0, cursor: 'pointer' }}><Icon name="heart" size={16} /></button>
                  <button style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: P.ink, color: P.surface, border: 0, padding: '12px', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' }}>Quick view</button>
                </div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 13.5, lineHeight: 1.3 }}>{p.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 6 }}>
                    <div className="display" style={{ fontSize: 18 }}>{inr(p.price)}</div>
                    <div className="mono" style={{ fontSize: 10, color: P.mute }}>EMI ₹{Math.round(p.price/12).toLocaleString('en-IN')}/mo</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIER STORY */}
      <section style={{ background: P.ink, color: P.surface, padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <VideoSlot src={IMG.videos.bandhani} poster={IMG.founder} ratio="4/5" objectPosition="center 30%" />
              <div style={{ position: 'absolute', top: 18, left: 18, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(20,17,14,0.55)', backdropFilter: 'blur(6px)', color: P.surface, padding: '6px 10px', fontFamily: 'ui-monospace,monospace', fontSize: 10, letterSpacing: '0.18em' }}>
                <span style={{ width: 6, height: 6, background: '#E25C5C', borderRadius: '50%' }} />
                LIVE FROM THE ATELIER
              </div>
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, color: P.surface, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: .95, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                <span>Watch · Bandhani &amp; Leheriya · The resist-dye process</span>
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18, color: '#D9B59E' }}>The Atelier · Est. 1998</div>
              <h2 className="display" style={{ fontSize: 64, margin: 0, lineHeight: 1.02, fontWeight: 400, letterSpacing: '-0.02em' }}>
                Twenty thousand <span className="italic-accent">dots,</span><br />tied by a single pair of hands.
              </h2>
              <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.7, opacity: .8, maxWidth: 520 }}>
                Founder Geroo Sharma began with one loom and a borrowed dye bath. Today, 142 karigars share our atelier on MI Road — many third-generation in their craft. We work the slow way because there is no fast way to tie 20,000 dots into a saree.
              </p>
              <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 64, justifyContent: 'start', paddingTop: 36, borderTop: '1px solid rgba(251,246,233,0.18)' }}>
                {[['28', 'years on the loom'], ['142', 'karigars in-house'], ['1', 'piece, eleven hands']].map((s, i) => (
                  <div key={i}>
                    <div className="display" style={{ fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.02em' }}>{s[0]}</div>
                    <div className="mono" style={{ fontSize: 11, opacity: .65, marginTop: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{s[1]}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 44 }}>
                <button className="btn" style={{ background: P.surface, color: P.ink }}>Meet the karigars <Icon name="arrow" size={14} stroke={P.ink} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEDDING CTA */}
      <WeddingCTA P={P} variant="minimal" />

      {/* PRESS */}
      <section style={{ background: P.surface, borderTop: `1px solid ${P.line}`, borderBottom: `1px solid ${P.line}`, padding: '36px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="eyebrow">As seen in</div>
            <div style={{ display: 'flex', gap: 56, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              {press.map((p, i) => (
                <div key={i} className="serif" style={{ fontSize: 22, fontStyle: i % 2 === 0 ? 'italic' : 'normal', letterSpacing: '0.02em', opacity: .75 }}>{p}</div>
              ))}
            </div>
            <span className="link" style={{ fontSize: 11 }}>Press <Icon name="arrow" size={12} /></span>
        </div>
      </section>

      {/* REVIEWS — centered with the 4.92 highlight */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>From the women who wear us</div>
            <h2 className="display" style={{ fontSize: 88, margin: 0, lineHeight: 1, fontWeight: 400, letterSpacing: '-0.025em' }}>
              <span className="display" style={{ fontSize: 96, color: P.accent }}>4.92</span>
              <span className="italic-accent" style={{ fontSize: 60, color: P.ink, marginLeft: 14 }}>out of five.</span>
            </h2>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}><OrnRule color={P.accent} /></div>
            <div style={{ display: 'flex', gap: 6, marginTop: 22, color: P.accent }}>
              {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={22} stroke={P.accent} />)}
            </div>
            <div className="mono" style={{ fontSize: 11, color: P.mute, marginTop: 16, letterSpacing: '0.18em' }}>
              4,217 VERIFIED BUYERS · LOOX + JUDGE.ME
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: P.line, border: `1px solid ${P.line}` }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: P.surface, padding: 40, display: 'flex', flexDirection: 'column', gap: 22, minHeight: 340 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: 4, color: P.accent }}>
                    {[...Array(5)].map((_, j) => <Icon key={j} name="star" size={14} stroke={P.accent} />)}
                  </div>
                  <div className="mono" style={{ fontSize: 10, color: P.mute, letterSpacing: '0.14em' }}>VERIFIED</div>
                </div>
                <p className="italic-accent" style={{ fontSize: 22, lineHeight: 1.42, margin: 0, flex: 1 }}>“{r.body}”</p>
                <div style={{ borderTop: `1px solid ${P.line}`, paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 12.5 }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{r.who}</div>
                    <div style={{ color: P.mute, marginTop: 2 }}>{r.city}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 10, color: P.mute, letterSpacing: '0.14em', textAlign: 'right' }}>{r.product.toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn btn-out">Read all 4,217 reviews <Icon name="arrow" size={13} /></button>
          </div>
        </div>
      </section>

      {/* INSTAGRAM · highlighted handle + follow CTA */}
      <section style={{ padding: '90px 0 100px', background: P.surface, borderTop: `1px solid ${P.line}` }}>
        <div className="container">
          {/* Big handle block */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'center', marginBottom: 56 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>#GerooStories</div>
              <h2 className="display" style={{ fontSize: 80, margin: '0 0 18px', lineHeight: 0.95, letterSpacing: '-0.025em' }}>
                Worn by <span className="italic-accent">you</span>
              </h2>
              <a className="display" href="https://www.instagram.com/geroojaipur"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 16,
                  fontSize: 56, lineHeight: 1, letterSpacing: '-0.015em',
                  color: P.accent, textDecoration: 'none',
                }}>
                <Icon name="insta" size={48} stroke={P.accent} />
                <span>@geroojaipur</span>
              </a>
              <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.65, color: P.mute, maxWidth: 580 }}>
                Tag <b style={{ color: P.ink }}>#GerooStories</b> or <b style={{ color: P.ink }}>@geroojaipur</b> on Instagram for a chance to be featured here — and a 15% off voucher.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'stretch' }}>
              <div style={{
                background: P.bg, border: `1px solid ${P.line}`, padding: '22px 26px',
                display: 'flex', gap: 36, alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div className="display" style={{ fontSize: 36, lineHeight: 1 }}>38.4k</div>
                  <div className="mono" style={{ fontSize: 10.5, color: P.mute, marginTop: 6, letterSpacing: '0.14em' }}>FOLLOWERS</div>
                </div>
                <div style={{ width: 1, height: 36, background: P.line }} />
                <div>
                  <div className="display" style={{ fontSize: 36, lineHeight: 1 }}>2.1k</div>
                  <div className="mono" style={{ fontSize: 10.5, color: P.mute, marginTop: 6, letterSpacing: '0.14em' }}>TAGGED POSTS</div>
                </div>
              </div>
              <a href="https://www.instagram.com/geroojaipur" className="btn btn-ink"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
                <Icon name="insta" size={15} stroke={P.surface} /> Follow on Instagram
              </a>
            </div>
          </div>

          {/* UGC grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
            {[IMG.sarees[5], IMG.lehengas[4], IMG.kurtas[2], IMG.sarees[3], IMG.lehengas[7], IMG.kurtas[4]].map((u, i) => (
              <div key={i} style={{ position: 'relative', cursor: 'pointer' }}>
                <ImgSlot src={u} ratio="1/1" tone={['warm','burgundy','cream','stone','bone','dark'][i]} objectPosition="center 15%" />
                <div className="mono" style={{
                  position: 'absolute', top: 10, left: 10, color: P.surface,
                  fontSize: 10, letterSpacing: '0.14em', textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                }}>
                  @geroojaipur · {(i + 1) * 247}♥
                </div>
                <div style={{ position: 'absolute', bottom: 10, left: 10, color: P.surface, fontSize: 11, letterSpacing: '0.08em', textShadow: '0 1px 3px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Icon name="bag" size={12} stroke={P.surface} /> Shop the look
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section style={{ padding: '110px 0', background: P.bg }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>The Letter</div>
          <h2 className="display" style={{ fontSize: 56, lineHeight: 1.04, margin: 0, letterSpacing: '-0.02em' }}>
            New weaves, atelier dispatches,<br />
            <span className="italic-accent" style={{ color: P.accent }}>10% off your first piece.</span>
          </h2>
          <p style={{ color: P.mute, marginTop: 22, fontSize: 15 }}>
            One letter a fortnight. No spam, just the work and the women who make it.
          </p>
          <div style={{ display: 'flex', gap: 0, maxWidth: 520, margin: '36px auto 0', border: `1px solid ${P.ink}` }}>
            <input placeholder="your@email.com" style={{ flex: 1, padding: '18px 22px', border: 0, background: 'transparent', fontSize: 15, fontFamily: 'inherit', color: P.ink, outline: 'none' }} />
            <button className="btn btn-ink" style={{ padding: '0 28px' }}>Get 10% off <Icon name="arrow" size={14} stroke={P.surface} /></button>
          </div>
          <div style={{ marginTop: 18, fontSize: 11, color: P.mute, letterSpacing: '0.08em' }}>
            Code arrives instantly · Use on any first order over ₹10,000
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: P.ink, color: P.surface, padding: '80px 0 30px' }}>
        <div style={{ padding: '0 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 60, marginBottom: 60 }}>
            <div>
              <div className="display" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.015em' }}>geroo <span className="italic-accent">Jaipur</span></div>
              <p style={{ marginTop: 18, fontSize: 13.5, lineHeight: 1.7, opacity: .75, maxWidth: 280 }}>
                Heritage textiles from the workshops of Jaipur. Hand-tied, hand-dyed, hand-woven since 1998.
              </p>
              <div style={{ marginTop: 24, fontSize: 12.5, opacity: .8, lineHeight: 1.8 }}>
                <div>The Geroo Atelier · MI Road, Jaipur 302001</div>
                <div>+91 141 410 0000 · care@geroojaipur.com</div>
                <div>Mon–Sat · 11am to 8pm IST</div>
              </div>
            </div>
            {[
              ['Shop', ['New In', 'Sarees', 'Lehengas', 'Suit Sets', 'Bridal', 'Celebrity Closet', 'Sale']],
              ['Craft', ['Bandhej', 'Leheriya', 'Kota Doria', 'Block Print', 'Zardozi', 'Gota Patti']],
              ['Help', ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'Track Order', 'Contact', 'WhatsApp Stylist']],
              ['Brand', ['The Atelier', 'Meet the Karigars', 'Journal', 'Press', 'Wholesale', 'Careers']],
            ].map((col, i) => (
              <div key={i}>
                <div className="eyebrow" style={{ marginBottom: 18, color: '#D9B59E' }}>{col[0]}</div>
                {col[1].map((x, j) => <div key={j} className="footer-link" style={{ fontSize: 13.5, lineHeight: 2, opacity: .85 }}>{x}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(251,246,233,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: .7 }}>
            <div>© 2026 Geroo Jaipur. Crafted slowly in Rajasthan.</div>
            <div style={{ display: 'flex', gap: 20 }}>
              <span>Visa</span><span>Mastercard</span><span>UPI</span><span>Razorpay</span><span>EMI</span><span>COD</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <div style={{ position: 'absolute', right: 28, bottom: 28, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
        <div style={{ background: P.surface, border: `1px solid ${P.line}`, padding: '14px 18px', fontSize: 12.5, boxShadow: '0 12px 32px rgba(0,0,0,0.12)', maxWidth: 280 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Need a stylist?</div>
          <div style={{ color: P.mute }}>Chat with Asha — replies in under 3 min.</div>
        </div>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(37,211,102,0.4)', cursor: 'pointer' }}>
          <Icon name="whatsapp" size={30} stroke="#fff" />
        </div>
      </div>
    </div>
  );
};

window.HeritageHome = HeritageHome;
