// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Animate Skills When Visible
window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const position = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(position < screenPosition - 100) {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }
});
