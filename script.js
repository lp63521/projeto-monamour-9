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

// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ANIMAÇÃO AO ROLAR
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade");
    const trigger = window.innerHeight * 0.8;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("show");
    });
});
