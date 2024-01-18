(function() {
    const divisorDictionary = {};

// Populate the divisor dictionary
for (let i = 0; i <= 100; i++) {
    divisorDictionary[i] = [];
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            divisorDictionary[i].push(j);
        }
    }
}

// Get a random key (num1) from the dictionary
const keys = Object.keys(divisorDictionary);
const randomIndex = Math.floor(Math.random() * keys.length);
const num1 = keys[randomIndex];

// Get a random value (num2) for the key num1
const valuesForKey = divisorDictionary[num1];
const num2 = valuesForKey[Math.floor(Math.random() * valuesForKey.length)];

    const questionEl = document.getElementById('question4');
    const inputEl = document.getElementById('input4');
    const formEl = document.getElementById('form4');
    const scoreEL = document.getElementById('score4');

    let score = JSON.parse(localStorage.getItem('score4'));

    if (!score) {
        score = 0;
    }

    scoreEL.innerText = `Score: ${score}`;

    questionEl.innerText = `Cat e ${num1} impartit la ${num2} ?`;

    const correctAns = num1 / num2;

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
        localStorage.setItem('score4', JSON.stringify(score));
    }
})();
