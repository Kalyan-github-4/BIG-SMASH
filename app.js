// ─────────────────────────────────────────────
//  BUG SVG TEMPLATES
// ─────────────────────────────────────────────
function getBugSVG(type) {
  const bugs = {
    standard: `
    <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" class="bug-svg">
      <defs>
        <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00f5ff" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#00f5ff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <!-- Body -->
      <ellipse cx="45" cy="55" rx="18" ry="24" fill="#0a3040" stroke="#00f5ff" stroke-width="1.5"/>
      <!-- Head -->
      <ellipse cx="45" cy="30" rx="12" ry="11" fill="#0c3a4a" stroke="#00f5ff" stroke-width="1.5"/>
      <!-- Eyes -->
      <circle cx="40" cy="27" r="4" fill="#ff2d78"/>
      <circle cx="50" cy="27" r="4" fill="#ff2d78"/>
      <circle cx="40" cy="27" r="2" fill="#fff" opacity="0.9"/>
      <circle cx="50" cy="27" r="2" fill="#fff" opacity="0.9"/>
      <!-- Antennae -->
      <line x1="41" y1="20" x2="33" y2="10" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="49" y1="20" x2="57" y2="10" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="33" cy="10" r="2.5" fill="#ff2d78"/>
      <circle cx="57" cy="10" r="2.5" fill="#ff2d78"/>
      <!-- Legs left -->
      <line x1="29" y1="48" x2="14" y2="40" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="28" y1="55" x2="13" y2="55" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="29" y1="62" x2="14" y2="70" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Legs right -->
      <line x1="61" y1="48" x2="76" y2="40" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="62" y1="55" x2="77" y2="55" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="61" y1="62" x2="76" y2="70" stroke="#00f5ff" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Circuit lines on body -->
      <line x1="45" y1="38" x2="45" y2="72" stroke="#00f5ff" stroke-width="0.7" opacity="0.4"/>
      <line x1="33" y1="52" x2="57" y2="52" stroke="#00f5ff" stroke-width="0.7" opacity="0.4"/>
      <circle cx="45" cy="52" r="2" fill="#00f5ff" opacity="0.7"/>
    </svg>`,

    rare: `
    <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" class="bug-svg rare">
      <!-- Body -->
      <ellipse cx="45" cy="55" rx="20" ry="25" fill="#1a0020" stroke="#ff2d78" stroke-width="1.8"/>
      <!-- Head -->
      <ellipse cx="45" cy="29" rx="14" ry="12" fill="#220025" stroke="#ff2d78" stroke-width="1.8"/>
      <!-- Eyes - multiple -->
      <circle cx="39" cy="25" r="3.5" fill="#ffe600"/>
      <circle cx="51" cy="25" r="3.5" fill="#ffe600"/>
      <circle cx="44" cy="30" r="2.5" fill="#ffe600" opacity="0.8"/>
      <circle cx="39" cy="25" r="1.5" fill="#fff"/>
      <circle cx="51" cy="25" r="1.5" fill="#fff"/>
      <!-- Crown spikes -->
      <polygon points="38,19 41,10 44,19" fill="#ff2d78" opacity="0.9"/>
      <polygon points="44,17 47,7 50,17" fill="#ff2d78"/>
      <polygon points="50,19 53,10 56,19" fill="#ff2d78" opacity="0.9"/>
      <!-- Antennae -->
      <line x1="39" y1="18" x2="27" y2="5" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="51" y1="18" x2="63" y2="5" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="27,2 30,9 24,9" fill="#ffe600"/>
      <polygon points="63,2 66,9 60,9" fill="#ffe600"/>
      <!-- Legs left -->
      <line x1="27" y1="46" x2="11" y2="36" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="26" y1="55" x2="10" y2="55" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="27" y1="64" x2="11" y2="74" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Legs right -->
      <line x1="63" y1="46" x2="79" y2="36" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="64" y1="55" x2="80" y2="55" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="63" y1="64" x2="79" y2="74" stroke="#ff2d78" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Wings -->
      <ellipse cx="30" cy="50" rx="10" ry="18" fill="#ff2d78" opacity="0.15" transform="rotate(-20 30 50)"/>
      <ellipse cx="60" cy="50" rx="10" ry="18" fill="#ff2d78" opacity="0.15" transform="rotate(20 60 50)"/>
      <!-- Circuit on body -->
      <path d="M38 42 L45 48 L52 42" stroke="#ff2d78" stroke-width="0.8" fill="none" opacity="0.6"/>
      <circle cx="45" cy="48" r="2" fill="#ff2d78" opacity="0.8"/>
    </svg>`,

    speed: `
    <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" class="bug-svg speed">
      <!-- Sleek body -->
      <ellipse cx="45" cy="54" rx="15" ry="22" fill="#1a1400" stroke="#ffe600" stroke-width="1.5"/>
      <!-- Head - more aerodynamic -->
      <ellipse cx="45" cy="30" rx="11" ry="10" fill="#201a00" stroke="#ffe600" stroke-width="1.5"/>
      <!-- Eyes -->
      <ellipse cx="40" cy="27" rx="4" ry="3" fill="#00f5ff"/>
      <ellipse cx="50" cy="27" rx="4" ry="3" fill="#00f5ff"/>
      <ellipse cx="40" cy="27" rx="2" ry="1.5" fill="#fff" opacity="0.9"/>
      <ellipse cx="50" cy="27" rx="2" ry="1.5" fill="#fff" opacity="0.9"/>
      <!-- Speed antennae - swept back -->
      <line x1="40" y1="21" x2="28" y2="8" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="50" y1="21" x2="62" y2="8" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Speed lines -->
      <line x1="8" y1="45" x2="26" y2="45" stroke="#ffe600" stroke-width="1" opacity="0.6"/>
      <line x1="6" y1="51" x2="27" y2="51" stroke="#ffe600" stroke-width="1.5" opacity="0.8"/>
      <line x1="8" y1="57" x2="26" y2="57" stroke="#ffe600" stroke-width="1" opacity="0.6"/>
      <!-- Legs -->
      <line x1="32" y1="46" x2="20" y2="39" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="31" y1="54" x2="18" y2="54" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="32" y1="62" x2="20" y2="69" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="58" y1="46" x2="70" y2="39" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="59" y1="54" x2="72" y2="54" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="58" y1="62" x2="70" y2="69" stroke="#ffe600" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Lightning bolt on body -->
      <path d="M48 40 L42 52 L46 52 L42 68 L50 52 L46 52 L50 40 Z" fill="#ffe600" opacity="0.85"/>
    </svg>`
  };
  return bugs[type] || bugs.standard;
}

function getSplatSVG(color) {
  return `<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.9">
      <circle cx="45" cy="45" r="18" fill="${color}" opacity="0.5"/>
      <ellipse cx="45" cy="45" rx="28" ry="8" fill="${color}" opacity="0.4" transform="rotate(30 45 45)"/>
      <ellipse cx="45" cy="45" rx="28" ry="8" fill="${color}" opacity="0.4" transform="rotate(90 45 45)"/>
      <ellipse cx="45" cy="45" rx="28" ry="8" fill="${color}" opacity="0.4" transform="rotate(150 45 45)"/>
      <circle cx="25" cy="30" r="5" fill="${color}" opacity="0.6"/>
      <circle cx="65" cy="28" r="4" fill="${color}" opacity="0.6"/>
      <circle cx="70" cy="60" r="6" fill="${color}" opacity="0.5"/>
      <circle cx="22" cy="65" r="4" fill="${color}" opacity="0.5"/>
      <circle cx="50" cy="18" r="3" fill="${color}" opacity="0.7"/>
    </g>
  </svg>`;
}

// ─────────────────────────────────────────────
//  AUDIO ENGINE
// ─────────────────────────────────────────────
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let ctx = null;

function getCtx() {
  if (!ctx) ctx = new AudioCtx();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function playSmash(type) {
  const ac = getCtx();
  const t = ac.currentTime;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  const dist = ac.createWaveShaper();

  // distortion curve
  const curve = new Float32Array(256);
  for (let i = 0; i < 256; i++) {
    const x = (i * 2) / 256 - 1;
    curve[i] = (Math.PI + 300) * x / (Math.PI + 300 * Math.abs(x));
  }
  dist.curve = curve;

  const freqs = { standard: 320, rare: 180, speed: 480 };
  osc.frequency.setValueAtTime(freqs[type] || 320, t);
  osc.frequency.exponentialRampToValueAtTime(60, t + 0.12);
  osc.type = 'sawtooth';

  gain.gain.setValueAtTime(0.5, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

  osc.connect(dist);
  dist.connect(gain);
  gain.connect(ac.destination);

  osc.start(t);
  osc.stop(t + 0.2);

  // Add synth zing
  const osc2 = ac.createOscillator();
  const g2 = ac.createGain();
  osc2.frequency.setValueAtTime(type === 'rare' ? 800 : 1200, t);
  osc2.frequency.exponentialRampToValueAtTime(200, t + 0.08);
  osc2.type = 'square';
  g2.gain.setValueAtTime(0.2, t);
  g2.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
  osc2.connect(g2);
  g2.connect(ac.destination);
  osc2.start(t);
  osc2.stop(t + 0.1);
}

function playCombo(combo) {
  const ac = getCtx();
  const t = ac.currentTime;
  const note = [440, 523, 659, 784, 1047][Math.min(combo - 2, 4)];
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.frequency.setValueAtTime(note, t);
  osc.type = 'sine';
  g.gain.setValueAtTime(0.3, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
  osc.connect(g);
  g.connect(ac.destination);
  osc.start(t);
  osc.stop(t + 0.15);
}

function playMiss() {
  const ac = getCtx();
  const t = ac.currentTime;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.frequency.setValueAtTime(200, t);
  osc.frequency.exponentialRampToValueAtTime(80, t + 0.2);
  osc.type = 'sawtooth';
  g.gain.setValueAtTime(0.3, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
  osc.connect(g);
  g.connect(ac.destination);
  osc.start(t);
  osc.stop(t + 0.25);
}

function playTick() {
  const ac = getCtx();
  const t = ac.currentTime;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.frequency.setValueAtTime(880, t);
  osc.type = 'sine';
  g.gain.setValueAtTime(0.08, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
  osc.connect(g);
  g.connect(ac.destination);
  osc.start(t);
  osc.stop(t + 0.06);
}

function playGameOver() {
  const ac = getCtx();
  const t = ac.currentTime;
  [220, 196, 174, 146].forEach((f, i) => {
    const osc = ac.createOscillator();
    const g = ac.createGain();
    osc.frequency.setValueAtTime(f, t + i * 0.12);
    osc.type = 'sawtooth';
    g.gain.setValueAtTime(0.3, t + i * 0.12);
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.2);
    osc.connect(g);
    g.connect(ac.destination);
    osc.start(t + i * 0.12);
    osc.stop(t + i * 0.12 + 0.25);
  });
}

// ─────────────────────────────────────────────
//  GAME STATE
// ─────────────────────────────────────────────
const GAME_DURATION = 30;
const CELL_COUNT = 9;

let state = {
  score: 0,
  combo: 1,
  comboCount: 0,
  hits: 0,
  clicks: 0,
  timeLeft: GAME_DURATION,
  running: false,
  bugs: Array(CELL_COUNT).fill(null), // null | {type, timerId}
  timers: { main: null, spawn: null },
  hiScore: parseInt(localStorage.getItem('bugSmashHi') || '0')
};

const BUG_TYPES = ['standard', 'standard', 'standard', 'speed', 'rare'];
const BUG_POINTS = { standard: 10, speed: 20, rare: 30 };
const BUG_COLORS = { standard: '#00f5ff', speed: '#ffe600', rare: '#ff2d78' };

// ─────────────────────────────────────────────
//  BUILD GRID
// ─────────────────────────────────────────────
function buildGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  for (let i = 0; i < CELL_COUNT; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;

    const inner = document.createElement('div');
    inner.className = 'cell-inner';
    inner.id = `bug-${i}`;

    const splat = document.createElement('div');
    splat.className = 'splat';
    splat.id = `splat-${i}`;

    cell.appendChild(inner);
    cell.appendChild(splat);
    cell.addEventListener('click', (e) => onCellClick(e, i));
    grid.appendChild(cell);
  }
}

// ─────────────────────────────────────────────
//  GAME LOGIC
// ─────────────────────────────────────────────
function startGame() {
  // reset
  clearAllTimers();
  state.score = 0;
  state.combo = 1;
  state.comboCount = 0;
  state.hits = 0;
  state.clicks = 0;
  state.timeLeft = GAME_DURATION;
  state.bugs = Array(CELL_COUNT).fill(null);
  state.running = true;

  buildGrid();
  updateHUD();

  document.getElementById('startOverlay').classList.add('hidden');
  document.getElementById('gameOverOverlay').classList.add('hidden');
  document.getElementById('timerBar').style.width = '100%';
  document.getElementById('timerBar').classList.remove('danger');

  getCtx(); // unlock audio

  // Main tick
  state.timers.main = setInterval(gameTick, 1000);

  // Spawn bugs
  scheduleSpawn();
}

function gameTick() {
  if (!state.running) return;
  state.timeLeft--;

  // Progress bar
  const pct = (state.timeLeft / GAME_DURATION) * 100;
  document.getElementById('timerBar').style.width = pct + '%';
  if (state.timeLeft <= 8) {
    document.getElementById('timerBar').classList.add('danger');
    playTick();
  }
  if (state.timeLeft <= 5) {
    document.getElementById('timeDisplay').style.color = '#ff2d78';
  }

  document.getElementById('timeDisplay').textContent = state.timeLeft;

  if (state.timeLeft <= 0) endGame();
}

function getSpawnInterval() {
  // Progressive difficulty: starts at 1200ms, drops to 400ms
  const elapsed = GAME_DURATION - state.timeLeft;
  return Math.max(400, 1200 - elapsed * 27);
}

function getBugDuration() {
  // bugs stay visible shorter as time goes on
  const elapsed = GAME_DURATION - state.timeLeft;
  return Math.max(700, 2000 - elapsed * 40);
}

function scheduleSpawn() {
  if (!state.running) return;
  const delay = getSpawnInterval();
  state.timers.spawn = setTimeout(() => {
    spawnBug();
    scheduleSpawn();
  }, delay);
}

function spawnBug() {
  if (!state.running) return;

  // Find empty cells
  const empty = state.bugs.map((b, i) => b === null ? i : -1).filter(i => i >= 0);
  if (empty.length === 0) return;

  const cellIdx = empty[Math.floor(Math.random() * empty.length)];
  const typeIdx = Math.floor(Math.random() * BUG_TYPES.length);
  const type = BUG_TYPES[typeIdx];

  // Render bug
  const inner = document.getElementById(`bug-${cellIdx}`);
  inner.innerHTML = getBugSVG(type);
  inner.classList.add('visible');

  const duration = getBugDuration();

  const timerId = setTimeout(() => {
    removeBug(cellIdx, false);
  }, duration);

  state.bugs[cellIdx] = { type, timerId };
}

function removeBug(cellIdx, wasHit) {
  const bug = state.bugs[cellIdx];
  if (!bug) return;

  clearTimeout(bug.timerId);
  state.bugs[cellIdx] = null;

  const inner = document.getElementById(`bug-${cellIdx}`);
  inner.classList.remove('visible');

  if (!wasHit) {
    inner.innerHTML = '';
    // Miss penalty
    if (state.running) {
      state.combo = 1;
      state.comboCount = 0;
      updateComboDisplay();
    }
  }
}

function onCellClick(e, cellIdx) {
  if (!state.running) return;
  state.clicks++;

  const bug = state.bugs[cellIdx];
  if (!bug) {
    // Miss
    playMiss();
    showMissFlash();
    state.combo = 1;
    state.comboCount = 0;
    updateComboDisplay();
    return;
  }

  // HIT!
  const { type } = bug;
  clearTimeout(bug.timerId);
  state.bugs[cellIdx] = null;

  // Combo
  state.comboCount++;
  if (state.comboCount >= 2) {
    state.combo = Math.min(state.comboCount, 5);
    if (state.comboCount >= 2) playCombo(state.comboCount);
    showComboStrip();
  }

  const pts = BUG_POINTS[type] * state.combo;
  state.score += pts;
  state.hits++;

  playSmash(type);
  showSplat(cellIdx, type);
  showScorePop(cellIdx, pts, type);

  const inner = document.getElementById(`bug-${cellIdx}`);
  inner.classList.remove('visible');
  inner.classList.add('smashed');
  setTimeout(() => {
    inner.classList.remove('smashed');
    inner.innerHTML = '';
  }, 350);

  updateHUD();
}

function showSplat(cellIdx, type) {
  const splat = document.getElementById(`splat-${cellIdx}`);
  const color = BUG_COLORS[type];
  splat.innerHTML = getSplatSVG(color);
  setTimeout(() => { splat.innerHTML = ''; }, 500);
}

function showScorePop(cellIdx, pts, type) {
  const cell = document.querySelector(`[data-index="${cellIdx}"]`);
  const pop = document.createElement('div');
  pop.className = 'score-pop';
  pop.textContent = `+${pts}`;
  if (type === 'rare') pop.style.color = '#ff2d78';
  else if (type === 'speed') pop.style.color = '#ffe600';
  pop.style.left = (Math.random() * 40 + 20) + '%';
  pop.style.top = '20px';
  cell.appendChild(pop);
  setTimeout(() => pop.remove(), 900);
}

function showMissFlash() {
  const el = document.createElement('div');
  el.className = 'miss-flash';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 350);
}

function showComboStrip() {
  const strip = document.getElementById('comboStrip');
  strip.textContent = `COMBO x${state.combo}${state.combo >= 3 ? ' 🔥 CRITICAL' : ''}`;
  strip.classList.add('show');
  clearTimeout(strip._timer);
  strip._timer = setTimeout(() => strip.classList.remove('show'), 1200);
}

function updateComboDisplay() {
  const el = document.getElementById('comboDisplay');
  el.textContent = `x${state.combo}`;
  el.style.color = state.combo >= 3 ? 'var(--pink)' : 'var(--cyan)';
  el.style.textShadow = state.combo >= 3 ? 'var(--glow-pink)' : 'var(--glow-cyan)';
}

function updateHUD() {
  const scoreEl = document.getElementById('scoreDisplay');
  scoreEl.textContent = state.score;
  scoreEl.classList.remove('pop');
  void scoreEl.offsetWidth;
  scoreEl.classList.add('pop');
  updateComboDisplay();
}

function endGame() {
  state.running = false;
  clearAllTimers();

  // Clear visible bugs
  for (let i = 0; i < CELL_COUNT; i++) {
    if (state.bugs[i]) removeBug(i, false);
  }

  playGameOver();

  // Hi score
  let newHi = false;
  if (state.score > state.hiScore) {
    state.hiScore = state.score;
    localStorage.setItem('bugSmashHi', state.hiScore);
    newHi = true;
  }

  const acc = state.clicks > 0 ? Math.round((state.hits / state.clicks) * 100) : 0;
  document.getElementById('finalScore').textContent = state.score;
  document.getElementById('finalHits').textContent = state.hits;
  document.getElementById('finalAcc').textContent = acc + '%';
  document.getElementById('hiScoreLine').textContent = newHi
    ? `✦ NEW HIGH SCORE: ${state.hiScore} ✦`
    : `HIGH SCORE: ${state.hiScore}`;

  setTimeout(() => {
    document.getElementById('gameOverOverlay').classList.remove('hidden');
  }, 600);
}

function clearAllTimers() {
  clearInterval(state.timers.main);
  clearTimeout(state.timers.spawn);
  for (let i = 0; i < CELL_COUNT; i++) {
    if (state.bugs[i]) clearTimeout(state.bugs[i].timerId);
  }
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
buildGrid();
const hs = parseInt(localStorage.getItem('bugSmashHi') || '0');
if (hs > 0) {
  document.getElementById('startHiScore').textContent = `HIGH SCORE: ${hs}`;
}