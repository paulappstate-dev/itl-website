/* Email signature variants for Paul Wallace */

const GOLD = '#FFCC00';
const BLACK = '#010101';
const DARK_GRAY = '#4c4847';
const MED_GRAY = '#b2b3b3';
const LIGHT_GRAY = '#d6d6d7';
const LAKE = '#03659c';

const INFO = {
  name: 'Paul Wallace, Ph.D.',
  title1: 'Professor of Media, Technology, and Learning Design',
  title2: 'Program Coordinator, International Leadership Graduate Certificate',
  title3: 'Fulbright Scholar Alumnus',
  dept: 'Department of Media, Career Studies, and Leadership Development',
  college: 'Reich College of Education',
  uni: 'Appalachian State University',
  addr1: 'ASU Box 32086',
  addr2: '151 College St. #212M',
  addr3: 'Boone, North Carolina 28608',
  email: 'wallacepr@appstate.edu',
  phone: '+1.828.262.6571',
};

/* Block A — official PNG (600x654, transparent). */
function BlockA({ height = 110, style }) {
  return (
    <img
      src="assets/block-a.png"
      alt="Appalachian State University Block A"
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  );
}

/* Realistic email-message frame so signatures appear in context (not floating). */
function EmailFrame({ children, height = 520 }) {
  return (
    <div style={{
      width: 720,
      height,
      background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: BLACK,
      display: 'flex',
      flexDirection: 'column',
      borderTop: `1px solid ${LIGHT_GRAY}`,
    }}>
      {/* faux email header */}
      <div style={{ padding: '18px 28px 14px', borderBottom: `1px solid ${LIGHT_GRAY}` }}>
        <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Re: ITL cohort planning — spring intake</div>
        <div style={{ fontSize: 12, color: DARK_GRAY, display: 'flex', gap: 14 }}>
          <span><b style={{ color: BLACK }}>Paul Wallace</b> &lt;wallacepr@appstate.edu&gt;</span>
          <span style={{ color: MED_GRAY }}>·</span>
          <span>to me</span>
          <span style={{ marginLeft: 'auto', color: MED_GRAY }}>10:42 AM</span>
        </div>
      </div>
      {/* faux email body */}
      <div style={{ padding: '20px 28px', fontSize: 14, lineHeight: 1.55, color: '#222', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ margin: '0 0 12px' }}>Hi Maya,</p>
        <p style={{ margin: '0 0 12px' }}>
          Thanks for your interest in the International Leadership Graduate Certificate. I've attached the
          program overview and a list of partner sites for next year's cohort. Happy to set up a quick call
          to walk through the application timeline.
        </p>
        <p style={{ margin: '0 0 24px' }}>Best,<br />Paul</p>
        {/* signature slot */}
        <div style={{ marginTop: 'auto' }}>{children}</div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Variant A — Classic stacked, thin gold rule                         */
/* ================================================================== */
function SigA() {
  return (
    <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <tbody>
        <tr>
          <td style={{ paddingRight: 22, verticalAlign: 'top', borderRight: `3px solid ${GOLD}`, width: 130 }}>
            <BlockA height={120} />
          </td>
          <td style={{ paddingLeft: 22, verticalAlign: 'top', fontSize: 12, lineHeight: 1.55, color: BLACK }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: BLACK, letterSpacing: 0.1 }}>{INFO.name}</div>
            <div style={{ color: BLACK, marginTop: 2 }}>{INFO.title1}</div>
            <div style={{ color: BLACK }}>{INFO.title2}</div>
            <div style={{ color: DARK_GRAY, fontStyle: 'italic' }}>{INFO.title3}</div>
            <div style={{ height: 8 }}></div>
            <div style={{ color: DARK_GRAY }}>{INFO.dept}</div>
            <div style={{ color: DARK_GRAY }}>{INFO.college} · {INFO.uni}</div>
            <div style={{ height: 8 }}></div>
            <div style={{ color: DARK_GRAY }}>{INFO.addr1} · {INFO.addr2}</div>
            <div style={{ color: DARK_GRAY }}>{INFO.addr3}</div>
            <div style={{ height: 8 }}></div>
            <div>
              <a href={`mailto:${INFO.email}`} style={{ color: BLACK, textDecoration: 'none', fontWeight: 600 }}>{INFO.email}</a>
              <span style={{ color: MED_GRAY }}> &nbsp;·&nbsp; </span>
              <span style={{ color: BLACK }}>{INFO.phone}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

/* ================================================================== */
/* Variant B — Modern minimal, name as headline w/ gold underline      */
/* ================================================================== */
function SigB() {
  return (
    <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12, color: BLACK }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: 'top' }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.2, lineHeight: 1.15 }}>Paul Wallace, <span style={{ fontWeight: 400, color: DARK_GRAY }}>Ph.D.</span></div>
            <div style={{ height: 6 }}></div>
            <div style={{ width: 48, height: 3, background: GOLD }}></div>
            <div style={{ height: 12 }}></div>
            <div style={{ fontSize: 12, lineHeight: 1.6, color: BLACK }}>
              <div>{INFO.title1}</div>
              <div>{INFO.title2}</div>
              <div style={{ color: DARK_GRAY }}>{INFO.title3}</div>
            </div>
            <div style={{ height: 12 }}></div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: DARK_GRAY }}>
              <div>{INFO.dept}</div>
              <div>{INFO.college} &nbsp;|&nbsp; {INFO.uni}</div>
              <div>{INFO.addr1} &nbsp;|&nbsp; {INFO.addr2} &nbsp;|&nbsp; {INFO.addr3}</div>
            </div>
            <div style={{ height: 10 }}></div>
            <div style={{ fontSize: 12 }}>
              <a href={`mailto:${INFO.email}`} style={{ color: BLACK, textDecoration: 'none', borderBottom: `1px solid ${GOLD}`, paddingBottom: 1 }}>{INFO.email}</a>
              <span style={{ color: MED_GRAY }}> &nbsp;&nbsp; </span>
              <span>{INFO.phone}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

/* ================================================================== */
/* Variant C — Two column, logo + colored card with gold band          */
/* ================================================================== */
function SigC() {
  return (
    <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: 'top', background: BLACK, padding: '18px 16px', width: 150 }}>
            <LogoSlot width={118} height={70} label={'Reich College\ntitlemark\n(white/reverse)'} style={{ background: `repeating-linear-gradient(135deg, #2a2a2a 0 6px, #1a1a1a 6px 12px)`, borderColor: '#444', color: '#888' }} />
            <div style={{ height: 10 }}></div>
            <div style={{ height: 4, background: GOLD, width: '100%' }}></div>
            <div style={{ height: 10 }}></div>
            <div style={{ color: GOLD, fontSize: 9, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', lineHeight: 1.4 }}>
              International<br />Leadership<br />Graduate<br />Certificate
            </div>
          </td>
          <td style={{ verticalAlign: 'top', padding: '18px 20px 18px 22px', fontSize: 12, lineHeight: 1.55, color: BLACK, background: '#fafaf7' }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: BLACK }}>{INFO.name}</div>
            <div style={{ fontSize: 12, color: BLACK, marginTop: 1 }}>{INFO.title1}</div>
            <div style={{ fontSize: 12, color: BLACK }}>{INFO.title2}</div>
            <div style={{ fontSize: 11, color: DARK_GRAY, fontStyle: 'italic', marginTop: 1 }}>{INFO.title3}</div>
            <div style={{ height: 10 }}></div>
            <div style={{ fontSize: 11, color: DARK_GRAY, lineHeight: 1.55 }}>
              <div>{INFO.dept}</div>
              <div>{INFO.college} &nbsp;|&nbsp; {INFO.uni}</div>
              <div style={{ height: 6 }}></div>
              <div>{INFO.addr1} &nbsp;|&nbsp; {INFO.addr2}</div>
              <div>{INFO.addr3}</div>
            </div>
            <div style={{ height: 12 }}></div>
            <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse', fontSize: 12 }}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: 14, color: BLACK }}><b style={{ color: DARK_GRAY, fontWeight: 600 }}>e</b> &nbsp;<a href={`mailto:${INFO.email}`} style={{ color: BLACK, textDecoration: 'none' }}>{INFO.email}</a></td>
                  <td style={{ color: BLACK }}><b style={{ color: DARK_GRAY, fontWeight: 600 }}>p</b> &nbsp;{INFO.phone}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

/* ================================================================== */
/* Variant D — Compact horizontal, single-row hierarchy                */
/* ================================================================== */
function SigD() {
  const Label = ({ children }) => <span style={{ color: MED_GRAY, fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 600, marginRight: 6 }}>{children}</span>;
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: BLACK, borderTop: `1px solid ${LIGHT_GRAY}`, paddingTop: 14, maxWidth: 640 }}>
      <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'top', paddingRight: 18, width: 78 }}>
              <BlockA height={78} />
            </td>
            <td style={{ verticalAlign: 'top', fontSize: 12, lineHeight: 1.5 }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{INFO.name} <span style={{ fontWeight: 400, color: DARK_GRAY, fontSize: 12 }}>· he/him</span></div>
              <div style={{ color: BLACK }}>{INFO.title1}</div>
              <div style={{ color: BLACK }}>{INFO.title2}</div>
              <div style={{ color: DARK_GRAY }}>{INFO.title3}</div>
              <div style={{ color: DARK_GRAY, marginTop: 4 }}>
                {INFO.dept} · {INFO.college}
              </div>
              <div style={{ color: DARK_GRAY }}>{INFO.uni}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px dashed ${LIGHT_GRAY}`, fontSize: 11, color: DARK_GRAY, display: 'flex', flexWrap: 'wrap', gap: '4px 18px' }}>
        <span><Label>e</Label><a href={`mailto:${INFO.email}`} style={{ color: BLACK, textDecoration: 'none' }}>{INFO.email}</a></span>
        <span><Label>p</Label>{INFO.phone}</span>
        <span><Label>office</Label>{INFO.addr2}, {INFO.addr3}</span>
        <span><Label>mail</Label>{INFO.addr1}</span>
      </div>
    </div>
  );
}

Object.assign(window, { SigA, SigB, SigC, SigD, EmailFrame, BlockA });
