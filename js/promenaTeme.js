function temaDugme() {
    document.body.classList.toggle("tamna-tema");
    if(document.body.classList.contains("tamna-tema")) {
        localStorage.setItem("tema", "tamna-tema");
    } else {
        localStorage.removeItem("tema");
    }
}

window.addEventListener("load", function() {
    var tema = localStorage.getItem("tema");
    if (tema === "tamna-tema") {
        document.body.classList.add("tamna-tema");
    }
});