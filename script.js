function sendToWhatsApp() {
    var level = document.getElementById("level").value;
    var rank = document.getElementById("rank").value;
    var extra = document.getElementById("extra").value;

    if (level && rank && extra) {
        var message = "Free Fire Account Sale%0A" +
            message = "Full Tersted Free Fire Account Saler Ahsan op%0A" +
                      "LVL: " + level + "%0A" +
                      "TOTEL EVOS: " + rank + "%0A" +
                      "KUCH OR INFO: " + extra + "%0A";
 
        var whatsappNumber = "923182898491"; // Apna WhatsApp number likhein
        var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + message;

        window.open(whatsappURL, "_blank");
    } else {
        alert("Please fill all fields!");
    }
}
