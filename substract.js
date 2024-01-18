(function() {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.floor(Math.random() * num1) + 1;

    const questionEl = document.getElementById('question3');
    const inputEl = document.getElementById('input3');
    const formEl = document.getElementById('form3');
    const scoreEL = document.getElementById('score3');

    let score = JSON.parse(localStorage.getItem('score3'));

    if (!score) {
        score = 0;
    }
    

    scoreEL.innerText = `Score: ${score}`;


    questionEl.innerText = `Cat e ${num1} minus ${num2} ?`;

    const correctAns = num1 - num2;

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
        localStorage.setItem('score3', JSON.stringify(score));
    }
})();
