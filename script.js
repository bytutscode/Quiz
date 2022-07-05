// initial data
let currentQuestion = 0;
let currentScore = 0;

//event
document.querySelector('button').addEventListener('click', reset);

showQuestion();


// functions
function showQuestion () {
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionsHTML = '';
        for(let i in q.options){
            optionsHTML += `<div data-op="${parseInt(i)+1}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML;

        document.querySelectorAll('.option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        });

    } else {
            let scoreText1 = document.querySelector('.scoreText1');
            let scorePct = document.querySelector('.scorePct');
            let scoreText2 = document.querySelector('.scoreText2');

        if(currentScore == questions.length){
            scoreText1.innerHTML = 'Parabéns!';
            scorePct.innerHTML = `Acertou ${(currentScore * 100)/questions.length}%`;
            scoreText2.innerHTML = `Você respondeu ${questions.length} questões e acertou ${currentScore}.`;
        } else if (currentScore > 7) {
            scoreText1.innerHTML = 'muito bom!';
            scorePct.innerHTML = `Acertou ${(currentScore * 100)/questions.length}%`;
            scoreText2.innerHTML = `Você respondeu ${questions.length} questões e acertou ${currentScore}.`;
        } else if(currentScore >= 5) {
            scoreText1.innerHTML = 'nem tão bom nem tão ruim...!';
            scorePct.innerHTML = `Acertou ${(currentScore * 100)/questions.length}%`;
            scoreText2.innerHTML = `Você respondeu ${questions.length} questões e acertou ${currentScore}.`;
        } else {
            scoreText1.innerHTML = 'tá ruim em?!';
            scorePct.innerHTML = `Acertou ${(currentScore * 100)/questions.length}%`;
            scoreText2.innerHTML = `Você respondeu ${questions.length} questões e acertou ${currentScore}.`;
        }


        document.querySelector('.scoreArea').style.display = 'block';
        document.querySelector('.questionArea').style.display = 'none';

    }
    document.querySelector('.progress--bar').style.width = `${(currentQuestion * 100)/questions.length}%`;
}

function optionClickEvent (e) {
    if(e.target.getAttribute('data-op') == questions[currentQuestion].answer){
        currentScore++;
    }

    currentQuestion++;
    showQuestion();
}

function reset () {
    currentQuestion = 0;
    currentScore = 0;
    showQuestion();
}
