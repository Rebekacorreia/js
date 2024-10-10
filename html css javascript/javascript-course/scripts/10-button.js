console.log(document.querySelector('.js-button-test').classList.contains('js-button-test'));

function toggleButton(selector) {
  const button = document.querySelector(selector);

  if(!button.classList.contains('is-gaming')){
    turnoffPreviousButton();
    button.classList.add('is-gaming');
  } else {
    button.classList.remove('is-gaming');
  }
  
}

function turnoffPreviousButton() {
  const previousButton = document.querySelector('.is-gaming');

  if(previousButton){
    previousButton.classList.remove('is-gaming');
  }


}