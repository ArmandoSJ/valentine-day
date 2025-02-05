const mensaje = document.getElementById("mensaje");

mensaje.addEventListener("mouseover", () => {
    mensaje.style.color = "#333";
});

mensaje.addEventListener("mouseleave", () => {
    mensaje.style.color = "transparent";
});

const imagenesFlores = [
    "./assets/img/flor1.png",
    "./assets/img/flor2.png",
    "./assets/img/flor3.png",
    "./assets/img/flor4.png",
    "./assets/img/flor5.png"
];

const contenedorFlores = document.getElementById("flores");
const numFlores = 20;

let floresGeneradas = [];  // Para almacenar las flores

// Generar las flores
for (let i = 0; i < numFlores; i++) {
    let flor = document.createElement("img");
    flor.classList.add("flor");
    flor.src = imagenesFlores[Math.floor(Math.random() * imagenesFlores.length)];

    // Ecuación del corazón (posición de las flores)
    let t = (Math.PI * 2 * i) / numFlores;
    let x = 140 * Math.pow(Math.sin(t), 3);
    let y = -90 * Math.cos(t) + 40 * Math.cos(2 * t) + 20 * Math.cos(3 * t) + 10 * Math.cos(4 * t);

    flor.style.left = `${50 + x}%`;
    flor.style.top = `${50 + y}%`;

    contenedorFlores.appendChild(flor);
    floresGeneradas.push(flor);  // Guardar referencia de las flores
}

let currentStyle = 0; // Controlar qué estilo de flores mostrar

// Función para cambiar el estilo de las flores
function cambiarEstiloFlores() {
    currentStyle = (currentStyle + 1) % imagenesFlores.length; // Alterna entre los dos estilos
    floresGeneradas.forEach(flor => {
        flor.src = imagenesFlores[currentStyle];
    });
}

// Cambiar el estilo de las flores cada 5 segundos
setInterval(cambiarEstiloFlores, 5000);