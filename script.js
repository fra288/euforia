document.addEventListener('DOMContentLoaded', () => {
    // Mensaje de bienvenida en consola para programadores
    console.log("%c EUFORIA TEAM'S - Sistema Inicializado ", "background: #00e5ff; color: #000; font-weight: bold;");

    // Efecto de scroll suave
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});
