let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let positionX = 0;
let positionY = 0;
let velocityX = 1;
let velocityY = 1;
const ball1 = document.getElementById("ball1");
const ball1Size = ball1.style.width;

function movePanosBall() {
    positionX = positionX + velocityX
    positionY = positionY + velocityY
    ball1.style.left = positionX + 'px';
    ball1.style.top = positionY + 'px';

    if ( positionX > screenWidth - 25 || positionX < 0 ) {
        velocityX = - velocityX;
    } else if ( positionY > screenHeight - 25 || positionY < 0 ) {
        velocityY = - velocityY;
    }
}

setInterval(movePanosBall, 10);