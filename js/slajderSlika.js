document.addEventListener('DOMContentLoaded', function() {
    let slajdIndeks = 0;
    console.log("Script is running!");
    prikaziSlajdove();

    function prikaziSlajdove() {
        console.log("Function called!");
        let slajdovi = document.getElementsByClassName("slajder");
        for (let i = 0; i < slajdovi.length; i++) {
            slajdovi[i].style.display = "none";
        }
        slajdIndeks++;
        if (slajdIndeks > slajdovi.length) {
            slajdIndeks = 1;
        }
        slajdovi[slajdIndeks - 1].style.display = "block";
        setTimeout(prikaziSlajdove, 2500);
    }
});