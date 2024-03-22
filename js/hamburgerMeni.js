document.addEventListener("DOMContentLoaded", function() {
    const meniTrigeri = document.querySelectorAll(".meni-triger");

    meniTrigeri.forEach(triger => {
        const meniSadrzaj = triger.nextElementSibling;

        triger.addEventListener("mouseenter", () => {
            meniSadrzaj.style.display = "flex";
        });

        meniSadrzaj.addEventListener("mouseleave", () => {
            meniSadrzaj.style.display = "none";
        });
    });
});