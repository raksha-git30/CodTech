const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Python"],
    answer: "Python"
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    options: ["<script src='script.js'>", "<script href='script.js'>", "<script ref='script.js'>"],
    answer: "<script src='script.js'>"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  q.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    feedbackEl.textContent = "Correct ✅";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `Wrong ❌. Correct: ${correct}`;
    feedbackEl.style.color = "red";
  }

  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('quiz-container').classList.add('hidden');
  resultEl.classList.remove('hidden');
  scoreEl.textContent = `${score} / ${questions.length}`;
}

loadQuestion();
