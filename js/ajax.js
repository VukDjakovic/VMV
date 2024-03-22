function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("info").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "o_nama.txt", true);
    xhttp.send();
}