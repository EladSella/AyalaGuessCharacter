const characters = [
  {
    id: "tanjiro",
    name: "Tanjiro",
    aliases: ["tanjiro", "tangero", "sanjiro"],
    colors: ["#10b981", "#000000", "#991b1b"],
    image: "assets/tanjiro.png"
  },
  {
    id: "nezuko",
    name: "Nezuko",
    aliases: ["nezuko", "nazuko", "nesuko"],
    colors: ["#fbcfe8", "#f43f5e", "#22c55e"],
    image: "assets/nezuko.png"
  },
  {
    id: "midoriya",
    name: "Midoriya",
    aliases: ["midoriya", "deku", "izuku"],
    colors: ["#166534", "#dc2626", "#ffffff"],
    image: "assets/midoriya.png"
  },
  {
    id: "gon",
    name: "Gon",
    aliases: ["gon", "gun", "gone"],
    colors: ["#15803d", "#ea580c", "#000000"],
    image: "assets/gon.png"
  },
  {
    id: "komi",
    name: "Komi",
    aliases: ["komi", "comey", "kami"],
    colors: ["#312e81", "#ffffff", "#be123c"],
    image: "assets/komi.png"
  }
];

let currentStageIndex = 0;
let score = 0;
let isListening = false;

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
const totalStagesEl = document.getElementById('total-stages');
const endScreen = document.getElementById('endScreen');
const finalScoreEl = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

totalStagesEl.textContent = characters.length;

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

function loadStage() {
  if (currentStageIndex >= characters.length) {
    showEndScreen();
    return;
  }

  const char = characters[currentStageIndex];
  stageEl.textContent = currentStageIndex + 1;
  
  // Reset UI
  characterReveal.style.display = 'none';
  colorPalette.style.display = 'flex';
  colorPalette.innerHTML = '';
  recognizedText.textContent = '';
  statusText.textContent = "Tap to Speak";
  micBtn.classList.remove('correct');

  // Render colors
  char.colors.forEach((color, index) => {
    const blob = document.createElement('div');
    blob.className = 'color-blob';
    blob.style.backgroundColor = color;
    blob.style.animationDelay = `${index * 0.2}s`;
    colorPalette.appendChild(blob);
  });
}

function checkAnswer(spokenText) {
  const char = characters[currentStageIndex];
  // Check if any of the aliases are included in what the user said
  const isMatch = char.aliases.some(alias => spokenText.includes(alias));

  if (isMatch) {
    handleCorrectAnswer(char);
  } else {
    statusText.textContent = "Not quite! Try again.";
  }
}

function handleCorrectAnswer(char) {
  score += 100;
  scoreEl.textContent = score;
  
  statusText.textContent = "Correct! It's " + char.name + "!";
  micBtn.classList.add('correct');
  
  // Reveal
  colorPalette.style.display = 'none';
  characterImage.src = char.image;
  characterName.textContent = char.name;
  characterReveal.style.display = 'block';

  // Proceed to next stage after 3 seconds
  setTimeout(() => {
    currentStageIndex++;
    loadStage();
  }, 3000);
}

function showEndScreen() {
  finalScoreEl.textContent = score;
  endScreen.style.display = 'flex';
}

function restartGame() {
  score = 0;
  currentStageIndex = 0;
  scoreEl.textContent = score;
  endScreen.style.display = 'none';
  
  // Optional: Shuffle characters here if desired
  loadStage();
}

micBtn.addEventListener('click', () => {
  if (!recognition) return;
  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
});

restartBtn.addEventListener('click', restartGame);

// Start game
loadStage();
