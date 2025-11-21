// Animação suave no scroll
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade");
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("show");
    });
});

// Menu mobile (implementar depois)
