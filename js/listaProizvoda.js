function prikazProizvoda() {
    const lista = document.getElementById("lista-proizvoda");

    proizvodi.forEach(proizvod => {
        const proizvodDiv = document.createElement("div");
        proizvodDiv.classList.add("proizvod");

        const proizvodSlika = document.createElement("img");
        proizvodSlika.src = proizvod.slika;
        proizvodSlika.alt = proizvod.ime;

        const proizvodIme = document.createElement("h3");
        proizvodIme.textContent = proizvod.ime;

        const proizvodCena = document.createElement("p");
        proizvodCena.textContent = proizvod.cena;

        const kupiDugme = document.createElement("button");
        kupiDugme.textContent = "Kupi";
        kupiDugme.classList.add("kupi-dugme");

        kupiDugme.addEventListener("click", function() {
            dodajUKorpu(proizvod);
        });

        proizvodDiv.appendChild(proizvodSlika);
        proizvodDiv.appendChild(proizvodIme);
        proizvodDiv.appendChild(proizvodCena);
        proizvodDiv.appendChild(kupiDugme);
        
        lista.appendChild(proizvodDiv);
    })
}

window.onload = prikazProizvoda;

function dodajUKorpu(proizvod) {
    let korpaProizvodi = JSON.parse(localStorage.getItem("korpaProizvodi")) || [];
    korpaProizvodi.push(proizvod);
    localStorage.setItem("korpaProizvodi", JSON.stringify(korpaProizvodi));
    alert("Proizvod dodat u korpu!");
}
