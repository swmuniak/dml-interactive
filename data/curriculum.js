/* ==========================================================================
   Disciple Making Lab — Complete 10-Module Interactive Curriculum Data
   Grounded in Andragogy, Cognitive Load Control, Chunking & Dual Coding
   ========================================================================== */

window.DML_CURRICULUM = {
  meta: {
    title: "Disciple Making Lab",
    subtitle: "A 10-Module Interactive Curriculum for Forming Christ-Centered, Reproducing Churches",
    promise: "Across 10 focused modules, church teams root discipleship in union with Christ, practice four napkin-simple tools personally from Module 2, align elders and legacy groups before public rollout, launch weekly life-on-life pilot groups, and establish Year-2 continuity without burning out staff or volunteers.",
    audience: "Church teams of 4–8 people (Lead/Solo Pastor, Elder/governance leaders, and Lay or Next-Gen ministry leaders), explicitly paced for bivocational and multi-staff sustainability.",
    weeklyLoad: "1.5 hr team session per module + ~2 hrs/week relational field practice (funded by pruning low-fruit commitments in Module 4)."
  },

  disseminationPrinciples: [
    {
      title: "1. Chunked Working Memory",
      summary: "Every module breaks complex strategy into 4 predictable steps with interactive visual tools integrated directly inside 3–4 bite-sized micro-lessons so learners practice concepts right where they are taught."
    },
    {
      title: "2. Three-Tier Progressive Disclosure",
      summary: "Core concepts stay clean on the surface. Dotted-underlined terms give instant plain-English tooltips, while 'See More' menus tuck away exegesis and worked church examples until needed."
    },
    {
      title: "3. Dual-Coded Interactive Visuals",
      summary: "Every one of the 17 visual tools pairs concise explanation with a clickable, fully labeled SVG diagram—giving teams clear visual anchors from Day 1."
    },
    {
      title: "4. Practice Before Systematizing",
      summary: "Rather than staying purely theoretical, participants launch personal Micro-Triads in Module 2 so institutional planning grows out of lived gospel obedience."
    },
    {
      title: "5. Active Retrieval & Application",
      summary: "Each module closes with 2 realistic church dilemmas (immediate explanatory feedback), saved team notes, and measurable relational action."
    }
  ],

  phases: [
    {
      id: 1,
      title: "Phase 1: Rooted & Practicing",
      weeks: "Modules 1–3",
      image: "assets/images/phase-1-rooted.png",
      summary: "Anchor identity in union with Christ and launch personal Micro-Triads (1–4x/month) using three core Scripture, prayer, and rhythm tools."
    },
    {
      id: 2,
      title: "Phase 2: Honest Ground & Bridges",
      weeks: "Modules 4–6",
      image: "assets/images/phase-2-bridges.png",
      summary: "Audit real church clutter, prune low-fruit programs, build neighbor evangelism bridges, and align elders and veteran group leaders."
    },
    {
      id: 3,
      title: "Phase 3: Friction Valley & Weekly Rhythm",
      weeks: "Modules 7–8",
      image: "assets/images/phase-3-journey.png",
      summary: "Equip leaders to walk with struggling disciples through relational valleys and launch weekly life-on-life pilot groups."
    },
    {
      id: 4,
      title: "Phase 4: Weaving Culture & Sending",
      weeks: "Modules 9–10",
      image: "assets/images/phase-4-sending.png",
      summary: "Co-design Sunday liturgy and Next-Gen alignment, lock in vetting and 1:4–5 Soul Care guardrails, and commission teams for Year 2."
    }
  ],

  preLaunch: {
    title: "Pre-Launch Gate (Module 0 — Complete Before Module 1)",
    subtitle: "Three foundational groundwork steps ensuring transparent Elder partnership and shared team ownership before launching.",
    items: [
      { id: "w0-covenant", text: "Elder Board Covenant Sign-Off: Elders review the 10-Module overview and commit to honest dialogue in Module 6 and formal ratification in Module 10." },
      { id: "w0-team", text: "Multi-Ministry Team Formed: Assemble 4–8 people including Elder/governance voices and Next-Gen or lay small-group leaders." },
      { id: "w0-snapshot", text: "2-Page Baseline Reality Snapshot: Jot down honest numbers for Sunday attendance, active group participation, and current volunteer calendar pressure." }
    ]
  },

  weeks: [
    /* ======================== WEEK 1 ======================== */
    {
      week: 1,
      phase: 1,
      title: "Rooted in Christ & Honest Groundwork",
      subtitle: "Diagnosing consumer church habits and anchoring discipleship in union with Christ",
      timeBudget: "90-Min Team Session + 6 Parishioner Conversations",
      fourfoldAnchor: "Cross (Savior) & Laver (Sanctifier)",
      scripture: "Romans 8:28–30; Matthew 22:37–39; 2 Corinthians 3:18; 5:14–20; Luke 9:23",
      hook: "Most pastors know the silent ache: our Sunday rooms are friendly and volunteer rosters stay mostly full, yet almost nobody feels equipped to open the Bible and walk with a friend toward Jesus. Why does busy church activity rarely produce spiritual grandchildren?",
      keyTakeaway: "You cannot fix consumer Christianity with a harder behavioral checklist. Lasting multiplication starts with Christ's call into a loving relationship and his Spirit transforming us into his likeness—balanced across shared church culture (PLAN) and personal apprenticeship (PATH).",
      outcomes: {
        know: "Why passive attendance stalls at 30% serving—and how starting with Christ's call, loving relationship, and Spirit transformation (resting on grace) corrects bare activity checklists.",
        feel: "Humbled by grace and relieved: renewal does not rest on heroic willpower, but on walking with Christ together.",
        do: "Map your congregation honestly on the Master Bowtie and draft a plain-English, Christ-centered definition of a disciple."
      },
      chunks: [
        {
          id: "w1-c1",
          toolId: "bowtie",
          title: "1. Exposing the Attractional Funnel (Bowtie Diagnosis)",
          readMin: "3 min",
          bodyHtml: `
            <p>Look honestly at how most Western churches operate: 100% attend Sunday services, roughly 60% connect in a social class or lobby, and 30% volunteer to keep events running—yet often only 2% actively help someone else follow Jesus. The <span class="term" data-term="bowtie-master-tool">Discipling Culture Master Tool (Bowtie)</span> shows why we need two wings working together.</p>
            <p>On the left wing, <span class="term" data-term="culture-making-plan">Culture Making (PLAN)</span> shapes what feels normal across the whole church through shared Practices, Language, Artifacts, and Narratives. On the right wing, <span class="term" data-term="relational-apprenticeship-path">Relational Apprenticeship (PATH)</span> equips ordinary believers to walk life-on-life with 2–3 friends.</p>
          `,
          seeMore: [
            {
              label: "See More: How the 16% Tipping Point Really Works",
              contentHtml: `<p>Organizational research observes that cultural momentum often shifts around a <span class="term" data-term="tipping-point">16% Tipping Point</span>. Treat this descriptively—not as a mechanical guarantee! You do not need unanimous church buy-in before starting in Module 2; God regularly uses small pockets of faithful leaven (Mt 13:33), though only God gives the growth (1 Cor 3:7).</p>`
            },
            {
              label: "See More: Why Word & Table Anchor the Center",
              contentHtml: `<p>At the Bowtie's center stands a sent <span class="term" data-term="word-and-table">Word &amp; Table</span> community—not a welcome desk. Preached Scripture, Baptism, and Communion continually re-center believers in Christ so Sunday worship feeds everyday apprenticeship rather than competing with it.</p>`
            }
          ]
        },
        {
          id: "w1-c2",
          toolId: "gospel-definition",
          title: "2. The Destination: Defining a Disciple (With Christ, Like Christ, On Mission)",
          readMin: "4 min",
          bodyHtml: `
            <p>How you define a <span class="term" data-term="disciple">disciple</span> sets the target for everything else. When churches omit relationship with Jesus, definitions quietly shrink to checklists of religious tasks—while underneath every healthy definition sit <span class="term" data-term="justification">justification</span> and <span class="term" data-term="union-with-christ">union with Christ</span> as the rich gospel foundation.</p>
            <p>The fourfold movement stays wonderfully clear and relational: a disciple is one <strong>called by Christ</strong> (Rom 8:28–30) into a <strong>loving relationship with Christ</strong> (Mt 22:37–39), for the purpose of <strong>becoming like Christ</strong> by the Spirit (2 Cor 3:18), while <strong>on mission with Christ</strong> in daily <span class="term" data-term="cross-bearing">cross-bearing</span> love (2 Cor 5:14–20; Lk 9:23).</p>
          `,
          seeMore: [
            {
              label: "See More: Why the C&MA Fourfold Gospel Matters Here",
              contentHtml: `<p>Honoring the C&amp;MA distinctives of the Cross (Savior), Laver (Sanctifier), Pitcher (Healer), and Crown (Coming King), this curriculum roots every module in the <span class="term" data-term="fourfold-gospel">Fourfold Gospel</span>: Jesus our <strong>Savior</strong> rescues us by grace; Jesus our <strong>Sanctifier</strong> indwells and purifies us by the Spirit; Jesus our <strong>Healer</strong> restores our brokenness; Jesus our <strong>Coming King</strong> sustains humble mission.</p>`
            },
            {
              label: "See More: Keeping the Foundation & Four Movements Together",
              contentHtml: `<p>Notice how well this works together: (1) <em>Justification &amp; union</em> sit under discipleship as the saving foundation—a 12-word definition doesn't need technical theological terms, because beginners and lifelong saints alike start by being called into Christ's relationship; (2) <em>Mt 22:37</em> naturally pairs love of God with v. 39 ('love your neighbor'); (3) <em>2 Cor 3:18</em> credits 'the Lord, who is the Spirit'; (4) <em>2 Cor 5:14–20</em> roots ambassadorship in Christ's reconciling cross.</p>`
            }
          ]
        },
        {
          id: "w1-c3",
          title: "3. Why This Lab Uses Chunked Learning & Dual Tracks",
          readMin: "2 min",
          bodyHtml: `
            <p>Teams flourish when shared discernment stays paired with lived relationships and transparent partnership with their <span class="term" data-term="stakeholder-alignment">Elders</span>. Built on <span class="term" data-term="andragogy">chunked adult learning</span>, this 10-module path runs two synchronized tracks.</p>
            <p><strong>Track A (Personal Obedience)</strong> puts every team member into a <span class="term" data-term="micro-triad">Micro-Triad</span> (meeting 1–4 times per month) starting in Module 2. <strong>Track B (Church Alignment)</strong> moves honesty, pruning, and board listening ahead of wider pilots so trust grows alongside practice.</p>
          `,
          seeMore: [
            {
              label: "See More: Building Early Elder Partnership",
              contentHtml: `<p>Make sure you completed the <strong>Pre-Launch Gate</strong> before Module 2: share your 2-page Baseline Reality Snapshot openly with your Elders so shared trust anchors everything that follows.</p>`
            }
          ]
        }
      ],
      featuredTools: ["bowtie", "gospel-definition"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Personal Reflection Hook", instructions: "Each person shares briefly: 'When in your life did you experience the deepest spiritual growth, and who walked alongside you?'" },
          { mins: "25m", title: "Honest Bowtie Snapshot", instructions: "Click through the Bowtie diagram together. Map your real church numbers along Attend / Connect / Serve / 2% Reproducing." },
          { mins: "35m", title: "Draft Christ-Centered Disciple Definition", instructions: "Using the Christ-Centered Disciple Definition tool, write a 12–15 word plain-English statement honoring Christ's call into relationship, Spirit transformation, and cross-bearing mission." },
          { mins: "15m", title: "Commit to Module 1 Interviews", instructions: "Assign each team member to ask 2 ordinary parishioners before Module 2: 'How would you describe a disciple of Jesus?'" }
        ],
        prompts: [
          { id: "w1-bowtie-gap", question: "Where is our church strongest right now (Left Wing PLAN vs. Right Wing PATH), and where do people stall?", placeholder: "e.g., Strong Sunday preaching and welcome teams (30% serving), yet almost no structured 1-on-3 mentoring..." },
          { id: "w1-def-draft", question: "Our Team's Working Definition of a Disciple (12–15 plain words):", placeholder: "e.g., Someone called into a loving relationship with Jesus, becoming like him by his Spirit while joining his mission." }
        ]
      },
      scenarios: [
        {
          prompt: "Your team drafts a catchy definition: 'A disciple is someone who reads the Bible, serves on Sunday, and invites a friend.' What critical flaw would a pastor or theologian flag?",
          options: [
            { text: "It's too long to remember on a Sunday slide.", correct: false, feedback: "Length isn't the main issue—it's already short! The deeper issue is relational and spiritual agency." },
            { text: "It reduces discipleship to a list of religious chores without mentioning a loving relationship with Jesus or the Spirit's work of making us like him.", correct: true, feedback: "Exactly. A short definition doesn't need heavy positional jargon—just center it on Christ's call into a loving relationship and the Spirit transforming us into his likeness, rather than bare church activity." },
            { text: "It mentions serving too early in the sentence.", correct: false, feedback: "Serving is good, but without flowing from relationship with Jesus and his Spirit's work, service quickly turns into 'church activity' fatigue." }
          ]
        },
        {
          prompt: "A fellow pastor says, 'Let's wait for several months until our plans are polished before talking with the Elder Board.' What is the wisest response?",
          options: [
            { text: "Let's invite Elders and key staff into the conversation from Module 1—transparency builds shared trust before any church-wide pilot launches.", correct: true, feedback: "Spot on. Early governance transparency prevents later friction and builds shared ownership before any church-wide pilot launches." },
            { text: "Agree—boards slow things down, so finish all tools first.", correct: false, feedback: "Keeping elders outside the loop causes pushback later when they feel bypassed on spiritual governance." },
            { text: "Put everyone in the church through a 2-day seminar tomorrow.", correct: false, feedback: "Rushing the whole congregation before modeling personally creates classroom noise without lived imitation." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Listen to your congregation's baseline assumptions and confirm your Pre-Launch Elder Covenant.",
        checklist: [
          { id: "w1-f1", text: "Confirm Elder Board covenant sign-off & 2-Page Baseline Reality Snapshot (Pre-Launch Gate)." },
          { id: "w1-f2", text: "Ask 2 ordinary congregation members: 'In your own words, what is a disciple of Jesus?'" },
          { id: "w1-f3", text: "Pray daily through Galatians 2:20 and list 2–3 friends you might invite into a Micro-Triad (1–4x/month) in Module 2." }
        ],
        reflectionPrompt: "What surprised you most when listening to ordinary members describe a disciple?"
      }
    },

    /* ======================== WEEK 2 ======================== */
    {
      week: 2,
      phase: 1,
      title: "Core Tools I: Listening to Scripture & Praying with the Father",
      subtitle: "Mastering two 101-level napkin tools and launching personal Micro-Triads (1–4x/month)",
      timeBudget: "90-Min Team Session + Launch 45-Min Micro-Triad (1–4x/Month)",
      fourfoldAnchor: "Laver (Sanctifier) & Cross (Forgiveness)",
      scripture: "Luke 24:27; 2 Peter 1:20; Matthew 6:9–13; Hebrews 4:14–16; James 1:22",
      hook: "Ordinary believers rarely resist discipling others because they hate Jesus—they stay silent because churches hand them intimidating 12-week workbooks. What happens if every follower has two tools simple enough to sketch on a coffee-shop napkin?",
      keyTakeaway: "We learn Scripture and prayer by doing them together in small, grace-filled circles—anchored in Christ's context and launching real Micro-Triads (1–4 times per month) right now rather than waiting months.",
      outcomes: {
        know: "How Look • Listen • Live guards against subjective proof-texting with three sticky icons, and how the 4-Beat Prayer Ring turns the Lord's Prayer into a 15-second napkin sketch.",
        feel: "Equipped and unafraid—confident you can open Scripture and pray with two friends right away without being a seminary scholar.",
        do: "Practice both tools live in session and schedule your first 45-minute Micro-Triad (meeting 1–4 times per month)."
      },
      chunks: [
        {
          id: "w2-c1",
          title: "1. What Makes a 101-Level Napkin Tool?",
          readMin: "2 min",
          bodyHtml: `
            <p>Instead of inventing six custom diagrams from scratch, we focus on four shared <span class="term" data-term="napkin-tool">101-Level Napkin Tools</span> over Modules 2–5. Good tools are simple (sketchable in under 60 seconds), visual, action-oriented, transferable, and deep enough to grow with a saint for decades.</p>
          `,
          seeMore: [
            {
              label: "See More: Why We Master Proven Tools Before Customizing",
              contentHtml: `<p>Forcing church teams to invent 5–6 bespoke tools quickly overwhelms busy laypeople and breaks multi-generational transfer. A truck driver or busy parent can pass on three or four clear napkin tools across four generations.</p>`
            }
          ]
        },
        {
          id: "w2-c2",
          toolId: "bible-circle",
          title: "2. Look • Listen • Live Bible Tool (Eyes, Ear, Footprints)",
          readMin: "3 min",
          bodyHtml: `
            <p>Instead of an abstract geometric slice, <strong>Look &bull; Listen &bull; Live</strong> pairs <span class="term" data-term="pneumatology">Spirit-dependence</span> with three unforgettable Eyes/Ear/Footprints icons: <strong>LOOK</strong> with your eyes (what does the text mean in context and reveal about Christ?), <strong>LISTEN</strong> with your ear (what is the Spirit stirring in us together?), and <strong>LIVE</strong> with your footprints (one 48-hour step and someone to encourage).</p>
            <p>Adding <span class="term" data-term="christocentric-reading">Christocentric reading</span> (Lk 24:27) and community testing (2 Pet 1:20) prevents subjective cherry-picking, while a quick toggle converts it to a <span class="term" data-term="seeker-dbs">Seeker DBS</span> with non-Christians.</p>
          `,
          seeMore: [
            {
              label: "See More: Practicing a Passage Live (Luke 19:1–10)",
              contentHtml: `<p>Try Step 1 (LOOK) on Zacchaeus: notice tax collectors were despised collaborators (context), and Jesus sought out an outsider to bring salvation to his house (Christ). Step 2 (LISTEN): Where do I avoid people my neighbors look down on? Step 3 (LIVE): Invite one overlooked coworker to coffee within 48 hours and share what moved you.</p>`
            }
          ]
        },
        {
          id: "w2-c3",
          toolId: "prayer-wheel",
          title: "3. 4-Beat Prayer Ring (Praise • Confess & Lament • Ask • Go)",
          readMin: "3 min",
          bodyHtml: `
            <p>Rather than crowding six separate theology spokes onto a busy diagram, the <strong>4-Beat Prayer Ring</strong> draws one circle split by a cross (+): at the center sits <strong>Our Father, approached in Christ</strong> (Heb 4:16), surrounded by four clockwise beats from Matthew 6:9–13: <strong>1. Praise</strong> (Up), <strong>2. Confess &amp; Lament</strong> (In), <strong>3. Ask</strong> (Around), and <strong>4. Go</strong> (Out).</p>
            <p>Beat 2 holds honest <span class="term" data-term="lament-endurance">Lament</span>, forgiving others as Christ pardoned us (Mt 6:12), and the <span class="term" data-term="examen">Cross-Centered Examen</span>—scaling smoothly from 2 minutes over lunch to 20 minutes in quiet reflection.</p>
          `,
          seeMore: [
            {
              label: "See More: Why Four Beats Stick Where Six Spokes Overload",
              contentHtml: `<p>Anyone can sketch a circle and a cross on a napkin in 15 seconds. Beginners can pray 30 seconds per beat (2 minutes total) beside a friend without freezing, while veteran Soul Care pods can linger five minutes per beat—anchoring prayer Worship-based, Scripture-fed, and Spirit-led.</p>`
            }
          ]
        },
        {
          id: "w2-c4",
          title: "4. Track A Deployment: Launching Your Micro-Triad Now",
          readMin: "2 min",
          bodyHtml: `
            <p>Delayed obedience slows spiritual momentum. Rather than waiting until Module 8 to start church-wide pilots, every lab participant gathers 2–3 friends (or open seekers) into a 45-minute <span class="term" data-term="micro-triad">Personal Micro-Triad</span> (meeting 1–4 times per month) starting right away over coffee, breakfast, or a living room.</p>
          `,
          seeMore: [
            {
              label: "See More: How to Invite Two Friends Without Being Awkward",
              contentHtml: `<p>Keep it completely human: <em>'I'm trying to grow in actually reading the Bible and praying in real life, not just Sunday mornings. Would you two want to grab coffee for 45 minutes a couple times a month (1–4x/month) and try a super simple tool together?'</em></p>`
            }
          ]
        }
      ],
      featuredTools: ["bible-circle", "prayer-wheel"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "25m", title: "Live Look • Listen • Live Lab (Model -> Try)", instructions: "Read Mark 2:1–12 together using Eyes / Ear / Footprints. Practice summarizing context and pointing to Christ before personal application." },
          { mins: "25m", title: "Live 4-Beat Prayer Ring Lab", instructions: "Pray in pairs: walk clockwise through Praise, Confess & Lament, Ask, and Go in a 2-minute round (30s/beat), then share honest Examen reflection." },
          { mins: "20m", title: "30-Second Napkin Sketch Drill", instructions: "Close screens and draw both icons (Eyes/Ear/Footprints and Circle-Cross 4-Beat Ring) on scratch paper in under 30 seconds each, teaching them to your partner." },
          { mins: "20m", title: "Schedule Micro-Triads", instructions: "Each person names 2–3 specific friends to invite right away and locks in a target day/time." }
        ],
        prompts: [
          { id: "w2-triad-plan", question: "Who are the 2–3 people I am inviting into my 45-min Micro-Triad (1–4x/month — Cadence / Day / Time / Location)?", placeholder: "e.g., Sam and Jordan — 2x/month on Tuesdays 7:00 AM at Corner Bakery (or living room)." },
          { id: "w2-debrief-insight", question: "From Module 1 parishioner interviews, what stood out in how most members described a disciple?", placeholder: "e.g., Most emphasized attending church or being moral, almost none mentioned union with Christ or passing faith on." }
        ]
      },
      scenarios: [
        {
          prompt: "In your triad, someone reads Philippians 4:13 ('I can do all things through Christ') and says, 'I feel led to believe this guarantees my business won't fail this quarter.' Using Look • Listen • Live, how do you respond?",
          options: [
            { text: "Affirm it enthusiastically—Step 2 (Listen) says whatever impression hits me first is automatically the passage's meaning.", correct: false, feedback: "Careful! Jumping straight to feelings in Listen without Step 1 Look invites subjective misreading." },
            { text: "Gently return to Step 1 (LOOK): notice Paul wrote this from prison about contentment in poverty or plenty through Christ's strength.", correct: true, feedback: "Exactly. LOOK anchors what the text meant in context and how Christ strengthens us for endurance, not guaranteed material success." },
            { text: "Tell them they aren't allowed to share personal impressions in the group.", correct: false, feedback: "We want Spirit-led heart engagement in LISTEN—just tested warmly by Scripture's actual context." }
          ]
        },
        {
          prompt: "A brand-new believer joins your breakfast triad and freezes when asked to pray aloud, worried they don't know 'theological' prayer phrases. How does the 4-Beat Prayer Ring set them free immediately?",
          options: [
            { text: "Keep it to the 2-minute circle (30 seconds per beat: Praise, Confess, Ask, Go) using short, ordinary sentences to our Father in Christ.", correct: true, feedback: "Wise! Four intuitive beats around a 15-second cross-in-circle sketch remove performance anxiety from Day 1." },
            { text: "Assign them to study a prayer handbook alone for four weeks before praying aloud.", correct: false, feedback: "Prayer is caught through humble shared practice (Imitation), not homework prerequisites." },
            { text: "Skip prayer altogether so nobody feels uncomfortable.", correct: false, feedback: "Modeling short, honest 2-sentence prayers frees beginners far better than silence." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Launch your personal Micro-Triad (1–4x/month) and practice both sticky napkin tools.",
        checklist: [
          { id: "w2-f1", text: "Invite 2–3 friends and hold your first 45-minute Micro-Triad gathering (1–4x/month cadence)." },
          { id: "w2-f2", text: "Practice Look • Listen • Live (Eyes / Ear / Footprints) at least 3 days personally." },
          { id: "w2-f3", text: "Use the 2-minute 4-Beat Prayer Ring or Cross-Centered Examen twice before bed." }
        ],
        reflectionPrompt: "How easily could you sketch and share Look • Listen • Live and the 4-Beat Prayer Ring with your triad?"
      }
    },

    /* ======================== WEEK 3 ======================== */
    {
      week: 3,
      phase: 1,
      title: "Core Tools II: The Jesus Pattern & Everyday Imitation",
      subtitle: "Following Jesus's Luke 6 mountain rhythm (UP, IN, DOWN, OUT) and shifting from lectures to shared life",
      timeBudget: "90-Min Team Session + Micro-Triad (1–4x/Month)",
      fourfoldAnchor: "Cross (Kenotic Descent) & Laver (Imitation)",
      scripture: "Luke 6:12–19; Mark 3:13–15; Luke 9:23, 28–43; Philippians 2:5–8; 1 Corinthians 4:14–17; 2 Timothy 2:2",
      hook: "Why can someone attend 500 Sunday sermons and still freeze when a coworker asks about grief or prayer? Because Western churches treat Truth as a classroom download and skip the middle bridge Jesus and Paul relied on every day: shared-life imitation.",
      keyTakeaway: "Healthy discipleship follows Jesus's sequential Luke 6:12–19 progression—going 1. UP to the Father -> calling disciples 2. IN -> stepping DOWN to the level place in cross-bearing humility -> pouring 3. OUT to the crowds—paired with the TIM Tool (Truth -> Imitation -> Multiplication).",
      outcomes: {
        know: "How Jesus's Luke 6 mountain progression flows sequentially from 1. UP -> 2. IN -> DOWN (humble descent to the level place & cross) -> 3. OUT, and why Imitation bridges Truth and Multiplication.",
        feel: "Liberated from feeling like a polished lecturer; willing to step down beside 2–3 friends in real dependence on Christ.",
        do: "Audit your calendar with the Jesus Pattern Mountain Compass and invite one triad friend into an ordinary errand or meal this week."
      },
      chunks: [
        {
          id: "w3-c1",
          toolId: "jesus-pattern",
          title: "1. Jesus's Mountain Progression: 1. UP &rarr; 2. IN &rarr; DOWN &rarr; 3. OUT (Luke 6:12–19)",
          readMin: "3 min",
          bodyHtml: `
            <p>Look closely at the cause-and-effect progression in Luke 6:12–19: Jesus first leaves the noise and goes <strong>1. UP</strong> the mountain to pray all night to his Father (v. 12). Out of that communion, he calls his disciples <strong>2. IN</strong> and names the Twelve to be with him (vv. 13–16; Mk 3:14). Then <em>'he came <strong>DOWN</strong> with them and stood on a level place'</em> (v. 17a) so they could pour <strong>3. OUT</strong> teaching and healing the multitudes (vv. 17b–19).</p>
            <p>Notice the order: <strong>UP &rarr; IN &rarr; OUT</strong> (carried <strong>DOWN</strong> into real life). Without <strong>1. UP</strong>, <strong>2. IN</strong> becomes shallow socializing; without stepping <strong>DOWN</strong> to the valley base (<span class="term" data-term="cross-bearing">Cross-Bearing &amp; Union with Christ</span>, Lk 9:23; Phil 2:5–8), disciples stay insulated on the mountainside instead of pouring <strong>3. OUT</strong> to neighbors.</p>
          `,
          seeMore: [
            {
              label: "See More: Remembering Exemplum vs. Sacramentum",
              contentHtml: `<p>Christ's descent went all the way to his unique substitutionary cross (Mk 10:45; Lk 9:37), which only he could accomplish. Because we are united to him (<span class="term" data-term="union-with-christ">Union with Christ</span>), our coming <strong>DOWN</strong> and going <strong>OUT</strong> announces his finished rescue and shares his mercy with neighbors on the level place.</p>`
            }
          ]
        },
        {
          id: "w3-c2",
          toolId: "training-triangle",
          title: "2. The TIM Tool (Truth • Imitation • Multiplication): No Classroom Shortcuts",
          readMin: "3 min",
          bodyHtml: `
            <p>In 1 Corinthians 4:14–17, Paul reminded Corinth they had ten thousand classroom 'tutors,' yet few spiritual fathers—and sent <strong>Timothy</strong> to remind them of his lived ways in Christ. The sticky <span class="term" data-term="training-triangle">TIM Tool</span> (<strong>T</strong>ruth &bull; <strong>I</strong>mitation &bull; <strong>M</strong>ultiplication) shows why classes rarely multiply: we try jumping from biblical Truth directly to sending people out.</p>
            <p>Real apprenticeship walks down through <strong>Imitation</strong> (sharing meals, home life, setbacks, and prayer side-by-side) into <span class="term" data-term="faithful-multiplication">Faithful Multiplication</span> (2 Tim 2:2)—guarding the gospel deposit as we pass it to others.</p>
          `,
          seeMore: [
            {
              label: "See More: Framing Faithful Multiplication (2 Tim 2:2)",
              contentHtml: `<p>Rather than rushing to invent brand-new tools before living the basics, Paul calls us to faithfully entrust tested truth to reliable people who will teach others also (2 Tim 2:2).</p>`
            }
          ]
        },
        {
          id: "w3-c3",
          title: "3. First Micro-Triad Debrief: Learning From Real Dirt",
          readMin: "2 min",
          bodyHtml: `
            <p>Every session from Module 3 onward starts with honest debriefing from your lived <span class="term" data-term="micro-triad">Micro-Triads</span>. What felt natural? Where did scheduling collapse? Real experience in Modules 2–4 prepares your team to audit church clutter wisely in Module 4.</p>
          `,
          seeMore: [
            {
              label: "See More: Turning Errands Into Imitation",
              contentHtml: `<p>Imitation doesn't require extra formal meetings. Bring a younger believer along when visiting a sick shut-in, dropping groceries at a neighbor's porch, or cooking dinner—and debrief for five minutes in the car afterward.</p>`
            }
          ]
        }
      ],
      featuredTools: ["jesus-pattern", "training-triangle"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "20m", title: "Micro-Triad Debrief", instructions: "Share candidly from Module 2's first triad: who showed up, what worked with Look • Listen • Live and the 4-Beat Prayer Ring, and any awkward moments." },
          { mins: "25m", title: "Jesus Pattern Calendar Audit", instructions: "Individually score your past 7 days (1–5) on UP, IN, and OUT. Notice which corner was starved—and ask where DOWN (humility) is inviting you." },
          { mins: "30m", title: "TIM Tool Audit", instructions: "Look at how your church trains new believers or volunteers: sketch where you jump straight from Truth (T) to expected Multiplication (M) without Imitation (I)." },
          { mins: "15m", title: "Plan One Shared-Life Moment", instructions: "Pick one ordinary errand, meal, or neighbor visit before the next session to invite a triad friend along." }
        ],
        prompts: [
          { id: "w3-calendar-gap", question: "Across UP / IN / OUT this past week, which rhythm was weakest—and what one calendar trade frees space for it?", placeholder: "e.g., OUT was 1/5 (all meetings were with church insiders). Swapping Thursday evening admin review for neighbor porch dinner." },
          { id: "w3-imitation-step", question: "One ordinary life-on-life moment I will invite a triad member into this week (Imitation):", placeholder: "e.g., Having Jordan join me when delivering meals to our recovering church member." }
        ]
      },
      scenarios: [
        {
          prompt: "A keen leader suggests: 'Our church knows how to preach Truth, so let's launch a 4-week workshop where everyone creates their own custom discipleship diagrams next month.' What warning does the TIM Tool give?",
          options: [
            { text: "Great idea—creativity speeds up ownership.", correct: false, feedback: "Rushing into inventing custom tools skips lived Imitation and overwhelms ordinary believers." },
            { text: "Jumping straight from Truth to inventing/multiplying skips months of lived Imitation, producing untested abstractions.", correct: true, feedback: "Spot on. Live inside the core tools alongside real friends for months before adapting anything." },
            { text: "Tell them to cut Bible teaching completely so people only imitate.", correct: false, feedback: "Truth rooted in Scripture is essential! The triangle needs all three corners connected through Imitation." }
          ]
        },
        {
          prompt: "You notice your calendar shows 5 hours of church meetings (IN) and 3 hours of personal study (UP), yet zero hours with anyone outside the church (OUT). What is the healthiest next step?",
          options: [
            { text: "Add two new weekly outreach committee meetings on top of your schedule.", correct: false, feedback: "Adding internal meetings worsens calendar overload without putting you beside neighbors." },
            { text: "Ask where you can pause or combine an internal obligation so you can dine or walk with an unchurched neighbor.", correct: true, feedback: "Yes! Subtracting low-fruit clutter creates sustainable room for authentic OUT hospitality." },
            { text: "Drop your UP time with God to free up Tuesday mornings.", correct: false, feedback: "Starving UP dries out both IN and OUT; trade internal busyness, not communion with the Father." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Keep your Micro-Triad (1–4x/month) rolling and add one intentional Imitation + OUT rhythm.",
        checklist: [
          { id: "w3-f1", text: "Hold your next Micro-Triad gathering (let another member summarize the Bible passage first)." },
          { id: "w3-f2", text: "Invite one triad friend into an ordinary moment of service, meal prep, or hospitality (Imitation)." },
          { id: "w3-f3", text: "Do a 5-minute Sunday evening UP/IN/OUT/DOWN check in your journal." }
        ],
        reflectionPrompt: "What did your triad friend notice or ask when stepping into ordinary life with you (Imitation)?"
      }
    },

    /* ======================== WEEK 4 ======================== */
    {
      week: 4,
      phase: 2,
      title: "Honest Ground: Current Reality, Pruning & Stewardship",
      subtitle: "Auditing your church's actual PATH & PLAN, mourning hardships without false guilt, and pruning clutter",
      timeBudget: "90-Min Team Session + 2 Candid Feedback Chats",
      fourfoldAnchor: "Crown (Coming King) Sober Stewardship",
      scripture: "John 15:1–8; Mark 4:26–29; 1 Corinthians 3:6–9; 2 Corinthians 11:23–12:10",
      hook: "Most church initiatives die by Month 6 for one dull reason: leaders keep piling new groups and tools onto an already maxed-out calendar until volunteers break. Before we ever launch church-wide groups, we must take an honest look at what already exists—and decide what to prune.",
      keyTakeaway: "You cannot navigate to 'What Could Be' until you tell the truth about 'What Is.' Module 4 pairs an honest mirror of your church's actual rooms and volunteer calendar with a 4-quadrant pastoral diagnostic and John 15 pruning: separating internal clutter we must stop from external trials we lament by faith.",
      outcomes: {
        know: "Where existing church programs reward passive attendance vs. genuine growth—and why uncontrollable external trials are NOT moral failure.",
        feel: "Relieved of false pastoral guilt over things outside human control, and courageous enough to stop 1–2 cluttered commitments.",
        do: "Complete the 4-column 'What Is' Snapshot across your rooms and volunteer calendar, then identify 1–2 commitments for your Pruning Gate."
      },
      chunks: [
        {
          id: "w4-c1",
          toolId: "what-is-audit",
          title: "1. The 'What Is' Snapshot: Taking Honest Stock of Where We Are",
          readMin: "3 min",
          bodyHtml: `
            <p>Before a leadership team can map <em>What Could Be</em>, shepherds must tell the truth about <em>What Is</em> (&ldquo;Know well the condition of your flocks,&rdquo; Prov 27:23). Too often, churches bolt new small-group habits onto an already maxed-out calendar without ever taking an honest look at what currently fills the week.</p>
            <p><strong>The &lsquo;What Is&rsquo; Snapshot</strong> lays everything out on one clean 4-column table across your <span class="term" data-term="relational-apprenticeship-path">PATH</span> and <span class="term" data-term="culture-making-plan">PLAN</span>:</p>
            <ol>
              <li><strong>1. Destination:</strong> What does our church brochure say a disciple is—and what does our Sunday stage or budget actually applaud?</li>
              <li><strong>2. Map:</strong> Once someone joins or is baptized, is there an intentional growth map, or just endless Sunday lectures?</li>
              <li><strong>3. Vehicles:</strong> List every active room, group, youth night, and committee—spotting where life-on-life growth happens vs. where busyness drains key volunteers.</li>
              <li><strong>4. Tools:</strong> Could half your adults sketch one <span class="term" data-term="napkin-tool">simple Bible, prayer, or neighbor tool</span> for a friend tomorrow?</li>
            </ol>
            <p>Once your raw Snapshot is on the board, Lesson 2 sorts it cleanly on <strong>The Stewardship Crossroads</strong> and Lesson 3 prunes clutter on the <strong>John 15 Vine</strong>.</p>
          `,
          seeMore: [
            {
              label: "See More: Quick Litmus Test — 'Program Island' vs. 'Disciplemaking Greenhouse'",
              contentHtml: `<p>As you list rooms under Column 3 (Vehicles), ask three gentle questions: <strong>(1) Voice Ratio:</strong> Does one teacher talk 80% of the time, or do 3–5 friends open Scripture and share honestly? <strong>(2) 48-Hour Step:</strong> Do people leave with one obedience step and an <span class="term" data-term="oikos">Oikos</span> neighbor? <strong>(3) Bench Depth:</strong> If the host is away for a month, can an apprentice lead naturally?</p>`
            },
            {
              label: "See More: Inventorying Volunteer Load With Gratitude",
              contentHtml: `<p>Every ministry on your calendar was started by someone who cared. Honor faithful volunteers while checking how many nights a week your top 10 lay leaders spend maintaining internal meetings rather than sharing tables with young believers and neighbors.</p>`
            }
          ]
        },
        {
          id: "w4-c2",
          toolId: "reality-audit",
          title: "2. The Stewardship Crossroads: Prune, Feed, Lament, or Step In?",
          readMin: "3 min",
          bodyHtml: `
            <p>Rather than treating every painful trial as organizational failure—tempting pastors to blame themselves for community aging, illness, or hardship—<strong>The Stewardship Crossroads</strong> (<em>Prune &bull; Feed &bull; Lament &bull; Step In</em>) draws intersecting axes (+) separating what lies <em>Within Our Stewardship</em> from what lies <em>Beyond Our Control</em>.</p>
            <p>Once your Mirror findings cross those four quadrants, wisdom becomes clear: <strong>1. Prune</strong> internal clutter, <strong>2. Feed</strong> healthy fruit, bring external trials into <span class="term" data-term="lament-endurance">3. Lament &amp; Endurance</span> rather than shame, and prayerfully <strong>4. Step In</strong> when God opens a missionary door (Col 4:3).</p>
          `,
          seeMore: [
            {
              label: "See More: Why Lament Belongs in Leadership Strategy",
              contentHtml: `<p>Paul's list of hardships in 2 Corinthians 11 wasn't a failure scorecard—it was faithful endurance where Christ's power was perfected in weakness (2 Cor 12:9). Naming external grief honestly keeps leaders sane and prayerful.</p>`
            }
          ]
        },
        {
          id: "w4-c3",
          toolId: "pruning-curve",
          title: "3. The John 15 Pruning & Margin Tool (Keep • Cut • Reinvest)",
          readMin: "3 min",
          bodyHtml: `
            <p>John 15:1–2 teaches <span class="term" data-term="pneumatology">Spirit-dependent</span> fruitfulness: the Father prunes fruitful branches so they bear lasting fruit. Rather than adding new burdens onto exhausted teams, our 3-step calendar triage walks through <strong>1. Keep &amp; Feed</strong> fruitful spaces, <strong>2. Cut or Pause</strong> 1–2 redundant commitments (using natural seasonal off-ramps, scaling back high-prep events, or cutting meeting frequency), and <strong>3. Reinvest</strong> 2+ hours/week directly into people.</p>
            <p>Your <span class="term" data-term="pruning-audit">John 15 Pruning &amp; Margin Audit</span> ensures every new relational rhythm is funded by real calendar margin.</p>
          `,
          seeMore: [
            {
              label: "See More: Three Gentle Ways to 'STOP' Without Whiplash",
              contentHtml: `<p><strong>(1) Use Natural Seasonal Off-Ramps:</strong> Instead of abruptly canceling a class or program mid-year, let it finish its fall or spring semester warmly, celebrate what God did, and simply don't auto-renew it next term. <strong>(2) Scale Back High-Prep Events:</strong> Trim or simplify labor-intensive one-off events that exhaust your core volunteers without building ongoing relationships. <strong>(3) Cut Meeting Frequency &amp; Move Logistics to Email:</strong> Handle routine team updates or scheduling by email so committees and ministry teams can meet less often—freeing whole evenings for people and neighbors.</p>`
            }
          ]
        }
      ],
      featuredTools: ["what-is-audit", "reality-audit", "pruning-curve"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Micro-Triad Debrief", instructions: "How did Module 3's Imitation invitation go? Pray briefly for each triad." },
          { mins: "30m", title: "4-Column 'What Is' Snapshot", instructions: "List what currently fills your Destination, Map, Vehicles (weekly groups/classes/committees), and Tools—spotting which volunteers carry the heaviest load." },
          { mins: "25m", title: "Stewardship Crossroads 4-Quadrant Sort", instructions: "Place honest observations into the 4 Stewardship Crossroads quadrants—carefully separating Lament & Endurance from Needs Pruning." },
          { mins: "20m", title: "Name 1–2 Commitments to STOP", instructions: "Pass through the Pruning Gate: nominate 1–2 low-fruit meetings/programs to pause or simplify (to discuss respectfully with Elders/stakeholders in Module 6)." }
        ],
        prompts: [
          { id: "w4-what-is", question: "What 3 existing spaces in our church already carry genuine relational life (Stewarded Fruit)?", placeholder: "e.g., Thursday women's prayer breakfast, youth small-group leaders, hospitality crew." },
          { id: "w4-stop-gate", question: "Which 1–2 low-fruit commitments can we propose pausing or merging to free 2+ hours/week?", placeholder: "e.g., Let our low-attendance midweek elective conclude cleanly at the semester break; move monthly team status updates to email; scale back two high-prep seasonal events." }
        ]
      },
      scenarios: [
        {
          prompt: "A factory closes in your town, causing several families to move away and reducing Sunday attendance by 12%. Where does this belong on The Stewardship Crossroads?",
          options: [
            { text: "Needs Pruning—we didn't market well enough.", correct: false, feedback: "Economic upheaval in your town is outside your church's stewardship control." },
            { text: "Lament & Endurance—grieve faithfully with affected families without inventing false moral failure.", correct: true, feedback: "Yes! Separating external providential trials from internal neglect protects leaders from false guilt and turns pain into prayer." },
            { text: "Failure—shut down your small groups until the economy recovers.", correct: false, feedback: "Hardship calls for deeper mutual care and endurance, not abandonment." }
          ]
        },
        {
          prompt: "Your team finds three monthly administrative committees that overlap heavily and drain volunteer energy, yet a board member says 'Let's leave them alone and just add weekly discipleship groups too.' What happens if you skip the STOP Gate?",
          options: [
            { text: "Your keenest lay leaders burn out within 90 days trying to carry both old clutter and new triads.", correct: true, feedback: "Exactly. Pruning creates real calendar margin (2+ hrs/week) so life-on-life relationships can breathe." },
            { text: "People naturally drop the committees on their own.", correct: false, feedback: "Institutional committees rarely die on their own—they silently pull leaders back into maintenance." },
            { text: "Discipleship multiplies faster because the church feels busier.", correct: false, feedback: "Activity and multiplication are often opposites; John 15 teaches pruning precedes deeper fruit." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Test your draft Disciple Definition & Reality notes with two fringe/lay members and sustain your Micro-Triad.",
        checklist: [
          { id: "w4-f1", text: "Keep your Micro-Triad (1–4x/month) active (have a partner lead part of Look • Listen • Live)." },
          { id: "w4-f2", text: "Share your 1-sentence Gospel Disciple Definition with 2 lay members outside your core circle for candid feedback." },
          { id: "w4-f3", text: "Initiate one personal calendar subtraction (saying 'no' or pausing one low-fruit task) to protect 2 hrs/week." }
        ],
        reflectionPrompt: "What felt hardest—and most freeing—about naming something to prune?"
      }
    },

    /* ======================== WEEK 5 ======================== */
    {
      week: 5,
      phase: 2,
      title: "The Neighbor Table: Pray, Eat & Share",
      subtitle: "Making neighbor witness natural through Pray • Eat • Share without sales scripts or weirdness",
      timeBudget: "90-Min Team Session + 1 Neighborhood Table Invitation",
      fourfoldAnchor: "Cross (Savior) Reconciliation to Neighbors",
      scripture: "Luke 10:1–11; Mark 5:19; Colossians 4:2–6; 1 Peter 3:15; 2 Corinthians 5:14–21",
      hook: "Many church habits assume the person across the table already trusts the Bible and knows church songs. Yet our neighbors don't need an invitation to a committee—they need a friend who prays for them, listens over a meal, and knows how to introduce Jesus naturally.",
      keyTakeaway: "Mission belongs in everyday relational rhythms rather than one isolated week of a monthly cycle. Through our fourth core tool—The Neighbor Table (Pray • Eat • Share)—ordinary believers pray daily for 3–5 friends, share tables and listen deeply, and naturally open their story and a Gospel passage.",
      outcomes: {
        know: "How the Pray • Eat • Share rhythm connects Oikos prayer, unhurried hospitality, a plain 3-minute story, and Look • Listen • Live Seeker discovery.",
        feel: "Warm, unhurried compassion toward nearby non-Christians—free from sales scripts or awkward pressure.",
        do: "Map 3–5 Oikos names, rehearse your 3-minute story aloud, and invite one neighbor to coffee or dinner."
      },
      chunks: [
        {
          id: "w5-c1",
          toolId: "oikos-bridge",
          title: "1. PRAY: Your Oikos — 3 to 5 Neighbors Where God Placed You",
          readMin: "2 min",
          bodyHtml: `
            <p>In the New Testament, the gospel moved along <span class="term" data-term="oikos">Oikos</span> networks—households, coworkers, and neighbors where you already live, work, learn, and play. Step 1 of <strong>The Neighbor Table</strong> simply asks you to write down and pray daily by name for 3–5 friends far from God (Col 4:2–3).</p>
            <p>Watch for a <span class="term" data-term="person-of-peace">Person of Peace</span> (Lk 10:5–9): someone who genuinely welcomes your friendship, appreciates spiritual conversation, and opens doors naturally.</p>
          `,
          seeMore: [
            {
              label: "See More: Loving Neighbors Even If They Say 'No Thanks'",
              contentHtml: `<p>Neighbors are people made in God's image, never 'targets' on a scorecard. Whether a friend explores Jesus this month or three years from now, steady kindness and prayer reflect Christ's love (Col 4:5–6).</p>`
            }
          ]
        },
        {
          id: "w5-c2",
          title: "2. EAT & LISTEN: Shared Tables and a Plain 3-Minute Story",
          readMin: "3 min",
          bodyHtml: `
            <p>Most Christians don't need fancier apologetics—we need slower dinner tables. Step 2 moves us from waving in the driveway to eating, listening without fixing, and caring about real burdens. Only out of genuine friendship do we step toward Step 3: telling a 3-minute story in plain human English.</p>
            <p>Keep three crisp movements ready: (1) what life or struggle felt like before trusting Christ, (2) how Jesus's <span class="term" data-term="justification">cross and rescue</span> met your real need, and (3) what peace or grace looks like today.</p>
          `,
          seeMore: [
            {
              label: "See More: Keeping Jesus—Not Yourself—the Hero",
              contentHtml: `<p>Notice 2 Corinthians 5:14–21: we are ambassadors of Christ's reconciling cross, not polished life-coaches boasting 'my life is perfect now.' Admitting current struggles while pointing to Jesus's mercy builds instant trust with skeptics.</p>`
            }
          ]
        },
        {
          id: "w5-c3",
          title: "3. SHARE: Opening a Gospel Story With Curious Friends",
          readMin: "3 min",
          bodyHtml: `
            <p>You do not need a separate curriculum when a friend grows curious—simply bring them into a low-pressure <span class="term" data-term="seeker-dbs">Seeker Discovery Study</span> using the same four questions from Look &bull; Listen &bull; Live on a short Gospel text (like Luke 5 or Mark 4):</p>
            <ol>
              <li>What stood out or caught your attention in this story?</li>
              <li>What does it seem to show about God or Jesus?</li>
              <li>What does it show about human nature / us?</li>
              <li>If this were true, what's one small thing worth testing this week?</li>
            </ol>
          `,
          seeMore: [
            {
              label: "See More: Five Great Starter Stories for Curious Friends",
              contentHtml: `<p>Try: (1) Luke 5:1–11 (Jesus calls ordinary fishermen), (2) Luke 7:36–50 (Forgiveness at Simon's dinner), (3) Mark 4:35–41 (Jesus calms the storm), (4) Luke 15:11–32 (Two lost sons), (5) Luke 19:1–10 (Zacchaeus's table).</p>`
            }
          ]
        }
      ],
      featuredTools: ["oikos-bridge"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Micro-Triad & Definition Feedback Debrief", instructions: "Review what fringe/lay members said about your 1-sentence Disciple Definition. Polish confusing words." },
          { mins: "20m", title: "1. PRAY — Map 3–5 Oikos Neighbors", instructions: "Each person fills 3–5 real names across Live, Work, Learn, and Play—and prays aloud for them right now." },
          { mins: "25m", title: "2. EAT & LISTEN + 3-Min Story Coaching", instructions: "Practice asking unhurried listening questions, then share your 3-minute story using a timer—coaching out church jargon into plain English." },
          { mins: "30m", title: "3. SHARE — Look • Listen • Live Role-Play", instructions: "Role-play Luke 19:1–10 with one person acting as a skeptical coworker. Practice asking the 4 discovery questions without lecturing!" }
        ],
        prompts: [
          { id: "w5-oikos-names", question: "My 3–5 Oikos Friends (initials/first names) & One Way I Can Bless One This Week:", placeholder: "e.g., Neighbor T (mowing/yard chat), Coworker M (coffee this Thu), Coach R (invite family for pizza)." },
          { id: "w5-story-outline", question: "Draft bullet outline of my 3-Minute Christ-Centered Story (plain English):", placeholder: "Before: anxious control... Rescue: realized Christ's cross covered my failure... Today: learning daily trust even in stress." }
        ]
      },
      scenarios: [
        {
          prompt: "During a Seeker DBS over coffee, your unchurched neighbor reads Luke 15 and asks, 'Wait—do Christians think God is angry until we earn his love?' How should you handle that in a 4-question DBS?",
          options: [
            { text: "Pull out a 40-minute systematic theology outline and refute their question immediately.", correct: false, feedback: "Taking over with a monologue kills the open discovery space where they can hear Jesus's parable themselves." },
            { text: "Point gently back to the father running down the road in the story ('Look at v. 20—what kind of father do we see here?') and briefly share Jesus's rescuing grace.", correct: true, feedback: "Spot on! Keep their eyes on Jesus in the text while answering honestly with warm, brief gospel clarity." },
            { text: "Change the subject because theological questions aren't allowed in DBS.", correct: false, feedback: "Curious questions are a gift! Answer simply from the text and your story without turning it into a debate." }
          ]
        },
        {
          prompt: "A team member complains: 'I already have my Micro-Triad, my church team, and work—I don't have time to meet new non-Christians.' What shift helps most?",
          options: [
            { text: "Start noticing people already along your daily path (coworkers, neighbors, kids' sidelines) and pray together for them inside your Micro-Triad.", correct: true, feedback: "Exactly! Oikos is about redeeming the relationships already in your week, not adding extra commuter nights." },
            { text: "Pause your Micro-Triad completely for six months to do street surveys.", correct: false, feedback: "Keep your triad—let your triad pray together and hold each other accountable to dine with existing Oikos friends." },
            { text: "Tell them evangelism is only for extroverts with spiritual gifting.", correct: false, feedback: "Every believer has an Oikos (2 Cor 5:20); introverts often build the deepest neighbor trust over quiet meals." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Pray daily for 3–5 Oikos neighbors and share one unhurried meal or coffee.",
        checklist: [
          { id: "w5-f1", text: "Pray daily by name for your 3–5 Oikos friends (at breakfast or commute)." },
          { id: "w5-f2", text: "Share one unhurried meal, walk, or coffee with an Oikos friend—listening generously and sharing your 3-min story or DBS invite if open." },
          { id: "w5-f3", text: "Continue your Micro-Triad (1–4x/month), praying together for each other's Oikos." }
        ],
        reflectionPrompt: "How did praying daily for 3–5 neighbors change what you noticed in everyday conversations?"
      }
    },

    /* ======================== WEEK 6 ======================== */
    {
      week: 6,
      phase: 2,
      title: "Aligned at Home: Stakeholders, Plain Language & Legacy Groups",
      subtitle: "Prioritizing early Elder/staff dialogue, jargon-free vision, and honoring existing small groups",
      timeBudget: "90-Min Team Session + 1-on-1 Alignment Coffees",
      fourfoldAnchor: "Covenant Unity & Honor (Philippians 2)",
      scripture: "Proverbs 15:22; Philippians 2:1–5; Romans 12:10; 1 Corinthians 14:9",
      hook: "Before any congregation-wide pilot begins, faithful leaders invite elders, staff, and longtime small-group hosts into honest conversation—speaking plain Christian English rather than insider acronyms and honoring veteran volunteers with equal dignity.",
      keyTakeaway: "Before launching church-wide pilots, Module 6 equips teams to write a plain-English 1-Pager, listen to Elders, staff, and Next-Gen leads, and offer veteran small groups dignified pathways forward rooted in shared humility.",
      outcomes: {
        know: "Why insider lab jargon alienates congregations, and how Convert / Hybridize / Bless & Sunset pathways honor existing group leaders.",
        feel: "Deep respect and collaborative patience toward veteran volunteers, non-lab staff, and Elders.",
        do: "Complete your jargon-free 1-Pager, map every stakeholder conversation, and schedule alignment coffees before Module 8 pilots."
      },
      chunks: [
        {
          id: "w6-c1",
          title: "1. Killing Consulting Jargon: Plain-Language Translation",
          readMin: "2 min",
          bodyHtml: `
            <p>Workshop diagrams need shorthand names inside a planning room, yet speaking <span class="term" data-term="plain-language">lab jargon</span> from the pulpit ('our Bowtie PATH Vehicle Beta') confuses visitors and breeds clique resentment. Before sharing anything publicly, translate every phrase into warm biblical speech.</p>
          `,
          seeMore: [
            {
              label: "See More: Quick Jargon-to-Plain-English Swaps",
              contentHtml: `<ul><li><em>'Discipleship Vehicle Beta'</em> &rarr; 'A 12-week trial table of 3–5 friends learning Scripture &amp; prayer together.'</li><li><em>'PATH Tools'</em> &rarr; 'Simple napkin tools.'</li><li><em>'Culture-Making Artifacts'</em> &rarr; 'Fridge cards &amp; stories.'</li></ul>`
            }
          ]
        },
        {
          id: "w6-c2",
          toolId: "stakeholder-bridge",
          title: "2. The Plain 1-Pager & Stakeholder Listening Matrix",
          readMin: "3 min",
          bodyHtml: `
            <p>With your Module 4 'What Is' audit in hand, draft a clear 1-page summary answering four questions: Why this matters, what ordinary members will experience, what legacy clutter we are respectfully pausing, and who is listening. Use it to host early <span class="term" data-term="stakeholder-alignment">Stakeholder Alignment</span> coffees with Elders, Worship, Kids, and Youth leads.</p>
          `,
          seeMore: [
            {
              label: "See More: Listening Without Defensiveness",
              contentHtml: `<p>When a Youth Director says, 'I have zero volunteer margin right now,' don't argue—listen! Ask: 'What could we take OFF your plate before we co-design anything in Module 9?'</p>`
            }
          ]
        },
        {
          id: "w6-c3",
          title: "3. Bridging Legacy Small Groups With Equal Honor",
          readMin: "3 min",
          bodyHtml: `
            <p>Existing small groups and adult classes carry deep relational loyalty. Our <span class="term" data-term="legacy-group-pathway">Legacy Small-Group Pathway</span> offers veteran leaders three respectful choices: (A) <strong>Convert</strong> gradually to the weekly life-on-life rhythm, (B) <strong>Hybridize</strong> by folding one napkin tool (like Look &bull; Listen &bull; Live) into existing sessions, or (C) <strong>Bless &amp; Sunset</strong> a long-running class with public gratitude.</p>
            <p>Crucially: keep visible status markers out of Sunday gatherings so nobody ever feels divided between new pilot groups and faithful longstanding groups.</p>
          `,
          seeMore: [
            {
              label: "See More: Honoring Veteran Leaders Publicly",
              contentHtml: `<p>Often your warmest small-group hosts want to disciple people—they just never had a simple 45-minute rhythm handed to them. Sitting down over breakfast to hear their story frequently turns potential skeptics into your wisest beta champions.</p>`
            }
          ]
        }
      ],
      featuredTools: ["stakeholder-bridge"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Oikos & Triad Debrief", instructions: "Share one neighbor conversation or prayer highlight from Module 5." },
          { mins: "25m", title: "Jargon-Free 1-Pager Draft", instructions: "Write the 4 sections of your 1-Pager together. Read every sentence aloud and strike every consulting buzzword." },
          { mins: "25m", title: "Stakeholder Listening Matrix", instructions: "Map Elders, Non-Lab Staff, Kids/Youth leads, and Legacy Group hosts—note each group's valid concern and assign who will meet whom before launching pilots." },
          { mins: "25m", title: "Legacy Small-Group Pathway Plan", instructions: "Review your Module 4 'What Is' group list and sketch hopeful Convert / Hybridize / Sunset conversations alongside your STOP proposals." }
        ],
        prompts: [
          { id: "w6-onepager", question: "Draft 3–4 plain-English sentences explaining our church's vision without ANY lab jargon:", placeholder: "e.g., Over the next season, we want every follower of Jesus to have 2–3 trusted friends around a table learning Scripture, praying honestly, and loving neighbors..." },
          { id: "w6-stakeholders", question: "Who are the top 3 internal stakeholders (Elders, staff, veteran leaders) we will meet 1-on-1 before Module 8?", placeholder: "e.g., Elder Chair & Finance Lead (Tue), Children's Director (Thu), Wednesday Bible Class host (Sat breakfast)." }
        ]
      },
      scenarios: [
        {
          prompt: "A team member suggests having pilot group leaders wear matching visible badges on Sunday mornings so congregation members notice who is leading the new initiative. Why is that risky for church unity?",
          options: [
            { text: "Badges are too expensive in small church budgets.", correct: false, feedback: "Cost is negligible—the real harm is relational and theological." },
            { text: "Visible status badges risk creating a two-tier impression that sidelines veteran small-group leaders and draws attention to status instead of humble service.", correct: true, feedback: "Spot on. Jesus warns against public badges of spiritual prestige; quiet faithfulness and respectful inclusion build trust." },
            { text: "Badges only work if you put the Bowtie logo on them.", correct: false, feedback: "Branding insiders divides the Body regardless of the logo." }
          ]
        },
        {
          prompt: "A faithful 15-year home group host hears about the upcoming weekly pilot groups and worries, 'Are you shutting down our fellowship group?' Which Legacy Pathway response honors them?",
          options: [
            { text: "Meet personally, thank them for 15 years of care, and invite them to explore either blending one 15-min tool into their night (Hybridize) or finishing their current study cleanly (Bless & Sunset).", correct: true, feedback: "Yes! Offering dignity, choice, and gratitude turns anxious hosts into trusted partners." },
            { text: "Tell them fellowship groups don't count anymore so they need to dissolve next week.", correct: false, feedback: "Abruptly dismissing years of pastoral loyalty fractures church unity." },
            { text: "Exclude their group from all communication so they don't raise objections.", correct: false, feedback: "Silence fuels rumors and deepens mistrust." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Hold 1-on-1 Stakeholder & Elder listening coffees using your plain 1-Pager.",
        checklist: [
          { id: "w6-f1", text: "Share your plain-English 1-Pager with Elders and at least 2 non-lab ministry/group leaders; listen carefully to their feedback." },
          { id: "w6-f2", text: "Confirm which Module 4 STOP/pruning step has alignment to proceed cleanly." },
          { id: "w6-f3", text: "Keep your Micro-Triad (1–4x/month) and daily Oikos prayer going." }
        ],
        reflectionPrompt: "What valid concern or helpful insight surfaced when you listened to a stakeholder outside your team?"
      }
    },

    /* ======================== WEEK 7 ======================== */
    {
      week: 7,
      phase: 3,
      title: "Walking Through the Friction Valley: Coaching & Contextual Craft",
      subtitle: "Shepherding struggling, relapsing, or grieving friends—plus vetting optional tools on a 5-Point Rubric",
      timeBudget: "90-Min Team Session + 2 Lay Tool Tests",
      fourfoldAnchor: "Pitcher (Healer) & Laver (Sanctifier)",
      scripture: "1 Thessalonians 2:7–12; 5:14; Galatians 6:1–5; Isaiah 42:3; James 5:13–16",
      hook: "As triads and Oikos friendships deepen over time, initial enthusiasm always meets real life: someone relapses into hidden sin, a spouse faces grief or diagnosis, or a keen learner pulls back saying 'I'm failing at this.' How do you shepherd people without shaming them—or lowering Jesus's call?",
      keyTakeaway: "Practiced right as Micro-Triads hit real relational friction, the Apprenticeship Growth Loop prepares leaders for Friction Valley without rushing timelines—while the 5-Point Napkin Rubric keeps visual aids simple and transferable.",
      outcomes: {
        know: "Why growth is domain-specific toward Spirit-Dependent Maturity (never autonomous perfection), and how Picture/Mirror/Window + the 5-Point Rubric test any visual aid.",
        feel: "Patient, unhurried pastoral tenderness—ready to sit in grief and failure alongside Christ our Healer.",
        do: "Role-play hard Friction Valley coaching scenes and test your 4-tool starter kit (+ max 1 optional contextual aid) with two laypeople."
      },
      chunks: [
        {
          id: "w7-c1",
          toolId: "growth-loop",
          title: "1. The Map: Apprenticeship Growth Loop (D1–D4 & L1–L4)",
          readMin: "3 min",
          bodyHtml: `
            <p><strong>The Map</strong> pairs two simple letters for any single area of discipleship (such as reading Scripture, praying aloud, or loving neighbors): <strong>D1&ndash;D4</strong> names the <strong>Disciple&rsquo;s Stage</strong> (their current skill and confidence), and <strong>L1&ndash;L4</strong> names the <strong>Leader&rsquo;s Matching Posture</strong>:</p>
            <ul>
              <li><strong>Stage 1 (Humble Beginner):</strong> <em>D1</em> is eager with low skill &rarr; <em>L1 Leader Models</em> (<strong>&ldquo;I do, you watch&rdquo;</strong>).</li>
              <li><strong>Stage 2 (<span class="term" data-term="friction-valley">Friction Valley</span>):</strong> <em>D2</em> hits awkwardness, sin relapse, or discouragement &rarr; <em>L2 Leader Shepherds</em> (<strong>&ldquo;I do, you help&rdquo;</strong>).</li>
              <li><strong>Stage 3 (Growing Co-Laborer):</strong> <em>D3</em> has growing skill yet feels nervous alone &rarr; <em>L3 Leader Coaches</em> (<strong>&ldquo;You do, I help&rdquo;</strong>).</li>
              <li><strong>Stage 4 (<span class="term" data-term="spirit-dependent-maturity">Spirit-Dependent Maturity</span>):</strong> <em>D4</em> reproduces faithfully while abiding deeper in Christ (Jn 15:5) &rarr; <em>L4 Leader Empowers</em> (<strong>&ldquo;You do, I cheer&rdquo;</strong>).</li>
            </ul>
          `,
          seeMore: [
            {
              label: "See More: Why 'Over-Functioning' Replaces 'Co-Dependence'",
              contentHtml: `<p>Bearing one another's burdens (Gal 6:2) is godly—never 'co-dependence.' What hurts growing D3 disciples is <span class="term" data-term="over-functioning">Over-Functioning</span>: when a mentor insists on rescuing or answering every question so they still feel needed.</p>`
            },
            {
              label: "See More: Never Confuse Sin, Suffering, and Skill Lag",
              contentHtml: `<p>A believer may be seasoned in Bible study (D4) yet feel completely lost praying with a skeptical neighbor (D1). Meanwhile, bereavement or depression in Friction Valley requires presence, lament, and slow patience—never pushing someone to hit an arbitrary timeline.</p>`
            }
          ]
        },
        {
          id: "w7-c2",
          toolId: "napkin-rubric",
          title: "2. The Napkin Test: Picture • Mirror • Window & 5-Point Gate",
          readMin: "3 min",
          bodyHtml: `
            <p>Respecting <span class="term" data-term="andragogy">Zone of Proximal Development</span> limits, start by mastering four proven core tools rather than rushing into five or six separate diagrams. Use <span class="term" data-term="picture-mirror-window">Picture / Mirror / Window</span> plus our <strong>5-Point Napkin Rubric</strong> to check our 4 shared tools—and refine at most <strong>one</strong> optional contextual aid only if a genuine ministry gap remains.</p>
          `,
          seeMore: [
            {
              label: "See More: Worked Exemplar — Messy Draft to Clean Napkin",
              contentHtml: `<p>Suppose a Kids team starts with a 14-point parent devotional sheet (fails rubric: takes 8 minutes to explain). Applying the rubric cuts it down to 1 simple 3-icon fridge triangle for bedtime: <em>Thank Jesus • Confess • Pray for 1 Friend</em>—sketchable by an 8-year-old in 30 seconds.</p>`
            }
          ]
        },
        {
          id: "w7-c3",
          title: "3. Testing With Ordinary Believers (Breaking D1 Blind Spots)",
          readMin: "2 min",
          bodyHtml: `
            <p>Never rely on staff insiders guessing whether a tool card is clear. Hand our core <span class="term" data-term="napkin-tool">napkin tools</span> to two everyday, non-staff congregation members and ask four simple questions: <em>What clicked immediately? What felt confusing or preachy? Where did it feel unnatural? Could you show this to a friend next week?</em></p>
          `,
          seeMore: [
            {
              label: "See More: Using Pre-Built Printable Cards Instead of Graphic Delays",
              contentHtml: `<p>Small churches often stall for weeks trying to format fancy custom workbooks. Print our clean, pre-labeled SVG cards on standard 4x6 index cards so leaders can carry them in pockets or Bibles starting tomorrow.</p>`
            }
          ]
        }
      ],
      featuredTools: ["growth-loop", "napkin-rubric"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "20m", title: "Stakeholder Alignment Debrief", instructions: "Compare notes from Module 6's Elder/staff/group coffees. Adjust any wording or pruning step based on what you heard." },
          { mins: "35m", title: "Friction Valley Role-Play Clinic", instructions: "Act out two hard scenes in trios: (A) A friend relapses into chronic sin and says 'I'm quitting the triad'; (B) A grieving member misses three weeks after family crisis. Practice L2 Shepherding without lecturing or rescuing." },
          { mins: "35m", title: "Napkin Rubric & Optional Contextual Check", instructions: "Review the 4 Core Tools using Picture/Mirror/Window + 5-Point Rubric. Decide openly: Do we even need 1 extra contextual card (e.g., Kids/Families), or are 4 Core Tools enough for Year 1?" }
        ],
        prompts: [
          { id: "w7-friction-notes", question: "Where am I personally tempted to Over-Function (L3) or rush someone out of Friction Valley (L2)?", placeholder: "e.g., I rush to give tidy 3-step solutions when someone cries instead of praying and sitting in silence." },
          { id: "w7-tool-decision", question: "Our Year-1 Toolkit Decision (4 Core Tools + Optional Max 1?):", placeholder: "e.g., Stick strictly to the 4 Core Tools for adults, plus 1 simplified 3-icon family bedtime card for Kids ministry." }
        ]
      },
      scenarios: [
        {
          prompt: "A capable triad member in D3 ('You do, I help') gets nervous right before leading her first Seeker DBS and texts you: 'Can you just lead tonight instead?' How do you avoid L3 Over-Functioning while remaining supportive?",
          options: [
            { text: "Reply: 'No problem, I'll take over the whole evening so it runs smoothly.'", correct: false, feedback: "Rescuing reinforces their fear and keeps them passive (Over-Functioning)." },
            { text: "Offer calm encouragement: 'You've got this! Why don't you open and ask Questions 1–2, and I'll sit right beside you and jump in on Questions 3–4 if you want?'", correct: true, feedback: "Spot on! Co-leading one step lowers panic while still letting them step onto the floor." },
            { text: "Tell them they aren't ready to lead anything for six more months.", correct: false, feedback: "Shaming normal nervousness pushes them backward instead of coaching through it." }
          ]
        },
        {
          prompt: "Your team drafts a custom tool with 9 steps, 4 theological Greek words, and requires a 2-page PDF worksheet to explain. What does the 5-Point Napkin Rubric tell you?",
          options: [
            { text: "Print nicer glossy copies so it looks professional.", correct: false, feedback: "Glossy printing doesn't fix cognitive overload—ordinary laypeople won't pass it on." },
            { text: "Fail it on Simplicity & Transferability; strip it down until a layperson can draw it from memory in <60 seconds and teach it in 3 minutes.", correct: true, feedback: "Yes! If it fails the 60-second napkin test, it won't survive to Generation 2." },
            { text: "Add a 30-minute video training course to explain the 9 steps.", correct: false, feedback: "Needing a training video proves the tool is over-engineered." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Test your 4-tool starter kit with two ordinary laypeople and practice compassionate D2 shepherding.",
        checklist: [
          { id: "w7-f1", text: "Sit down with 2 non-staff believers and walk them through 1–2 core napkin cards using 4 diagnostic questions (Worked? Confusing? Natural? Would you pass it on?)." },
          { id: "w7-f2", text: "Practice asking one open-hearted question in your Micro-Triad rather than rushing to fix someone's struggle." },
          { id: "w7-f3", text: "Finalize who you will invite into Module 8's church-wide weekly Pilot Groups (Betas)." }
        ],
        reflectionPrompt: "What did a non-staff layperson find confusing or encouraging when testing your napkin cards?"
      }
    },

    /* ======================== WEEK 8 ======================== */
    {
      week: 8,
      phase: 3,
      title: "Launching Weekly Life-on-Life Groups (Betas)",
      subtitle: "Designing a 60–75 minute hospitality rhythm and launching 12–16 week weekly pilot groups",
      timeBudget: "90-Min Team Session + Launch 2–4 Weekly Betas",
      fourfoldAnchor: "Word & Table Acts 2 Hospitality",
      scripture: "Acts 2:42–47; Hebrews 10:24–25; Romans 12:9–18; Luke 10:1–17",
      hook: "Why do biweekly 3-month pilot groups often lose momentum? Think practically: six meetings spaced two weeks apart rarely build enough continuity to remember prayer burdens, confess sin honestly, walk through a crisis, or hand off leadership to a second-generation apprentice.",
      keyTakeaway: "Launch 2–4 weekly pilot groups (Betas) of 3–5 people using a warm hospitality loop—Celebrate, Tool Focus, Next Step + Weekly OUT Mission—embedding neighbor love every week rather than confining outreach to one isolated week of a monthly cycle.",
      outcomes: {
        know: "Why weekly 60–75 minute kitchen-table rhythms outperform biweekly meetings, and why mission belongs in every week's Step 3.",
        feel: "Grounded confidence: aligned stakeholders, vetted core tools, and pre-formatted napkin guides remove launch panic.",
        do: "Finalize your weekly Gathering Rhythm, complete the 7-point Pilot Launch Checklist, and launch 2–4 weekly Beta groups within 14 days."
      },
      chunks: [
        {
          id: "w8-c1",
          toolId: "gathering-rhythm",
          title: "1. The Vehicle: 3-Part Weekly Life-on-Life Rhythm",
          readMin: "3 min",
          bodyHtml: `
            <p>A healthy <span class="term" data-term="life-on-life-rhythm">Life-on-Life Gathering Rhythm</span> takes 60–75 minutes around a meal, coffee table, or living room: <strong>#1 Celebrate &amp; Honest Check-In</strong> (15m), <strong>#2 Tool Focus</strong> in Look &bull; Listen &bull; Live, 4-Beat Prayer Ring, or Jesus Pattern (35m), and <strong>#3 Next Step + Weekly OUT Mission</strong> (15m).</p>
            <p>Crucially, rather than saving outreach for just one isolated 'mission week' in a monthly rotation, every single gathering ends with one obedience step and one named <span class="term" data-term="oikos">Oikos</span> neighbor.</p>
          `,
          seeMore: [
            {
              label: "See More: Kitchen Tables Beat Classroom Rows",
              contentHtml: `<p>Encouraging groups to meet in homes, diners, or parks—rather than fluorescent church classrooms—naturally lowers stiffness and invites neighbors in without institutional barriers.</p>`
            }
          ]
        },
        {
          id: "w8-c2",
          title: "2. Setting Up Healthy Weekly Betas (12–16 Weeks)",
          readMin: "3 min",
          bodyHtml: `
            <p>Your <span class="term" data-term="beta-group">Weekly Pilot Groups (Betas)</span> commit to three clear standards: <strong>3–5 people</strong> per circle, meeting <strong>weekly</strong> (never biweekly), for <strong>12–16 weeks</strong>. Halfway through (weeks 6–8 of the Beta), the pilot host intentionally coaches an emerging apprentice to lead #2 Tool Focus—growing real 2nd-generation fruit naturally.</p>
          `,
          seeMore: [
            {
              label: "See More: Seven-Point Launch Checklist",
              contentHtml: `<ol><li>Who are we inviting (3–5/group, bridged warmly with Legacy groups)?</li><li>Start date (within 14 days)?</li><li>Weekly time/location?</li><li>Duration (12–16 weeks)?</li><li>Who leads &amp; who is co-leading?</li><li>Which 1:4–5 Soul Care pod holds them?</li><li>30/60/90-day feedback dates?</li></ol>`
            }
          ]
        },
        {
          id: "w8-c3",
          title: "3. Spotting & Co-Leading With 2nd-Generation Apprentices",
          readMin: "2 min",
          bodyHtml: `
            <p>From Day 1 of your weekly pilot, watch for faithful, humble learners who consistently follow through on Step #3 and pray for their <span class="term" data-term="oikos">Oikos</span>. By week 6 of the Beta, invite one co-leader per group to prepare and guide Step #2 (<span class="term" data-term="faithful-multiplication">Faithful Multiplication</span>)—moving steadily from <em>'I do, you watch'</em> to <em>'You do, I help.'</em></p>
          `,
          seeMore: [
            {
              label: "See More: How to Protect Early Pilots From Unwanted Spotlight",
              contentHtml: `<p>Keep initial pilots quiet, warm, and unpretentious—no stage spotlights or badges. Let genuine changed lives and neighbor hospitality speak naturally when stories are shared in Module 9.</p>`
            }
          ]
        }
      ],
      featuredTools: ["gathering-rhythm"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Lay Testing Debrief", instructions: "What changed in your napkin cards based on Module 7's layperson feedback? Use pre-formatted printable cards so nobody stalls on graphic design." },
          { mins: "25m", title: "Customize Weekly Rhythm", instructions: "Design your church's 60–75 min flow around #1 Celebrate / #2 Tool Focus / #3 Next Step + Weekly OUT. Map a sample 4-week Beta flow." },
          { mins: "30m", title: "Complete Pilot Launch Checklist", instructions: "Name 2–4 initial Weekly Pilot Hosts (drawn from your team + aligned legacy hosts), confirm 3–5 invitees per group, and lock start dates within 14 days." },
          { mins: "20m", title: "Beta Invitation Role-Play", instructions: "Practice issuing a warm, pressure-free verbal invite to a prospective pilot member—explaining the weekly rhythm in plain English." }
        ],
        prompts: [
          { id: "w8-beta-roster", question: "Our 2–4 Weekly Pilot Groups launching within 14 days (Host + Co-Host + Day/Time):", placeholder: "e.g., Group A: Men's Tue 6:30am coffee; Group B: Women's Thu 7pm living room; Group C: Blended Hybrid class." },
          { id: "w8-feedback-plan", question: "How will we collect honest 30- and 60-day pilot feedback from members (not just leaders)?", placeholder: "e.g., 3-question check-in card after Beta week 4 & week 8 asking what worked, what dragged, and who is stepping up." }
        ]
      },
      scenarios: [
        {
          prompt: "A busy pilot host asks: 'Can we meet every other Tuesday for 3 months instead of every week? That's still six meetings.' Why should you gently hold the weekly standard?",
          options: [
            { text: "Six meetings spaced 14 days apart barely maintains surface familiarity, making deep confession, Friction Valley care, and 2nd-gen apprentice handoffs nearly impossible.", correct: true, feedback: "Exactly. Weekly rhythm builds relational trust and habit muscle memory; if someone misses once in a biweekly group, a full month passes!" },
            { text: "Biweekly is fine—you just double the homework.", correct: false, feedback: "Doubling homework without weekly relational presence pushes beginners straight into guilt." },
            { text: "Switch to a monthly big-room rally instead.", correct: false, feedback: "Monthly rallies cannot build intimate obedience-based apprenticeship." }
          ]
        },
        {
          prompt: "Your team writes a 4-week pilot syllabus: 'Week 1: Bible, Week 2: Prayer, Week 3: Community, Week 4: Mission Focus.' What hidden drift does that create?",
          options: [
            { text: "It treats mission as a once-a-month topic instead of embedding prayer and neighbor love into Step #3 every single week.", correct: true, feedback: "Yes! Keeping 'Next Step + Weekly OUT' in every gathering makes mission a normal heartbeat rather than a monthly special event." },
            { text: "Week 2 should come before Week 1.", correct: false, feedback: "The flaw isn't the order of Bible vs. Prayer—it's isolating Mission into only 25% of group life." },
            { text: "Four topics is too few for one month.", correct: false, feedback: "Simplicity is good! Just keep Oikos accountability live every single week." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Launch 2–4 weekly Church Pilot Groups within 14 days using plain napkin cards.",
        checklist: [
          { id: "w8-f1", text: "Send personal verbal/text invitations and launch 2–4 weekly Beta groups (3–5 people each)." },
          { id: "w8-f2", text: "Hold the first session of your weekly Beta using Celebrate / Tool Focus / Next Step + Weekly OUT around food or coffee." },
          { id: "w8-f3", text: "Invite Worship, Children's, Student, and Mercy ministry leads to Module 9's Co-Design session." }
        ],
        reflectionPrompt: "What stood out during the first week of launching your weekly pilot groups?"
      }
    },

    /* ======================== WEEK 9 ======================== */
    {
      week: 9,
      phase: 4,
      title: "Weaving Culture, Guardrails & Leader Soul Care",
      subtitle: "Co-designing liturgy & Next-Gen habits together while installing Vetting Gates and 1:4–5 Soul Care pods",
      timeBudget: "90-Min Co-Design Session + Soul Care Pod Launch",
      fourfoldAnchor: "Pitcher (Healer) & Laver (Sanctifier) Guardrails",
      scripture: "Deuteronomy 6:4–9; 1 Timothy 3:1–13; 2 Timothy 2:1–7; Exodus 18:13–26; Acts 20:28",
      hook: "Two silent threats wait right as pilot groups catch fire: First, Next-Gen and Worship leaders get handed adult handouts they never helped build. Second, leaders multiply rapidly without character vetting or Soul Care—exhausting pastors and risking moral harm.",
      keyTakeaway: "Module 9 brings Worship, Kids, Youth, and Mercy leads together onto ONE shared co-design canvas while wiring Character & Competency into a written Vetting Gate and capped 1:4–5 Soul Care pods.",
      outcomes: {
        know: "How Sunday Word & Table and Next-Gen rhythms align organically without stage commercials—and why Vetting Gates plus 1:4–5 Soul Care caps protect multiplying churches.",
        feel: "United across ministry departments and deeply sheltered by healthy pastoral oversight.",
        do: "Co-author your single Master Culture Canvas, adopt a 1-page Vetting & Escalation Protocol, and assign every pilot leader to a 1:4–5 Soul Care pod."
      },
      chunks: [
        {
          id: "w9-c1",
          toolId: "culture-canvas",
          title: "1. One Shared Culture Canvas (Co-Designed, Never Retrofitted)",
          readMin: "3 min",
          bodyHtml: `
            <p>Rather than building five ministry plans separately, your team sits down *with* Worship, Kids, Youth, and Mercy leaders around ONE unified <span class="term" data-term="culture-making-plan">Master Culture-Making &amp; Ministry Alignment Canvas</span>.</p>
            <p>Replace stage announcements and promo slots with <span class="term" data-term="word-and-table">Word &amp; Table</span> beauty: singing prayers shaped by the Lord's Prayer, integrating silent Cross-Centered Examen before Communion, giving parents age-fit fridge cards (Deut 6), and telling real baptism and Oikos stories.</p>
          `,
          seeMore: [
            {
              label: "See More: Co-Designing With Next-Gen Instead of Retrofitting",
              contentHtml: `<p>Ask Children's and Student leaders directly: 'How would a 7-year-old or 15-year-old draw or practice Bible reading and prayer naturally?' Let them adapt the imagery while keeping the shared <span class="term" data-term="plain-language">plain language</span> across generations.</p>`
            }
          ]
        },
        {
          id: "w9-c2",
          toolId: "vetting-soulcare",
          title: "2. Character Vetting & Crisis Escalation Shield",
          readMin: "3 min",
          bodyHtml: `
            <p>Remember the <span class="term" data-term="character-competency">Character &amp; Competency Matrix</span>: high skill paired with unrepentant pride produces 'urgent guardrail risk,' whereas God routinely uses humble ordinary saints (1 Cor 1:27).</p>
            <p>Before any Beta apprentice leads a 2nd-generation group, every candidate walks through a 1-page <span class="term" data-term="vetting-gate">Leader Vetting &amp; Escalation Protocol</span> checking gospel orthodoxy, personal integrity, elder endorsement, and clear 24-hour crisis referral paths.</p>
          `,
          seeMore: [
            {
              label: "See More: Why Simple Tools Need Clear Doctrinal & Safety Guardrails",
              contentHtml: `<p>When groups meet in living rooms, peer leaders will eventually encounter marital crisis, trauma, addiction, or bizarre theology. A written 1-page Escalation Path ensures peer companions love warmly while calling Elders immediately when pastoral/clinical expertise is required.</p>`
            }
          ]
        },
        {
          id: "w9-c3",
          title: "3. Capped 1:4–5 Soul Care Pods (Jethro Math)",
          readMin: "3 min",
          bodyHtml: `
            <p>One pastor can shepherd 4 pilot hosts directly; nobody can shepherd 25 multiplying leaders alone (Exod 18). Every leader sits inside a capped <span class="term" data-term="soul-care-pods">1:4–5 Soul Care Pod</span>—meeting monthly strictly for rest, prayer (<span class="term" data-term="examen">Cross-Centered Examen</span> + 4-Beat Prayer Ring), and encouragement, never metric policing.</p>
          `,
          seeMore: [
            {
              label: "See More: Separating Soul Care From Metric Tracking",
              contentHtml: `<p>If a leader knows their Soul Care mentor is also grading their group attendance spreadsheet, they will hide marriage stress or burnout. Keep Soul Care unhurried and grace-filled; track group health gently at team reviews.</p>`
            }
          ]
        }
      ],
      featuredTools: ["culture-canvas", "vetting-soulcare"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "30-Day Pilot Debrief Scorecard", instructions: "Review attendance, weekly obedience follow-through, and early D2 Friction Valley stories across your active weekly Betas." },
          { mins: "35m", title: "Cross-Ministry Co-Design Lab", instructions: "With Worship, Kids, Youth, and Mercy representatives at the table, fill ONE Master Culture Canvas—choosing max 1 organic habit shift per ministry (replacing clutter rather than adding workload)." },
          { mins: "20m", title: "Adopt Vetting & Escalation Protocol", instructions: "Walk through the 4 Vetting Shield checks and confirm your 24-hour Elder crisis escalation contact flow." },
          { mins: "20m", title: "Map 1:4–5 Soul Care Pods", instructions: "Assign every current pilot host and emerging co-leader into a pod of max 4–5 leaders, and book their first Soul Care meal." }
        ],
        prompts: [
          { id: "w9-ministry-shift", question: "What ONE organic habit shift did Worship, Kids, Youth, and Mercy choose together on our single Culture Canvas?", placeholder: "e.g., Sunday Communion includes 60s silent Examen; Kids sends home 3-Q fridge card; Pantry opens with 2-min 4-Beat Prayer Ring." },
          { id: "w9-soulcare-pods", question: "Our Initial 1:4–5 Soul Care Pod Assignments & Crisis Escalation Contacts:", placeholder: "e.g., Pod 1 (Pastor + 4 hosts); Pod 2 (Elder + 3 co-leaders). 24-hr Crisis Elder Contacts: ..." }
        ]
      },
      scenarios: [
        {
          prompt: "An articulate, energetic newcomer in a Beta group volunteers to launch three new groups next week, yet you discover he is actively hostile toward church elders and refusing reconciliation in a bitter conflict. Using Character & Competency + Vetting Gate, what do you do?",
          options: [
            { text: "Pause his leadership deployment gently and walk alongside him toward repentance and peace before releasing authority.", correct: true, feedback: "Wise shepherding! High charisma with low character carries urgent guardrail risk (1 Tim 3; Titus 1). Care for his soul first." },
            { text: "Launch his groups immediately so you don't miss momentum.", correct: false, feedback: "Speed without integrity wounds sheep and fractures the wider church." },
            { text: "Make him a Kids ministry host instead of an adult group host.", correct: false, feedback: "Moving unvetted character risk to children's ministry violates safety and biblical oversight." }
          ]
        },
        {
          prompt: "To spread culture, someone proposes adding a weekly 5-minute 'Disciple Lab Tool Time Promo' right after worship announcements every Sunday. What better path did Worship & Pastors design here?",
          options: [
            { text: "Weave confession, Lord's Prayer themes, and real baptism/Oikos stories organically into Word & Table liturgy rather than adding a stage promo.", correct: true, feedback: "Yes! Liturgy forms hearts; programmatic stage announcements exhaust guests." },
            { text: "Double it to 10 minutes with a quiz slide.", correct: false, feedback: "Sunday morning isn't a consulting billboard—preached Word and sacraments carry the weight." },
            { text: "Keep Sunday services completely disconnected from the rest of church life.", correct: false, feedback: "We do want Sunday connected—just through liturgy, preaching, and real testimonies, not commercial announcements." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Hold your first 1:4–5 Soul Care Pod gathering and coach emerging Beta apprentices to co-lead.",
        checklist: [
          { id: "w9-f1", text: "Hold one unhurried Soul Care meal/prayer check-in (zero KPI policing) for your active pilot hosts." },
          { id: "w9-f2", text: "Coach 1 emerging apprentice inside each Beta group to lead #2 Tool Focus at least once before Module 10." },
          { id: "w9-f3", text: "Pilot ONE co-designed liturgical or Next-Gen habit shift (replacing one competing announcement or program)." }
        ],
        reflectionPrompt: "How did your ministry peers respond when co-designing one shared Culture Canvas together?"
      }
    },

    /* ======================== WEEK 10 ======================== */
    {
      week: 10,
      phase: 4,
      title: "Humble Horizons, Continuity & Commissioning",
      subtitle: "Building a James 4:15 Stewardship Roadmap, securing Year-2 continuity, and sending around Word & Table",
      timeBudget: "90-Min Commissioning Gathering + 30-Day Elder Ratification",
      fourfoldAnchor: "Full Fourfold Gospel (Cross, Laver, Pitcher, Crown) & Word-and-Table Sending",
      scripture: "James 4:13–15; 1 Corinthians 3:6–9; Matthew 28:18–20; 2 Timothy 2:2; Revelation 21:5",
      hook: "Too many leadership cohorts end with warm applause on the final day—and fade quietly when staff turn over, fall ministry schedules explode, or budget belts tighten. How do we seal what God has started without trusting in human guarantees?",
      keyTakeaway: "Grounded in James 4:15 humility ('If the Lord wills'), Module 10 builds a prayerful Stewardship Roadmap tracked by leading health indicators, ratifies a 2-page New Staff & Elder Onboarding Manual, and commissions teams around Word & Table as lifelong disciplemakers.",
      outcomes: {
        know: "How leading health indicators, Elder ratification, and a 2-page Onboarding Manual eliminate the post-cohort cliff while keeping growth surrendered to God.",
        feel: "Deeply grateful, soberly realistic about Year-2 valleys, and joyfully sent in the power of the Spirit.",
        do: "Complete your 4-horizon Stewardship Roadmap, finalize your 2-page Onboarding Manual, book Year-2 Quarterly Huddles, and celebrate Word-and-Table Commissioning."
      },
      chunks: [
        {
          id: "w10-c1",
          toolId: "stewardship-roadmap",
          title: "1. Grounding Long-Range Plans in James 4:15 Stewardship",
          readMin: "3 min",
          bodyHtml: `
            <p>Long-range church plans are only faithful when surrendered to God's providence: <em>'If the Lord wills, we will live and do this or that'</em> (Jas 4:15). Only God gives growth (1 Cor 3:7).</p>
            <p>Our <span class="term" data-term="stewardship-roadmap">Prayerful Stewardship Roadmap</span> preserves clear 90-Day, 1-Year, and 3-Year horizons across <strong>both PATH and PLAN</strong>—grounded in real pilot data and calendar/budget honesty.</p>
          `,
          seeMore: [
            {
              label: "See More: Tracking Leading Health Indicators Instead of Vanity Quotas",
              contentHtml: `<p>Instead of empty percentages, watch five <span class="term" data-term="leading-indicators">Leading Health Indicators</span>: (1) Beta group retention, (2) weekly tool fidelity, (3) real Oikos &amp; baptism stories, (4) 100% 1:4–5 Soul Care pod coverage, and (5) legacy clutter genuinely pruned.</p>`
            }
          ]
        },
        {
          id: "w10-c2",
          title: "2. Beating the Post-Lab Cliff: Ratification & Onboarding",
          readMin: "3 min",
          bodyHtml: `
            <p>What happens if your Lead Pastor moves or new Elders rotate onto the board next fall? Two simple continuity anchors protect the church via <span class="term" data-term="elder-ratification">Elder Board Ratification &amp; Onboarding</span>: (1) formal board adoption of your Roadmap and Soul Care budget lines within 30 days, and (2) a 2-page <strong>New Staff &amp; Elder Onboarding Manual</strong> walked through in every incoming leader's first 30 days.</p>
          `,
          seeMore: [
            {
              label: "See More: Year-2 Quarterly Huddles & Annual Pruning Review",
              contentHtml: `<p>Book four 90-minute peer check-ins across the coming year (Months 3, 6, 9, 12 post-lab) specifically for navigating 2nd- and 3rd-generation growth—plus an annual pre-fall Pruning Review so old busyness never creeps back in.</p>`
            }
          ]
        },
        {
          id: "w10-c3",
          toolId: "bowtie",
          title: "3. Commissioning Around Word & Table",
          readMin: "2 min",
          bodyHtml: `
            <p>Culture-building structures always serve a higher calling: shaping living witnesses of Jesus. Around Scripture and the Lord's Supper, we close with <span class="term" data-term="commissioning">Word-and-Table Commissioning</span>: <strong>'YOU ARE DISCIPLEMAKERS — GO MULTIPLY IN CHRIST.'</strong></p>
          `,
          seeMore: [
            {
              label: "See More: A Simple 20-Minute Commissioning Liturgy",
              contentHtml: `<p>Read Matthew 28:18–20 and 2 Timothy 2:1–2; share gratitude and one specific prayer burden for each church/group; celebrate Communion remembering Jesus Savior (Cross), Sanctifier (Laver), Healer (Pitcher), and Coming King (Crown); lay hands on one another and pray.</p>`
            }
          ]
        }
      ],
      featuredTools: ["stewardship-roadmap", "bowtie"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Pilot Harvest & 2nd-Gen Check", instructions: "Review real fruit from your Beta weeks: retention, Oikos meals, emerging co-leaders ready to launch next waves." },
          { mins: "30m", title: "Draft 4-Horizon Stewardship Roadmap", instructions: "Fill 90-Day, 1-Year, and 3-Year PATH & PLAN boxes humbly under James 4:15—checking budget and fall calendar conflicts honestly." },
          { mins: "25m", title: "Finalize 2-Page Onboarding Manual & Year-2 Dates", instructions: "Complete your church's 2-page New Staff/Elder Onboarding summary (Destination Definition, 4 Core Tools, Vetting Gate, 1:4–5 Soul Care) and put Elder Ratification + Year-2 Huddles on the calendar." },
          { mins: "20m", title: "Word-and-Table Commissioning Prayer", instructions: "Share key learnings, name where your church most needs God's mercy, break bread (if appropriate), and pray Matthew 28:18–20 over each other." }
        ],
        prompts: [
          { id: "w10-1yr-obj", question: "Our Prayerful 1-Year Objective (PATH + PLAN, aligned with budget & pruning):", placeholder: "e.g., 100% of group hosts in 1:4–5 Soul Care pods; 2 legacy classes transitioned; 4–6 weekly groups led by vetted 2nd-gen apprentices." },
          { id: "w10-onboarding-notes", question: "Date booked for Elder Board Ratification (within 30 days) & Month 3/6/9/12 Quarterly Huddles:", placeholder: "e.g., Elder Board meeting next month (date); Quarterly Huddles booked on church calendar." }
        ]
      },
      scenarios: [
        {
          prompt: "At your Module 10 wrap-up, someone writes as your 5-year vision: 'Our church has built an unstoppable discipleship machine that nothing can derail.' What crucial truth does James 4:15 remind us?",
          options: [
            { text: "It reminds us Spirit-sovereignty (1 Cor 3:7; Jas 4:15) governs every plan—we walk faithfully without mistaking organizational inertia for divine grace.", correct: true, feedback: "Spot on! Faithful churches plan diligently while remaining utterly dependent on God's mercy and ongoing repentance." },
            { text: "Five years is too short—change it to 20 years.", correct: false, feedback: "The concern is theological overconfidence, not the number of years." },
            { text: "Churches shouldn't write down any 3-year hopes at all.", correct: false, feedback: "Wise planning under 'If the Lord wills' (Jas 4:15) is biblical stewardship—as long as it stays humble." }
          ]
        },
        {
          prompt: "Six months after graduating, your Associate Pastor accepts a call to another city and two new Elders join the board. How does your Module 10 Continuity design prevent the church from resetting to zero?",
          options: [
            { text: "They receive the ratified Stewardship Roadmap and walk through the 2-page New Staff & Elder Onboarding Manual within their first 30 days.", correct: true, feedback: "Yes! Codified onboarding + board ratification keeps the church's DNA intact across leadership seasons." },
            { text: "Hope the new leaders watch old Sunday recordings to figure out what happened.", correct: false, feedback: "Passive assumptions fade fast under new leadership pressure." },
            { text: "Cancel all existing triads until the new staff member invents their own system.", correct: false, feedback: "Resetting everything every 3 years exhausts congregations and kills generational fruit." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Secure Elder Ratification within 30 days, release vetted 2nd-generation apprentices, and step into Year-2 rhythms.",
        checklist: [
          { id: "w10-f1", text: "Present finalized Stewardship Roadmap & 2-Page Onboarding Manual to the Elder Board for formal adoption within 30 days." },
          { id: "w10-f2", text: "Release vetted 2nd-generation Beta apprentices into their first weekly co-leading or new group cycles inside 1:4–5 Soul Care pods." },
          { id: "w10-f3", text: "Confirm your Year-2 Quarterly Huddle dates and Annual Pre-Fall Pruning Review on the church calendar." }
        ],
        reflectionPrompt: "Where does your church most need prayer and endurance as you step into Year 2?"
      }
    }
  ],

  facilitatorGuide: {
    title: "Cohort Facilitator & Team Coach Guide",
    subtitle: "Running 90-Minute Sessions Without Lecturing — Keeping Adults Practiced & Protected",
    principles: [
      {
        heading: "1. Flip the Classroom (15-Min Pre-Read -> 90-Min Practice)",
        body: "Never spend 60 minutes reading slides aloud. Ask team members to skim the module's 3 micro-chunks (under 10 minutes) beforehand, then spend the full 90 minutes debriefing lived triads, practicing napkin tools live, and role-playing real conversations."
      },
      {
        heading: "2. Protect Lay & Bivocational Margins",
        body: "Respect the clock rigorously. End sessions on time, enforce the Module 4 Pruning Gate so new practices replace clutter instead of adding burnout, and encourage kitchen-table gatherings rather than formal church-building logistics."
      },
      {
        heading: "3. Lead With Honest Stories, Not Polish",
        body: "Share where your own Oikos dinner felt awkward or where you struggled to listen in Friction Valley. Modeling vulnerability frees lay leaders from performing fake spiritual competence."
      },
      {
        heading: "4. Enforce the 'No Jargon' Rule Gently",
        body: "Whenever someone says 'Beta Vehicle Bowtie' in a public communication draft, smile and ask: 'How would you explain that over coffee to your aunt or neighbor?' Plain language builds unity."
      }
    ],
    ninetyMinTemplate: [
      { mins: "0–15 min", segment: "Celebrate & Honest Debrief", notes: "Review field practice checklists and Oikos stories. Pray immediately for any Friction Valley burdens." },
      { mins: "15–35 min", segment: "Visual Tool Walkthrough", notes: "Project or draw the module's diagram. Practice the 60-second napkin sketch together." },
      { mins: "35–70 min", segment: "Live Lab / Role-Play / Team Work", notes: "Practice Scripture, stories, stakeholder listening, or roadmap drafting actively using the workshop prompts." },
      { mins: "70–85 min", segment: "2 Scenario Checks", notes: "Discuss the module's two real-church scenarios aloud to surface blind spots before real life hits." },
      { mins: "85–90 min", segment: "Concrete Field Commitments & Prayer", notes: "Every member writes down one concrete name/date before the next gathering and prays together." }
    ]
  },

  sustainabilityHub: {
    title: "Post-Lab Sustainability & Year-2 Continuity",
    subtitle: "Four permanent church rhythms ensuring renewal outlasts staff turnover, fall busyness, and cohort graduation",
    pillars: [
      {
        timing: "Month 3 Post-Lab (30-Day Window)",
        title: "1. Elder Ratification & Soul Care Budget Lock-In",
        details: "Within 30 days of Module 10 Commissioning, Elders formally ratify the Stewardship Roadmap, designate protected line-item time/budget for 1:4–5 Soul Care meals, and confirm retired legacy clutter."
      },
      {
        timing: "Every Quarter (Months 3, 6, 9, 12+)",
        title: "2. 90-Minute Quarterly Multiplication Huddles",
        details: "Cohort church teams reunite quarterly for peer clinics focused specifically on Year-2 friction: navigating wider congregational pushback as 2nd- and 3rd-generation apprentices multiply beyond eager early adopters."
      },
      {
        timing: "Every New Hire or Elder Election",
        title: "3. 30-Day New Staff & Elder Onboarding Rule",
        details: "Every incoming pastor, staff member, or elected Elder reads the 2-page Onboarding Manual (template below) and visits one active weekly life-on-life group within their first month so turnover never resets the clock."
      },
      {
        timing: "Annually Before Fall Ministry Kickoff",
        title: "4. Annual Pruning & 4-Number Health Review",
        details: "Before launching fall programming each August, Elders and Ministry Leads review four leading health numbers: (a) 1:4–5 Soul Care pod coverage, (b) active 2nd/3rd-gen apprentices, (c) Oikos & baptism stories, and (d) low-fruit clutter pruned."
      }
    ],
    onboardingTemplateFields: [
      { id: "ob-def", label: "Our Gospel Definition of a Disciple (12–15 plain words)", placeholder: "Paste your church's ratified Module 1/6 definition..." },
      { id: "ob-habits", label: "Our 4 Core Napkin Tools (+ Optional Max 1)", placeholder: "1. Look • Listen • Live  2. 4-Beat Prayer Ring  3. Jesus Pattern Compass  4. The Neighbor Table (Pray • Eat • Share)..." },
      { id: "ob-vetting", label: "Our Leader Vetting Gate & 24-Hr Crisis Escalation Contacts", placeholder: "Summarize your Module 9 Vetting Shield & Elder contacts..." },
      { id: "ob-soulcare", label: "Our 1:4–5 Soul Care Expectations & Pruned Commitments", placeholder: "How every leader is cared for monthly + what legacy programs remain retired..." }
    ]
  }
};
