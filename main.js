document.addEventListener('DOMContentLoaded', () => {
    const duck = document.getElementById('duck');
    const quackSound = document.getElementById('quack');
    
    // Function to play the quack sound
    function playQuack() {
        quackSound.currentTime = 0;
        quackSound.play();
    }

    // Click event listener
    duck.addEventListener('click', playQuack);
}); 