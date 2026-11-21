/* ==========================================================================
   Disciple Making Lab — Complete 10-Week Interactive Curriculum Data
   Grounded in Andragogy, Cognitive Load Control, Chunking & Dual Coding
   ========================================================================== */

window.DML_CURRICULUM = {
  meta: {
    title: "Disciple Making Lab",
    subtitle: "A 10-Week Interactive Curriculum for Forming Christ-Centered, Reproducing Churches",
    promise: "Over 10 focused weeks, church teams root discipleship in union with Christ, practice four napkin-simple habits personally from Week 2, align elders and legacy groups before public rollout, launch weekly life-on-life pilot groups, and establish Year-2 continuity without burning out staff or volunteers.",
    audience: "Church teams of 3–5 people (Lead/Solo Pastor, at least one Elder/governance leader, and 1–3 Lay or Next-Gen ministry leaders), explicitly paced for bivocational and multi-staff sustainability.",
    weeklyLoad: "1.5 hr weekly team session + ~2 hrs/week relational field practice (funded by pruning low-fruit commitments in Week 4)."
  },

  disseminationPrinciples: [
    {
      title: "1. Chunked Working Memory",
      summary: "Every week breaks complex strategy into 5 predictable steps and 3–4 bite-sized micro-lessons (100–150 words each) instead of overwhelming 2-day data dumps."
    },
    {
      title: "2. Three-Tier Progressive Disclosure",
      summary: "Core concepts stay clean on the surface. Dotted-underlined terms give instant plain-English tooltips, while 'See More' menus tuck away exegesis and worked church examples until needed."
    },
    {
      title: "3. Dual-Coded Interactive Visuals",
      summary: "Every one of the 16 tools pairs concise explanation with a clickable, fully labeled SVG diagram—eliminating 'blank workbook syndrome.'"
    },
    {
      title: "4. Practice Before Systematizing",
      summary: "Instead of five months on whiteboards, participants launch personal Micro-Triads in Week 2 so institutional planning grows out of lived gospel obedience."
    },
    {
      title: "5. Active Retrieval & Application",
      summary: "Each week closes with 2 realistic church dilemmas (immediate explanatory feedback), saved team notes, and measurable relational action."
    }
  ],

  phases: [
    {
      id: 1,
      title: "Phase 1: Rooted & Practicing",
      weeks: "Weeks 1–3",
      image: "assets/images/phase-1-rooted.png",
      summary: "Anchor identity in union with Christ and launch personal weekly Micro-Triads using three core Scripture, prayer, and rhythm habits."
    },
    {
      id: 2,
      title: "Phase 2: Honest Ground & Bridges",
      weeks: "Weeks 4–6",
      image: "assets/images/phase-2-bridges.png",
      summary: "Audit real church clutter, prune low-fruit programs, build neighbor evangelism bridges, and align elders and veteran group leaders."
    },
    {
      id: 3,
      title: "Phase 3: Friction Valley & Weekly Rhythm",
      weeks: "Weeks 7–8",
      image: "assets/images/phase-3-journey.png",
      summary: "Equip leaders to walk with struggling disciples through relational valleys and launch weekly life-on-life pilot groups."
    },
    {
      id: 4,
      title: "Phase 4: Weaving Culture & Sending",
      weeks: "Weeks 9–10",
      image: "assets/images/phase-4-sending.png",
      summary: "Co-design Sunday liturgy and Next-Gen alignment, lock in vetting and 1:4–5 Soul Care guardrails, and commission teams for Year 2."
    }
  ],

  preLaunch: {
    title: "Pre-Launch Gate (Week 0 — Complete Before Week 1)",
    subtitle: "Three non-negotiable groundwork steps preventing 'Secret Lab' elder ambush and solo-pastor burnout.",
    items: [
      { id: "w0-covenant", text: "Elder Board Covenant Sign-Off: Elders review the 10-Week overview and commit to honest dialogue in Week 6 and formal ratification in Week 10." },
      { id: "w0-team", text: "Multi-Ministry Team Formed: Assemble 3–5 people including at least one Elder/governance voice and Next-Gen or lay small-group voices." },
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
      fourfoldAnchor: "Cross (Savior) & Pitcher (Sanctifier)",
      scripture: "Romans 5:1; 8:28–30; Galatians 2:20; 2 Corinthians 3:18; 5:14–21; Luke 9:23",
      hook: "Most pastors know the silent ache: our Sunday rooms are friendly and volunteer rosters stay mostly full, yet almost nobody feels equipped to open the Bible and walk with a friend toward Jesus. Why does busy church activity rarely produce spiritual grandchildren?",
      keyTakeaway: "You cannot fix consumer Christianity with a harder behavioral checklist. Lasting multiplication begins with rescued union in Christ (being), balanced across shared church culture (PLAN) and personal apprenticeship (PATH).",
      outcomes: {
        know: "Why passive attendance stalls at 30% serving—and how gospel union, justification, and cross-bearing correct moralistic definitions of a disciple.",
        feel: "Humbled by grace and relieved: renewal does not rest on heroic willpower, but on abiding in Christ together.",
        do: "Map your congregation honestly on the Master Bowtie and draft a plain-English, gospel-anchored definition of a disciple."
      },
      chunks: [
        {
          id: "w1-c1",
          title: "1. Exposing the Attractional Funnel (Bowtie Diagnosis)",
          readMin: "3 min",
          bodyHtml: `
            <p>Look honestly at how most Western churches operate: 100% attend Sunday services, roughly 60% connect in a social class or lobby, and 30% volunteer to keep events running—yet often only 2% actively help someone else follow Jesus. The <span class="term" data-term="bowtie-master-tool">Discipling Culture Master Tool (Bowtie)</span> shows why we need two wings working together.</p>
            <p>On the left wing, <span class="term" data-term="culture-making-plan">Culture Making (PLAN)</span> shapes what feels normal across the whole church through shared Practices, Language, Artifacts, and Narratives. On the right wing, <span class="term" data-term="relational-apprenticeship-path">Relational Apprenticeship (PATH)</span> equips ordinary believers to walk life-on-life with 2–3 friends.</p>
          `,
          seeMore: [
            {
              label: "See More: How the 16% Tipping Point Really Works",
              contentHtml: `<p>Organizational research observes that cultural momentum often shifts around a <span class="term" data-term="tipping-point">16% Tipping Point</span>. Treat this descriptively—not as a mechanical guarantee! You do not need unanimous church buy-in before starting in Week 2; God regularly uses small pockets of faithful leaven (Mt 13:33), though only God gives the growth (1 Cor 3:7).</p>`
            },
            {
              label: "See More: Why Word & Table Anchor the Center",
              contentHtml: `<p>At the Bowtie's center stands a sent <span class="term" data-term="word-and-table">Word &amp; Table</span> community—not a welcome desk. Preached Scripture, Baptism, and Communion continually re-center believers in Christ so Sunday worship feeds everyday apprenticeship rather than competing with it.</p>`
            }
          ]
        },
        {
          id: "w1-c2",
          title: "2. Fixing Our Definition: Union with Christ Before Technique",
          readMin: "4 min",
          bodyHtml: `
            <p>How you define a <span class="term" data-term="disciple">disciple</span> sets the target for everything else. Many checklists jump straight to moral effort and miss the gospel indicatives: <span class="term" data-term="justification">justification</span> by faith (Rom 5:1) and <span class="term" data-term="union-with-christ">union with Christ</span> (Gal 2:20).</p>
            <p>In Romans 8:28–30, God the Father calls, justifies, and glorifies his people to look like his Son. In 2 Corinthians 3:18, transformation flows from the Spirit as we behold Christ's glory—not from corporate self-improvement. And Luke 9:23 insists every follower embraces daily <span class="term" data-term="cross-bearing">cross-bearing</span> and neighbor-love (Mt 22:37–39).</p>
          `,
          seeMore: [
            {
              label: "See More: Why the C&MA Fourfold Gospel Matters Here",
              contentHtml: `<p>Rather than scattering Cross, Pitcher, Chalice, and Crown icons as decorative clip-art, this curriculum roots every week in the <span class="term" data-term="fourfold-gospel">Fourfold Gospel</span>: Jesus our <strong>Savior</strong> rescues us by grace; Jesus our <strong>Sanctifier</strong> indwells and transforms us by the Spirit; Jesus our <strong>Healer</strong> restores our brokenness; Jesus our <strong>Coming King</strong> sustains humble mission.</p>`
            },
            {
              label: "See More: Exegetical Guardrails on Classic Proof-Texts",
              contentHtml: `<p>Check the four classic texts carefully: (1) <em>Rom 8:28–30</em> centers on the Father's sovereign call and justification; (2) <em>Mt 22:37</em> must stay linked to v. 39 ('love your neighbor'); (3) <em>2 Cor 3:18</em> credits the Spirit's glory, not human technique; (4) <em>2 Cor 5:14–20</em> roots ambassadorship in Christ's substitutionary atonement.</p>`
            }
          ]
        },
        {
          id: "w1-c3",
          title: "3. Why This Lab Uses Chunked Learning & Dual Tracks",
          readMin: "2 min",
          bodyHtml: `
            <p>Traditional leadership labs fail when teams spend five months debating definitions on whiteboards while doing zero life-on-life discipling—or when they build secret plans without their <span class="term" data-term="stakeholder-alignment">Elders</span>. Built on <span class="term" data-term="andragogy">chunked adult learning</span>, this 10-week path runs two synchronized tracks.</p>
            <p><strong>Track A (Personal Obedience)</strong> puts every team member into a weekly <span class="term" data-term="micro-triad">Micro-Triad</span> starting next week. <strong>Track B (Church Alignment)</strong> moves honesty, pruning, and board listening ahead of wider pilots so trust grows alongside practice.</p>
          `,
          seeMore: [
            {
              label: "See More: Preventing the Secret Lab Trap",
              contentHtml: `<p>Make sure you completed the <strong>Pre-Launch Gate</strong> before Week 2: share your 2-page Baseline Reality Snapshot openly with your Elders so nobody feels ambushed later.</p>`
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
          { mins: "35m", title: "Draft Gospel Disciple Definition", instructions: "Using the Gospel-Anchored Disciple Definition tool, write a 12–15 word plain-English statement honoring union in Christ, Spirit growth, and cross-bearing mission." },
          { mins: "15m", title: "Commit to Week 1 Interviews", instructions: "Assign each team member to ask 2 ordinary parishioners this week: 'How would you describe a disciple of Jesus?'" }
        ],
        prompts: [
          { id: "w1-bowtie-gap", question: "Where is our church strongest right now (Left Wing PLAN vs. Right Wing PATH), and where do people stall?", placeholder: "e.g., Strong Sunday preaching and welcome teams (30% serving), yet almost no structured 1-on-3 mentoring..." },
          { id: "w1-def-draft", question: "Our Team's Working Gospel Definition of a Disciple (12–15 plain words):", placeholder: "e.g., Someone rescued and united to Jesus, growing by his Spirit with his church to love, obey, and invite neighbors." }
        ]
      },
      scenarios: [
        {
          prompt: "Your team drafts a catchy definition: 'A disciple is someone who reads the Bible, serves on Sunday, and invites a friend.' What critical gospel flaw would a theologian flag?",
          options: [
            { text: "It's too long to remember on a Sunday slide.", correct: false, feedback: "Length isn't the main issue—it's already short! The deeper issue is theological." },
            { text: "It reduces discipleship to human activity while omitting grace, justification, and union with Christ.", correct: true, feedback: "Exactly. Without grace, union with Christ (Gal 2:20), and the Spirit's work, checklists breed anxious moralism rather than joyful gratitude." },
            { text: "It mentions serving too early in the sentence.", correct: false, feedback: "Serving is good, but without being grounded in Christ's rescue, service quickly turns into 'church activity' fatigue." }
          ]
        },
        {
          prompt: "A fellow pastor says, 'Let's stay quiet for 6 months while we figure out our systems, then surprise the Elder Board once it's polished.' What is the wisest response?",
          options: [
            { text: "Wait—surprise rollouts create 'Secret Lab' suspicion; Elders and key staff need to be inside the tent from Week 1.", correct: true, feedback: "Spot on. Early governance transparency prevents elder ambush and builds shared ownership before any church-wide pilot launches." },
            { text: "Agree—boards slow things down, so finish all tools first.", correct: false, feedback: "Keeping elders in the dark causes pushback in Month 6–8 when they feel bypassed on spiritual governance." },
            { text: "Put everyone in the church through a 2-day seminar tomorrow.", correct: false, feedback: "Rushing the whole congregation before modeling personally creates classroom noise without lived imitation." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Listen to your congregation's baseline assumptions and confirm your Pre-Launch Elder Covenant.",
        checklist: [
          { id: "w1-f1", text: "Confirm Elder Board covenant sign-off & 2-Page Baseline Reality Snapshot (Pre-Launch Gate)." },
          { id: "w1-f2", text: "Ask 2 ordinary congregation members: 'In your own words, what is a disciple of Jesus?'" },
          { id: "w1-f3", text: "Pray daily through Galatians 2:20 and list 2–3 friends you might invite into a weekly Micro-Triad in Week 2." }
        ],
        reflectionPrompt: "What surprised you most when listening to ordinary members describe a disciple?"
      }
    },

    /* ======================== WEEK 2 ======================== */
    {
      week: 2,
      phase: 1,
      title: "Core Habits I: Listening to Scripture & Praying with the Father",
      subtitle: "Mastering two 101-level napkin tools and launching personal Micro-Triads within 7 days",
      timeBudget: "90-Min Team Session + Launch Weekly 45-Min Micro-Triad",
      fourfoldAnchor: "Pitcher (Sanctifier) & Cross (Forgiveness)",
      scripture: "Luke 24:27; 2 Peter 1:20; Matthew 6:9–13; Hebrews 4:14–16; James 1:22",
      hook: "Ordinary believers rarely resist discipling others because they hate Jesus—they stay silent because churches hand them intimidating 12-week workbooks. What happens if every follower has two habits simple enough to sketch on a coffee-shop napkin?",
      keyTakeaway: "We learn Scripture and prayer by doing them together in small, grace-filled circles—anchored in Christ's context and launching real weekly Micro-Triads right now rather than waiting months.",
      outcomes: {
        know: "How the Bible Reading Circle guards against subjective proof-texting, and how the Lord's Prayer Wheel unifies worship, lament, forgiveness, and a 2-minute beginner ring.",
        feel: "Equipped and unafraid—confident you can open Scripture and pray with two friends this week without being a seminary scholar.",
        do: "Practice both habits live in session and schedule your first weekly 45-minute Micro-Triad within 7–14 days."
      },
      chunks: [
        {
          id: "w2-c1",
          title: "1. What Makes a 101-Level Napkin Tool?",
          readMin: "2 min",
          bodyHtml: `
            <p>Instead of inventing six custom diagrams from scratch later, we master four shared <span class="term" data-term="napkin-tool">101-Level Napkin Tools</span> over the next month. Good tools are simple (sketchable in under 60 seconds), visual, action-oriented, transferable, and deep enough to grow with a saint for decades.</p>
          `,
          seeMore: [
            {
              label: "See More: Why We Master Proven Habits Before Customizing",
              contentHtml: `<p>Forcing church teams to invent 5–6 bespoke tools quickly overwhelms busy laypeople and breaks multi-generational transfer. A truck driver or busy parent can pass on three or four clear napkin habits across four generations.</p>`
            }
          ]
        },
        {
          id: "w2-c2",
          title: "2. The Bible Reading Circle (Chew, Digest, Act)",
          readMin: "3 min",
          bodyHtml: `
            <p>The Bible Reading Circle pairs <span class="term" data-term="pneumatology">Spirit-dependence</span> (the vertical arrow) with three clear movements: <strong>Chew</strong> (what does the text mean in context and reveal about Christ?), <strong>Digest</strong> (what is the Spirit stirring in our hearts?), and <strong>Act</strong> (what concrete obedience will I take, and who will I tell?).</p>
            <p>Adding <span class="term" data-term="christocentric-reading">Christocentric reading</span> (Lk 24:27) and community testing (2 Pet 1:20) prevents subjective cherry-picking, while a quick toggle converts it to a <span class="term" data-term="seeker-dbs">Seeker DBS</span> with non-Christians.</p>
          `,
          seeMore: [
            {
              label: "See More: Practicing a Passage Live (Luke 19:1–10)",
              contentHtml: `<p>Try Band 1 on Zacchaeus: notice tax collectors were despised collaborators (context), and Jesus sought out an outsider to bring salvation to his house (Christ). Band 2: Where do I avoid people my neighbors look down on? Band 3: Invite one overlooked coworker to coffee and share what moved you.</p>`
            }
          ]
        },
        {
          id: "w2-c3",
          title: "3. Lord's Prayer Wheel (+ 2-Min Ring & Cross-Centered Examen)",
          readMin: "3 min",
          bodyHtml: `
            <p>Modeled directly on Matthew 6:9–13, the Prayer Wheel approaches the Father exclusively through Christ our High Priest (Heb 4:16). Six slices walk through Character, Kingdom, Provision, Forgive &amp; Extend, Guidance, and Deliverance—anchored as Worship-based, Scripture-fed, and Spirit-led.</p>
            <p>At the center sits Christ's mercy and honest <span class="term" data-term="lament-endurance">Lament</span>; around the rim sits a <strong>2-Minute Ring</strong> (Praise, Confess, Ask, Go) alongside the <span class="term" data-term="examen">Cross-Centered Examen</span> for daily reflection.</p>
          `,
          seeMore: [
            {
              label: "See More: Why 'Forgive & Extend' Replaces One-Word 'Forgiveness'",
              contentHtml: `<p>Jesus explicitly paired receiving God's pardon with forgiving others (Mt 6:12, 14–15). Likewise, folding the Examen into the cross of Christ ensures prayer isn't vague mood-checking—it leads us to real repentance and grace.</p>`
            }
          ]
        },
        {
          id: "w2-c4",
          title: "4. Track A Deployment: Launching Your Micro-Triad Now",
          readMin: "2 min",
          bodyHtml: `
            <p>Delayed obedience kills spiritual momentum. Rather than waiting until Week 8 to start church-wide pilots, every lab participant gathers 2–3 friends (or open seekers) into a weekly 45-minute <span class="term" data-term="micro-triad">Personal Micro-Triad</span> starting this week over coffee, breakfast, or a living room.</p>
          `,
          seeMore: [
            {
              label: "See More: How to Invite Two Friends Without Being Awkward",
              contentHtml: `<p>Keep it completely human: <em>'I'm trying to grow in actually reading the Bible and praying in real life, not just Sunday mornings. Would you two want to grab coffee for 45 minutes on Thursday mornings for the next month and try a super simple habit together?'</em></p>`
            }
          ]
        }
      ],
      featuredTools: ["bible-circle", "prayer-wheel"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "25m", title: "Live Bible Circle Lab (Model -> Try)", instructions: "Read Mark 2:1–12 together using all three bands. Practice summarizing context and pointing to Christ before personal application." },
          { mins: "25m", title: "Live Prayer Wheel Lab", instructions: "Pray in pairs: try 10 minutes walking the 6 sectors, then try the 2-Minute Outer Ring (Praise, Confess, Ask, Go) aloud." },
          { mins: "20m", title: "Napkin Sketch Drill", instructions: "Close screens and draw both the Bible Circle and Prayer Wheel on scratch paper in under 60 seconds each, teaching them to your partner." },
          { mins: "20m", title: "Schedule Micro-Triads", instructions: "Each person names 2–3 specific friends to invite this week and locks in a target day/time." }
        ],
        prompts: [
          { id: "w2-triad-plan", question: "Who are the 2–3 people I am inviting into my weekly 45-min Micro-Triad (Day / Time / Location)?", placeholder: "e.g., Sam and Jordan — Tuesdays 7:00 AM at Corner Bakery (or living room)." },
          { id: "w2-debrief-insight", question: "From Week 1 parishioner interviews, what was missing in how most members described a disciple?", placeholder: "e.g., Most emphasized attending church or being moral, almost none mentioned union with Christ or passing faith on." }
        ]
      },
      scenarios: [
        {
          prompt: "In your triad, someone reads Philippians 4:13 ('I can do all things through Christ') and says, 'God is stirring me to believe this guarantees my business won't fail this quarter.' Using the Bible Reading Circle, how do you respond?",
          options: [
            { text: "Affirm it enthusiastically—Band 2 says whatever the Spirit stirs in me is automatically the passage's meaning.", correct: false, feedback: "Careful! Jumping straight to feelings without Band 1 context invites subjective misreading." },
            { text: "Gently return to Band 1 (Context & Christ): notice Paul wrote this from prison about contentment in poverty or plenty through Christ's strength.", correct: true, feedback: "Exactly. Band 1 anchors what the text meant in context and how Christ strengthens us for endurance, not guaranteed material success." },
            { text: "Tell them they aren't allowed to share personal impressions in the group.", correct: false, feedback: "We want Spirit-led heart engagement in Band 2—just tested warmly by Scripture's actual context." }
          ]
        },
        {
          prompt: "A brand-new believer joins your breakfast triad and freezes when asked to pray aloud around six different theology terms. Which adjustment helps immediately?",
          options: [
            { text: "Switch to the 2-Minute Outer Ring (Praise, Confess, Ask, Go) and pray short, ordinary sentences together.", correct: true, feedback: "Wise! The 2-Minute Ring keeps prayer accessible Day 1 while maintaining the same biblical posture." },
            { text: "Assign them to study the Lord's Prayer commentary alone for four weeks before praying aloud.", correct: false, feedback: "Prayer is caught through humble shared practice (Imitation), not homework prerequisites." },
            { text: "Skip prayer altogether so nobody feels uncomfortable.", correct: false, feedback: "Modeling short, honest 2-sentence prayers frees beginners far better than silence." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Launch your personal Micro-Triad within 7 days and practice both tools.",
        checklist: [
          { id: "w2-f1", text: "Invite 2–3 friends and hold your first 45-minute weekly Micro-Triad gathering." },
          { id: "w2-f2", text: "Practice the Bible Reading Circle (Chew/Digest/Act) at least 3 days personally." },
          { id: "w2-f3", text: "Use the 2-Minute Prayer Ring or Cross-Centered Examen twice before bed." }
        ],
        reflectionPrompt: "Where did the Bible Circle or Prayer Wheel feel effortless—and where did your triad stumble?"
      }
    },

    /* ======================== WEEK 3 ======================== */
    {
      week: 3,
      phase: 1,
      title: "Core Habits II: The Jesus Pattern & Everyday Imitation",
      subtitle: "Balancing UP, IN, and OUT around the cross while shifting from classroom lectures to shared life",
      timeBudget: "90-Min Team Session + Weekly Micro-Triad",
      fourfoldAnchor: "Cross (Kenotic Descent) & Pitcher (Imitation)",
      scripture: "Mark 3:14; Philippians 2:5–8; 1 Corinthians 4:14–17; 11:1; 2 Timothy 2:2",
      hook: "Why can someone attend 500 Sunday sermons and still freeze when a coworker asks about grief or prayer? Because Western churches treat Truth as a classroom download and skip the middle bridge Jesus and Paul relied on every day: shared-life imitation.",
      keyTakeaway: "Healthy discipleship pairs the Jesus Pattern (UP/IN/OUT centered on cross-bearing DOWN) with the Training Triangle (Truth -> Imitation -> Faithful Multiplication)—so people catch Christ's way at your table, not just from a podium.",
      outcomes: {
        know: "Why 'DOWN' (Philippians 2 cross-bearing) anchors UP/IN/OUT, and why Imitation must bridge Truth and Faithful Multiplication.",
        feel: "Liberated from feeling like a polished lecturer; willing to let 2–3 friends see your real dependence on Christ.",
        do: "Audit your calendar with the Jesus Pattern Compass and invite one triad friend into an ordinary errand or meal this week."
      },
      chunks: [
        {
          id: "w3-c1",
          title: "1. UP / IN / OUT Centered on DOWN (Jesus Pattern Compass)",
          readMin: "3 min",
          bodyHtml: `
            <p>The Jesus Pattern Compass traces three rhythms in Jesus's ministry: <strong>UP</strong> (communion with the Father), <strong>IN</strong> (covenant community with disciples), and <strong>OUT</strong> (compassionate presence among outsiders). Yet Jesus's life was never balanced self-care—he walked downward in humility to the cross.</p>
            <p>Placing <strong>DOWN</strong> (<span class="term" data-term="cross-bearing">Cross-Bearing &amp; Union with Christ</span>, Phil 2:5–8) at the center ensures we never flatten Jesus's atoning rescue into a mere lifestyle hack—and keeps our rhythms shaped by humble service.</p>
          `,
          seeMore: [
            {
              label: "See More: Remembering Exemplum vs. Sacramentum",
              contentHtml: `<p>Christ's 'OUT' was his unique substitutionary ransom (Mk 10:45), which only he could accomplish. Because we are united to him (<span class="term" data-term="union-with-christ">Union with Christ</span>), our 'OUT' rhythm proclaims his finished rescue and shares his mercy with neighbors.</p>`
            }
          ]
        },
        {
          id: "w3-c2",
          title: "2. The Training Triangle: No Classroom Shortcuts",
          readMin: "3 min",
          bodyHtml: `
            <p>In 1 Corinthians 4:14–17, Paul reminded Corinth they had ten thousand classroom 'tutors,' yet few spiritual fathers. The <span class="term" data-term="training-triangle">Training Triangle</span> shows why classes rarely multiply: we try jumping from biblical <strong>Truth</strong> directly to sending people out.</p>
            <p>Real apprenticeship walks down through <strong>Imitation</strong> (sharing meals, home life, setbacks, and prayer side-by-side) into <span class="term" data-term="faithful-multiplication">Faithful Multiplication</span> (2 Tim 2:2)—guarding the gospel deposit as we pass it to others.</p>
          `,
          seeMore: [
            {
              label: "See More: Why 'Faithful Multiplication' Replaces 'Innovation'",
              contentHtml: `<p>The original course called the third corner 'Innovation'—which tempted teams to invent brand-new tools before living the basics. Paul calls us to faithfully entrust tested truth to reliable people who will teach others also (2 Tim 2:2).</p>`
            }
          ]
        },
        {
          id: "w3-c3",
          title: "3. First Micro-Triad Debrief: Learning From Real Dirt",
          readMin: "2 min",
          bodyHtml: `
            <p>Every session from Week 3 onward starts with honest debriefing from your lived <span class="term" data-term="micro-triad">Micro-Triads</span>. What felt natural? Where did scheduling collapse? Real friction in Weeks 2–4 prepares your team to prune church clutter wisely next week.</p>
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
          { mins: "20m", title: "Micro-Triad Debrief", instructions: "Share candidly from Week 2's first triad: who showed up, what worked with Bible Circle / Prayer Wheel, and any awkward moments." },
          { mins: "25m", title: "Jesus Pattern Calendar Audit", instructions: "Individually score your past 7 days (1–5) on UP, IN, and OUT. Notice which corner was starved—and ask where DOWN (humility) is inviting you." },
          { mins: "30m", title: "Training Triangle Audit", instructions: "Look at how your church trains new believers or volunteers: sketch where you jump straight from Truth to expected Multiplication without Imitation." },
          { mins: "15m", title: "Plan One Shared-Life Moment", instructions: "Pick one ordinary errand, meal, or neighbor visit this week to invite a triad friend along." }
        ],
        prompts: [
          { id: "w3-calendar-gap", question: "Across UP / IN / OUT this past week, which rhythm was weakest—and what one calendar trade frees space for it?", placeholder: "e.g., OUT was 1/5 (all meetings were with church insiders). Swapping Thursday evening admin review for neighbor porch dinner." },
          { id: "w3-imitation-step", question: "One ordinary life-on-life moment I will invite a triad member into this week (Imitation):", placeholder: "e.g., Having Jordan join me when delivering meals to our recovering church member." }
        ]
      },
      scenarios: [
        {
          prompt: "A keen leader suggests: 'Our church knows how to preach Truth, so let's launch a 4-week workshop where everyone creates their own custom discipleship diagrams next month.' What warning does the Training Triangle give?",
          options: [
            { text: "Great idea—creativity speeds up ownership.", correct: false, feedback: "Rushing into inventing custom tools skips lived Imitation and overwhelms ordinary believers." },
            { text: "Jumping straight from Truth to inventing/multiplying skips months of lived Imitation, producing untested abstractions.", correct: true, feedback: "Spot on. Live inside the core habits alongside real friends for months before adapting anything." },
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
        summary: "Keep your weekly Micro-Triad rolling and add one intentional Imitation + OUT rhythm.",
        checklist: [
          { id: "w3-f1", text: "Hold Week 2 of your weekly Micro-Triad (let another member summarize the Bible passage first)." },
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
      keyTakeaway: "Moved five months earlier than the original lab, Week 4 pairs an unvarnished 'What Is' audit with a theology of pruning and lament: separate what God calls us to stop from external hardships beyond our control.",
      outcomes: {
        know: "Where existing church programs reward passive attendance vs. genuine growth—and why uncontrollable external trials are NOT moral failure.",
        feel: "Relieved of false pastoral guilt over things outside human control, and courageous enough to stop 1–2 cluttered commitments.",
        do: "Complete your horizontal PATH + PLAN Reality Audit and identify 1–2 low-fruit activities for your Pruning (STOP) Gate."
      },
      chunks: [
        {
          id: "w4-c1",
          title: "1. Auditing 'What Is' Before Building 'What Could Be'",
          readMin: "3 min",
          bodyHtml: `
            <p>In the original workbook, auditing current church ministries waited until Month 8—after teams had already built tools and started pilots! Putting our horizontal <strong>What Is Audit</strong> here in Week 4 lets you see every existing study, youth group, deacon team, and staff meeting clearly.</p>
            <p>Instead of launching isolated cliques, list every ministry across your <span class="term" data-term="relational-apprenticeship-path">PATH</span> and <span class="term" data-term="culture-making-plan">PLAN</span> and ask honestly: <em>Where is life-on-life discipleship actually happening, and where are leaders simply running separate islands?</em></p>
          `,
          seeMore: [
            {
              label: "See More: How to Inventory Without Attacking People",
              contentHtml: `<p>Every ministry on your calendar was started by someone who cared. Inventory with gratitude—honoring faithful volunteers—while asking gently whether each meeting still produces spiritual maturity.</p>`
            }
          ]
        },
        {
          id: "w4-c2",
          title: "2. Stewardship & Reality Diagnostic (Fixing 'Spiritual SWOT')",
          readMin: "3 min",
          bodyHtml: `
            <p>The original workbook labeled uncontrollable harmful realities 'FAILURE'—falsely tempting pastors to blame themselves for community aging, illness, or hardship. Our upgraded <strong>Stewardship &amp; Reality Diagnostic</strong> separates what lies <em>Within Our Stewardship</em> from what lies <em>Beyond Our Control</em>.</p>
            <p>Hardships beyond our control belong in <span class="term" data-term="lament-endurance">Lament &amp; Endurance</span>—not shame. Unexpected receptive opportunities call for prayerful discernment as an <strong>Open Door</strong> (Col 4:3). Only internal clutter calls for pruning.</p>
          `,
          seeMore: [
            {
              label: "See More: Why Lament Belongs in Leadership Strategy",
              contentHtml: `<p>Paul's list of hardships in 2 Corinthians 11 wasn't a 'SWOT Failure'—it was faithful endurance where Christ's power was perfected in weakness (2 Cor 12:9). Naming external grief honestly keeps leaders sane and prayerful.</p>`
            }
          ]
        },
        {
          id: "w4-c3",
          title: "3. The Pruning & Multiplication Curve (STOP Gate)",
          readMin: "3 min",
          bodyHtml: `
            <p>Rather than hyped aerospace 'Moonshot' guarantees, Mark 4:26–29 teaches <span class="term" data-term="pneumatology">Spirit-dependent</span> growth: humans sow and water; God alone brings fruit. Yet John 15:2 shows the Father prunes healthy branches so they bear lasting fruit.</p>
            <p>Your <span class="term" data-term="pruning-audit">Sacred Cow &amp; Pruning Audit (STOP Gate)</span> challenges your team to pause, merge, or retire 1–2 low-fruit commitments so you protect 2+ hours/week of margin.</p>
          `,
          seeMore: [
            {
              label: "See More: Three Gentle Ways to 'STOP' Without Whiplash",
              contentHtml: `<p>(1) Put an overcrowded planning committee on a 90-day sabbatical; (2) fold a redundant bulletin announcement meeting into existing staff prayer; (3) let a winding-down book study finish its term warmly before transitioning toward triads.</p>`
            }
          ]
        }
      ],
      featuredTools: ["reality-audit", "pruning-curve"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Micro-Triad Debrief", instructions: "How did Week 3's Imitation invitation go? Pray briefly for each triad." },
          { mins: "30m", title: "Horizontal 'What Is' Inventory", instructions: "List every weekly gathering, class, and team meeting in your church—mark which ones have real life-on-life apprenticeship vs. pure logistics." },
          { mins: "25m", title: "Stewardship Diagnostic Sort", instructions: "Place honest observations into the 4 Stewardship quadrants—carefully separating Lament & Endurance from Needs Pruning." },
          { mins: "20m", title: "Name 1–2 Commitments to STOP", instructions: "Pass through the Pruning Gate: nominate 1–2 low-fruit meetings/programs to pause or simplify (to discuss respectfully with Elders/stakeholders in Week 6)." }
        ],
        prompts: [
          { id: "w4-what-is", question: "What 3 existing spaces in our church already carry genuine relational life (Stewarded Fruit)?", placeholder: "e.g., Thursday women's prayer breakfast, youth small-group leaders, hospitality crew." },
          { id: "w4-stop-gate", question: "Which 1–2 low-fruit commitments can we propose pausing or merging to free 2+ hours/week?", placeholder: "e.g., Merge two separate monthly promo meetings into one 20-min huddle; pause midweek slide prep." }
        ]
      },
      scenarios: [
        {
          prompt: "A factory closes in your town, causing several families to move away and reducing Sunday attendance by 12%. Where does this belong on the Stewardship & Reality Diagnostic?",
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
          { id: "w4-f1", text: "Hold Week 3 of your Micro-Triad (have a partner lead part of the Bible Circle)." },
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
      title: "Sent to Neighbors: Oikos, Gospel Story & Seeker Discovery",
      subtitle: "Filling the evangelism gap with relational neighbor prayer, a 3-minute Christ-centered story, and Seeker DBS",
      timeBudget: "90-Min Team Session + 1 Neighborhood Table Invitation",
      fourfoldAnchor: "Cross (Savior) Reconciliation to Neighbors",
      scripture: "Luke 10:1–11; Mark 5:19; 2 Corinthians 5:14–21; Colossians 4:2–6",
      hook: "Look closely at many discipleship programs: every tool assumes the person across the table already trusts the Bible and knows church songs. Yet our neighbors don't need an invitation to a committee—they need a friend who prays for them, listens deeply, and knows how to introduce Jesus over a meal.",
      keyTakeaway: "Mission cannot be locked into 'Week 4' of a group schedule. Using our fourth core habit—the Oikos & Gospel Bridge—ordinary believers pray daily for nearby friends, share a 3-minute story centered on Jesus's cross, and invite open seekers into 4-question Discovery Bible Study.",
      outcomes: {
        know: "How Oikos mapping, a Christ-centered 3-minute story, and 4-question Seeker DBS engage skeptics without pressure or jargon.",
        feel: "Warm, unhurried compassion toward nearby non-Christians—free from sales scripts or awkward cold-calling.",
        do: "Map 3–5 Oikos names, rehearse your 3-minute story aloud, and take one hospitable step with a neighbor this week."
      },
      chunks: [
        {
          id: "w5-c1",
          title: "1. Your Oikos: Where God Already Placed You",
          readMin: "2 min",
          bodyHtml: `
            <p>In the New Testament, the gospel moved along <span class="term" data-term="oikos">Oikos</span> networks—households, coworkers, and neighbors where you already live, work, learn, and play. Instead of pulling believers out of their neighborhoods into extra church nights, we pray daily for 3–5 friends far from God.</p>
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
          title: "2. Telling a 3-Minute Story Anchored in the Cross",
          readMin: "3 min",
          bodyHtml: `
            <p>When someone asks why you care or how you handle anxiety, avoid church buzzwords. Practice three simple sentences: (1) what life or struggle felt like before trusting Christ, (2) how Jesus's <span class="term" data-term="justification">cross and rescue</span> met your real need, and (3) what peace or purpose looks like today.</p>
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
          title: "3. Four-Question Seeker Discovery Bible Study (DBS)",
          readMin: "3 min",
          bodyHtml: `
            <p>You do not need a seminary degree to open a Gospel story with an unchurched friend. A <span class="term" data-term="seeker-dbs">Seeker DBS</span> lets Jesus speak for himself using four inviting questions on a short text (like Luke 5 or Mark 4):</p>
            <ol>
              <li>What caught your attention in this story?</li>
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
          { mins: "20m", title: "Oikos Prayer Map", instructions: "Each person fills 3–5 real names across Live, Work, Learn, and Play—and prays aloud for them right now." },
          { mins: "25m", title: "3-Minute Story Coaching", instructions: "Pair up and tell your 3-minute story using a 3-minute timer. Coach out any church jargon ('sanctified,' 'hedge of protection') into plain human speech." },
          { mins: "30m", title: "Seeker DBS Role-Play", instructions: "Role-play Luke 19:1–10 with one person acting as a skeptical coworker. Practice asking the 4 questions without lecturing!" }
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
          { id: "w5-f3", text: "Continue your weekly Micro-Triad, praying together for each other's Oikos." }
        ],
        reflectionPrompt: "How did praying daily for 3–5 neighbors change what you noticed in everyday conversations?"
      }
    },

    /* ======================== WEEK 6 ======================== */
    {
      week: 6,
      phase: 2,
      title: "Aligned at Home: Stakeholders, Plain Language & Legacy Groups",
      subtitle: "Replacing Month 8 ambushes with early Elder/staff dialogue, jargon-free vision, and honoring existing small groups",
      timeBudget: "90-Min Team Session + 1-on-1 Alignment Coffees",
      fourfoldAnchor: "Covenant Unity & Honor (Philippians 2)",
      scripture: "Proverbs 15:22; Philippians 2:1–5; Romans 12:10; 1 Corinthians 14:9",
      hook: "Nothing sinks church renewal faster than an inner circle disappearing into workshops for months and returning with mysterious acronyms—or handing shiny status badges to new group leaders while veteran small-group hosts feel demoted to second-class citizens.",
      keyTakeaway: "Moved forward from Month 8, Week 6 equips teams to write a plain-English 1-Pager, listen to Elders, staff, and Next-Gen leads before church pilots begin, and offer veteran small groups dignified pathways forward—explicitly banning divisive lanyards.",
      outcomes: {
        know: "Why insider lab jargon alienates congregations, and how Convert / Hybridize / Bless & Sunset pathways honor existing group leaders.",
        feel: "Deep respect and collaborative patience toward veteran volunteers, non-lab staff, and Elders.",
        do: "Complete your jargon-free 1-Pager, map every stakeholder conversation, and schedule alignment coffees before Week 8 pilots."
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
              contentHtml: `<ul><li><em>'Discipleship Vehicle Beta'</em> &rarr; 'A 12-week trial table of 3–5 friends learning Scripture &amp; prayer together.'</li><li><em>'PATH Tools'</em> &rarr; 'Simple napkin habits.'</li><li><em>'Culture-Making Artifacts'</em> &rarr; 'Fridge cards &amp; stories.'</li></ul>`
            }
          ]
        },
        {
          id: "w6-c2",
          title: "2. The Plain 1-Pager & Stakeholder Listening Matrix",
          readMin: "3 min",
          bodyHtml: `
            <p>With your Week 4 'What Is' audit in hand, draft a clear 1-page summary answering four questions: Why this matters, what ordinary members will experience, what legacy clutter we are respectfully pausing, and who is listening. Use it to host early <span class="term" data-term="stakeholder-alignment">Stakeholder Alignment</span> coffees with Elders, Worship, Kids, and Youth leads.</p>
          `,
          seeMore: [
            {
              label: "See More: Listening Without Defensiveness",
              contentHtml: `<p>When a Youth Director says, 'I have zero volunteer margin right now,' don't argue—listen! Ask: 'What could we take OFF your plate before we co-design anything in Week 9?'</p>`
            }
          ]
        },
        {
          id: "w6-c3",
          title: "3. Bridging Legacy Small Groups (And Banning Lanyards)",
          readMin: "3 min",
          bodyHtml: `
            <p>Existing small groups and adult classes carry deep relational loyalty. Our <span class="term" data-term="legacy-group-pathway">Legacy Small-Group Pathway</span> offers veteran leaders three respectful choices: (A) <strong>Convert</strong> gradually to the weekly life-on-life rhythm, (B) <strong>Hybridize</strong> by folding one napkin habit (like the Bible Circle) into existing sessions, or (C) <strong>Bless &amp; Sunset</strong> a long-running class with public gratitude.</p>
            <p>Crucially: reject visual status markers like Sunday pilot leader lanyards that split a congregation into 'elite disciplemakers' vs. 'ordinary social groups.'</p>
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
          { mins: "15m", title: "Oikos & Triad Debrief", instructions: "Share one neighbor conversation or prayer highlight from Week 5." },
          { mins: "25m", title: "Jargon-Free 1-Pager Draft", instructions: "Write the 4 sections of your 1-Pager together. Read every sentence aloud and strike every consulting buzzword." },
          { mins: "25m", title: "Stakeholder Listening Matrix", instructions: "Map Elders, Non-Lab Staff, Kids/Youth leads, and Legacy Group hosts—note each group's valid concern and assign who will meet whom over the next 10 days." },
          { mins: "25m", title: "Legacy Small-Group Pathway Plan", instructions: "Review your Week 4 'What Is' group list and sketch hopeful Convert / Hybridize / Sunset conversations alongside your STOP proposals." }
        ],
        prompts: [
          { id: "w6-onepager", question: "Draft 3–4 plain-English sentences explaining our church's vision without ANY lab jargon:", placeholder: "e.g., Over the next season, we want every follower of Jesus to have 2–3 trusted friends around a table learning Scripture, praying honestly, and loving neighbors..." },
          { id: "w6-stakeholders", question: "Who are the top 3 internal stakeholders (Elders, staff, veteran leaders) we will meet 1-on-1 before Week 8?", placeholder: "e.g., Elder Chair & Finance Lead (Tue), Children's Director (Thu), Wednesday Bible Class host (Sat breakfast)." }
        ]
      },
      scenarios: [
        {
          prompt: "A team member suggests having pilot group leaders wear bright matching lanyards on Sunday mornings so congregation members notice who is leading the new initiative. Why does the Pastor & Disciplemaker critique reject this?",
          options: [
            { text: "Lanyards are too expensive in small church budgets.", correct: false, feedback: "Cost is negligible—the real harm is relational and theological." },
            { text: "Status badges create a two-tier caste system that alienates veteran small-group leaders and turns humble service into visibility theater.", correct: true, feedback: "Spot on. Jesus warns against public badges of spiritual prestige; quiet faithfulness and respectful inclusion build trust." },
            { text: "Lanyards only work if you put the Bowtie logo on them.", correct: false, feedback: "Branding insiders divides the Body regardless of the logo." }
          ]
        },
        {
          prompt: "A faithful 15-year home group host hears about the upcoming weekly pilot groups and worries, 'Are you shutting down our fellowship group?' Which Legacy Pathway response honors them?",
          options: [
            { text: "Meet personally, thank them for 15 years of care, and invite them to explore either blending one 15-min habit into their night (Hybridize) or finishing their current study cleanly (Bless & Sunset).", correct: true, feedback: "Yes! Offering dignity, choice, and gratitude turns anxious hosts into trusted partners." },
            { text: "Tell them fellowship groups don't count anymore so they need to dissolve next week.", correct: false, feedback: "Abruptly dismissing years of pastoral loyalty fractures church unity." },
            { text: "Exclude their group from all communication so they don't raise objections.", correct: false, feedback: "Silence fuels rumors and deepens mistrust." }
          ]
        }
      ],
      fieldPractice: {
        summary: "Hold 1-on-1 Stakeholder & Elder listening coffees using your plain 1-Pager.",
        checklist: [
          { id: "w6-f1", text: "Share your plain-English 1-Pager with Elders and at least 2 non-lab ministry/group leaders; listen carefully to their feedback." },
          { id: "w6-f2", text: "Confirm which Week 4 STOP/pruning step has alignment to proceed cleanly." },
          { id: "w6-f3", text: "Keep your weekly Micro-Triad and daily Oikos prayer going." }
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
      fourfoldAnchor: "Chalice (Healer) & Pitcher (Sanctifier)",
      scripture: "1 Thessalonians 2:7–12; 5:14; Galatians 6:1–5; Isaiah 42:3; James 5:13–16",
      hook: "By Month 2 of real triads and Oikos friendships, initial excitement always hits reality: someone relapses into hidden sin for the fourth time, a spouse faces grief or diagnosis, or a keen learner pulls back saying 'I'm failing at this.' How do you shepherd people without shaming them—or lowering Jesus's call?",
      keyTakeaway: "Moved from Week 1 into the heart of real relational friction, the Apprenticeship Growth Loop prepares leaders for Friction Valley without rushing timelines—while the 5-Point Napkin Rubric replaces the old 5–6 custom tool overload.",
      outcomes: {
        know: "Why growth is domain-specific toward Spirit-Dependent Maturity (never autonomous perfection), and how Picture/Mirror/Window + the 5-Point Rubric test any visual aid.",
        feel: "Patient, unhurried pastoral tenderness—ready to sit in grief and failure alongside Christ our Healer.",
        do: "Role-play hard Friction Valley coaching scenes and test your starter 4-habit toolkit (+ max 1 optional contextual aid) with two laypeople."
      },
      chunks: [
        {
          id: "w7-c1",
          title: "1. The Apprenticeship Growth Loop (Domain-Specific Grace)",
          readMin: "3 min",
          bodyHtml: `
            <p>Earlier editions called this 'The MAP' square—colliding with 'Map' in PATH and implying mature believers graduate into autonomous 'Unconscious Competence.' Our upgraded <strong>Apprenticeship Growth Loop</strong> moves through four postures per area of life: Humble Beginner (D1: I do, you watch), <span class="term" data-term="friction-valley">Friction Valley</span> (D2: I do, you help), Co-Laborer (D3: You do, I help), and <span class="term" data-term="spirit-dependent-maturity">Spirit-Dependent Maturity</span> (D4: You do, I cheer).</p>
          `,
          seeMore: [
            {
              label: "See More: Why 'Over-Functioning' Replaces 'Co-Dependence'",
              contentHtml: `<p>Bearing one another's burdens (Gal 6:2) is godly—never 'co-dependence.' What hurts growing D3 disciples is <span class="term" data-term="over-functioning">Over-Functioning</span>: when a mentor insists on rescuing or answering every question so they still feel needed.</p>`
            },
            {
              label: "See More: Never Confuse Sin, Suffering, and Skill Lag",
              contentHtml: `<p>A believer may be seasoned in Bible study (D4) yet feel completely lost praying with a skeptical neighbor (D1). Meanwhile, bereavement or depression in Friction Valley requires presence, lament, and slow patience—never pushing someone to hit a 90-day timeline.</p>`
            }
          ]
        },
        {
          id: "w7-c2",
          title: "2. Picture / Mirror / Window & 5-Point Napkin Rubric",
          readMin: "3 min",
          bodyHtml: `
            <p>Remember why we abolished the original requirement to invent 5–6 custom tools: forcing novices to author six diagrams breaks <span class="term" data-term="andragogy">Zone of Proximal Development</span> limits and kills transfer. Instead, use <span class="term" data-term="picture-mirror-window">Picture / Mirror / Window</span> plus our <strong>5-Point Napkin Rubric</strong> to check our 4 shared habits—and refine at most <strong>one</strong> optional contextual aid only if a genuine ministry gap remains.</p>
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
            <p>Never rely on staff insiders guessing whether a habit card is clear. Hand our core <span class="term" data-term="napkin-tool">napkin tools</span> to two everyday, non-staff congregation members and ask four simple questions: <em>What clicked immediately? What felt confusing or preachy? Where did it feel unnatural? Could you show this to a friend next week?</em></p>
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
          { mins: "20m", title: "Stakeholder Alignment Debrief", instructions: "Compare notes from Week 6's Elder/staff/group coffees. Adjust any wording or pruning step based on what you heard." },
          { mins: "35m", title: "Friction Valley Role-Play Clinic", instructions: "Act out two hard scenes in trios: (A) A friend relapses into chronic sin and says 'I'm quitting the triad'; (B) A grieving member misses three weeks after family crisis. Practice L2 Shepherding without lecturing or rescuing." },
          { mins: "35m", title: "Napkin Rubric & Optional Contextual Check", instructions: "Review the 4 Core Habits using Picture/Mirror/Window + 5-Point Rubric. Decide openly: Do we even need 1 extra contextual card (e.g., Kids/Families), or are 4 core habits enough for Year 1?" }
        ],
        prompts: [
          { id: "w7-friction-notes", question: "Where am I personally tempted to Over-Function (L3) or rush someone out of Friction Valley (L2)?", placeholder: "e.g., I rush to give tidy 3-step solutions when someone cries instead of praying and sitting in silence." },
          { id: "w7-tool-decision", question: "Our Year-1 Toolkit Decision (4 Core Habits + Optional Max 1?):", placeholder: "e.g., Stick strictly to the 4 Core Habits for adults, plus 1 simplified 3-icon family bedtime card for Kids ministry." }
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
        summary: "Test your 4-habit starter kit with two ordinary laypeople and practice compassionate D2 shepherding.",
        checklist: [
          { id: "w7-f1", text: "Sit down with 2 non-staff believers and walk them through 1–2 core napkin cards using 4 diagnostic questions (Worked? Confusing? Natural? Would you pass it on?)." },
          { id: "w7-f2", text: "Practice asking one open-hearted question in your Micro-Triad rather than rushing to fix someone's struggle." },
          { id: "w7-f3", text: "Finalize who you will invite into Week 8's church-wide weekly Pilot Groups (Betas)." }
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
      hook: "Why did the original Lab's 'at least twice a month for 3 months' pilots stall out? Do the math: six meetings spaced two weeks apart is barely enough time to remember last session's prayer request—never mind confess sin, survive crisis, or release a second-generation apprentice.",
      keyTakeaway: "Launch 2–4 weekly pilot groups (Betas) of 3–5 people using a warm hospitality loop—Celebrate, Habit Focus, Next Step + Weekly OUT Mission—embedding neighbor love every week rather than trapping outreach in 'Week 4.'",
      outcomes: {
        know: "Why weekly 60–75 minute kitchen-table rhythms outperform biweekly meetings, and why mission belongs in every week's Step 3.",
        feel: "Grounded confidence: aligned stakeholders, vetted core habits, and pre-formatted napkin guides remove launch panic.",
        do: "Finalize your weekly Gathering Rhythm, complete the 7-point Pilot Launch Checklist, and launch 2–4 weekly Beta groups within 14 days."
      },
      chunks: [
        {
          id: "w8-c1",
          title: "1. The 3-Part Weekly Life-on-Life Rhythm",
          readMin: "3 min",
          bodyHtml: `
            <p>A healthy <span class="term" data-term="life-on-life-rhythm">Life-on-Life Gathering Rhythm</span> takes 60–75 minutes around a meal, coffee table, or living room: <strong>#1 Celebrate &amp; Honest Check-In</strong> (15m), <strong>#2 Habit Focus</strong> in the Bible Circle, Prayer Wheel, or Jesus Pattern (35m), and <strong>#3 Next Step + Weekly OUT Mission</strong> (15m).</p>
            <p>Crucially, we abolish the original 4-week rotation that relegated outreach to 'Week 4: Mission focus.' Every single week ends with one obedience step and one named <span class="term" data-term="oikos">Oikos</span> neighbor.</p>
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
            <p>Your <span class="term" data-term="beta-group">Weekly Pilot Groups (Betas)</span> commit to three clear standards: <strong>3–5 people</strong> per circle, meeting <strong>weekly</strong> (never biweekly), for <strong>12–16 weeks</strong>. Halfway through (Weeks 6–8), the pilot host intentionally coaches an emerging apprentice to lead #2 Habit Focus—growing real 2nd-generation fruit before Year 1 finishes.</p>
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
            <p>From Day 1 of your weekly pilot, watch for faithful, humble learners who consistently follow through on Step #3 and pray for their <span class="term" data-term="oikos">Oikos</span>. By Week 6, invite one co-leader per group to prepare and guide Step #2 (<span class="term" data-term="faithful-multiplication">Faithful Multiplication</span>)—moving steadily from <em>'I do, you watch'</em> to <em>'You do, I help.'</em></p>
          `,
          seeMore: [
            {
              label: "See More: How to Protect Early Pilots From Unwanted Spotlight",
              contentHtml: `<p>Keep initial pilots quiet, warm, and unpretentious—no stage spotlights or badges. Let genuine changed lives and neighbor hospitality speak naturally when stories are shared in Week 9.</p>`
            }
          ]
        }
      ],
      featuredTools: ["gathering-rhythm"],
      workshop: {
        totalMinutes: 90,
        agenda: [
          { mins: "15m", title: "Lay Testing Debrief", instructions: "What changed in your napkin cards based on Week 7's layperson feedback? Use pre-formatted printable cards so nobody stalls on graphic design." },
          { mins: "25m", title: "Customize Weekly Rhythm", instructions: "Design your church's 60–75 min flow around #1 Celebrate / #2 Habit Focus / #3 Next Step + Weekly OUT. Map a sample 4-week progression." },
          { mins: "30m", title: "Complete Pilot Launch Checklist", instructions: "Name 2–4 initial Weekly Pilot Hosts (drawn from your team + aligned legacy hosts), confirm 3–5 invitees per group, and lock start dates within 14 days." },
          { mins: "20m", title: "Beta Invitation Role-Play", instructions: "Practice issuing a warm, pressure-free verbal invite to a prospective pilot member—explaining the weekly rhythm in plain English." }
        ],
        prompts: [
          { id: "w8-beta-roster", question: "Our 2–4 Weekly Pilot Groups launching within 14 days (Host + Co-Host + Day/Time):", placeholder: "e.g., Group A: Men's Tue 6:30am coffee; Group B: Women's Thu 7pm living room; Group C: Blended Hybrid class." },
          { id: "w8-feedback-plan", question: "How will we collect honest 30- and 60-day pilot feedback from members (not just leaders)?", placeholder: "e.g., 3-question check-in card after Week 4 & Week 8 asking what worked, what dragged, and who is stepping up." }
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
          { id: "w8-f2", text: "Hold Week 1 of your Beta using Celebrate / Habit Focus / Next Step + Weekly OUT around food or coffee." },
          { id: "w8-f3", text: "Invite Worship, Children's, Student, and Mercy ministry leads to next week's Week 9 Co-Design session." }
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
      fourfoldAnchor: "Healer (Chalice) & Sanctifier (Pitcher) Guardrails",
      scripture: "Deuteronomy 6:4–9; 1 Timothy 3:1–13; 2 Timothy 2:1–7; Exodus 18:13–26; Acts 20:28",
      hook: "Two silent threats wait right as pilot groups catch fire: First, Next-Gen and Worship leaders get handed adult handouts they never helped build. Second, leaders multiply rapidly without character vetting or Soul Care—exhausting pastors and risking moral harm.",
      keyTakeaway: "Week 9 merges five repetitive grids into ONE shared co-design canvas built alongside Worship, Kids, Youth, and Mercy leads, while wiring Character & Competency into a written Vetting Gate and capped 1:4–5 Soul Care pods.",
      outcomes: {
        know: "How Sunday Word & Table and Next-Gen rhythms align organically without stage commercials—and why Vetting Gates plus 1:4–5 Soul Care caps protect multiplying churches.",
        feel: "United across ministry departments and deeply sheltered by healthy pastoral oversight.",
        do: "Co-author your single Master Culture Canvas, adopt a 1-page Vetting & Escalation Protocol, and assign every pilot leader to a 1:4–5 Soul Care pod."
      },
      chunks: [
        {
          id: "w9-c1",
          title: "1. One Shared Culture Canvas (Co-Designed, Never Retrofitted)",
          readMin: "3 min",
          bodyHtml: `
            <p>Instead of repeating a 20-cell matrix five times across four months, your team sits down *with* Worship, Kids, Youth, and Mercy leaders around ONE unified <span class="term" data-term="culture-making-plan">Master Culture-Making &amp; Ministry Alignment Canvas</span>.</p>
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
            <p>One pastor can shepherd 4 pilot hosts directly; nobody can shepherd 25 multiplying leaders alone (Exod 18). Every leader sits inside a capped <span class="term" data-term="soul-care-pods">1:4–5 Soul Care Pod</span>—meeting monthly strictly for rest, prayer (<span class="term" data-term="examen">Cross-Centered Examen</span> + Prayer Wheel), and encouragement, never metric policing.</p>
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
          { id: "w9-ministry-shift", question: "What ONE organic habit shift did Worship, Kids, Youth, and Mercy choose together on our single Culture Canvas?", placeholder: "e.g., Sunday Communion includes 60s silent Examen; Kids sends home 3-Q fridge card; Pantry opens with 3-min Prayer Wheel." },
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
          { id: "w9-f2", text: "Coach 1 emerging apprentice inside each Beta group to lead #2 Habit Focus at least once before Week 10." },
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
      subtitle: "Building a James 4:15 Stewardship Roadmap, preventing the Month 13 cliff, and sending around Word & Table",
      timeBudget: "90-Min Commissioning Gathering + 30-Day Elder Ratification",
      fourfoldAnchor: "Full Fourfold Gospel & Word-and-Table Sending",
      scripture: "James 4:13–15; 1 Corinthians 3:6–9; Matthew 28:18–20; 2 Timothy 2:2; Revelation 21:5",
      hook: "Too many 10-week cohorts end with inspiring applause on Friday night—and vanish quietly by Month 6 when staff turn over, fall ministry schedules explode, or budget belts tighten. How do we seal what God has started without trusting in human guarantees?",
      keyTakeaway: "Retiring NASA Apollo roadmaps and hubristic promises ('only derailed if intentionally stopped'), Week 10 builds a prayerful James 4:15 Stewardship Roadmap tracked by leading health indicators, ratifies a 2-page New Staff & Elder Onboarding Manual, and commissions teams around Word & Table as lifelong disciplemakers.",
      outcomes: {
        know: "How leading health indicators, Elder ratification, and a 2-page Onboarding Manual eliminate the post-cohort cliff while keeping growth surrendered to God.",
        feel: "Deeply grateful, soberly realistic about Year-2 valleys, and joyfully sent in the power of the Spirit.",
        do: "Complete your 4-horizon Stewardship Roadmap, finalize your 2-page Onboarding Manual, book Year-2 Quarterly Huddles, and celebrate Word-and-Table Commissioning."
      },
      chunks: [
        {
          id: "w10-c1",
          title: "1. Replacing Apollo Hubris With James 4:15 Stewardship",
          readMin: "3 min",
          bodyHtml: `
            <p>The original curriculum modeled planning on NASA's moonshot and promised a shift <em>'that could only be derailed if you intentionally tried to stop it.'</em> Scripture corrects that hubris: <em>'If the Lord wills, we will live and do this or that'</em> (Jas 4:15). Only God gives growth (1 Cor 3:7).</p>
            <p>Our <span class="term" data-term="stewardship-roadmap">Prayerful Stewardship Roadmap</span> preserves clear 90-Day, 1-Year, and 3-Year horizons across <strong>both PATH and PLAN</strong>—grounded in real pilot data and calendar/budget honesty.</p>
          `,
          seeMore: [
            {
              label: "See More: Tracking Leading Health Indicators Instead of Vanity Quotas",
              contentHtml: `<p>Instead of empty percentages, watch five <span class="term" data-term="leading-indicators">Leading Health Indicators</span>: (1) Beta group retention, (2) weekly habit fidelity, (3) real Oikos &amp; baptism stories, (4) 100% 1:4–5 Soul Care pod coverage, and (5) legacy clutter genuinely pruned.</p>`
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
          title: "3. Commissioning Around Word & Table",
          readMin: "2 min",
          bodyHtml: `
            <p>The original workbook closed by declaring: <em>'YOU ARE CULTURE BUILDERS.'</em> Yet Christ did not die to make us organizational culture consultants. Around Scripture and the Lord's Supper, we close with <span class="term" data-term="commissioning">Word-and-Table Commissioning</span>: <strong>'YOU ARE DISCIPLEMAKERS — GO MULTIPLY IN CHRIST.'</strong></p>
          `,
          seeMore: [
            {
              label: "See More: A Simple 20-Minute Commissioning Liturgy",
              contentHtml: `<p>Read Matthew 28:18–20 and 2 Timothy 2:1–2; share gratitude and one specific prayer burden for each church/group; celebrate Communion remembering Jesus Savior, Sanctifier, Healer, and Coming King; lay hands on one another and pray.</p>`
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
          { mins: "25m", title: "Finalize 2-Page Onboarding Manual & Year-2 Dates", instructions: "Complete your church's 2-page New Staff/Elder Onboarding summary (Definition, 4 Core Habits, Vetting Gate, 1:4–5 Soul Care) and put Elder Ratification + Year-2 Huddles on the calendar." },
          { mins: "20m", title: "Word-and-Table Commissioning Prayer", instructions: "Share key learnings, name where your church most needs God's mercy, break bread (if appropriate), and pray Matthew 28:18–20 over each other." }
        ],
        prompts: [
          { id: "w10-1yr-obj", question: "Our Prayerful 1-Year Objective (PATH + PLAN, aligned with budget & pruning):", placeholder: "e.g., 100% of group hosts in 1:4–5 Soul Care pods; 2 legacy classes transitioned; 4–6 weekly groups led by vetted 2nd-gen apprentices." },
          { id: "w10-onboarding-notes", question: "Date booked for Elder Board Ratification (within 30 days) & Month 3/6/9/12 Quarterly Huddles:", placeholder: "e.g., Elder Board meeting next month (date); Quarterly Huddles booked on church calendar." }
        ]
      },
      scenarios: [
        {
          prompt: "At your 10-Week wrap-up, someone writes as your 5-year vision: 'Our church has built an unstoppable discipleship machine that nothing can derail.' Why does the Polymath Editor rewrite this?",
          options: [
            { text: "It denies Spirit-sovereignty (1 Cor 3:7; Jas 4:15), ignores spiritual drift and pruning, and mistakes organizational inertia for divine grace.", correct: true, feedback: "Spot on! Faithful churches plan diligently while remaining utterly dependent on God's mercy and ongoing repentance." },
            { text: "Five years is too short—change it to 20 years.", correct: false, feedback: "The problem is theological hubris, not the number of years." },
            { text: "Churches shouldn't write down any 3-year hopes at all.", correct: false, feedback: "Wise planning under 'If the Lord wills' (Jas 4:15) is biblical stewardship—as long as it stays humble." }
          ]
        },
        {
          prompt: "Six months after graduating, your Associate Pastor accepts a call to another city and two new Elders join the board. How does your Week 10 Continuity design prevent the church from resetting to zero?",
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
        body: "Never spend 60 minutes reading slides aloud. Ask team members to skim the week's 3 micro-chunks (under 10 minutes) beforehand, then spend the full 90 minutes debriefing lived triads, practicing napkin habits live, and role-playing real conversations."
      },
      {
        heading: "2. Protect Lay & Bivocational Margins",
        body: "Respect the clock rigorously. End sessions on time, enforce the Week 4 Pruning Gate so new practices replace clutter instead of adding burnout, and encourage kitchen-table gatherings rather than formal church-building logistics."
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
      { mins: "15–35 min", segment: "Visual Tool Walkthrough", notes: "Project or draw the week's diagram. Practice the 60-second napkin sketch together." },
      { mins: "35–70 min", segment: "Live Lab / Role-Play / Team Work", notes: "Practice Scripture, stories, stakeholder listening, or roadmap drafting actively using the workshop prompts." },
      { mins: "70–85 min", segment: "2 Scenario Checks", notes: "Discuss the week's two real-church scenarios aloud to surface blind spots before real life hits." },
      { mins: "85–90 min", segment: "Concrete Field Commitments & Prayer", notes: "Every member writes down one concrete name/date for next week and prays together." }
    ]
  },

  sustainabilityHub: {
    title: "Post-Week-10 Sustainability & Year-2 Off-Ramp",
    subtitle: "Four permanent church rhythms ensuring renewal outlasts staff turnover, fall busyness, and cohort graduation",
    pillars: [
      {
        timing: "Month 3 Post-Lab (30-Day Window)",
        title: "1. Elder Ratification & Soul Care Budget Lock-In",
        details: "Within 30 days of Week 10 Commissioning, Elders formally ratify the Stewardship Roadmap, designate protected line-item time/budget for 1:4–5 Soul Care meals, and confirm retired legacy clutter."
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
      { id: "ob-def", label: "Our Gospel Definition of a Disciple (12–15 plain words)", placeholder: "Paste your church's ratified Week 1/6 definition..." },
      { id: "ob-habits", label: "Our 4 Core Napkin Habits (+ Optional Max 1)", placeholder: "1. Bible Reading Circle  2. Lord's Prayer Wheel  3. Jesus Pattern Compass  4. Oikos & Gospel Bridge..." },
      { id: "ob-vetting", label: "Our Leader Vetting Gate & 24-Hr Crisis Escalation Contacts", placeholder: "Summarize your Week 9 Vetting Shield & Elder contacts..." },
      { id: "ob-soulcare", label: "Our 1:4–5 Soul Care Expectations & Pruned Commitments", placeholder: "How every leader is cared for monthly + what legacy programs remain retired..." }
    ]
  }
};
