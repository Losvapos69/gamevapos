/* =============================================
   MONOS ENAMORADOS – game.js
   ============================================= */

// ===== DATOS DEL JUEGO =====
const SCENES = [
  {
    id: 1,
    bg: 'bg-park',
    npcText: '¡Hola! ¿Vienes seguido al parque? 🌳',
    question: '¿Qué le dices?',
    options: [
      { text: '¡Sí! Me encanta la naturaleza. ¿Y tú? 😊', value: +20, quality: 'best',  label: '' },
      { text: 'A veces... cuando no tengo nada mejor que hacer.', value: +5,  quality: 'good',  label: '' },
      { text: 'Vine por accidente, la verdad 😅', value: -10, quality: 'bad',   label: '' },
      { text: 'No me gustan los parques. Hay bichos.', value: -20, quality: 'worst', label: '' },
    ],
    reactions: { best: '😍', good: '🙂', bad: '😐', worst: '😑' },
    npcReaction: { best: '¡Qué bien! ¡A mí también! 🥰', good: 'Mmm... bueno, está chido el parque.', bad: 'Ah... vaya... 😅', worst: 'Oh... vaya. Qué interesante. 😒' },
    fx: { best: '💕', good: '✨', bad: '💨', worst: '❄️' },
  },
  {
    id: 2,
    bg: 'bg-cafe',
    npcText: '¿Te gustaría tomar un café juntos? ☕',
    question: '¿Cómo respondes?',
    options: [
      { text: '¡Me encantaría! Conozco un lugar increíble 😄', value: +20, quality: 'best',  label: '' },
      { text: 'Bueno, si no tienes otra cosa que hacer…', value: +5,  quality: 'good',  label: '' },
      { text: 'Solo si es rápido, tengo cosas que hacer.', value: -10, quality: 'bad',   label: '' },
      { text: 'El café no me gusta. Ni las personas.', value: -20, quality: 'worst', label: '' },
    ],
    reactions: { best: '🥰', good: '😊', bad: '😕', worst: '😤' },
    npcReaction: { best: '¡Qué emoción! ¡Vamos! 🎉', good: 'Ah... bueno, si quieres sí.', bad: 'Claro... sin compromisos 🙄', worst: '...¿Ni las personas? 😨' },
    fx: { best: '💖', good: '☕', bad: '😶', worst: '💔' },
  },
  {
    id: 3,
    bg: 'bg-cinema',
    npcText: '¿Qué tipo de películas te gustan? 🎬',
    question: '¿Qué le cuentas?',
    options: [
      { text: 'Me encantan las de aventura y romance ¿y a ti? 🎥', value: +20, quality: 'best',  label: '' },
      { text: 'Depende del día... las de acción o algo.', value: +5,  quality: 'good',  label: '' },
      { text: 'Las que no sean muy largas. Me aburro.', value: -10, quality: 'bad',   label: '' },
      { text: 'No veo películas. Son una pérdida de tiempo.', value: -20, quality: 'worst', label: '' },
    ],
    reactions: { best: '😍', good: '🙂', bad: '😑', worst: '😠' },
    npcReaction: { best: '¡A mí también el romance! 💕', good: 'Ah, ok… el cine está chido.', bad: 'Entonces… ¿ni intentamos?', worst: 'Wow... qué pasional eres 🙃' },
    fx: { best: '🌟', good: '🎞️', bad: '😴', worst: '🚫' },
  },
  {
    id: 4,
    bg: 'bg-beach',
    npcText: '¿Qué harías en una cita perfecta? 🌅',
    question: '¿Cuál es tu respuesta ideal?',
    options: [
      { text: '¡Una cena bajo las estrellas y platicar toda la noche! 🌙', value: +20, quality: 'best',  label: '' },
      { text: 'Algo relajado, sin mucha presión…', value: +5,  quality: 'good',  label: '' },
      { text: 'Que sea corta. No soy muy de salidas.', value: -10, quality: 'bad',   label: '' },
      { text: 'Las citas son sobrevaloradas.', value: -20, quality: 'worst', label: '' },
    ],
    reactions: { best: '🥰', good: '😌', bad: '😬', worst: '😱' },
    npcReaction: { best: '¡Eso suena PERFECTO! 😍', good: 'Sí, sin presión está bien…', bad: 'Ah, muy emocionante… 🙃', worst: 'Oye... ¿y por qué estás aquí? 🤔' },
    fx: { best: '🌺', good: '🏖️', bad: '😶', worst: '💀' },
  },
  {
    id: 5,
    bg: 'bg-restaurant',
    npcText: 'Me alegra haberte conocido hoy 💕 ¿Qué piensas tú?',
    question: '¡Momento decisivo!',
    options: [
      { text: '¡Yo también! Ojalá podamos vernos más seguido 😊❤️', value: +20, quality: 'best',  label: '' },
      { text: 'Sí, fue… distinto 😅 No es malo.', value: +5,  quality: 'good',  label: '' },
      { text: 'No estuvo tan mal, supongo.', value: -10, quality: 'bad',   label: '' },
      { text: 'La verdad es que prefería quedarme en casa.', value: -20, quality: 'worst', label: '' },
    ],
    reactions: { best: '😍💕', good: '😊', bad: '😞', worst: '😢' },
    npcReaction: { best: '¡A mí también! ¡Eres genial! 💖', good: '…Pues igual es un comienzo.', bad: 'Entiendo... 😔', worst: '...Hubiera preferido no saberlo 😭' },
    fx: { best: '💑', good: '🌸', bad: '😔', worst: '💧' },
  },
  {
    id: 6,
    bg: 'bg-ending',
    npcText: '¿Me darías una oportunidad? 🥺',
    question: '¡La respuesta final!',
    options: [
      { text: '¡Sí! ¡No hay nadie con quien prefiera estar! 💖', value: +20, quality: 'best',  label: '' },
      { text: 'Podríamos intentarlo… sin prisas.', value: +5,  quality: 'good',  label: '' },
      { text: 'Quizás… no sé… tal vez.', value: -10, quality: 'bad',   label: '' },
      { text: 'Creo que no somos compatibles.', value: -20, quality: 'worst', label: '' },
    ],
    reactions: { best: '🥰💕', good: '😊', bad: '😕', worst: '💔' },
    npcReaction: { best: '¡YAAAAY! ¡Seremos felices! 🎉', good: 'Ok… sin prisas… está bien.', bad: '…Deja lo pienso yo también.', worst: 'Ok... mensaje recibido 😢' },
    fx: { best: '💒', good: '🌹', bad: '🍂', worst: '💔' },
  },
];

const RESULTS = [
  { min: 85,  title: '¡Amor Verdadero! 💒',     emoji: '💑', msg: '¡Lo lograste! Monita está completamente enamorada de ti. Fueron honestos, cálidos y encantadores en cada momento. ¡Felicidades, mono afortunado! 🎉' },
  { min: 60,  title: '¡Buen Romance! 💕',        emoji: '🌹', msg: '¡Muy bien! Hay chispa entre ustedes. No fue perfecto, pero monita quiere verte de nuevo. ¡El amor está en el aire! 🌸' },
  { min: 40,  title: 'Amistad Especial 🤝',       emoji: '🙈', msg: 'Mmm... no fue la gran conquista, pero al menos quedaron como amigos. Hay potencial si te esfuerzas un poco más. 🍌' },
  { min: 20,  title: 'Intento Fallido 😅',        emoji: '🙊', msg: 'Oops... monita no está muy convencida. Tus respuestas la dejaron con muchas dudas. ¡Pero todo se puede mejorar! 💪' },
  { min: -99, title: 'Desastre Total 💀',         emoji: '🙉', msg: '¡Ay, ay, ay! Monita salió corriendo. Quizás la honestidad es buena, pero la diplomacia también existe, ¿no? 😂 ¡Vuelve a intentarlo!' },
];

// ===== STATE =====
let attraction   = 50;
let currentScene = 0;
let gameActive   = false;
let answering    = false;

// ===== DOM REFS =====
const screens       = document.querySelectorAll('.screen');
const btnStart      = document.getElementById('btn-start');
const btnRetry      = document.getElementById('btn-retry');
const attractFill   = document.getElementById('attraction-fill');
const attractHeart  = document.getElementById('attraction-heart');
const attractValue  = document.getElementById('attraction-value');
const sceneCounter  = document.getElementById('scene-counter');
const sceneBg       = document.getElementById('scene-bg');
const npcBubble     = document.getElementById('npc-bubble');
const npcText       = document.getElementById('npc-text');
const playerBubble  = document.getElementById('player-bubble');
const playerText    = document.getElementById('player-text');
const optionsPanel  = document.getElementById('options-panel');
const optionsTitle  = document.getElementById('options-title');
const optionsGrid   = document.getElementById('options-grid');
const reactionFx    = document.getElementById('reaction-fx');
const npcMonkey     = document.getElementById('npc-monkey');
const playerMonkey  = document.getElementById('player-monkey');
const npcMouth      = document.getElementById('npc-mouth');
const playerMouth   = document.getElementById('player-mouth');
const npcBlushL     = document.getElementById('npc-blush-l');
const npcBlushR     = document.getElementById('npc-blush-r');
const resultTitle   = document.getElementById('result-title');
const resultMsg     = document.getElementById('result-msg');
const resultScene   = document.getElementById('result-scene');
const finalFill     = document.getElementById('final-fill');
const finalScore    = document.getElementById('final-score');

// ===== HELPERS =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function spawnStars(containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 3 + 1;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random()*100}%;
      left:${Math.random()*100}%;
      --d:${(Math.random()*2+1).toFixed(1)}s;
      animation-delay:${(Math.random()*2).toFixed(1)}s;
    `;
    c.appendChild(s);
  }
}

function updateAttractionBar(animated = true) {
  const pct = clamp(attraction, 0, 100);
  if (!animated) attractFill.style.transition = 'none';
  attractFill.style.width = pct + '%';
  attractHeart.style.right = (pct < 10 ? -10 : -14) + 'px';
  attractValue.textContent = pct;
  if (!animated) setTimeout(() => attractFill.style.transition = '', 50);
}

function showScoreFlash(value) {
  const el = document.createElement('div');
  const cls = value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral';
  el.className = `score-flash ${cls}`;
  el.textContent = value > 0 ? `+${value} 💖` : `${value} 💔`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

function spawnParticles(emoji, count = 6) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emoji;
    const x = 20 + Math.random() * 60;
    const dur = 1 + Math.random() * 1;
    p.style.cssText = `left:${x}vw; top:50vh; --dur:${dur}s; animation-delay:${Math.random()*0.4}s`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), (dur + 0.5) * 1000);
  }
}

function setMonkeyMood(quality) {
  const moods = { best: '😍', good: '😊', bad: '😅', worst: '😕' };
  playerMouth.textContent = moods[quality] || '😊';
}

function setNpcMood(quality) {
  const moods = { best: '🥰', good: '😊', bad: '😐', worst: '😒' };
  npcMouth.textContent = moods[quality] || '😊';
}

function applyAttractionMood() {
  // Posición de los monos según atracción
  if (attraction >= 80) {
    npcMonkey.classList.add('closer'); npcMonkey.classList.remove('close');
    playerMonkey.classList.add('closer'); playerMonkey.classList.remove('close');
    npcBlushL.classList.add('blush-show'); npcBlushR.classList.add('blush-show');
  } else if (attraction >= 55) {
    npcMonkey.classList.add('close'); npcMonkey.classList.remove('closer');
    playerMonkey.classList.add('close'); playerMonkey.classList.remove('closer');
    npcBlushL.classList.remove('blush-show'); npcBlushR.classList.remove('blush-show');
  } else {
    npcMonkey.classList.remove('close','closer');
    playerMonkey.classList.remove('close','closer');
    npcBlushL.classList.remove('blush-show'); npcBlushR.classList.remove('blush-show');
  }
}

// ===== TYPING EFFECT =====
async function typeText(el, text, speed = 28) {
  el.textContent = '';
  for (const char of text) {
    el.textContent += char;
    await sleep(speed);
  }
}

// ===== BUILD OPTIONS =====
function buildOptions(scene) {
  optionsGrid.innerHTML = '';
  // Mezclar opciones (pero guardar quality y value)
  const shuffled = [...scene.options].sort(() => Math.random() - 0.5);

  shuffled.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span style="opacity:0.6;font-size:0.75em;">${opt.label}</span><br>${opt.text}`;
    btn.dataset.quality = opt.quality;
    btn.dataset.value   = opt.value;
    btn.dataset.fx      = scene.fx[opt.quality];
    btn.dataset.npcReaction = scene.npcReaction[opt.quality];
    btn.dataset.npcEmoji    = scene.reactions[opt.quality];

    // Delay de entrada
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    btn.style.transition = `opacity 0.3s ${i * 0.07}s ease, transform 0.3s ${i * 0.07}s ease`;

    btn.addEventListener('click', () => handleAnswer(btn, scene));
    optionsGrid.appendChild(btn);

    requestAnimationFrame(() => requestAnimationFrame(() => {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    }));
  });
}

// ===== HANDLE ANSWER =====
async function handleAnswer(btn, scene) {
  if (answering) return;
  answering = true;

  const quality    = btn.dataset.quality;
  const value      = parseInt(btn.dataset.value);
  const fx         = btn.dataset.fx;
  const npcReact   = btn.dataset.npcReaction;
  const npcEmoji   = btn.dataset.npcEmoji;

  // Deshabilitar todas las opciones
  optionsGrid.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    b.style.opacity = '0.4';
  });

  // Resaltar la elegida
  btn.style.opacity = '1';
  btn.classList.add(`opt-${quality}`);

  // Mostrar respuesta del jugador
  playerBubble.classList.remove('hidden');
  playerText.textContent = '';
  await typeText(playerText, btn.dataset.text || btn.innerText.split('\n').slice(1).join(' '), 22);

  await sleep(400);

  // Animación del jugador
  playerMonkey.classList.add('monkey-bounce');
  setTimeout(() => playerMonkey.classList.remove('monkey-bounce'), 700);

  // Mostrar reacción NPC
  await sleep(500);
  npcMouth.textContent = npcEmoji;

  // Actualizar atracción
  attraction = clamp(attraction + value, 0, 100);
  updateAttractionBar();
  showScoreFlash(value);

  // Efecto de reacción
  reactionFx.textContent = fx;
  reactionFx.classList.remove('show');
  void reactionFx.offsetWidth;
  reactionFx.classList.add('show');
  spawnParticles(fx, quality === 'best' ? 8 : quality === 'worst' ? 3 : 5);

  // Burbuja NPC de reacción
  await sleep(700);
  npcBubble.classList.remove('hidden');
  npcText.textContent = '';
  await typeText(npcText, npcReact, 25);

  // Animar NPC
  if (quality === 'best') {
    npcMonkey.classList.add('monkey-bounce-npc');
    setTimeout(() => npcMonkey.classList.remove('monkey-bounce-npc'), 700);
  } else if (quality === 'worst') {
    npcMonkey.classList.add('monkey-shake');
    setTimeout(() => npcMonkey.classList.remove('monkey-shake'), 600);
  }

  setMonkeyMood(quality);
  setNpcMood(quality);
  applyAttractionMood();

  await sleep(1800);

  // Siguiente escena o resultado
  currentScene++;
  if (currentScene < SCENES.length) {
    loadScene(currentScene);
  } else {
    await sleep(300);
    showResult();
  }
}

// ===== LOAD SCENE =====
async function loadScene(index) {
  answering = false;
  const scene = SCENES[index];

  // Update HUD
  sceneCounter.textContent = `${index + 1} / ${SCENES.length}`;

  // Fade fondo
  sceneBg.style.opacity = '0';
  sceneBg.style.transition = 'opacity 0.4s ease';
  await sleep(400);
  sceneBg.className = 'scene-bg ' + scene.bg;
  sceneBg.style.opacity = '1';

  // Reset burbujas
  npcBubble.classList.remove('hidden');
  playerBubble.classList.add('hidden');
  playerText.textContent = '';
  reactionFx.classList.remove('show');

  // Reset mouthes
  npcMouth.textContent = '😊';
  playerMouth.textContent = '😊';

  // Ocultar opciones mientras escribe
  optionsPanel.style.opacity = '0';
  optionsPanel.style.pointerEvents = 'none';
  optionsGrid.innerHTML = '';

  // Escribir texto NPC
  npcText.textContent = '';
  npcText.classList.add('typing');
  await sleep(600);
  npcText.classList.remove('typing');
  await typeText(npcText, scene.npcText, 28);

  // Mostrar opciones
  await sleep(400);
  optionsTitle.textContent = scene.question;
  buildOptions(scene);
  optionsPanel.style.transition = 'opacity 0.3s ease';
  optionsPanel.style.opacity = '1';
  optionsPanel.style.pointerEvents = 'auto';
}

// ===== SHOW RESULT =====
function showResult() {
  const pct = clamp(attraction, 0, 100);
  const result = RESULTS.find(r => pct >= r.min) || RESULTS[RESULTS.length - 1];

  resultTitle.textContent = result.title;
  resultMsg.textContent   = result.msg;
  resultScene.textContent = result.emoji;
  finalScore.textContent  = `${pct}%`;

  showScreen('screen-result');
  spawnStars('stars-result');

  setTimeout(() => {
    finalFill.style.width = pct + '%';
  }, 300);
}

// ===== START GAME =====
function startGame() {
  attraction   = 50;
  currentScene = 0;
  answering    = false;

  updateAttractionBar(false);
  applyAttractionMood();
  npcMonkey.classList.remove('close','closer');
  playerMonkey.classList.remove('close','closer');
  npcBlushL.classList.remove('blush-show');
  npcBlushR.classList.remove('blush-show');

  showScreen('screen-game');
  loadScene(0);
}

// ===== OPTION TEXT FIX =====
// (Guardamos el texto limpio en dataset al hacer click)
document.addEventListener('click', e => {
  const btn = e.target.closest('.option-btn');
  if (btn && !btn.dataset.text) {
    const lines = btn.innerText.split('\n').filter(l => !l.includes('Mejor') && !l.includes('regular') && !l.includes('mala') && !l.includes('peor'));
    btn.dataset.text = lines.join(' ').trim();
  }
});

// ===== EVENTS =====
btnStart.addEventListener('click', startGame);
btnRetry.addEventListener('click', startGame);

// ===== INIT =====
spawnStars('stars');
