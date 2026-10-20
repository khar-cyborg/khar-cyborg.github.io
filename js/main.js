(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) {
    console.error("data/portfolio.js did not load");
    return;
  }
  var P = D.profile;

  // ── helpers ──────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function $(id) {
    return document.getElementById(id);
  }
  // Placeholder text left in data/portfolio.js is flagged on the page so it isn't shipped by accident
  function isPlaceholder(s) {
    return /^(Your |Add |Year –)/.test(String(s || ""));
  }

  var ICONS = {
    github:
      '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    mail:
      '<svg class="stroke" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
    pin:
      '<svg class="stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    doc:
      '<svg class="stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/></svg>',
    copy:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
    discover:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2M8.5 11h5M11 8.5v5"/></svg>',
    build:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/></svg>',
    deploy:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3M7 8l5-5 5 5"/><path d="M4 15v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3"/></svg>',
  };

  // ── bind simple text fields ──────────────────────────────────
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = P[el.getAttribute("data-bind")];
    if (v) el.textContent = v;
  });
  var portrait = $("portrait");
  if (P.photo) {
    portrait.src = P.photo;
    portrait.alt = "Portrait of " + P.name;
  }

  // ── hero links ───────────────────────────────────────────────
  var heroLinks = [];
  if (P.github) heroLinks.push('<li><a href="' + esc(P.github) + '" target="_blank" rel="noopener">' + ICONS.github + "GitHub</a></li>");
  if (P.linkedin) heroLinks.push('<li><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">' + ICONS.linkedin + "LinkedIn</a></li>");
  if (P.email) heroLinks.push('<li><a href="mailto:' + esc(P.email) + '">' + ICONS.mail + esc(P.email) + "</a></li>");
  if (P.resume) heroLinks.push('<li><a href="' + esc(P.resume) + '" download>' + ICONS.doc + "Résumé</a></li>");
  if (P.location) heroLinks.push('<li><a>' + ICONS.pin + esc(P.location) + "</a></li>");
  $("hero-links").innerHTML = heroLinks.join("");

  // ── stats ────────────────────────────────────────────────────
  $("stats").innerHTML = (D.stats || [])
    .map(function (s) {
      return '<div class="stat"><dt>' + esc(s.label) + "</dt><dd>" + esc(s.value) + "</dd></div>";
    })
    .join("");

  // ── about ────────────────────────────────────────────────────
  $("about-body").innerHTML = (D.about.paragraphs || [])
    .map(function (p) {
      return "<p>" + esc(p) + "</p>";
    })
    .join("");
  $("pillars").innerHTML = (D.about.pillars || [])
    .map(function (p, i) {
      return (
        '<article class="pillar reveal">' +
        '<div class="pillar-icon">' + (ICONS[p.icon] || "") + "</div>" +
        '<span class="step">0' + (i + 1) + "</span>" +
        "<h3>" + esc(p.title) + "</h3>" +
        "<p>" + esc(p.text) + "</p>" +
        "</article>"
      );
    })
    .join("");

  // ── experience ───────────────────────────────────────────────
  var exp = D.experience || [];
  if (!exp.length) {
    $("experience").hidden = true;
    var navExp = document.querySelector('.nav-links a[href="#experience"]');
    if (navExp) navExp.parentElement.hidden = true;
  }
  function roleItem(r) {
    return (
      '<li class="role' + (r.current ? " current" : "") + '">' +
      '<div class="role-head"><h3>' + esc(r.title) + "</h3>" +
      '<span class="period">' + esc(r.period) + "</span></div>" +
      (r.client
        ? '<p class="client">' + esc(r.client) + (r.current ? ' <span class="now">Current</span>' : "") + "</p>"
        : "") +
      (r.summary ? '<p class="role-summary">' + esc(r.summary) + "</p>" : "") +
      (r.highlights && r.highlights.length
        ? "<ul>" + r.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>"
        : "") +
      (r.tags && r.tags.length
        ? '<div class="tags">' + r.tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>"
        : "") +
      "</li>"
    );
  }
  $("experience-list").innerHTML = exp
    .map(function (e) {
      var roles = e.roles || [];
      var draft = roles.some(function (r) {
        return isPlaceholder(r.title) || isPlaceholder(r.period) || isPlaceholder(r.summary) ||
          (r.highlights || []).some(isPlaceholder);
      });
      return (
        '<article class="exp-card reveal">' +
        '<div class="exp-meta"><div class="company">' + esc(e.company) + "</div>" +
        '<div class="period">' + esc(e.period) + "</div>" +
        (e.tenure ? '<span class="tenure">' + esc(e.tenure) + "</span>" : "") +
        (e.summary ? '<p class="exp-summary">' + esc(e.summary) + "</p>" : "") +
        (draft ? '<p class="placeholder-note">Placeholder — update in data/portfolio.js</p>' : "") +
        "</div>" +
        '<ol class="roles" aria-label="Roles at ' + esc(e.company) + '">' + roles.map(roleItem).join("") + "</ol>" +
        "</article>"
      );
    })
    .join("");

  // ── projects ─────────────────────────────────────────────────
  $("projects-grid").innerHTML = (D.projects || [])
    .map(function (p) {
      var links = "";
      if (p.repo) links += '<a href="' + esc(p.repo) + '" target="_blank" rel="noopener" aria-label="' + esc(p.name) + ' source on GitHub">' + ICONS.github + "</a>";
      if (p.demo) links += '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener" aria-label="' + esc(p.name) + ' live demo">' + ICONS.external.replace("<svg", '<svg class="stroke"') + "</a>";
      return (
        '<article class="project reveal' + (p.featured ? " featured" : "") + '">' +
        '<div class="project-top"><div>' +
        (p.featured ? '<p class="project-label">Featured project</p>' : "") +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="subtitle">' + esc(p.subtitle) + "</p></div>" +
        '<div class="project-links">' + links + "</div></div>" +
        '<dl class="case">' +
        '<div class="case-item"><dt>Problem</dt><dd>' + esc(p.problem) + "</dd></div>" +
        '<div class="case-item"><dt>What I built</dt><dd>' + esc(p.built) + "</dd></div>" +
        '<div class="case-item outcome"><dt>Outcome</dt><dd>' + esc(p.outcome) + "</dd></div>" +
        "</dl>" +
        '<ul class="stack" aria-label="Tech stack">' +
        (p.stack || []).map(function (s) { return '<li class="chip">' + esc(s) + "</li>"; }).join("") +
        "</ul></article>"
      );
    })
    .join("");
  var more = $("github-more");
  if (P.github) more.href = P.github;
  else more.parentElement.hidden = true;

  // ── certifications ───────────────────────────────────────────
  var certs = D.certifications || [];
  var GROUPS = [
    { key: "all", label: "All" },
    { key: "anthropic", label: "Anthropic" },
    { key: "google", label: "Google Cloud" },
    { key: "microsoft", label: "Microsoft & GitHub" },
  ];
  function count(key) {
    return key === "all" ? certs.length : certs.filter(function (c) { return c.group === key; }).length;
  }
  var filtersEl = $("cert-filters");
  filtersEl.innerHTML = GROUPS.filter(function (g) { return count(g.key) > 0; })
    .map(function (g, i) {
      return (
        '<button class="filter" type="button" role="tab" data-group="' + g.key + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' +
        esc(g.label) + ' <span class="count">' + count(g.key) + "</span></button>"
      );
    })
    .join("");

  function certCard(c) {
    // Microsoft credentials without their own link are verified through the shared Learn transcript
    var verify = c.verify || (c.group === "microsoft" ? D.microsoftTranscript : "");
    var dates = c.kind ? esc(c.kind) : "";
    if (c.issued) {
      dates = "<span>Issued " + esc(c.issued) + "</span> · <span>" + (c.expires ? "Expires " + esc(c.expires) : "No expiry") + "</span>";
    }
    return (
      '<article class="cert' + (c.highlight ? " highlight" : "") + '">' +
      '<img src="' + esc(c.badge) + '" alt="' + esc(c.name) + ' badge" width="72" height="72" loading="lazy" />' +
      (c.exam ? '<span class="exam">' + esc(c.exam) + "</span>" : "") +
      '<div class="cert-body"><h3>' + esc(c.name) + "</h3>" +
      '<p class="issuer">' + esc(c.issuer) + "</p>" +
      (dates ? '<p class="dates">' + dates + "</p>" : "") +
      (verify
        ? '<a class="verify" href="' + esc(verify) + '" target="_blank" rel="noopener">Verify' + ICONS.external + '<span class="sr-only"> ' + esc(c.name) + "</span></a>"
        : "") +
      "</div></article>"
    );
  }
  function renderCerts(group) {
    var list = group === "all" ? certs : certs.filter(function (c) { return c.group === group; });
    $("certs-grid").innerHTML = list.map(certCard).join("");
  }
  function selectFilter(btn) {
    filtersEl.querySelectorAll(".filter").forEach(function (b) {
      var on = b === btn;
      b.setAttribute("aria-selected", on);
      b.tabIndex = on ? 0 : -1;
    });
    renderCerts(btn.getAttribute("data-group"));
  }
  filtersEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter");
    if (btn) selectFilter(btn);
  });
  filtersEl.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var tabs = Array.prototype.slice.call(filtersEl.querySelectorAll(".filter"));
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    next.focus();
    selectFilter(next);
  });
  renderCerts("all");

  var note = "Verify links open the issuer's public record on Credly";
  if (D.microsoftTranscript) {
    note += ', or my <a href="' + esc(D.microsoftTranscript) + '" target="_blank" rel="noopener">Microsoft Learn transcript</a> for Microsoft &amp; GitHub credentials';
  }
  note += ".";
  $("cert-note").innerHTML = note;

  // ── skills ───────────────────────────────────────────────────
  $("skills-grid").innerHTML = (D.skills || [])
    .map(function (g) {
      return (
        '<article class="skill-group reveal"><h3>' + esc(g.group) + "</h3><ul>" +
        g.items.map(function (s) { return '<li class="chip">' + esc(s) + "</li>"; }).join("") +
        "</ul></article>"
      );
    })
    .join("");

  // ── education ────────────────────────────────────────────────
  $("education-list").innerHTML = (D.education || [])
    .map(function (e) {
      return (
        '<li class="edu reveal"><div class="edu-top"><h3>' + esc(e.degree) + "</h3>" +
        '<span class="period">' + esc(e.period) + "</span></div>" +
        '<p class="inst">' + esc(e.institution) + "</p>" +
        (e.result ? '<span class="result">' + esc(e.result) + "</span>" : "") +
        (e.details ? '<p class="details">' + esc(e.details) + "</p>" : "") +
        "</li>"
      );
    })
    .join("");

  // ── contact ──────────────────────────────────────────────────
  var actions = [];
  if (P.email) {
    actions.push('<a class="btn btn-primary" href="mailto:' + esc(P.email) + '">' + ICONS.mail.replace(' class="stroke"', "") + "Email me</a>");
    actions.push('<button class="btn btn-ghost" type="button" id="copy-email">' + ICONS.copy + "Copy email</button>");
  }
  if (P.linkedin) actions.push('<a class="btn btn-ghost" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
  if (P.github) actions.push('<a class="btn btn-ghost" href="' + esc(P.github) + '" target="_blank" rel="noopener">GitHub</a>');
  if (P.resume) actions.push('<a class="btn btn-ghost" href="' + esc(P.resume) + '" download>Download résumé</a>');
  $("contact-actions").innerHTML = actions.join("");

  var toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.classList.remove("show"); }, 1800);
  }
  var copyBtn = $("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var done = function () { toast("Email copied: " + P.email); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(P.email).then(done, function () { window.prompt("Copy email:", P.email); });
      } else {
        window.prompt("Copy email:", P.email);
      }
    });
  }

  $("year").textContent = new Date().getFullYear();

  // ── theme toggle ─────────────────────────────────────────────
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return mq && mq.matches ? "dark" : "light";
  }
  function syncToggleLabel() {
    $("theme-toggle").setAttribute("aria-label", currentTheme() === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
  $("theme-toggle").addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncToggleLabel();
  });
  syncToggleLabel();

  // ── mobile menu ──────────────────────────────────────────────
  var menuBtn = $("menu-toggle");
  var navLinks = $("nav-links");
  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  menuBtn.addEventListener("click", function () {
    setMenu(!navLinks.classList.contains("open"));
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  // ── header border + scroll spy + reveal ──────────────────────
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    var linkFor = {};
    navLinks.querySelectorAll('a[href^="#"]').forEach(function (a) {
      linkFor[a.getAttribute("href").slice(1)] = a;
    });
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          Object.keys(linkFor).forEach(function (id) {
            linkFor[id].classList.toggle("active", id === en.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

    var reveal = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            reveal.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) { reveal.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
