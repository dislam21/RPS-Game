function game() {
    let computerLives = 5;
    let userLives = 5;
    
    while (userLives >= 1 && computerLives >= 1) {
      let choice = ['rock', 'paper', 'scissors'];
      let randomChoice = Math.floor(Math.random() * choice.length);
      let computerChoice = choice[randomChoice];
    
      let userChoice = (prompt('Rock, Paper, or Scissors?')).toLowerCase();
    
      if (userChoice === 'rock' && computerChoice === 'rock') {
        console.log('It\'s a tie!');}
      else if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log('Paper covers rock, computer wins!');
        userLives = userLives - 1;
        console.log(computerLives);
        console.log(userLives); }
      else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Rock smahses scissors, player wins');
        computerLives = computerLives - 1;
        console.log(computerLives);
        console.log(userLives); } }  }