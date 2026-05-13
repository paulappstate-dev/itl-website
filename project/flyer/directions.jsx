/* ITL — Design Directions
   First-pass visual explorations for the App State International Leadership
   (ITL) Graduate Certificate program. Three different aesthetic moves —
   pick one to develop into the brochure + applications.

   Palette (App State Communications):
     Primary:  Gold #FFCC00   Black #010101   White #FFFFFF
     Extended: Lake Blue #03659c   Brick Orange #c6602a   Grass Green #69aa61
               Stately Stone #d5c99a   Boot Brown #7b541e   Roof Green #537a6b
               Dark Gold #d7a527
*/

const C = {
  gold: '#FFCC00',
  goldDark: '#d7a527',
  black: '#010101',
  white: '#ffffff',
  paper: '#f4f3ee',
  ink: '#1a1a1a',
  blue: '#03659c',
  orange: '#c6602a',
  green: '#69aa61',
  roof: '#537a6b',
  stone: '#d5c99a',
  brown: '#7b541e',
  grayL: '#d6d6d7',
  grayM: '#b2b3b3',
  grayD: '#4c4847',
};

/* =========================================================================
   Direction 01 — "Gold Major"
   Large gold field, massive black wordmark cropped to the edges, a lake-blue
   sliver carrying the tagline. Confident, identity-forward, the brand says
   itself before you read a word.
   ========================================================================= */
function D1_GoldMajor() {
  return (
    <div style={{ width: 720, height: 960, background: C.gold, color: C.black, position: 'relative', overflow: 'hidden', fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}>
      {/* top meta bar */}
      <div style={{ position: 'absolute', top: 28, left: 36, right: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>
        <span>App&nbsp;State&nbsp;<span style={{ color: C.blue }}>/</span>&nbsp;Reich&nbsp;College&nbsp;of&nbsp;Education</span>
        <span>2025–26</span>
      </div>

      {/* massive ITL — bleeds off both sides */}
      <div style={{ position: 'absolute', top: 90, left: -28, right: -28, lineHeight: 0.78, fontWeight: 900, fontSize: 440, letterSpacing: -22, color: C.black, fontFamily: '"Helvetica Neue", Helvetica, Arial Black, sans-serif' }}>
        ITL
      </div>

      {/* full program name in slab below the wordmark */}
      <div style={{ position: 'absolute', top: 470, left: 36, right: 36, fontSize: 22, fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.05, maxWidth: 520 }}>
        International&nbsp;Leadership<br />Graduate&nbsp;Certificate
      </div>

      {/* lake-blue tagline strip */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 580, height: 96, background: C.blue, color: C.white, display: 'flex', alignItems: 'center', padding: '0 36px' }}>
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.6, lineHeight: 1.05 }}>
          Experience global leadership.<br />
          <span style={{ color: C.gold }}>Transform your career.</span>
        </div>
      </div>

      {/* details row */}
      <div style={{ position: 'absolute', left: 36, right: 36, top: 712, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, color: C.black }}>
        {[
          ['13', 'Credit hours'],
          ['3', 'Semesters'],
          ['~10', 'Days abroad'],
          ['100%', 'Online + travel'],
        ].map(([n, l]) => (
          <div key={l}>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{n}</div>
            <div style={{ marginTop: 6, fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 700 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div style={{ position: 'absolute', left: 36, right: 36, bottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 700, lineHeight: 1.4 }}>
          mcl.appstate.edu/ITL<br />
          <span style={{ fontWeight: 400, letterSpacing: 1.4 }}>wallacepr@appstate.edu</span>
        </div>
        <div style={{ fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, textAlign: 'right' }}>
          Apply<br /><span style={{ background: C.black, color: C.gold, padding: '6px 12px', display: 'inline-block', marginTop: 6, letterSpacing: 1.8 }}>FALL&nbsp;2025&nbsp;→</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   Direction 02 — "Editorial Dark"
   Magazine cover energy. Black ground, gold rule, a single big serif/sans
   tension headline, structured caption in lake blue. Feels graduate-level,
   sophisticated, international.
   ========================================================================= */
function D2_EditorialDark() {
  return (
    <div style={{ width: 720, height: 960, background: C.black, color: C.white, position: 'relative', overflow: 'hidden', fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}>
      {/* top rule + meta */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: C.gold }}></div>
      <div style={{ position: 'absolute', top: 28, left: 40, right: 40, display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: 2.2, textTransform: 'uppercase', color: C.grayM }}>
        <span>App&nbsp;State&nbsp;ITL</span>
        <span>VOL.&nbsp;01</span>
        <span>Boone&nbsp;<span style={{ color: C.gold }}>·</span>&nbsp;36.2168°&nbsp;N&nbsp;<span style={{ color: C.gold }}>·</span>&nbsp;81.6746°&nbsp;W</span>
      </div>

      {/* kicker */}
      <div style={{ position: 'absolute', top: 90, left: 40, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: C.gold, fontWeight: 700 }}>
        International Leadership&nbsp;<span style={{ color: C.white }}>/</span>&nbsp;Graduate Certificate
      </div>

      {/* tension headline */}
      <div style={{ position: 'absolute', top: 124, left: 40, right: 40, fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 0.92, color: C.white }}>
        Become a<br />
        <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: '"Times New Roman", Georgia, serif', color: C.gold }}>global</span><br />
        leader.
      </div>

      {/* lede */}
      <div style={{ position: 'absolute', top: 470, left: 40, width: 360, fontSize: 14, lineHeight: 1.55, color: C.grayL }}>
        Appalachian State's online graduate certificate in International Leadership equips working professionals
        to navigate cross-cultural communication, lead distributed teams, and design solutions that travel.
        <div style={{ marginTop: 14, color: C.gold, fontSize: 11, letterSpacing: 2.2, textTransform: 'uppercase', fontWeight: 700 }}>13&nbsp;credits&nbsp;·&nbsp;3&nbsp;semesters&nbsp;·&nbsp;1&nbsp;practicum&nbsp;abroad</div>
      </div>

      {/* right-side index card */}
      <div style={{ position: 'absolute', top: 470, right: 40, width: 240, border: `1px solid ${C.grayD}`, padding: 18 }}>
        <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', color: C.gold, fontWeight: 700, marginBottom: 14 }}>Three pillars</div>
        {[
          ['01', 'Practical Experience', C.blue],
          ['02', 'Leadership Development', C.orange],
          ['03', 'Global Competency', C.green],
        ].map(([n, t, k]) => (
          <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'baseline', padding: '10px 0', borderTop: `1px solid ${C.grayD}` }}>
            <span style={{ fontSize: 11, color: k, fontWeight: 700, letterSpacing: 1.6 }}>{n}</span>
            <span style={{ fontSize: 13, color: C.white, fontWeight: 500 }}>{t}</span>
          </div>
        ))}
      </div>

      {/* bottom course strip */}
      <div style={{ position: 'absolute', left: 40, right: 40, bottom: 90, paddingTop: 16, borderTop: `1px solid ${C.grayD}` }}>
        <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', color: C.grayM, fontWeight: 700, marginBottom: 10 }}>Coursework</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, fontSize: 11, lineHeight: 1.35 }}>
          {[
            ['6100', 'Cross-Cultural Communication'],
            ['6200', 'Tech for Intl. Collaboration'],
            ['6300', 'Leadership for Global Challenges'],
            ['6400', 'Leadership for Intl. Teams'],
            ['6500', 'Practicum (study abroad)'],
          ].map(([n, t]) => (
            <div key={n}>
              <div style={{ color: C.gold, fontWeight: 700, fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 10, letterSpacing: 0.5 }}>ITL&nbsp;{n}</div>
              <div style={{ color: C.grayL, marginTop: 4 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 56, background: C.gold, color: C.black, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>
        <span>mcl.appstate.edu/ITL</span>
        <span>Apply for Fall 2025&nbsp;→</span>
      </div>
    </div>
  );
}

/* =========================================================================
   Direction 03 — "Color Grid"
   White paper, modular grid, structured color blocks built from the extended
   palette. Reads more like a design-system artifact — useful when the
   program needs to scale to web, social, and print without losing form.
   ========================================================================= */
function D3_ColorGrid() {
  const block = (bg, fg, label, sub, big, extras) => (
    <div style={{ background: bg, color: fg, padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, opacity: 0.85 }}>{label}</div>
      <div>
        <div style={{ fontSize: big || 40, fontWeight: 800, letterSpacing: -1, lineHeight: 0.95 }}>{sub}</div>
        {extras}
      </div>
    </div>
  );

  return (
    <div style={{ width: 720, height: 960, background: C.paper, color: C.black, padding: 32, fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `2px solid ${C.black}`, paddingBottom: 14 }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700 }}>Appalachian State University</div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, marginTop: 4 }}>International Leadership&nbsp;<span style={{ color: C.gold, background: C.black, padding: '0 6px' }}>ITL</span></div>
        </div>
        <div style={{ fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', textAlign: 'right' }}>Graduate Certificate<br />Online + Practicum</div>
      </div>

      {/* big title */}
      <div style={{ marginTop: 20, fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 0.95 }}>
        Lead<br />
        <span style={{ color: C.blue }}>across</span><br />
        borders.
      </div>

      {/* description */}
      <div style={{ marginTop: 16, fontSize: 13, lineHeight: 1.55, maxWidth: 520, color: C.grayD }}>
        A 13-credit graduate certificate built for working professionals — three semesters of online study and
        one international practicum that puts theory into the field.
      </div>

      {/* color block grid */}
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '120px 120px', gap: 8, flex: 1 }}>
        {block(C.blue, C.white, '01 · Pillar', 'Practical', 30,
          <div style={{ fontSize: 11, marginTop: 6, opacity: 0.85, letterSpacing: 0.2 }}>Field experience that bridges theory and global practice.</div>)}
        {block(C.orange, C.white, '02 · Pillar', 'Leadership', 30,
          <div style={{ fontSize: 11, marginTop: 6, opacity: 0.9 }}>Cross-cultural communication, distributed teams.</div>)}
        {block(C.green, C.white, '03 · Pillar', 'Global', 30,
          <div style={{ fontSize: 11, marginTop: 6, opacity: 0.9 }}>Elevate your global leadership impact.</div>)}

        {block(C.gold, C.black, 'Format', '13 cr.', 36,
          <div style={{ fontSize: 11, marginTop: 6, fontWeight: 600 }}>3 semesters · part-time</div>)}
        {block(C.black, C.gold, 'Mode', 'Online', 30,
          <div style={{ fontSize: 11, marginTop: 6, color: C.white }}>+ international practicum (~10 days)</div>)}
        {block(C.paper, C.black, 'Tuition', '$327', 36,
          <div style={{ fontSize: 11, marginTop: 6, color: C.grayD }}>per credit hour, NC residents</div>)}
      </div>

      {/* footer */}
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: `2px solid ${C.black}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', fontWeight: 700 }}>
        <span>mcl.appstate.edu/ITL</span>
        <span style={{ background: C.black, color: C.gold, padding: '7px 14px' }}>Apply&nbsp;→</span>
      </div>
    </div>
  );
}

/* =========================================================================
   Identity sketches — small marks and a palette card to anchor the system
   ========================================================================= */
function PaletteCard() {
  const swatches = [
    ['Gold', C.gold, '#FFCC00', C.black],
    ['Black', C.black, '#010101', C.gold],
    ['Lake Blue', C.blue, '#03659C', C.white],
    ['Brick Orange', C.orange, '#C6602A', C.white],
    ['Grass Green', C.green, '#69AA61', C.white],
    ['Roof Green', C.roof, '#537A6B', C.white],
    ['Stately Stone', C.stone, '#D5C99A', C.black],
    ['Boot Brown', C.brown, '#7B541E', C.white],
  ];
  return (
    <div style={{ width: 480, height: 540, background: C.white, padding: 24, fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}>
      <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, color: C.grayD }}>Working palette</div>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, marginTop: 6 }}>App State ITL · system colors</div>
      <div style={{ height: 3, width: 40, background: C.gold, margin: '12px 0 18px' }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {swatches.map(([name, bg, hex, fg]) => (
          <div key={name} style={{ background: bg, color: fg, padding: 14, height: 84, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6 }}>{name}</div>
            <div style={{ fontSize: 11, fontFamily: 'ui-monospace, Menlo, monospace', opacity: 0.85 }}>{hex}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, fontSize: 11, lineHeight: 1.5, color: C.grayD }}>
        Gold anchors the brand (≥10% per UComm guidance). Lake Blue carries the &quot;international&quot; idea;
        Brick Orange and Grass Green are accent tools for the three pillars. Black + paper-white as workhorse.
      </div>
    </div>
  );
}

function WordmarkLockup() {
  return (
    <div style={{ width: 480, height: 540, background: C.paper, color: C.black, padding: 32, fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, color: C.grayD }}>Wordmark · primary lockup</div>
        <div style={{ marginTop: 36, display: 'flex', alignItems: 'flex-end', gap: 16 }}>
          <span style={{ fontSize: 140, fontWeight: 900, letterSpacing: -8, lineHeight: 0.85 }}>ITL</span>
          <span style={{ width: 4, height: 110, background: C.gold }}></span>
          <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2, paddingBottom: 6 }}>
            International<br />Leadership<br />Graduate<br />Certificate
          </span>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, color: C.grayD, marginTop: 24 }}>Stamp · for stickers, sign-offs</div>
        <div style={{ marginTop: 14, display: 'inline-block', border: `2px solid ${C.black}`, padding: '14px 18px', background: C.gold }}>
          <div style={{ fontSize: 9, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700 }}>App&nbsp;State&nbsp;·&nbsp;Reich&nbsp;COE</div>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1, lineHeight: 1, marginTop: 4 }}>ITL&nbsp;<span style={{ color: C.blue }}>/</span></div>
          <div style={{ fontSize: 9, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, marginTop: 4 }}>Est. for global leaders</div>
        </div>

        <div style={{ marginTop: 22, fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, color: C.grayD }}>Hashtag · social</div>
        <div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, letterSpacing: -0.4 }}>
          <span style={{ color: C.gold, background: C.black, padding: '2px 8px' }}>#</span>&nbsp;AppStateITL
        </div>
      </div>
    </div>
  );
}

function SocialSquare() {
  return (
    <div style={{ width: 540, height: 540, background: C.blue, color: C.white, padding: 36, fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, color: C.gold }}>App State ITL&nbsp;·&nbsp;Open House</div>
      <div style={{ marginTop: 28, fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 0.95 }}>
        Lead the<br />
        <span style={{ background: C.gold, color: C.black, padding: '0 10px' }}>world</span><br />
        from Boone.
      </div>
      <div style={{ marginTop: 22, fontSize: 13, lineHeight: 1.55, maxWidth: 420 }}>
        A 13-credit online graduate certificate with an international practicum.
        Built for working professionals who want their leadership to travel.
      </div>
      <div style={{ position: 'absolute', left: 36, right: 36, bottom: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', fontWeight: 700 }}>mcl.appstate.edu/ITL</div>
        <div style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', fontWeight: 700, background: C.gold, color: C.black, padding: '8px 14px' }}>Apply&nbsp;→</div>
      </div>
    </div>
  );
}

/* ========================= Canvas ========================= */
function App() {
  return (
    <DesignCanvas
      title="ITL — design directions"
      subtitle="Three first-pass visual moves for the App State International Leadership program. Pick a direction; we'll grow it into the brochure + applications."
      background={C.paper}
    >
      <DCSection id="identity" title="A · Identity starter — palette, wordmark, voice">
        <DCArtboard id="palette" label="Working palette" width={480} height={540}>
          <PaletteCard />
        </DCArtboard>
        <DCArtboard id="wordmark" label="Wordmark + stamp" width={480} height={540}>
          <WordmarkLockup />
        </DCArtboard>
        <DCArtboard id="social" label="Square social — Lake Blue" width={540} height={540}>
          <SocialSquare />
        </DCArtboard>
      </DCSection>

      <DCSection id="directions" title="B · Three poster directions (proto-flyers, ~6×8)">
        <DCArtboard id="d1" label="01 · Gold Major — identity-forward, gold-dominant" width={720} height={960}>
          <D1_GoldMajor />
        </DCArtboard>
        <DCArtboard id="d2" label="02 · Editorial Dark — magazine cover, sophisticated" width={720} height={960}>
          <D2_EditorialDark />
        </DCArtboard>
        <DCArtboard id="d3" label="03 · Color Grid — modular, system-friendly" width={720} height={960}>
          <D3_ColorGrid />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
