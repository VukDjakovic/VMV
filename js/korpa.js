document.addEventListener("DOMContentLoaded", function() {
    function prikazKorpe() {
        const korpa = document.getElementById("proizvodi-u-korpi");
        korpa.innerHTML = "";
    
        const korpaProizvodi = JSON.parse(localStorage.getItem("korpaProizvodi")) || [];
    
        korpaProizvodi.forEach(item => {
            const korpaProizvodDiv = document.createElement("div");
            korpaProizvodDiv.classList.add("proizvodi-u-korpi");
    
            const proizvodIme = document.createElement("span");
            proizvodIme.classList.add("ime");
            proizvodIme.textContent = item.ime;
    
            const proizvodCena = document.createElement("span");
            proizvodCena.textContent = item.cena;
    
            korpaProizvodDiv.appendChild(proizvodIme);
            korpaProizvodDiv.appendChild(proizvodCena);
    
            korpa.appendChild(korpaProizvodDiv);
        })
    }
    
    function brisanjeKorpe() {
        localStorage.removeItem("korpaProizvodi");
        prikazKorpe();
    }

    function forma(event) {
        
        const podaci = {
            ime: document.getElementById("ime").value,
            prezime: document.getElementById("prezime").value,
            grad: document.getElementById("grad").value,
            adresa: document.getElementById("adresa").value,
            telefon: document.getElementById("telefon").value,
            email: document.getElementById("email").value
        };
        
        if (podaci.ime === "" || podaci.prezime === "" || podaci.grad === "" || podaci.adresa === "" || podaci.telefon === "" || podaci.email === "") {
            alert("Sva polja moraju biti popunjena!");
            return;
        }
        
        console.log("Form data:", podaci);
        alert("Porudžbina je poslata!");
        
        event.target.reset();
    }
    
    prikazKorpe();
    document.getElementById("brisanje-korpe").addEventListener("click", brisanjeKorpe);
    document.getElementById("forma").addEventListener("submit", forma);
});

