/*
 * ─────────────────────────────────────────────────────────────
 *  ALL PORTFOLIO CONTENT LIVES HERE.
 *  Edit this file to update the site — no HTML changes needed.
 *  (It's a .js file rather than .json so the site also works when
 *   you double-click index.html, without running a local server.)
 * ─────────────────────────────────────────────────────────────
 */
window.PORTFOLIO = {
  profile: {
    name: "Kharmukilan Muthuraman",
    shortName: "Kharmukilan",
    initials: "KM",
    title: "Forward Deployed Engineer",
    tagline:
      "8+ years at Accenture embedded in client teams. I turn real business problems into deployed AI and cloud solutions — agentic systems on Claude and Gemini, running on Azure and Google Cloud.",
    photo: "assets/img/portrait.jpg",
    email: "khar9596@gmail.com",
    github: "https://github.com/khar-cyborg",
    linkedin: "https://www.linkedin.com/in/kharmukilan/", // leave empty to hide
    resume: "", // e.g. "assets/Kharmukilan_Muthuraman_Resume.pdf" — leave empty to hide
    location: "", // e.g. "Chennai, India" — leave empty to hide
  },

  stats: [
    { value: "8+", label: "Years embedded with enterprise clients" },
    { value: "15", label: "Active certifications" },
    { value: "3", label: "Platforms — Anthropic · Google Cloud · Microsoft" },
    { value: "4", label: "Degrees & diplomas" },
  ],

  about: {
    paragraphs: [
      "I'm an engineer by training and a business graduate by choice. A B.E. in Electronics & Communication and a Master of Computer Applications gave me the technical depth; an MBA in E-Business taught me to start from the customer's problem, not the technology.",
      "Over 8+ years at Accenture I've worked inside client teams in banking and payments — growing from mainframe tester at First Data to Python automation, application development, leading a quality engineering team, and now Forward Deployed Engineer at Bank of America.",
      "That path is what Forward Deployed Engineering is about: sitting with the people who have the problem, understanding their workflow, then building, deploying and handing over something they will actually use. I'm certified as a Claude Architect (Professional), Google Cloud Professional Cloud Architect and Azure AI Engineer — and I build practical tools that close real gaps for testers, IT and security teams.",
    ],
    pillars: [
      {
        icon: "discover",
        title: "Embed & discover",
        text: "Start with the user's workflow. Scope the real problem, the constraints and what “done” looks like for the customer.",
      },
      {
        icon: "build",
        title: "Build what's needed",
        text: "Prototype fast, then harden: agentic AI, cloud services, integrations and automation — whatever the problem calls for.",
      },
      {
        icon: "deploy",
        title: "Deploy & enable",
        text: "Ship securely, package for the end user, document it and demo it — so the solution keeps working after I leave.",
      },
    ],
  },

  /*
   * EXPERIENCE — one entry per employer; roles newest first.
   * client: the engagement you were deployed on (shown under the title).
   * highlights: optional bullets — impact first, with numbers where you can.
   */
  experience: [
    {
      company: "Accenture",
      period: "2018 – Present",
      tenure: "8+ years",
      summary: "Client-embedded engineering across banking and payments engagements.",
      roles: [
        {
          title: "Associate Manager — Forward Deployed Engineer",
          client: "Bank of America",
          period: "2026 – Present",
          current: true,
          summary:
            "Embedded with the Bank of America engagement, working directly with business and technology teams to turn their problems into deployed solutions.",
          highlights: [
            "Work side by side with client stakeholders to understand their workflows, scope the real problem and agree on what success looks like.",
            "Design, build and deploy AI and automation solutions inside the client's environment — from first prototype to production.",
            "Bridge business and engineering: translate requirements, demo working software and enable client teams to own solutions after hand-over.",
          ],
          tags: ["Forward Deployed Engineering", "AI solutions", "Stakeholder management", "Client delivery"],
        },
        {
          title: "Quality Engineering Team Lead",
          client: "Bank of America",
          period: "2024 – 2026",
          summary: "Led the quality engineering team, combining Python automation with AI engineering.",
          highlights: [
            "Led a quality engineering team — setting test strategy, standards and priorities for the engagement.",
            "Built Python test automation to replace repetitive manual testing and shorten release cycles.",
            "Engineered AI-assisted solutions alongside automation to improve testing speed and coverage.",
          ],
          tags: ["Python", "Test automation", "AI engineering", "Team leadership"],
        },
        {
          title: "Application Developer",
          client: "Consumer Products Technology (CPT)",
          period: "2022 – 2024",
          summary: "Moved from testing into development, building Python applications with a quality-first mindset.",
          highlights: [
            "Developed and maintained Python applications across the full lifecycle — requirements, implementation, testing and release support.",
            "Applied testing experience to development: writing testable code and automating checks to catch defects early.",
          ],
          tags: ["Python", "Application development", "Automation"],
        },
        {
          title: "Quality Engineer",
          client: "Consumer Products Technology (CPT)",
          period: "2020 – 2022",
          summary: "Shifted from manual execution to Python-based test automation.",
          highlights: [
            "Automated functional and regression testing with Python, reducing reliance on manual test execution.",
            "Designed test cases from requirements and tracked defects through to resolution with development teams.",
          ],
          tags: ["Python", "Test automation", "Regression testing"],
        },
        {
          title: "Quality Engineer",
          client: "First Data — Testing Center of Excellence",
          period: "2018 – 2020",
          summary: "",
          highlights: [
            "Executed mainframe test scripts in line with testing standards and methodologies to meet team objectives.",
            "Tracked and managed defects to closure, keeping the defect repository up to date.",
            "Documented test results clearly and made them accessible to stakeholders.",
            "Worked rotational shifts, including full US Eastern time-zone coverage.",
          ],
          tags: ["Mainframe testing", "Defect management", "Stakeholder reporting"],
        },
      ],
    },
  ],

  skills: [
    {
      group: "AI & Agents",
      items: [
        "Claude (Anthropic)",
        "Claude Code",
        "Agentic architecture",
        "Gemini Enterprise agents",
        "Azure AI services",
        "Prompt engineering",
        "GitHub Copilot",
      ],
    },
    {
      group: "Cloud & Architecture",
      items: [
        "Google Cloud",
        "Microsoft Azure",
        "Solution architecture",
        "Azure administration",
        "Cloud-native development",
      ],
    },
    {
      group: "Security & Governance",
      items: [
        "Azure security",
        "Endpoint auditing",
        "Compliance checks",
        "GitHub administration",
      ],
    },
    {
      group: "DevOps & Automation",
      items: [
        "GitHub Actions",
        "CI/CD",
        "PowerShell automation",
        "Playwright",
        "PyInstaller packaging",
      ],
    },
    {
      group: "Languages",
      items: ["Python", "PowerShell", "JavaScript", "HTML / CSS", "Batch"],
    },
    {
      group: "Business & Delivery",
      items: [
        "MBA — E-Business",
        "Requirements discovery",
        "Client demos",
        "Technical documentation",
      ],
    },
  ],

  projects: [
    {
      name: "FlowTrace",
      subtitle: "Test evidence recorder for QA & automation teams",
      featured: true,
      repo: "https://github.com/khar-cyborg/flowtrace-recorder",
      demo: "",
      problem:
        "QA testers spend hours turning manual test runs into evidence documents — then rebuild the same steps again as automation scripts.",
      built:
        "A Windows desktop app that records a test session once — clicks, keystrokes and screenshots — and exports both the evidence (DOCX, PDF, HTML) and the automation (PyAutoGUI scripts, Playwright codegen). Web mode drives Chromium through Playwright and captures reusable CSS selectors via an injected script.",
      outcome:
        "One recording produces both test documentation and automation artifacts. Packaged as a standalone EXE with a distribution guide and a client demo deck.",
      stack: [
        "Python",
        "Playwright",
        "CustomTkinter",
        "pynput",
        "mss",
        "python-docx",
        "ReportLab",
        "PyInstaller",
      ],
    },
    {
      name: "System Report Generator",
      subtitle: "Zero-install security & asset audit for Windows",
      featured: false,
      repo: "https://github.com/khar-cyborg/System_Report_Generator",
      demo: "",
      problem:
        "IT and security teams need a quick, trustworthy snapshot of a machine — installed software, patch level, AV, firewall, BitLocker — without deploying an agent.",
      built:
        "A PowerShell tool with a dark-theme WPF launcher that collects hardware, OS, security controls, startup programs and every installed application via CIM/WMI, then renders searchable, sortable HTML reports.",
      outcome:
        "Runs on stock Windows 10/11 with no install and no network calls — ready for compliance checks, incident response and CVE cross-referencing.",
      stack: ["PowerShell", "WPF / XAML", "CIM / WMI", "HTML", "JavaScript"],
    },
    {
      name: "Laptop Check",
      subtitle: "Windows diagnostics & power-user toolkit",
      featured: false,
      repo: "https://github.com/khar-cyborg/laptop_check",
      demo: "",
      problem:
        "Everyday diagnostics — battery health, specs, saved networks, junk cleanup — are buried behind obscure Windows commands.",
      built:
        "A curated, documented collection of batch and PowerShell utilities: battery and system health reports, a gaming-spec report, a power menu and a junk cleaner, each with a Markdown guide.",
      outcome:
        "Maintained as an open-source project (MIT) with contribution guidelines, issue/PR templates and a GitHub Actions markdown-lint workflow.",
      stack: ["Batch", "PowerShell", "HTML", "GitHub Actions"],
    },
  ],

  /*
   * CERTIFICATIONS — group must be one of: anthropic | google | microsoft
   * verify: public verification URL (leave "" if none)
   */
  certifications: [
    // Anthropic
    {
      name: "Claude Certified Architect – Professional",
      issuer: "Anthropic",
      group: "anthropic",
      issued: "Sep 2026",
      expires: "Sep 2027",
      badge: "assets/badges/claude-architect-professional.png",
      verify: "https://www.credly.com/badges/3f895034-d674-4b97-b0cb-2cfb090e8b85",
      highlight: true,
    },
    {
      name: "Claude Certified Developer – Foundations",
      issuer: "Anthropic",
      group: "anthropic",
      issued: "Sep 2026",
      expires: "Sep 2027",
      badge: "assets/badges/claude-developer-foundations.png",
      verify: "https://www.credly.com/badges/f803cbf6-f74f-4de0-a988-53878174f1fc",
    },
    {
      name: "Claude Certified Architect – Foundations",
      issuer: "Anthropic",
      group: "anthropic",
      issued: "May 2026",
      expires: "May 2027",
      badge: "assets/badges/claude-architect-foundations.png",
      verify: "https://www.credly.com/badges/e4455e08-509b-4aae-be5a-17114aaa8e08",
    },
    {
      name: "Claude Partner Badge – Claude Code",
      issuer: "Anthropic Partner Academy",
      group: "anthropic",
      issued: "",
      expires: "",
      badge: "assets/badges/claude-partner-claude-code.png",
      verify: "",
      kind: "Partner badge",
    },
    // Google Cloud
    {
      name: "Professional Cloud Architect",
      issuer: "Google Cloud",
      group: "google",
      issued: "Feb 2025",
      expires: "Feb 2027",
      badge: "assets/badges/gcp-professional-cloud-architect.png",
      verify: "",
      highlight: true,
    },
    {
      name: "Partner Specialist – Gemini Enterprise Agent Development",
      issuer: "Google Cloud",
      group: "google",
      issued: "Sep 2026",
      expires: "Mar 2027",
      badge: "assets/badges/gemini-enterprise-agent-dev.png",
      verify: "https://www.credly.com/go/XppEE98J",
    },
    {
      name: "Partner Specialist – Gemini Enterprise Deployment",
      issuer: "Google Cloud",
      group: "google",
      issued: "Sep 2026",
      expires: "Mar 2027",
      badge: "assets/badges/gemini-enterprise-deployment.png",
      verify: "https://www.credly.com/go/qo5aBq18",
    },
    // Microsoft & GitHub
    {
      name: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      group: "microsoft",
      exam: "AI-102",
      issued: "May 2026",
      expires: "May 2027",
      badge: "assets/badges/azure-ai-engineer.png",
      verify: "",
      highlight: true,
    },
    {
      name: "Azure Developer Associate",
      issuer: "Microsoft",
      group: "microsoft",
      exam: "AZ-204",
      issued: "Dec 2024",
      expires: "Dec 2026",
      badge: "assets/badges/azure-developer.png",
      verify: "",
    },
    {
      name: "Azure Security Engineer Associate",
      issuer: "Microsoft",
      group: "microsoft",
      exam: "AZ-500",
      issued: "Apr 2022",
      expires: "Apr 2027",
      badge: "assets/badges/azure-security-engineer.png",
      verify: "",
    },
    {
      name: "Azure Administrator Associate",
      issuer: "Microsoft",
      group: "microsoft",
      exam: "AZ-104",
      issued: "Dec 2021",
      expires: "Dec 2026",
      badge: "assets/badges/azure-administrator.png",
      verify: "",
    },
    {
      name: "GitHub Administration",
      issuer: "GitHub · Microsoft",
      group: "microsoft",
      exam: "GH-100",
      issued: "Nov 2025",
      expires: "Nov 2027",
      badge: "assets/badges/github-administration.png",
      verify: "",
    },
    {
      name: "GitHub Copilot",
      issuer: "GitHub · Microsoft",
      group: "microsoft",
      exam: "GH-300",
      issued: "Oct 2025",
      expires: "Oct 2027",
      badge: "assets/badges/github-copilot.png",
      verify: "",
    },
    {
      name: "GitHub Actions",
      issuer: "GitHub · Microsoft",
      group: "microsoft",
      exam: "GH-200",
      issued: "Oct 2025",
      expires: "Oct 2027",
      badge: "assets/badges/github-actions.png",
      verify: "",
    },
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft",
      group: "microsoft",
      exam: "AI-900",
      issued: "Mar 2024",
      expires: "",
      badge: "assets/badges/azure-ai-fundamentals.png",
      verify: "",
    },
    {
      name: "Azure Fundamentals",
      issuer: "Microsoft",
      group: "microsoft",
      exam: "AZ-900",
      issued: "Jul 2020",
      expires: "",
      badge: "assets/badges/azure-fundamentals.png",
      verify: "",
    },
  ],

  // Optional: one link that verifies all Microsoft credentials
  // (Microsoft Learn → Profile → Transcript → Share link)
  microsoftTranscript:
    "https://learn.microsoft.com/en-us/users/muthuramankharmukilan-9033/transcript/7664msll94z3n45",

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Annamalai University",
      period: "2021 – 2023",
      result: "First Class",
      details:
        "Advanced data structures & algorithms, RDBMS, operating systems, computer networks, web technology, big data analytics, data mining, Python & R, IoT and mobile computing; dissertation.",
    },
    {
      degree: "Post Graduate Diploma in Internet Technology",
      institution: "Annamalai University · Faculty of Engineering & Technology",
      period: "2022",
      result: "First Class with Distinction",
      details: "",
    },
    {
      degree: "Master of Business Administration — E-Business",
      institution: "Annamalai University",
      period: "2019",
      result: "First Class",
      details: "",
    },
    {
      degree: "B.E. — Electronics & Communication Engineering",
      institution: "St. Joseph's Institute of Technology, Chennai · Anna University",
      period: "2013 – 2017",
      result: "First Class",
      details:
        "Computer networks, wireless & ad hoc sensor networks, embedded & real-time systems, digital signal processing, VLSI design, object-oriented programming & data structures.",
    },
  ],
};
