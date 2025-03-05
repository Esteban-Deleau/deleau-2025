document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toogle-btn");
    const menu = document.querySelector(".menu");
    const menuItems = menu.querySelectorAll("a"); // Corrigé pour cibler les liens
    const hamburger = document.querySelector("#hamburger");

    let isMenuOpen = false;

    toggleBtn.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;

        // Animation pour le hamburger
        hamburger.classList.toggle("active");

        if (isMenuOpen) {
            // Ouvre le menu avec une animation
            gsap.to(menu, {
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
            });
        } else {
            // Ferme le menu 
            gsap.to(menu, {
                scale: 0,
                duration: 0.5,
                ease: "power3.in",
            });
        }
    });

    // Ajoute un événement "click" sur chaque lien du menu
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Ferme le menu lorsque l'utilisateur clique sur un lien
            isMenuOpen = false;

            // Animation pour le hamburger (retrait de la classe active)
            hamburger.classList.remove("active");

            // Ferme le menu avec une animation
            gsap.to(menu, {
                scale: 0,
                duration: 0.5,
                ease: "power3.in",
            });
        });
    });
});
