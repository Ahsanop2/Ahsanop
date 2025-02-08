function sendToWhatsApp() {
    var level = document.getElementById("level").value;
    var rank = document.getElementById("rank").value;
    var extra = document.getElementById("extra").value;
    var image = document.getElementById("image").value;

    if (level && rank && extra && image) {
        var message = "Free Fire Account Sale%0A" +
                      "Level: " + level + "%0A" +
                      "Evos: " + rank + "%0A" +
                      "Extra Info: " + extra + "%0A" +
                      "Image Link: " + image + "%0A";

        var whatsappNumber = "923182898491"; // Apna WhatsApp number likhein
        var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + message;

        window.open(whatsappURL, "_blank");
    } else {
        alert("Please fill all fields!");
    }
}
