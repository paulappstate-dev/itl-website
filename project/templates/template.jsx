/* App State — Course slide template explorations
   Three title-screen directions + one interior, on a 1920×1080 canvas.
   Constraint: App State palette, but NO black or gold backgrounds.
   Logo (block A) only appears on title screens.
*/

const C = {
  black:    '#1a1a1a',
  ink:      '#2a2825',
  white:    '#ffffff',
  paper:    '#f4f3ee',
  paperWarm:'#ece9e1',
  paperCool:'#eef0f3',
  rule:     '#dcd9d0',
  ruleSoft: '#e8e6df',
  gray:     '#7b7770',
  grayD:    '#4c4847',
  gold:     '#FFCC00',
  goldDeep: '#d7a527',
  blue:     '#03659c',
  blueDeep: '#024c75',
  blueSoft: '#dbe6ef',
  green:    '#537a6b',
  brick:    '#a8513a',
};

const FONT = 'Helvetica, "Helvetica Neue", Arial, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';

const W = 1920;
const H = 1080;

/* ------------------------------------------------------------ */
/* Shared bits                                                  */
/* ------------------------------------------------------------ */
function Kicker({ children, color = C.grayD, size = 18, gap = 4.5 }) {
  return (
    <div style={{
      fontSize: size,
      letterSpacing: gap,
      textTransform: 'uppercase',
      fontWeight: 700,
      color,
      fontFamily: FONT,
    }}>{children}</div>
  );
}

function BlockA({ height = 200, style = {} }) {
  return (
    <img
      src="block-a.png"
      alt="Appalachian State Mountaineers"
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  );
}

function Slide({ children, style = {} }) {
  return (
    <div style={{
      width: W,
      height: H,
      fontFamily: FONT,
      color: C.black,
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ============================================================ */
/* TITLE A — Editorial split                                    */
/* Big, confident type on paper. A single thick rule organizes  */
/* the page. Logo at top-right, restrained.                      */
/* ============================================================ */
function TitleA() {
  return (
    <Slide style={{ background: C.paper }}>
      {/* top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '56px 88px 0 88px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      }}>
        <Kicker color={C.grayD} size={20}>Appalachian State University</Kicker>
        <BlockA height={130} />
      </div>

      {/* gold rule under header */}
      <div style={{
        position: 'absolute', top: 230, left: 88, right: 88,
        height: 8, background: C.gold,
      }} />

      {/* course meta row */}
      <div style={{
        position: 'absolute', top: 264, left: 88, right: 88,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 18, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700,
        color: C.grayD,
      }}>
        <span>ITM 5990 · Section 101</span>
        <span>Spring 2026 · Lecture 04</span>
      </div>

      {/* Big title */}
      <div style={{
        position: 'absolute', left: 88, top: 380, right: 88,
      }}>
        <div style={{
          fontSize: 240,
          fontWeight: 800,
          letterSpacing: -10,
          lineHeight: 0.88,
          color: C.black,
        }}>
          Designing<br />
          for <span style={{ color: C.blue }}>trust</span>.
        </div>
      </div>

      {/* footer block */}
      <div style={{
        position: 'absolute', left: 88, bottom: 64, right: 88,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        borderTop: `2px solid ${C.black}`, paddingTop: 24,
      }}>
        <div style={{ display: 'flex', gap: 56 }}>
          <div>
            <Kicker size={14} gap={2.5}>Instructor</Kicker>
            <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>Dr. Pat Wallace</div>
          </div>
          <div>
            <Kicker size={14} gap={2.5}>Department</Kicker>
            <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>Information Technology &amp; Mgmt.</div>
          </div>
          <div>
            <Kicker size={14} gap={2.5}>Module</Kicker>
            <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>04 · Interface Ethics</div>
          </div>
        </div>
        <div style={{
          fontSize: 16, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700,
          color: C.grayD,
        }}>
          appstate.edu
        </div>
      </div>
    </Slide>
  );
}

/* ============================================================ */
/* TITLE B — Color block split                                  */
/* Left: muted App State blue panel with logo + meta            */
/* Right: white panel with title. Architectural and modern.      */
/* ============================================================ */
function TitleB() {
  return (
    <Slide style={{ background: C.white, display: 'flex' }}>
      {/* Left panel */}
      <div style={{
        width: 720, height: '100%',
        background: C.blue,
        color: C.white,
        padding: '72px 64px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative',
      }}>
        <div>
          <div style={{
            fontSize: 16, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 700,
            color: C.gold, opacity: 0.95,
          }}>
            Appalachian State University
          </div>
          <div style={{
            marginTop: 6,
            fontSize: 16, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 500,
            opacity: 0.75,
          }}>
            Walker College of Business
          </div>
        </div>

        {/* Logo middle */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <BlockA height={300} />
        </div>

        {/* meta */}
        <div>
          <div style={{ height: 6, width: 88, background: C.gold, marginBottom: 28 }} />
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 0.95 }}>
            ITM 5990
          </div>
          <div style={{ fontSize: 22, marginTop: 14, opacity: 0.85, letterSpacing: 0.4, lineHeight: 1.45 }}>
            Topics in Information<br />Technology &amp; Management
          </div>
          <div style={{
            marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', justifyContent: 'space-between',
            fontSize: 15, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700,
            opacity: 0.85,
          }}>
            <span>Spring 2026</span>
            <span>Lecture 04 / 28</span>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{
        flex: 1, padding: '72px 88px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative',
      }}>
        <Kicker color={C.blue} size={18} gap={4}>Today’s lecture</Kicker>
        <div style={{
          marginTop: 28,
          fontSize: 180,
          fontWeight: 800,
          letterSpacing: -7,
          lineHeight: 0.9,
          color: C.black,
        }}>
          Designing<br />for trust.
        </div>
        <div style={{
          marginTop: 36,
          fontSize: 26,
          lineHeight: 1.45,
          color: C.grayD,
          maxWidth: 760,
          fontWeight: 400,
        }}>
          How interface choices shape what users believe — and a working framework for spotting dark patterns in your own designs.
        </div>

        {/* bottom corner mark */}
        <div style={{
          position: 'absolute', bottom: 64, left: 88, right: 88,
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        }}>
          <div style={{ fontSize: 18, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700, color: C.grayD }}>
            Dr. Pat Wallace · 04
          </div>
          <div style={{
            fontFamily: MONO, fontSize: 16, letterSpacing: 0.2, color: C.gray,
          }}>
            01 / 01 — title
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ============================================================ */
/* TITLE C — Soft duotone, oversize numeral                     */
/* Cool paper bg, oversize lecture numeral as a graphic device. */
/* Logo bottom-left, tucked in.                                  */
/* ============================================================ */
function TitleC() {
  return (
    <Slide style={{ background: C.paperCool }}>
      {/* corner kicker */}
      <div style={{
        position: 'absolute', top: 56, left: 88, right: 88,
        display: 'flex', justifyContent: 'space-between',
      }}>
        <Kicker color={C.blue} size={20} gap={4}>Appalachian State · ITM 5990</Kicker>
        <Kicker color={C.grayD} size={20} gap={4}>Spring 2026</Kicker>
      </div>

      {/* Massive numeral */}
      <div style={{
        position: 'absolute', right: 60, top: 80,
        fontSize: 1100,
        fontWeight: 800,
        letterSpacing: -50,
        lineHeight: 0.78,
        color: C.blue,
        opacity: 0.10,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        04
      </div>

      {/* main content */}
      <div style={{
        position: 'absolute', left: 88, top: 280, right: 600,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 18,
          fontSize: 20, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 700,
          color: C.brick,
        }}>
          <span style={{ width: 56, height: 4, background: C.brick, display: 'inline-block' }} />
          Lecture 04 — Module II
        </div>

        <div style={{
          marginTop: 36,
          fontSize: 200,
          fontWeight: 800,
          letterSpacing: -8,
          lineHeight: 0.9,
          color: C.black,
        }}>
          Designing<br />
          for trust.
        </div>

        <div style={{
          marginTop: 40,
          fontSize: 26, lineHeight: 1.5, color: C.grayD,
          maxWidth: 880,
        }}>
          A working framework for spotting dark patterns in your own work — and four moves for designing interfaces that earn the benefit of the doubt.
        </div>
      </div>

      {/* bottom row: logo + instructor */}
      <div style={{
        position: 'absolute', left: 88, bottom: 64, right: 88,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <BlockA height={120} />
          <div>
            <Kicker size={13} gap={2.5}>Walker College of Business</Kicker>
            <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6, color: C.black }}>
              Dr. Pat Wallace
            </div>
            <div style={{ fontSize: 18, color: C.grayD, marginTop: 2 }}>
              wallacepr@appstate.edu
            </div>
          </div>
        </div>

        <div style={{
          fontFamily: MONO, fontSize: 16, color: C.gray, letterSpacing: 0.4,
          textAlign: 'right', lineHeight: 1.6,
        }}>
          appstate.edu / itm5990<br />
          <span style={{ color: C.brick }}>● live</span> &nbsp; tues + thurs 11:00
        </div>
      </div>
    </Slide>
  );
}

/* ============================================================ */
/* INTERIOR — Standard content slide                            */
/* Two-column body, kicker, headline, supporting list and pull. */
/* No logo. Persistent footer for nav context.                  */
/* ============================================================ */
function InteriorSlide() {
  const items = [
    ['01', 'Surface every cost', 'Fees, defaults, opt-outs, cancellation friction — make them visible at decision time, not after.'],
    ['02', 'Default to the user’s interest', 'When the safe choice and the profitable choice diverge, the safe choice is the default.'],
    ['03', 'Reversible by design', 'Anything a user can do in one click should be undoable in one click.'],
    ['04', 'Honest hierarchy', 'Visual weight follows actual importance — not the metric you’re trying to move this quarter.'],
  ];

  return (
    <Slide style={{ background: C.white }}>
      {/* top header bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '40px 88px 0 88px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${C.rule}`,
        paddingBottom: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{
            display: 'inline-block', background: C.black, color: C.gold,
            fontSize: 14, fontWeight: 800, letterSpacing: 2.5,
            padding: '6px 10px',
          }}>ITM 5990</span>
          <Kicker size={14} gap={2.5}>Module II · Lecture 04 — Designing for Trust</Kicker>
        </div>
        <div style={{
          fontFamily: MONO, fontSize: 14, letterSpacing: 0.4, color: C.gray,
        }}>
          12 / 36
        </div>
      </div>

      {/* Body */}
      <div style={{
        position: 'absolute', top: 152, left: 88, right: 88, bottom: 120,
        display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 88,
      }}>
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Kicker color={C.blue} size={18} gap={4}>Section 02 · Principles</Kicker>
          <div style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -3.5,
            lineHeight: 0.95,
            color: C.black,
          }}>
            Four moves for trustworthy interfaces.
          </div>

          <div style={{ marginTop: 40, fontSize: 22, lineHeight: 1.55, color: C.grayD, maxWidth: 540 }}>
            None of these require new technology. They require <span style={{ color: C.black, fontWeight: 700 }}>willingness to give up small wins</span> in exchange for users who keep coming back.
          </div>

          {/* Pull quote / callout */}
          <div style={{
            marginTop: 48,
            background: C.paper,
            borderLeft: `6px solid ${C.gold}`,
            padding: '24px 28px',
            maxWidth: 560,
          }}>
            <div style={{ fontSize: 22, lineHeight: 1.45, color: C.black, fontStyle: 'italic', fontWeight: 500 }}>
              “The trust ledger is balanced one micro-interaction at a time.”
            </div>
            <div style={{ fontSize: 14, marginTop: 12, letterSpacing: 2.5, textTransform: 'uppercase', color: C.grayD, fontWeight: 700 }}>
              — Wallace, Lecture 04
            </div>
          </div>
        </div>

        {/* Right column — numbered list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'flex-start' }}>
          {items.map(([n, t, d], i) => (
            <div key={n} style={{
              display: 'grid', gridTemplateColumns: '92px 1fr', gap: 28,
              padding: '26px 0',
              borderTop: i === 0 ? `2px solid ${C.black}` : `1px solid ${C.rule}`,
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 30, fontWeight: 700,
                color: C.blue, letterSpacing: 0.5, lineHeight: 1,
              }}>{n}</div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.6, color: C.black, lineHeight: 1.15 }}>
                  {t}
                </div>
                <div style={{ fontSize: 20, marginTop: 10, color: C.grayD, lineHeight: 1.5 }}>
                  {d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0 88px',
        height: 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: `1px solid ${C.rule}`,
        fontSize: 14, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700,
        color: C.grayD,
      }}>
        <span>Appalachian State University · Walker College of Business</span>
        <span>Spring 2026</span>
      </div>
    </Slide>
  );
}

/* ============================================================ */
/* Notes / direction card                                        */
/* ============================================================ */
function DirectionNotes() {
  const rows = [
    ['Title A · Editorial split', 'Paper background, oversize headline, single gold rule. Logo top-right at 130px. Most restrained — feels like a course pack cover.'],
    ['Title B · Color block split', 'App State blue panel anchors course identity (logo + course code). Right panel is the lecture title in white. Most architectural and reusable for any course.'],
    ['Title C · Duotone numeral', 'Cool paper background with a giant ghosted lecture numeral. Brick accent for the lecture marker. Most expressive — best for a lecture series with strong numbering.'],
    ['Interior', 'White, two-column. Kicker + headline left, numbered list right. Persistent footer (course + term) and slide counter. Logo deliberately omitted per brief.'],
  ];

  return (
    <div style={{
      width: 1200, height: 720, background: C.paperWarm, color: C.black,
      padding: 56, fontFamily: FONT, position: 'relative',
    }}>
      <Kicker color={C.grayD} size={16} gap={4}>App State course slide template — round 01</Kicker>
      <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -2, marginTop: 12, lineHeight: 1 }}>
        System notes &amp; rationale.
      </div>
      <div style={{ height: 6, width: 80, background: C.gold, margin: '24px 0 28px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', rowGap: 0 }}>
        {rows.map(([t, d], i) => (
          <React.Fragment key={t}>
            <div style={{
              padding: '20px 24px 20px 0',
              borderTop: `1px solid ${C.rule}`,
              fontSize: 18, fontWeight: 700, color: C.blue, letterSpacing: -0.2,
            }}>{t}</div>
            <div style={{
              padding: '20px 0',
              borderTop: `1px solid ${C.rule}`,
              fontSize: 17, color: C.grayD, lineHeight: 1.55,
            }}>{d}</div>
          </React.Fragment>
        ))}
      </div>

      <div style={{
        position: 'absolute', bottom: 40, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 20, borderTop: `2px solid ${C.black}`,
        fontSize: 14, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700,
        color: C.grayD,
      }}>
        <span>Constraints honored: no black/gold backgrounds · logo on title only</span>
        <span>1920 × 1080 · 16:9</span>
      </div>
    </div>
  );
}

/* ============================================================ */
/* Canvas                                                        */
/* ============================================================ */
function App() {
  return (
    <DesignCanvas
      title="App State · Course Slide Template — Round 01"
      subtitle="Three title-screen directions and one interior. White / paper / muted blue palette with App State gold and blue as accents. Logo on title slides only."
      background={C.paperWarm}
    >
      <DCSection id="titles" title="A · Title screens — three directions">
        <DCArtboard id="title-a" label="Direction A — Editorial split" width={W} height={H}>
          <TitleA />
        </DCArtboard>
        <DCArtboard id="title-b" label="Direction B — Color block split" width={W} height={H}>
          <TitleB />
        </DCArtboard>
        <DCArtboard id="title-c" label="Direction C — Duotone numeral" width={W} height={H}>
          <TitleC />
        </DCArtboard>
      </DCSection>

      <DCSection id="interior" title="B · Interior — content slide (one shared interior treatment)">
        <DCArtboard id="interior-1" label="Interior — numbered list + pull quote" width={W} height={H}>
          <InteriorSlide />
        </DCArtboard>
      </DCSection>

      <DCSection id="notes" title="C · Notes">
        <DCArtboard id="notes" label="System rationale" width={1200} height={720}>
          <DirectionNotes />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
