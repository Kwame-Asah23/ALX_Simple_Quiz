

const feedBack = document.getElementById('feedback');
const submit = document.getElementById('submit-answer');


// function that checks if the selected option is the right answer

function checkAnswer() {
    const correctAnswer = "4";

    // Get selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value
    if (userAnswer === correctAnswer) {
        feedBack.textContent = "Correct! Well done."
    } else {
        feedBack.textContent = "That's incorrect. Try again!"
    }
}


submit.addEventListener("click", checkAnswer);