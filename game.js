const characters = [
  {
    id: "tanjiro",
    name: "Tanjiro",
    aliases: ["tanjiro", "tangero", "sanjiro"],
    colors: ["#10b981", "#000000", "#991b1b", "#059669", "#7f1d1d", "#fcd34d"],
    image: "assets/tanjiro.png"
  },
  {
    id: "nezuko",
    name: "Nezuko",
    aliases: ["nezuko", "nazuko", "nesuko"],
    colors: ["#fbcfe8", "#f43f5e", "#22c55e", "#db2777", "#86efac", "#fb923c"],
    image: "assets/nezuko.png"
  },
  {
    id: "midoriya",
    name: "Midoriya",
    aliases: ["midoriya", "deku", "izuku"],
    colors: ["#166534", "#dc2626", "#ffffff", "#15803d", "#991b1b", "#fde047"],
    image: "assets/midoriya.png"
  },
  {
    id: "gon",
    name: "Gon",
    aliases: ["gon", "gun", "gone"],
    colors: ["#15803d", "#ea580c", "#000000", "#16a34a", "#c2410c", "#ffffff"],
    image: "assets/gon.png"
  },
  {
    id: "komi",
    name: "Komi",
    aliases: ["komi", "comey", "kami"],
    colors: ["#312e81", "#ffffff", "#be123c", "#4338ca", "#9f1239", "#000000"],
    image: "assets/komi.png"
  }
];

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

// DOM Elements
const colorPalette = document.getElementById('colorPalette');
const characterReveal = document.getElementById('characterReveal');
const characterImage = document.getElementById('characterImage');
const characterName = document.getElementById('characterName');
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
  recognition.lang = 'en-US';
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
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function startGame() {
  score = 0;
  stageCount = 1;
  globalTimeLeft = 120;
  gameActive = true;
  scoreEl.textContent = score;
  endScreen.style.display = 'none';
  
  // Start Global Timer
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
  
  // Reset Stage Timer
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

  // Reset UI
  characterReveal.style.display = 'none';
  colorPalette.style.display = 'grid';
  colorPalette.innerHTML = '';
  recognizedText.textContent = '';
  statusText.textContent = "Tap to Speak";
  micBtn.classList.remove('correct');

  // Render 6 colors
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
  
  // Text to Speech
  const utterance = new SpeechSynthesisUtterance(`Time is up! It is ${currentChar.name}`);
  utterance.lang = 'en-US';
  window.speechSynthesis.speak(utterance);

  setTimeout(() => {
    if (gameActive) {
      stageCount++;
      loadStage();
    }
  }, 3000);
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

  finalScoreEl.textContent = score;
  playerNameInput.style.display = 'block';
  saveScoreBtn.style.display = 'block';
  restartBtn.style.display = 'none';
  playerNameInput.value = '';
  
  updateLeaderboardDisplay();
  endScreen.style.display = 'flex';
}

// Leaderboard Logic
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
  if (!recognition || !gameActive || stageTimeLeft <= 0) return;
  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
});

restartBtn.addEventListener('click', startGame);

// Initialize
updateGlobalTimerDisplay();
startGame();
