function sendToWhatsApp() {
    var level = document.getElementById("level").value;
    var rank = document.getElementById("rank").value;
    var extra = document.getElementById("extra").value;

    if (level && rank && extra) {
        var message = "Free Fire Account Sale%0A" +
                      "Level: " + level + "%0A" +
                      "Rank: " + rank + "%0A" +
                      "Extra Info: " + extra + "%0A";

        var whatsappNumber = "923182898491"; // Apna WhatsApp number yahan dalain
        var whatsappURL = "https://wa.me/923182898491?text=Hello ff id sale krni ha" + whatsappNumber + "?text=" + message;

        window.open(whatsappURL, "_blank");
    } else {
        alert("Please fill all fields!");
    }
}
