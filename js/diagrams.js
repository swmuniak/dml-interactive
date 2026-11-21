/* ==========================================================================
   Disciple Making Lab — 16 Interactive Theme-Aware SVG Diagrams
   Every region is clickable via data-part="..." for dual-coded exploration.
   ========================================================================== */

window.DML_DIAGRAMS = (function () {
  function hi(activeKey, partKey, colorVar, fallbackOpacity) {
    const isAct = activeKey === partKey;
    return {
      strokeWidth: isAct ? 3.5 : 2,
      fillOpacity: isAct ? 0.28 : (fallbackOpacity !== undefined ? fallbackOpacity : 0.11),
      stroke: isAct ? colorVar : colorVar,
      filter: isAct ? "drop-shadow(0 0 6px " + colorVar + ")" : "none"
    };
  }

  function svgWrap(viewBox, inner) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="Interactive diagram">${inner}</svg>`;
  }

  const renderers = {
    "bowtie": (active) => {
      const l = hi(active, "left", "var(--terracotta)", 0.12);
      const c = hi(active, "center", "var(--gold)", 0.18);
      const r = hi(active, "right", "var(--primary)", 0.14);
      const cols = [
        { x: 420, ys: [122, 138] },
        { x: 468, ys: [109, 123, 137, 151] },
        { x: 516, ys: [97, 110, 123, 136, 149, 162] },
        { x: 557, ys: [104, 117, 130, 143, 156] },
        { x: 571, ys: [110, 123, 136, 149] },
        { x: 603, ys: [97, 110, 123, 136, 149, 162] },
        { x: 619, ys: [97, 110, 123, 136, 149, 162] }
      ];
      const peopleIcons = cols.map(col =>
        col.ys.map(y => `<use href="#bt-person" transform="translate(${col.x},${y})"/>`).join("")
      ).join("");
      return svgWrap("0 0 680 385", `
        <defs>
          <g id="bt-person">
            <circle cx="0" cy="-3.6" r="2.1" fill="var(--primary)"/>
            <path d="M-3,4.8 C-3,0.4 -1.8,-0.7 0,-0.7 C1.8,-0.7 3,0.4 3,4.8 Z" fill="var(--primary)"/>
          </g>
        </defs>

        <text x="165" y="23" font-size="14" font-weight="700" fill="var(--terracotta)" text-anchor="middle">Culture Making (Congregation)</text>
        <text x="518" y="23" font-size="14" font-weight="700" fill="var(--primary)" text-anchor="middle">Relational Apprenticeship</text>
        <text x="518" y="39" font-size="10.5" fill="var(--muted)" text-anchor="middle">Generational Multiplication (Disciples Making Disciples)</text>

        <g class="svg-part" data-part="left">
          <polygon points="45,50 285,130 45,210" fill="var(--terracotta)" fill-opacity="${l.fillOpacity}" stroke="var(--terracotta)" stroke-width="${l.strokeWidth}" style="filter:${l.filter}"/>
          <line x1="125" y1="77" x2="125" y2="183" stroke="var(--border-strong)" stroke-width="1.5"/>
          <line x1="205" y1="103" x2="205" y2="157" stroke="var(--border-strong)" stroke-width="1.5"/>
          <text x="85" y="134" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Attend</text>
          <text x="165" y="134" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Connect</text>
          <text x="242" y="134" font-size="11.5" font-weight="700" fill="var(--ink)" text-anchor="middle">Serve</text>
          <rect x="45" y="288" width="245" height="78" rx="8" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${l.strokeWidth}"/>
          <text x="168" y="312" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">Needs a PLAN</text>
          <text x="168" y="333" font-size="12" fill="var(--ink)" text-anchor="middle">Practices &bull; Language</text>
          <text x="168" y="351" font-size="12" fill="var(--ink)" text-anchor="middle">Artifacts &bull; Narratives</text>
        </g>

        <g class="svg-part" data-part="right">
          <polygon points="395,108 635,48 635,212 395,152" fill="var(--primary)" fill-opacity="${r.fillOpacity}" stroke="var(--primary)" stroke-width="${r.strokeWidth}" style="filter:${r.filter}"/>
          <line x1="445" y1="96" x2="445" y2="164" stroke="var(--border-strong)" stroke-width="1.5"/>
          <line x1="492" y1="84" x2="492" y2="176" stroke="var(--border-strong)" stroke-width="1.5"/>
          <line x1="540" y1="72" x2="540" y2="188" stroke="var(--border-strong)" stroke-width="1.5"/>
          <line x1="588" y1="60" x2="588" y2="200" stroke="var(--border-strong)" stroke-width="1.5"/>
          ${peopleIcons}
          <rect x="390" y="288" width="245" height="78" rx="8" fill="var(--card)" stroke="var(--primary)" stroke-width="${r.strokeWidth}"/>
          <text x="512" y="312" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">Needs a PATH</text>
          <text x="512" y="333" font-size="12" fill="var(--ink)" text-anchor="middle">Destination &bull; Growth Loop</text>
          <text x="512" y="351" font-size="12" fill="var(--ink)" text-anchor="middle">Weekly Rhythm &bull; 4 Habits</text>
        </g>

        <g class="svg-part" data-part="center">
          <circle cx="340" cy="130" r="56" fill="var(--card)" stroke="var(--gold)" stroke-width="${c.strokeWidth + 1}" style="filter:${c.filter}"/>
          <circle cx="340" cy="130" r="49" fill="var(--gold)" fill-opacity="${c.fillOpacity}"/>
          <circle cx="340" cy="95" r="3.4" fill="var(--gold)"/>
          <path d="M334.5,107 C334.5,101.2 336.8,99.5 340,99.5 C343.2,99.5 345.5,101.2 345.5,107 Z" fill="var(--gold)"/>
          <text x="340" y="123" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">SENT BODY</text>
          <text x="340" y="140" font-size="11.5" fill="var(--muted)" text-anchor="middle">Word &amp; Table</text>
          <text x="340" y="157" font-size="11.5" font-weight="700" fill="var(--gold)" text-anchor="middle">Disciplemakers</text>
        </g>

        <g>
          <rect x="45" y="226" width="590" height="48" rx="8" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.2"/>
          <text x="340" y="245" font-size="11" font-weight="700" fill="var(--muted)" text-anchor="middle" letter-spacing="0.04em">TYPICAL CHURCH PERCENTAGES (BASELINE DIAGNOSIS)</text>
          <text x="340" y="264" font-size="11.5" text-anchor="middle">
            <tspan fill="var(--ink)">100% Attend &rarr; 60% Connect &rarr; 30% Serve &rarr; </tspan><tspan font-weight="700" fill="var(--terracotta)">Only ~2% Multiplying</tspan><tspan fill="var(--muted)">  |  </tspan><tspan font-weight="700" fill="var(--primary)">Shift Goal: ~16% Tipping Point</tspan>
          </text>
        </g>
      `);
    },

    "gospel-definition": (active) => {
      const u = hi(active, "united", "var(--terracotta)", 0.13);
      const t = hi(active, "transformed", "var(--primary)", 0.13);
      const s = hi(active, "sent", "var(--gold)", 0.15);
      return svgWrap("0 0 640 270", `
        <g class="svg-part" data-part="united">
          <rect x="24" y="34" width="182" height="202" rx="12" fill="var(--terracotta)" fill-opacity="${u.fillOpacity}" stroke="var(--terracotta)" stroke-width="${u.strokeWidth}" style="filter:${u.filter}"/>
          <text x="115" y="66" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">CROSS • SAVIOR</text>
          <text x="115" y="96" font-size="15" font-weight="700" fill="var(--ink)" text-anchor="middle">1. IN CHRIST</text>
          <text x="115" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">Called by Father</text>
          <text x="115" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Justified by Faith</text>
          <text x="115" y="170" font-size="12" fill="var(--ink)" text-anchor="middle">United to Death &amp; Life</text>
          <text x="115" y="206" font-size="12" font-weight="600" fill="var(--muted)" text-anchor="middle">Rom 5:1; Gal 2:20</text>
        </g>
        <text x="218" y="140" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="transformed">
          <rect x="229" y="34" width="182" height="202" rx="12" fill="var(--primary)" fill-opacity="${t.fillOpacity}" stroke="var(--primary)" stroke-width="${t.strokeWidth}" style="filter:${t.filter}"/>
          <text x="320" y="66" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">LAVER • SANCTIFIER</text>
          <text x="320" y="96" font-size="15" font-weight="700" fill="var(--ink)" text-anchor="middle">2. LIKE CHRIST</text>
          <text x="320" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">Beholding Glory</text>
          <text x="320" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Transformed by Spirit</text>
          <text x="320" y="170" font-size="12" fill="var(--ink)" text-anchor="middle">Formed in Word &amp; Table</text>
          <text x="320" y="206" font-size="12" font-weight="600" fill="var(--muted)" text-anchor="middle">2 Cor 3:18; Acts 2:42</text>
        </g>
        <text x="423" y="140" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="sent">
          <rect x="434" y="34" width="182" height="202" rx="12" fill="var(--gold)" fill-opacity="${s.fillOpacity}" stroke="var(--gold)" stroke-width="${s.strokeWidth}" style="filter:${s.filter}"/>
          <text x="525" y="66" font-size="12" font-weight="700" fill="var(--gold)" text-anchor="middle">CROWN • COMING KING</text>
          <text x="525" y="96" font-size="15" font-weight="700" fill="var(--ink)" text-anchor="middle">3. FOR NEIGHBORS</text>
          <text x="525" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">Cross-Bearing Love</text>
          <text x="525" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Ambassadors of Grace</text>
          <text x="525" y="170" font-size="12" fill="var(--ink)" text-anchor="middle">Making Disciplemakers</text>
          <text x="525" y="206" font-size="12" font-weight="600" fill="var(--muted)" text-anchor="middle">Lk 9:23; 2 Cor 5:14–21</text>
        </g>
      `);
    },

    "bible-circle": (active) => {
      const sp = hi(active, "spirit", "var(--terracotta)", 0.14);
      const c1 = hi(active, "chew", "var(--primary)", 0.14);
      const c2 = hi(active, "digest", "var(--slate)", 0.14);
      const c3 = hi(active, "act", "var(--success)", 0.14);
      return svgWrap("0 0 600 320", `
        <g class="svg-part" data-part="chew">
          <path d="M98,118 A122,122 0 0,1 322,118 Z" fill="var(--primary)" fill-opacity="${c1.fillOpacity}" stroke="var(--primary)" stroke-width="${c1.strokeWidth}"/>
          <text x="210" y="76" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">1. CHEW (Context &amp; Christ)</text>
          <text x="210" y="98" font-size="12" fill="var(--ink)" text-anchor="middle">Plain meaning + Lk 24:27</text>
        </g>
        <g class="svg-part" data-part="digest">
          <path d="M98,118 L322,118 A122,122 0 0,1 322,202 L98,202 A122,122 0 0,1 98,118 Z" fill="var(--slate)" fill-opacity="${c2.fillOpacity}" stroke="var(--slate)" stroke-width="${c2.strokeWidth}"/>
          <text x="210" y="155" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">2. DIGEST (Heart &amp; Church)</text>
          <text x="210" y="177" font-size="12" fill="var(--ink)" text-anchor="middle">What convicts or comforts us?</text>
        </g>
        <g class="svg-part" data-part="act">
          <path d="M98,202 L322,202 A122,122 0 0,1 98,202 Z" fill="var(--success)" fill-opacity="${c3.fillOpacity}" stroke="var(--success)" stroke-width="${c3.strokeWidth}"/>
          <text x="210" y="236" font-size="13" font-weight="700" fill="var(--success)" text-anchor="middle">3. ACT (Obey &amp; Share)</text>
          <text x="210" y="256" font-size="12" fill="var(--ink)" text-anchor="middle">48-hr step + Who will I tell?</text>
        </g>
        <g class="svg-part" data-part="spirit">
          <line x1="210" y1="24" x2="210" y2="294" stroke="var(--terracotta)" stroke-width="${sp.strokeWidth + 1}" stroke-dasharray="6,4"/>
          <polygon points="202,288 218,288 210,305" fill="var(--terracotta)"/>
          <rect x="362" y="54" width="214" height="212" rx="10" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${sp.strokeWidth}"/>
          <text x="469" y="84" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">Holy Spirit Illumination</text>
          <text x="380" y="114" font-size="12" fill="var(--ink)">&bull; Vertical arrow unites all 3</text>
          <text x="380" y="138" font-size="12" fill="var(--ink)">&bull; Guarded by context</text>
          <text x="380" y="162" font-size="12" fill="var(--ink)">&bull; Tested in community</text>
          <line x1="380" y1="184" x2="558" y2="184" stroke="var(--border)"/>
          <text x="469" y="210" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">Seeker DBS Toggle:</text>
          <text x="469" y="232" font-size="12" fill="var(--muted)" text-anchor="middle">Notice / God / Us / Test</text>
        </g>
      `);
    },

    "prayer-wheel": (active) => {
      const h = hi(active, "hub", "var(--terracotta)", 0.16);
      const u = hi(active, "upward", "var(--primary)", 0.13);
      const i = hi(active, "inward", "var(--slate)", 0.13);
      const r = hi(active, "ring", "var(--gold)", 0.14);
      return svgWrap("0 0 600 330", `
        <g class="svg-part" data-part="ring">
          <circle cx="205" cy="175" r="142" fill="var(--gold)" fill-opacity="${r.fillOpacity}" stroke="var(--gold)" stroke-width="${r.strokeWidth}" stroke-dasharray="6,4"/>
          <text x="205" y="24" font-size="12" font-weight="700" fill="var(--gold)" text-anchor="middle">2-Min Ring: Praise • Confess • Ask • Go</text>
        </g>
        <g class="svg-part" data-part="upward">
          <path d="M90,175 A115,115 0 0,1 320,175 L205,175 Z" fill="var(--primary)" fill-opacity="${u.fillOpacity}" stroke="var(--primary)" stroke-width="${u.strokeWidth}"/>
          <text x="140" y="132" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Deliverance</text>
          <text x="270" y="132" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Kingdom</text>
          <text x="205" y="102" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">Character</text>
        </g>
        <g class="svg-part" data-part="inward">
          <path d="M90,175 A115,115 0 0,0 320,175 L205,175 Z" fill="var(--slate)" fill-opacity="${i.fillOpacity}" stroke="var(--slate)" stroke-width="${i.strokeWidth}"/>
          <text x="140" y="226" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Guidance</text>
          <text x="270" y="226" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Provision</text>
          <text x="205" y="266" font-size="12" font-weight="700" fill="var(--slate)" text-anchor="middle">Forgive &amp; Extend</text>
        </g>
        <g class="svg-part" data-part="hub">
          <polygon points="172,56 238,56 205,100" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${h.strokeWidth}"/>
          <text x="205" y="75" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">FATHER</text>
          <circle cx="205" cy="175" r="46" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${h.strokeWidth}"/>
          <circle cx="205" cy="175" r="42" fill="var(--terracotta)" fill-opacity="${h.fillOpacity}"/>
          <text x="205" y="170" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">In Christ</text>
          <text x="205" y="188" font-size="12" fill="var(--ink)" text-anchor="middle">+ Lament</text>
        </g>
        <g class="svg-part" data-part="ring">
          <rect x="378" y="64" width="202" height="218" rx="10" fill="var(--card)" stroke="var(--gold)" stroke-width="1.8"/>
          <text x="479" y="92" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">Three Anchors</text>
          <text x="396" y="122" font-size="12" font-weight="600" fill="var(--ink)">1. Worship-based</text>
          <text x="396" y="146" font-size="12" font-weight="600" fill="var(--ink)">2. Scripture-fed</text>
          <text x="396" y="170" font-size="12" font-weight="600" fill="var(--ink)">3. Spirit-led</text>
          <line x1="396" y1="192" x2="562" y2="192" stroke="var(--border)"/>
          <text x="479" y="218" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">Cross-Centered Examen</text>
          <text x="479" y="238" font-size="12" fill="var(--muted)" text-anchor="middle">Gratitude • Confession •</text>
          <text x="479" y="256" font-size="12" fill="var(--muted)" text-anchor="middle">Discernment • Entrusting</text>
        </g>
      `);
    },

    "jesus-pattern": (active) => {
      const up = hi(active, "up", "var(--primary)", 0.14);
      const inn = hi(active, "in", "var(--slate)", 0.14);
      const out = hi(active, "out", "var(--gold)", 0.14);
      const dn = hi(active, "down", "var(--terracotta)", 0.18);
      return svgWrap("0 0 580 320", `
        <circle cx="290" cy="168" r="126" fill="none" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="5,5"/>
        <polygon points="290,54 148,266 432,266" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="2"/>
        <g class="svg-part" data-part="up">
          <circle cx="290" cy="54" r="36" fill="var(--card)" stroke="var(--primary)" stroke-width="${up.strokeWidth}"/>
          <circle cx="290" cy="54" r="33" fill="var(--primary)" fill-opacity="${up.fillOpacity}"/>
          <text x="290" y="50" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">UP</text>
          <text x="290" y="67" font-size="12" fill="var(--ink)" text-anchor="middle">Father</text>
        </g>
        <g class="svg-part" data-part="out">
          <circle cx="148" cy="266" r="38" fill="var(--card)" stroke="var(--gold)" stroke-width="${out.strokeWidth}"/>
          <circle cx="148" cy="266" r="35" fill="var(--gold)" fill-opacity="${out.fillOpacity}"/>
          <text x="148" y="262" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">OUT</text>
          <text x="148" y="279" font-size="12" fill="var(--ink)" text-anchor="middle">Neighbors</text>
        </g>
        <g class="svg-part" data-part="in">
          <circle cx="432" cy="266" r="38" fill="var(--card)" stroke="var(--slate)" stroke-width="${inn.strokeWidth}"/>
          <circle cx="432" cy="266" r="35" fill="var(--slate)" fill-opacity="${inn.fillOpacity}"/>
          <text x="432" y="262" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">IN</text>
          <text x="432" y="279" font-size="12" fill="var(--ink)" text-anchor="middle">Church</text>
        </g>
        <g class="svg-part" data-part="down">
          <circle cx="290" cy="190" r="46" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${dn.strokeWidth}"/>
          <circle cx="290" cy="190" r="42" fill="var(--terracotta)" fill-opacity="${dn.fillOpacity}"/>
          <line x1="290" y1="162" x2="290" y2="196" stroke="var(--terracotta)" stroke-width="3.5"/>
          <line x1="276" y1="175" x2="304" y2="175" stroke="var(--terracotta)" stroke-width="3.5"/>
          <text x="290" y="216" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">DOWN (Cross)</text>
        </g>
      `);
    },

    "training-triangle": (active) => {
      const tr = hi(active, "truth", "var(--slate)", 0.14);
      const im = hi(active, "imitation", "var(--primary)", 0.15);
      const mu = hi(active, "multiplication", "var(--terracotta)", 0.14);
      return svgWrap("0 0 600 310", `
        <line x1="300" y1="68" x2="145" y2="232" stroke="var(--danger)" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="180" y="138" font-size="12" font-weight="700" fill="var(--danger)" text-anchor="middle">No Classroom Shortcut!</text>
        <line x1="300" y1="68" x2="455" y2="232" stroke="var(--primary)" stroke-width="3.5"/>
        <line x1="455" y1="232" x2="145" y2="232" stroke="var(--primary)" stroke-width="3.5"/>

        <g class="svg-part" data-part="truth">
          <rect x="200" y="22" width="200" height="62" rx="10" fill="var(--card)" stroke="var(--slate)" stroke-width="${tr.strokeWidth}"/>
          <rect x="200" y="22" width="200" height="62" rx="10" fill="var(--slate)" fill-opacity="${tr.fillOpacity}"/>
          <text x="300" y="48" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">1. BIBLICAL TRUTH</text>
          <text x="300" y="69" font-size="12" fill="var(--ink)" text-anchor="middle">Rooted in God's Word</text>
        </g>

        <g class="svg-part" data-part="imitation">
          <rect x="355" y="210" width="215" height="72" rx="10" fill="var(--card)" stroke="var(--primary)" stroke-width="${im.strokeWidth}"/>
          <rect x="355" y="210" width="215" height="72" rx="10" fill="var(--primary)" fill-opacity="${im.fillOpacity}"/>
          <text x="462" y="238" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">2. IMITATION (Life-on-Life)</text>
          <text x="462" y="259" font-size="12" fill="var(--ink)" text-anchor="middle">"Walk with me, watch me"</text>
        </g>

        <g class="svg-part" data-part="multiplication">
          <rect x="30" y="210" width="235" height="72" rx="10" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${mu.strokeWidth}"/>
          <rect x="30" y="210" width="235" height="72" rx="10" fill="var(--terracotta)" fill-opacity="${mu.fillOpacity}"/>
          <text x="148" y="238" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">3. FAITHFUL MULTIPLICATION</text>
          <text x="148" y="259" font-size="12" fill="var(--ink)" text-anchor="middle">Guard &amp; entrust (2 Tim 2:2)</text>
        </g>
      `);
    },

    "reality-audit": (active) => {
      const pp = hi(active, "pathplan", "var(--slate)", 0.14);
      const pr = hi(active, "pruning", "var(--terracotta)", 0.13);
      const fr = hi(active, "fruit", "var(--success)", 0.13);
      const lm = hi(active, "lament", "var(--gold)", 0.14);
      const op = hi(active, "opendoor", "var(--primary)", 0.14);
      return svgWrap("0 0 640 340", `
        <g class="svg-part" data-part="pathplan">
          <rect x="40" y="14" width="560" height="52" rx="8" fill="var(--slate)" fill-opacity="${pp.fillOpacity}" stroke="var(--slate)" stroke-width="${pp.strokeWidth}"/>
          <text x="320" y="37" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">Horizontal "What Is" Strip: Current PATH &amp; PLAN</text>
          <text x="320" y="55" font-size="12" fill="var(--ink)" text-anchor="middle">Destination &bull; Map &bull; Groups &bull; Tools &bull; Existing Weekly Calendar</text>
        </g>

        <text x="320" y="88" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">WITHIN OUR STEWARDSHIP (Internal)</text>
        <text x="320" y="328" font-size="12" font-weight="700" fill="var(--muted)" text-anchor="middle">BEYOND OUR CONTROL (Providence / External)</text>
        <text x="34" y="198" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle" transform="rotate(-90,34,198)">GRIEF &amp; FRICTION</text>
        <text x="606" y="198" font-size="12" font-weight="700" fill="var(--success)" text-anchor="middle" transform="rotate(-90,606,198)">BEARING FRUIT</text>

        <g class="svg-part" data-part="pruning">
          <rect x="65" y="98" width="248" height="100" rx="6" fill="var(--terracotta)" fill-opacity="${pr.fillOpacity}" stroke="var(--terracotta)" stroke-width="${pr.strokeWidth}"/>
          <text x="189" y="136" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">NEEDS PRUNING</text>
          <text x="189" y="158" font-size="12" fill="var(--ink)" text-anchor="middle">Repent, simplify, or STOP clutter</text>
        </g>
        <g class="svg-part" data-part="fruit">
          <rect x="327" y="98" width="248" height="100" rx="6" fill="var(--success)" fill-opacity="${fr.fillOpacity}" stroke="var(--success)" stroke-width="${fr.strokeWidth}"/>
          <text x="451" y="136" font-size="13" font-weight="700" fill="var(--success)" text-anchor="middle">STEWARDED FRUIT</text>
          <text x="451" y="158" font-size="12" fill="var(--ink)" text-anchor="middle">Thank God &amp; cultivate further</text>
        </g>
        <g class="svg-part" data-part="lament">
          <rect x="65" y="208" width="248" height="100" rx="6" fill="var(--gold)" fill-opacity="${lm.fillOpacity}" stroke="var(--gold)" stroke-width="${lm.strokeWidth}"/>
          <text x="189" y="246" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">LAMENT &amp; ENDURANCE</text>
          <text x="189" y="268" font-size="12" fill="var(--ink)" text-anchor="middle">Suffering is NOT moral failure</text>
        </g>
        <g class="svg-part" data-part="opendoor">
          <rect x="327" y="208" width="248" height="100" rx="6" fill="var(--primary)" fill-opacity="${op.fillOpacity}" stroke="var(--primary)" stroke-width="${op.strokeWidth}"/>
          <text x="451" y="246" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">OPEN DOOR</text>
          <text x="451" y="268" font-size="12" fill="var(--ink)" text-anchor="middle">Prayerful discernment (Col 4:3)</text>
        </g>
      `);
    },

    "pruning-curve": (active) => {
      const ax = hi(active, "axes", "var(--slate)", 0.13);
      const gt = hi(active, "gate", "var(--terracotta)", 0.16);
      const gr = hi(active, "grace", "var(--success)", 0.14);
      return svgWrap("0 0 600 300", `
        <g class="svg-part" data-part="axes">
          <line x1="78" y1="242" x2="555" y2="242" stroke="var(--slate)" stroke-width="${ax.strokeWidth}"/>
          <line x1="78" y1="36" x2="78" y2="242" stroke="var(--slate)" stroke-width="${ax.strokeWidth}"/>
          <text x="316" y="272" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">Faithful Sowing &amp; Weekly Habits Over Time</text>
          <text x="38" y="138" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle" transform="rotate(-90,38,138)">Generational Fruit</text>
        </g>
        <g class="svg-part" data-part="grace">
          <path d="M78,224 C180,220 235,205 280,180 C350,140 420,95 535,52" fill="none" stroke="var(--success)" stroke-width="${gr.strokeWidth + 2}"/>
          <rect x="338" y="162" width="212" height="58" rx="8" fill="var(--success)" fill-opacity="${gr.fillOpacity}" stroke="var(--success)" stroke-width="${gr.strokeWidth}"/>
          <text x="444" y="186" font-size="12" font-weight="700" fill="var(--success)" text-anchor="middle">"Only God gives growth"</text>
          <text x="444" y="206" font-size="12" fill="var(--ink)" text-anchor="middle">Mk 4:26–29 • 1 Cor 3:7</text>
        </g>
        <g class="svg-part" data-part="gate">
          <line x1="280" y1="42" x2="280" y2="242" stroke="var(--terracotta)" stroke-width="2.5" stroke-dasharray="6,4"/>
          <rect x="172" y="34" width="216" height="56" rx="8" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${gt.strokeWidth}"/>
          <rect x="172" y="34" width="216" height="56" rx="8" fill="var(--terracotta)" fill-opacity="${gt.fillOpacity}"/>
          <text x="280" y="57" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">PRUNE / STOP GATE</text>
          <text x="280" y="77" font-size="12" fill="var(--ink)" text-anchor="middle">Retire 1–2 low-fruit programs</text>
        </g>
      `);
    },

    "oikos-bridge": (active) => {
      const oi = hi(active, "oikos", "var(--primary)", 0.13);
      const st = hi(active, "story", "var(--terracotta)", 0.13);
      const db = hi(active, "dbs", "var(--success)", 0.13);
      return svgWrap("0 0 640 280", `
        <g class="svg-part" data-part="oikos">
          <rect x="20" y="28" width="182" height="224" rx="12" fill="var(--primary)" fill-opacity="${oi.fillOpacity}" stroke="var(--primary)" stroke-width="${oi.strokeWidth}"/>
          <text x="111" y="56" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">1. Oikos Map</text>
          <circle cx="111" cy="126" r="46" fill="var(--card)" stroke="var(--primary)" stroke-width="1.5"/>
          <line x1="65" y1="126" x2="157" y2="126" stroke="var(--border-strong)"/>
          <line x1="111" y1="80" x2="111" y2="172" stroke="var(--border-strong)"/>
          <text x="88" y="114" font-size="12" fill="var(--ink)" text-anchor="middle">Live</text>
          <text x="134" y="114" font-size="12" fill="var(--ink)" text-anchor="middle">Work</text>
          <text x="88" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Learn</text>
          <text x="134" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Play</text>
          <text x="111" y="206" font-size="12" fill="var(--ink)" text-anchor="middle">Pray daily for 3–5</text>
          <text x="111" y="226" font-size="12" fill="var(--muted)" text-anchor="middle">neighbors by name</text>
        </g>
        <text x="215" y="146" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="story">
          <rect x="229" y="28" width="182" height="224" rx="12" fill="var(--terracotta)" fill-opacity="${st.fillOpacity}" stroke="var(--terracotta)" stroke-width="${st.strokeWidth}"/>
          <text x="320" y="56" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">2. 3-Min Story</text>
          <text x="320" y="102" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Life before Christ</text>
          <text x="320" y="136" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">+ Cross &amp; Rescue +</text>
          <text x="320" y="170" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">New grace today</text>
          <text x="320" y="218" font-size="12" fill="var(--muted)" text-anchor="middle">Plain, jargon-free</text>
        </g>
        <text x="424" y="146" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="dbs">
          <rect x="438" y="28" width="182" height="224" rx="12" fill="var(--success)" fill-opacity="${db.fillOpacity}" stroke="var(--success)" stroke-width="${db.strokeWidth}"/>
          <text x="529" y="56" font-size="13" font-weight="700" fill="var(--success)" text-anchor="middle">3. Seeker DBS</text>
          <text x="529" y="96" font-size="12" fill="var(--ink)" text-anchor="middle">1. What stands out?</text>
          <text x="529" y="124" font-size="12" fill="var(--ink)" text-anchor="middle">2. Shows about God?</text>
          <text x="529" y="152" font-size="12" fill="var(--ink)" text-anchor="middle">3. Shows about us?</text>
          <text x="529" y="180" font-size="12" fill="var(--ink)" text-anchor="middle">4. One step to test?</text>
          <text x="529" y="218" font-size="12" font-weight="600" fill="var(--success)" text-anchor="middle">Look for Luke 10 peace</text>
        </g>
      `);
    },

    "stakeholder-bridge": (active) => {
      const op = hi(active, "onepager", "var(--primary)", 0.13);
      const mx = hi(active, "matrix", "var(--gold)", 0.14);
      const lg = hi(active, "legacy", "var(--terracotta)", 0.13);
      return svgWrap("0 0 640 270", `
        <g class="svg-part" data-part="onepager">
          <rect x="24" y="34" width="182" height="202" rx="10" fill="var(--primary)" fill-opacity="${op.fillOpacity}" stroke="var(--primary)" stroke-width="${op.strokeWidth}"/>
          <text x="115" y="68" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">1. Plain 1-Pager</text>
          <text x="115" y="102" font-size="12" fill="var(--ink)" text-anchor="middle">Zero consulting jargon</text>
          <text x="115" y="132" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Why it matters</text>
          <text x="115" y="156" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; What people experience</text>
          <text x="115" y="180" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; What stays / stops</text>
        </g>
        <g class="svg-part" data-part="matrix">
          <rect x="229" y="34" width="182" height="202" rx="10" fill="var(--gold)" fill-opacity="${mx.fillOpacity}" stroke="var(--gold)" stroke-width="${mx.strokeWidth}"/>
          <text x="320" y="68" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">2. Listen Early</text>
          <text x="320" y="102" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Elder Board</text>
          <text x="320" y="128" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Non-Lab Staff</text>
          <text x="320" y="154" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Kids &amp; Youth Leads</text>
          <text x="320" y="180" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Veteran Group Hosts</text>
          <text x="320" y="212" font-size="12" font-weight="600" fill="var(--muted)" text-anchor="middle">Shared Early Ownership</text>
        </g>
        <g class="svg-part" data-part="legacy">
          <rect x="434" y="34" width="182" height="202" rx="10" fill="var(--terracotta)" fill-opacity="${lg.fillOpacity}" stroke="var(--terracotta)" stroke-width="${lg.strokeWidth}"/>
          <text x="525" y="68" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">3. Legacy Group Paths</text>
          <text x="525" y="106" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">A) Convert to weekly</text>
          <text x="525" y="136" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">B) Hybridize 1 habit</text>
          <text x="525" y="166" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">C) Bless &amp; Sunset</text>
          <text x="525" y="212" font-size="12" font-weight="700" fill="var(--danger)" text-anchor="middle">No Status Lanyards!</text>
        </g>
      `);
    },

    "growth-loop": (active) => {
      const p1 = hi(active, "d1", "var(--slate)", 0.13);
      const p2 = hi(active, "d2", "var(--terracotta)", 0.15);
      const p3 = hi(active, "d3", "var(--gold)", 0.14);
      const p4 = hi(active, "d4", "var(--success)", 0.14);
      return svgWrap("0 0 600 320", `
        <g class="svg-part" data-part="d1">
          <rect x="30" y="24" width="242" height="114" rx="10" fill="var(--slate)" fill-opacity="${p1.fillOpacity}" stroke="var(--slate)" stroke-width="${p1.strokeWidth}"/>
          <text x="151" y="54" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">1. Humble Beginner (D1/L1)</text>
          <text x="151" y="78" font-size="12" fill="var(--ink)" text-anchor="middle">Directive: "I do, you watch"</text>
          <text x="151" y="102" font-size="12" fill="var(--muted)" text-anchor="middle">Clear modeling &amp; patience</text>
        </g>
        <text x="300" y="84" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="d2">
          <rect x="328" y="24" width="242" height="114" rx="10" fill="var(--terracotta)" fill-opacity="${p2.fillOpacity}" stroke="var(--terracotta)" stroke-width="${p2.strokeWidth}"/>
          <text x="449" y="54" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">2. Friction Valley (D2/L2)</text>
          <text x="449" y="78" font-size="12" fill="var(--ink)" text-anchor="middle">Shepherding: "I do, you help"</text>
          <text x="449" y="102" font-size="12" fill="var(--terracotta)" text-anchor="middle">Sin relapse, grief, "I quit"</text>
        </g>
        <text x="449" y="164" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&darr;</text>
        <g class="svg-part" data-part="d3">
          <rect x="328" y="182" width="242" height="114" rx="10" fill="var(--gold)" fill-opacity="${p3.fillOpacity}" stroke="var(--gold)" stroke-width="${p3.strokeWidth}"/>
          <text x="449" y="212" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">3. Co-Laborer (D3/L3)</text>
          <text x="449" y="236" font-size="12" fill="var(--ink)" text-anchor="middle">Coaching: "You do, I help"</text>
          <text x="449" y="260" font-size="12" fill="var(--muted)" text-anchor="middle">Guard vs. Over-Functioning</text>
        </g>
        <text x="300" y="244" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&larr;</text>
        <g class="svg-part" data-part="d4">
          <rect x="30" y="182" width="242" height="114" rx="10" fill="var(--success)" fill-opacity="${p4.fillOpacity}" stroke="var(--success)" stroke-width="${p4.strokeWidth}"/>
          <text x="151" y="212" font-size="13" font-weight="700" fill="var(--success)" text-anchor="middle">4. Spirit-Dependent Maturity</text>
          <text x="151" y="236" font-size="12" fill="var(--ink)" text-anchor="middle">Empowering: "You do, I cheer"</text>
          <text x="151" y="260" font-size="12" fill="var(--muted)" text-anchor="middle">Abiding deeper in John 15:5</text>
        </g>
        <text x="151" y="164" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">&uarr; Domain-Specific &bull; Never Autonomous</text>
      `);
    },

    "napkin-rubric": (active) => {
      const ln = hi(active, "lenses", "var(--primary)", 0.13);
      const rb = hi(active, "rubric", "var(--gold)", 0.14);
      const ex = hi(active, "exemplar", "var(--terracotta)", 0.13);
      return svgWrap("0 0 640 280", `
        <g class="svg-part" data-part="lenses">
          <rect x="24" y="22" width="592" height="96" rx="10" fill="var(--primary)" fill-opacity="${ln.fillOpacity}" stroke="var(--primary)" stroke-width="${ln.strokeWidth}"/>
          <text x="122" y="54" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">PICTURE</text>
          <text x="122" y="76" font-size="12" fill="var(--ink)" text-anchor="middle">Shows how to act</text>
          <text x="320" y="54" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">MIRROR</text>
          <text x="320" y="76" font-size="12" fill="var(--ink)" text-anchor="middle">Examines my heart</text>
          <text x="518" y="54" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">WINDOW</text>
          <text x="518" y="76" font-size="12" fill="var(--ink)" text-anchor="middle">Opens eyes to neighbors</text>
        </g>
        <g class="svg-part" data-part="rubric">
          <rect x="24" y="136" width="320" height="122" rx="10" fill="var(--gold)" fill-opacity="${rb.fillOpacity}" stroke="var(--gold)" stroke-width="${rb.strokeWidth}"/>
          <text x="184" y="162" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">5-Point Napkin Quality Gate</text>
          <text x="42" y="186" font-size="12" fill="var(--ink)">1. Simple (&lt; 60 sec draw) &bull; 2. Visual cues</text>
          <text x="42" y="208" font-size="12" fill="var(--ink)">3. Process how-to &bull; 4. Layperson teaches (3m)</text>
          <text x="42" y="230" font-size="12" fill="var(--ink)">5. 101-Level (grows from Day 1 to Year 10)</text>
        </g>
        <g class="svg-part" data-part="exemplar">
          <rect x="364" y="136" width="252" height="122" rx="10" fill="var(--terracotta)" fill-opacity="${ex.fillOpacity}" stroke="var(--terracotta)" stroke-width="${ex.strokeWidth}"/>
          <text x="490" y="162" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">Optional Tool Cap</text>
          <text x="490" y="188" font-size="12" fill="var(--ink)" text-anchor="middle">4 Core Habits FIRST</text>
          <text x="490" y="210" font-size="12" fill="var(--ink)" text-anchor="middle">+ Max 1 Optional Church Tool</text>
          <text x="490" y="234" font-size="12" fill="var(--muted)" text-anchor="middle">Tested with 2 laypeople</text>
        </g>
      `);
    },

    "gathering-rhythm": (active) => {
      const c = hi(active, "celebrate", "var(--gold)", 0.14);
      const f = hi(active, "focus", "var(--primary)", 0.14);
      const n = hi(active, "nextstep", "var(--terracotta)", 0.14);
      const k = hi(active, "checklist", "var(--success)", 0.13);
      return svgWrap("0 0 640 290", `
        <g class="svg-part" data-part="celebrate">
          <rect x="24" y="24" width="182" height="150" rx="12" fill="var(--gold)" fill-opacity="${c.fillOpacity}" stroke="var(--gold)" stroke-width="${c.strokeWidth}"/>
          <text x="115" y="54" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">1. CELEBRATE</text>
          <text x="115" y="76" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">(15 min over meal)</text>
          <text x="115" y="106" font-size="12" fill="var(--ink)" text-anchor="middle">What obedience step</text>
          <text x="115" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">did you take &amp; how</text>
          <text x="115" y="146" font-size="12" fill="var(--ink)" text-anchor="middle">did God meet you?</text>
        </g>
        <text x="217" y="104" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="focus">
          <rect x="229" y="24" width="182" height="150" rx="12" fill="var(--primary)" fill-opacity="${f.fillOpacity}" stroke="var(--primary)" stroke-width="${f.strokeWidth}"/>
          <text x="320" y="54" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">2. HABIT FOCUS</text>
          <text x="320" y="76" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">(35 min Word &amp; Prayer)</text>
          <text x="320" y="106" font-size="12" fill="var(--ink)" text-anchor="middle">Practice Bible Circle,</text>
          <text x="320" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">Prayer Wheel, or</text>
          <text x="320" y="146" font-size="12" fill="var(--ink)" text-anchor="middle">Jesus Pattern together</text>
        </g>
        <text x="422" y="104" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="nextstep">
          <rect x="434" y="24" width="182" height="150" rx="12" fill="var(--terracotta)" fill-opacity="${n.fillOpacity}" stroke="var(--terracotta)" stroke-width="${n.strokeWidth}"/>
          <text x="525" y="54" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">3. NEXT STEP + OUT</text>
          <text x="525" y="76" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">(15 min Every Week)</text>
          <text x="525" y="106" font-size="12" fill="var(--ink)" text-anchor="middle">1 obedience action +</text>
          <text x="525" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">1 Oikos neighbor</text>
          <text x="525" y="146" font-size="12" fill="var(--ink)" text-anchor="middle">prayed for / invited</text>
        </g>
        <g class="svg-part" data-part="checklist">
          <rect x="24" y="194" width="592" height="76" rx="10" fill="var(--success)" fill-opacity="${k.fillOpacity}" stroke="var(--success)" stroke-width="${k.strokeWidth}"/>
          <text x="320" y="222" font-size="13" font-weight="700" fill="var(--success)" text-anchor="middle">Weekly Pilot Standard (Replaces Biweekly 6-Meeting Betas)</text>
          <text x="320" y="248" font-size="12" fill="var(--ink)" text-anchor="middle">3–5 People &bull; Meets WEEKLY (60–75m) &bull; 12–16 Weeks &bull; Apprentice Co-Leads Wks 9–12</text>
        </g>
      `);
    },

    "culture-canvas": (active) => {
      const lt = hi(active, "liturgy", "var(--primary)", 0.13);
      const gr = hi(active, "groups", "var(--slate)", 0.13);
      const ng = hi(active, "nextgen", "var(--gold)", 0.14);
      const mc = hi(active, "mercy", "var(--terracotta)", 0.13);
      return svgWrap("0 0 660 310", `
        <rect x="20" y="22" width="110" height="262" rx="6" fill="var(--surface)" stroke="var(--border-strong)"/>
        <text x="75" y="54" font-size="12" font-weight="700" fill="var(--muted)" text-anchor="middle">ONE CANVAS</text>
        <text x="75" y="102" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Practices</text>
        <text x="75" y="152" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Language</text>
        <text x="75" y="202" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Artifacts</text>
        <text x="75" y="252" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Narratives</text>

        <g class="svg-part" data-part="liturgy">
          <rect x="138" y="22" width="120" height="262" rx="6" fill="var(--primary)" fill-opacity="${lt.fillOpacity}" stroke="var(--primary)" stroke-width="${lt.strokeWidth}"/>
          <text x="198" y="50" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">Word &amp; Table</text>
          <text x="198" y="102" font-size="12" fill="var(--ink)" text-anchor="middle">Communion</text>
          <text x="198" y="152" font-size="12" fill="var(--ink)" text-anchor="middle">Plain Gospel</text>
          <text x="198" y="202" font-size="12" fill="var(--ink)" text-anchor="middle">Prayer Cards</text>
          <text x="198" y="252" font-size="12" fill="var(--ink)" text-anchor="middle">Baptism Stories</text>
        </g>

        <g class="svg-part" data-part="groups">
          <rect x="266" y="22" width="120" height="262" rx="6" fill="var(--slate)" fill-opacity="${gr.fillOpacity}" stroke="var(--slate)" stroke-width="${gr.strokeWidth}"/>
          <text x="326" y="50" font-size="12" font-weight="700" fill="var(--slate)" text-anchor="middle">Groups</text>
          <text x="326" y="102" font-size="12" fill="var(--ink)" text-anchor="middle">Weekly Rhythm</text>
          <text x="326" y="152" font-size="12" fill="var(--ink)" text-anchor="middle">Shared Habits</text>
          <text x="326" y="202" font-size="12" fill="var(--ink)" text-anchor="middle">Napkin Guides</text>
          <text x="326" y="252" font-size="12" fill="var(--ink)" text-anchor="middle">Oikos Fruit</text>
        </g>

        <g class="svg-part" data-part="nextgen">
          <rect x="394" y="22" width="120" height="262" rx="6" fill="var(--gold)" fill-opacity="${ng.fillOpacity}" stroke="var(--gold)" stroke-width="${ng.strokeWidth}"/>
          <text x="454" y="50" font-size="12" font-weight="700" fill="var(--gold)" text-anchor="middle">Kids &amp; Youth</text>
          <text x="454" y="102" font-size="12" fill="var(--ink)" text-anchor="middle">Co-Designed</text>
          <text x="454" y="152" font-size="12" fill="var(--ink)" text-anchor="middle">Home Prompts</text>
          <text x="454" y="202" font-size="12" fill="var(--ink)" text-anchor="middle">Fridge Cards</text>
          <text x="454" y="252" font-size="12" fill="var(--ink)" text-anchor="middle">Youth Triads</text>
        </g>

        <g class="svg-part" data-part="mercy">
          <rect x="522" y="22" width="120" height="262" rx="6" fill="var(--terracotta)" fill-opacity="${mc.fillOpacity}" stroke="var(--terracotta)" stroke-width="${mc.strokeWidth}"/>
          <text x="582" y="50" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">Mercy Teams</text>
          <text x="582" y="102" font-size="12" fill="var(--ink)" text-anchor="middle">Huddle Prayer</text>
          <text x="582" y="152" font-size="12" fill="var(--ink)" text-anchor="middle">Neighbor Love</text>
          <text x="582" y="202" font-size="12" fill="var(--ink)" text-anchor="middle">Hospitality</text>
          <text x="582" y="252" font-size="12" fill="var(--ink)" text-anchor="middle">Care Stories</text>
        </g>
      `);
    },

    "vetting-soulcare": (active) => {
      const vt = hi(active, "vetting", "var(--primary)", 0.13);
      const sc = hi(active, "soulcare", "var(--success)", 0.14);
      const es = hi(active, "escalation", "var(--terracotta)", 0.14);
      return svgWrap("0 0 640 280", `
        <g class="svg-part" data-part="vetting">
          <rect x="24" y="28" width="184" height="224" rx="12" fill="var(--primary)" fill-opacity="${vt.fillOpacity}" stroke="var(--primary)" stroke-width="${vt.strokeWidth}"/>
          <text x="116" y="60" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">1. Vetting Shield</text>
          <text x="116" y="84" font-size="12" fill="var(--muted)" text-anchor="middle">(Character &gt; Skill)</text>
          <text x="116" y="122" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Gospel Orthodoxy</text>
          <text x="116" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Repentant Integrity</text>
          <text x="116" y="174" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Relational Peace</text>
          <text x="116" y="200" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Elder Endorsement</text>
        </g>
        <g class="svg-part" data-part="soulcare">
          <rect x="228" y="28" width="184" height="224" rx="12" fill="var(--success)" fill-opacity="${sc.fillOpacity}" stroke="var(--success)" stroke-width="${sc.strokeWidth}"/>
          <text x="320" y="60" font-size="13" font-weight="700" fill="var(--success)" text-anchor="middle">2. 1:4–5 Soul Care</text>
          <circle cx="320" cy="108" r="14" fill="var(--card)" stroke="var(--success)" stroke-width="2"/>
          <text x="320" y="113" font-size="12" font-weight="700" fill="var(--success)" text-anchor="middle">1</text>
          <line x1="320" y1="122" x2="262" y2="162" stroke="var(--success)" stroke-width="2"/>
          <line x1="320" y1="122" x2="300" y2="162" stroke="var(--success)" stroke-width="2"/>
          <line x1="320" y1="122" x2="340" y2="162" stroke="var(--success)" stroke-width="2"/>
          <line x1="320" y1="122" x2="378" y2="162" stroke="var(--success)" stroke-width="2"/>
          <circle cx="262" cy="172" r="9" fill="var(--success)" fill-opacity="0.35" stroke="var(--success)"/>
          <circle cx="300" cy="172" r="9" fill="var(--success)" fill-opacity="0.35" stroke="var(--success)"/>
          <circle cx="340" cy="172" r="9" fill="var(--success)" fill-opacity="0.35" stroke="var(--success)"/>
          <circle cx="378" cy="172" r="9" fill="var(--success)" fill-opacity="0.35" stroke="var(--success)"/>
          <text x="320" y="208" font-size="12" fill="var(--ink)" text-anchor="middle">Prayer Wheel + Examen</text>
          <text x="320" y="228" font-size="12" fill="var(--muted)" text-anchor="middle">Zero KPI policing</text>
        </g>
        <g class="svg-part" data-part="escalation">
          <rect x="432" y="28" width="184" height="224" rx="12" fill="var(--terracotta)" fill-opacity="${es.fillOpacity}" stroke="var(--terracotta)" stroke-width="${es.strokeWidth}"/>
          <text x="524" y="60" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">3. Escalation Path</text>
          <text x="524" y="106" font-size="12" fill="var(--ink)" text-anchor="middle">24-hr Elder Care for:</text>
          <text x="524" y="134" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Abuse / Safety risk</text>
          <text x="524" y="158" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; Marital / Mental crisis</text>
          <text x="524" y="182" font-size="12" fill="var(--ink)" text-anchor="middle">&bull; False doctrine</text>
          <text x="524" y="220" font-size="12" font-weight="600" fill="var(--terracotta)" text-anchor="middle">Protects sheep &amp; peers</text>
        </g>
      `);
    },

    "stewardship-roadmap": (active) => {
      const hz = hi(active, "horizon", "var(--primary)", 0.14);
      const pa = hi(active, "pathcol", "var(--success)", 0.12);
      const pl = hi(active, "plancol", "var(--terracotta)", 0.12);
      const cn = hi(active, "continuity", "var(--gold)", 0.14);
      return svgWrap("0 0 660 340", `
        <g class="svg-part" data-part="horizon">
          <rect x="92" y="16" width="548" height="58" rx="8" fill="var(--primary)" fill-opacity="${hz.fillOpacity}" stroke="var(--primary)" stroke-width="${hz.strokeWidth}"/>
          <text x="366" y="39" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">James 4:15 Humble Vision ("If the Lord Wills")</text>
          <text x="366" y="60" font-size="12" fill="var(--ink)" text-anchor="middle">Christ-dependent apprentices multiplying across generations — only God gives growth</text>
        </g>

        <text x="46" y="114" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">3-Year</text>
        <text x="46" y="176" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">1-Year</text>
        <text x="46" y="238" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">90-Day</text>

        <g class="svg-part" data-part="pathcol">
          <rect x="92" y="82" width="270" height="184" rx="6" fill="var(--success)" fill-opacity="${pa.fillOpacity}" stroke="var(--success)" stroke-width="${pa.strokeWidth}"/>
          <line x1="92" y1="143" x2="362" y2="143" stroke="var(--border)"/>
          <line x1="92" y1="205" x2="362" y2="205" stroke="var(--border)"/>
          <text x="227" y="108" font-size="12" font-weight="700" fill="var(--success)" text-anchor="middle">PATH: 2nd/3rd-Gen Apprentices</text>
          <text x="227" y="128" font-size="12" fill="var(--ink)" text-anchor="middle">1:4–5 Soul Care Pods sustained</text>
          <text x="227" y="168" font-size="12" font-weight="700" fill="var(--success)" text-anchor="middle">PATH: Weekly Rhythm Retained</text>
          <text x="227" y="188" font-size="12" fill="var(--ink)" text-anchor="middle">Vetting Gate &amp; 2nd-gen co-leads</text>
          <text x="227" y="230" font-size="12" font-weight="700" fill="var(--success)" text-anchor="middle">PATH: Launch Next Weekly Betas</text>
          <text x="227" y="250" font-size="12" fill="var(--ink)" text-anchor="middle">Track OUT neighbor stories</text>
        </g>

        <g class="svg-part" data-part="plancol">
          <rect x="370" y="82" width="270" height="184" rx="6" fill="var(--terracotta)" fill-opacity="${pl.fillOpacity}" stroke="var(--terracotta)" stroke-width="${pl.strokeWidth}"/>
          <line x1="370" y1="143" x2="640" y2="143" stroke="var(--border)"/>
          <line x1="370" y1="205" x2="640" y2="205" stroke="var(--border)"/>
          <text x="505" y="108" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">PLAN: Liturgy &amp; Households</text>
          <text x="505" y="128" font-size="12" fill="var(--ink)" text-anchor="middle">Shared plain-English stories</text>
          <text x="505" y="168" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">PLAN: Legacy Groups &amp; Budget</text>
          <text x="505" y="188" font-size="12" fill="var(--ink)" text-anchor="middle">Fall calendar &amp; pruning locked</text>
          <text x="505" y="230" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">PLAN: Board Ratification</text>
          <text x="505" y="250" font-size="12" fill="var(--ink)" text-anchor="middle">2-Page Staff Onboarding Manual</text>
        </g>

        <g class="svg-part" data-part="continuity">
          <rect x="92" y="276" width="548" height="48" rx="8" fill="var(--gold)" fill-opacity="${cn.fillOpacity}" stroke="var(--gold)" stroke-width="${cn.strokeWidth}"/>
          <text x="366" y="305" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Year-2 Off-Ramp: Elder Ratification (30d) &bull; Quarterly Huddles (M3–M12+) &bull; Annual Pruning Review</text>
        </g>
      `);
    }
  };

  return {
    render(toolId, activePartKey) {
      const fn = renderers[toolId];
      return fn ? fn(activePartKey || null) : "<p>Diagram unavailable.</p>";
    }
  };
})();
