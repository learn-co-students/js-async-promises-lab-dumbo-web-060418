const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let questionContainer = document.querySelector('.question-container');

function appendQuestion(question){
  questionContainer.innerHTML = question['questionText'];
}

function askQuestionThen(time){
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(removeQuestion);
    }, time)
  })
}

function removeQuestion(){
  questionContainer.innerHTML = ''
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  buttons = [...trueAndFalseButtons()]
  for (let b in buttons){
    if (buttons[b].classList.contains('hide')){
      buttons[b].classList.remove('hide')
    }
    else if (!buttons[b].classList.contains('hide')){
      buttons[b].classList.add('hide')
    }
  }
}

function displayQuestionOnClick(){

}
