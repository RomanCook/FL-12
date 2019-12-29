let choice = confirm('Do you want to play a game?');
if(!choice) {
    alert('You did not become a billionaire, but can.')
} else {
    let min = 0, max = 8, attempts = 3, prize = 100, pocketUser, pocketRandom, half = 2;
    pocketRandom = Math.ceil(min + Math.random() * (max - min));
    for (let i = 1; i <= attempts; i++) {
        pocketUser = prompt(`Enter a number of pocket in range [${min};${max}] on which the ball could land`);
        if (pocketUser !== pocketRandom) {
            prize /=half;
            if (i === attempts) {
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
            }
        }
    }
}