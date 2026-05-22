const allCharacters = [
  // Original 15
  { id: "tanjiro", name: "Tanjiro", series: "Demon Slayer", aliases: ["tanjiro", "tangero", "sanjiro", "טנג'ירו", "תנג'ירו", "טנז'ירו", "טנגירו"], colors: ["#10b981", "#000000", "#991b1b", "#059669", "#7f1d1d", "#fcd34d"], image: "assets/tanjiro.png" },
  { id: "nezuko", name: "Nezuko", series: "Demon Slayer", aliases: ["nezuko", "nazuko", "nesuko", "נזוקו", "נזו קו", "נאזוקו"], colors: ["#fbcfe8", "#f43f5e", "#22c55e", "#db2777", "#86efac", "#fb923c"], image: "assets/nezuko.png" },
  { id: "inosuke", name: "Inosuke", series: "Demon Slayer", aliases: ["inosuke", "inoski", "enosuke", "אינוסקה", "אינוסוקה", "אינוסק", "אינו סקה"], colors: ["#94a3b8", "#1e3a8a", "#8b5cf6", "#475569", "#1e40af", "#c084fc"], image: "assets/inosuke.png" },
  { id: "zenitsu", name: "Zenitsu", series: "Demon Slayer", aliases: ["zenitsu", "zanitsu", "זניצו", "זניטסו", "זניטו"], colors: ["#fde047", "#f97316", "#ffffff", "#eab308", "#ea580c", "#000000"], image: "assets/zenitsu.png" },
  { id: "rengoku", name: "Rengoku", series: "Demon Slayer", aliases: ["rengoku", "kyojuro", "רנגוקו", "רנגוק", "קיוג'ורו"], colors: ["#ef4444", "#f97316", "#fde047", "#000000", "#ffffff", "#b91c1c"], image: "assets/rengoku.png" },
  { id: "tengen", name: "Tengen", series: "Demon Slayer", aliases: ["tengen", "uzui", "טנגן", "אוזוי", "טנגן אוזוי"], colors: ["#3b82f6", "#f87171", "#ffffff", "#000000", "#d1d5db", "#2563eb"], image: "assets/tengen.png" },
  { id: "midoriya", name: "Midoriya", series: "My Hero Academia", aliases: ["midoriya", "deku", "izuku", "מידוריה", "מי דוריה", "מידורי", "דקו", "איזוקו"], colors: ["#166534", "#dc2626", "#ffffff", "#15803d", "#991b1b", "#fde047"], image: "assets/midoriya.png" },
  { id: "bakugo", name: "Bakugo", series: "My Hero Academia", aliases: ["bakugo", "kacchan", "bakugou", "באקוגו", "בקוגו", "קאצ'אן", "קאצן", "בגוגו"], colors: ["#ea580c", "#000000", "#16a34a", "#c2410c", "#1f2937", "#22c55e"], image: "assets/bakugo.png" },
  { id: "todoroki", name: "Todoroki", series: "My Hero Academia", aliases: ["todoroki", "shoto", "todo", "טודורוקי", "שוטו", "טודורוק"], colors: ["#dc2626", "#ffffff", "#1e3a8a", "#b91c1c", "#f8fafc", "#94a3b8"], image: "assets/todoroki.png" },
  { id: "uraraka", name: "Uraraka", series: "My Hero Academia", aliases: ["uraraka", "ochaco", "אורארקה", "אוררקה", "אוצ'אקו", "אוצ'קו"], colors: ["#f472b6", "#3b82f6", "#ffffff", "#000000", "#1e3a8a", "#ec4899"], image: "assets/uraraka.png" },
  { id: "gon", name: "Gon", series: "Hunter x Hunter", aliases: ["gon", "gun", "gone", "גון", "גאן", "גון פריקס"], colors: ["#15803d", "#ea580c", "#000000", "#16a34a", "#c2410c", "#ffffff"], image: "assets/gon.png" },
  { id: "killua", name: "Killua", series: "Hunter x Hunter", aliases: ["killua", "קילואה", "קילוא"], colors: ["#e2e8f0", "#1e3a8a", "#000000", "#94a3b8", "#cbd5e1", "#3b82f6"], image: "assets/killua.png" },
  { id: "kurapika", name: "Kurapika", series: "Hunter x Hunter", aliases: ["kurapika", "קוראפיקה", "קורפיקה", "קוראפיק"], colors: ["#fde047", "#1e3a8a", "#ffffff", "#ef4444", "#000000", "#eab308"], image: "assets/kurapika.png" },
  { id: "hisoka", name: "Hisoka", series: "Hunter x Hunter", aliases: ["hisoka", "hisuka", "esoka", "היסוקה", "חיסוקה", "איסוקה", "יסוקה"], colors: ["#f472b6", "#ffffff", "#fde047", "#db2777", "#000000", "#38bdf8"], image: "assets/hisoka.png" },
  { id: "komi", name: "Komi", series: "Komi Can't Communicate", aliases: ["komi", "comey", "kami", "קומי", "כומאי", "קומאי"], colors: ["#312e81", "#ffffff", "#be123c", "#4338ca", "#9f1239", "#000000"], image: "assets/komi.png" },
  // 10 New Characters
  { id: "shinobu", name: "Shinobu", series: "Demon Slayer", aliases: ["shinobu", "kocho", "שינובו", "שינובה", "קוצ'ו"], colors: ["#a855f7", "#ffffff", "#1e1b4b", "#c084fc", "#000000", "#8b5cf6"], image: "assets/shinobu.png" },
  { id: "giyu", name: "Giyu", series: "Demon Slayer", aliases: ["giyu", "tomioka", "גיו", "גיוו", "טומיאוקה"], colors: ["#1e3a8a", "#dc2626", "#166534", "#fcd34d", "#000000", "#ffffff"], image: "assets/giyu.png" },
  { id: "muzan", name: "Muzan", series: "Demon Slayer", aliases: ["muzan", "kibutsuji", "מוזאן", "מוזן", "קיבוטסוג'י", "מייקל ג'קסון"], colors: ["#000000", "#ffffff", "#dc2626", "#1f2937", "#f87171", "#111827"], image: "assets/muzan.png" },
  { id: "allmight", name: "All Might", series: "My Hero Academia", aliases: ["all might", "toshinori", "אול מייט", "אולמייט", "אול מאיט"], colors: ["#ef4444", "#3b82f6", "#eab308", "#ffffff", "#000000", "#fde047"], image: "assets/allmight.png" },
  { id: "aizawa", name: "Aizawa", series: "My Hero Academia", aliases: ["aizawa", "eraserhead", "אייזאווה", "אייזווה", "אריזר הד", "אירייזר"], colors: ["#000000", "#4b5563", "#fcd34d", "#1f2937", "#ffffff", "#6b7280"], image: "assets/aizawa.png" },
  { id: "leorio", name: "Leorio", series: "Hunter x Hunter", aliases: ["leorio", "ליוריו", "לאוריו", "לאורו"], colors: ["#1e3a8a", "#000000", "#ffffff", "#3b82f6", "#111827", "#f8fafc"], image: "assets/leorio.png" },
  { id: "chrollo", name: "Chrollo", series: "Hunter x Hunter", aliases: ["chrollo", "lucilfer", "כרולו", "קרולו", "קורולו", "לוסילפר"], colors: ["#000000", "#4c1d95", "#ffffff", "#a855f7", "#1f2937", "#6b21a8"], image: "assets/chrollo.png" },
  { id: "netero", name: "Netero", series: "Hunter x Hunter", aliases: ["netero", "isaac", "נטרו", "נאטרו", "אייזק"], colors: ["#fef08a", "#ffffff", "#000000", "#eab308", "#d1d5db", "#ca8a04"], image: "assets/netero.png" },
  { id: "tadano", name: "Tadano", series: "Komi Can't Communicate", aliases: ["tadano", "hitohito", "טדאנו", "טאדאנו", "טדנו", "היטוהיטו"], colors: ["#000000", "#ffffff", "#9ca3af", "#1f2937", "#e5e7eb", "#4b5563"], image: "assets/tadano.png" },
  { id: "najimi", name: "Najimi", series: "Komi Can't Communicate", aliases: ["najimi", "osana", "נג'ימי", "נאג'ימי", "נאגמי", "אוסאנה"], colors: ["#d946ef", "#a855f7", "#ffffff", "#000000", "#f0abfc", "#c084fc"], image: "assets/najimi.png" },
  // 5 Newest Characters
  { id: "tsuyu", name: "Tsuyu", series: "My Hero Academia", aliases: ["tsuyu", "asui", "froppy", "סויו", "אסוי", "פרופי", "צפרדע"], colors: ["#22c55e", "#16a34a", "#ffffff", "#15803d", "#000000", "#facc15"], image: "assets/tsuyu.png" },
  { id: "toga", name: "Toga", series: "My Hero Academia", aliases: ["toga", "himiko", "טוגה", "הימיקו", "טווגה"], colors: ["#fde047", "#fef08a", "#ef4444", "#dc2626", "#000000", "#f8fafc"], image: "assets/toga.png" },
  { id: "jiro", name: "Jiro", series: "My Hero Academia", aliases: ["jiro", "kyoka", "earphone jack", "ג'ירו", "גירו", "קיאוקה", "קיוקה"], colors: ["#4c1d95", "#6d28d9", "#000000", "#1f2937", "#ef4444", "#ffffff"], image: "assets/jiro.png" },
  { id: "mitsuri", name: "Mitsuri", series: "Demon Slayer", aliases: ["mitsuri", "kanroji", "מיצורי", "מיטסורי", "קאנרוג'י"], colors: ["#f472b6", "#a3e635", "#ffffff", "#000000", "#ec4899", "#84cc16"], image: "assets/mitsuri.png" },
  { id: "meruem", name: "Meruem", series: "Hunter x Hunter", aliases: ["meruem", "king", "מרואם", "מראום", "מרים", "המלך"], colors: ["#4ade80", "#22c55e", "#16a34a", "#15803d", "#14532d", "#000000"], image: "assets/meruem.png" }
];

const seriesAudio = {
  "Demon Slayer": "assets/demonslayer.webm",
  "My Hero Academia": "assets/mha.webm",
  "Hunter x Hunter": "assets/hxh.webm",
  "Komi Can't Communicate": "assets/komi.webm"
};

let availableCharacters = [];
let score = 0;
let stageCount = 1;
let isListening = false;
let currentChar = null;
let gameActive = false;

// Timers
let globalTimeLeft = 60; // 60 seconds
let stageTimeLeft = 15; // 15 seconds
let globalInterval = null;
let stageInterval = null;

// Audio
const bgMusic = new Audio();
bgMusic.loop = true;
bgMusic.volume = 0.3;

const buzzerSound = new Audio("assets/buzzer.webm");
buzzerSound.volume = 0.8;

// DOM Elements
const colorPalette = document.getElementById('colorPalette');
const characterReveal = document.getElementById('characterReveal');
const characterImage = document.getElementById('characterImage');
const characterName = document.getElementById('characterName');
const seriesNameEl = document.getElementById('seriesName');
const micBtn = document.getElementById('micBtn');
const statusText = document.getElementById('statusText');
const recognizedText = document.getElementById('recognizedText');
const scoreEl = document.getElementById('score');
const stageEl = document.getElementById('stage');
const stageTimerText = document.getElementById('stageTimerText');
const stageTimerRing = document.getElementById('stageTimerRing');
const endScreen = document.getElementById('endScreen');
const startScreen = document.getElementById('startScreen');
const finalScoreEl = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const playerNameInput = document.getElementById('playerNameInput');
const leaderboardList = document.getElementById('leaderboardList');

// Circle math
const radius = stageTimerRing.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
stageTimerRing.style.strokeDasharray = `${circumference} ${circumference}`;
stageTimerRing.style.strokeDashoffset = 0;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  stageTimerRing.style.strokeDashoffset = offset;
}

// Initialize Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'he-IL';
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  recognition.onstart = function() {
    isListening = true;
    micBtn.classList.add('listening');
    statusText.textContent = "Listening...";
    recognizedText.textContent = "";
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    recognizedText.textContent = `You said: "${transcript}"`;
    checkAnswer(transcript);
  };

  recognition.onerror = function(event) {
    statusText.textContent = "Error: " + event.error;
    micBtn.classList.remove('listening');
    isListening = false;
  };

  recognition.onend = function() {
    micBtn.classList.remove('listening');
    isListening = false;
    if(statusText.textContent === "Listening...") {
       statusText.textContent = "Tap to Speak";
    }
  };
} else {
  statusText.textContent = "Speech Recognition not supported in this browser.";
}

// Levenshtein Distance (Fuzzy Match)
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}

function getRandomCharacter() {
  if (availableCharacters.length === 0) {
    availableCharacters = [...allCharacters];
  }
  const randomIndex = Math.floor(Math.random() * availableCharacters.length);
  const char = availableCharacters[randomIndex];
  availableCharacters.splice(randomIndex, 1);
  return char;
}

function startGame() {
  availableCharacters = [...allCharacters];
  score = 0;
  stageCount = 1;
  globalTimeLeft = 60;
  gameActive = true;
  scoreEl.textContent = score;
  endScreen.style.display = 'none';
  if (startScreen) startScreen.style.display = 'none';

  clearInterval(globalInterval);
  globalInterval = setInterval(() => {
    globalTimeLeft--;
    if (globalTimeLeft <= 0) {
      endGame();
    }
  }, 1000);

  loadStage();
}

function loadStage() {
  if (!gameActive) return;

  currentChar = getRandomCharacter();
  stageEl.textContent = stageCount;
  seriesNameEl.textContent = currentChar.series;
  
  const newMusicSrc = seriesAudio[currentChar.series];
  if (newMusicSrc && !bgMusic.src.includes(newMusicSrc)) {
    bgMusic.src = newMusicSrc;
    let playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  stageTimeLeft = 15;
  stageTimerText.textContent = stageTimeLeft;
  stageTimerRing.style.stroke = '#3b82f6'; // Reset to blue
  setProgress(100);
  
  clearInterval(stageInterval);
  stageInterval = setInterval(() => {
    stageTimeLeft--;
    stageTimerText.textContent = stageTimeLeft;
    setProgress((stageTimeLeft / 15) * 100);
    
    if (stageTimeLeft > 7) {
      stageTimerRing.style.stroke = '#3b82f6';
    } else if (stageTimeLeft > 3) {
      stageTimerRing.style.stroke = '#f97316';
    } else {
      stageTimerRing.style.stroke = '#ef4444';
    }
    
    if (stageTimeLeft <= 0) {
      handleTimeout();
    }
  }, 1000);

  characterReveal.style.display = 'none';
  colorPalette.style.display = 'grid';
  colorPalette.innerHTML = '';
  recognizedText.textContent = '';
  statusText.textContent = "Tap to Speak";
  micBtn.classList.remove('correct');

  currentChar.colors.forEach((color, index) => {
    const blob = document.createElement('div');
    blob.className = 'color-blob';
    blob.style.backgroundColor = color;
    blob.style.animationDelay = `${index * 0.15}s`;
    colorPalette.appendChild(blob);
  });
}

function checkAnswer(spokenText) {
  if (!gameActive || stageTimeLeft <= 0) return;

  const words = spokenText.split(' ');
  
  // Fuzzy Match Logic: allow 1-2 typos depending on word length
  const isMatch = currentChar.aliases.some(alias => {
    if (spokenText.includes(alias)) return true; // Exact match in sentence
    
    // Check against individual words with Levenshtein
    for (let word of words) {
      const distance = levenshtein(word, alias);
      const allowedTypos = alias.length > 4 ? 2 : 1;
      if (distance <= allowedTypos) {
        return true;
      }
    }
    return false;
  });

  if (isMatch) {
    handleCorrectAnswer();
  } else {
    statusText.textContent = "Not quite! Try again.";
  }
}

function handleCorrectAnswer() {
  clearInterval(stageInterval);
  if (isListening && recognition) recognition.stop();
  
  score += 100;
  scoreEl.textContent = score;
  
  statusText.textContent = "Correct! It's " + currentChar.name + "!";
  micBtn.classList.add('correct');
  
  revealCharacter();

  setTimeout(() => {
    if (gameActive) {
      stageCount++;
      loadStage();
    }
  }, 2500);
}

function handleTimeout() {
  clearInterval(stageInterval);
  if (isListening && recognition) recognition.stop();
  
  statusText.textContent = "Time's Up!";
  revealCharacter();
  
  // Play buzzer sound
  buzzerSound.play().catch(()=>console.log("Buzzer blocked"));
  
  // Hebrew TTS
  const utterance = new SpeechSynthesisUtterance(`נגמר הזמן! עוברים לדמות הבאה`);
  utterance.lang = 'he-IL'; 
  window.speechSynthesis.speak(utterance);

  setTimeout(() => {
    if (gameActive) {
      stageCount++;
      loadStage();
    }
  }, 4000);
}

function revealCharacter() {
  colorPalette.style.display = 'none';
  // Use placeholder fallback if image doesn't exist
  characterImage.onerror = function() {
    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%233b82f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="40">?</text></svg>';
  };
  characterImage.src = currentChar.image;
  characterName.textContent = currentChar.name;
  characterReveal.style.display = 'block';
}

function endGame() {
  gameActive = false;
  clearInterval(globalInterval);
  clearInterval(stageInterval);
  if (isListening && recognition) recognition.stop();
  bgMusic.pause();

  finalScoreEl.textContent = score;
  playerNameInput.style.display = 'block';
  saveScoreBtn.style.display = 'block';
  restartBtn.style.display = 'none';
  playerNameInput.value = '';
  
  updateLeaderboardDisplay();
  endScreen.style.display = 'flex';
}

function getLeaderboard() {
  const data = localStorage.getItem('ayalaLeaderboard');
  return data ? JSON.parse(data) : [];
}

function saveToLeaderboard(name, finalScore) {
  const board = getLeaderboard();
  board.push({ name, score: finalScore });
  board.sort((a, b) => b.score - a.score);
  const top5 = board.slice(0, 5);
  localStorage.setItem('ayalaLeaderboard', JSON.stringify(top5));
  return top5;
}

function updateLeaderboardDisplay() {
  const board = getLeaderboard();
  leaderboardList.innerHTML = '';
  if (board.length === 0) {
    leaderboardList.innerHTML = '<li>No scores yet!</li>';
    return;
  }
  board.forEach((entry, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>#${idx + 1} ${entry.name}</span> <span>${entry.score} pts</span>`;
    leaderboardList.appendChild(li);
  });
}

saveScoreBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim() || "Anonymous";
  saveToLeaderboard(name, score);
  
  playerNameInput.style.display = 'none';
  saveScoreBtn.style.display = 'none';
  restartBtn.style.display = 'block';
  updateLeaderboardDisplay();
});

micBtn.addEventListener('click', () => {
  if (bgMusic.paused && gameActive) bgMusic.play();

  if (!recognition || !gameActive || stageTimeLeft <= 0) return;
  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
});

const startBtn = document.getElementById('startBtn');
if (startBtn) {
  startBtn.addEventListener('click', startGame);
}

if (restartBtn) {
  restartBtn.addEventListener('click', startGame);
}
