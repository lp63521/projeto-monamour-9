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

// Seleciona todos elementos com a classe .fade
const faders = document.querySelectorAll('.fade');

// Função para ativar a animação usando Intersection Observer
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

// Observa todos elementos fade
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
