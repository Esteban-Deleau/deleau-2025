document.addEventListener("DOMContentLoaded", function () {


    document.querySelectorAll(".contact-link").forEach(link => {
        let image = link.querySelector(".contact-preview");

        link.addEventListener("mousemove", (event) => {
            let posX = event.pageX - link.offsetLeft;
            let posY = event.pageY - link.offsetTop;

            image.style.scale = "1";
            image.style.top = posY + "px";
            image.style.left = posX + "px";
            image.style.animation = "fadeIn 0.5s forwards";
        });

        link.addEventListener("mouseleave", () => {
            image.style.animation = "fadeOut 0.5s forwards";
        });
    });
});