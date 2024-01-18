(function() {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);

    const questionEl = document.getElementById('question2');
    const inputEl = document.getElementById('input2');
    const formEl = document.getElementById('form2');
    const scoreEL = document.getElementById('score2');

    let score = JSON.parse(localStorage.getItem('score2'));

    if (!score) {
        score = 0;
    }

    scoreEL.innerText = `Score: ${score}`;

    questionEl.innerText = `Cat e ${num1} adunat cu ${num2} ?`;

    const correctAns = num1 + num2;

    formEl.addEventListener('submit', () => {
        const userAns = +inputEl.value;
        if (userAns === correctAns) {
            score++;
            updateLocalStorage();
        } else {
            score--;
            updateLocalStorage();
        }
    });

    function updateLocalStorage() {
        localStorage.setItem('score2', JSON.stringify(score));
    }
})();
