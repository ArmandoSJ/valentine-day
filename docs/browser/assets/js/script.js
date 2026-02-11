const message = document.getElementById("message");
const initialMessage = document.getElementById("initial-message");
const btnNo = document.getElementById("btnNo");

function acceptButton() {
    initialMessage.style.display = "none";
    message.style.display = "block";
    document.querySelector('.buttons').style.display = "none";
}


function moveNoButton(event) {
    let letter = document.querySelector(".letter");

    // Obtener los límites de la letter
    let maxX = letter.clientWidth - btnNo.clientWidth - 20;
    let maxY = letter.clientHeight - btnNo.clientHeight - 20;

    let newX, newY;

    do {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
    } while (
        Math.abs(newX - btnNo.offsetLeft) < 50 &&
        Math.abs(newY - btnNo.offsetTop) < 50
    );

    btnNo.style.position = "absolute";
    btnNo.style.left = `${newX}px`;
    btnNo.style.top = `${newY}px`;
}

const flowerImages = [
    "https://armandosj.github.io/valentine-day/assets/img/flower0.png",
    "https://armandosj.github.io/valentine-day/assets/img/flower1.png",
    "https://armandosj.github.io/valentine-day/assets/img/flower2.png",
    "https://armandosj.github.io/valentine-day/assets/img/flower3.png",
    "https://armandosj.github.io/valentine-day/assets/img/flower4.png",
    "https://armandosj.github.io/valentine-day/assets/img/flower5.png"
];

const flowersContainer = document.getElementById("flowers");
const flowesNumber = 20;

for (let i = 0; i < flowesNumber; i++) {
    let flower = document.createElement("img");
    flower.classList.add("flower");
    flower.src = flowerImages[0];

    let t = (Math.PI * 2 * i) / flowesNumber;
    let x = 140 * Math.pow(Math.sin(t), 3);
    let y = -90 * Math.cos(t) + 40 * Math.cos(2 * t) + 20 * Math.cos(3 * t) + 10 * Math.cos(4 * t);

    flower.style.left = `${50 + x}%`;
    flower.style.top = `${50 + y}%`;

    flowersContainer.appendChild(flower);
}

function createFlowerFalling() {
    let flower = document.createElement("img");
    flower.classList.add("flower-falling");
    flower.src = flowerImages[Math.floor(Math.random() * (flowerImages.length - 1)) + 1];

    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.top = `-10px`;

    const tamano = 30;
    flower.style.width = `${tamano}px`;
    flower.style.height = `${tamano}px`;
    flower.style.animationDuration = `${Math.random() * 3 + 4}s`;

    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 7000);
}

setInterval(createFlowerFalling, 500);