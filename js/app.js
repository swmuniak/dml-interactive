/* ==========================================================================
   Disciple Making Lab — 10-Module Interactive Curriculum Engine
   Zero-build SPA router, tooltip engine, slide-over glossary, interactive
   diagrams, scenario retrieval checks, localStorage workbook & search.
   ========================================================================== */

(function () {
  const STORAGE_KEY = "dml_interactive_workbook_v1";
  const THEME_KEY = "dml_theme_pref_v1";

  let state = loadState();
  let currentRoute = { view: "home", param: null };
  let activeWeekStep = 1; // 1..4 or "all"
  let activeToolParts = {}; // toolId -> activePartKey
  let scenarioAnswers = {}; // "w1-s0" -> optionIdx
  let glossaryFilterCat = "All";
  let glossaryQuery = "";
  let pendingScrollToolId = null;
  let hoverHideTimer = null;
  let pinnedTermEl = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          completedWeeks: parsed.completedWeeks || {},
          checks: parsed.checks || {},
          notes: parsed.notes || {}
        };
      }
    } catch (e) { /* ignore storage errors */ }
    return { completedWeeks: {}, checks: {}, notes: {} };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* ignore storage errors */ }
    updateGlobalProgress();
  }

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getCompletedCount() {
    return window.DML_CURRICULUM.weeks.filter(w => !!state.completedWeeks[w.week]).length;
  }

  function updateGlobalProgress() {
    const done = getCompletedCount();
    const total = window.DML_CURRICULUM.weeks.length;
    const pct = Math.round((done / total) * 100);
    const fill = document.getElementById("global-progress-fill");
    const label = document.getElementById("global-progress-label");
    if (fill) fill.style.width = pct + "%";
    if (label) label.textContent = `${done}/${total} Modules`;
  }

  // =========================================================================
  // THEME TOGGLE
  // =========================================================================
  function initTheme() {
    let pref = "light";
    try { pref = localStorage.getItem(THEME_KEY) || "light"; } catch (e) {}
    applyTheme(pref);
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) btn.textContent = theme === "dark" ? "☀ Light Mode" : "☾ Dark Mode";
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  window.toggleTheme = function () {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  };

  // =========================================================================
  // ROUTING & SIDEBAR
  // =========================================================================
  function parseHash() {
    const h = (window.location.hash || "#home").replace(/^#/, "");
    if (!h || h === "home") return { view: "home", param: null };
    if (h.startsWith("module/") || h.startsWith("week/")) {
      const n = parseInt(h.split("/")[1], 10);
      if (n >= 1 && n <= 10) return { view: "week", param: n };
    }
    if (h === "tools") return { view: "toolRedirect", param: 1, toolId: null };
    if (h.startsWith("tool/")) {
      const id = h.slice(5);
      const t = window.DML_TOOLS[id];
      if (t) return { view: "toolRedirect", param: t.week, toolId: id };
    }
    if (h === "glossary") return { view: "glossary", param: null };
    if (h === "facilitator") return { view: "facilitator", param: null };
    if (h === "sustainability") return { view: "sustainability", param: null };
    return { view: "home", param: null };
  }

  window.navigate = function (hash) {
    if (window.location.hash === "#" + hash) {
      renderRoute();
    } else {
      window.location.hash = "#" + hash;
    }
    closeMobileSidebar();
  };

  window.jumpToLessonTool = function (toolId) {
    const t = window.DML_TOOLS[toolId];
    if (!t) return;
    activeWeekStep = 2;
    pendingScrollToolId = toolId;
    navigate("module/" + t.week);
  };

  function renderSidebar() {
    const nav = document.getElementById("sidebar-nav");
    if (!nav) return;
    const isActive = (v, p) => currentRoute.view === v && (p === undefined || currentRoute.param === p);

    const weeksHtml = window.DML_CURRICULUM.weeks.map(w => {
      const act = isActive("week", w.week);
      const comp = !!state.completedWeeks[w.week];
      return `
        <button class="nav-item ${act ? "active" : ""} ${comp ? "completed" : ""}" onclick="navigate('module/${w.week}')">
          <span class="nav-week-meta">
            <span class="nav-week-num">${comp ? "✓" : w.week}</span>
            <span class="nav-week-title">${esc(w.title)}</span>
          </span>
          <span class="nav-dot" title="${comp ? "Completed" : "In progress"}"></span>
        </button>`;
    }).join("");

    nav.innerHTML = `
      <div class="nav-section-label">Start Here</div>
      <button class="nav-item ${isActive("home") ? "active" : ""}" onclick="navigate('home')">
        <span>Course Overview &amp; Pre-Launch</span>
      </button>

      <div class="nav-section-label">10-Module Curriculum</div>
      ${weeksHtml}

      <div class="nav-section-label">Reference &amp; Sustainability</div>
      <button class="nav-item ${isActive("glossary") ? "active" : ""}" onclick="navigate('glossary')">
        <span>Full Glossary (${Object.keys(window.DML_GLOSSARY).length})</span>
      </button>
      <button class="nav-item ${isActive("facilitator") ? "active" : ""}" onclick="navigate('facilitator')">
        <span>Facilitator &amp; Coach Guide</span>
      </button>
      <button class="nav-item ${isActive("sustainability") ? "active" : ""}" onclick="navigate('sustainability')">
        <span>Year-2 Sustainability Hub</span>
      </button>

      <div class="nav-section-label">Team Workbook Data</div>
      <div style="padding:0.25rem 0.4rem; display:flex; flex-direction:column; gap:0.4rem;">
        <button class="btn btn-sm" onclick="exportWorkbookData()">Export Saved Notes (.json)</button>
        <label class="btn btn-sm" style="cursor:pointer;">
          Import Notes (.json)
          <input type="file" accept=".json" style="display:none" onchange="importWorkbookData(event)" />
        </label>
      </div>
    `;
  }

  function renderRoute(preserveScroll) {
    currentRoute = parseHash();
    if (currentRoute.view === "toolRedirect") {
      activeWeekStep = 2;
      if (currentRoute.toolId) pendingScrollToolId = currentRoute.toolId;
      currentRoute = { view: "week", param: currentRoute.param };
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#module/" + currentRoute.param);
      }
    }
    hideTooltip(true);
    renderSidebar();
    updateGlobalProgress();

    const root = document.getElementById("app-root");
    if (!root) return;

    if (currentRoute.view === "home") {
      root.innerHTML = renderHome();
    } else if (currentRoute.view === "week") {
      root.innerHTML = renderWeek(currentRoute.param);
    } else if (currentRoute.view === "glossary") {
      root.innerHTML = renderGlossaryPage();
    } else if (currentRoute.view === "facilitator") {
      root.innerHTML = renderFacilitatorPage();
    } else if (currentRoute.view === "sustainability") {
      root.innerHTML = renderSustainabilityPage();
    }

    bindDynamicListeners();

    if (pendingScrollToolId) {
      const targetId = pendingScrollToolId;
      pendingScrollToolId = null;
      setTimeout(() => {
        const el = document.getElementById("lesson-tool-" + targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
    } else if (!preserveScroll) {
      window.scrollTo(0, 0);
    }
  }

  // =========================================================================
  // VIEW 1: HOME OVERVIEW
  // =========================================================================
  function renderHome() {
    const c = window.DML_CURRICULUM;
    const done = getCompletedCount();

    const preChecks = c.preLaunch.items.map(item => {
      const checked = !!state.checks[item.id];
      return `
        <label class="checklist-row ${checked ? "checked" : ""}">
          <input type="checkbox" data-check-id="${esc(item.id)}" ${checked ? "checked" : ""} />
          <span style="font-size:0.9rem;">${esc(item.text)}</span>
        </label>`;
    }).join("");

    const phasesHtml = c.phases.map(p => {
      const pWeeks = c.weeks.filter(w => w.phase === p.id);
      const weekBtns = pWeeks.map(w => {
        const comp = !!state.completedWeeks[w.week];
        return `<button class="btn btn-sm ${comp ? "btn-primary" : ""}" onclick="navigate('module/${w.week}')">${comp ? "✓ " : ""}Module ${w.week}: ${esc(w.title)}</button>`;
      }).join("");
      return `
        <article class="card" style="padding:0; overflow:hidden; display:flex; flex-direction:column;">
          <img src="${esc(p.image)}" alt="${esc(p.title)}" class="phase-banner-img" style="height:175px;" />
          <div style="padding:1.25rem; display:flex; flex-direction:column; gap:0.65rem; flex:1;">
            <span class="badge badge-primary" style="align-self:flex-start;">${esc(p.weeks)}</span>
            <h3 style="font-size:1.15rem;">${esc(p.title)}</h3>
            <p style="font-size:0.9rem; color:var(--muted);">${esc(p.summary)}</p>
            <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:auto; padding-top:0.4rem;">
              ${weekBtns}
            </div>
          </div>
        </article>`;
    }).join("");

    const principlesHtml = c.disseminationPrinciples.map(pr => `
      <div class="card-subtle">
        <div style="font-weight:700; font-size:0.9rem; color:var(--primary); margin-bottom:0.25rem;">${esc(pr.title)}</div>
        <p style="font-size:0.84rem; color:var(--muted);">${esc(pr.summary)}</p>
      </div>`).join("");

    return `
      <section class="card hero-card">
        <div class="hero-copy">
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <span class="badge badge-primary">10-Module Interactive Curriculum</span>
            <span class="badge badge-terracotta">Hover or Tap Dotted Terms Anytime</span>
          </div>
          <h1 style="font-size:clamp(1.6rem, 2.5vw, 2.15rem);">${esc(c.meta.title)}</h1>
          <p style="font-size:1rem; font-weight:600; color:var(--primary);">${esc(c.meta.subtitle)}</p>
          <p style="font-size:0.94rem; color:var(--muted);">${esc(c.meta.promise)}</p>
          <div style="display:flex; gap:0.65rem; flex-wrap:wrap; margin-top:0.35rem;">
            <button class="btn btn-primary" onclick="navigate('module/1')">Start Module 1 &rarr;</button>
            <button class="btn" onclick="navigate('glossary')">Explore Glossary</button>
          </div>
          <div style="font-size:0.8rem; color:var(--muted); padding-top:0.35rem;">
            <strong>Audience:</strong> ${esc(c.meta.audience)}<br/>
            <strong>Cohort Pace:</strong> ${esc(c.meta.weeklyLoad)} &bull; <strong>Progress:</strong> ${done}/10 Modules Complete
          </div>
        </div>
        <div class="hero-img-wrap">
          <img src="assets/images/hero-table-to-city.png" alt="Neighbors sharing bread, coffee, and open Scripture around a kitchen table" />
        </div>
      </section>

      <!-- Fourfold Gospel Anchor Card -->
      <section class="card fourfold-card">
        <img src="assets/images/fourfold-gospel-emblem.png" alt="Olive vine weaving Cross, Laver, Pitcher, and Crown" style="width:100%; border-radius:var(--radius-md); border:1px solid var(--border);" />
        <div style="display:flex; flex-direction:column; gap:0.65rem;">
          <span class="badge badge-terracotta" style="align-self:flex-start;">C&amp;MA Distinctives</span>
          <h2 style="font-size:1.35rem;">Grounded in Christ — The Cross, Laver, Pitcher &amp; Crown</h2>
          <p style="font-size:0.93rem; color:var(--muted);">
            Rooted in the <span class="term" data-term="fourfold-gospel">C&amp;MA Fourfold Gospel</span>—Christ our <strong>Savior</strong> (Cross, <span class="term" data-term="justification">justification</span> &amp; <span class="term" data-term="oikos">Oikos</span>), <strong>Sanctifier</strong> (Laver, Spirit-led Scripture &amp; <span class="term" data-term="union-with-christ">union with Christ</span>), <strong>Healer</strong> (Pitcher, <span class="term" data-term="friction-valley">Friction Valley</span> &amp; <span class="term" data-term="soul-care-pods">Soul Care</span>), and <strong>Coming King</strong> (Crown, humble <span class="term" data-term="stewardship-roadmap">Stewardship</span>)—this 10-module curriculum weaves Christ's fourfold work into every discipleship practice.
          </p>
          <details class="see-more">
            <summary>See More: How This Curriculum Is Designed for Adult Retention</summary>
            <div class="see-more-body">
              <div class="grid-2" style="gap:0.75rem;">${principlesHtml}</div>
            </div>
          </details>
        </div>
      </section>

      <!-- Pre-Launch Module 0 Gate -->
      <section class="card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; margin-bottom:0.85rem;">
          <div>
            <span class="badge badge-gold">Before Module 1</span>
            <h2 style="font-size:1.3rem; margin-top:0.35rem;">${esc(c.preLaunch.title)}</h2>
            <p style="font-size:0.9rem; color:var(--muted); margin-top:0.2rem;">${esc(c.preLaunch.subtitle)}</p>
          </div>
          <button class="btn btn-sm" onclick="navigate('facilitator')">Facilitator Setup Tips &rarr;</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.55rem;">${preChecks}</div>
      </section>

      <!-- 4-Phase Roadmap -->
      <section style="display:flex; flex-direction:column; gap:0.9rem;">
        <div>
          <h2 style="font-size:1.4rem;">The 10-Module Arc Across Four Phases</h2>
          <p style="font-size:0.9rem; color:var(--muted);">Personal <span class="term" data-term="micro-triad">Micro-Triads</span> launch early in Module 2 while Elder alignment &amp; pruning prepare the church for wider pilots in Module 8.</p>
        </div>
        <div class="grid-2">${phasesHtml}</div>
      </section>
    `;
  }

  // =========================================================================
  // VIEW 2: MODULE WORKSPACE (4-STEP CHUNK & INTEGRATED-TOOL SWITCHER)
  // =========================================================================
  function renderWeek(weekNum) {
    const w = window.DML_CURRICULUM.weeks.find(x => x.week === weekNum);
    const phase = window.DML_CURRICULUM.phases.find(p => p.id === w.phase);
    const isDone = !!state.completedWeeks[w.week];
    const showAll = activeWeekStep === "all";

    const stepBtns = [
      { key: 1, label: "1. Hook & Anchor" },
      { key: 2, label: "2. Lessons & Tools" },
      { key: 3, label: "3. Workshop & Scenarios" },
      { key: 4, label: "4. Field Practice" }
    ].map(s => `<button class="step-tab ${activeWeekStep === s.key ? "active" : ""}" onclick="setWeekStep(${s.key})">${s.label}</button>`).join("");

    // Step 1 HTML
    const step1Html = `
      <div class="card" style="display:flex; flex-direction:column; gap:1rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="badge badge-terracotta">Step 1 • Real-Church Relevance &amp; Biblical Anchor</span>
          <span style="font-size:0.82rem; font-weight:600; color:var(--muted);">Key Texts: ${esc(w.scripture)}</span>
        </div>
        <blockquote style="margin:0; padding:0.95rem 1.15rem; border-left:4px solid var(--terracotta); background:var(--surface); border-radius:0 var(--radius-sm) var(--radius-sm) 0; font-size:0.98rem;">
          ${esc(w.hook)}
        </blockquote>
        <div class="card-subtle" style="border-color:var(--primary); background:var(--primary-soft);">
          <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--primary); margin-bottom:0.2rem;">Core Takeaway</div>
          <p style="font-size:0.95rem; font-weight:600;">${esc(w.keyTakeaway)}</p>
        </div>
        <div class="grid-3">
          <div class="card-subtle">
            <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--primary); margin-bottom:0.3rem;">Know</div>
            <p style="font-size:0.87rem;">${esc(w.outcomes.know)}</p>
          </div>
          <div class="card-subtle">
            <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--terracotta); margin-bottom:0.3rem;">Feel</div>
            <p style="font-size:0.87rem;">${esc(w.outcomes.feel)}</p>
          </div>
          <div class="card-subtle">
            <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--success); margin-bottom:0.3rem;">Do</div>
            <p style="font-size:0.87rem;">${esc(w.outcomes.do)}</p>
          </div>
        </div>
      </div>`;

    // Step 2 HTML (Core Lessons + Embedded Interactive Tools)
    const usedToolIds = new Set();
    const chunksHtml = w.chunks.map(ch => {
      const seeMores = (ch.seeMore || []).map(sm => `
        <details class="see-more">
          <summary>${esc(sm.label)}</summary>
          <div class="see-more-body">${sm.contentHtml}</div>
        </details>`).join("");
      let embeddedToolHtml = "";
      if (ch.toolId && window.DML_TOOLS[ch.toolId]) {
        usedToolIds.add(ch.toolId);
        embeddedToolHtml = renderInteractiveToolCard(ch.toolId, true);
      }
      return `
        <article class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
            <h3 style="font-size:1.15rem;">${esc(ch.title)}</h3>
            <span class="badge badge-slate">${esc(ch.readMin)} read</span>
          </div>
          <div style="font-size:0.95rem; line-height:1.68;">${ch.bodyHtml}</div>
          ${embeddedToolHtml}
          ${seeMores}
        </article>`;
    }).join("");
    const extraToolsHtml = (w.featuredTools || [])
      .filter(tid => !usedToolIds.has(tid) && window.DML_TOOLS[tid])
      .map(tid => renderInteractiveToolCard(tid, true))
      .join("");
    const step2Html = `<div style="display:flex; flex-direction:column; gap:1rem;">${chunksHtml}${extraToolsHtml ? `<div class="card" style="display:flex; flex-direction:column; gap:1rem;">${extraToolsHtml}</div>` : ""}</div>`;

    // Step 3 HTML (Workshop & Retrieval Scenarios)
    const agendaHtml = w.workshop.agenda.map(a => `
      <div class="card-subtle" style="display:flex; gap:0.85rem; align-items:flex-start;">
        <span class="badge badge-primary" style="flex-shrink:0; margin-top:2px;">${esc(a.mins)}</span>
        <div>
          <div style="font-weight:700; font-size:0.92rem;">${esc(a.title)}</div>
          <p style="font-size:0.86rem; color:var(--muted); margin-top:0.15rem;">${esc(a.instructions)}</p>
        </div>
      </div>`).join("");

    const promptsHtml = w.workshop.prompts.map(pr => {
      const val = state.notes[pr.id] || "";
      return `
        <div style="display:flex; flex-direction:column; gap:0.35rem;">
          <label for="note-${esc(pr.id)}" style="font-weight:700; font-size:0.9rem;">${esc(pr.question)}</label>
          <textarea id="note-${esc(pr.id)}" rows="3" class="field-input" data-note-id="${esc(pr.id)}" placeholder="${esc(pr.placeholder)}">${esc(val)}</textarea>
          <div style="font-size:0.75rem; color:var(--muted);">Auto-saved locally in your browser</div>
        </div>`;
    }).join("");

    const scenariosHtml = w.scenarios.map((sc, sIdx) => {
      const sKey = `w${w.week}-s${sIdx}`;
      const chosen = scenarioAnswers[sKey];
      const optsHtml = sc.options.map((op, oIdx) => {
        let cls = "scenario-opt";
        if (chosen !== undefined) {
          if (oIdx === chosen) cls += op.correct ? " correct" : " wrong";
          else if (op.correct) cls += " correct";
        }
        return `<button class="${cls}" onclick="answerScenario('${sKey}', ${oIdx})">${esc(op.text)}</button>`;
      }).join("");
      const fb = chosen !== undefined ? `
        <div class="card-subtle" style="margin-top:0.5rem; border-left:4px solid ${sc.options[chosen].correct ? "var(--success)" : "var(--terracotta)"};">
          <strong>${sc.options[chosen].correct ? "✓ Sound Wisdom:" : "Reconsider:"}</strong> ${esc(sc.options[chosen].feedback)}
        </div>` : "";
      return `
        <div class="card" style="display:flex; flex-direction:column; gap:0.65rem;">
          <span class="badge badge-gold" style="align-self:flex-start;">Real-Church Check #${sIdx + 1}</span>
          <p style="font-weight:700; font-size:0.95rem;">${esc(sc.prompt)}</p>
          <div style="display:flex; flex-direction:column; gap:0.45rem;">${optsHtml}</div>
          ${fb}
        </div>`;
    }).join("");

    const step3Html = `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <div class="card" style="display:flex; flex-direction:column; gap:0.85rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <h3 style="font-size:1.2rem;">Team Workshop Agenda (${w.workshop.totalMinutes} Minutes)</h3>
            <span class="badge badge-slate">Practice Together</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.55rem;">${agendaHtml}</div>
          <div style="border-top:1px solid var(--border); padding-top:0.9rem; display:flex; flex-direction:column; gap:0.85rem;">
            <h4 style="font-size:1.05rem;">Team Workbook Notes</h4>
            ${promptsHtml}
          </div>
        </div>
        ${scenariosHtml}
      </div>`;

    // Step 4 HTML (Field Practice & Completion)
    const fpChecks = w.fieldPractice.checklist.map(ch => {
      const checked = !!state.checks[ch.id];
      return `
        <label class="checklist-row ${checked ? "checked" : ""}">
          <input type="checkbox" data-check-id="${esc(ch.id)}" ${checked ? "checked" : ""} />
          <span style="font-size:0.92rem;">${esc(ch.text)}</span>
        </label>`;
    }).join("");
    const refId = `w${w.week}-field-reflect`;
    const refVal = state.notes[refId] || "";

    const step4Html = `
      <div class="card" style="display:flex; flex-direction:column; gap:1rem;">
        <span class="badge badge-success" style="align-self:flex-start;">Step 4 • Between-Module Relational Obedience</span>
        <h3 style="font-size:1.2rem;">Between-Session Field Practice</h3>
        <p style="font-size:0.95rem; color:var(--muted);">${esc(w.fieldPractice.summary)}</p>
        <div style="display:flex; flex-direction:column; gap:0.55rem;">${fpChecks}</div>
        <div style="display:flex; flex-direction:column; gap:0.35rem; padding-top:0.4rem;">
          <label for="note-${refId}" style="font-weight:700; font-size:0.9rem;">Debrief Reflection: ${esc(w.fieldPractice.reflectionPrompt)}</label>
          <textarea id="note-${refId}" rows="3" class="field-input" data-note-id="${refId}" placeholder="Record brief observations to share at the start of the next module...">${esc(refVal)}</textarea>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; padding-top:0.75rem; border-top:1px solid var(--border);">
          <button class="btn ${isDone ? "btn-primary" : ""}" onclick="toggleWeekComplete(${w.week})">${isDone ? "✓ Module " + w.week + " Completed" : "Mark Module " + w.week + " Complete"}</button>
          <div style="display:flex; gap:0.5rem;">
            ${w.week > 1 ? `<button class="btn" onclick="navigate('module/${w.week - 1}')">&larr; Module ${w.week - 1}</button>` : ""}
            ${w.week < 10 ? `<button class="btn btn-primary" onclick="navigate('module/${w.week + 1}')">Module ${w.week + 1} &rarr;</button>` : `<button class="btn btn-primary" onclick="navigate('sustainability')">Ongoing Continuity Hub &rarr;</button>`}
          </div>
        </div>
      </div>`;

    let bodyContent = "";
    if (showAll) {
      bodyContent = `${step1Html}${step2Html}${step3Html}${step4Html}`;
    } else if (activeWeekStep === 1) bodyContent = step1Html;
    else if (activeWeekStep === 2) bodyContent = step2Html;
    else if (activeWeekStep === 3) bodyContent = step3Html;
    else bodyContent = step4Html;

    const stepFooterNav = !showAll ? `
      <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
        <div>
          ${activeWeekStep > 1 ? `<button class="btn" onclick="setWeekStep(${activeWeekStep - 1})">&larr; Previous Step</button>` : ""}
        </div>
        <div style="display:flex; gap:0.5rem;">
          ${activeWeekStep < 4 ? `<button class="btn btn-primary" onclick="setWeekStep(${activeWeekStep + 1})">Next Step &rarr;</button>` : ""}
        </div>
      </div>` : "";

    return `
      <!-- Phase Visual Header -->
      <section class="phase-banner">
        <img src="${esc(phase.image)}" alt="${esc(phase.title)}" class="phase-banner-img" />
        <div style="padding:1.25rem 1.5rem; display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
          <div style="max-width:650px;">
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.45rem;">
              <span class="badge badge-primary">Module ${w.week} of 10</span>
              <span class="badge badge-slate">${esc(phase.title)}</span>
              <span class="badge badge-gold">Fourfold: ${esc(w.fourfoldAnchor)}</span>
            </div>
            <h1 style="font-size:1.55rem;">${esc(w.title)}</h1>
            <p style="font-size:0.93rem; color:var(--muted); margin-top:0.25rem;">${esc(w.subtitle)}</p>
          </div>
          <div class="no-print week-header-meta">
            <span style="font-size:0.8rem; color:var(--muted); font-weight:600;">${esc(w.timeBudget)}</span>
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
              <button class="btn btn-sm" onclick="printWeekHandout()">Print Handout</button>
              <button class="btn btn-sm ${isDone ? "btn-primary" : ""}" onclick="toggleWeekComplete(${w.week})">${isDone ? "✓ Completed" : "Mark Complete"}</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 4-Step Chunk Navigation -->
      <div class="step-bar no-print">
        <div class="step-tabs">${stepBtns}</div>
        <button class="step-tab ${showAll ? "active" : ""}" onclick="setWeekStep('all')">Show All / Print View</button>
      </div>

      ${bodyContent}
      ${stepFooterNav}
    `;
  }

  function renderInteractiveToolCard(toolId, embedded) {
    const t = window.DML_TOOLS[toolId];
    if (!t) return "";
    const curPartKey = activeToolParts[toolId] || t.parts[0].key;
    const curPart = t.parts.find(p => p.key === curPartKey) || t.parts[0];

    const partPills = t.parts.map(p => `
      <button class="part-pill ${p.key === curPartKey ? "active" : ""}" onclick="selectToolPart('${t.id}', '${p.key}')">${esc(p.title)}</button>`
    ).join("");

    const termsHtml = (t.relatedTerms || []).map(slug => {
      const g = window.DML_GLOSSARY[slug];
      return g ? `<span class="term" data-term="${esc(slug)}" style="font-size:0.83rem; margin-right:0.6rem;">${esc(g.term)}</span>` : "";
    }).join("");

    const origCompareHtml = t.originalSvgPath ? `
      <details class="see-more" ${embedded ? 'style="background:var(--card);"' : ""}>
        <summary>See More: Compare With Original Workbook Diagram</summary>
        <div class="see-more-body" style="text-align:center;">
          <p style="font-size:0.84rem; color:var(--muted); margin-bottom:0.75rem;">Original printed diagram from workbook (note unlabeled shapes and missing theological/pastoral guardrails):</p>
          <img src="${esc(t.originalSvgPath)}" alt="Original diagram for ${esc(t.name)}" style="max-width:440px; width:100%; border:1px solid var(--border); border-radius:var(--radius-sm); background:#fff; padding:0.5rem;" />
        </div>
      </details>` : "";

    const wrapperStyle = embedded
      ? "margin-top:1rem; padding:1rem 1.1rem; background:var(--surface); border:1px solid var(--border-strong); border-left:4px solid var(--primary); border-radius:var(--radius-md); display:flex; flex-direction:column; gap:0.9rem;"
      : "display:flex; flex-direction:column; gap:1rem;";
    const wrapperTag = embedded ? "section" : "article";
    const wrapperClass = embedded ? "integrated-tool-panel" : "card";
    const explainBg = embedded ? "background:var(--card); border:1px solid var(--border); border-left:4px solid var(--primary);" : "border-left:4px solid var(--primary);";
    const detailsStyle = embedded ? 'style="margin-top:0; background:var(--card);"' : 'style="margin-top:0;"';

    return `
      <${wrapperTag} id="lesson-tool-${esc(t.id)}" class="${wrapperClass}" style="${wrapperStyle}">
        <div>
          <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.35rem;">
            <span class="badge badge-primary">Tool #${t.number}</span>
            <span class="badge badge-slate">${esc(t.category)}</span>
            <span class="badge badge-gold">Integrated Practice Tool</span>
          </div>
          <h4 style="font-size:1.15rem;">${esc(t.name)}</h4>
          <p style="font-size:0.88rem; color:var(--muted); margin-top:0.15rem;">${esc(t.tagline)}</p>
        </div>

        <!-- Clickable Interactive SVG Stage -->
        <div class="diagram-stage" data-tool-stage="${t.id}">
          <div class="diagram-svg-scroll">${window.DML_DIAGRAMS.render(t.id, curPartKey)}</div>
          <div style="font-size:0.78rem; color:var(--muted); margin-top:0.55rem;">Click any shaded zone in the diagram or button below to inspect each piece:</div>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; justify-content:center; margin-top:0.45rem;">
            ${partPills}
          </div>
        </div>

        <!-- Selected Part Explanation -->
        <div class="card-subtle" style="${explainBg}">
          <div style="font-weight:700; font-size:0.96rem; color:var(--primary);">${esc(curPart.title)}</div>
          <p style="font-size:0.9rem; font-weight:600; margin-top:0.25rem;">${esc(curPart.summary)}</p>
          <p style="font-size:0.86rem; color:var(--muted);">${esc(curPart.deep)}</p>
        </div>

        <!-- Progressive Disclosure Details -->
        <div style="display:flex; flex-direction:column; gap:0.35rem;">
          <details class="see-more" ${detailsStyle}>
            <summary>Step-by-Step How to Use &amp; 3-Minute Napkin Script</summary>
            <div class="see-more-body">
              <p style="font-size:0.86rem; color:var(--muted);"><strong>When to use:</strong> ${esc(t.whenToUse)}</p>
              <ol style="padding-left:1.25rem; margin:0.5rem 0 0.85rem;">
                ${t.steps.map(st => `<li style="margin-bottom:0.35rem;">${esc(st)}</li>`).join("")}
              </ol>
              <div class="card-subtle" style="border-left:3px solid var(--terracotta);">
                <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--terracotta);">Teach This on a Napkin (3 Min)</div>
                <p style="font-size:0.88rem; margin-top:0.25rem;">${esc(t.napkinScript)}</p>
              </div>
            </div>
          </details>

          <details class="see-more" ${detailsStyle}>
            <summary>See More: Worked Local Church Example, Scripture &amp; Guardrails</summary>
            <div class="see-more-body">
              <p><strong>Worked Example:</strong> ${esc(t.workedExample)}</p>
              <p style="margin-top:0.55rem;"><strong>Scripture:</strong> ${esc(t.scripture)}</p>
              <p style="margin-top:0.55rem; color:var(--danger);"><strong>Guardrails / Pitfalls to Avoid:</strong> ${esc(t.guardrails)}</p>
              <div style="margin-top:0.65rem;"><strong>Related Terms:</strong> ${termsHtml}</div>
            </div>
          </details>

          ${origCompareHtml}
        </div>
      </${wrapperTag}>`;
  }

  // =========================================================================
  // VIEW 4: FULL GLOSSARY PAGE
  // =========================================================================
  function renderGlossaryPage() {
    const entries = Object.values(window.DML_GLOSSARY).sort((a, b) => a.term.localeCompare(b.term));
    const cats = ["All", "Theology", "Frontline Practice", "Church Leadership", "Learning & Tools"];
    const q = glossaryQuery.trim().toLowerCase();

    const filtered = entries.filter(e => {
      const catOk = glossaryFilterCat === "All" || e.category === glossaryFilterCat;
      const qOk = !q || e.term.toLowerCase().includes(q) || e.short.toLowerCase().includes(q) || e.deep.toLowerCase().includes(q);
      return catOk && qOk;
    });

    const catBtns = cats.map(c => `
      <button class="btn btn-sm ${glossaryFilterCat === c ? "btn-primary" : ""}" onclick="setGlossaryCat('${esc(c)}')">${esc(c)}</button>`
    ).join("");

    const cards = filtered.map(e => `
      <article class="card" style="display:flex; flex-direction:column; gap:0.55rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
          <h3 style="font-size:1.1rem;">${esc(e.term)}</h3>
          <span class="badge badge-terracotta">${esc(e.category)}</span>
        </div>
        <p style="font-size:0.92rem; font-weight:600;">${esc(e.short)}</p>
        <details class="see-more" style="margin-top:0.2rem;">
          <summary>See More: Full Explanation, Scripture &amp; Common Pitfall</summary>
          <div class="see-more-body">
            <p>${esc(e.deep)}</p>
            <p style="margin-top:0.5rem;"><strong>Key Scripture:</strong> ${esc(e.scripture)}</p>
            <p style="margin-top:0.5rem; color:var(--danger);"><strong>Watch Out For:</strong> ${esc(e.misconception)}</p>
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.65rem;">
              ${(e.relatedWeeks || []).map(wk => `<button class="btn btn-sm" onclick="navigate('module/${wk}')">Module ${wk}</button>`).join("")}
              ${(e.relatedTools || []).map(tid => { const t = window.DML_TOOLS[tid]; return `<button class="btn btn-sm" onclick="jumpToLessonTool('${tid}')">Module ${t ? t.week : 1}: ${esc(t ? t.shortName : tid)}</button>`; }).join("")}
            </div>
          </div>
        </details>
      </article>`).join("");

    return `
      <section class="card">
        <span class="badge badge-terracotta">Plain-English Reference</span>
        <h1 style="font-size:1.6rem; margin-top:0.35rem;">Curriculum Glossary (${entries.length} Terms)</h1>
        <p style="font-size:0.92rem; color:var(--muted); margin-top:0.25rem;">Every theological, frontline, pastoral, and learning concept defined clearly. You can also hover or tap any dotted-underlined word across the lessons.</p>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap; align-items:center; margin-top:0.9rem;">
          <input type="search" class="field-input" style="width:100%; max-width:340px;" placeholder="Filter glossary terms..." value="${esc(glossaryQuery)}" oninput="setGlossarySearch(this.value)" />
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">${catBtns}</div>
        </div>
      </section>
      <div class="grid-2">${cards || `<div class="card"><p>No matching terms found.</p></div>`}</div>
    `;
  }

  // =========================================================================
  // VIEW 5: FACILITATOR GUIDE & YEAR-2 SUSTAINABILITY HUB
  // =========================================================================
  function renderFacilitatorPage() {
    const fg = window.DML_CURRICULUM.facilitatorGuide;
    return `
      <section class="card">
        <span class="badge badge-primary">For Team &amp; Cohort Facilitators</span>
        <h1 style="font-size:1.6rem; margin-top:0.35rem;">${esc(fg.title)}</h1>
        <p style="font-size:0.93rem; color:var(--muted); margin-top:0.25rem;">${esc(fg.subtitle)}</p>
      </section>
      <div class="grid-2">
        ${fg.principles.map(p => `
          <div class="card">
            <h3 style="font-size:1.1rem; color:var(--primary); margin-bottom:0.4rem;">${esc(p.heading)}</h3>
            <p style="font-size:0.92rem; color:var(--muted);">${esc(p.body)}</p>
          </div>`).join("")}
      </div>
      <section class="card">
        <h2 style="font-size:1.3rem; margin-bottom:0.8rem;">Standard 90-Minute Session Rhythm</h2>
        <div style="display:flex; flex-direction:column; gap:0.55rem;">
          ${fg.ninetyMinTemplate.map(r => `
            <div class="card-subtle" style="display:flex; gap:1rem; align-items:flex-start;">
              <span class="badge badge-gold" style="flex-shrink:0;">${esc(r.mins)}</span>
              <div>
                <div style="font-weight:700;">${esc(r.segment)}</div>
                <p style="font-size:0.88rem; color:var(--muted); margin-top:0.15rem;">${esc(r.notes)}</p>
              </div>
            </div>`).join("")}
        </div>
      </section>
    `;
  }

  function renderSustainabilityPage() {
    const sh = window.DML_CURRICULUM.sustainabilityHub;
    const fieldsHtml = sh.onboardingTemplateFields.map(f => {
      const val = state.notes[f.id] || "";
      return `
        <div style="display:flex; flex-direction:column; gap:0.35rem;">
          <label for="note-${esc(f.id)}" style="font-weight:700; font-size:0.9rem;">${esc(f.label)}</label>
          <textarea id="note-${esc(f.id)}" rows="3" class="field-input" data-note-id="${esc(f.id)}" placeholder="${esc(f.placeholder)}">${esc(val)}</textarea>
        </div>`;
    }).join("");

    return `
      <section class="phase-banner">
        <img src="assets/images/phase-4-sending.png" alt="Community gathered with bread and cup as golden lanterns flow down neighborhood streets" class="phase-banner-img" />
        <div style="padding:1.35rem 1.5rem;">
          <span class="badge badge-success">Eliminating the Month 13 Cliff</span>
          <h1 style="font-size:1.6rem; margin-top:0.4rem;">${esc(sh.title)}</h1>
          <p style="font-size:0.93rem; color:var(--muted); margin-top:0.25rem;">${esc(sh.subtitle)}</p>
        </div>
      </section>

      <div class="grid-2">
        ${sh.pillars.map(p => `
          <div class="card">
            <span class="badge badge-gold">${esc(p.timing)}</span>
            <h3 style="font-size:1.15rem; margin-top:0.5rem; margin-bottom:0.4rem;">${esc(p.title)}</h3>
            <p style="font-size:0.9rem; color:var(--muted);">${esc(p.details)}</p>
          </div>`).join("")}
      </div>

      <section class="card" style="display:flex; flex-direction:column; gap:0.9rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h2 style="font-size:1.3rem;">Fillable 2-Page New Staff &amp; Elder Onboarding Manual</h2>
            <p style="font-size:0.86rem; color:var(--muted);">Hand this sheet to every incoming pastor, hire, or newly elected Elder within their first 30 days.</p>
          </div>
          <button class="btn btn-sm btn-primary no-print" onclick="window.print()">Print Onboarding Manual</button>
        </div>
        ${fieldsHtml}
      </section>
    `;
  }

  // =========================================================================
  // GLOBAL TOOLTIP ENGINE & GLOSSARY SLIDE-OVER DRAWER
  // =========================================================================
  function showTooltip(termEl) {
    const slug = termEl.getAttribute("data-term");
    const entry = window.DML_GLOSSARY[slug];
    const pop = document.getElementById("tooltip-popover");
    if (!entry || !pop) return;

    clearTimeout(hoverHideTimer);
    pop.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
        <span style="font-weight:700; font-size:0.92rem; color:var(--terracotta);">${esc(entry.term)}</span>
        <span style="font-size:0.72rem; font-weight:700; color:var(--muted); text-transform:uppercase;">${esc(entry.category)}</span>
      </div>
      <p style="font-size:0.84rem; line-height:1.5; margin-bottom:0.65rem;">${esc(entry.short)}</p>
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
        <button class="btn btn-sm btn-primary" onclick="openGlossaryDrawer('${esc(slug)}')">Full Entry &amp; Scripture &rarr;</button>
        <button class="btn btn-sm" onclick="hideTooltip(true)" aria-label="Close tooltip">✕</button>
      </div>
    `;
    pop.classList.add("visible");

    const rect = termEl.getBoundingClientRect();
    const popRect = pop.getBoundingClientRect();
    const vw = document.documentElement.clientWidth || window.innerWidth;
    const vh = document.documentElement.clientHeight || window.innerHeight;
    let top = rect.bottom + 8;
    if (top + popRect.height > vh - 12) {
      top = Math.max(12, rect.top - popRect.height - 8);
    }
    let left = rect.left;
    if (left + popRect.width > vw - 12) {
      left = Math.max(12, vw - popRect.width - 12);
    }
    pop.style.top = top + "px";
    pop.style.left = left + "px";
  }

  window.hideTooltip = function (force) {
    if (force) {
      pinnedTermEl = null;
      const pop = document.getElementById("tooltip-popover");
      if (pop) pop.classList.remove("visible");
      return;
    }
    if (pinnedTermEl) return;
    hoverHideTimer = setTimeout(() => {
      const pop = document.getElementById("tooltip-popover");
      if (pop) pop.classList.remove("visible");
    }, 220);
  };

  window.openGlossaryDrawer = function (slug) {
    hideTooltip(true);
    const entry = window.DML_GLOSSARY[slug];
    const body = document.getElementById("drawer-body");
    const drawer = document.getElementById("glossary-drawer");
    const back = document.getElementById("drawer-backdrop");
    if (!entry || !body || !drawer || !back) return;

    body.innerHTML = `
      <span class="badge badge-terracotta">${esc(entry.category)}</span>
      <h2 style="font-size:1.45rem; margin-top:0.5rem;">${esc(entry.term)}</h2>
      <p style="font-size:0.95rem; font-weight:600; margin-top:0.75rem;">${esc(entry.short)}</p>
      <div class="card-subtle" style="margin-top:0.85rem;">
        <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--primary); margin-bottom:0.25rem;">Deeper Context</div>
        <p style="font-size:0.9rem; line-height:1.6;">${esc(entry.deep)}</p>
      </div>
      <div class="card-subtle" style="margin-top:0.75rem;">
        <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--slate); margin-bottom:0.25rem;">Biblical Anchors</div>
        <p style="font-size:0.88rem;">${esc(entry.scripture)}</p>
      </div>
      <div class="card-subtle" style="margin-top:0.75rem; border-left:4px solid var(--danger);">
        <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--danger); margin-bottom:0.25rem;">Common Pitfall to Avoid</div>
        <p style="font-size:0.88rem;">${esc(entry.misconception)}</p>
      </div>
      <div style="margin-top:1rem;">
        <div style="font-size:0.8rem; font-weight:700; color:var(--muted); margin-bottom:0.4rem;">Appears In:</div>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
          ${(entry.relatedWeeks || []).map(wk => `<button class="btn btn-sm" onclick="closeGlossaryDrawer(); navigate('module/${wk}')">Module ${wk}</button>`).join("")}
          ${(entry.relatedTools || []).map(tid => { const t = window.DML_TOOLS[tid]; return `<button class="btn btn-sm btn-primary" onclick="closeGlossaryDrawer(); jumpToLessonTool('${tid}')">Module ${t ? t.week : 1}: ${esc(t ? t.shortName : tid)}</button>`; }).join("")}
        </div>
      </div>
    `;
    back.classList.add("open");
    drawer.classList.add("open");
  };

  window.closeGlossaryDrawer = function () {
    document.getElementById("drawer-backdrop").classList.remove("open");
    document.getElementById("glossary-drawer").classList.remove("open");
  };

  // =========================================================================
  // GLOBAL SEARCH MODAL
  // =========================================================================
  window.openSearchModal = function () {
    document.getElementById("search-modal-overlay").classList.add("open");
    const inp = document.getElementById("global-search-input");
    if (inp) {
      inp.value = "";
      inp.focus();
      runGlobalSearch("");
    }
  };

  window.closeSearchModal = function () {
    document.getElementById("search-modal-overlay").classList.remove("open");
  };

  window.runGlobalSearch = function (query) {
    const box = document.getElementById("search-results");
    if (!box) return;
    const q = query.trim().toLowerCase();
    const results = [];

    window.DML_CURRICULUM.weeks.forEach(w => {
      if (!q || w.title.toLowerCase().includes(q) || w.subtitle.toLowerCase().includes(q) || w.keyTakeaway.toLowerCase().includes(q)) {
        results.push({ type: "Module " + w.week, title: w.title, sub: w.subtitle, action: `closeSearchModal(); navigate('module/${w.week}')` });
      }
    });

    Object.values(window.DML_TOOLS).forEach(t => {
      if (!q || t.name.toLowerCase().includes(q) || t.tagline.toLowerCase().includes(q)) {
        results.push({ type: `Tool #${t.number} • Module ${t.week}`, title: t.name, sub: t.tagline, action: `closeSearchModal(); jumpToLessonTool('${t.id}')` });
      }
    });

    Object.values(window.DML_GLOSSARY).forEach(g => {
      if (!q || g.term.toLowerCase().includes(q) || g.short.toLowerCase().includes(q)) {
        results.push({ type: "Glossary", title: g.term, sub: g.short, action: `closeSearchModal(); openGlossaryDrawer('${g.id}')` });
      }
    });

    const sliced = results.slice(0, 18);
    box.innerHTML = sliced.length ? sliced.map(r => `
      <button class="nav-item" style="padding:0.65rem 0.8rem; border:1px solid var(--border); margin-bottom:0.4rem; background:var(--surface);" onclick="${r.action}">
        <div style="min-width:0;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="badge badge-primary">${esc(r.type)}</span>
            <span style="font-weight:700; font-size:0.9rem;">${esc(r.title)}</span>
          </div>
          <div style="font-size:0.8rem; color:var(--muted); margin-top:0.2rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${esc(r.sub)}</div>
        </div>
      </button>`).join("") : `<p style="font-size:0.9rem; color:var(--muted);">No matching modules, tools, or glossary terms found.</p>`;
  };

  // =========================================================================
  // INTERACTION HANDLERS
  // =========================================================================
  window.setWeekStep = function (step) {
    activeWeekStep = step;
    renderRoute();
  };

  window.printWeekHandout = function () {
    const prev = activeWeekStep;
    activeWeekStep = "all";
    renderRoute();
    document.querySelectorAll("details.see-more").forEach(d => d.setAttribute("open", "true"));
    setTimeout(() => {
      window.print();
      activeWeekStep = prev;
    }, 100);
  };

  window.toggleWeekComplete = function (weekNum) {
    state.completedWeeks[weekNum] = !state.completedWeeks[weekNum];
    saveState();
    renderRoute();
  };

  window.selectToolPart = function (toolId, partKey) {
    activeToolParts[toolId] = partKey;
    renderRoute(true);
  };

  window.answerScenario = function (sKey, oIdx) {
    scenarioAnswers[sKey] = oIdx;
    renderRoute(true);
  };

  window.setGlossaryCat = function (cat) {
    glossaryFilterCat = cat;
    renderRoute();
  };

  window.setGlossarySearch = function (val) {
    glossaryQuery = val;
    renderRoute();
  };

  window.toggleMobileSidebar = function () {
    const sb = document.getElementById("sidebar");
    const bd = document.getElementById("sidebar-backdrop");
    const open = sb.classList.toggle("open");
    if (bd) bd.classList.toggle("open", open);
  };

  window.closeMobileSidebar = function () {
    document.getElementById("sidebar").classList.remove("open");
    const bd = document.getElementById("sidebar-backdrop");
    if (bd) bd.classList.remove("open");
  };

  window.exportWorkbookData = function () {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dml-team-workbook-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  window.importWorkbookData = function (ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const parsed = JSON.parse(reader.result);
        state = {
          completedWeeks: parsed.completedWeeks || {},
          checks: parsed.checks || {},
          notes: parsed.notes || {}
        };
        saveState();
        renderRoute();
      } catch (err) {
        alert("Could not parse backup JSON file.");
      }
    };
    reader.readAsText(file);
  };

  function bindDynamicListeners() {
    document.querySelectorAll("input[data-check-id]").forEach(cb => {
      cb.addEventListener("change", () => {
        const id = cb.getAttribute("data-check-id");
        state.checks[id] = cb.checked;
        saveState();
        const row = cb.closest(".checklist-row");
        if (row) row.classList.toggle("checked", cb.checked);
      });
    });

    document.querySelectorAll("textarea[data-note-id]").forEach(ta => {
      ta.addEventListener("input", () => {
        const id = ta.getAttribute("data-note-id");
        state.notes[id] = ta.value;
        saveState();
      });
    });

    document.querySelectorAll(".diagram-stage").forEach(stage => {
      const toolId = stage.getAttribute("data-tool-stage");
      stage.querySelectorAll(".svg-part[data-part]").forEach(partEl => {
        partEl.addEventListener("click", () => {
          const pk = partEl.getAttribute("data-part");
          selectToolPart(toolId, pk);
        });
      });
    });
  }

  // Global Tooltip Delegated Listeners
  document.addEventListener("mouseover", (e) => {
    const t = e.target.closest(".term[data-term]");
    if (t) {
      showTooltip(t);
    } else if (e.target.closest("#tooltip-popover")) {
      clearTimeout(hoverHideTimer);
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".term[data-term]") || e.target.closest("#tooltip-popover")) {
      hideTooltip(false);
    }
  });

  document.addEventListener("click", (e) => {
    const t = e.target.closest(".term[data-term]");
    if (t) {
      e.preventDefault();
      pinnedTermEl = t;
      showTooltip(t);
      return;
    }
    if (!e.target.closest("#tooltip-popover")) {
      hideTooltip(true);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideTooltip(true);
      closeGlossaryDrawer();
      closeSearchModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearchModal();
    }
  });

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderRoute();
  });
})();
