document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', showResults);
});

function showResults() {
    const questions = document.querySelectorAll('.question');
    let score = 0;

    questions.forEach(question => {
        const selectedOption = question.querySelector('input:checked');
        if (selectedOption) {
            const selectedValue = selectedOption.value;
            if (selectedValue === 'b') {
                score++;
            }
        }
    });

    const resultMessage = `You scored ${score} out of ${questions.length}`;
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultMessage;
    resultElement.classList.remove('hidden');
    // if (score === 2) {
    //     setTimeout(function() {
    //         window.location.href = '/index'; // Redirect to Lesson 2
    //     }, 2000); // Redirect after 3 seconds (adjust as needed)
    // }
}


document.addEventListener("DOMContentLoaded", function() {
const imageBoxes = document.querySelectorAll(".image-box");

imageBoxes.forEach(function(imageBox) {
imageBox.addEventListener("click", function() {
    this.classList.toggle("active");
});
});
});
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', showResults);
});
