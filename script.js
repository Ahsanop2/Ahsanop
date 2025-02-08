function sendToWhatsApp() {
    var level = document.getElementById("level").value;
    var rank = document.getElementById("rank").value;
    var extra = document.getElementById("extra").value;

    if (level && rank && extra) {
        var message = "Free Fire Account Sale%0A" +
                      "Level: " + level + "%0A" +
                      "Rank: " + rank + "%0A" +
                      "Extra Info: " + extra + "%0A";

        var whatsappNumber = "923001234567"; // Apna WhatsApp number yahan dalain
        var whatsappURL = "https://wa.me923182898491/" + whatsappNumber + "?text=" + message;

        window.open(whatsappURL, "_blank");
    } else {
        alert("Please fill all fields!");
    }
}
