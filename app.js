(function () {
  "use strict";

  /* ==========================================================================
     Java MCQ Portal & PYQ Suite — Core Engine
     ========================================================================== */

  // Local Storage Keys
  const HKEY_PREFIX = "javaMcqHistory_";
  const BM_KEY_PREFIX = "javaMcqBookmarks_";
  const STATS_KEY_PREFIX = "javaMcqQuestionStats_";
  const STREAK_KEY = "javaMcqStreak_v1";
  const THEME_KEY = "javaMcqTheme_v1";
  const SOUND_KEY = "javaMcqSound_v1";
  const FEEDBACK_KEY = "javaMcqFeedback_v1";
  const ACTIVE_BANK_KEY = "javaMcqActiveBank_v2";

  // Assignment Topics Directory
  const TOPICS = {
    1: { name: "Java Basics & JVM Architecture", emoji: "☕" },
    2: { name: "Data Types, Control Flow & Scanner", emoji: "🔄" },
    3: { name: "OOP, Inheritance & 'super'", emoji: "🧬" },
    4: { name: "Packages, Interfaces & Access Specifiers", emoji: "📦" },
    5: { name: "Exception Handling & Keywords", emoji: "⚠️" },
    6: { name: "Multithreading & Byte Streams", emoji: "⚡" },
    7: { name: "File I/O, Applets & Streams", emoji: "📁" },
    8: { name: "AWT Components & Layout Managers", emoji: "🖼️" },
    9: { name: "Swing GUI & Event Handling", emoji: "🖱️" },
    10: { name: "Swing, JDBC Basics & Sockets", emoji: "🔌" },
    11: { name: "JDBC Database Connectivity & SQL", emoji: "🗄️" },
    12: { name: "Strings, Generics & Networking", emoji: "🌐" }
  };

  const L = ["A", "B", "C", "D"];

  /* ---------- Multi-Bank Management (Core + 3 PYQs) ---------- */
  const BANKS = {
    "core": {
      id: "core",
      title: "Core Question Bank (NPTEL Java)",
      shortTitle: "Core Bank",
      subtitle: "120 Curated MCQs across 12 core assignments",
      badge: "Core 120 Qs",
      year: "Core Curriculum",
      questions: window.QUESTIONS || [],
      explanations: window.EXPLANATIONS || {}
    }
  };

  if (window.PYQ_BANKS) {
    Object.assign(BANKS, window.PYQ_BANKS);
  }

  let activeBankId = loadJSON(ACTIVE_BANK_KEY, "core");
  if (!BANKS[activeBankId]) activeBankId = "core";

  function getBank() {
    return BANKS[activeBankId] || BANKS["core"];
  }

  function getQuestions() {
    return getBank().questions;
  }

  function getExplanations() {
    return getBank().explanations || {};
  }

  function getASGs() {
    const qs = getQuestions();
    return [...new Set(qs.map(q => q.a))].sort((a, b) => a - b);
  }

  // DOM Elements
  const $app = document.getElementById("app");
  const $qcount = document.getElementById("qcount");
  const $bmBadge = document.getElementById("bm-badge");
  const $bankBadge = document.getElementById("active-bank-badge");
  const $themeBtn = document.getElementById("theme-btn");
  const $soundBtn = document.getElementById("sound-btn");
  const $kbdBtn = document.getElementById("kbd-btn");
  const $pyqTriggerBtn = document.getElementById("pyq-trigger-btn");
  const $drawer = document.getElementById("pyq-drawer");
  const $drawerBackdrop = document.getElementById("drawer-backdrop");
  const $drawerCloseBtn = document.getElementById("drawer-close-btn");
  const $pyqList = document.getElementById("pyq-bank-list");
  const $feedbackNavBtn = document.getElementById("nav-feedback");
  const $canvas = document.getElementById("confetti-canvas");

  /* ---------- Storage Helpers ---------- */
  function loadJSON(k, def) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; }
  }
  function saveJSON(k, val) {
    try { localStorage.setItem(k, JSON.stringify(val)); } catch (e) {}
  }

  function getHKey() { return HKEY_PREFIX + activeBankId; }
  function getBMKey() { return BM_KEY_PREFIX + activeBankId; }
  function getStatsKey() { return STATS_KEY_PREFIX + activeBankId; }

  function getBookmarks() { return new Set(loadJSON(getBMKey(), [])); }
  function saveBookmarks(set) {
    saveJSON(getBMKey(), [...set]);
    updateBookmarkBadge();
  }
  function isBookmarked(id) { return getBookmarks().has(id); }
  function toggleBookmark(id) {
    const bm = getBookmarks();
    bm.has(id) ? bm.delete(id) : bm.add(id);
    saveBookmarks(bm);
    return bm.has(id);
  }

  function updateBookmarkBadge() {
    const count = getBookmarks().size;
    if ($bmBadge) {
      if (count > 0) {
        $bmBadge.style.display = "inline-block";
        $bmBadge.textContent = count;
      } else {
        $bmBadge.style.display = "none";
      }
    }
  }

  function getQuestionStats() { return loadJSON(getStatsKey(), {}); }
  function recordQuestionAttempt(qid, isCorrect) {
    const stats = getQuestionStats();
    if (!stats[qid]) stats[qid] = { correct: 0, wrong: 0, lastResult: isCorrect };
    if (isCorrect) stats[qid].correct++;
    else stats[qid].wrong++;
    stats[qid].lastResult = isCorrect;
    saveJSON(getStatsKey(), stats);
  }

  function getStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const data = loadJSON(STREAK_KEY, { count: 0, lastDate: "" });
    if (!data.lastDate) return 1;
    const diffDays = Math.round((new Date(today) - new Date(data.lastDate)) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return data.count || 1;
    if (diffDays === 1) return data.count;
    return 1;
  }

  function touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const data = loadJSON(STREAK_KEY, { count: 0, lastDate: "" });
    if (!data.lastDate) {
      saveJSON(STREAK_KEY, { count: 1, lastDate: today });
      return 1;
    }
    const diffDays = Math.round((new Date(today) - new Date(data.lastDate)) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      const newCount = (data.count || 0) + 1;
      saveJSON(STREAK_KEY, { count: newCount, lastDate: today });
      return newCount;
    } else if (diffDays > 1) {
      saveJSON(STREAK_KEY, { count: 1, lastDate: today });
      return 1;
    }
    return data.count || 1;
  }

  /* ---------- Sound Synthesis Engine ---------- */
  let soundEnabled = loadJSON(SOUND_KEY, false);
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && typeof window.AudioContext !== "undefined") {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  function playSound(type) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, t);
        osc.frequency.exponentialRampToValueAtTime(800, t + 0.05);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        osc.start(t);
        osc.stop(t + 0.05);
      } else if (type === "correct") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, t);
        osc.frequency.setValueAtTime(659.25, t + 0.08);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
        osc.start(t);
        osc.stop(t + 0.28);
      } else if (type === "wrong") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, t);
        osc.frequency.exponentialRampToValueAtTime(140, t + 0.15);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
        osc.start(t);
        osc.stop(t + 0.16);
      } else if (type === "fanfare") {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const o = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          o.connect(g);
          g.connect(audioCtx.destination);
          o.type = "sine";
          o.frequency.setValueAtTime(freq, t + i * 0.09);
          g.gain.setValueAtTime(0.12, t + i * 0.09);
          g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.09 + 0.4);
          o.start(t + i * 0.09);
          o.stop(t + i * 0.09 + 0.4);
        });
      }
    } catch (e) {}
  }

  function updateSoundUI() {
    if ($soundBtn) {
      $soundBtn.textContent = soundEnabled ? "🔊" : "🔇";
      $soundBtn.title = soundEnabled ? "Sound: Enabled (Click to Mute)" : "Sound: Muted (Click to Enable)";
    }
  }
  if ($soundBtn) {
    $soundBtn.onclick = () => {
      soundEnabled = !soundEnabled;
      saveJSON(SOUND_KEY, soundEnabled);
      updateSoundUI();
      if (soundEnabled) playSound("click");
    };
    updateSoundUI();
  }

  /* ---------- Theme Management ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if ($themeBtn) {
      $themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
      $themeBtn.title = `Theme: ${theme.toUpperCase()} (Click to toggle)`;
    }
  }
  const savedTheme = loadJSON(THEME_KEY, "dark");
  applyTheme(savedTheme);
  if ($themeBtn) {
    $themeBtn.onclick = () => {
      const cur = document.documentElement.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      saveJSON(THEME_KEY, next);
      applyTheme(next);
      playSound("click");
    };
  }

  /* ---------- Confetti Particle Engine ---------- */
  function fireConfetti() {
    if (!$canvas) return;
    const ctx = $canvas.getContext("2d");
    const width = ($canvas.width = window.innerWidth);
    const height = ($canvas.height = window.innerHeight);
    const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#38bdf8", "#a855f7"];
    const pieces = Array.from({ length: 80 }, () => ({
      x: width * 0.5 + (Math.random() - 0.5) * 200,
      y: height * 0.4 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      opacity: 1
    }));

    let startTime = performance.now();
    function animate(now) {
      const elapsed = now - startTime;
      if (elapsed > 2500) {
        ctx.clearRect(0, 0, width, height);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.vx *= 0.99;
        p.rotation += p.rotSpeed;
        p.opacity = Math.max(0, 1 - elapsed / 2500);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  /* ---------- Helpers & Syntax Highlighting ---------- */
  const esc = s => String(s || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtTime = s => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m > 0 ? `${m}m ${String(sec).padStart(2, "0")}s` : `${sec}s`;
  };
  const shuffle = a => {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pinned = t => /\b(none|all|both)\b.*\b(of the above|above)\b|^(none|all) of (these|the above)/i.test(t);

  function highlightJava(code) {
    const regex = /(\/\/.*|\/\*[\s\S]*?\*\/)|("([^"\\]|\\.)*"|'([^'\\]|\\.)*')|\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while|true|false|null|include|printf|scanf|struct|union)\b|\b([A-Z][a-zA-Z0-9_]*)\b|\b(\d+(?:\.\d+)?(?:[fFlLdD])?)\b/g;
    let lastIdx = 0, m, out = "";
    while ((m = regex.exec(code)) !== null) {
      out += esc(code.slice(lastIdx, m.index));
      if (m[1]) out += `<span class="hl-com">${esc(m[1])}</span>`;
      else if (m[2]) out += `<span class="hl-str">${esc(m[2])}</span>`;
      else if (m[5]) out += `<span class="hl-kw">${esc(m[5])}</span>`;
      else if (m[6]) out += `<span class="hl-type">${esc(m[6])}</span>`;
      else if (m[7]) out += `<span class="hl-num">${esc(m[7])}</span>`;
      lastIdx = regex.lastIndex;
    }
    out += esc(code.slice(lastIdx));
    return out;
  }

  function renderQuestionBody(text, qId) {
    const lines = text.split("\n");
    if (lines.length >= 3) {
      let outro = "";
      if (/^(what|which|choose|select|identify|find|pick)\b.*[?.:]\s*$/i.test(lines[lines.length - 1])) {
        outro = lines.pop();
      }
      const intro = lines.shift();
      const codeBlock = lines.join("\n");
      return `
        <div class="question-text">${esc(intro)}</div>
        <div class="code-container">
          <div class="code-header">
            <div class="code-dots"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span></div>
            <span>Code Snippet</span>
            <button class="copy-btn" onclick="navigator.clipboard.writeText(${JSON.stringify(codeBlock)}); this.textContent='✓ Copied'; setTimeout(()=>this.textContent='📋 Copy', 1500);">📋 Copy</button>
          </div>
          <pre class="code-block">${highlightJava(codeBlock)}</pre>
        </div>
        ${outro ? `<div class="question-text" style="margin-top:12px">${esc(outro)}</div>` : ""}
      `;
    }
    return `<div class="question-text">${esc(text)}</div>`;
  }

  function buildItem(q, jumble) {
    let opts = q.o.map((t, i) => ({ t, orig: i }));
    if (jumble) {
      const fixed = opts.filter(o => pinned(o.t));
      const free = shuffle(opts.filter(o => !pinned(o.t)));
      opts = free.concat(fixed);
    }
    return {
      q,
      opts,
      correct: opts.findIndex(o => o.orig === q.c),
      sel: null,
      flagged: false,
      struck: new Set()
    };
  }

  /* ---------- Switch Question Bank ---------- */
  function switchBank(bankId) {
    if (!BANKS[bankId]) return;
    activeBankId = bankId;
    saveJSON(ACTIVE_BANK_KEY, activeBankId);
    const bank = getBank();
    const count = getQuestions().length;

    if ($bankBadge) $bankBadge.textContent = bank.badge || bank.year;
    if ($qcount) $qcount.textContent = count;

    closeDrawer();
    updateBookmarkBadge();
    playSound("click");

    home();
  }

  function renderDrawerList() {
    if (!$pyqList) return;
    const order = ["pyq_2024_2025", "pyq_2025_2026", "old_mooc", "core"];
    $pyqList.innerHTML = order.map(id => {
      const b = BANKS[id];
      if (!b) return "";
      const isActive = id === activeBankId;
      const count = b.questions ? b.questions.length : 0;
      return `
        <button class="pyq-card ${isActive ? "active" : ""}" data-bank="${id}">
          <div class="pyq-card-top">
            <span class="pyq-year-tag">${b.year || "PYQ"}</span>
            <span class="brand-badge">${count} Qs</span>
          </div>
          <div class="pyq-card-title">${b.title}</div>
          <div class="pyq-card-desc">${b.subtitle || ""}</div>
          ${isActive ? `<div class="pyq-active-indicator">✓ Currently Active Bank</div>` : ""}
        </button>
      `;
    }).join("");

    $pyqList.querySelectorAll(".pyq-card").forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.bank;
        confirmExit(() => switchBank(id));
      };
    });
  }

  function openDrawer() {
    renderDrawerList();
    if ($drawer) $drawer.classList.add("open");
    if ($drawerBackdrop) $drawerBackdrop.classList.add("open");
  }
  function closeDrawer() {
    if ($drawer) $drawer.classList.remove("open");
    if ($drawerBackdrop) $drawerBackdrop.classList.remove("open");
  }

  if ($pyqTriggerBtn) $pyqTriggerBtn.onclick = openDrawer;
  if ($drawerCloseBtn) $drawerCloseBtn.onclick = closeDrawer;
  if ($drawerBackdrop) $drawerBackdrop.onclick = closeDrawer;

  /* ==========================================================================
     Feedback Modal & System
     ========================================================================== */
  function showFeedbackModal(defaultQId = null) {
    const pastFeedback = loadJSON(FEEDBACK_KEY, []);
    let selectedRating = 5;
    let selectedCategory = "Question Issue / Typo";

    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-content">
        <div class="row between" style="margin-bottom: 12px;">
          <h3>💬 Share Feedback or Report an Issue</h3>
          <button class="btn sm" id="fb-close">✕</button>
        </div>
        <p class="muted" style="font-size:13px; margin-bottom:14px;">
          Your feedback directly helps make this practice portal and PYQ sets error-free and seamless for all students!
        </p>

        <!-- Rating Stars -->
        <label style="font-weight:600; font-size:13px; display:block;">Overall Experience Rating:</label>
        <div class="star-rating" id="star-box">
          ${[1, 2, 3, 4, 5].map(star => `<button class="star-btn ${star <= 5 ? "active" : ""}" data-star="${star}">★</button>`).join("")}
        </div>

        <!-- Category Selector -->
        <label style="font-weight:600; font-size:13px; display:block; margin-bottom:6px;">Category:</label>
        <div class="feedback-chips" id="cat-box">
          ${[
            "Question Issue / Typo",
            "Answer Discrepancy",
            "Feature Request",
            "UI & UX Design",
            "General Praise"
          ].map((cat, i) => `<button class="feedback-chip ${i === 0 ? "active" : ""}" data-cat="${cat}">${cat}</button>`).join("")}
        </div>

        <!-- Optional Question Reference -->
        <div style="margin-bottom:12px;">
          <label style="font-weight:600; font-size:13px; display:block; margin-bottom:4px;">Question ID (Optional):</label>
          <input type="text" id="fb-qid" placeholder="e.g. Q #14, Assignment 2" value="${defaultQId ? "Question #" + defaultQId : ""}" style="width:100%;">
        </div>

        <!-- Message -->
        <div style="margin-bottom:14px;">
          <label style="font-weight:600; font-size:13px; display:block; margin-bottom:4px;">Your Comments &amp; Suggestions:</label>
          <textarea id="fb-text" rows="3" placeholder="Tell us what you noticed or what could be improved..." style="width:100%; resize:vertical;"></textarea>
        </div>

        <button class="btn primary lg" style="width:100%;" id="fb-submit">Submit Feedback ✔</button>

        <!-- Past Feedback Accordion -->
        ${pastFeedback.length ? `
          <div style="margin-top:20px; border-top:1px solid var(--border-subtle); padding-top:14px;">
            <div class="row between" style="margin-bottom:8px;">
              <span class="muted" style="font-size:12px; font-weight:600;">Your Recent Submissions (${pastFeedback.length})</span>
              <button class="btn sm" id="fb-clear-all" style="font-size:11px; padding:2px 6px;">Clear</button>
            </div>
            <div style="max-height:120px; overflow-y:auto; display:flex; flex-direction:column; gap:6px;">
              ${pastFeedback.slice(0, 3).map(f => `
                <div style="background:var(--bg-surface-elevated); padding:8px 10px; border-radius:8px; font-size:12px; border:1px solid var(--border-subtle);">
                  <div class="row between"><b>${"★".repeat(f.rating)} · ${esc(f.category)}</b> <span class="muted">${esc(f.date)}</span></div>
                  <div style="margin-top:3px; color:var(--text-muted);">${esc(f.message || "No comment")}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    `;

    document.body.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector("#fb-close").onclick = close;
    modal.onclick = e => { if (e.target === modal) close(); };

    // Star interaction
    const starBtns = modal.querySelectorAll(".star-btn");
    starBtns.forEach(btn => {
      btn.onclick = () => {
        selectedRating = +btn.dataset.star;
        starBtns.forEach(b => {
          b.classList.toggle("active", +b.dataset.star <= selectedRating);
        });
        playSound("click");
      };
    });

    // Category interaction
    const catBtns = modal.querySelectorAll(".feedback-chip");
    catBtns.forEach(btn => {
      btn.onclick = () => {
        selectedCategory = btn.dataset.cat;
        catBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        playSound("click");
      };
    });

    // Clear feedback history
    const clrBtn = modal.querySelector("#fb-clear-all");
    if (clrBtn) {
      clrBtn.onclick = () => {
        saveJSON(FEEDBACK_KEY, []);
        close();
        showFeedbackModal();
      };
    }

    // Submit feedback
    modal.querySelector("#fb-submit").onclick = () => {
      const msg = modal.querySelector("#fb-text").value.trim();
      const qRef = modal.querySelector("#fb-qid").value.trim();
      const list = loadJSON(FEEDBACK_KEY, []);
      list.unshift({
        rating: selectedRating,
        category: selectedCategory,
        qRef,
        message: msg,
        bank: activeBankId,
        date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
      });
      saveJSON(FEEDBACK_KEY, list);
      playSound("correct");
      fireConfetti();
      close();
      alert("🎉 Thank you! Your feedback has been saved and noted. It helps make this portal even better!");
    };
  }

  /* ---------- Bottom Page Feedback Section ---------- */
  function initBottomFeedback() {
    const $section = document.getElementById("bottom-feedback-section");
    if (!$section) return;

    let rating = 5;
    let category = "Question Issue / Typo";

    const starBtns = $section.querySelectorAll(".star-btn");
    starBtns.forEach(btn => {
      btn.onclick = () => {
        rating = +btn.dataset.star;
        starBtns.forEach(b => {
          b.classList.toggle("active", +b.dataset.star <= rating);
        });
        playSound("click");
      };
    });

    const catBtns = $section.querySelectorAll(".feedback-chip");
    catBtns.forEach(btn => {
      btn.onclick = () => {
        category = btn.dataset.cat;
        catBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        playSound("click");
      };
    });

    const $text = document.getElementById("bottom-fb-text");
    const $submit = document.getElementById("bottom-fb-submit");
    const $status = document.getElementById("bottom-fb-status");

    if ($submit) {
      $submit.onclick = () => {
        const msg = $text ? $text.value.trim() : "";
        if (!msg) {
          alert("Please enter a short comment or suggestion before submitting.");
          if ($text) $text.focus();
          return;
        }

        const list = loadJSON(FEEDBACK_KEY, []);
        list.unshift({
          rating,
          category,
          message: msg,
          bank: activeBankId,
          date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
        });
        saveJSON(FEEDBACK_KEY, list);

        if ($text) $text.value = "";
        if ($status) {
          $status.style.display = "block";
          $status.style.color = "var(--success)";
          $status.textContent = "✅ Thank you! Your feedback has been recorded successfully.";
          setTimeout(() => {
            $status.style.display = "none";
          }, 4500);
        }
        fireConfetti();
      };
    }
  }

  if ($feedbackNavBtn) {
    $feedbackNavBtn.onclick = () => {
      const el = document.getElementById("bottom-feedback-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        const text = document.getElementById("bottom-fb-text");
        if (text) setTimeout(() => text.focus(), 400);
      } else {
        showFeedbackModal();
      }
    };
  }

  /* ---------- Global State ---------- */
  let S = null;
  let timerInterval = null;

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
      if (!S || S.done) return;
      const now = Date.now();
      const elapsedSec = Math.floor((now - S.t0) / 1000);
      const $clock = document.getElementById("clock");
      if (!$clock) return;

      if (S.timeLimitSec) {
        const remaining = Math.max(0, S.timeLimitSec - elapsedSec);
        $clock.textContent = "⏱ " + fmtTime(remaining);
        if (remaining <= 30) {
          $clock.classList.add("warning");
        }
        if (remaining === 0) {
          stopTimer();
          alert("Time is up! Submitting your test automatically.");
          finish();
        }
      } else {
        $clock.textContent = "⏱ " + fmtTime(elapsedSec);
      }
    }, 1000);
  }

  /* ---------- Navigation Bar Listeners ---------- */
  document.getElementById("brand").onclick = e => {
    e.preventDefault();
    confirmExit(() => home());
  };
  document.getElementById("nav-home").onclick = () => confirmExit(() => home());
  document.getElementById("nav-browse").onclick = () => confirmExit(() => browse());
  document.getElementById("nav-flashcards").onclick = () => confirmExit(() => flashcards());
  document.getElementById("nav-analytics").onclick = () => confirmExit(() => analytics());
  document.getElementById("nav-bookmarks").onclick = () => confirmExit(() => browse({ a: "all", s: "", filter: "bookmarked" }));

  function confirmExit(cb) {
    if (S && !S.done && S.items.some(x => x.sel !== null)) {
      if (!confirm("Your test is in progress! Are you sure you want to exit? Your progress will be lost.")) return;
    }
    cb();
  }

  /* ==========================================================================
     Screen 1: Home Dashboard
     ========================================================================== */
  function home() {
    stopTimer();
    S = null;
    touchStreak();
    updateBookmarkBadge();
    const bank = getBank();
    const Q = getQuestions();
    const ASG = getASGs();
    const streak = getStreak();
    const hist = loadJSON(getHKey(), []);
    const stats = getQuestionStats();
    const bmCount = getBookmarks().size;

    if ($bankBadge) $bankBadge.textContent = bank.badge || bank.year;
    if ($qcount) $qcount.textContent = Q.length;

    const masteredCount = Object.keys(stats).filter(id => stats[id].lastResult === true).length;
    const avgScore = hist.length ? Math.round(hist.reduce((acc, h) => acc + h.pct, 0) / hist.length) : 0;

    $app.innerHTML = `
      <!-- Active Question Bank Banner -->
      <div class="card" style="margin-bottom: 20px; background: linear-gradient(135deg, var(--bg-surface), var(--bg-surface-elevated)); border: 1px solid var(--primary-border); display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;">
        <div>
          <div class="row" style="margin-bottom:4px;">
            <span class="quiz-badge">${bank.year || "Question Bank"}</span>
            <span class="brand-badge" style="background:var(--success-light); color:var(--success); border-color:var(--success-border);">${Q.length} Questions</span>
          </div>
          <h2 style="margin:0; font-size:20px;">${bank.title}</h2>
          <p class="muted" style="margin:2px 0 0; font-size:13.5px;">${bank.subtitle || ""}</p>
        </div>
        <button class="btn primary sm" id="btn-change-bank">
          <span>📑 Switch PYQ Paper</span>
        </button>
      </div>

      <div class="stats-banner">
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">🔥</div>
          <div>
            <div class="stat-chip-val">${streak} <span style="font-size:12px; font-weight:500;">Days</span></div>
            <div class="stat-chip-label">Study Streak</div>
          </div>
        </div>
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background: var(--primary-light); color: var(--primary);">🎯</div>
          <div>
            <div class="stat-chip-val">${masteredCount}<span style="font-size:12px; font-weight:500; color:var(--text-dim)">/${Q.length}</span></div>
            <div class="stat-chip-label">Questions Mastered</div>
          </div>
        </div>
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background: var(--success-light); color: var(--success);">🏆</div>
          <div>
            <div class="stat-chip-val">${avgScore}%</div>
            <div class="stat-chip-label">Average Score</div>
          </div>
        </div>
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background: rgba(168, 85, 247, 0.15); color: #a855f7;">⭐</div>
          <div>
            <div class="stat-chip-val">${bmCount}</div>
            <div class="stat-chip-label">Saved Tricky Qs</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <h1>Exam Practice &amp; Mastery Suite</h1>
        <p class="lead">Prepare for exams with interactive timed tests, anti-memorization jumbled options, instant practice feedback, and flashcards:</p>
      </div>

      <div class="modes-grid">
        <button class="mode-card" data-mode="asg">
          <div class="mode-icon-box" style="background: var(--primary-light); color: var(--primary);">📘</div>
          <h3>Assignment Sprint</h3>
          <p>Pick one or more specific topics from this bank to master.</p>
          <div class="mode-pill"><span>Choose Topics</span> <span>→</span></div>
        </button>

        <button class="mode-card" data-mode="full">
          <div class="mode-icon-box" style="background: var(--success-light); color: var(--success);">📝</div>
          <h3>Full Mock Exam</h3>
          <p>Simulate the comprehensive ${Q.length}-question exam in standard option order.</p>
          <div class="mode-pill" style="color: var(--success)"><span>${Q.length} Questions</span> <span>→</span></div>
        </button>

        <button class="mode-card" data-mode="jumble">
          <div class="mode-icon-box" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">🔀</div>
          <h3>Jumbled Options Exam</h3>
          <p>Shuffled options test genuine conceptual knowledge without position-guessing.</p>
          <div class="mode-pill" style="color: #f59e0b"><span>Anti-Memorization</span> <span>→</span></div>
        </button>

        <button class="mode-card" data-mode="weak">
          <div class="mode-icon-box" style="background: var(--danger-light); color: var(--danger);">🎯</div>
          <h3>Weak Area Drill</h3>
          <p>Target only questions you previously answered incorrectly until you score 100%.</p>
          <div class="mode-pill" style="color: var(--danger)"><span>Fix Mistakes</span> <span>→</span></div>
        </button>

        <button class="mode-card" data-mode="flashcards">
          <div class="mode-icon-box" style="background: rgba(168, 85, 247, 0.15); color: #a855f7;">🗂</div>
          <h3>Interactive Flashcards</h3>
          <p>Active recall study deck with 3D flippable cards and instant concept notes.</p>
          <div class="mode-pill" style="color: #a855f7"><span>Flip &amp; Learn</span> <span>→</span></div>
        </button>

        <button class="mode-card" data-mode="browse">
          <div class="mode-icon-box" style="background: rgba(6, 182, 212, 0.15); color: #06b6d4;">📚</div>
          <h3>Study Hub (All Q&amp;A)</h3>
          <p>Browse the full paper bank with instant keyword search and detailed explanations.</p>
          <div class="mode-pill" style="color: #06b6d4"><span>Search &amp; Explore</span> <span>→</span></div>
        </button>
      </div>

      <!-- Quick Topic Practice Grid -->
      <div class="card" style="margin-bottom: 24px;">
        <div class="row between" style="margin-bottom: 12px;">
          <h2>Topic Quick Practice</h2>
          <span class="muted" style="font-size:13px">${ASG.length} Topics</span>
        </div>
        <div class="asg-grid">
          ${ASG.map(n => {
            const topic = TOPICS[n] || { name: `Topic ${n}`, emoji: "📘" };
            const count = Q.filter(q => q.a === n).length;
            return `
              <button class="asg-btn quick-asg" data-n="${n}">
                <div class="asg-num"><span>${topic.emoji} Topic ${n}</span> <span class="brand-badge">${count} Qs</span></div>
                <span class="asg-title">${topic.name}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>

      <!-- Recent Attempts for this Bank -->
      ${hist.length ? `
        <div class="card">
          <div class="row between" style="margin-bottom: 14px;">
            <h2>Recent Attempts (${bank.shortTitle || bank.title})</h2>
            <button class="btn sm" id="clr-hist">Clear History</button>
          </div>
          <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <thead>
                <tr style="border-bottom:1px solid var(--border-subtle); text-align:left; color:var(--text-dim); font-size:12px; text-transform:uppercase;">
                  <th style="padding:8px;">Test Title</th>
                  <th style="padding:8px;">Score</th>
                  <th style="padding:8px;">Accuracy</th>
                  <th style="padding:8px;">Time</th>
                  <th style="padding:8px;">Date</th>
                </tr>
              </thead>
              <tbody>
                ${hist.slice(0, 5).map(h => `
                  <tr style="border-bottom:1px solid var(--border-subtle);">
                    <td style="padding:10px 8px; font-weight:600;">${esc(h.title)}</td>
                    <td style="padding:10px 8px;"><b>${h.score}</b>/${h.total}</td>
                    <td style="padding:10px 8px;"><span class="brand-badge" style="background:${h.pct >= 80 ? "var(--success-light)" : "var(--primary-light)"}; color:${h.pct >= 80 ? "var(--success)" : "var(--primary)"}">${h.pct}%</span></td>
                    <td style="padding:10px 8px; color:var(--text-muted);">${fmtTime(h.duration || 0)}</td>
                    <td style="padding:10px 8px; color:var(--text-dim);">${esc(h.date)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      ` : ""}
    `;

    document.getElementById("btn-change-bank").onclick = openDrawer;

    // Mode clicks
    $app.querySelectorAll(".mode-card").forEach(btn => {
      btn.onclick = () => {
        playSound("click");
        const m = btn.dataset.mode;
        if (m === "browse") browse();
        else if (m === "flashcards") flashcards();
        else if (m === "weak") startWeakDrill();
        else setup(m);
      };
    });

    // Quick Asg clicks
    $app.querySelectorAll(".quick-asg").forEach(btn => {
      btn.onclick = () => {
        playSound("click");
        const n = +btn.dataset.n;
        const topic = TOPICS[n] || { name: `Topic ${n}` };
        const pool = getQuestions().filter(q => q.a === n);
        startQuiz(pool, false, true, `Topic ${n}: ${topic.name}`, "asg");
      };
    });

    const clrBtn = document.getElementById("clr-hist");
    if (clrBtn) {
      clrBtn.onclick = () => {
        if (confirm(`Clear test history for ${bank.title}?`)) {
          saveJSON(getHKey(), []);
          home();
        }
      };
    }
  }

  /* ---------- Weak Area Drill Helper ---------- */
  function startWeakDrill() {
    const stats = getQuestionStats();
    const weakIds = Object.keys(stats).filter(id => stats[id].wrong > 0 && stats[id].lastResult !== true);
    const Q = getQuestions();
    const pool = Q.filter(q => weakIds.includes(String(q.id)));
    if (!pool.length) {
      alert("Great job! You have no recorded mistakes in this question bank. Take a test first!");
      return;
    }
    startQuiz(pool, true, true, `Weak Area Drill (${pool.length} Qs)`, "weak");
  }

  /* ==========================================================================
     Screen 2: Test Setup & Configuration
     ========================================================================== */
  function setup(mode, preset) {
    stopTimer();
    S = null;
    const canPick = mode === "asg";
    const ASG = getASGs();
    const Q = getQuestions();
    const bank = getBank();

    const cfg = preset || {
      sel: canPick ? new Set([ASG[0] || 1]) : new Set(ASG),
      shufQ: true,
      jumble: mode === "jumble",
      practice: false,
      timerOpt: "none",
      negMarking: false
    };

    const titles = {
      asg: "Assignment Sprint Setup",
      full: `Full Mock Exam (${bank.shortTitle || bank.badge})`,
      jumble: `Jumbled Options Exam (${bank.shortTitle || bank.badge})`
    };

    $app.innerHTML = `
      <div class="row between" style="margin-bottom: 16px;">
        <button class="btn" id="btn-back">← Back to Dashboard</button>
        <span class="quiz-badge">${titles[mode] || "Test Configuration"}</span>
      </div>

      <div class="card">
        <h2>${titles[mode]}</h2>
        <p class="muted">Active Question Bank: <b>${bank.title}</b> (${Q.length} Questions)</p>
        <div class="spacer-sm"></div>

        ${canPick ? `
          <div style="margin: 14px 0;">
            <div class="row between">
              <b>Select Topics to Include:</b>
              <div class="row">
                <button class="btn sm" id="btn-sel-all">Select All</button>
                <button class="btn sm" id="btn-sel-none">Clear</button>
              </div>
            </div>
            <div class="asg-grid" style="margin-top:10px;">
              ${ASG.map(n => {
                const topic = TOPICS[n] || { name: `Topic ${n}`, emoji: "📘" };
                const count = Q.filter(q => q.a === n).length;
                return `
                  <button class="asg-btn ${cfg.sel.has(n) ? "sel" : ""}" data-n="${n}">
                    <div class="asg-num">
                      <span>${topic.emoji} Topic ${n}</span>
                      <span class="brand-badge">${count} Qs</span>
                    </div>
                    <span class="asg-title">${topic.name}</span>
                  </button>
                `;
              }).join("")}
            </div>
          </div>
        ` : `
          <div style="background:var(--bg-surface-elevated); padding:14px; border-radius:12px; margin-bottom:14px; border:1px solid var(--border-subtle)">
            <b>Full Coverage:</b> All ${Q.length} questions from <b>${bank.title}</b> will be included.
          </div>
        `}

        <div class="spacer-sm"></div>
        <h3 style="margin-bottom: 10px;">Exam Experience Options</h3>

        <!-- Practice Mode Toggle -->
        <label class="toggle-item">
          <div class="toggle-label">
            <span>Instant Practice Mode</span>
            <small>Reveal correct answers &amp; explanations immediately after each selection.</small>
          </div>
          <div class="switch">
            <input type="checkbox" id="chk-practice" ${cfg.practice ? "checked" : ""}>
            <span class="slider"></span>
          </div>
        </label>

        <!-- Shuffle Questions Toggle -->
        <label class="toggle-item">
          <div class="toggle-label">
            <span>Shuffle Question Order</span>
            <small>Randomize question order to prevent order-bias.</small>
          </div>
          <div class="switch">
            <input type="checkbox" id="chk-shuf" ${cfg.shufQ ? "checked" : ""}>
            <span class="slider"></span>
          </div>
        </label>

        <!-- Jumble Options Toggle -->
        <label class="toggle-item ${mode !== "asg" ? "disabled" : ""}">
          <div class="toggle-label">
            <span>Jumble Options (A/B/C/D)</span>
            <small>Shuffle options randomly. "None/All of the above" always stay securely at the bottom.</small>
          </div>
          <div class="switch">
            <input type="checkbox" id="chk-jumble" ${cfg.jumble ? "checked" : ""} ${mode !== "asg" ? "disabled" : ""}>
            <span class="slider"></span>
          </div>
        </label>

        <!-- Negative Marking -->
        <label class="toggle-item">
          <div class="toggle-label">
            <span>Negative Marking (-0.25)</span>
            <small>Simulate strict competitive exams where incorrect answers deduct 0.25 marks.</small>
          </div>
          <div class="switch">
            <input type="checkbox" id="chk-neg" ${cfg.negMarking ? "checked" : ""}>
            <span class="slider"></span>
          </div>
        </label>

        <!-- Timer Options -->
        <div style="margin: 16px 0;">
          <label style="font-weight:600; display:block; margin-bottom:6px;">Exam Timer / Time Limit:</label>
          <select id="sel-timer" style="width:100%; max-width:320px;">
            <option value="none" ${cfg.timerOpt === "none" ? "selected" : ""}>Untimed (Relaxed Stopwatch)</option>
            <option value="30s" ${cfg.timerOpt === "30s" ? "selected" : ""}>Rapid Sprint (30 seconds per question)</option>
            <option value="60s" ${cfg.timerOpt === "60s" ? "selected" : ""}>Standard Pace (60 seconds per question)</option>
            <option value="30m" ${cfg.timerOpt === "30m" ? "selected" : ""}>Fixed 30-Minute Exam</option>
            <option value="60m" ${cfg.timerOpt === "60m" ? "selected" : ""}>Fixed 60-Minute Exam</option>
          </select>
        </div>

        <div class="spacer"></div>
        <div class="row between">
          <div id="q-total-count" style="font-weight:600; color:var(--text-muted);">Calculating questions...</div>
          <button class="btn primary lg" id="btn-start">Start Test Now →</button>
        </div>
      </div>
    `;

    document.getElementById("btn-back").onclick = home;

    const readConfig = () => {
      cfg.practice = document.getElementById("chk-practice").checked;
      cfg.shufQ = document.getElementById("chk-shuf").checked;
      cfg.jumble = mode === "jumble" ? true : mode === "full" ? false : document.getElementById("chk-jumble").checked;
      cfg.negMarking = document.getElementById("chk-neg").checked;
      cfg.timerOpt = document.getElementById("sel-timer").value;
    };

    const $startBtn = document.getElementById("btn-start");
    const $totalDisplay = document.getElementById("q-total-count");

    const updateCount = () => {
      const count = canPick ? Q.filter(q => cfg.sel.has(q.a)).length : Q.length;
      $totalDisplay.textContent = `Total Questions: ${count}`;
      $startBtn.disabled = canPick && cfg.sel.size === 0;
    };
    updateCount();

    if (canPick) {
      $app.querySelectorAll(".asg-btn").forEach(btn => {
        btn.onclick = () => {
          playSound("click");
          const n = +btn.dataset.n;
          cfg.sel.has(n) ? cfg.sel.delete(n) : cfg.sel.add(n);
          btn.classList.toggle("sel");
          updateCount();
        };
      });

      document.getElementById("btn-sel-all").onclick = () => {
        readConfig();
        ASG.forEach(n => cfg.sel.add(n));
        setup(mode, cfg);
      };
      document.getElementById("btn-sel-none").onclick = () => {
        readConfig();
        cfg.sel.clear();
        setup(mode, cfg);
      };
    }

    $startBtn.onclick = () => {
      readConfig();
      let pool = canPick ? Q.filter(q => cfg.sel.has(q.a)) : Q.slice();
      if (cfg.shufQ) pool = shuffle(pool);

      let timeLimitSec = 0;
      if (cfg.timerOpt === "30s") timeLimitSec = pool.length * 30;
      else if (cfg.timerOpt === "60s") timeLimitSec = pool.length * 60;
      else if (cfg.timerOpt === "30m") timeLimitSec = 30 * 60;
      else if (cfg.timerOpt === "60m") timeLimitSec = 60 * 60;

      const title = canPick
        ? (cfg.sel.size === 1 ? `Topic ${[...cfg.sel][0]}: ${TOPICS[[...cfg.sel][0]]?.name || "Assignment"}` : `${cfg.sel.size} Topics Sprint`)
        : titles[mode];

      startQuiz(pool, cfg.jumble, cfg.practice, title, mode, timeLimitSec, cfg.negMarking);
    };
  }

  /* ---------- Launch Quiz Engine ---------- */
  function startQuiz(pool, jumble, practice, title, mode, timeLimitSec = 0, negMarking = false) {
    if (!pool.length) {
      alert("No questions selected!");
      return;
    }
    S = {
      items: pool.map(q => buildItem(q, jumble)),
      i: 0,
      practice,
      title,
      mode: mode || "quiz",
      jumble,
      timeLimitSec,
      negMarking,
      t0: Date.now(),
      done: false
    };
    startTimer();
    quiz();
  }

  /* ==========================================================================
     Screen 3: Active Exam & Practice Arena
     ========================================================================== */
  function quiz() {
    if (!S) return;
    const it = S.items[S.i];
    const n = S.items.length;
    const answeredCount = S.items.filter(x => x.sel !== null).length;
    const isLocked = S.practice && it.sel !== null;
    const topic = TOPICS[it.q.a] || { name: `Topic ${it.q.a}`, emoji: "📘" };
    const bookmarked = isBookmarked(it.q.id);
    const EXP = getExplanations();

    $app.innerHTML = `
      <div class="quiz-header">
        <div class="row">
          <span class="quiz-badge">${topic.emoji} Topic ${it.q.a}: ${topic.name}</span>
          <span class="q-number-pill">Question ${S.i + 1} of ${n}</span>
        </div>
        <div class="row">
          <button class="btn sm" id="btn-report-q" title="Report issue with this question" style="color:var(--text-muted); padding:4px 8px;">
            ⚠️ Report
          </button>
          <button class="btn sm" id="btn-star" style="background:${bookmarked ? "rgba(245, 158, 11, 0.15)" : "transparent"}; color:${bookmarked ? "#f59e0b" : "var(--text-muted)"}; border-color:${bookmarked ? "#f59e0b" : "var(--border-subtle)"}">
            ${bookmarked ? "★ Saved" : "☆ Save"}
          </button>
          <button class="btn sm" id="btn-flag" style="background:${it.flagged ? "rgba(245, 158, 11, 0.15)" : "transparent"}; color:${it.flagged ? "#f59e0b" : "var(--text-muted)"}; border-color:${it.flagged ? "#f59e0b" : "var(--border-subtle)"}">
            ${it.flagged ? "🚩 Flagged" : "⚐ Flag"}
          </button>
          <div class="timer-box" id="clock">⏱ 0s</div>
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${((S.i + 1) / n) * 100}%"></div>
      </div>

      <div class="card" style="box-shadow: var(--shadow-md);">
        <div class="question-header">
          <span class="muted" style="font-size:13px">ID #${it.q.id} · Single Choice</span>
          <span class="muted" style="font-size:13px">Answered: <b>${answeredCount}</b>/${n}</span>
        </div>

        ${renderQuestionBody(it.q.q, it.q.id)}

        <div class="options-list">
          ${it.opts.map((o, k) => {
            let cls = "";
            if (it.sel === k) cls += " sel";
            if (isLocked) {
              if (k === it.correct) cls += " correct";
              else if (k === it.sel) cls += " wrong";
            }
            if (it.struck.has(k)) cls += " struck";

            return `
              <button class="opt-card ${cls}" data-k="${k}" ${isLocked ? "disabled" : ""}>
                <span class="opt-key">${L[k]}</span>
                <span class="opt-text">${esc(o.t)}</span>
                ${!isLocked ? `
                  <div class="opt-actions">
                    <span class="strike-btn" data-strike="${k}" title="Rule out option">✕</span>
                  </div>
                ` : ""}
              </button>
            `;
          }).join("")}
        </div>

        ${isLocked ? `
          <div class="explanation-card ${it.sel === it.correct ? "correct" : "wrong"}">
            <div class="explanation-title">
              ${it.sel === it.correct ? "✅ Correct! Well done." : "❌ Incorrect. Correct answer is Option " + L[it.correct] + "."}
            </div>
            <div>${esc(EXP[it.q.id] || it.opts[it.correct].t)}</div>
          </div>
        ` : ""}
      </div>

      <div class="spacer-sm"></div>

      <!-- Action Nav Buttons -->
      <div class="row between">
        <button class="btn" id="btn-prev" ${S.i === 0 ? "disabled" : ""}>← Previous</button>
        <div class="row">
          ${!S.practice && it.sel !== null ? `<button class="btn sm" id="btn-clear-ans">Clear Answer</button>` : ""}
        </div>
        ${S.i < n - 1
          ? `<button class="btn primary" id="btn-next">Next →</button>`
          : `<button class="btn success" id="btn-submit">Submit Test ✔</button>`}
      </div>

      <!-- Question Palette -->
      <div class="palette-card">
        <div class="row between" style="margin-bottom:10px;">
          <b>Question Navigator</b>
          <div class="row">
            <button class="btn sm danger" id="btn-finish-direct">Submit Now</button>
          </div>
        </div>

        <div class="palette-legend">
          <div class="legend-item"><span class="legend-dot" style="background:var(--primary);"></span> Answered</div>
          <div class="legend-item"><span class="legend-dot" style="border:1px solid var(--warning); background:rgba(245,158,11,0.2)"></span> Flagged (🚩)</div>
          <div class="legend-item"><span class="legend-dot" style="background:var(--bg-surface-elevated); border:1px solid var(--border-subtle)"></span> Unanswered</div>
          <div class="legend-item"><span class="legend-dot" style="outline:2px solid var(--primary);"></span> Current</div>
        </div>

        <div class="palette-grid">
          ${S.items.map((x, j) => {
            let cls = "";
            if (j === S.i) cls += " current";
            if (x.sel !== null) cls += " answered";
            if (x.flagged) cls += " flagged";
            return `<button class="pal-btn ${cls}" data-j="${j}">${j + 1}</button>`;
          }).join("")}
        </div>
      </div>
    `;

    // Bind Option clicks
    $app.querySelectorAll(".opt-card").forEach(btn => {
      btn.onclick = e => {
        if (e.target.closest(".strike-btn")) return;
        const k = +btn.dataset.k;
        it.sel = k;
        if (S.practice) {
          const isCorrect = it.sel === it.correct;
          recordQuestionAttempt(it.q.id, isCorrect);
          playSound(isCorrect ? "correct" : "wrong");
        } else {
          playSound("click");
        }
        quiz();
      };
    });

    // Option strike-out
    $app.querySelectorAll(".strike-btn").forEach(btn => {
      btn.onclick = e => {
        e.stopPropagation();
        const k = +btn.dataset.strike;
        it.struck.has(k) ? it.struck.delete(k) : it.struck.add(k);
        playSound("click");
        quiz();
      };
    });

    // Star/Bookmark
    const starBtn = document.getElementById("btn-star");
    if (starBtn) {
      starBtn.onclick = () => {
        toggleBookmark(it.q.id);
        playSound("click");
        quiz();
      };
    }

    // Flag button
    const flagBtn = document.getElementById("btn-flag");
    if (flagBtn) {
      flagBtn.onclick = () => {
        it.flagged = !it.flagged;
        playSound("click");
        quiz();
      };
    }

    // Report Question Feedback button
    const reportBtn = document.getElementById("btn-report-q");
    if (reportBtn) {
      reportBtn.onclick = () => {
        showFeedbackModal(it.q.id);
      };
    }

    // Clear answer button
    const clrAnsBtn = document.getElementById("btn-clear-ans");
    if (clrAnsBtn) {
      clrAnsBtn.onclick = () => {
        it.sel = null;
        playSound("click");
        quiz();
      };
    }

    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.onclick = fn; };
    on("btn-prev", () => { S.i--; quiz(); window.scrollTo(0, 0); });
    on("btn-next", () => { S.i++; quiz(); window.scrollTo(0, 0); });
    on("btn-submit", trySubmit);
    on("btn-finish-direct", trySubmit);

    // Palette navigation
    $app.querySelectorAll(".pal-btn").forEach(btn => {
      btn.onclick = () => {
        S.i = +btn.dataset.j;
        playSound("click");
        quiz();
        window.scrollTo(0, 0);
      };
    });
  }

  function trySubmit() {
    if (!S) return;
    const unanswered = S.items.filter(x => x.sel === null).length;
    const flagged = S.items.filter(x => x.flagged).length;

    if (unanswered > 0 || flagged > 0) {
      const msg = `You have:\n• ${unanswered} unanswered question(s)\n• ${flagged} question(s) flagged for review\n\nAre you sure you want to finalize your submission?`;
      if (!confirm(msg)) return;
    }
    finish();
  }

  /* ==========================================================================
     Screen 4: Test Results & Comprehensive Analytics
     ========================================================================== */
  function finish() {
    if (!S) return;
    S.done = true;
    stopTimer();
    S.secs = Math.max(1, Math.floor((Date.now() - S.t0) / 1000));
    touchStreak();

    const items = S.items;
    const total = items.length;
    const right = items.filter(x => x.sel === x.correct).length;
    const skipped = items.filter(x => x.sel === null).length;
    const wrong = total - right - skipped;

    items.forEach(x => {
      if (x.sel !== null) {
        recordQuestionAttempt(x.q.id, x.sel === x.correct);
      }
    });

    const pct = Math.round((right / total) * 100);

    const hist = loadJSON(getHKey(), []);
    hist.unshift({
      title: S.title + (S.jumble ? " 🔀" : ""),
      score: right,
      total,
      pct,
      duration: S.secs,
      date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
    });
    saveJSON(getHKey(), hist.slice(0, 20));

    if (pct >= 80) {
      playSound("fanfare");
      fireConfetti();
    } else if (pct >= 50) {
      playSound("correct");
    } else {
      playSound("wrong");
    }

    result("all");
  }

  function result(filter) {
    if (!S) return;
    const items = S.items;
    const total = items.length;
    const right = items.filter(x => x.sel === x.correct).length;
    const skipped = items.filter(x => x.sel === null).length;
    const wrong = total - right - skipped;
    const pct = Math.round((right / total) * 100);
    const avgSecPerQ = Math.round(S.secs / total);
    const EXP = getExplanations();

    let rankBadge = "";
    if (pct >= 90) rankBadge = `<span class="grade-pill grade-s">🏆 S-Rank Mastery</span>`;
    else if (pct >= 75) rankBadge = `<span class="grade-pill grade-a">🌟 A-Rank Proficient</span>`;
    else if (pct >= 50) rankBadge = `<span class="grade-pill grade-b">👍 B-Rank Passing</span>`;
    else rankBadge = `<span class="grade-pill grade-c">📖 Needs Review</span>`;

    const testedAsgs = [...new Set(items.map(x => x.q.a))].sort((a, b) => a - b);
    const asgStats = testedAsgs.map(n => {
      const g = items.filter(x => x.q.a === n);
      const r = g.filter(x => x.sel === x.correct).length;
      return { n, t: g.length, r, pct: Math.round((r / g.length) * 100) };
    });

    const shown = items
      .map((x, i) => ({ x, i }))
      .filter(({ x }) => {
        if (filter === "wrong") return x.sel !== null && x.sel !== x.correct;
        if (filter === "skipped") return x.sel === null;
        if (filter === "flagged") return x.flagged;
        if (filter === "correct") return x.sel === x.correct;
        return true;
      });

    $app.innerHTML = `
      <div class="result-card">
        ${rankBadge}
        <div class="score-badge-circle">
          <span class="score-value">${right}</span>
          <span class="score-total">out of ${total}</span>
        </div>
        <h2>${pct}% Accuracy</h2>
        <p class="muted">${esc(S.title)} · Finished in ${fmtTime(S.secs)} (avg ${avgSecPerQ}s/Q)</p>

        <div class="stats-grid-compact">
          <div class="stat-box"><b style="color:var(--success);">${right}</b><span class="muted">Correct</span></div>
          <div class="stat-box"><b style="color:var(--danger);">${wrong}</b><span class="muted">Incorrect</span></div>
          <div class="stat-box"><b>${skipped}</b><span class="muted">Skipped</span></div>
          <div class="stat-box"><b>${avgSecPerQ}s</b><span class="muted">Speed/Q</span></div>
        </div>

        <div class="spacer-sm"></div>
        <div class="row" style="justify-content:center; gap:10px;">
          ${wrong + skipped > 0 ? `<button class="btn primary" id="btn-retry-mistakes">🎯 Retry Wrong/Skipped (${wrong + skipped})</button>` : ""}
          <button class="btn" id="btn-retake-all">🔄 Retake Full Test</button>
          <button class="btn" id="btn-home-back">🏠 Dashboard</button>
        </div>
      </div>

      <!-- Assignment breakdown bars -->
      ${asgStats.length > 1 ? `
        <div class="card topic-breakdown">
          <h2>Topic Breakdown</h2>
          ${asgStats.map(g => {
            const topic = TOPICS[g.n] || { name: `Topic ${g.n}` };
            return `
              <div class="topic-row">
                <span class="topic-name" title="${topic.name}">Topic ${g.n}: ${topic.name}</span>
                <div class="topic-bar-bg">
                  <div class="topic-bar-fill" style="width:${g.pct}%; background:${g.pct >= 75 ? "var(--success)" : g.pct >= 50 ? "var(--primary)" : "var(--danger)"}"></div>
                </div>
                <span class="topic-score">${g.r}/${g.t} (${g.pct}%)</span>
              </div>
            `;
          }).join("")}
        </div>
      ` : ""}

      <div class="spacer"></div>

      <!-- Review Section -->
      <div class="row between" style="margin-bottom:12px;">
        <h2>Detailed Answers &amp; Explanations</h2>
        <div class="tab-row" style="margin:0;">
          ${[
            ["all", "All (" + total + ")"],
            ["wrong", "Wrong (" + wrong + ")"],
            ["flagged", "Flagged (" + items.filter(x => x.flagged).length + ")"],
            ["skipped", "Skipped (" + skipped + ")"],
            ["correct", "Correct (" + right + ")"]
          ].map(([k, label]) => `
            <button class="tab-btn ${filter === k ? "active" : ""}" data-f="${k}">${label}</button>
          `).join("")}
        </div>
      </div>

      <div class="review-list">
        ${shown.length ? shown.map(({ x, i }) => {
          const status = x.sel === null ? "⚪ Skipped" : x.sel === x.correct ? "✅ Correct" : "❌ Wrong";
          const isBm = isBookmarked(x.q.id);
          return `
            <div class="card" style="margin-bottom: 14px;">
              <div class="row between" style="margin-bottom: 8px;">
                <div class="row">
                  <span class="quiz-badge">Topic ${x.q.a}</span>
                  <span class="q-number-pill">Question ${i + 1}</span>
                  <span>${status}</span>
                </div>
                <div class="row">
                  <button class="btn sm" onclick="window._reportQ(${x.q.id})" title="Report Issue">⚠️ Report</button>
                  <button class="btn sm" onclick="window._toggleBm(${x.q.id}, this)">
                    ${isBm ? "★ Saved" : "☆ Save"}
                  </button>
                </div>
              </div>

              ${renderQuestionBody(x.q.q, x.q.id)}

              <div class="options-list">
                ${x.opts.map((o, k) => {
                  let cls = "";
                  if (k === x.correct) cls = "correct";
                  else if (k === x.sel) cls = "wrong";
                  return `
                    <div class="opt-card ${cls}" style="cursor:default;">
                      <span class="opt-key">${L[k]}</span>
                      <span class="opt-text">${esc(o.t)}</span>
                      ${k === x.correct ? `<span style="color:var(--success); font-weight:700; font-size:12px;">CORRECT</span>` : ""}
                      ${k === x.sel && k !== x.correct ? `<span style="color:var(--danger); font-weight:700; font-size:12px;">YOUR PICK</span>` : ""}
                    </div>
                  `;
                }).join("")}
              </div>

              <div class="explanation-card ${x.sel === x.correct ? "correct" : "wrong"}">
                <div class="explanation-title">💡 Explanation &amp; Concept:</div>
                <div>${esc(EXP[x.q.id] || x.opts[x.correct].t)}</div>
              </div>
            </div>
          `;
        }).join("") : `<p class="muted">No questions in this filter tab.</p>`}
      </div>
    `;

    window._toggleBm = (id, btn) => {
      const nowBm = toggleBookmark(id);
      btn.textContent = nowBm ? "★ Saved" : "☆ Save";
      playSound("click");
    };

    window._reportQ = id => {
      showFeedbackModal(id);
    };

    $app.querySelectorAll(".tab-btn").forEach(btn => {
      btn.onclick = () => {
        playSound("click");
        result(btn.dataset.f);
      };
    });

    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.onclick = fn; };
    on("btn-home-back", home);
    on("btn-retake-all", () => startQuiz(items.map(x => x.q), S.jumble, S.practice, S.title, S.mode, S.timeLimitSec, S.negMarking));
    on("btn-retry-mistakes", () => {
      const mistakes = items.filter(x => x.sel !== x.correct).map(x => x.q);
      startQuiz(mistakes, S.jumble, true, `Retry Mistakes: ${S.title}`, "weak", 0, false);
    });

    window.scrollTo(0, 0);
  }

  /* ==========================================================================
     Screen 5: Study Hub & Complete Q&A Bank
     ========================================================================== */
  function browse(state) {
    stopTimer();
    S = null;
    const st = state || { a: "all", s: "", filter: "all", hideAns: false };
    const Q = getQuestions();
    const ASG = getASGs();
    const bank = getBank();
    const EXP = getExplanations();

    $app.innerHTML = `
      <div class="row between" style="margin-bottom: 16px;">
        <button class="btn" id="btn-back">← Back</button>
        <div class="row">
          <h2>Study Hub &amp; Q&amp;A Bank</h2>
          <span class="quiz-badge">${bank.shortTitle || bank.badge}</span>
        </div>
        <button class="btn sm" id="btn-toggle-hide">${st.hideAns ? "👁 Reveal All Answers" : "🙈 Self-Test (Hide Answers)"}</button>
      </div>

      <div class="card" style="margin-bottom: 16px;">
        <div class="row" style="gap:10px;">
          <input type="search" id="inp-search" placeholder="Search questions, code, or topics in ${bank.shortTitle || "this bank"}..." value="${esc(st.s)}" style="flex:1;">
          <select id="sel-asg" style="min-width:180px;">
            <option value="all" ${st.a === "all" ? "selected" : ""}>All Topics</option>
            ${ASG.map(n => `<option value="${n}" ${String(st.a) === String(n) ? "selected" : ""}>Topic ${n}: ${TOPICS[n]?.name || "Assignment " + n}</option>`).join("")}
          </select>
        </div>

        <div class="row" style="margin-top: 12px; gap:8px;">
          <button class="tab-btn ${st.filter === "all" ? "active" : ""}" data-filt="all">All Questions (${Q.length})</button>
          <button class="tab-btn ${st.filter === "bookmarked" ? "active" : ""}" data-filt="bookmarked">⭐ Saved Questions</button>
          <button class="tab-btn ${st.filter === "weak" ? "active" : ""}" data-filt="weak">🎯 Previous Mistakes</button>
        </div>
      </div>

      <div class="row between" style="margin-bottom: 12px;">
        <span class="muted" id="res-count">Filtering...</span>
      </div>

      <div id="qa-list"></div>
    `;

    document.getElementById("btn-back").onclick = home;
    document.getElementById("btn-toggle-hide").onclick = () => {
      st.hideAns = !st.hideAns;
      browse(st);
    };

    const $inp = document.getElementById("inp-search");
    const $sel = document.getElementById("sel-asg");
    const $list = document.getElementById("qa-list");
    const $cnt = document.getElementById("res-count");

    const render = () => {
      st.s = $inp.value;
      st.a = $sel.value;
      const term = st.s.trim().toLowerCase();
      const bookmarks = getBookmarks();
      const stats = getQuestionStats();

      const filtered = Q.filter(q => {
        if (st.a !== "all" && q.a !== +st.a) return false;
        if (st.filter === "bookmarked" && !bookmarks.has(q.id)) return false;
        if (st.filter === "weak" && !(stats[q.id] && stats[q.id].wrong > 0 && stats[q.id].lastResult !== true)) return false;
        if (!term) return true;
        return q.q.toLowerCase().includes(term) || q.o.some(o => o.toLowerCase().includes(term)) || (EXP[q.id] && EXP[q.id].toLowerCase().includes(term));
      });

      $cnt.textContent = `Showing ${filtered.length} of ${Q.length} questions`;

      if (!filtered.length) {
        $list.innerHTML = `<div class="card" style="text-align:center; padding:32px;"><p class="muted">No questions found matching your filter criteria.</p></div>`;
        return;
      }

      $list.innerHTML = filtered.map((q, idx) => {
        const isBm = bookmarks.has(q.id);
        const topic = TOPICS[q.a] || { name: `Topic ${q.a}` };
        return `
          <div class="card" style="margin-bottom: 16px;">
            <div class="row between" style="margin-bottom: 10px;">
              <div class="row">
                <span class="quiz-badge">Topic ${q.a}</span>
                <span class="q-number-pill">ID #${q.id}</span>
                <span class="muted" style="font-size:12px;">${topic.name}</span>
              </div>
              <div class="row">
                <button class="btn sm" onclick="window._reportQ(${q.id})" title="Report Issue">⚠️ Report</button>
                <button class="btn sm" onclick="window._toggleBm(${q.id}, this)">
                  ${isBm ? "★ Saved" : "☆ Save"}
                </button>
              </div>
            </div>

            ${renderQuestionBody(q.q, q.id)}

            <div class="options-list">
              ${q.o.map((o, k) => `
                <div class="opt-card ${!st.hideAns && k === q.c ? "correct" : ""}" style="cursor:default;">
                  <span class="opt-key">${L[k]}</span>
                  <span class="opt-text">${esc(o)}</span>
                  ${!st.hideAns && k === q.c ? `<span style="color:var(--success); font-weight:700; font-size:12px;">CORRECT</span>` : ""}
                </div>
              `).join("")}
            </div>

            ${!st.hideAns ? `
              <div class="explanation-card correct">
                <div class="explanation-title">💡 Explanation &amp; Key Concept:</div>
                <div>${esc(EXP[q.id] || q.o[q.c])}</div>
              </div>
            ` : `
              <button class="btn sm" style="margin-top:10px;" onclick="this.nextElementSibling.style.display='block'; this.style.display='none';">Show Answer &amp; Explanation</button>
              <div class="explanation-card correct" style="display:none; margin-top:10px;">
                <div class="explanation-title">💡 Correct Answer: Option ${L[q.c]}</div>
                <div>${esc(EXP[q.id] || q.o[q.c])}</div>
              </div>
            `}
          </div>
        `;
      }).join("");
    };

    $inp.oninput = render;
    $sel.onchange = render;
    $app.querySelectorAll(".tab-btn").forEach(btn => {
      btn.onclick = () => {
        st.filter = btn.dataset.filt;
        browse(st);
      };
    });

    render();
  }

  /* ==========================================================================
     Screen 6: Interactive Flashcard Active Recall Mode
     ========================================================================== */
  function flashcards(state) {
    stopTimer();
    S = null;
    const Q = getQuestions();
    const EXP = getExplanations();
    const st = state || { i: 0, pool: shuffle(Q.slice()), flipped: false };
    const cur = st.pool[st.i];
    const n = st.pool.length;
    const topic = TOPICS[cur.a] || { name: `Topic ${cur.a}`, emoji: "📘" };

    $app.innerHTML = `
      <div class="row between" style="margin-bottom: 16px;">
        <button class="btn" id="btn-back">← Back</button>
        <h2>Interactive Flashcards</h2>
        <span class="quiz-badge">Card ${st.i + 1} of ${n}</span>
      </div>

      <div class="flashcard-wrapper">
        <div class="flashcard ${st.flipped ? "flipped" : ""}" id="fcard">
          <!-- Card Front -->
          <div class="flashcard-face flashcard-front">
            <div>
              <div class="row between" style="margin-bottom:12px;">
                <span class="quiz-badge">${topic.emoji} Topic ${cur.a}: ${topic.name}</span>
                <span class="q-number-pill">Question #${cur.id}</span>
              </div>
              ${renderQuestionBody(cur.q, cur.id)}
            </div>
            <div class="flip-hint">👆 Click card or press <b>SPACE</b> to flip and see the answer</div>
          </div>

          <!-- Card Back -->
          <div class="flashcard-face flashcard-back">
            <div>
              <div class="row between" style="margin-bottom:12px;">
                <span class="grade-pill grade-a">Answer &amp; Explanation</span>
                <span class="q-number-pill">Topic ${cur.a}</span>
              </div>
              <div style="font-size:20px; font-weight:700; color:var(--success); margin:12px 0;">
                Option ${L[cur.c]}: ${esc(cur.o[cur.c])}
              </div>
              <div class="explanation-card correct" style="margin-top:14px;">
                <div class="explanation-title">💡 Why it's correct:</div>
                <div>${esc(EXP[cur.id] || cur.o[cur.c])}</div>
              </div>
            </div>
            <div class="flip-hint">👆 Click to flip back</div>
          </div>
        </div>
      </div>

      <!-- Navigation & Rating Controls -->
      <div class="row" style="justify-content:center; gap:12px; margin-top:20px;">
        <button class="btn" id="btn-fc-prev" ${st.i === 0 ? "disabled" : ""}>← Previous Card</button>
        <button class="btn primary" id="btn-fc-flip">Flip Card 🔄</button>
        <button class="btn success" id="btn-fc-next">Next Card →</button>
      </div>
    `;

    document.getElementById("btn-back").onclick = home;

    const $card = document.getElementById("fcard");
    const toggleFlip = () => {
      st.flipped = !st.flipped;
      $card.classList.toggle("flipped", st.flipped);
      playSound("click");
    };
    $card.onclick = toggleFlip;
    document.getElementById("btn-fc-flip").onclick = toggleFlip;

    document.getElementById("btn-fc-prev").onclick = () => {
      if (st.i > 0) {
        st.i--;
        st.flipped = false;
        flashcards(st);
      }
    };
    document.getElementById("btn-fc-next").onclick = () => {
      if (st.i < n - 1) {
        st.i++;
        st.flipped = false;
        flashcards(st);
      } else {
        alert("🎉 Congratulations! You have completed all flashcards in this deck!");
        home();
      }
    };
  }

  /* ==========================================================================
     Screen 7: Performance Analytics & Topic Mastery Matrix
     ========================================================================== */
  function analytics() {
    stopTimer();
    S = null;
    const hist = loadJSON(getHKey(), []);
    const stats = getQuestionStats();
    const streak = getStreak();
    const Q = getQuestions();
    const ASG = getASGs();
    const bank = getBank();

    const mastered = Object.keys(stats).filter(id => stats[id].lastResult === true).length;
    const weakCount = Object.keys(stats).filter(id => stats[id].wrong > 0 && stats[id].lastResult !== true).length;
    const overallPct = hist.length ? Math.round(hist.reduce((acc, h) => acc + h.pct, 0) / hist.length) : 0;

    $app.innerHTML = `
      <div class="row between" style="margin-bottom: 16px;">
        <button class="btn" id="btn-back">← Back to Dashboard</button>
        <div class="row">
          <h2>Performance Analytics</h2>
          <span class="quiz-badge">${bank.shortTitle || bank.badge}</span>
        </div>
      </div>

      <div class="stats-banner">
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background:rgba(245, 158, 11, 0.15); color:#f59e0b;">🔥</div>
          <div>
            <div class="stat-chip-val">${streak} Days</div>
            <div class="stat-chip-label">Current Streak</div>
          </div>
        </div>
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background:var(--success-light); color:var(--success);">✅</div>
          <div>
            <div class="stat-chip-val">${mastered} <span style="font-size:12px; color:var(--text-dim)">/${Q.length}</span></div>
            <div class="stat-chip-label">Mastered (100%)</div>
          </div>
        </div>
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background:var(--danger-light); color:var(--danger);">⚠️</div>
          <div>
            <div class="stat-chip-val">${weakCount}</div>
            <div class="stat-chip-label">Need Practice</div>
          </div>
        </div>
        <div class="stat-chip">
          <div class="stat-chip-icon" style="background:var(--primary-light); color:var(--primary);">📊</div>
          <div>
            <div class="stat-chip-val">${overallPct}%</div>
            <div class="stat-chip-label">Average Score</div>
          </div>
        </div>
      </div>

      <!-- Topic Mastery Matrix -->
      <div class="card" style="margin-bottom:20px;">
        <h2>Topic Mastery Matrix (${bank.title})</h2>
        <p class="muted">Live proficiency calculated for questions in this bank:</p>
        <div class="spacer-sm"></div>

        <div class="topic-breakdown">
          ${ASG.map(n => {
            const topic = TOPICS[n] || { name: `Topic ${n}` };
            const qIds = Q.filter(q => q.a === n).map(q => q.id);
            const mCount = qIds.filter(id => stats[id] && stats[id].lastResult === true).length;
            const pct = qIds.length ? Math.round((mCount / qIds.length) * 100) : 0;
            return `
              <div class="topic-row">
                <span class="topic-name" title="${topic.name}">Topic ${n}: ${topic.name}</span>
                <div class="topic-bar-bg">
                  <div class="topic-bar-fill" style="width:${pct}%; background:${pct >= 80 ? "var(--success)" : pct >= 40 ? "var(--primary)" : "var(--border-strong)"}"></div>
                </div>
                <span class="topic-score">${mCount}/${qIds.length} (${pct}%)</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- Complete Test Log -->
      <div class="card">
        <div class="row between" style="margin-bottom:12px;">
          <h2>Test Attempt History</h2>
          ${hist.length ? `<button class="btn sm" id="btn-clr-all-hist">Clear History</button>` : ""}
        </div>
        ${hist.length ? `
          <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <thead>
                <tr style="border-bottom:1px solid var(--border-subtle); text-align:left; color:var(--text-dim); font-size:12px; text-transform:uppercase;">
                  <th style="padding:8px;">Test Title</th>
                  <th style="padding:8px;">Score</th>
                  <th style="padding:8px;">Accuracy</th>
                  <th style="padding:8px;">Time</th>
                  <th style="padding:8px;">Date</th>
                </tr>
              </thead>
              <tbody>
                ${hist.map(h => `
                  <tr style="border-bottom:1px solid var(--border-subtle);">
                    <td style="padding:10px 8px; font-weight:600;">${esc(h.title)}</td>
                    <td style="padding:10px 8px;"><b>${h.score}</b>/${h.total}</td>
                    <td style="padding:10px 8px;"><span class="brand-badge" style="background:${h.pct >= 80 ? "var(--success-light)" : "var(--primary-light)"}; color:${h.pct >= 80 ? "var(--success)" : "var(--primary)"}">${h.pct}%</span></td>
                    <td style="padding:10px 8px; color:var(--text-muted);">${fmtTime(h.duration || 0)}</td>
                    <td style="padding:10px 8px; color:var(--text-dim);">${esc(h.date)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        ` : `<p class="muted">No test attempts recorded yet for this question bank. Take a test to see your history!</p>`}
      </div>
    `;

    document.getElementById("btn-back").onclick = home;
    const clr = document.getElementById("btn-clr-all-hist");
    if (clr) {
      clr.onclick = () => {
        if (confirm(`Reset and clear test history for ${bank.title}?`)) {
          saveJSON(getHKey(), []);
          analytics();
        }
      };
    }
  }

  /* ==========================================================================
     Keyboard Shortcuts Modal
     ========================================================================== */
  function showKeyboardModal() {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-content">
        <div class="row between" style="margin-bottom: 14px;">
          <h3>⌨️ Keyboard Shortcuts</h3>
          <button class="btn sm" id="modal-close">✕</button>
        </div>
        <p class="muted" style="margin-bottom:16px;">Speed up your exam taking and practice with these hotkeys:</p>
        <table style="width:100%; border-collapse:collapse; font-size:14px; line-height:2;">
          <tr><td><span class="kbd">1</span> <span class="kbd">2</span> <span class="kbd">3</span> <span class="kbd">4</span> / <span class="kbd">A</span> <span class="kbd">B</span> <span class="kbd">C</span> <span class="kbd">D</span></td><td>Select option</td></tr>
          <tr><td><span class="kbd">←</span> / <span class="kbd">→</span></td><td>Previous / Next question</td></tr>
          <tr><td><span class="kbd">F</span></td><td>Toggle Flag for review (🚩)</td></tr>
          <tr><td><span class="kbd">S</span></td><td>Save / Bookmark question (⭐)</td></tr>
          <tr><td><span class="kbd">P</span></td><td>Open PYQ Papers Drawer (📑)</td></tr>
          <tr><td><span class="kbd">M</span></td><td>Toggle Sound Mute/Unmute</td></tr>
          <tr><td><span class="kbd">T</span></td><td>Toggle Light/Dark Theme</td></tr>
          <tr><td><span class="kbd">Space</span></td><td>Flip Flashcard (in Flashcard mode)</td></tr>
          <tr><td><span class="kbd">?</span></td><td>Open this shortcuts guide</td></tr>
        </table>
        <div class="spacer-sm"></div>
        <button class="btn primary" style="width:100%; margin-top:10px;" id="modal-got-it">Got it</button>
      </div>
    `;
    document.body.appendChild(modal);
    const close = () => modal.remove();
    modal.querySelector("#modal-close").onclick = close;
    modal.querySelector("#modal-got-it").onclick = close;
    modal.onclick = e => { if (e.target === modal) close(); };
  }
  if ($kbdBtn) $kbdBtn.onclick = showKeyboardModal;

  /* ---------- Global Keyboard Event Listener ---------- */
  document.addEventListener("keydown", e => {
    if (e.target.matches("input, select, textarea") || e.ctrlKey || e.metaKey) return;

    if (e.key === "?") {
      showKeyboardModal();
      return;
    }
    if (e.key.toLowerCase() === "p") {
      openDrawer();
      return;
    }
    if (e.key.toLowerCase() === "m") {
      soundEnabled = !soundEnabled;
      saveJSON(SOUND_KEY, soundEnabled);
      updateSoundUI();
      return;
    }
    if (e.key.toLowerCase() === "t") {
      const cur = document.documentElement.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      saveJSON(THEME_KEY, next);
      applyTheme(next);
      return;
    }

    if (S && !S.done) {
      const it = S.items[S.i];
      const optKeys = "abcd1234";
      const keyIdx = optKeys.indexOf(e.key.toLowerCase());
      if (keyIdx >= 0 && !(S.practice && it.sel !== null)) {
        it.sel = keyIdx % 4;
        if (S.practice) {
          const isCorrect = it.sel === it.correct;
          recordQuestionAttempt(it.q.id, isCorrect);
          playSound(isCorrect ? "correct" : "wrong");
        } else {
          playSound("click");
        }
        quiz();
      } else if (e.key === "ArrowRight" && S.i < S.items.length - 1) {
        S.i++;
        quiz();
      } else if (e.key === "ArrowLeft" && S.i > 0) {
        S.i--;
        quiz();
      } else if (e.key.toLowerCase() === "f") {
        it.flagged = !it.flagged;
        playSound("click");
        quiz();
      } else if (e.key.toLowerCase() === "s") {
        toggleBookmark(it.q.id);
        playSound("click");
        quiz();
      }
    }
  });

  window.addEventListener("beforeunload", e => {
    if (S && !S.done && S.items.some(x => x.sel !== null)) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  // Initial render
  const bank = getBank();
  if ($bankBadge) $bankBadge.textContent = bank.badge || bank.year;
  if ($qcount) $qcount.textContent = getQuestions().length;
  updateBookmarkBadge();
  renderDrawerList();
  initBottomFeedback();
  home();
})();
