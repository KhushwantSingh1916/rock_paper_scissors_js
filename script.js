let pScore = 0;
let cScore = 0;

function play(choose){
    const pDisplay = document.getElementById('playerChoice');
    const cDisplay = document.getElementById('computerChoice');
    const computer = ['rock', 'paper', 'scissors'];
    const computerChoice = computer[Math.floor(Math.random() * computer.length)];
    pDisplay.innerHTML = choose === 'rock' ? "🪨" : 
                         choose === 'paper' ? "📄" : 
                         choose === 'scissors' ? "✂️" : "";
    cDisplay.innerHTML = computerChoice === 'rock' ? "🪨" :
                         computerChoice === 'paper' ? "📄" : 
                         computerChoice === 'scissors' ? "✂️" : "";    
    if (choose === computerChoice) {
        document.getElementById('result').innerHTML = "It's a tie!";
    }
    else if ((choose === 'rock' && computerChoice === 'scissors') || 
             (choose === 'paper' && computerChoice === 'rock') || 
             (choose === 'scissors' && computerChoice === 'paper')) {
        document.getElementById('result').innerHTML = `You Win! <br> ${choose} beats ${computerChoice}`;
        pScore++;
        document.getElementById('player').innerHTML = pScore;
    } else {
        document.getElementById('result').innerHTML = `You Lose! <br> ${computerChoice} beats ${choose}`;
        cScore++;
        document.getElementById('computer').innerHTML = cScore;
    }
}

function resetGame() {
    pScore = 0;
    cScore = 0;
    document.getElementById('player').innerHTML = pScore;
    document.getElementById('computer').innerHTML = cScore;
    document.getElementById('result').innerHTML = "Choose your weapon!";
    document.getElementById('playerChoice').innerHTML = "";
    document.getElementById('computerChoice').innerHTML = "";
}