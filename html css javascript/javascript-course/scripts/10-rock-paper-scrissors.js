    
    let score = JSON.parse(localStorage.getItem('score')) || 
    {
      Wins: 0,
      Losses: 0,
      Ties: 0
    };

    /*
  if (!score) {
    score = {
      Wins: 0,
      Losses: 0,
      Ties: 0
    };
  }
  */

  updateScoreElement();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
      if(computerMove === 'Scissors'){
        result = 'Tie.'
      } else if(computerMove === 'Rock'){
          result = 'You lose.'
      } else if(computerMove === 'Paper'){
          result = 'You win.'
      }
    } else if (playerMove === 'Paper') {
        if(computerMove === 'Paper'){
          result ='Tie.';
        } else if(computerMove === 'Scissors'){
          result = 'You lose.';
        } else if (computerMove === 'Rock'){
          result = 'You win.';
        }
    } else if (playerMove === 'Rock') {
        if(computerMove === 'Rock'){
          result = 'Tie.';
        } else if(computerMove === 'Paper'){
          result = 'You lose.';
        } else if (computerMove === 'Scissors'){
          result = 'You win.';
        }
    }

    if (result === 'You win.') {
      score.Wins += 1;
    } else if (result === 'You lose.'){
      score.Losses += 1;
    } else if (result === 'Tie.') {
      score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `you 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
computer`;

    
  }


  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  }

    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

        if(randomNumber >= 0 && randomNumber < 1 / 3){
          computerMove = 'Rock';
        } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
          computerMove = 'Paper';
        } else if(randomNumber >= 2 / 3 && randomNumber < 3 / 3){
          computerMove = 'Scissors';
        }

      return computerMove;
    }
