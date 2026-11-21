/* ==========================================================================
   Disciple Making Lab — 17 Interactive Theme-Aware SVG Diagrams
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
          <text x="115" y="66" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">CROSS &bull; SAVIOR</text>
          <text x="115" y="96" font-size="15" font-weight="700" fill="var(--ink)" text-anchor="middle">1. WITH CHRIST</text>
          <text x="115" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">Called by Grace</text>
          <text x="115" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Loving Relationship</text>
          <text x="115" y="170" font-size="12" fill="var(--ink)" text-anchor="middle">Abiding in Jesus</text>
          <text x="115" y="206" font-size="12" font-weight="600" fill="var(--muted)" text-anchor="middle">Rom 8:28&ndash;30; Mt 22:37</text>
        </g>
        <text x="218" y="140" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="transformed">
          <rect x="229" y="34" width="182" height="202" rx="12" fill="var(--primary)" fill-opacity="${t.fillOpacity}" stroke="var(--primary)" stroke-width="${t.strokeWidth}" style="filter:${t.filter}"/>
          <text x="320" y="66" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">LAVER &bull; SANCTIFIER</text>
          <text x="320" y="96" font-size="15" font-weight="700" fill="var(--ink)" text-anchor="middle">2. LIKE CHRIST</text>
          <text x="320" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">Beholding His Glory</text>
          <text x="320" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Transformed by Spirit</text>
          <text x="320" y="170" font-size="12" fill="var(--ink)" text-anchor="middle">Formed in Word &amp; Table</text>
          <text x="320" y="206" font-size="12" font-weight="600" fill="var(--muted)" text-anchor="middle">2 Cor 3:18; Acts 2:42</text>
        </g>
        <text x="423" y="140" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>
        <g class="svg-part" data-part="sent">
          <rect x="434" y="34" width="182" height="202" rx="12" fill="var(--gold)" fill-opacity="${s.fillOpacity}" stroke="var(--gold)" stroke-width="${s.strokeWidth}" style="filter:${s.filter}"/>
          <text x="525" y="66" font-size="12" font-weight="700" fill="var(--gold)" text-anchor="middle">CROWN &bull; COMING KING</text>
          <text x="525" y="96" font-size="15" font-weight="700" fill="var(--ink)" text-anchor="middle">3. ON MISSION</text>
          <text x="525" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">Cross-Bearing Love</text>
          <text x="525" y="148" font-size="12" fill="var(--ink)" text-anchor="middle">Ambassadors of Grace</text>
          <text x="525" y="170" font-size="12" fill="var(--ink)" text-anchor="middle">Making Disciplemakers</text>
          <text x="525" y="206" font-size="12" font-weight="600" fill="var(--muted)" text-anchor="middle">2 Cor 5:14&ndash;20; Lk 9:23</text>
        </g>
      `);
    },

    "bible-circle": (active) => {
      const sp = hi(active, "spirit", "var(--terracotta)", 0.13);
      const c1 = hi(active, "chew", "var(--primary)", 0.14);
      const c2 = hi(active, "digest", "var(--slate)", 0.14);
      const c3 = hi(active, "act", "var(--success)", 0.14);
      return svgWrap("0 0 640 310", `
        <g class="svg-part" data-part="spirit">
          <rect x="20" y="14" width="600" height="44" rx="8" fill="var(--terracotta)" fill-opacity="${sp.fillOpacity}" stroke="var(--terracotta)" stroke-width="${sp.strokeWidth}" style="filter:${sp.filter}"/>
          <text x="320" y="33" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">HOLY SPIRIT ILLUMINATION</text>
          <text x="320" y="49" font-size="11.5" fill="var(--ink)" text-anchor="middle">&ldquo;Open our eyes to see Jesus &amp; obey&rdquo; (Ps 119:18)</text>
          <line x1="112" y1="58" x2="112" y2="73" stroke="var(--terracotta)" stroke-width="2" stroke-dasharray="3,2"/>
          <polygon points="107,71 117,71 112,78" fill="var(--terracotta)"/>
          <line x1="320" y1="58" x2="320" y2="73" stroke="var(--terracotta)" stroke-width="2" stroke-dasharray="3,2"/>
          <polygon points="315,71 325,71 320,78" fill="var(--terracotta)"/>
          <line x1="528" y1="58" x2="528" y2="73" stroke="var(--terracotta)" stroke-width="2" stroke-dasharray="3,2"/>
          <polygon points="523,71 533,71 528,78" fill="var(--terracotta)"/>
        </g>

        <g class="svg-part" data-part="chew">
          <rect x="20" y="80" width="184" height="164" rx="12" fill="var(--primary)" fill-opacity="${c1.fillOpacity}" stroke="var(--primary)" stroke-width="${c1.strokeWidth}" style="filter:${c1.filter}"/>
          <path d="M84,106 Q97,94 110,106 Q97,118 84,106 Z" fill="var(--card)" stroke="var(--primary)" stroke-width="2"/>
          <circle cx="97" cy="106" r="4" fill="var(--primary)"/>
          <circle cx="98.2" cy="104.8" r="1.2" fill="var(--card)"/>
          <path d="M114,106 Q127,94 140,106 Q127,118 114,106 Z" fill="var(--card)" stroke="var(--primary)" stroke-width="2"/>
          <circle cx="127" cy="106" r="4" fill="var(--primary)"/>
          <circle cx="128.2" cy="104.8" r="1.2" fill="var(--card)"/>
          <text x="112" y="144" font-size="13.5" font-weight="700" fill="var(--primary)" text-anchor="middle">1. LOOK (Eyes)</text>
          <text x="112" y="164" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Text, Context &amp; Christ</text>
          <text x="112" y="188" font-size="11.5" fill="var(--ink)" text-anchor="middle">&ldquo;What does it say in</text>
          <text x="112" y="204" font-size="11.5" fill="var(--ink)" text-anchor="middle">context &amp; reveal about</text>
          <text x="112" y="220" font-size="11.5" fill="var(--muted)" text-anchor="middle">Jesus?&rdquo; (Lk 24:27)</text>
        </g>

        <text x="216" y="166" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>

        <g class="svg-part" data-part="digest">
          <rect x="228" y="80" width="184" height="164" rx="12" fill="var(--slate)" fill-opacity="${c2.fillOpacity}" stroke="var(--slate)" stroke-width="${c2.strokeWidth}" style="filter:${c2.filter}"/>
          <path d="M304,95 Q298,105 304,115" fill="none" stroke="var(--slate)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M310,99 Q306,105 310,111" fill="none" stroke="var(--slate)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M316,97 C316,88 333,88 333,100 C333,108 328,110 327,115 C326,120 318,121 316,116" fill="none" stroke="var(--slate)" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M321,98 C327,98 328,105 323,108 C321,109 320,111 321,113" fill="none" stroke="var(--slate)" stroke-width="1.8" stroke-linecap="round"/>
          <text x="320" y="144" font-size="13.5" font-weight="700" fill="var(--slate)" text-anchor="middle">2. LISTEN (Ear)</text>
          <text x="320" y="164" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Spirit &amp; Community</text>
          <text x="320" y="188" font-size="11.5" fill="var(--ink)" text-anchor="middle">&ldquo;What convicts, comforts,</text>
          <text x="320" y="204" font-size="11.5" fill="var(--ink)" text-anchor="middle">or stirs us&mdash;tested</text>
          <text x="320" y="220" font-size="11.5" fill="var(--muted)" text-anchor="middle">together?&rdquo; (2 Pet 1:20)</text>
        </g>

        <text x="424" y="166" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>

        <g class="svg-part" data-part="act">
          <rect x="436" y="80" width="184" height="164" rx="12" fill="var(--success)" fill-opacity="${c3.fillOpacity}" stroke="var(--success)" stroke-width="${c3.strokeWidth}" style="filter:${c3.filter}"/>
          <g transform="translate(517, 108) rotate(-8)">
            <path d="M-4.5,-2 C-5.5,-7 5,-7.5 4.5,-2 C4.2,1.5 2.5,3 0,3 C-2.5,3 -4,1.5 -4.5,-2 Z" fill="var(--success)" fill-opacity="0.22" stroke="var(--success)" stroke-width="1.6"/>
            <ellipse cx="-0.5" cy="9" rx="3" ry="3.8" fill="var(--success)" fill-opacity="0.22" stroke="var(--success)" stroke-width="1.6"/>
            <circle cx="-4.2" cy="-7.8" r="1.1" fill="var(--success)"/>
            <circle cx="-2.1" cy="-9.2" r="1.2" fill="var(--success)"/>
            <circle cx="0.2" cy="-10" r="1.3" fill="var(--success)"/>
            <circle cx="2.6" cy="-10.3" r="1.5" fill="var(--success)"/>
            <circle cx="4.9" cy="-9.8" r="1.8" fill="var(--success)"/>
          </g>
          <g transform="translate(539, 102) rotate(8)">
            <path d="M-4.5,-2 C-5,-7.5 5.5,-7 4.5,-2 C4,1.5 2.5,3 0,3 C-2.5,3 -4.2,1.5 -4.5,-2 Z" fill="var(--success)" fill-opacity="0.22" stroke="var(--success)" stroke-width="1.6"/>
            <ellipse cx="0.5" cy="9" rx="3" ry="3.8" fill="var(--success)" fill-opacity="0.22" stroke="var(--success)" stroke-width="1.6"/>
            <circle cx="-4.9" cy="-9.8" r="1.8" fill="var(--success)"/>
            <circle cx="-2.6" cy="-10.3" r="1.5" fill="var(--success)"/>
            <circle cx="-0.2" cy="-10" r="1.3" fill="var(--success)"/>
            <circle cx="2.1" cy="-9.2" r="1.2" fill="var(--success)"/>
            <circle cx="4.2" cy="-7.8" r="1.1" fill="var(--success)"/>
          </g>
          <text x="528" y="144" font-size="13.5" font-weight="700" fill="var(--success)" text-anchor="middle">3. LIVE (Footprints)</text>
          <text x="528" y="164" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Obey &amp; Share (48 Hrs)</text>
          <text x="528" y="188" font-size="11.5" fill="var(--ink)" text-anchor="middle">&ldquo;What concrete step</text>
          <text x="528" y="204" font-size="11.5" fill="var(--ink)" text-anchor="middle">will I take &amp; who will</text>
          <text x="528" y="220" font-size="11.5" fill="var(--muted)" text-anchor="middle">I tell?&rdquo; (Jas 1:22)</text>
        </g>

        <g class="svg-part" data-part="spirit">
          <rect x="20" y="258" width="600" height="38" rx="8" fill="var(--surface)" stroke="var(--terracotta)" stroke-width="1.2"/>
          <text x="320" y="281" font-size="11.5" text-anchor="middle">
            <tspan font-weight="700" fill="var(--terracotta)">Seeker DBS Toggle: </tspan><tspan fill="var(--ink)">What stood out? &bull; What about God/Jesus? &bull; What about people? &bull; One step to test?</tspan>
          </text>
        </g>
      `);
    },

    "prayer-wheel": (active) => {
      const h = hi(active, "hub", "var(--terracotta)", 0.16);
      const p = hi(active, "praise", "var(--primary)", 0.13);
      const cf = hi(active, "confess", "var(--slate)", 0.13);
      const a = hi(active, "ask", "var(--gold)", 0.14);
      const g = hi(active, "go", "var(--success)", 0.13);
      return svgWrap("0 0 640 315", `
        <g class="svg-part" data-part="praise">
          <rect x="30" y="18" width="282" height="110" rx="14" fill="var(--primary)" fill-opacity="${p.fillOpacity}" stroke="var(--primary)" stroke-width="${p.strokeWidth}" style="filter:${p.filter}"/>
          <text x="150" y="48" font-size="13.5" font-weight="700" fill="var(--primary)" text-anchor="middle">1. PRAISE (Up)</text>
          <text x="150" y="72" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">&ldquo;Hallowed be your name&rdquo;</text>
          <text x="150" y="95" font-size="11.5" fill="var(--muted)" text-anchor="middle">Adore God's character &amp; thank him</text>
        </g>

        <g class="svg-part" data-part="confess">
          <rect x="328" y="18" width="282" height="110" rx="14" fill="var(--slate)" fill-opacity="${cf.fillOpacity}" stroke="var(--slate)" stroke-width="${cf.strokeWidth}" style="filter:${cf.filter}"/>
          <text x="490" y="48" font-size="13.5" font-weight="700" fill="var(--slate)" text-anchor="middle">2. CONFESS &amp; LAMENT (In)</text>
          <text x="490" y="72" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">&ldquo;Forgive us as we forgive&rdquo;</text>
          <text x="490" y="95" font-size="11.5" fill="var(--muted)" text-anchor="middle">Honest grief, cross pardon &amp; Examen</text>
        </g>

        <g class="svg-part" data-part="ask">
          <rect x="328" y="140" width="282" height="110" rx="14" fill="var(--gold)" fill-opacity="${a.fillOpacity}" stroke="var(--gold)" stroke-width="${a.strokeWidth}" style="filter:${a.filter}"/>
          <text x="490" y="176" font-size="13.5" font-weight="700" fill="var(--gold)" text-anchor="middle">3. ASK (Around)</text>
          <text x="490" y="200" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">&ldquo;Give us this day &amp; deliver&rdquo;</text>
          <text x="490" y="223" font-size="11.5" fill="var(--muted)" text-anchor="middle">Daily bread, healing &amp; Oikos friends</text>
        </g>

        <g class="svg-part" data-part="go">
          <rect x="30" y="140" width="282" height="110" rx="14" fill="var(--success)" fill-opacity="${g.fillOpacity}" stroke="var(--success)" stroke-width="${g.strokeWidth}" style="filter:${g.filter}"/>
          <text x="150" y="176" font-size="13.5" font-weight="700" fill="var(--success)" text-anchor="middle">4. GO (Out)</text>
          <text x="150" y="200" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">&ldquo;Your kingdom come&rdquo;</text>
          <text x="150" y="223" font-size="11.5" fill="var(--muted)" text-anchor="middle">Yield your will &amp; bless someone today</text>
        </g>

        <text x="320" y="48" font-size="14" font-weight="700" fill="var(--muted)" text-anchor="middle">&rarr;</text>
        <text x="588" y="139" font-size="14" font-weight="700" fill="var(--muted)" text-anchor="middle">&darr;</text>
        <text x="320" y="228" font-size="14" font-weight="700" fill="var(--muted)" text-anchor="middle">&larr;</text>
        <text x="52" y="139" font-size="14" font-weight="700" fill="var(--muted)" text-anchor="middle">&uarr;</text>

        <g class="svg-part" data-part="hub">
          <circle cx="320" cy="134" r="56" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${h.strokeWidth + 0.5}" style="filter:${h.filter}"/>
          <circle cx="320" cy="134" r="49" fill="var(--terracotta)" fill-opacity="${h.fillOpacity}"/>
          <text x="320" y="128" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">OUR FATHER</text>
          <text x="320" y="148" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">In Christ (Heb 4:16)</text>
        </g>

        <g>
          <rect x="30" y="264" width="580" height="38" rx="8" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.2"/>
          <text x="320" y="287" font-size="11.5" fill="var(--ink)" text-anchor="middle"><tspan font-weight="700" fill="var(--terracotta)">Scales Naturally: </tspan>2-Minute Napkin Rhythm (30s &times; 4 beats) &bull; 20-Minute Soul Care &amp; Cross-Centered Examen</text>
        </g>
      `);
    },

    "jesus-pattern": (active) => {
      const up = hi(active, "up", "var(--primary)", 0.14);
      const inn = hi(active, "in", "var(--slate)", 0.14);
      const out = hi(active, "out", "var(--gold)", 0.14);
      const dn = hi(active, "down", "var(--terracotta)", 0.16);
      return svgWrap("0 0 620 378", `
        <!-- Valley Ground Line & Mountain Peak -->
        <line x1="34" y1="238" x2="586" y2="238" stroke="var(--border-strong)" stroke-width="1.8"/>
        <polygon points="310,66 124,238 496,238" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M245,126 Q278,142 310,124 Q338,110 375,126" fill="none" stroke="var(--border-strong)" stroke-width="2" stroke-linecap="round"/>

        <!-- PROGRESSION ARROW A: 1. UP -> 2. IN (Curved flow from Peak into Disciples on Mountainside) -->
        <path d="M220,62 Q168,88 176,127" fill="none" stroke="var(--primary)" stroke-width="2.8" stroke-linecap="round"/>
        <polygon points="170,124 182,123 177,135" fill="var(--primary)"/>
        <rect x="144" y="80" width="54" height="19" rx="9" fill="var(--card)" stroke="var(--primary)" stroke-width="1.4"/>
        <text x="171" y="93" font-size="10" font-weight="700" fill="var(--primary)" text-anchor="middle">1 &rarr; 2</text>

        <!-- PROGRESSION ARROW B: 2. IN -> 3. OUT (Direct horizontal flow across mountainside to crowds) -->
        <line x1="286" y1="175" x2="332" y2="175" stroke="var(--gold)" stroke-width="3"/>
        <polygon points="329,169 341,175 329,181" fill="var(--gold)"/>
        <rect x="285" y="143" width="52" height="19" rx="9" fill="var(--card)" stroke="var(--gold)" stroke-width="1.4"/>
        <text x="311" y="156" font-size="10" font-weight="700" fill="var(--gold)" text-anchor="middle">2 &rarr; 3</text>

        <!-- DESCENT & LEVEL-PLACE BRIDGE: 2. IN -> DOWN (Valley Base) -> 3. OUT -->
        <line x1="310" y1="184" x2="310" y2="246" stroke="var(--terracotta)" stroke-width="2.6" stroke-dasharray="4,3"/>
        <polygon points="304,242 316,242 310,253" fill="var(--terracotta)"/>
        <path d="M448,254 Q468,236 462,220" fill="none" stroke="var(--terracotta)" stroke-width="2.2" stroke-dasharray="4,3"/>
        <polygon points="456,223 468,222 461,212" fill="var(--terracotta)"/>

        <!-- 1. UP: Peak -->
        <g class="svg-part" data-part="up">
          <rect x="165" y="10" width="290" height="52" rx="10" fill="var(--card)" stroke="var(--primary)" stroke-width="${up.strokeWidth}"/>
          <rect x="165" y="10" width="290" height="52" rx="10" fill="var(--primary)" fill-opacity="${up.fillOpacity}" style="filter:${up.filter}"/>
          <circle cx="191" cy="36" r="14" fill="var(--primary)"/>
          <text x="191" y="41" font-size="12.5" font-weight="700" fill="#fff" text-anchor="middle">1</text>
          <text x="322" y="31" font-size="13" font-weight="700" fill="var(--primary)" text-anchor="middle">UP &mdash; Mountain Prayer to Father</text>
          <text x="322" y="49" font-size="11.5" fill="var(--ink)" text-anchor="middle">Luke 6:12 &bull; Solitude &amp; Communion First</text>
        </g>

        <!-- 2. IN: On the Mountainside with Disciples -->
        <g class="svg-part" data-part="in">
          <rect x="68" y="136" width="218" height="78" rx="10" fill="var(--card)" stroke="var(--slate)" stroke-width="${inn.strokeWidth}"/>
          <rect x="68" y="136" width="218" height="78" rx="10" fill="var(--slate)" fill-opacity="${inn.fillOpacity}" style="filter:${inn.filter}"/>
          <circle cx="92" cy="160" r="13" fill="var(--slate)"/>
          <text x="92" y="165" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">2</text>
          <text x="188" y="162" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">IN &bull; Called Disciples</text>
          <text x="177" y="182" font-size="11.5" fill="var(--ink)" text-anchor="middle">Formed together on the mountain</text>
          <text x="177" y="200" font-size="11" fill="var(--muted)" text-anchor="middle">Luke 6:13&ndash;16; Mark 3:13&ndash;14</text>
        </g>

        <!-- 3. OUT: Level Plain & Crowds -->
        <g class="svg-part" data-part="out">
          <rect x="342" y="136" width="218" height="78" rx="10" fill="var(--card)" stroke="var(--gold)" stroke-width="${out.strokeWidth}"/>
          <rect x="342" y="136" width="218" height="78" rx="10" fill="var(--gold)" fill-opacity="${out.fillOpacity}" style="filter:${out.filter}"/>
          <circle cx="366" cy="160" r="13" fill="var(--gold)"/>
          <text x="366" y="165" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">3</text>
          <text x="462" y="162" font-size="13" font-weight="700" fill="var(--gold)" text-anchor="middle">OUT &bull; Minister to Crowds</text>
          <text x="451" y="182" font-size="11.5" fill="var(--ink)" text-anchor="middle">Teaching, healing &amp; compassion</text>
          <text x="451" y="200" font-size="11" fill="var(--muted)" text-anchor="middle">Luke 6:17b&ndash;19</text>
          <line x1="560" y1="175" x2="588" y2="175" stroke="var(--gold)" stroke-width="2.8"/>
          <polygon points="585,169 596,175 585,181" fill="var(--gold)"/>
        </g>

        <!-- DOWN: Physically at the Valley Floor -->
        <g class="svg-part" data-part="down">
          <rect x="125" y="255" width="370" height="80" rx="12" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${dn.strokeWidth}"/>
          <rect x="125" y="255" width="370" height="80" rx="12" fill="var(--terracotta)" fill-opacity="${dn.fillOpacity}" style="filter:${dn.filter}"/>
          <line x1="156" y1="275" x2="156" y2="315" stroke="var(--terracotta)" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="144" y1="287" x2="168" y2="287" stroke="var(--terracotta)" stroke-width="3.5" stroke-linecap="round"/>
          <text x="322" y="279" font-size="13" font-weight="700" fill="var(--terracotta)" text-anchor="middle">DOWN &mdash; Came Down to the Level Place (Cross)</text>
          <text x="322" y="299" font-size="11.5" fill="var(--ink)" text-anchor="middle">Humble descent from the mountain carries IN out to the crowds</text>
          <text x="322" y="318" font-size="11" fill="var(--muted)" text-anchor="middle">Luke 6:17a; Luke 9:23, 37; Phil 2:5&ndash;8</text>
        </g>

        <!-- Bottom Progression Summary Strip -->
        <rect x="44" y="346" width="532" height="24" rx="12" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.2"/>
        <text x="310" y="362" font-size="11" font-weight="700" fill="var(--ink)" text-anchor="middle">LUKE 6:12&ndash;19 FLOW:  1. UP to Father  &rarr;  2. IN with Disciples  &rarr;  (DOWN to Level Place)  &rarr;  3. OUT to Crowds</text>
      `);
    },

    "training-triangle": (active) => {
      const tr = hi(active, "truth", "var(--slate)", 0.14);
      const im = hi(active, "imitation", "var(--primary)", 0.15);
      const mu = hi(active, "multiplication", "var(--terracotta)", 0.14);
      return svgWrap("0 0 600 310", `
        <line x1="300" y1="68" x2="145" y2="232" stroke="var(--danger)" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="165" y="138" font-size="12" font-weight="700" fill="var(--danger)" text-anchor="middle">No Classroom Shortcut!</text>
        <line x1="300" y1="68" x2="455" y2="232" stroke="var(--primary)" stroke-width="3.5"/>
        <line x1="455" y1="232" x2="145" y2="232" stroke="var(--primary)" stroke-width="3.5"/>

        <text x="300" y="158" font-size="15" font-weight="700" fill="var(--primary)" text-anchor="middle" letter-spacing="0.1em">T &bull; I &bull; M</text>
        <text x="300" y="177" font-size="11.5" fill="var(--muted)" text-anchor="middle">Paul &amp; Timothy (2 Tim 2:2)</text>

        <g class="svg-part" data-part="truth">
          <rect x="200" y="22" width="200" height="62" rx="10" fill="var(--card)" stroke="var(--slate)" stroke-width="${tr.strokeWidth}"/>
          <rect x="200" y="22" width="200" height="62" rx="10" fill="var(--slate)" fill-opacity="${tr.fillOpacity}"/>
          <text x="300" y="48" font-size="13" font-weight="700" fill="var(--slate)" text-anchor="middle">1. T &mdash; TRUTH (God's Word)</text>
          <text x="300" y="69" font-size="12" fill="var(--ink)" text-anchor="middle">Rooted in Scripture &amp; Gospel</text>
        </g>

        <g class="svg-part" data-part="imitation">
          <rect x="355" y="210" width="215" height="72" rx="10" fill="var(--card)" stroke="var(--primary)" stroke-width="${im.strokeWidth}"/>
          <rect x="355" y="210" width="215" height="72" rx="10" fill="var(--primary)" fill-opacity="${im.fillOpacity}"/>
          <text x="462" y="238" font-size="12.5" font-weight="700" fill="var(--primary)" text-anchor="middle">2. I &mdash; IMITATION (Life-on-Life)</text>
          <text x="462" y="259" font-size="12" fill="var(--ink)" text-anchor="middle">&ldquo;Walk with me, watch me&rdquo;</text>
        </g>

        <g class="svg-part" data-part="multiplication">
          <rect x="30" y="210" width="235" height="72" rx="10" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${mu.strokeWidth}"/>
          <rect x="30" y="210" width="235" height="72" rx="10" fill="var(--terracotta)" fill-opacity="${mu.fillOpacity}"/>
          <text x="148" y="238" font-size="12.5" font-weight="700" fill="var(--terracotta)" text-anchor="middle">3. M &mdash; MULTIPLICATION</text>
          <text x="148" y="259" font-size="12" fill="var(--ink)" text-anchor="middle">Guard &amp; entrust (2 Tim 2:2)</text>
        </g>
      `);
    },

    "what-is-audit": (active) => {
      const dst = hi(active, "destination", "var(--primary)", 0.14);
      const mp = hi(active, "map", "var(--slate)", 0.14);
      const vh = hi(active, "vehicles", "var(--terracotta)", 0.14);
      const tl = hi(active, "tools", "var(--gold)", 0.14);
      return svgWrap("0 0 640 345", `
        <!-- Top Header Banner -->
        <rect x="20" y="10" width="600" height="44" rx="9" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="320" y="29" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">STEP 1: THE &ldquo;WHAT IS&rdquo; SNAPSHOT &mdash; Honest Current Reality (Proverbs 27:23)</text>
        <text x="320" y="45" font-size="11" fill="var(--ink)" text-anchor="middle">Before designing anything new, list what actually exists in your church today across 4 columns</text>

        <!-- Column 1: 1. DESTINATION (x=20..160, cx=90) -->
        <g class="svg-part" data-part="destination">
          <rect x="20" y="64" width="140" height="226" rx="10" fill="var(--card)" stroke="var(--primary)" stroke-width="${dst.strokeWidth}"/>
          <rect x="20" y="64" width="140" height="226" rx="10" fill="var(--primary)" fill-opacity="${dst.fillOpacity}" style="filter:${dst.filter}"/>
          <!-- Map Pin Icon -->
          <path d="M90,108 C90,108 77,93 77,85 C77,77.8 82.8,72 90,72 C97.2,72 103,77.8 103,85 C103,93 90,108 90,108 Z" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round"/>
          <circle cx="90" cy="85" r="4.2" fill="var(--primary)"/>
          <text x="90" y="128" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">1. DESTINATION</text>
          <text x="90" y="144" font-size="10.5" font-weight="600" fill="var(--muted)" text-anchor="middle">Our Current Goal</text>
          <line x1="36" y1="154" x2="144" y2="154" stroke="var(--border-strong)" stroke-width="1"/>
          <text x="90" y="172" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">&ldquo;What defines a</text>
          <text x="90" y="187" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">&lsquo;good member&rsquo; today?&rdquo;</text>
          <rect x="30" y="204" width="120" height="72" rx="7" fill="var(--surface)" stroke="var(--primary)" stroke-width="0.9"/>
          <text x="90" y="221" font-size="9.5" font-weight="700" fill="var(--primary)" text-anchor="middle">WRITE DOWN:</text>
          <text x="90" y="238" font-size="10" fill="var(--ink)" text-anchor="middle">Written mission vs.</text>
          <text x="90" y="252" font-size="10" fill="var(--ink)" text-anchor="middle">what we praise</text>
          <text x="90" y="266" font-size="10" fill="var(--muted)" text-anchor="middle">(chairs or growth?)</text>
        </g>

        <!-- Column 2: 2. THE MAP (x=173..313, cx=243) -->
        <g class="svg-part" data-part="map">
          <rect x="173" y="64" width="140" height="226" rx="10" fill="var(--card)" stroke="var(--slate)" stroke-width="${mp.strokeWidth}"/>
          <rect x="173" y="64" width="140" height="226" rx="10" fill="var(--slate)" fill-opacity="${mp.fillOpacity}" style="filter:${mp.filter}"/>
          <!-- Folded Map Icon -->
          <polygon points="227,76 238,73 238,103 227,106" fill="none" stroke="var(--slate)" stroke-width="1.8" stroke-linejoin="round"/>
          <polygon points="238,73 249,76 249,106 238,103" fill="none" stroke="var(--slate)" stroke-width="1.8" stroke-linejoin="round"/>
          <polygon points="249,76 260,73 260,103 249,106" fill="none" stroke="var(--slate)" stroke-width="1.8" stroke-linejoin="round"/>
          <text x="243" y="128" font-size="12" font-weight="700" fill="var(--slate)" text-anchor="middle">2. THE MAP</text>
          <text x="243" y="144" font-size="10.5" font-weight="600" fill="var(--muted)" text-anchor="middle">Our Growth Path</text>
          <line x1="189" y1="154" x2="297" y2="154" stroke="var(--border-strong)" stroke-width="1"/>
          <text x="243" y="172" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">&ldquo;How do people</text>
          <text x="243" y="187" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">mature after joining?&rdquo;</text>
          <rect x="183" y="204" width="120" height="72" rx="7" fill="var(--surface)" stroke="var(--slate)" stroke-width="0.9"/>
          <text x="243" y="221" font-size="9.5" font-weight="700" fill="var(--slate)" text-anchor="middle">WRITE DOWN:</text>
          <text x="243" y="238" font-size="10" fill="var(--ink)" text-anchor="middle">Guided stages,</text>
          <text x="243" y="252" font-size="10" fill="var(--ink)" text-anchor="middle">or random classes</text>
          <text x="243" y="266" font-size="10" fill="var(--muted)" text-anchor="middle">with no next step?</text>
        </g>

        <!-- Column 3: 3. VEHICLES (x=327..467, cx=397) -->
        <g class="svg-part" data-part="vehicles">
          <rect x="327" y="64" width="140" height="226" rx="10" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${vh.strokeWidth}"/>
          <rect x="327" y="64" width="140" height="226" rx="10" fill="var(--terracotta)" fill-opacity="${vh.fillOpacity}" style="filter:${vh.filter}"/>
          <!-- Vehicle Icon -->
          <path d="M375,96 L375,88 C375,84 381,78 387,78 L401,78 C407,78 411,85 415,86 L420,88 C422,89 423,91 423,94 L423,96 Z" fill="none" stroke="var(--terracotta)" stroke-width="2" stroke-linejoin="round"/>
          <circle cx="385" cy="96" r="4.8" fill="var(--card)" stroke="var(--terracotta)" stroke-width="2"/>
          <circle cx="412" cy="96" r="4.8" fill="var(--card)" stroke="var(--terracotta)" stroke-width="2"/>
          <text x="397" y="128" font-size="12" font-weight="700" fill="var(--terracotta)" text-anchor="middle">3. VEHICLES</text>
          <text x="397" y="144" font-size="10.5" font-weight="600" fill="var(--muted)" text-anchor="middle">Our Gatherings</text>
          <line x1="343" y1="154" x2="451" y2="154" stroke="var(--border-strong)" stroke-width="1"/>
          <text x="397" y="172" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">&ldquo;What rooms meet</text>
          <text x="397" y="187" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">on our calendar?&rdquo;</text>
          <rect x="337" y="204" width="120" height="72" rx="7" fill="var(--surface)" stroke="var(--terracotta)" stroke-width="0.9"/>
          <text x="397" y="221" font-size="9.5" font-weight="700" fill="var(--terracotta)" text-anchor="middle">WRITE DOWN:</text>
          <text x="397" y="238" font-size="10" fill="var(--ink)" text-anchor="middle">Every group, class,</text>
          <text x="397" y="252" font-size="10" fill="var(--ink)" text-anchor="middle">youth night, team</text>
          <text x="397" y="266" font-size="10" fill="var(--muted)" text-anchor="middle">&amp; committee</text>
        </g>

        <!-- Column 4: 4. TOOLS (x=480..620, cx=550) -->
        <g class="svg-part" data-part="tools">
          <rect x="480" y="64" width="140" height="226" rx="10" fill="var(--card)" stroke="var(--gold)" stroke-width="${tl.strokeWidth}"/>
          <rect x="480" y="64" width="140" height="226" rx="10" fill="var(--gold)" fill-opacity="${tl.fillOpacity}" style="filter:${tl.filter}"/>
          <!-- Compass Icon -->
          <circle cx="550" cy="90" r="16" fill="none" stroke="var(--gold)" stroke-width="2"/>
          <line x1="550" y1="74" x2="550" y2="78" stroke="var(--gold)" stroke-width="1.6"/>
          <line x1="550" y1="102" x2="550" y2="106" stroke="var(--gold)" stroke-width="1.6"/>
          <line x1="534" y1="90" x2="538" y2="90" stroke="var(--gold)" stroke-width="1.6"/>
          <line x1="562" y1="90" x2="566" y2="90" stroke="var(--gold)" stroke-width="1.6"/>
          <polygon points="558,82 553,93 542,98 547,87" fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-linejoin="round"/>
          <circle cx="550" cy="90" r="2.2" fill="var(--gold)"/>
          <text x="550" y="128" font-size="12" font-weight="700" fill="var(--gold)" text-anchor="middle">4. TOOLS</text>
          <text x="550" y="144" font-size="10.5" font-weight="600" fill="var(--muted)" text-anchor="middle">Our Daily Habits</text>
          <line x1="496" y1="154" x2="604" y2="154" stroke="var(--border-strong)" stroke-width="1"/>
          <text x="550" y="172" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">&ldquo;What habits can</text>
          <text x="550" y="187" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">members pass on?&rdquo;</text>
          <rect x="490" y="204" width="120" height="72" rx="7" fill="var(--surface)" stroke="var(--gold)" stroke-width="0.9"/>
          <text x="550" y="221" font-size="9.5" font-weight="700" fill="var(--gold)" text-anchor="middle">WRITE DOWN:</text>
          <text x="550" y="238" font-size="10" fill="var(--ink)" text-anchor="middle">Staff study guides,</text>
          <text x="550" y="252" font-size="10" fill="var(--ink)" text-anchor="middle">or simple Bible &amp;</text>
          <text x="550" y="266" font-size="10" fill="var(--muted)" text-anchor="middle">prayer habits?</text>
        </g>

        <!-- Bottom Progression Strip -->
        <rect x="20" y="302" width="600" height="32" rx="16" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.2"/>
        <text x="320" y="322" font-size="11" font-weight="700" fill="var(--ink)" text-anchor="middle">
          MODULE 4 FLOW:  1. List &ldquo;What Is&rdquo; Here  &rarr;  2. Sort on Stewardship Crossroads  &rarr;  3. Prune on the Vine
        </text>
      `);
    },

    "reality-audit": (active) => {
      const pp = hi(active, "pathplan", "var(--slate)", 0.16);
      const pr = hi(active, "pruning", "var(--terracotta)", 0.14);
      const fr = hi(active, "fruit", "var(--success)", 0.14);
      const lm = hi(active, "lament", "var(--gold)", 0.15);
      const op = hi(active, "opendoor", "var(--primary)", 0.14);
      return svgWrap("0 0 640 370", `
        <!-- Pole Labels at the 4 Ends of the Central Axes -->
        <text x="320" y="20" font-size="12" font-weight="700" fill="var(--primary)" text-anchor="middle">&uarr; WITHIN OUR STEWARDSHIP (In Our Hands)</text>
        <text x="320" y="358" font-size="12" font-weight="700" fill="var(--slate)" text-anchor="middle">&darr; BEYOND OUR CONTROL (In God&rsquo;s Hands / Providence)</text>
        <text x="20" y="185" font-size="11.5" font-weight="700" fill="var(--terracotta)" text-anchor="middle" transform="rotate(-90,20,185)">&larr; FRICTION &amp; HARDSHIP</text>
        <text x="620" y="185" font-size="11.5" font-weight="700" fill="var(--success)" text-anchor="middle" transform="rotate(90,620,185)">FRUIT &amp; OPPORTUNITY &rarr;</text>

        <!-- Q1 Top-Left: PRUNE (Needs Pruning) -->
        <g class="svg-part" data-part="pruning">
          <rect x="48" y="42" width="252" height="124" rx="10" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${pr.strokeWidth}"/>
          <rect x="48" y="42" width="252" height="124" rx="10" fill="var(--terracotta)" fill-opacity="${pr.fillOpacity}" style="filter:${pr.filter}"/>
          <text x="174" y="72" font-size="13.5" font-weight="700" fill="var(--terracotta)" text-anchor="middle">1. PRUNE (Needs Pruning)</text>
          <text x="174" y="95" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Internal clutter, drift, or duplicated meetings</text>
          <text x="174" y="116" font-size="11" fill="var(--muted)" text-anchor="middle">Within our hands + causing friction</text>
          <text x="174" y="142" font-size="11.5" font-weight="700" fill="var(--terracotta)" text-anchor="middle">&rarr; Repent, simplify, or cut (John 15:2)</text>
        </g>

        <!-- Q2 Top-Right: FEED (Stewarded Fruit) -->
        <g class="svg-part" data-part="fruit">
          <rect x="340" y="42" width="252" height="124" rx="10" fill="var(--card)" stroke="var(--success)" stroke-width="${fr.strokeWidth}"/>
          <rect x="340" y="42" width="252" height="124" rx="10" fill="var(--success)" fill-opacity="${fr.fillOpacity}" style="filter:${fr.filter}"/>
          <text x="466" y="72" font-size="13.5" font-weight="700" fill="var(--success)" text-anchor="middle">2. FEED (Stewarded Fruit)</text>
          <text x="466" y="95" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Greenhouses where disciples are growing</text>
          <text x="466" y="116" font-size="11" fill="var(--muted)" text-anchor="middle">Within our hands + bearing real fruit</text>
          <text x="466" y="142" font-size="11.5" font-weight="700" fill="var(--success)" text-anchor="middle">&rarr; Thank God, protect &amp; cultivate</text>
        </g>

        <!-- Q3 Bottom-Left: LAMENT (Lament & Endurance) -->
        <g class="svg-part" data-part="lament">
          <rect x="48" y="204" width="252" height="124" rx="10" fill="var(--card)" stroke="var(--gold)" stroke-width="${lm.strokeWidth}"/>
          <rect x="48" y="204" width="252" height="124" rx="10" fill="var(--gold)" fill-opacity="${lm.fillOpacity}" style="filter:${lm.filter}"/>
          <text x="174" y="234" font-size="13.5" font-weight="700" fill="var(--gold)" text-anchor="middle">3. LAMENT (Lament &amp; Endurance)</text>
          <text x="174" y="257" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Illness, layoffs, demographics, or grief</text>
          <text x="174" y="278" font-size="11" fill="var(--muted)" text-anchor="middle">Beyond our control + painful trial</text>
          <text x="174" y="304" font-size="11.5" font-weight="700" fill="var(--gold)" text-anchor="middle">&rarr; Not moral failure; weep &amp; endure (2 Cor 12)</text>
        </g>

        <!-- Q4 Bottom-Right: STEP IN (Open Door) -->
        <g class="svg-part" data-part="opendoor">
          <rect x="340" y="204" width="252" height="124" rx="10" fill="var(--card)" stroke="var(--primary)" stroke-width="${op.strokeWidth}"/>
          <rect x="340" y="204" width="252" height="124" rx="10" fill="var(--primary)" fill-opacity="${op.fillOpacity}" style="filter:${op.filter}"/>
          <text x="466" y="234" font-size="13.5" font-weight="700" fill="var(--primary)" text-anchor="middle">4. STEP IN (Open Door)</text>
          <text x="466" y="257" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Unexpected neighbor openness or shift</text>
          <text x="466" y="278" font-size="11" fill="var(--muted)" text-anchor="middle">Beyond our control + Spirit-opened door</text>
          <text x="466" y="304" font-size="11.5" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr; Discern prayerfully &amp; walk through (Col 4:3)</text>
        </g>

        <!-- Central Intersecting Axes (+) & Crossroads Hub -->
        <g class="svg-part" data-part="pathplan">
          <line x1="320" y1="30" x2="320" y2="340" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round"/>
          <polyline points="312,42 320,28 328,42" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="312,328 320,342 328,328" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>

          <line x1="36" y1="185" x2="604" y2="185" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round"/>
          <polyline points="48,177 34,185 48,193" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="592,177 606,185 592,193" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>

          <rect x="254" y="168" width="132" height="34" rx="17" fill="var(--card)" stroke="var(--slate)" stroke-width="${pp.strokeWidth}"/>
          <rect x="254" y="168" width="132" height="34" rx="17" fill="var(--slate)" fill-opacity="${pp.fillOpacity}" style="filter:${pp.filter}"/>
          <text x="320" y="189" font-size="11" font-weight="700" fill="var(--ink)" text-anchor="middle">THE CROSSROADS (+)</text>
        </g>
      `);
    },

    "pruning-curve": (active) => {
      const ax = hi(active, "axes", "var(--primary)", 0.14);
      const gt = hi(active, "gate", "var(--terracotta)", 0.15);
      const gr = hi(active, "grace", "var(--success)", 0.14);
      return svgWrap("0 0 640 375", `
        <!-- Vineyard Trellis Support Arcs (Background) -->
        <path d="M150,176 Q175,148 215,140" fill="none" stroke="var(--border-strong)" stroke-width="1.6" stroke-dasharray="3,3"/>
        <path d="M490,176 Q465,148 425,140" fill="none" stroke="var(--border-strong)" stroke-width="1.6" stroke-dasharray="3,3"/>

        <!-- Soil Line & Root Flare at Base of Trunk -->
        <line x1="40" y1="324" x2="600" y2="324" stroke="var(--border-strong)" stroke-width="2"/>
        <path d="M312,318 Q284,332 254,336 M320,318 L320,338 M328,318 Q356,332 386,336" fill="none" stroke="var(--primary)" stroke-width="2.4" stroke-linecap="round"/>

        <!-- Central Vertical Vine Trunk (x=320, y=324 up to y=140) -->
        <path d="M308,324 C310,275 312,210 314,140 L326,140 C328,210 330,275 332,324 Z" fill="var(--primary)" fill-opacity="0.22" stroke="var(--primary)" stroke-width="2.2"/>
        <!-- Upward Sap Flow Arrow Inside Trunk -->
        <line x1="320" y1="306" x2="320" y2="152" stroke="var(--success)" stroke-width="2.8" stroke-dasharray="5,3"/>
        <polygon points="313,156 327,156 320,143" fill="var(--success)"/>

        <!-- Left Living Branch (Trunk -> 1. KEEP & FEED) -->
        <line x1="312" y1="238" x2="278" y2="238" stroke="var(--primary)" stroke-width="5" stroke-linecap="round"/>

        <!-- Right Pruned Branch (Trunk -> 2. CUT OR PAUSE) with Shears Medallion -->
        <line x1="328" y1="238" x2="362" y2="238" stroke="var(--terracotta)" stroke-width="3.5" stroke-dasharray="4,4" stroke-linecap="round"/>
        <circle cx="345" cy="238" r="13" fill="var(--card)" stroke="var(--terracotta)" stroke-width="1.8"/>
        <line x1="339" y1="231" x2="351" y2="245" stroke="var(--terracotta)" stroke-width="2" stroke-linecap="round"/>
        <line x1="351" y1="231" x2="339" y2="245" stroke="var(--terracotta)" stroke-width="2" stroke-linecap="round"/>

        <!-- 3. REINVEST MARGIN: Top Center Harvest Crown (x=80..560, y=12..140) -->
        <g class="svg-part" data-part="grace">
          <rect x="80" y="12" width="480" height="128" rx="14" fill="var(--card)" stroke="var(--success)" stroke-width="${gr.strokeWidth}"/>
          <rect x="80" y="12" width="480" height="128" rx="14" fill="var(--success)" fill-opacity="${gr.fillOpacity}" style="filter:${gr.filter}"/>
          <!-- Circular Grape Cluster Medallion -->
          <circle cx="122" cy="48" r="20" fill="var(--surface)" stroke="var(--success)" stroke-width="1.8"/>
          <line x1="122" y1="34" x2="122" y2="39" stroke="var(--success)" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="116" cy="43" r="3.4" fill="var(--success)"/>
          <circle cx="122" cy="43" r="3.4" fill="var(--success)"/>
          <circle cx="128" cy="43" r="3.4" fill="var(--success)"/>
          <circle cx="119" cy="49" r="3.4" fill="var(--success)"/>
          <circle cx="125" cy="49" r="3.4" fill="var(--success)"/>
          <circle cx="122" cy="55" r="3.4" fill="var(--success)"/>
          <text x="154" y="43" font-size="13.5" font-weight="700" fill="var(--success)">3. REINVEST MARGIN &mdash; &ldquo;Bear More Fruit&rdquo; (2+ Hrs/Wk)</text>
          <text x="154" y="62" font-size="11.5" fill="var(--ink)">Redirect freed hours immediately into people before new admin clutter refills them:</text>
          <!-- 3 Cohesive Inner Feature Pills -->
          <rect x="98" y="78" width="140" height="46" rx="8" fill="var(--surface)" stroke="var(--success)" stroke-width="1.2"/>
          <text x="168" y="98" font-size="11" font-weight="700" fill="var(--success)" text-anchor="middle">Micro-Triads</text>
          <text x="168" y="114" font-size="10" fill="var(--ink)" text-anchor="middle">1&ndash;4x/mo Word &amp; Prayer</text>

          <rect x="250" y="78" width="140" height="46" rx="8" fill="var(--surface)" stroke="var(--success)" stroke-width="1.2"/>
          <text x="320" y="98" font-size="11" font-weight="700" fill="var(--success)" text-anchor="middle">Neighbor Tables</text>
          <text x="320" y="114" font-size="10" fill="var(--ink)" text-anchor="middle">Pray &bull; Eat &bull; Share (Oikos)</text>

          <rect x="402" y="78" width="140" height="46" rx="8" fill="var(--surface)" stroke="var(--success)" stroke-width="1.2"/>
          <text x="472" y="98" font-size="11" font-weight="700" fill="var(--success)" text-anchor="middle">1:4&ndash;5 Soul Care</text>
          <text x="472" y="114" font-size="10" fill="var(--ink)" text-anchor="middle">Unhurried leader rest</text>
        </g>

        <!-- 1. KEEP & FEED: Lower-Left Trellis Branch (x=22..278, y=176..300) -->
        <g class="svg-part" data-part="axes">
          <rect x="22" y="176" width="256" height="124" rx="14" fill="var(--card)" stroke="var(--primary)" stroke-width="${ax.strokeWidth}"/>
          <rect x="22" y="176" width="256" height="124" rx="14" fill="var(--primary)" fill-opacity="${ax.fillOpacity}" style="filter:${ax.filter}"/>
          <!-- Circular Vine-Leaf Medallion -->
          <circle cx="56" cy="208" r="18" fill="var(--surface)" stroke="var(--primary)" stroke-width="1.8"/>
          <path d="M56,216 Q44,209 46,199 Q56,202 56,216 Z" fill="var(--primary)" fill-opacity="0.35" stroke="var(--primary)" stroke-width="1.5"/>
          <path d="M56,216 Q68,209 66,199 Q56,202 56,216 Z" fill="var(--primary)" fill-opacity="0.35" stroke="var(--primary)" stroke-width="1.5"/>
          <text x="84" y="203" font-size="13" font-weight="700" fill="var(--primary)">1. KEEP &amp; FEED</text>
          <text x="84" y="220" font-size="11" font-weight="600" fill="var(--muted)">Fruitful Branches on the Vine</text>
          <line x1="38" y1="232" x2="262" y2="232" stroke="var(--border-strong)" stroke-width="1"/>
          <text x="38" y="250" font-size="11" fill="var(--ink)">&bull; Protect life-giving Greenhouses</text>
          <text x="38" y="268" font-size="11" fill="var(--ink)">&bull; Celebrate &amp; nourish faithful hosts</text>
          <text x="38" y="286" font-size="11" fill="var(--ink)">&bull; Strip away needless red tape</text>
        </g>

        <!-- 2. CUT OR PAUSE: Lower-Right Pruned Branch (x=362..618, y=176..300) -->
        <g class="svg-part" data-part="gate">
          <rect x="362" y="176" width="256" height="124" rx="14" fill="var(--card)" stroke="var(--terracotta)" stroke-width="${gt.strokeWidth}" stroke-dasharray="7,4"/>
          <rect x="362" y="176" width="256" height="124" rx="14" fill="var(--terracotta)" fill-opacity="${gt.fillOpacity}" style="filter:${gt.filter}"/>
          <!-- Circular Pruning Shears Medallion -->
          <circle cx="396" cy="208" r="18" fill="var(--surface)" stroke="var(--terracotta)" stroke-width="1.8"/>
          <line x1="389" y1="199" x2="403" y2="215" stroke="var(--terracotta)" stroke-width="2" stroke-linecap="round"/>
          <line x1="403" y1="199" x2="389" y2="215" stroke="var(--terracotta)" stroke-width="2" stroke-linecap="round"/>
          <circle cx="390" cy="217" r="3" fill="none" stroke="var(--terracotta)" stroke-width="1.6"/>
          <circle cx="402" cy="217" r="3" fill="none" stroke="var(--terracotta)" stroke-width="1.6"/>
          <text x="424" y="203" font-size="13" font-weight="700" fill="var(--terracotta)">2. CUT OR PAUSE</text>
          <text x="424" y="220" font-size="11" font-weight="600" fill="var(--muted)">The Pruning Shears (1&ndash;2 Items)</text>
          <line x1="378" y1="232" x2="602" y2="232" stroke="var(--border-strong)" stroke-width="1"/>
          <text x="378" y="250" font-size="11" fill="var(--ink)">&bull; 90-Day Sabbatical Pause</text>
          <text x="378" y="268" font-size="11" fill="var(--ink)">&bull; Merge duplicate committees</text>
          <text x="378" y="286" font-size="11" fill="var(--ink)">&bull; Bless &amp; Sunset a finished season</text>
        </g>

        <!-- Bottom Vineyard Root Banner -->
        <rect x="44" y="336" width="552" height="28" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.2"/>
        <text x="320" y="354" font-size="11" text-anchor="middle">
          <tspan font-weight="700" fill="var(--primary)">THE TRUE VINE (John 15:1&ndash;2): </tspan><tspan fill="var(--ink)">Pruning 2+ hrs/wk of clutter at the trunk sends life upward into people</tspan>
        </text>
      `);
    },

    "oikos-bridge": (active) => {
      const oi = hi(active, "oikos", "var(--primary)", 0.13);
      const st = hi(active, "story", "var(--terracotta)", 0.13);
      const db = hi(active, "dbs", "var(--success)", 0.13);
      return svgWrap("0 0 640 305", `
        <g class="svg-part" data-part="oikos">
          <rect x="20" y="24" width="184" height="214" rx="12" fill="var(--primary)" fill-opacity="${oi.fillOpacity}" stroke="var(--primary)" stroke-width="${oi.strokeWidth}" style="filter:${oi.filter}"/>
          <text x="112" y="52" font-size="13.5" font-weight="700" fill="var(--primary)" text-anchor="middle">1. PRAY (3&ndash;5 Names)</text>
          <circle cx="112" cy="118" r="42" fill="var(--card)" stroke="var(--primary)" stroke-width="1.6"/>
          <line x1="70" y1="118" x2="154" y2="118" stroke="var(--border-strong)"/>
          <line x1="112" y1="76" x2="112" y2="160" stroke="var(--border-strong)"/>
          <text x="92" y="108" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Live</text>
          <text x="132" y="108" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Work</text>
          <text x="92" y="136" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Learn</text>
          <text x="132" y="136" font-size="11.5" font-weight="600" fill="var(--ink)" text-anchor="middle">Play</text>
          <text x="112" y="186" font-size="11.5" fill="var(--ink)" text-anchor="middle">Pray daily for 3&ndash;5 nearby</text>
          <text x="112" y="204" font-size="11.5" fill="var(--ink)" text-anchor="middle">friends far from God</text>
          <text x="112" y="222" font-size="11" fill="var(--muted)" text-anchor="middle">(Col 4:2&ndash;3)</text>
        </g>

        <text x="216" y="134" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>

        <g class="svg-part" data-part="story">
          <rect x="228" y="24" width="184" height="214" rx="12" fill="var(--terracotta)" fill-opacity="${st.fillOpacity}" stroke="var(--terracotta)" stroke-width="${st.strokeWidth}" style="filter:${st.filter}"/>
          <text x="320" y="52" font-size="13.5" font-weight="700" fill="var(--terracotta)" text-anchor="middle">2. EAT (Table &amp; Listen)</text>
          <line x1="296" y1="128" x2="344" y2="128" stroke="var(--terracotta)" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M306,98 L332,98 L330,120 C330,125 326,127 319,127 C312,127 308,125 308,120 Z" fill="var(--card)" stroke="var(--terracotta)" stroke-width="1.8"/>
          <path d="M332,103 C339,103 339,117 331,117" fill="none" stroke="var(--terracotta)" stroke-width="1.8"/>
          <path d="M314,92 Q311,86 315,80" fill="none" stroke="var(--terracotta)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M323,92 Q320,86 324,80" fill="none" stroke="var(--terracotta)" stroke-width="1.5" stroke-linecap="round"/>
          <text x="320" y="162" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">Share a meal or coffee</text>
          <text x="320" y="186" font-size="11.5" fill="var(--ink)" text-anchor="middle">Listen deeply for burdens</text>
          <text x="320" y="206" font-size="11.5" fill="var(--muted)" text-anchor="middle">Watch for Luke 10 openness</text>
        </g>

        <text x="424" y="134" font-size="18" font-weight="700" fill="var(--primary)" text-anchor="middle">&rarr;</text>

        <g class="svg-part" data-part="dbs">
          <rect x="436" y="24" width="184" height="214" rx="12" fill="var(--success)" fill-opacity="${db.fillOpacity}" stroke="var(--success)" stroke-width="${db.strokeWidth}" style="filter:${db.filter}"/>
          <text x="528" y="52" font-size="13.5" font-weight="700" fill="var(--success)" text-anchor="middle">3. SHARE (Story &amp; Word)</text>
          <line x1="528" y1="78" x2="528" y2="106" stroke="var(--success)" stroke-width="2.2" stroke-linecap="round"/>
          <line x1="521" y1="86" x2="535" y2="86" stroke="var(--success)" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M504,104 Q516,98 528,106 Q540,98 552,104 L552,126 Q540,120 528,128 Q516,120 504,126 Z" fill="var(--card)" stroke="var(--success)" stroke-width="1.8"/>
          <text x="528" y="160" font-size="12" font-weight="600" fill="var(--ink)" text-anchor="middle">3-Min Story</text>
          <text x="528" y="177" font-size="11" fill="var(--muted)" text-anchor="middle">(Before / Cross / Now)</text>
          <text x="528" y="200" font-size="11.5" fill="var(--ink)" text-anchor="middle">+ Open 1 Gospel story using</text>
          <text x="528" y="218" font-size="11.5" font-weight="600" fill="var(--success)" text-anchor="middle">Look &bull; Listen &bull; Live (4 Qs)</text>
        </g>

        <rect x="20" y="252" width="600" height="38" rx="8" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1.2"/>
        <text x="320" y="275" font-size="11.5" text-anchor="middle">
          <tspan font-weight="700" fill="var(--terracotta)">Everyday Witness: </tspan><tspan fill="var(--ink)">Pray by Name (Col 4:2) &rarr; Eat &amp; Listen (Lk 10:5&ndash;9) &rarr; Share Story &amp; Word (1 Pet 3:15)</tspan>
        </text>
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
          <text x="320" y="106" font-size="12" fill="var(--ink)" text-anchor="middle">Look &bull; Listen &bull; Live,</text>
          <text x="320" y="126" font-size="12" fill="var(--ink)" text-anchor="middle">4-Beat Prayer Ring, or</text>
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
          <text x="320" y="208" font-size="12" fill="var(--ink)" text-anchor="middle">4-Beat Ring + Examen</text>
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
