/* ITL Flyer — Color Grid direction, developed
   Single-page front + back, evergreen (no tuition, no semester references).
   Content updated from latest promo materials:
     • 15 credits / 5 courses / fully online
     • CQ (Cultural Intelligence) framework + GLOBE Project
     • Virtual collaboration with Okayama University, Japan
     • Portfolio of professional artifacts as the credential
     • Built for working professionals, primarily asynchronous
*/

const C = {
  gold: '#FFCC00',
  goldDark: '#d7a527',
  black: '#010101',
  white: '#ffffff',
  paper: '#f4f3ee',
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

const FONT = 'Helvetica, "Helvetica Neue", Arial, sans-serif';

/* ------------------------------------------------------------ */
/* Small primitives                                              */
/* ------------------------------------------------------------ */
function Kicker({ children, color = C.black }) {
  return (
    <div style={{ fontSize: 10, letterSpacing: 2.4, textTransform: 'uppercase', fontWeight: 700, color }}>{children}</div>
  );
}

function StampMark({ size = 'sm' }) {
  const s = size === 'lg' ? { pad: '5px 10px', font: 22, gap: 4 } : { pad: '2px 7px', font: 13, gap: 3 };
  return (
    <span style={{ fontSize: s.font, fontWeight: 800, letterSpacing: -0.2, color: C.gold, background: C.black, padding: s.pad, display: 'inline-block', lineHeight: 1.05 }}>
      ITL
    </span>
  );
}

/* ------------------------------------------------------------ */
/* Front — single-page poster / flyer                           */
/* ------------------------------------------------------------ */
function FlyerFront() {
  const block = (bg, fg, kicker, big, sub, opts = {}) => (
    <div style={{ background: bg, color: fg, padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', ...opts.style }}>
      <div style={{ fontSize: 9.5, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, opacity: opts.kickerOpacity ?? 0.85 }}>{kicker}</div>
      <div>
        <div style={{ fontSize: opts.bigSize || 30, fontWeight: 800, letterSpacing: -0.8, lineHeight: 0.95 }}>{big}</div>
        {sub ? <div style={{ fontSize: 11, marginTop: 6, lineHeight: 1.45, opacity: opts.subOpacity ?? 0.9 }}>{sub}</div> : null}
      </div>
    </div>
  );

  return (
    <div style={{ width: 720, height: 960, background: C.paper, color: C.black, padding: 36, fontFamily: FONT, display: 'flex', flexDirection: 'column' }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `2px solid ${C.black}`, paddingBottom: 14 }}>
        <div>
          <Kicker>Appalachian State University · Reich College of Education</Kicker>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, marginTop: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
            International Leadership <StampMark />
          </div>
        </div>
        <div style={{ fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', textAlign: 'right', lineHeight: 1.45, fontWeight: 700 }}>
          Graduate Certificate<br />
          <span style={{ fontWeight: 400, color: C.grayD }}>100% Online · Asynchronous</span>
        </div>
      </div>

      {/* title */}
      <div style={{ marginTop: 26, fontSize: 76, fontWeight: 800, letterSpacing: -2.6, lineHeight: 0.92 }}>
        Lead<br />
        <span style={{ color: C.blue }}>across</span><br />
        borders.
      </div>

      {/* description */}
      <div style={{ marginTop: 18, fontSize: 13.5, lineHeight: 1.55, maxWidth: 560, color: C.grayD }}>
        A fully online graduate certificate that builds the <span style={{ color: C.black, fontWeight: 700 }}>cultural intelligence</span> and
        adaptive leadership skills working professionals need to thrive in global, virtual, and cross-cultural environments.
      </div>

      {/* color block grid */}
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '128px 128px', gap: 8, flex: 1 }}>
        {block(C.blue, C.white, '01 · Pillar', 'Cultural Intelligence', 'CQ Drive, Knowledge, Strategy, Action — the framework Fortune 500 companies use.', { bigSize: 24 })}
        {block(C.orange, C.white, '02 · Pillar', 'Cross-Cultural Comms', 'Lead conversations that cross language, culture, and time zones.', { bigSize: 24 })}
        {block(C.green, C.white, '03 · Pillar', 'Distributed Leadership', 'Run virtual teams using current collaboration tools and methods.', { bigSize: 24 })}

        {block(C.gold, C.black, 'Format', '15 / 5', 'credit hours · five courses · one portfolio', { bigSize: 38 })}
        {block(C.black, C.gold, 'Signature', 'Okayama, JP', 'Structured virtual collaboration with students at Okayama University.', { bigSize: 24, subOpacity: 0.9 })}
        {block(C.paper, C.black, 'Built for', 'Working pros', 'Primarily asynchronous. Progress without stepping away from your career.', { bigSize: 24, style: { border: `2px solid ${C.black}` } })}
      </div>

      {/* footer */}
      <div style={{ marginTop: 20, paddingTop: 14, borderTop: `2px solid ${C.black}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 700 }}>
          mcl.appstate.edu/ITL
          <span style={{ color: C.grayM, margin: '0 10px' }}>·</span>
          <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0.2 }}>wallacepr@appstate.edu</span>
        </div>
        <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, background: C.black, color: C.gold, padding: '8px 16px' }}>Apply&nbsp;→</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ */
/* Back — details: courses, outcomes, who-it's-for              */
/* ------------------------------------------------------------ */
function FlyerBack() {
  const courses = [
    ['Cross-Cultural Communication', 'Building the foundation of cultural intelligence in global leadership contexts.'],
    ['Technology for International Collaboration', 'Tools, methods, and habits for leading distributed teams across time zones.'],
    ['Leadership for Global Challenges', 'Adaptive frameworks for solving problems that don\'t respect borders.'],
    ['Leadership for International Teams', 'How to recruit, motivate, and align teams across language and culture.'],
    ['International Leadership Practicum', 'Capstone — apply the full CQ toolkit through real virtual collaboration.'],
  ];

  const portfolio = [
    'Personal cross-cultural communication guide',
    'Virtual collaboration playbook',
    'Cultural case analyses',
    'Capstone project artifact',
  ];

  return (
    <div style={{ width: 720, height: 960, background: C.white, color: C.black, padding: 36, fontFamily: FONT, display: 'flex', flexDirection: 'column' }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `2px solid ${C.black}`, paddingBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <StampMark size="lg" />
          <div>
            <Kicker color={C.grayD}>Inside the program</Kicker>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.3, marginTop: 4 }}>What you study, what you build, where you go.</div>
          </div>
        </div>
        <div style={{ fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', textAlign: 'right', lineHeight: 1.45, fontWeight: 700, color: C.grayD }}>
          Page 02
        </div>
      </div>

      {/* courses */}
      <div style={{ marginTop: 22 }}>
        <Kicker color={C.grayD}>Five courses · 15 credits</Kicker>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
          {courses.map(([t, d], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '54px 1fr', gap: 14, padding: '12px 0', borderTop: i === 0 ? `1px solid ${C.black}` : `1px solid ${C.grayL}` }}>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: C.gold, background: C.black, fontWeight: 700, letterSpacing: 0.6, padding: '6px 8px', height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'start' }}>
                0{i + 1}
              </div>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: -0.2 }}>{t}</div>
                <div style={{ fontSize: 12, color: C.grayD, marginTop: 3, lineHeight: 1.45 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* split: portfolio + who-its-for */}
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 18, flex: 1 }}>
        {/* portfolio */}
        <div style={{ background: C.blue, color: C.white, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Kicker color={C.gold}>You graduate with</Kicker>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.6, lineHeight: 1.05, marginTop: 6 }}>
              A portfolio,<br />not just a transcript.
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.55, color: C.grayL, marginTop: 10 }}>
              Concrete artifacts a hiring manager or executive sponsor can actually look at — your living credential.
            </div>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', marginTop: 16 }}>
            {portfolio.map((p) => (
              <li key={p} style={{ fontSize: 12.5, padding: '8px 0', borderTop: `1px solid rgba(255,255,255,0.25)`, display: 'flex', gap: 10, alignItems: 'baseline' }}>
                <span style={{ width: 10, height: 10, background: C.gold, display: 'inline-block', marginTop: 2 }}></span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* who its for + frameworks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: C.paper, padding: 22, border: `2px solid ${C.black}` }}>
            <Kicker color={C.grayD}>Built for</Kicker>
            <div style={{ marginTop: 10, fontSize: 13, lineHeight: 1.5 }}>
              Working professionals in <b>business, education, healthcare, government, nonprofit, and technology</b> who need their leadership to travel.
            </div>
          </div>
          <div style={{ background: C.black, color: C.white, padding: 22, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Kicker color={C.gold}>Anchored in</Kicker>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, marginTop: 8, lineHeight: 1.05 }}>
                Industry-validated frameworks.
              </div>
            </div>
            <div style={{ fontSize: 12, color: C.grayL, lineHeight: 1.5, marginTop: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderTop: `1px solid ${C.grayD}` }}>
                <span style={{ color: C.gold, fontWeight: 700 }}>CQ</span><span>Cultural Intelligence</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderTop: `1px solid ${C.grayD}` }}>
                <span style={{ color: C.gold, fontWeight: 700 }}>GLOBE</span><span>Global Leadership Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer CTA */}
      <div style={{ marginTop: 22, background: C.gold, color: C.black, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4 }}>Leadership without borders.</div>
          <div style={{ fontSize: 12, marginTop: 4, fontWeight: 600 }}>mcl.appstate.edu/ITL · wallacepr@appstate.edu</div>
        </div>
        <span style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, background: C.black, color: C.gold, padding: '10px 18px' }}>Apply&nbsp;→</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ */
/* Square social — same direction, social-shaped                */
/* ------------------------------------------------------------ */
function FlyerSocialSquare() {
  return (
    <div style={{ width: 600, height: 600, background: C.paper, color: C.black, padding: 32, fontFamily: FONT, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `2px solid ${C.black}`, paddingBottom: 12 }}>
        <Kicker>App State · Reich COE</Kicker>
        <Kicker color={C.grayD}>Graduate Certificate</Kicker>
      </div>
      <div style={{ marginTop: 22, fontSize: 64, fontWeight: 800, letterSpacing: -2.4, lineHeight: 0.9 }}>
        Lead<br /><span style={{ color: C.blue }}>across</span><br />borders.
      </div>
      <div style={{ marginTop: 16, fontSize: 12.5, lineHeight: 1.55, color: C.grayD, maxWidth: 420 }}>
        A fully online graduate certificate in International Leadership.
        Cultural intelligence, virtual teams, real portfolios.
      </div>
      <div style={{ flex: 1 }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 14 }}>
        <div style={{ background: C.blue, color: C.white, padding: 12, fontSize: 12, fontWeight: 700, letterSpacing: 0.2 }}>Cultural Intelligence</div>
        <div style={{ background: C.orange, color: C.white, padding: 12, fontSize: 12, fontWeight: 700, letterSpacing: 0.2 }}>Cross-Cultural Comms</div>
        <div style={{ background: C.green, color: C.white, padding: 12, fontSize: 12, fontWeight: 700, letterSpacing: 0.2 }}>Distributed Leadership</div>
      </div>
      <div style={{ paddingTop: 12, borderTop: `2px solid ${C.black}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 700 }}>mcl.appstate.edu/ITL</div>
        <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, background: C.black, color: C.gold, padding: '8px 14px' }}>Apply&nbsp;→</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ */
/* Tagline studio — exploring the headline against the system   */
/* ------------------------------------------------------------ */
function TaglineCard({ bg, fg, accent, line1, line2, accentWord }) {
  // line2 may contain accentWord which gets the accent color treatment
  const renderLine2 = () => {
    if (!accentWord || !line2.includes(accentWord)) return line2;
    const [a, b] = line2.split(accentWord);
    return (<>{a}<span style={{ color: accent }}>{accentWord}</span>{b}</>);
  };
  return (
    <div style={{ background: bg, color: fg, padding: 22, fontFamily: FONT, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Kicker color={accent}>Tagline study</Kicker>
      <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.9, lineHeight: 1 }}>
        {line1}<br />{renderLine2()}
      </div>
      <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 700, opacity: 0.7 }}>App State ITL</div>
    </div>
  );
}

function TaglineStudio() {
  return (
    <div style={{ width: 720, height: 480, background: C.paper, padding: 24, fontFamily: FONT }}>
      <Kicker color={C.grayD}>Headline studies — same system, different voice</Kicker>
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 8, height: 410 }}>
        <TaglineCard bg={C.paper} fg={C.black} accent={C.blue} line1="Lead across" line2="borders." accentWord="across" />
        <TaglineCard bg={C.black} fg={C.white} accent={C.gold} line1="Leadership" line2="without borders." accentWord="without" />
        <TaglineCard bg={C.gold} fg={C.black} accent={C.blue} line1="Where culture" line2="meets capability." accentWord="meets" />
        <TaglineCard bg={C.blue} fg={C.white} accent={C.gold} line1="Real skills." line2="Real teams." accentWord="Real" />
        <TaglineCard bg={C.orange} fg={C.white} accent={C.black} line1="Five courses." line2="One portfolio." accentWord="One" />
        <TaglineCard bg={C.white} fg={C.black} accent={C.orange} line1="Beyond awareness." line2="Toward action." accentWord="Toward" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ */
/* Notes card                                                   */
/* ------------------------------------------------------------ */
function NotesCard() {
  return (
    <div style={{ width: 480, height: 540, background: C.white, color: C.black, padding: 26, fontFamily: FONT, border: `1px solid ${C.grayL}` }}>
      <Kicker color={C.grayD}>Direction notes</Kicker>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, marginTop: 6 }}>What changed in this round</div>
      <div style={{ height: 3, width: 40, background: C.gold, margin: '12px 0 18px' }}></div>

      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.55, color: C.grayD }}>
        <li><b style={{ color: C.black }}>Evergreen.</b> Tuition, semester labels, and start-term dates removed — anything that drifts year-to-year is out.</li>
        <li style={{ marginTop: 8 }}><b style={{ color: C.black }}>Online practicum, not study abroad.</b> The signature "abroad" beat is now <i>virtual collaboration with Okayama University, Japan</i>.</li>
        <li style={{ marginTop: 8 }}><b style={{ color: C.black }}>Anchored in CQ.</b> Cultural Intelligence (CQ Drive · Knowledge · Strategy · Action) becomes the spine of pillar 01; GLOBE is named alongside.</li>
        <li style={{ marginTop: 8 }}><b style={{ color: C.black }}>Portfolio over transcript.</b> Outcomes shift from credits-counted to artifacts produced — what an employer can actually look at.</li>
        <li style={{ marginTop: 8 }}><b style={{ color: C.black }}>Built for working pros.</b> Asynchronous-first language; "no stepping away from your career."</li>
        <li style={{ marginTop: 8 }}><b style={{ color: C.black }}>Course count.</b> 15 credits across 5 courses (was 13 — adjusted to match new plan).</li>
      </ul>

      <div style={{ marginTop: 20, fontSize: 11, color: C.grayD, lineHeight: 1.5 }}>
        <b style={{ color: C.black }}>Next up:</b> sign-off on copy, then a print-ready bi-fold + a matched social set
        (square, story, banner) in this same Color Grid system.
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ */
/* Canvas                                                        */
/* ------------------------------------------------------------ */
function App() {
  return (
    <DesignCanvas
      title="ITL Flyer · Color Grid (developed)"
      subtitle="Direction 03 carried forward — evergreen content, new program facts, headline studies, and a matched social card."
      background={C.paper}
    >
      <DCSection id="flyer" title="A · Single-page flyer (front + back, ~7.5×10)">
        <DCArtboard id="front" label="Front · cover" width={720} height={960}>
          <FlyerFront />
        </DCArtboard>
        <DCArtboard id="back" label="Back · inside" width={720} height={960}>
          <FlyerBack />
        </DCArtboard>
      </DCSection>

      <DCSection id="apps" title="B · Same system, different surfaces">
        <DCArtboard id="social" label="Square social — recruiting post" width={600} height={600}>
          <FlyerSocialSquare />
        </DCArtboard>
        <DCArtboard id="taglines" label="Headline studies — same system, different voice" width={720} height={480}>
          <TaglineStudio />
        </DCArtboard>
      </DCSection>

      <DCSection id="notes" title="C · What changed">
        <DCArtboard id="notes" label="Direction notes" width={480} height={540}>
          <NotesCard />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
