document.addEventListener('DOMContentLoaded', () => {
  var newCardForm = document.getElementById('new-card-form');
  var title = document.getElementById('card-title')
  var question = document.getElementById('card-question')
  var answer = document.getElementById('card-answer')
  var submit_button = document.getElementById('new-card-submit')
  var flashCards = document.getElementsByClassName('cards-container')
  var cards = [];

  submit_button.addEventListener ('click', (event) => {
    event.preventDefault()
    title = title.value
    question = question.value
    answer = answer.value
    
    makeCard(title, question, answer)
  })

  function  makeCard  (title, question, answer) {
    cards.push ({title: title, question: question, answer: answer})
    console.log (cards)
  }

  function flashCards () {
    cards.map((value, index) => {
    var newElement
    var newCard
    })

  }




  function ans() {

  }


});

