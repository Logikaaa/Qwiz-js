let question_fild = document.querySelector('.quastion')
let ans_btn = document.querySelectorAll('.btn-ans')

function randint(min, max){
    return Math.round(Math.random()*(max-min)+min)
}

let sing = ['+', '-', '*']
function getRandomSing(){
    return sing[randint(0, 2)]
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

