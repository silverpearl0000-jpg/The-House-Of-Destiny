
const houses = {
  GARUDA: {
    symbol: "𓅃",
    motto: "Courage. Freedom. Devotion.",
    description:
      "You face challenges with courage and value independence. You stand by your principles and inspire others to rise above their fears.",
    traits: ["Courage", "Freedom", "Devotion"],
    color: "#d8b66a"
  },
  SARASWATI: {
    symbol: "✧",
    motto: "Wisdom. Knowledge. Creativity.",
    description:
      "You seek knowledge, question assumptions, and enjoy discovering new ideas. Your curiosity and creativity help you see possibilities others may miss.",
    traits: ["Wisdom", "Curiosity", "Creativity"],
    color: "#a9c9ff"
  },
  NARASIMHA: {
    symbol: "♛",
    motto: "Strength. Justice. Fearlessness.",
    description:
      "You value strength, responsibility, and fairness. You are willing to take the lead and stand up for what you believe is right.",
    traits: ["Strength", "Justice", "Leadership"],
    color: "#a4d4a9"
  },
  ANANTA: {
    symbol: "∞",
    motto: "Patience. Loyalty. Endurance.",
    description:
      "You value trust, consistency, and lasting relationships. You remain patient through difficulties and understand the importance of standing together.",
    traits: ["Patience", "Loyalty", "Endurance"],
    color: "#cbb0f0"
  }
};

// 20 personality questions
const questions = [
  {
    q: "When a difficult challenge appears, what do you do?",
    a: [
      ["Face it boldly and take action.", "GARUDA"],
      ["Study it and find the smartest solution.", "SARASWATI"],
      ["Take charge and push through.", "NARASIMHA"],
      ["Stay calm and work through it patiently.", "ANANTA"]
    ]
  },
  {
    q: "Which achievement would make you proudest?",
    a: [
      ["Doing something others thought impossible.", "GARUDA"],
      ["Discovering something nobody understood.", "SARASWATI"],
      ["Standing up for what is right.", "NARASIMHA"],
      ["Building something that lasts for years.", "ANANTA"]
    ]
  },
  {
    q: "Your group faces an unexpected problem. You...",
    a: [
      ["Encourage everyone to act bravely.", "GARUDA"],
      ["Analyse the situation and suggest a plan.", "SARASWATI"],
      ["Organise the team and make a decision.", "NARASIMHA"],
      ["Listen to everyone and keep the group united.", "ANANTA"]
    ]
  },
  {
    q: "Which special ability would you choose?",
    a: [
      ["The courage to face any challenge.", "GARUDA"],
      ["The ability to understand hidden truths.", "SARASWATI"],
      ["The strength to protect the vulnerable.", "NARASIMHA"],
      ["The patience to endure any passage of time.", "ANANTA"]
    ]
  },
  {
    q: "What matters most in a friendship?",
    a: [
      ["Encouraging each other to be fearless.", "GARUDA"],
      ["Sharing ideas and learning together.", "SARASWATI"],
      ["Being honest and standing up for each other.", "NARASIMHA"],
      ["Trust and being there consistently.", "ANANTA"]
    ]
  },
  {
    q: "When you make a mistake, you usually...",
    a: [
      ["Find the courage to try again.", "GARUDA"],
      ["Understand why it happened.", "SARASWATI"],
      ["Take responsibility and correct it.", "NARASIMHA"],
      ["Reflect patiently and improve step by step.", "ANANTA"]
    ]
  },
  {
    q: "Which place would you most like to explore?",
    a: [
      ["A mountain peak above the clouds.", "GARUDA"],
      ["An ancient library full of lost knowledge.", "SARASWATI"],
      ["A legendary fortress protecting a kingdom.", "NARASIMHA"],
      ["A timeless forest filled with hidden paths.", "ANANTA"]
    ]
  },
  {
    q: "What would you want your legacy to be?",
    a: [
      ["A life filled with brave adventures.", "GARUDA"],
      ["Ideas that inspire future generations.", "SARASWATI"],
      ["A legacy of justice and protection.", "NARASIMHA"],
      ["A lasting example of loyalty and trust.", "ANANTA"]
    ]
  },
  {
    q: "When making an important decision, you trust...",
    a: [
      ["Your courage and instincts.", "GARUDA"],
      ["Evidence, reasoning, and knowledge.", "SARASWATI"],
      ["Your sense of responsibility and justice.", "NARASIMHA"],
      ["Careful reflection and long-term consequences.", "ANANTA"]
    ]
  },
  {
    q: "Which quality do you admire most in a leader?",
    a: [
      ["The courage to take bold action.", "GARUDA"],
      ["The wisdom to make informed decisions.", "SARASWATI"],
      ["The strength to accept responsibility.", "NARASIMHA"],
      ["The patience to listen to everyone.", "ANANTA"]
    ]
  },
  {
    q: "You discover a mysterious ancient book. What do you do?",
    a: [
      ["Take the risk of exploring its secrets.", "GARUDA"],
      ["Study every symbol and investigate its meaning.", "SARASWATI"],
      ["Determine how its knowledge could be used responsibly.", "NARASIMHA"],
      ["Preserve it carefully for future generations.", "ANANTA"]
    ]
  },
  {
    q: "Which environment helps you thrive?",
    a: [
      ["An open sky full of possibilities.", "GARUDA"],
      ["A place filled with ideas and discoveries.", "SARASWATI"],
      ["A challenging environment where you can lead.", "NARASIMHA"],
      ["A peaceful place with dependable companions.", "ANANTA"]
    ]
  },
  {
    q: "When someone is treated unfairly, you...",
    a: [
      ["Find the courage to speak up.", "GARUDA"],
      ["Understand the facts before responding.", "SARASWATI"],
      ["Take action to defend what is right.", "NARASIMHA"],
      ["Support the person and remain by their side.", "ANANTA"]
    ]
  },
  {
    q: "What motivates you to learn something new?",
    a: [
      ["The excitement of attempting something unfamiliar.", "GARUDA"],
      ["The desire to understand how it works.", "SARASWATI"],
      ["The chance to develop useful skills.", "NARASIMHA"],
      ["The satisfaction of improving over time.", "ANANTA"]
    ]
  },
  {
    q: "Which challenge sounds most appealing?",
    a: [
      ["Venturing into the unknown.", "GARUDA"],
      ["Solving a complicated mystery.", "SARASWATI"],
      ["Leading a team through a difficult mission.", "NARASIMHA"],
      ["Completing a long journey that requires persistence.", "ANANTA"]
    ]
  },
  {
    q: "If your team disagrees, you would...",
    a: [
      ["Encourage everyone to move forward bravely.", "GARUDA"],
      ["Compare ideas and find a logical solution.", "SARASWATI"],
      ["Help the team reach a fair decision.", "NARASIMHA"],
      ["Listen patiently and find common ground.", "ANANTA"]
    ]
  },
  {
    q: "Which symbol speaks to you most?",
    a: [
      ["A soaring eagle.", "GARUDA"],
      ["A radiant star of knowledge.", "SARASWATI"],
      ["A powerful guardian.", "NARASIMHA"],
      ["An endless cosmic spiral.", "ANANTA"]
    ]
  },
  {
    q: "What do you do when progress is slow?",
    a: [
      ["Take a bold new approach.", "GARUDA"],
      ["Analyse what could be improved.", "SARASWATI"],
      ["Set a clear target and push forward.", "NARASIMHA"],
      ["Remain consistent and give it time.", "ANANTA"]
    ]
  },
  {
    q: "Which statement feels closest to your beliefs?",
    a: [
      ["Fear should not decide my future.", "GARUDA"],
      ["There is always more to understand.", "SARASWATI"],
      ["Strength comes with responsibility.", "NARASIMHA"],
      ["Trust is built through consistent actions.", "ANANTA"]
    ]
  },
  {
    q: "At the end of your journey, what would matter most?",
    a: [
      ["Knowing that I dared to reach higher.", "GARUDA"],
      ["Knowing that I learned and discovered.", "SARASWATI"],
      ["Knowing that I stood for what was right.", "NARASIMHA"],
      ["Knowing that I remained loyal and dependable.", "ANANTA"]
    ]
  }
];

/* =========================================
   ELEMENTS
========================================= */

const $ = id => document.getElementById(id);

const hero = $("hero");
const quiz = $("quiz");
const result = $("result");
const housesSection = $("houses");

const beginBtn = $("beginBtn");
const backBtn = $("backBtn");
const restartBtn = $("restartBtn");

const questionText = $("questionText");
const questionNumber = $("questionNumber");
const answers = $("answers");
const progressBar = $("progressBar");
const progressLabel = $("progressLabel");

const welcomeScreen = $("welcomeScreen");
const welcomeForm = $("welcomeForm");
const seekerNameInput = $("seekerNameInput");

const ceremonyReveal = $("ceremonyReveal");
const ceremonyParticles = $("ceremonyParticles");
const ceremonyLabel = $("ceremonyLabel");
const revealWhisper = $("revealWhisper");
const revealHouse = $("revealHouse");
const revealEmblem = $("revealEmblem");
const revealHouseName = $("revealHouseName");
const revealHouseMotto = $("revealHouseMotto");
const revealVictoryMessage = $("revealVictoryMessage");
const ceremonySkip = $("ceremonySkip");

/* =========================================
   STATE
========================================= */

let currentQuestion = 0;
let selections = [];
let seekerName = "";
let selectedWinner = null;
let ceremonyTimers = [];
let particleInterval = null;
let ceremonyFinished = false;

const victoryMessages = {
  GARUDA:
    "Stand tall, {{name}}. Your courage can carry you beyond the horizon. The sky was never your limit.",
  SARASWATI:
    "{{name}}, let your curiosity illuminate the unknown. A mind that keeps discovering holds infinite possibilities.",
  NARASIMHA:
    "Stand with purpose, {{name}}. True strength is guided by justice, courage, and responsibility.",
  ANANTA:
    "{{name}}, great journeys are built one step at a time. Your patience and loyalty can leave a lasting legacy."
};

/* =========================================
   UTILITIES
========================================= */

function shuffle(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function schedule(callback, delay) {
  const timer = window.setTimeout(callback, delay);
  ceremonyTimers.push(timer);
}

function clearCeremonyTimers() {
  ceremonyTimers.forEach(window.clearTimeout);
  ceremonyTimers = [];

  if (particleInterval !== null) {
    window.clearInterval(particleInterval);
    particleInterval = null;
  }
}

/* =========================================
   PERSONAL WELCOME
========================================= */

function enterWebsite(event) {
  event.preventDefault();

  const name = seekerNameInput.value.trim();

  if (!name) {
    seekerNameInput.focus();
    return;
  }

  seekerName = name.slice(0, 40);

  welcomeScreen.classList.add("dismissed");
  hero.classList.remove("hidden");
  housesSection.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================
   QUIZ
========================================= */

function startQuiz() {
  currentQuestion = 0;
  selections = [];

  hero.classList.add("hidden");
  housesSection.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");

  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const number = String(currentQuestion + 1).padStart(2, "0");

  questionNumber.textContent = number;
  questionText.textContent = question.q;

  progressLabel.textContent =
    `QUESTION ${number} / ${String(questions.length).padStart(2, "0")}`;

  progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  answers.replaceChildren();

  shuffle(question.a).forEach(([label, house]) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-button";
    button.textContent = label;

    button.addEventListener("click", () => {
      selections[currentQuestion] = house;

      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
      } else {
        showResult();
      }
    });

    answers.appendChild(button);
  });

  backBtn.style.visibility =
    currentQuestion === 0 ? "hidden" : "visible";
}

function calculateScores() {
  const scores = {
    GARUDA: 0,
    SARASWATI: 0,
    NARASIMHA: 0,
    ANANTA: 0
  };

  selections.forEach(house => {
    if (Object.hasOwn(scores, house)) {
      scores[house]++;
    }
  });

  return scores;
}

function chooseWinningHouse() {
  const scores = calculateScores();
  const highestScore = Math.max(...Object.values(scores));

  const tiedHouses = Object.keys(scores).filter(
    house => scores[house] === highestScore
  );

  return shuffle(tiedHouses)[0];
}

/* =========================================
   FINAL RESULT
========================================= */

function populateResult(winningHouse) {
  const winner = houses[winningHouse];

  $("resultSymbol").textContent = winner.symbol;

  const resultName = $("resultName");
  resultName.textContent = winningHouse;
  resultName.style.color = winner.color;

  $("resultMotto").textContent = winner.motto;
  $("resultDescription").textContent = winner.description;

  let greeting = $("resultGreeting");

  if (!greeting) {
    greeting = document.createElement("p");
    greeting.id = "resultGreeting";
    greeting.className = "result-greeting";

    $("resultMotto").insertAdjacentElement("beforebegin", greeting);
  }

  greeting.textContent =
    `Your destiny has been revealed, ${seekerName}.`;

  const traits = $("resultTraits");
  traits.replaceChildren();

  winner.traits.forEach(trait => {
    const span = document.createElement("span");
    span.className = "trait";
    span.textContent = trait;
    traits.appendChild(span);
  });
}

function showResult() {
  quiz.classList.add("hidden");
  selectedWinner = chooseWinningHouse();

  // If the ceremony markup is missing, still show the result.
  if (!ceremonyReveal || !ceremonyParticles) {
    populateResult(selectedWinner);
    result.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  beginCeremony(selectedWinner);
}

/* =========================================
   CINEMATIC CRYSTAL CEREMONY
========================================= */

function createMagicParticle() {
  if (!ceremonyParticles || ceremonyFinished) return;

  const particle = document.createElement("span");
  const isStar = Math.random() > 0.78;

  particle.className = isStar
    ? "magic-particle star"
    : "magic-particle";

  if (isStar) particle.textContent = "✦";

  particle.style.left = `${Math.random() * 100}%`;

  particle.style.setProperty(
    "--particle-size",
    `${2 + Math.random() * 4}px`
  );

  particle.style.setProperty(
    "--particle-duration",
    `${3.5 + Math.random() * 3.5}s`
  );

  particle.style.setProperty(
    "--particle-drift",
    `${Math.random() * 120 - 60}px`
  );

  ceremonyParticles.appendChild(particle);

  window.setTimeout(() => particle.remove(), 7500);
}

function beginCeremony(winningHouse) {
  const winner = houses[winningHouse];

  clearCeremonyTimers();
  ceremonyFinished = false;

  ceremonyParticles.replaceChildren();
  revealHouse.classList.remove("show");

  ceremonyReveal.style.setProperty("--house-glow", winner.color);

  ceremonyLabel.textContent = "THE DESTINY CRYSTAL AWAKENS";
  revealWhisper.textContent = "Something ancient is stirring...";

  revealEmblem.textContent = winner.symbol;
  revealHouseName.textContent = winningHouse;
  revealHouseMotto.textContent = winner.motto;

  revealVictoryMessage.textContent =
    victoryMessages[winningHouse].replaceAll(
      "{{name}}",
      seekerName
    );

  result.classList.add("hidden");
  ceremonyReveal.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "instant" });

  // Gold particles begin rising immediately.
  particleInterval = window.setInterval(createMagicParticle, 170);

  // The crystal awakens.
  schedule(() => {
    ceremonyLabel.textContent = "AN ANCIENT POWER AWAKENS";
    revealWhisper.textContent =
      "The crystal is searching for your true nature...";
  }, 1100);

  // The mysterious pulse builds.
  schedule(() => {
    ceremonyLabel.textContent = "THE MOMENT OF REVELATION";
    revealWhisper.textContent =
      "Your path is becoming clear...";
  }, 2500);

  // The house emblem and title arrive dramatically.
  schedule(() => {
    revealHouse.classList.add("show");
    ceremonyLabel.textContent = "THE CRYSTAL HAS CHOSEN";
    revealWhisper.textContent = "";
  }, 3600);

  // Show the full result after the cinematic reveal.
  schedule(finishCeremony, 8500);
}

function finishCeremony() {
  if (ceremonyFinished || !selectedWinner) return;

  ceremonyFinished = true;
  clearCeremonyTimers();

  ceremonyReveal.classList.add("hidden");

  populateResult(selectedWinner);
  result.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================
   BACK AND RESTART
========================================= */

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function restartQuiz() {
  clearCeremonyTimers();
  ceremonyFinished = true;

  if (ceremonyReveal) {
    ceremonyReveal.classList.add("hidden");
  }

  result.classList.add("hidden");
  quiz.classList.add("hidden");

  hero.classList.remove("hidden");
  housesSection.classList.remove("hidden");

  currentQuestion = 0;
  selections = [];
  selectedWinner = null;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================
   EVENT LISTENERS
========================================= */

welcomeForm?.addEventListener("submit", enterWebsite);
beginBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
restartBtn.addEventListener("click", restartQuiz);
ceremonySkip?.addEventListener("click", finishCeremony);

window.addEventListener("pagehide", clearCeremonyTimers);
