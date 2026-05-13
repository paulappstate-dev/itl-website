/* Final — Modern minimal signature: full + reply versions, no logo, funky & cool */

const FS_GOLD = '#FFCC00';
const FS_BLACK = '#010101';
const FS_DARK = '#4c4847';
const FS_MED = '#b2b3b3';
const FS_LIGHT = '#d6d6d7';

/* ----------------------------------------------------------------------- */
/* Full signature — modern-minimal, funky.                                 */
/* Vertical gold rule + name headline + black "▲ ITL" pill +               */
/* gold E/P chips on the contact strip. No logo, all email-safe HTML.      */
/* ----------------------------------------------------------------------- */
function buildFullSigHTML() {
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;color:#010101;">
  <tr>
    <td style="width:4px;background:#FFCC00;padding:0;border:0;font-size:0;line-height:0;">&nbsp;</td>
    <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
    <td style="vertical-align:top;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#010101;padding:2px 0;">
      <div style="font-size:22px;font-weight:700;letter-spacing:-0.3px;line-height:1.1;color:#010101;">Paul Wallace, <span style="font-weight:400;color:#4c4847;">Ph.D.</span></div>
      <div style="height:8px;line-height:8px;font-size:0;">&nbsp;</div>
      <div style="font-size:11px;font-family:Helvetica,Arial,sans-serif;">
        <span style="background:#010101;color:#FFCC00;padding:3px 8px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">&#9650;&nbsp;ITL</span>
        <span style="color:#4c4847;letter-spacing:1.4px;text-transform:uppercase;font-weight:600;">&nbsp;&nbsp;Program Coordinator</span>
      </div>
      <div style="height:14px;line-height:14px;font-size:0;">&nbsp;</div>
      <div style="font-size:13px;color:#010101;">Professor of Media, Technology, and Learning Design</div>
      <div style="font-size:13px;color:#010101;">International Leadership Graduate Certificate</div>
      <div style="font-size:12px;color:#4c4847;font-style:italic;">Fulbright Scholar Alumnus</div>
      <div style="height:12px;line-height:12px;font-size:0;">&nbsp;</div>
      <div style="font-size:11.5px;color:#4c4847;">Department of Media, Career Studies, and Leadership Development</div>
      <div style="font-size:11.5px;color:#4c4847;">Reich College of Education&nbsp;<span style="color:#FFCC00;font-weight:700;">/</span>&nbsp;Appalachian State University</div>
      <div style="height:10px;line-height:10px;font-size:0;">&nbsp;</div>
      <div style="font-size:11px;color:#4c4847;">ASU Box 32086&nbsp;&nbsp;&middot;&nbsp;&nbsp;151 College St. #212M&nbsp;&nbsp;&middot;&nbsp;&nbsp;Boone, North Carolina 28608</div>
      <div style="height:14px;line-height:14px;font-size:0;">&nbsp;</div>
      <div style="font-size:12.5px;">
        <span style="background:#FFCC00;color:#010101;font-weight:700;padding:2px 7px;font-size:10px;letter-spacing:1.4px;">E</span>&nbsp;<a href="mailto:wallacepr@appstate.edu" style="color:#010101;text-decoration:none;font-weight:600;">wallacepr@appstate.edu</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style="background:#FFCC00;color:#010101;font-weight:700;padding:2px 7px;font-size:10px;letter-spacing:1.4px;">P</span>&nbsp;<span style="color:#010101;">+1.828.262.6571</span>
      </div>
    </td>
  </tr>
</table>`;
}

/* ----------------------------------------------------------------------- */
/* Reply signature — modern-minimal short.                                 */
/* ----------------------------------------------------------------------- */
function buildReplySigHTML() {
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;color:#010101;">
  <tr>
    <td style="font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#010101;">
      <div style="font-size:15px;font-weight:700;color:#010101;letter-spacing:-0.1px;line-height:1.15;">Paul Wallace, <span style="font-weight:400;color:#4c4847;">Ph.D.</span></div>
      <div style="height:5px;line-height:5px;font-size:0;">&nbsp;</div>
      <div style="width:42px;height:3px;background:#FFCC00;font-size:0;line-height:0;">&nbsp;</div>
      <div style="height:8px;line-height:8px;font-size:0;">&nbsp;</div>
      <div style="color:#010101;">Professor of Media, Technology, and Learning Design</div>
      <div style="color:#4c4847;">Reich College of Education &middot; App State</div>
      <div style="height:6px;line-height:6px;font-size:0;">&nbsp;</div>
      <div>
        <a href="mailto:wallacepr@appstate.edu" style="color:#010101;text-decoration:none;">wallacepr@appstate.edu</a>
        <span style="color:#b2b3b3;">&nbsp;&middot;&nbsp;</span>
        <span style="color:#010101;">+1.828.262.6571</span>
      </div>
    </td>
  </tr>
</table>`;
}

const PLAINTEXT_FULL = `Paul Wallace, Ph.D.
▲ ITL · Program Coordinator
Professor of Media, Technology, and Learning Design
International Leadership Graduate Certificate
Fulbright Scholar Alumnus
Department of Media, Career Studies, and Leadership Development
Reich College of Education / Appalachian State University
ASU Box 32086 · 151 College St. #212M · Boone, North Carolina 28608
E  wallacepr@appstate.edu    P  +1.828.262.6571`;

const PLAINTEXT_REPLY = `Paul Wallace, Ph.D.
Professor of Media, Technology, and Learning Design
Reich College of Education · App State
wallacepr@appstate.edu  ·  +1.828.262.6571`;

/* ---------- UI ---------- */

function EmailFrame({ children, subject = "Re: ITL cohort planning — spring intake" }) {
  return (
    <div style={{
      width: '100%', maxWidth: 720, background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: FS_BLACK, border: `1px solid ${FS_LIGHT}`, borderRadius: 4,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)', overflow: 'hidden',
    }}>
      <div style={{ padding: '16px 24px 12px', borderBottom: `1px solid ${FS_LIGHT}` }}>
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{subject}</div>
        <div style={{ fontSize: 12, color: FS_DARK, display: 'flex', gap: 12 }}>
          <span><b style={{ color: FS_BLACK }}>Paul Wallace</b> &lt;wallacepr@appstate.edu&gt;</span>
          <span style={{ color: FS_MED }}>·</span>
          <span>to me</span>
          <span style={{ marginLeft: 'auto', color: FS_MED }}>10:42 AM</span>
        </div>
      </div>
      <div style={{ padding: '18px 24px 22px', fontSize: 13.5, lineHeight: 1.55, color: '#222' }}>
        {children}
      </div>
    </div>
  );
}

function CopyBlock({ html, plaintext }) {
  const [copied, setCopied] = React.useState(null);

  const copyHtml = async () => {
    try {
      const blob = new Blob([html], { type: 'text/html' });
      const textBlob = new Blob([plaintext], { type: 'text/plain' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob, 'text/plain': textBlob })]);
      setCopied('rich');
    } catch {
      await navigator.clipboard.writeText(html);
      setCopied('rich');
    }
    setTimeout(() => setCopied(null), 1800);
  };
  const copySource = async () => {
    await navigator.clipboard.writeText(html);
    setCopied('source');
    setTimeout(() => setCopied(null), 1800);
  };
  const copyPlain = async () => {
    await navigator.clipboard.writeText(plaintext);
    setCopied('plain');
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
        <button onClick={copyHtml} style={btnPrimary}>
          {copied === 'rich' ? '✓ Copied — paste into Gmail signature' : 'Copy formatted (paste into Gmail/Outlook)'}
        </button>
        <button onClick={copySource} style={btnGhost}>
          {copied === 'source' ? '✓ Copied source' : 'Copy HTML source'}
        </button>
        <button onClick={copyPlain} style={btnGhost}>
          {copied === 'plain' ? '✓ Copied' : 'Copy plain text'}
        </button>
      </div>
      <pre style={{
        background: '#0f0f10', color: '#e8e6df', padding: '14px 16px', margin: 0,
        fontSize: 11.5, lineHeight: 1.55, fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        borderRadius: 4, overflow: 'auto', maxHeight: 280, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
      }}>{html}</pre>
    </div>
  );
}

const btnPrimary = {
  appearance: 'none', border: 'none', background: FS_BLACK, color: '#fff',
  padding: '10px 16px', fontSize: 12, fontWeight: 600, fontFamily: 'Helvetica, Arial, sans-serif',
  cursor: 'pointer', borderRadius: 3, letterSpacing: 0.2,
};
const btnGhost = {
  appearance: 'none', border: `1px solid ${FS_LIGHT}`, background: '#fff', color: FS_BLACK,
  padding: '10px 14px', fontSize: 12, fontWeight: 500, fontFamily: 'Helvetica, Arial, sans-serif',
  cursor: 'pointer', borderRadius: 3,
};

const codeInline = {
  fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
  background: '#f4f3ee', padding: '1px 6px', borderRadius: 2, color: FS_BLACK,
};

function SigCard({ title, kicker, body, html, plaintext }) {
  return (
    <div style={{ background: '#fff', border: `1px solid ${FS_LIGHT}`, borderRadius: 6, overflow: 'hidden' }}>
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase', color: FS_DARK, fontWeight: 700 }}>{kicker}</div>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.3, marginTop: 4 }}>{title}</div>
        <div style={{ height: 3, width: 40, background: FS_GOLD, marginTop: 8 }}></div>
      </div>
      <div style={{ padding: '20px 24px 4px' }}>
        <div style={{ fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: FS_DARK, fontWeight: 600, marginBottom: 10 }}>Preview in mail client</div>
        <EmailFrame>{body}</EmailFrame>
      </div>
      <div style={{ padding: '20px 24px 24px' }}>
        <div style={{ fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: FS_DARK, fontWeight: 600, marginBottom: 10 }}>Output</div>
        <CopyBlock html={html} plaintext={plaintext} />
      </div>
    </div>
  );
}

function App() {
  const fullHtml = buildFullSigHTML();
  const replyHtml = buildReplySigHTML();

  const fullPreview = (
    <div>
      <p style={{ margin: '0 0 12px' }}>Hi Maya,</p>
      <p style={{ margin: '0 0 12px' }}>Thanks for your interest in the International Leadership Graduate Certificate. I've attached the program overview and a list of partner sites for next year's cohort.</p>
      <p style={{ margin: '0 0 22px' }}>Best,<br />Paul</p>
      <div dangerouslySetInnerHTML={{ __html: fullHtml }} />
    </div>
  );
  const replyPreview = (
    <div>
      <p style={{ margin: '0 0 12px' }}>Sounds good — see you Thursday.</p>
      <p style={{ margin: '0 0 22px' }}>—P</p>
      <div dangerouslySetInnerHTML={{ __html: replyHtml }} />
    </div>
  );

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px 80px', fontFamily: 'Helvetica, Arial, sans-serif', color: FS_BLACK }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: FS_DARK, fontWeight: 700 }}>Modern minimal · Final</div>
        <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -0.6, marginTop: 6, lineHeight: 1.1 }}>Email signature — production output</div>
        <div style={{ height: 4, width: 64, background: FS_GOLD, margin: '14px 0 18px' }}></div>
        <p style={{ margin: 0, maxWidth: 760, fontSize: 14, lineHeight: 1.6, color: FS_DARK }}>
          No logo, fully type-driven so it survives every mail client. The full version uses a vertical
          App State Gold rule, a chunky <span style={{ background: FS_BLACK, color: FS_GOLD, padding: '1px 6px', fontWeight: 700, fontSize: 11, letterSpacing: 1.4 }}>▲&nbsp;ITL</span> chip
          to flag your program, and gold <span style={{ background: FS_GOLD, color: FS_BLACK, padding: '1px 6px', fontWeight: 700, fontSize: 11, letterSpacing: 1.4 }}>E</span>&nbsp;/&nbsp;<span style={{ background: FS_GOLD, color: FS_BLACK, padding: '1px 6px', fontWeight: 700, fontSize: 11, letterSpacing: 1.4 }}>P</span> chips on the contact line.
          The reply version stays quiet: name headline, gold underline, two lines, contact.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 28 }}>
        <SigCard
          kicker="Full signature · for new emails"
          title="The complete one"
          body={fullPreview}
          html={fullHtml}
          plaintext={PLAINTEXT_FULL}
        />
        <SigCard
          kicker="Reply signature · for ongoing threads"
          title="The short one"
          body={replyPreview}
          html={replyHtml}
          plaintext={PLAINTEXT_REPLY}
        />
      </div>

      <div style={{ marginTop: 48, background: '#fff', border: `1px solid ${FS_LIGHT}`, borderRadius: 6, padding: '24px 28px' }}>
        <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: FS_DARK, fontWeight: 700 }}>Setup</div>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.3, marginTop: 4 }}>How to install</div>
        <div style={{ height: 3, width: 40, background: FS_GOLD, marginTop: 8, marginBottom: 18 }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <Step n="1" title="Gmail (web)">
            <p>Click <i>Copy formatted</i> on the version you want. In Gmail open <i>Settings → See all settings → General → Signature</i>, create a signature, and paste. Set the full version as default for new emails and the short one for replies/forwards.</p>
          </Step>
          <Step n="2" title="Outlook (web)">
            <p>Click <i>Copy formatted</i>, then in Outlook go to <i>Settings → Mail → Compose and reply</i>. Paste each version into a separately-named signature. Assign which is used for new vs. reply.</p>
          </Step>
          <Step n="3" title="Apple Mail">
            <p>Quickest path: paste the formatted signature into a new draft, send to yourself, then in Mail's <i>Signatures</i> pane copy the rendered signature out of the message and paste in.</p>
          </Step>
          <Step n="4" title="Outlook desktop (Windows)">
            <p>Use <i>Copy HTML source</i> and save as <code style={codeInline}>%appdata%\\Microsoft\\Signatures\\Wallace.htm</code> (filename matches a new signature you create in Outlook). Restart Outlook.</p>
          </Step>
          <Step n="5" title="Test it">
            <p>Send a test to yourself, then forward to a Gmail account, an Outlook account, and your phone. Confirm the gold chips and rule render — they're plain table cells with backgrounds, so they hold up almost anywhere.</p>
          </Step>
          <Step n="6" title="Plain-text fallback">
            <p>For mail clients that strip HTML, use the <i>Copy plain text</i> button. The chips become readable inline text (▲&nbsp;ITL · Program Coordinator).</p>
          </Step>
        </div>
      </div>

      <div style={{ marginTop: 32, fontSize: 12, color: FS_DARK, textAlign: 'center' }}>
        Brand colors per UComm primary palette — App State Gold #FFCC00, black #010101, neutral grays.
      </div>
    </div>
  );
}

function Step({ n, title, children }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: 26, fontWeight: 700, color: FS_GOLD, lineHeight: 1 }}>{n}</span>
        <span style={{ fontSize: 14, fontWeight: 700 }}>{title}</span>
      </div>
      <div style={{ fontSize: 12.5, lineHeight: 1.6, color: FS_DARK }}>{children}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
