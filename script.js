/**
 * PORTFOLIO 2026 ARCHIVE ENGINE
 * - Striped row navigation with live interactive preview window
 * - Click preview window to inspect detail view
 * - Elastic bouncy typography (yerim-e style) & spinning companion geometry
 * - Live digital seconds clock (hi-portfolio "EVERY SECOND COUNTS")
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreviewSystem();
  initViewNavigator();
  initBouncyTypography();
  initDigitalClock();
  initEmailCopy();
});

/**
 * ============================================================================
 * 1. LIVE INTERACTIVE PREVIEW SYSTEM (메뉴 옆 미리보기 화면 및 클릭 시 자세히 보기)
 * ============================================================================
 */
const PREVIEW_DATA = {
  'preview-script-maker': {
    category: '01 / CASE STUDY PREVIEW',
    url: 'portfolio-2026.app/youtube-script-maker',
    subtitle: 'Next.js 14 • Gemini API • TypeScript',
    targetView: 'view-script-maker',
    html: `
      <div class="p-4 rounded-xl bg-surface-subtle border border-surface-border">
        <div class="flex items-center justify-between mb-3">
          <span class="text-[11px] font-mono font-semibold text-ink flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Gemini Subtitle Engine
          </span>
          <span class="text-[10px] font-mono text-ink-subtle">LIVE PREVIEW</span>
        </div>
        <div class="space-y-2 font-mono text-xs">
          <div class="p-2.5 rounded-lg bg-white border border-surface-border flex justify-between items-center">
            <span class="text-ink font-medium">00:01:24 — EN Transcript Sync</span>
            <span class="text-[10px] text-emerald-600 font-semibold">PARSED</span>
          </div>
          <div class="p-2.5 rounded-lg bg-white border border-surface-border flex justify-between items-center">
            <span class="text-ink-muted">00:01:45 — 한국어 문맥 자연 번역</span>
            <span class="text-[10px] text-ink-subtle">READY</span>
          </div>
        </div>
        <div class="mt-3 flex gap-2">
          <span class="px-2 py-0.5 rounded bg-white border border-surface-border text-[10px] font-mono text-ink-muted">PDF Export</span>
          <span class="px-2 py-0.5 rounded bg-white border border-surface-border text-[10px] font-mono text-ink-muted">Vocabulary</span>
        </div>
      </div>
    `
  },
  'preview-letter-project': {
    category: '02 / INTERACTIVE WEB PREVIEW',
    url: 'portfolio-2026.app/letter-project',
    subtitle: 'Canvas API • Framer Motion • Digital Archive',
    targetView: 'view-letter-project',
    html: `
      <div class="p-6 rounded-xl bg-surface-subtle border border-surface-border text-center flex flex-col items-center justify-center">
        <div class="w-24 h-16 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-3xl shadow-xs mb-3 group-hover:scale-105 transition-transform">
          ✉
        </div>
        <span class="text-xs font-bold text-ink block">Digital Envelope Open Interaction</span>
        <span class="text-[11px] text-ink-muted mt-1 max-w-xs">감성적인 편지봉투 메타포를 캔버스 인터랙션으로 구현한 웹 아카이브</span>
      </div>
    `
  },
  'preview-portfolio-2025': {
    category: '03 / PREVIOUS ARCHIVE PREVIEW',
    url: 'portfolio-2026.app/portfolio-2025',
    subtitle: 'Minimalism • Bento Grid • 60 FPS Motion',
    targetView: 'view-portfolio-2025',
    html: `
      <div class="grid grid-cols-2 gap-3">
        <div class="p-4 rounded-xl bg-surface-subtle border border-surface-border flex flex-col justify-between">
          <span class="text-[10px] font-mono text-ink-subtle">PERFORMANCE</span>
          <span class="text-2xl font-extrabold text-ink">99.8%</span>
        </div>
        <div class="p-4 rounded-xl bg-surface-subtle border border-surface-border flex flex-col justify-between">
          <span class="text-[10px] font-mono text-ink-subtle">LIGHTHOUSE</span>
          <span class="text-2xl font-extrabold text-ink">100 / 100</span>
        </div>
        <div class="col-span-2 p-3 rounded-xl bg-surface-subtle border border-surface-border flex items-center justify-between text-xs font-mono text-ink">
          <span>ARCHIVE EDITION</span>
          <span class="text-ink-subtle">2025 RELEASE ↗</span>
        </div>
      </div>
    `
  },
  'preview-about': {
    category: '04 / BIOGRAPHY PREVIEW',
    url: 'portfolio-2026.app/about',
    subtitle: 'Seoul, Korea (KST) • Full Stack Engineer',
    targetView: 'view-about',
    html: `
      <div class="p-5 rounded-xl bg-surface-subtle border border-surface-border">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center font-bold text-sm">
            ✦
          </div>
          <div>
            <span class="text-sm font-bold text-ink block">행복하게 매 순간 최선을 다하는 개발자</span>
            <span class="text-[11px] font-mono text-ink-subtle">Full Stack & UI Engineering</span>
          </div>
        </div>
        <p class="text-xs text-ink-muted leading-relaxed">
          "Subtle motion creates memorable clarity." 불필요한 장식을 걷어내고 기분 좋은 감각적 인터랙션을 추구합니다.
        </p>
      </div>
    `
  },
  'preview-skills': {
    category: '05 / CAPABILITIES PREVIEW',
    url: 'portfolio-2026.app/tech-stack',
    subtitle: 'React 19 • Next.js 14 • Tailwind • Spring Motion',
    targetView: 'view-skills',
    html: `
      <div class="p-4 rounded-xl bg-surface-subtle border border-surface-border">
        <span class="text-[10px] font-mono text-ink-subtle uppercase block mb-2.5">Tech Matrix</span>
        <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
          <span class="px-2 py-1 rounded-md bg-white border border-surface-border text-ink font-medium">React 18/19</span>
          <span class="px-2 py-1 rounded-md bg-white border border-surface-border text-ink font-medium">Next.js 14</span>
          <span class="px-2 py-1 rounded-md bg-white border border-surface-border text-ink font-medium">TypeScript</span>
          <span class="px-2 py-1 rounded-md bg-white border border-surface-border text-ink font-medium">Tailwind CSS</span>
          <span class="px-2 py-1 rounded-md bg-white border border-surface-border text-ink font-medium">Framer Motion</span>
          <span class="px-2 py-1 rounded-md bg-white border border-surface-border text-ink font-medium">Gemini API</span>
        </div>
      </div>
    `
  },
  'preview-contact': {
    category: '06 / COLLABORATION PREVIEW',
    url: 'portfolio-2026.app/contact',
    subtitle: 'hello@portfolio.site • Seoul, Korea',
    targetView: 'view-contact',
    html: `
      <div class="p-5 rounded-xl bg-surface-subtle border border-surface-border text-center">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-surface-border text-[10px] font-mono text-emerald-600 mb-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          OPEN TO WORK
        </span>
        <h4 class="text-base font-bold text-ink mb-1">Let's build something remarkable</h4>
        <p class="text-xs text-ink-muted">새로운 프로젝트 기획 및 협업 제안을 환영합니다.</p>
      </div>
    `
  }
};

let currentTargetViewId = 'view-script-maker';

function initPreviewSystem() {
  const previewCard = document.getElementById('interactive-preview-card');
  const previewCat = document.getElementById('preview-category');
  const previewUrl = document.getElementById('preview-url');
  const previewSubtitle = document.getElementById('preview-subtitle');
  const previewBody = document.getElementById('preview-body');
  const rows = document.querySelectorAll('.striped-row');

  if (!previewCard || !previewBody) return;

  function updatePreview(previewId) {
    const data = PREVIEW_DATA[previewId];
    if (!data) return;

    currentTargetViewId = data.targetView;

    // Smooth fade in
    previewBody.classList.remove('preview-fade-in');
    void previewBody.offsetWidth; // Trigger reflow

    previewCat.textContent = data.category;
    previewUrl.textContent = data.url;
    previewSubtitle.textContent = data.subtitle;
    previewBody.innerHTML = data.html;

    previewBody.classList.add('preview-fade-in');
  }

  // Row Hover events
  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
      // Highlight active row
      rows.forEach((r) => r.classList.remove('active-row'));
      row.classList.add('active-row');

      const previewId = row.getAttribute('data-preview-id');
      updatePreview(previewId);
    });
  });

  // CLICK PREVIEW CARD -> OPEN DETAIL VIEW (사용자 요청: "그 화면을 누르면 자세히 볼수있게 해줘")
  previewCard.addEventListener('click', () => {
    if (window.navigateToView) {
      window.navigateToView(currentTargetViewId);
    }
  });

  // Initial preview render (first row)
  updatePreview('preview-script-maker');
}

/**
 * ============================================================================
 * 2. VIEW NAVIGATOR (화면 전환 / Screen Transitions)
 * ============================================================================
 */
function initViewNavigator() {
  const views = document.querySelectorAll('.app-view');
  const rowButtons = document.querySelectorAll('.striped-row');
  const navSwitchButtons = document.querySelectorAll('.nav-switch-btn');
  const backButtons = document.querySelectorAll('.back-to-home-btn');
  const logo = document.getElementById('brand-logo');

  function navigateTo(targetViewId) {
    const target = document.getElementById(targetViewId);
    if (!target) return;

    views.forEach((v) => {
      v.classList.remove('active');
    });

    target.classList.add('active');
    target.scrollTop = 0;

    // Trigger bounce wave on any headings in newly opened view
    const mainHeading = target.querySelector('.bouncy-text');
    if (mainHeading) {
      setTimeout(() => {
        triggerWaveBounce(mainHeading);
      }, 150);
    }

    if (targetViewId === 'view-home') {
      history.pushState(null, '', ' ');
    } else {
      history.pushState(null, '', `#${targetViewId}`);
    }
  }

  // Expose to window for preview card click
  window.navigateToView = navigateTo;

  // Row buttons click handler
  rowButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-view');
      navigateTo(targetId);
    });
  });

  // Top nav quick links
  navSwitchButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-view');
      navigateTo(targetId);
    });
  });

  // Back to home buttons
  backButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateTo('view-home');
    });
  });

  // Logo returns to home
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('view-home');
    });
  }

  // Keyboard shortcut: Escape returns to menu
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navigateTo('view-home');
    }
  });

  // Popstate history
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      navigateTo(hash);
    } else {
      navigateTo('view-home');
    }
  });

  // Initial check
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    navigateTo(initialHash);
  }
}

/**
 * ============================================================================
 * 3. BOUNCY TYPOGRAPHY ENGINE (yerim-e.com elastic bounce)
 * ============================================================================
 */
function initBouncyTypography(container = document) {
  const bouncyElements = container.querySelectorAll('.bouncy-text');

  bouncyElements.forEach((el) => {
    if (el.dataset.initialized === 'true') return;
    el.dataset.initialized = 'true';

    const rawText = el.getAttribute('data-text') || el.textContent.trim();
    el.textContent = '';

    Array.from(rawText).forEach((char, index) => {
      const span = document.createElement('span');
      span.className = 'bouncy-char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.dataset.index = index;

      span.addEventListener('mouseenter', () => {
        triggerSingleBounce(span);
      });

      el.appendChild(span);
    });

    const parentRow = el.closest('.striped-row');
    if (parentRow) {
      parentRow.addEventListener('mouseenter', () => {
        triggerWaveBounce(el);
      });
    }
  });
}

function triggerSingleBounce(charSpan) {
  charSpan.classList.remove('is-bouncing');
  void charSpan.offsetWidth;
  charSpan.classList.add('is-bouncing');

  charSpan.addEventListener('animationend', () => {
    charSpan.classList.remove('is-bouncing');
  }, { once: true });
}

function triggerWaveBounce(bouncyElement) {
  const chars = bouncyElement.querySelectorAll('.bouncy-char');
  chars.forEach((char, i) => {
    setTimeout(() => {
      triggerSingleBounce(char);
    }, i * 30);
  });
}

/**
 * ============================================================================
 * 4. LIVE DIGITAL CLOCK (hi-portfolio.site "EVERY SECOND COUNTS")
 * ============================================================================
 */
function initDigitalClock() {
  const clockEl = document.getElementById('digital-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Seoul',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    clockEl.textContent = new Intl.DateTimeFormat('ko-KR', options).format(now);
  }

  update();
  setInterval(update, 1000);
}

/**
 * ============================================================================
 * 5. COPY EMAIL & TOAST NOTIFICATION
 * ============================================================================
 */
function initEmailCopy() {
  const btn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  if (!btn || !toast) return;

  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email') || 'hello@portfolio.site';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      showToast(`이메일(${email})이 복사되었습니다!`);
    } catch (err) {
      showToast('이메일 주소 복사에 실패했습니다.');
    }
  });

  function showToast(message) {
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 2500);
  }
}
