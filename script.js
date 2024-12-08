let question_fild = document.querySelector('.quastion')
let ans_btn = document.querySelectorAll('.btn-ans')

function randint(min, max){
    return Math.round(Math.random()*(max-min)+min)
}

let sing = ['+', '-', '*']
function getRandomSing(){
    return sing[randint(0, 2)]
}

function shuffle(array){
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [array[currentIndex], array[randomIndex]] =
        [array[randomIndex], array[currentIndex]];
    }
    return array;
}

class Question{
    constructor(){
        let a = randint(1, 20)
        let b = randint(1, 20)
        let s = getRandomSing()
        this.question = `${a} ${s} ${b}`
        if (s == '+'){this.correct = a + b}
        else if (s == '-'){this.correct = a - b}
        else if (s == '*'){this.correct = a * b}
        this.answer=[
            randint(this.correct - 10, this.correct - 1),
            randint(this.correct - 10, this.correct - 1),
            this.correct,
            randint(this.correct + 1, this.correct + 10),
            randint(this.correct + 1, this.correct + 10)
        ]
        shuffle(this.answer)
    }

    display(){
        question_fild.innerHTML = this.question
        for (let i = 0; i < this.answer.length; i += 1){
            ans_btn[i].innerHTML = this.answer[i]
        }
    }
}

let current_question
current_question = new Question()
current_question.display()

for (let i = 0; i < ans_btn.length; i += 1){
    ans_btn[i].addEventListener('click', function(){
        if (ans_btn[i].innerHTML == current_question.correct){
            ans_btn[i].style.background = 'green'
            anime({
                targets: ans_btn[i],
                background: 'white',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        }
        else{
            ans_btn[i].style.background = 'red'
        }
    current_question = new Question()
    current_question.display()
    })
    
}
