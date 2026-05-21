const allCharacters = [
  {
    id: "tanjiro",
    name: "Tanjiro",
    series: "Demon Slayer",
    aliases: ["tanjiro", "tangero", "sanjiro", "טנג'ירו", "תנג'ירו", "טנז'ירו", "טנגירו"],
    colors: ["#10b981", "#000000", "#991b1b", "#059669", "#7f1d1d", "#fcd34d"],
    image: "assets/tanjiro.png"
  },
  {
    id: "nezuko",
    name: "Nezuko",
    series: "Demon Slayer",
    aliases: ["nezuko", "nazuko", "nesuko", "נזוקו", "נזו קו", "נאזוקו"],
    colors: ["#fbcfe8", "#f43f5e", "#22c55e", "#db2777", "#86efac", "#fb923c"],
    image: "assets/nezuko.png"
  },
  {
    id: "inosuke",
    name: "Inosuke",
    series: "Demon Slayer",
    aliases: ["inosuke", "inoski", "enosuke", "אינוסקה", "אינוסוקה", "אינוסק", "אינו סקה"],
    colors: ["#94a3b8", "#1e3a8a", "#8b5cf6", "#475569", "#1e40af", "#c084fc"],
    image: "assets/inosuke.png"
  },
  {
    id: "zenitsu",
    name: "Zenitsu",
    series: "Demon Slayer",
    aliases: ["zenitsu", "zenitsu", "zanitsu", "זניצו", "זניטסו", "זניטו"],
    colors: ["#fde047", "#f97316", "#ffffff", "#eab308", "#ea580c", "#000000"],
    image: "assets/zenitsu.png"
  },
  {
    id: "rengoku",
    name: "Rengoku",
    series: "Demon Slayer",
    aliases: ["rengoku", "kyojuro", "רנגוקו", "רנגוק", "קיוג'ורו"],
    colors: ["#ef4444", "#f97316", "#fde047", "#000000", "#ffffff", "#b91c1c"],
    image: "assets/rengoku.png"
  },
  {
    id: "tengen",
    name: "Tengen",
    series: "Demon Slayer",
    aliases: ["tengen", "uzui", "טנגן", "אוזוי", "טנגן אוזוי"],
    colors: ["#3b82f6", "#f87171", "#ffffff", "#000000", "#d1d5db", "#2563eb"],
    image: "assets/tengen.png"
  },
  {
    id: "midoriya",
    name: "Midoriya",
    series: "My Hero Academia",
    aliases: ["midoriya", "deku", "izuku", "מידוריה", "מי דוריה", "מידורי", "דקו", "איזוקו"],
    colors: ["#166534", "#dc2626", "#ffffff", "#15803d", "#991b1b", "#fde047"],
    image: "assets/midoriya.png"
  },
  {
    id: "bakugo",
    name: "Bakugo",
    series: "My Hero Academia",
    aliases: ["bakugo", "kacchan", "bakugou", "באקוגו", "בקוגו", "קאצ'אן", "קאצן", "בגוגו"],
    colors: ["#ea580c", "#000000", "#16a34a", "#c2410c", "#1f2937", "#22c55e"],
    image: "assets/bakugo.png"
  },
  {
    id: "todoroki",
    name: "Todoroki",
    series: "My Hero Academia",
    aliases: ["todoroki", "shoto", "todo", "טודורוקי", "שוטו", "טודורוק"],
    colors: ["#dc2626", "#ffffff", "#1e3a8a", "#b91c1c", "#f8fafc", "#94a3b8"],
    image: "assets/todoroki.png"
  },
  {
    id: "uraraka",
    name: "Uraraka",
    series: "My Hero Academia",
    aliases: ["uraraka", "ochaco", "אורארקה", "אוררקה", "אוצ'אקו", "אוצ'קו"],
    colors: ["#f472b6", "#3b82f6", "#ffffff", "#000000", "#1e3a8a", "#ec4899"],
    image: "assets/uraraka.png"
  },
  {
    id: "gon",
    name: "Gon",
    series: "Hunter x Hunter",
    aliases: ["gon", "gun", "gone", "גון", "גאן", "גון פריקס"],
    colors: ["#15803d", "#ea580c", "#000000", "#16a34a", "#c2410c", "#ffffff"],
    image: "assets/gon.png"
  },
  {
    id: "killua",
    name: "Killua",
    series: "Hunter x Hunter",
    aliases: ["killua", "קילואה", "קילוא"],
    colors: ["#e2e8f0", "#1e3a8a", "#000000", "#94a3b8", "#cbd5e1", "#3b82f6"],
    image: "assets/killua.png"
  },
  {
    id: "kurapika",
    name: "Kurapika",
    series: "Hunter x Hunter",
    aliases: ["kurapika", "קוראפיקה", "קורפיקה", "קוראפיק"],
    colors: ["#fde047", "#1e3a8a", "#ffffff", "#ef4444", "#000000", "#eab308"],
    image: "assets/kurapika.png"
  },
  {
    id: "hisoka",
    name: "Hisoka",
    series: "Hunter x Hunter",
    aliases: ["hisoka", "hisuka", "esoka", "היסוקה", "חיסוקה", "איסוקה", "יסוקה"],
    colors: ["#f472b6", "#ffffff", "#fde047", "#db2777", "#000000", "#38bdf8"],
    image: "assets/hisoka.png"
  },
  {
    id: "komi",
    name: "Komi",
    series: "Komi Can't Communicate",
    aliases: ["komi", "comey", "kami", "קומי", "כומאי", "קומאי"],
    colors: ["#312e81", "#ffffff", "#be123c", "#4338ca", "#9f1239", "#000000"],
    image: "assets/komi.png"
  }
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
let globalTimeLeft = 120; // 2 minutes
let stageTimeLeft = 30; // 30 seconds
let globalInterval = null;
let stageInterval = null;

// Audio
const bgMusic = new Audio();
bgMusic.loop = true;
bgMusic.volume = 0.3; // 30% volume so it's background

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
const globalTimerEl = document.getElementById('globalTimer');
const stageTimerText = document.getElementById('stageTimerText');
const stageTimerRing = document.getElementById('stageTimerRing');
const endScreen = document.getElementById('endScreen');
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
  globalTimeLeft = 120;
  gameActive = true;
  scoreEl.textContent = score;
  endScreen.style.display = 'none';
  
  clearInterval(globalInterval);
  globalInterval = setInterval(() => {
    globalTimeLeft--;
    updateGlobalTimerDisplay();
    if (globalTimeLeft <= 0) {
      endGame();
    }
  }, 1000);

  loadStage();
}

function updateGlobalTimerDisplay() {
  const m = Math.floor(globalTimeLeft / 60).toString().padStart(2, '0');
  const s = (globalTimeLeft % 60).toString().padStart(2, '0');
  globalTimerEl.textContent = `${m}:${s}`;
}

function loadStage() {
  if (!gameActive) return;

  currentChar = getRandomCharacter();
  stageEl.textContent = stageCount;
  seriesNameEl.textContent = currentChar.series;
  
  // Handle Music
  const newMusicSrc = seriesAudio[currentChar.series];
  if (newMusicSrc && !bgMusic.src.includes(newMusicSrc)) {
    bgMusic.src = newMusicSrc;
    let playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked. Will start when user clicks the mic button.
      });
    }
  }

  stageTimeLeft = 30;
  stageTimerText.textContent = stageTimeLeft;
  setProgress(100);
  
  clearInterval(stageInterval);
  stageInterval = setInterval(() => {
    stageTimeLeft--;
    stageTimerText.textContent = stageTimeLeft;
    setProgress((stageTimeLeft / 30) * 100);
    
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

  const isMatch = currentChar.aliases.some(alias => spokenText.includes(alias));

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
  
  const utterance = new SpeechSynthesisUtterance(`Time is up! It is ${currentChar.name}`);
  utterance.lang = 'en-US'; 
  window.speechSynthesis.speak(utterance);

  setTimeout(() => {
    if (gameActive) {
      stageCount++;
      loadStage();
    }
  }, 3500);
}

function revealCharacter() {
  colorPalette.style.display = 'none';
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
  // Attempt to play music if it was blocked by autoplay policies
  if (bgMusic.paused && gameActive) {
    bgMusic.play();
  }

  if (!recognition || !gameActive || stageTimeLeft <= 0) return;
  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
});

restartBtn.addEventListener('click', startGame);

updateGlobalTimerDisplay();
startGame();
