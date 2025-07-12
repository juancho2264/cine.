const messages = [
    "¿Están seguros?",
    "¿De verdad seguros??",
    "Porfa, piénsenlo bien...",
    "¡Pero es de Formula 1!",
    "¡Sale Brad Pitt!",
    "Si dicen que no, me voy a poner muy triste...",
    "Me voy a poner muy triste...",
    "Me voy a poner muy muy muy triste...",
    "Ok, está bien, no insisto más...",
    "¡Mentira! ¡Digan que sí, por favor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Cambia el texto del botón "No" con cada clic
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Agranda el botón "Sí" cada vez que se presiona "No"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    // Redirige a la página de "sí"
    window.location.href = "yes_page.html";
}
