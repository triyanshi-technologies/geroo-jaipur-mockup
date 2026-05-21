/* shared.jsx — placeholders, icons, formatters used by both homepages */

const ImgSlot = ({ label, ratio = '3/4', tone = 'warm', style = {}, children, height, src, objectPosition = 'center' }) => {
  const palettes = {
    warm:    { a: '#E8DCC7', b: '#D9C7A8', ink: '#7a6a4f' },
    cream:   { a: '#EFE7D6', b: '#E1D5BD', ink: '#7a6a4f' },
    bone:    { a: '#ECE8E1', b: '#DCD6CB', ink: '#6b665d' },
    stone:   { a: '#E0DAD0', b: '#CFC7BA', ink: '#5a554d' },
    dark:    { a: '#1F1B17', b: '#2A2520', ink: '#A89878' },
    burgundy:{ a: '#3C1820', b: '#4F1F2A', ink: '#D9B59E' },
  };
  const p = palettes[tone] || palettes.warm;
  const id = 'p' + Math.random().toString(36).slice(2, 8);

  // Real image path — render an <img> and skip the placeholder pattern entirely.
  if (src) {
    return (
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: height ? undefined : ratio,
        height: height || undefined,
        background: p.a,
        overflow: 'hidden',
        ...style,
      }}>
        <img src={src} alt={label || ''} loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition }} />
        {children}
      </div>
    );
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: height ? undefined : ratio,
      height: height || undefined,
      background: p.a,
      overflow: 'hidden',
      ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke={p.b} strokeWidth="6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      {label ? (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
          fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: p.ink, textAlign: 'center', padding: 16, pointerEvents: 'none',
        }}>
          <span style={{ background: p.a, padding: '4px 10px', border: `1px solid ${p.b}` }}>
            {label}
          </span>
        </div>
      ) : null}
      {children}
    </div>
  );
};

/* Tiny line icons — simple paths, design-system style */
const Icon = ({ name, size = 18, stroke = 'currentColor', strokeWidth = 1.4 }) => {
  const paths = {
    search:   <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    heart:    <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />,
    bag:      <><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
    user:     <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    arrow:    <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    arrowL:   <><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></>,
    plus:     <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    star:     <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.9L12 3.5z" fill="currentColor" stroke="none"/>,
    check:    <path d="m5 12 4 4 10-10" />,
    truck:    <><path d="M2 7h12v9H2z" /><path d="M14 10h5l3 3v3h-8" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    refresh:  <><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 4v4h-4" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 20v-4h4" /></>,
    shield:   <><path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></>,
    pin:      <><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>,
    whatsapp: <><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" /><path d="M8.5 9c0 4 2.5 6.5 6.5 6.5l1.5-1.5-2-1-1 1c-1.5-.5-2.5-1.5-3-3l1-1-1-2L9 8.5z" fill="currentColor" stroke="none"/></>,
    play:     <path d="M8 5v14l11-7L8 5z" fill="currentColor" stroke="none"/>,
    close:    <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>,
    menu:     <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    insta:    <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></>,
    diamond:  <path d="M12 3l9 7-9 11L3 10l9-7z" />,
    leaf:     <path d="M20 4c-8 0-14 6-14 14 0 1 0 2 .3 2.7C13 21 20 14 20 4z" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      {paths[name]}
    </svg>
  );
};

const inr = (n) => '₹' + n.toLocaleString('en-IN');

/* Tiny ornamental divider — geometric (no hand-drawn motifs) */
const OrnRule = ({ color = 'currentColor', width = 220 }) => (
  <svg width={width} height="14" viewBox="0 0 220 14" style={{ display: 'block' }}>
    <line x1="0" y1="7" x2="92" y2="7" stroke={color} strokeWidth="0.8" />
    <line x1="128" y1="7" x2="220" y2="7" stroke={color} strokeWidth="0.8" />
    <rect x="103" y="0" width="14" height="14" transform="rotate(45 110 7)" fill="none" stroke={color} strokeWidth="0.8" />
    <circle cx="110" cy="7" r="2" fill={color} />
  </svg>
);

/* VideoSlot — autoplaying muted loop, fills its container, with an optional
   poster image and overlay children. Mirrors ImgSlot's API so it's drop-in. */
const VideoSlot = ({ src, poster, ratio = '4/5', style = {}, height, objectPosition = 'center', children }) => (
  <div style={{
    position: 'relative',
    width: '100%',
    aspectRatio: height ? undefined : ratio,
    height: height || undefined,
    background: '#1F1B17',
    overflow: 'hidden',
    ...style,
  }}>
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition,
      }}
    />
    {children}
  </div>
);

Object.assign(window, { ImgSlot, Icon, inr, OrnRule, VideoSlot });
