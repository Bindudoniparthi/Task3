// script.js

// Quiz Questions Array
const quizQuestions = [
    {
        question: "Which vegetable is known to improve vision?",
        options: ["Carrot", "Broccoli", "Spinach", "Potato"],
        answer: "Carrot"
    },
    {
        question: "Which of these vegetables is high in iron?",
        options: ["Lettuce", "Spinach", "Cucumber", "Tomato"],
        answer: "Spinach"
    },
    {
        question: "Which vegetable is commonly used to make pickles?",
        options: ["Carrot", "Cucumber", "Zucchini", "Beetroot"],
        answer: "Cucumber"
    }
];

let currentQuestionIndex = 0;
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const resultText = document.getElementById("resultText");

// Load Question
function loadQuestion() {
    // Clear previous options and result
    optionsContainer.innerHTML = "";
    resultText.textContent = "";

    // Display the current question and options
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("optionBtn");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Check Answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
    }
    nextQuestionBtn.style.display = "block";
}

// Next Question Button Click Event
nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
        nextQuestionBtn.style.display = "none";
    } else {
        questionText.textContent = "Quiz Complete!";
        optionsContainer.innerHTML = "";
        resultText.textContent = `You've completed the quiz. Well done!`;
        nextQuestionBtn.style.display = "none";
    }
});

// Load the first question on page load
loadQuestion();


async function fetchJoke() {
    const jokeContainer = document.getElementById('joke');
    
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const jokeData = await response.json();
        
        // Display the joke
        jokeContainer.innerText = `${jokeData.setup} - ${jokeData.punchline}`;
    } catch (error) {
        jokeContainer.innerText = 'Failed to fetch a joke. Please try again later.';
        console.error('Error fetching joke:', error);
    }
}

