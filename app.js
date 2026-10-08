/* ==========================================================================
   OEE Industrial Analytics V2 - النمط العسيري التقني المبتكر
   ========================================================================== */

const i18n = {
  ar: {
    badgeEngine: "منظومة القط العسيري الهندسية · كفاءة المعدات OEE",
    appTitle: "OEE Analytics",
    appSub: "النمط العسيري التقني",
    appDesc: "تحليل الكفاءة الكلية للمعدات، رصد الخسائر الست الكبرى، ومخططات باريتو بنكهة تراثية عسيرية معاصرة",
    statusLabel: "معيار الجودة:",
    worldClass: "فئة عالمية (World Class)",
    typical: "مستوى نموذجي (Typical)",
    low: "بحاجة لتحسين (Low)",
    langLabel: "English",
    exportBtn: "تصدير تقرير OEE",
    presetsLabel: "السيناريوهات الصناعية الجاهزة:",
    presetAuto: "مصانع السيارات (85% OEE عالمي)",
    presetPharma: "الصناعات الدوائية (جودة فائقة، توقفات تعقيم)",
    presetSMT: "الإلكترونيات SMT (سرعة عالية، أعطال ميكروية)",
    presetHeavy: "الصناعات الثقيلة والتعدين (صيانة دورية مجهدة)",
    resetBtn: "إعادة ضبط",
    kpiOEE: "الكفاءة الكلية للمعدات OEE",
    kpiOEESub: "A × P × Q = المعيار الذهبي",
    kpiAvail: "معدل الإتاحة والجاهزية (A)",
    kpiAvailSub: "زمن التشغيل الفعلي / المخطط",
    kpiPerf: "معدل الأداء والسرعة (P)",
    kpiPerfSub: "الإنتاج الفعلي / الطاقة التصميمية",
    kpiQual: "معدل الجودة والخلو من العيوب (Q)",
    kpiQualSub: "القطع السليمة / إجمالي المنتجات",
    gaugeTitle: "عداد الكفاءة الدائري والمؤشرات الثلاثية",
    gaugeDesc: "تفكيك الكفاءة التشغيلية OEE لعناصرها الثلاثة مع مؤشر قياس دائري تفاعلي.",
    gaugeCenter: "المحصلة",
    factorAvail: "الإتاحة (Availability)",
    factorPerf: "الأداء (Performance)",
    factorQual: "الجودة (Quality)",
    chartsTitle: "مخططات الشلال والباريتو 80/20",
    chartsDesc: "تتبع هدر ساعات الوردية خطوة بخطوة وكشف الخسائر المسببة لـ 80% من التوقفات.",
    tabWaterfall: "شلال الفقد الزمني",
    tabPareto: "باريتو 80/20",
    plannedTime: "الزمن المخطط:",
    netOperating: "الزمن الفعال الصافي:",
    totalLossTime: "إجمالي الهدر الزمني:",
    tabLoss1: "خسائر الإتاحة (أعطال وإعداد)",
    tabLoss2: "خسائر الأداء (توقفات وسرعة)",
    tabLoss3: "خسائر الجودة (هدر وتعديل)",
    l1Title: "1. أعطال المعدات المفاجئة (Equipment Failures)",
    l1Desc: "التوقفات غير المخططة الناتجة عن تعطل محركات أو تآكل ميكانيكي.",
    l2Title: "2. الإعداد والتجهيز وتغيير القوالب (Setup & Adjustments)",
    l2Desc: "الزمن المستهلك في معايرة الآلات وتغيير خط الإنتاج (فرصة لتطبيق SMED).",
    l3Title: "3. التوقفات الطفيفة والقصيرة (Small Stops)",
    l3Desc: "توقفات متكررة أقل من 5 دقائق بسبب انسداد حساس أو انحشار مواد.",
    l4Title: "4. انخفاض سرعة التشغيل (Reduced Speed)",
    l4Desc: "تشغيل الماكينة بأقل من طاقتها الاسمية بسبب اهتزازات أو تجنب السخونة.",
    l5Title: "5. عيوب الإنتاج وبدايات التشغيل (Startup Rejects)",
    l5Desc: "القطع المعيبة التي تنتج أثناء مرحلة الإحماء والاستقرار الحراري للماكينة.",
    l6Title: "6. الهدر أثناء العمليات المستقرة (Production Defects)",
    l6Desc: "قطع غير مطابقة للمواصفات تتطلب إعادة تشغيل أو إتلاف كامل.",
    footerStatus: "منصة OEE الصناعية V2 · مستوحاة من الهوية البصرية للقط العسيري التراثي"
  },
  en: {
    badgeEngine: "AL-QATT AL-ASIRI HERITAGE SYSTEM · OEE ANALYTICS",
    appTitle: "OEE Analytics",
    appSub: "Neo-Asiri Tech Style",
    appDesc: "Overall Equipment Effectiveness, Six Big Losses tracking & Pareto 80/20 analytics infused with contemporary Asiri geometric heritage.",
    statusLabel: "Benchmark:",
    worldClass: "World Class (>85%)",
    typical: "Typical (60-84%)",
    low: "Needs Improvement (<60%)",
    langLabel: "العربية",
    exportBtn: "Export OEE Audit",
    presetsLabel: "Industry Presets:",
    presetAuto: "Automotive (85% World Class)",
    presetPharma: "Pharma (Ultra-Quality, Sanitization Stops)",
    presetSMT: "Electronics SMT (High-Speed, Micro-stops)",
    presetHeavy: "Heavy Mining (Intensive Maintenance)",
    resetBtn: "Reset",
    kpiOEE: "Overall Equipment Effectiveness (OEE)",
    kpiOEESub: "A × P × Q = Golden Standard",
    kpiAvail: "Availability Rate (A)",
    kpiAvailSub: "Actual Operating / Planned Time",
    kpiPerf: "Performance Rate (P)",
    kpiPerfSub: "Net Output / Nameplate Speed",
    kpiQual: "Quality Rate (Q)",
    kpiQualSub: "Good Units / Total Produced",
    gaugeTitle: "Radial OEE Gauge & Tri-Factors",
    gaugeDesc: "Decomposition of production performance into Availability, Performance, and Quality.",
    gaugeCenter: "Overall OEE",
    factorAvail: "Availability",
    factorPerf: "Performance",
    factorQual: "Quality",
    chartsTitle: "Waterfall Cascade & Pareto 80/20 Charts",
    chartsDesc: "Track shift hours depletion step-by-step and identify top drivers of 80% downtime.",
    tabWaterfall: "Shift Time Waterfall",
    tabPareto: "Pareto 80/20",
    plannedTime: "Planned Production Time:",
    netOperating: "Fully Productive Time:",
    totalLossTime: "Total Time Waste:",
    tabLoss1: "Availability Losses (Downtime)",
    tabLoss2: "Performance Losses (Speed)",
    tabLoss3: "Quality Losses (Rejects)",
    l1Title: "1. Equipment Breakdowns",
    l1Desc: "Unplanned downtime caused by motor burnout, pump failure, or mechanical wear.",
    l2Title: "2. Setup & Changeovers",
    l2Desc: "Tool change and setup time (prime target for Lean SMED implementation).",
    l3Title: "3. Small Stops & Idling",
    l3Desc: "Repeated stops under 5 minutes due to optical sensor misalignment or feed jams.",
    l4Title: "4. Reduced Operating Speed",
    l4Desc: "Running machinery below nominal design speed to prevent overheating.",
    l5Title: "5. Startup Rejects & Scrap",
    l5Desc: "Scrap generated during machine warm-up, calibration, and parameter settling.",
    l6Title: "6. Production Defects",
    l6Desc: "Out-of-tolerance manufactured parts requiring rework or total disposal.",
    footerStatus: "OEE Analytics Studio V2 · Infused with authentic Al-Qatt Al-Asiri design aesthetics"
  }
};

let currentLang = 'ar';

let avail = 0.90;
let perf = 0.95;
let qual = 0.994;
let activeChart = 'waterfall'; // 'waterfall' or 'pareto'

document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  setupEventListeners();
  setupPresets();
  setupTabs();

  recalculateAll();
  initGaugeCanvas();
  initAnalysisCanvas();

  window.addEventListener('resize', () => {
    initGaugeCanvas();
    initAnalysisCanvas();
  });
});

function setupLanguage() {
  const toggle = document.getElementById('langToggle');
  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
    document.getElementById('langLabel').textContent = i18n[currentLang].langLabel;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[currentLang][key]) {
        el.textContent = i18n[currentLang][key];
      }
    });

    recalculateAll();
  });
}

function setupEventListeners() {
  const sA = document.getElementById('sliderAvail');
  const sP = document.getElementById('sliderPerf');
  const sQ = document.getElementById('sliderQual');

  sA.addEventListener('input', (e) => {
    avail = parseInt(e.target.value) / 100;
    document.getElementById('sliderValAvail').textContent = Math.round(avail * 100) + '%';
    clearActivePreset();
    recalculateAll();
  });

  sP.addEventListener('input', (e) => {
    perf = parseInt(e.target.value) / 100;
    document.getElementById('sliderValPerf').textContent = Math.round(perf * 100) + '%';
    clearActivePreset();
    recalculateAll();
  });

  sQ.addEventListener('input', (e) => {
    qual = parseInt(e.target.value) / 100;
    document.getElementById('sliderValQual').textContent = Math.round(qual * 100) + '%';
    clearActivePreset();
    recalculateAll();
  });

  document.getElementById('btnWaterfall').addEventListener('click', () => {
    activeChart = 'waterfall';
    document.getElementById('btnWaterfall').classList.add('active');
    document.getElementById('btnPareto').classList.remove('active');
    drawAnalysisCanvas();
  });

  document.getElementById('btnPareto').addEventListener('click', () => {
    activeChart = 'pareto';
    document.getElementById('btnPareto').classList.add('active');
    document.getElementById('btnWaterfall').classList.remove('active');
    drawAnalysisCanvas();
  });

  document.getElementById('resetDefaultsBtn').addEventListener('click', () => {
    setPreset('automotive');
  });

  document.getElementById('exportReportBtn').addEventListener('click', exportAuditReport);
}

function clearActivePreset() {
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
}

function setupPresets() {
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const p = btn.getAttribute('data-preset');
      setPreset(p);
    });
  });
}

function setPreset(p) {
  if (p === 'automotive') {
    avail = 0.90; perf = 0.95; qual = 0.994;
  } else if (p === 'pharma') {
    avail = 0.72; perf = 0.88; qual = 0.999;
  } else if (p === 'electronics') {
    avail = 0.88; perf = 0.78; qual = 0.985;
  } else if (p === 'mining') {
    avail = 0.65; perf = 0.85; qual = 0.960;
  }

  document.getElementById('sliderAvail').value = Math.round(avail * 100);
  document.getElementById('sliderValAvail').textContent = Math.round(avail * 100) + '%';

  document.getElementById('sliderPerf').value = Math.round(perf * 100);
  document.getElementById('sliderValPerf').textContent = Math.round(perf * 100) + '%';

  document.getElementById('sliderQual').value = Math.round(qual * 100);
  document.getElementById('sliderValQual').textContent = Math.round(qual * 100) + '%';

  recalculateAll();
}

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.getAttribute('data-tab'));
      if (target) target.classList.add('active');
    });
  });
}

function recalculateAll() {
  const oee = avail * perf * qual;
  const oeePct = (oee * 100).toFixed(1);

  document.getElementById('kpiOEE').textContent = oeePct + '%';
  document.getElementById('kpiAvail').textContent = (avail * 100).toFixed(1) + '%';
  document.getElementById('kpiPerf').textContent = (perf * 100).toFixed(1) + '%';
  document.getElementById('kpiQual').textContent = (qual * 100).toFixed(1) + '%';

  document.getElementById('gaugeCenterVal').textContent = oeePct + '%';

  // World class evaluation
  const statusBadge = document.getElementById('worldClassBadge');
  const classText = document.getElementById('gaugeClassText');
  if (oee >= 0.85) {
    statusBadge.textContent = i18n[currentLang].worldClass;
    statusBadge.style.color = 'var(--asiri-gold)';
    classText.textContent = i18n[currentLang].worldClass;
    classText.style.color = 'var(--asiri-emerald)';
  } else if (oee >= 0.65) {
    statusBadge.textContent = i18n[currentLang].typical;
    statusBadge.style.color = 'var(--asiri-emerald)';
    classText.textContent = i18n[currentLang].typical;
    classText.style.color = 'var(--asiri-gold)';
  } else {
    statusBadge.textContent = i18n[currentLang].low;
    statusBadge.style.color = 'var(--asiri-crimson)';
    classText.textContent = i18n[currentLang].low;
    classText.style.color = 'var(--asiri-crimson)';
  }

  // Time calculations (480 mins shift)
  const planned = 480;
  const operating = planned * avail;
  const netEffective = operating * perf * qual;
  const totalLoss = planned - netEffective;

  document.getElementById('netEffectiveVal').textContent = Math.round(netEffective) + (currentLang === 'ar' ? ' دقيقة' : ' mins');
  document.getElementById('totalLossVal').textContent = Math.round(totalLoss) + (currentLang === 'ar' ? ' دقيقة' : ' mins');

  // Loss breakdown items
  const lBreakdown = planned * (1 - avail) * 0.6;
  const lSetup = planned * (1 - avail) * 0.4;
  const lStops = operating * (1 - perf) * 0.6;
  const lSpeed = operating * (1 - perf) * 0.4;

  document.getElementById('l1Val').textContent = Math.round(lBreakdown) + (currentLang === 'ar' ? ' دقيقة / وردية' : ' mins / shift');
  document.getElementById('l2Val').textContent = Math.round(lSetup) + (currentLang === 'ar' ? ' دقيقة / وردية' : ' mins / shift');
  document.getElementById('l3Val').textContent = Math.round(lStops) + (currentLang === 'ar' ? ' دقيقة / وردية' : ' mins / shift');
  document.getElementById('l4Val').textContent = Math.round(lSpeed) + (currentLang === 'ar' ? ' دقيقة / وردية' : ' mins / shift');

  drawGaugeCanvas();
  drawAnalysisCanvas();
}

// Circular Asiri Heritage Gauge
let gCanvas, gCtx;
function initGaugeCanvas() {
  gCanvas = document.getElementById('gaugeCanvas');
  if (!gCanvas) return;
  const dpr = window.devicePixelRatio || 1;
  gCanvas.width = 300 * dpr;
  gCanvas.height = 300 * dpr;
  gCtx = gCanvas.getContext('2d');
  gCtx.scale(dpr, dpr);
  drawGaugeCanvas();
}

function drawGaugeCanvas() {
  if (!gCanvas || !gCtx) return;
  const w = 300;
  const h = 300;
  const cx = w / 2;
  const cy = h / 2;

  gCtx.clearRect(0, 0, w, h);

  const startAngle = Math.PI * 0.75;
  const totalAngle = Math.PI * 1.5;

  // Background Tracks
  // 1. Outer: Availability (Red/Crimson)
  drawArcTrack(cx, cy, 120, 10, "rgba(220, 38, 38, 0.15)");
  drawArcProgress(cx, cy, 120, 10, avail, "#dc2626");

  // 2. Middle: Performance (Emerald)
  drawArcTrack(cx, cy, 104, 10, "rgba(16, 185, 129, 0.15)");
  drawArcProgress(cx, cy, 104, 10, perf, "#10b981");

  // 3. Inner: Quality (Indigo Blue)
  drawArcTrack(cx, cy, 88, 10, "rgba(59, 130, 246, 0.15)");
  drawArcProgress(cx, cy, 88, 10, qual, "#3b82f6");

  // Asiri Heritage Chevron Accents around Gauge rim
  for (let i = 0; i < 16; i++) {
    const angle = startAngle + (totalAngle / 15) * i;
    const ax = cx + Math.cos(angle) * 138;
    const ay = cy + Math.sin(angle) * 138;
    gCtx.beginPath();
    gCtx.arc(ax, ay, 2, 0, Math.PI * 2);
    gCtx.fillStyle = i % 2 === 0 ? "var(--asiri-gold)" : "rgba(255, 255, 255, 0.2)";
    gCtx.fill();
  }
}

function drawArcTrack(cx, cy, radius, width, color) {
  gCtx.beginPath();
  gCtx.arc(cx, cy, radius, Math.PI * 0.75, Math.PI * 2.25);
  gCtx.strokeStyle = color;
  gCtx.lineWidth = width;
  gCtx.lineCap = "round";
  gCtx.stroke();
}

function drawArcProgress(cx, cy, radius, width, pct, color) {
  const endAngle = Math.PI * 0.75 + (Math.PI * 1.5) * pct;
  gCtx.beginPath();
  gCtx.arc(cx, cy, radius, Math.PI * 0.75, endAngle);
  gCtx.strokeStyle = color;
  gCtx.lineWidth = width;
  gCtx.lineCap = "round";
  gCtx.stroke();
}

// Waterfall & Pareto Visualizer
let aCanvas, aCtx;
function initAnalysisCanvas() {
  aCanvas = document.getElementById('analysisCanvas');
  if (!aCanvas) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = aCanvas.parentElement.getBoundingClientRect();
  aCanvas.width = rect.width * dpr;
  aCanvas.height = rect.height * dpr;
  aCtx = aCanvas.getContext('2d');
  aCtx.scale(dpr, dpr);
  drawAnalysisCanvas();
}

function drawAnalysisCanvas() {
  if (!aCanvas || !aCtx) return;
  const dpr = window.devicePixelRatio || 1;
  const w = aCanvas.width / dpr;
  const h = aCanvas.height / dpr;

  aCtx.clearRect(0, 0, w, h);

  if (activeChart === 'waterfall') {
    drawWaterfallChart(w, h);
  } else {
    drawParetoChart(w, h);
  }
}

function drawWaterfallChart(w, h) {
  const pad = { top: 35, right: 30, bottom: 45, left: 45 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  const planned = 480;
  const lossAvail = planned * (1 - avail);
  const operating = planned - lossAvail;
  const lossPerf = operating * (1 - perf);
  const netOperating = operating - lossPerf;
  const lossQual = netOperating * (1 - qual);
  const fullyProductive = netOperating - lossQual;

  const bars = [
    { label: currentLang === 'ar' ? 'الزمن المخطط' : 'Planned', val: planned, type: 'total', color: '#f59e0b', start: 0, end: planned },
    { label: currentLang === 'ar' ? 'فقد الإتاحة' : 'Avail Loss', val: lossAvail, type: 'loss', color: '#dc2626', start: operating, end: planned },
    { label: currentLang === 'ar' ? 'فقد الأداء' : 'Perf Loss', val: lossPerf, type: 'loss', color: '#ea580c', start: netOperating, end: operating },
    { label: currentLang === 'ar' ? 'فقد الجودة' : 'Qual Loss', val: lossQual, type: 'loss', color: '#e11d48', start: fullyProductive, end: netOperating },
    { label: currentLang === 'ar' ? 'الإنتاج الفعال' : 'Productive', val: fullyProductive, type: 'result', color: '#10b981', start: 0, end: fullyProductive }
  ];

  const barW = (plotW / bars.length) * 0.6;
  const spacing = plotW / bars.length;

  bars.forEach((b, idx) => {
    const x = pad.left + idx * spacing + (spacing - barW) / 2;
    const yTop = pad.top + ((planned - b.end) / planned) * plotH;
    const yBottom = pad.top + ((planned - b.start) / planned) * plotH;
    const barH = Math.max(4, yBottom - yTop);

    // Draw bar
    aCtx.fillStyle = b.color;
    aCtx.beginPath();
    aCtx.roundRect(x, yTop, barW, barH, 4);
    aCtx.fill();

    // Value label
    aCtx.fillStyle = "#ffffff";
    aCtx.font = "bold 11px JetBrains Mono";
    aCtx.textAlign = "center";
    aCtx.fillText(Math.round(b.val) + 'm', x + barW / 2, yTop - 8);

    // Category label
    aCtx.fillStyle = "#94a3b8";
    aCtx.font = "500 11.5px Tajawal, sans-serif";
    aCtx.fillText(b.label, x + barW / 2, pad.top + plotH + 20);
  });
}

function drawParetoChart(w, h) {
  const pad = { top: 35, right: 45, bottom: 45, left: 45 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  const categories = [
    { name: currentLang === 'ar' ? 'أعطال ميكانيكية' : 'Breakdown', min: 28 },
    { name: currentLang === 'ar' ? 'تجهيز وقوالب' : 'Setup', min: 20 },
    { name: currentLang === 'ar' ? 'توقفات طفيفة' : 'Minor Stops', min: 14 },
    { name: currentLang === 'ar' ? 'بطء سرعة' : 'Speed Loss', min: 10 },
    { name: currentLang === 'ar' ? 'عيوب فنية' : 'Defects', min: 6 }
  ];

  const totalMin = categories.reduce((sum, c) => sum + c.min, 0);
  let cumPct = 0;
  const cumPoints = [];

  const barW = (plotW / categories.length) * 0.55;
  const spacing = plotW / categories.length;

  categories.forEach((cat, idx) => {
    const x = pad.left + idx * spacing + (spacing - barW) / 2;
    const barH = (cat.min / 35) * plotH;
    const y = pad.top + plotH - barH;

    // Bar
    aCtx.fillStyle = "#f59e0b";
    aCtx.beginPath();
    aCtx.roundRect(x, y, barW, barH, 4);
    aCtx.fill();

    // Min label
    aCtx.fillStyle = "#ffffff";
    aCtx.font = "bold 11px JetBrains Mono";
    aCtx.textAlign = "center";
    aCtx.fillText(cat.min + 'm', x + barW / 2, y - 6);

    // X Label
    aCtx.fillStyle = "#94a3b8";
    aCtx.font = "500 11px Tajawal, sans-serif";
    aCtx.fillText(cat.name, x + barW / 2, pad.top + plotH + 20);

    // Cumulative Line
    cumPct += (cat.min / totalMin);
    cumPoints.push({ x: x + barW / 2, y: pad.top + (1 - cumPct) * plotH, pct: cumPct });
  });

  // Draw 80% Threshold reference line
  const y80 = pad.top + (1 - 0.80) * plotH;
  aCtx.beginPath();
  aCtx.moveTo(pad.left, y80);
  aCtx.lineTo(pad.left + plotW, y80);
  aCtx.strokeStyle = "rgba(220, 38, 38, 0.6)";
  aCtx.setLineDash([5, 5]);
  aCtx.stroke();
  aCtx.setLineDash([]);
  aCtx.fillStyle = "#f87171";
  aCtx.font = "10px JetBrains Mono";
  aCtx.textAlign = "right";
  aCtx.fillText("80% Pareto", pad.left + plotW, y80 - 4);

  // Cumulative curve
  aCtx.beginPath();
  cumPoints.forEach((pt, idx) => {
    if (idx === 0) aCtx.moveTo(pt.x, pt.y);
    else aCtx.lineTo(pt.x, pt.y);
  });
  aCtx.strokeStyle = "#10b981";
  aCtx.lineWidth = 2.5;
  aCtx.stroke();

  // Dots
  cumPoints.forEach(pt => {
    aCtx.beginPath();
    aCtx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
    aCtx.fillStyle = "#10b981";
    aCtx.fill();
    aCtx.strokeStyle = "#fff";
    aCtx.stroke();
  });
}

function exportAuditReport() {
  const oee = (avail * perf * qual * 100).toFixed(1);
  const reportLines = [
    "=========================================================",
    "       OEE INDUSTRIAL ANALYTICS AUDIT REPORT",
    "   Infused with Al-Qatt Al-Asiri Contemporary Heritage Design",
    "=========================================================",
    `Generated: ${new Date().toISOString()}`,
    `Engineer / Author: Tareq Abu Ashee (أ. طارق ابوعشي)`,
    "",
    "1. KEY OVERALL METRICS:",
    `   - Overall Equipment Effectiveness (OEE): ${oee}%`,
    `   - Availability Rate (A): ${(avail * 100).toFixed(1)}%`,
    `   - Performance Rate (P): ${(perf * 100).toFixed(1)}%`,
    `   - Quality Rate (Q): ${(qual * 100).toFixed(1)}%`,
    `   - Global Benchmark: ${document.getElementById('worldClassBadge').textContent}`,
    "",
    "2. SHIFT TIME DECOMPOSITION (480 mins):",
    `   - Planned Production Time: 480 minutes`,
    `   - Net Operating Productive Time: ${document.getElementById('netEffectiveVal').textContent}`,
    `   - Total Cumulative Shift Losses: ${document.getElementById('totalLossVal').textContent}`,
    "",
    "3. STRATEGIC RECOVERY RECOMMENDATIONS:",
    "   - Target SMED methodology on Tool Changeover to recover ~20 minutes/shift.",
    "   - Deploy predictive vibration telemetry on drive motors to eliminate unplanned breakdowns.",
    "   - Standardize hot-die startup protocols to suppress initial scrap batches."
  ];

  const report = reportLines.join("\n");
  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `OEE_Industrial_Asiri_Audit_${Date.now()}.txt`;
  a.click();
}
