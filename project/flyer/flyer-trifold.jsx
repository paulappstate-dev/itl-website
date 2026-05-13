/* ITL Flyer — Tri-fold (letter, 11×8.5 landscape; six 3.67×8.5 panels)
   App State official fonts: Arial (sans) + Times New Roman (serif).
   Evergreen content. Virtual collaboration is the signature feature
   (no specific partner named — that piece is not guaranteed).
*/

const C = {
  gold: '#FFCC00', goldDark: '#d7a527',
  black: '#010101', white: '#ffffff', paper: '#f4f3ee',
  blue: '#03659c', orange: '#c6602a', green: '#69aa61',
  roof: '#537a6b', stone: '#d5c99a', brown: '#7b541e',
  grayL: '#d6d6d7', grayM: '#b2b3b3', grayD: '#4c4847',
};

const SANS = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
const SERIF = '"Times New Roman", Times, serif';

/* tri-fold geometry — letter landscape, 11" x 8.5" at 96 dpi */
const SHEET_W = 1056;     // 11 in
const SHEET_H = 816;      // 8.5 in
const PANEL_W = SHEET_W / 3;  // 352
const PAD = 28;

/* primitives ------------------------------------------------------------- */
function Kicker({ children, color = C.black, size = 9.5 }) {
  return <div style={{ fontFamily: SANS, fontSize: size, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, color }}>{children}</div>;
}
function ITLStamp({ size = 'sm' }) {
  const s = size === 'lg' ? { f: 28, p: '4px 10px' } : { f: 16, p: '2px 7px' };
  return <span style={{ fontFamily: SANS, fontSize: s.f, fontWeight: 900, color: C.gold, background: C.black, padding: s.p, display: 'inline-block', lineHeight: 1.05, letterSpacing: -0.3 }}>ITL</span>;
}
function FoldGuide({ x }) {
  return (
    <>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: x - 0.5, width: 1, background: 'rgba(0,0,0,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -14, left: x - 18, fontFamily: SANS, fontSize: 8, letterSpacing: 1.5, textTransform: 'uppercase', color: C.grayM }}>fold</div>
    </>
  );
}
function Panel({ left, children, bg = 'transparent', color = C.black, label }) {
  return (
    <div style={{ position: 'absolute', top: 0, left, width: PANEL_W, height: SHEET_H, background: bg, color, fontFamily: SANS, overflow: 'hidden' }}>
      {label ? <div style={{ position: 'absolute', top: 8, right: 10, fontFamily: SANS, fontSize: 7.5, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', pointerEvents: 'none' }}>{label}</div> : null}
      {children}
    </div>
  );
}
function Sheet({ children }) {
  return (
    <div style={{ position: 'relative', width: SHEET_W, height: SHEET_H, background: C.paper, fontFamily: SANS }}>
      {children}
      <FoldGuide x={PANEL_W} />
      <FoldGuide x={PANEL_W * 2} />
    </div>
  );
}

/* =========================================================================
   OUTSIDE SPREAD
   Left to right when laid flat (printed side):
     [ Back cover ] [ Inside flap when closed ] [ Front cover ]
   When folded:  reader first sees the FRONT COVER (rightmost).
   Open the right flap — you see the INSIDE FLAP (middle of outside).
   ========================================================================= */
function OutsideSpread() {
  return (
    <Sheet>
      {/* ---------- PANEL 1 · BACK COVER ---------- */}
      <Panel left={0} bg={C.black} color={C.white} label="P1 · Back cover">
        <div style={{ padding: PAD, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* top: official lockup with logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <img src="block-a.png" alt="App State" style={{ width: 64, height: 'auto', display: 'block' }} />
              <div style={{ paddingTop: 2 }}>
                <Kicker color={C.gold}>Appalachian State University</Kicker>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, lineHeight: 1.25 }}>
                  Reich College<br />of Education
                </div>
                <div style={{ fontSize: 11, color: C.grayL, marginTop: 4, lineHeight: 1.35 }}>
                  Department of Media,<br />Career Studies &amp;<br />Leadership Development
                </div>
              </div>
            </div>
          </div>

          {/* middle: pull quote (serif) */}
          <div>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 22, lineHeight: 1.2, color: C.white, letterSpacing: -0.2 }}>
              &ldquo;Beyond awareness.<br />Toward action.&rdquo;
            </div>
            <div style={{ height: 2, width: 36, background: C.gold, margin: '14px 0' }}></div>
            <div style={{ fontSize: 11, color: C.grayL, lineHeight: 1.55 }}>
              The Graduate Certificate in International Leadership prepares working professionals to lead with confidence
              across cultures, time zones, and organizational borders.
            </div>
          </div>

          {/* bottom: contact + apply */}
          <div>
            <Kicker color={C.gold}>Get in touch</Kicker>
            <div style={{ fontSize: 11.5, lineHeight: 1.7, marginTop: 8, color: C.white }}>
              mcl.appstate.edu/ITL<br />
              wallacepr@appstate.edu<br />
              <span style={{ color: C.grayL }}>+1 828.262.6571</span>
            </div>
            <div style={{ marginTop: 14, fontSize: 10.5, color: C.grayM, lineHeight: 1.45 }}>
              ASU Box 32086 · 151 College St #212M<br />Boone, North Carolina 28608
            </div>
            <div style={{ marginTop: 18, display: 'inline-block', background: C.gold, color: C.black, padding: '10px 14px', fontSize: 11, fontWeight: 700, letterSpacing: 2.2, textTransform: 'uppercase' }}>
              Apply&nbsp;→
            </div>
          </div>
        </div>
      </Panel>

      {/* ---------- PANEL 2 · INSIDE FLAP (visible first when opened) ---------- */}
      <Panel left={PANEL_W} bg={C.paper} label="P2 · Inside flap">
        <div style={{ padding: PAD, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Kicker color={C.grayD}>Open this brochure</Kicker>
            <div style={{ fontFamily: SERIF, fontSize: 36, lineHeight: 1.02, marginTop: 14, fontStyle: 'italic', letterSpacing: -0.6, color: C.black }}>
              What does<br />it look like<br />to lead<br />across<br /><span style={{ color: C.blue }}>borders?</span>
            </div>
          </div>

          {/* a tiny visual key */}
          <div>
            <Kicker color={C.grayD}>The kit, at a glance</Kicker>
            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr', gap: 4 }}>
              {[
                ['CQ', 'Cultural Intelligence', C.blue],
                ['CC', 'Cross-Cultural Comms', C.orange],
                ['DL', 'Distributed Leadership', C.green],
                ['VC', 'Virtual Collaboration', C.roof],
              ].map(([k, l, color]) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderTop: `1px solid ${C.grayL}` }}>
                  <span style={{ background: color, color: C.white, fontSize: 10, fontWeight: 700, letterSpacing: 0.4, padding: '4px 7px', minWidth: 28, textAlign: 'center' }}>{k}</span>
                  <span style={{ fontSize: 12, color: C.black }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontFamily: SANS, fontSize: 10, color: C.grayD, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700 }}>
            App State <span style={{ color: C.gold }}>/</span> Reich COE <span style={{ color: C.gold }}>/</span> ITL
          </div>
        </div>
      </Panel>

      {/* ---------- PANEL 3 · FRONT COVER (the cover when folded) ---------- */}
      <Panel left={PANEL_W * 2} bg={C.gold} color={C.black} label="P3 · Front cover">
        <div style={{ padding: PAD, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          {/* top: institutional lockup */}
          <div>
            <Kicker>Appalachian State <span style={{ color: C.blue }}>/</span> Reich COE</Kicker>
            <div style={{ marginTop: 4, fontSize: 11, fontWeight: 700, letterSpacing: 0.2 }}>
              International Leadership · Graduate Certificate
            </div>
          </div>

          {/* middle: massive title */}
          <div style={{ marginTop: -12 }}>
            <div style={{ fontFamily: SANS, fontSize: 92, fontWeight: 900, letterSpacing: -3.6, lineHeight: 0.88, color: C.black }}>
              Lead<br />
              <span style={{ fontFamily: SERIF, fontWeight: 400, fontStyle: 'italic', color: C.blue, letterSpacing: -2 }}>across</span><br />
              borders.
            </div>
            <div style={{ height: 4, width: 64, background: C.black, margin: '20px 0 0' }}></div>
            <div style={{ marginTop: 14, fontSize: 12, lineHeight: 1.5, maxWidth: 280 }}>
              A fully online graduate certificate in cultural intelligence and adaptive leadership — built for working professionals.
            </div>
          </div>

          {/* bottom: stamp + url */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <ITLStamp size="lg" />
            <div style={{ textAlign: 'right' }}>
              <Kicker>mcl.appstate.edu/ITL</Kicker>
              <div style={{ fontFamily: SERIF, fontSize: 11, fontStyle: 'italic', color: C.black, marginTop: 4 }}>Open ↑</div>
            </div>
          </div>
        </div>
      </Panel>
    </Sheet>
  );
}

/* =========================================================================
   INSIDE SPREAD
   Three connected panels reader sees fully unfolded.
   ========================================================================= */
function InsideSpread() {
  return (
    <Sheet>
      {/* ---------- PANEL 4 · LEFT (the three pillars) ---------- */}
      <Panel left={0} bg={C.paper} label="P4 · Pillars">
        <div style={{ padding: PAD, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Kicker color={C.grayD}>Three pillars</Kicker>
          <div style={{ fontSize: 30, fontWeight: 900, letterSpacing: -1, lineHeight: 0.95, marginTop: 8 }}>
            What you build,<br />by design.
          </div>
          <div style={{ height: 3, width: 36, background: C.gold, marginTop: 12, marginBottom: 18 }}></div>

          {[
            ['01', 'Cultural Intelligence', C.blue, 'CQ Drive · Knowledge · Strategy · Action — the most widely adopted framework for cross-cultural effectiveness in business and leadership.'],
            ['02', 'Cross-Cultural Communication', C.orange, 'Lead the conversations that cross language, culture, and time zones. Practical tools, real practice.'],
            ['03', 'Distributed Leadership', C.green, 'Recruit, motivate, and align teams across geographies using current collaboration technologies.'],
          ].map(([n, t, k, d]) => (
            <div key={n} style={{ background: k, color: C.white, padding: 14, marginBottom: 8, position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: C.gold }}>{n}</span>
                <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: -0.2 }}>{t}</span>
              </div>
              <div style={{ fontSize: 11, lineHeight: 1.5, marginTop: 6, color: 'rgba(255,255,255,0.92)' }}>{d}</div>
            </div>
          ))}

          <div style={{ flex: 1 }}></div>
          <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: C.grayD, lineHeight: 1.45, paddingTop: 10, borderTop: `1px solid ${C.black}` }}>
            Where culture meets capability.
          </div>
        </div>
      </Panel>

      {/* ---------- PANEL 5 · MIDDLE (courses + portfolio) ---------- */}
      <Panel left={PANEL_W} bg={C.white} label="P5 · Coursework">
        <div style={{ padding: PAD, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Kicker color={C.grayD}>Five courses · 15 credits</Kicker>
          <div style={{ fontSize: 30, fontWeight: 900, letterSpacing: -1, lineHeight: 0.95, marginTop: 8 }}>
            The coursework.
          </div>
          <div style={{ height: 3, width: 36, background: C.gold, marginTop: 12, marginBottom: 14 }}></div>

          {[
            ['Cross-Cultural Communication', 'Foundations of cultural intelligence in global leadership.'],
            ['Technology for International Collaboration', 'Tools and habits for leading distributed teams.'],
            ['Leadership for Global Challenges', 'Adaptive frameworks for problems without borders.'],
            ['Leadership for International Teams', 'Recruit, motivate, align across language and culture.'],
            ['International Leadership Practicum', 'Capstone — apply the full CQ toolkit through structured virtual collaboration.'],
          ].map(([t, d], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 10, padding: '9px 0', borderTop: i === 0 ? `1px solid ${C.black}` : `1px solid ${C.grayL}` }}>
              <div style={{ fontFamily: 'ui-monospace, "Courier New", monospace', fontSize: 10, color: C.gold, background: C.black, fontWeight: 700, padding: '5px 4px', height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'start', letterSpacing: 0.4 }}>
                0{i + 1}
              </div>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: -0.1, lineHeight: 1.2 }}>{t}</div>
                <div style={{ fontSize: 10.5, color: C.grayD, marginTop: 2, lineHeight: 1.45 }}>{d}</div>
              </div>
            </div>
          ))}

          {/* portfolio callout */}
          <div style={{ marginTop: 14, background: C.blue, color: C.white, padding: 14 }}>
            <Kicker color={C.gold}>You graduate with</Kicker>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 19, lineHeight: 1.15, marginTop: 6, letterSpacing: -0.3 }}>
              A portfolio,<br />not just a transcript.
            </div>
            <div style={{ fontSize: 10.5, lineHeight: 1.5, marginTop: 8, color: 'rgba(255,255,255,0.9)' }}>
              Cross-cultural communication guide · virtual collaboration playbook · case analyses · capstone project.
            </div>
          </div>
        </div>
      </Panel>

      {/* ---------- PANEL 6 · RIGHT (signature + frameworks + CTA) ---------- */}
      <Panel left={PANEL_W * 2} bg={C.paper} label="P6 · Signature & CTA">
        <div style={{ padding: PAD, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* signature feature — virtual collaboration */}
          <div style={{ background: C.black, color: C.white, padding: 16, position: 'relative' }}>
            <Kicker color={C.gold}>Signature feature</Kicker>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.6, lineHeight: 1, marginTop: 8 }}>
              A virtual<br />collaboration<br />with peers<br /><span style={{ color: C.gold }}>abroad.</span>
            </div>
            <div style={{ fontSize: 11, color: C.grayL, lineHeight: 1.5, marginTop: 10 }}>
              Direct, structured experience leading across language, culture, and time zones — embedded in the practicum, no travel required.
            </div>
          </div>

          {/* frameworks strip */}
          <div style={{ marginTop: 14 }}>
            <Kicker color={C.grayD}>Anchored in</Kicker>
            <div style={{ marginTop: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: `1px solid ${C.black}` }}>
                <span style={{ fontWeight: 800, color: C.black, fontSize: 13 }}>CQ</span>
                <span style={{ fontSize: 11, color: C.grayD }}>Cultural Intelligence framework</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: `1px solid ${C.grayL}` }}>
                <span style={{ fontWeight: 800, color: C.black, fontSize: 13 }}>GLOBE</span>
                <span style={{ fontSize: 11, color: C.grayD }}>Global Leadership Project</span>
              </div>
              <div style={{ fontSize: 10, color: C.grayD, marginTop: 8, lineHeight: 1.45 }}>
                Research-validated frameworks used by Fortune 500 companies, NGOs, and government agencies for talent development.
              </div>
            </div>
          </div>

          {/* who its for */}
          <div style={{ marginTop: 14 }}>
            <Kicker color={C.grayD}>Built for</Kicker>
            <div style={{ fontSize: 12, marginTop: 8, lineHeight: 1.5, color: C.black }}>
              Working professionals in <b>business, education, healthcare, government, nonprofit, and technology.</b> Primarily asynchronous — progress without stepping away from your career.
            </div>
          </div>

          <div style={{ flex: 1 }}></div>

          {/* Big gold CTA bar */}
          <div style={{ background: C.gold, color: C.black, padding: 16, marginTop: 14 }}>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 22, lineHeight: 1.05, letterSpacing: -0.4 }}>
              Leadership<br />without borders.
            </div>
            <div style={{ height: 2, width: 28, background: C.black, margin: '10px 0' }}></div>
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1.6, textTransform: 'uppercase' }}>
              mcl.appstate.edu/ITL
            </div>
            <div style={{ marginTop: 10, display: 'inline-block', background: C.black, color: C.gold, padding: '9px 14px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Apply&nbsp;today&nbsp;→
            </div>
          </div>
        </div>
      </Panel>
    </Sheet>
  );
}

/* =========================================================================
   Reference card — fold diagram + notes
   ========================================================================= */
function FoldDiagram() {
  return (
    <div style={{ width: 540, height: 540, background: C.white, color: C.black, padding: 26, fontFamily: SANS, border: `1px solid ${C.grayL}` }}>
      <Kicker color={C.grayD}>Reading the spread</Kicker>
      <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.5, marginTop: 6 }}>How the tri-fold reads</div>
      <div style={{ height: 3, width: 36, background: C.gold, margin: '12px 0 18px' }}></div>

      {/* mini outside diagram */}
      <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700, color: C.grayD, marginBottom: 6 }}>Outside (printed flat)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: 88, border: `1px solid ${C.black}`, marginBottom: 14 }}>
        <div style={{ background: C.black, color: C.white, padding: 8, fontSize: 9.5, borderRight: `1px dashed ${C.grayM}` }}>P1<br /><b style={{ color: C.gold }}>Back</b></div>
        <div style={{ background: C.paper, color: C.black, padding: 8, fontSize: 9.5, borderRight: `1px dashed ${C.grayM}` }}>P2<br /><b>Inside flap</b></div>
        <div style={{ background: C.gold, color: C.black, padding: 8, fontSize: 9.5 }}>P3<br /><b>Front cover</b></div>
      </div>

      <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 700, color: C.grayD, marginBottom: 6 }}>Inside (printed flat)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: 88, border: `1px solid ${C.black}`, marginBottom: 18 }}>
        <div style={{ background: C.paper, color: C.black, padding: 8, fontSize: 9.5, borderRight: `1px dashed ${C.grayM}` }}>P4<br /><b>Pillars</b></div>
        <div style={{ background: C.white, color: C.black, padding: 8, fontSize: 9.5, borderRight: `1px dashed ${C.grayM}` }}>P5<br /><b>Coursework</b></div>
        <div style={{ background: C.paper, color: C.black, padding: 8, fontSize: 9.5 }}>P6<br /><b>Signature &amp; CTA</b></div>
      </div>

      <div style={{ fontSize: 11.5, lineHeight: 1.55, color: C.grayD }}>
        Standard <b style={{ color: C.black }}>letter-fold tri-fold</b> on US letter, landscape — finished size 3.67&Prime; × 8.5&Prime;.
        Right flap (P1) folds in first, then left flap (P3) folds over to become the cover.
        <br /><br />
        <b style={{ color: C.black }}>Fonts:</b> Arial throughout (display + body); Times New Roman for italic pull-quotes — both per App State Communications.
        <br /><br />
        <b style={{ color: C.black }}>Logo:</b> Block A is locked into P1 (back cover) at the institutional lockup;
        ITL acts as the program wordmark on the cover.
      </div>
    </div>
  );
}

/* =========================================================================
   Canvas
   ========================================================================= */
function App() {
  return (
    <DesignCanvas
      title="ITL Tri-fold · Color Grid (developed)"
      subtitle="Letter tri-fold (11 × 8.5) with App State official type — Arial + Times New Roman. Block A on the back cover; virtual collaboration as the signature feature."
      background={C.paper}
    >
      <DCSection id="trifold" title="A · Tri-fold spreads (1056 × 816 — print at 11&Prime; × 8.5&Prime;)">
        <DCArtboard id="outside" label="Outside spread · back / inside-flap / front cover" width={SHEET_W} height={SHEET_H}>
          <OutsideSpread />
        </DCArtboard>
        <DCArtboard id="inside" label="Inside spread · pillars / coursework / signature + CTA" width={SHEET_W} height={SHEET_H}>
          <InsideSpread />
        </DCArtboard>
      </DCSection>

      <DCSection id="ref" title="B · Reference">
        <DCArtboard id="folddiagram" label="Fold diagram + notes" width={540} height={540}>
          <FoldDiagram />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
