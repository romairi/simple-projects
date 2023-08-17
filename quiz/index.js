const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resetButton = document.getElementById('reset-button');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false }
    ]
  },
  {
    question: 'What is the capital of England?',
    answers: [
      { text: 'Paris', correct: false },
      { text: 'London', correct: true },
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false }
    ]
  },
  {
    question: 'What is the capital of Germany?',
    answers: [
      { text: 'Paris', correct: false },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: true },
      { text: 'Madrid', correct: false }
    ]
  },
  {
    question: 'What is the capital of Spain?',
    answers: [
      { text: 'Paris', correct: false },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: true }
    ]
  },
];


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.disabled = true;
    resetButton.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
  
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('answer-btn');
      button.addEventListener('click', () => selectAnswer(answer.correct, button));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(isCorrect, button) {
    if (isCorrect) {
      score++;
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
      // Find the correct answer button and style it
      const correctButton = Array.from(answerButtons.children).find(
        btn => btn.innerText === questions[currentQuestionIndex].answers.find(a => a.correct).text
      );
      correctButton.classList.add('correct');
    }
  
    nextButton.disabled = false;
    document.querySelectorAll('.answer-btn').forEach(button => {
      button.disabled = true;
    });
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
      nextButton.disabled = true;
      document.querySelectorAll('.answer-btn').forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
      });
    } else {
      questionElement.innerText = `Quiz completed! Your score: ${score}/${questions.length}`;
      answerButtons.innerHTML = '';
      nextButton.style.display = 'none';
      resetButton.style.display = 'block';

    }
  }

  function resetQuiz() {
    questionElement.innerText = '';
    answerButtons.innerHTML = '';
    nextButton.style.display = 'block';
    resetButton.style.display = 'none';
    startQuiz();
  }
  
  nextButton.addEventListener('click', showNextQuestion);
  resetButton.addEventListener('click', resetQuiz);

  startQuiz();