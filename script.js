document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema Euforia Team's Online");
    // Efecto simple de aparición
    document.querySelector('.hero').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.hero').style.transition = "opacity 2s";
        document.querySelector('.hero').style.opacity = 1;
    }, 100);
});
