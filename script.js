document.addEventListener("DOMContentLoaded", function() {
  const transactionTypeRadios = document.querySelectorAll('input[name="transactionType"]');
  const saleOptions = document.getElementById("saleOptions");
  const buyOptions = document.getElementById("buyOptions");
  
  transactionTypeRadios.forEach(radio => {
    radio.addEventListener("change", function() {
      if (this.value === "sale") {
        saleOptions.style.display = "block";
        buyOptions.style.display = "none";
      } else {
        saleOptions.style.display = "none";
        buyOptions.style.display = "block";
      }
    });
  });

  document.getElementById("freeFireForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const transactionType = document.querySelector('input[name="transactionType"]:checked').value;
    const userWhatsapp = document.getElementById("userWhatsapp").value;
    
    let message = `Free Fire ID ${transactionType.toUpperCase()} Request\n`;

    if (transactionType === "sale") {
      message += `Level: ${document.getElementById("saleLevel").value}\n`;
      message += `Evos: ${document.getElementById("saleEvos").value}\n`;
      message += `Likes: ${document.getElementById("saleLikes").value}\n`;
      message += `Info: ${document.getElementById("saleInfo").value}\n`;
    } else {
      message += `Price Range: ${document.getElementById("buyRange").value}\n`;
      message += `Required Level: ${document.getElementById("buyLevel").value}\n`;
      message += `Other Info: ${document.getElementById("buyInfo").value}\n`;
    }

    // WhatsApp Link
    const whatsappLink = `https://wa.me/923182898401?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    // SMS Integration (Requires Twilio or Firebase Setup)
    fetch("https://YOUR_SMS_API_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number: userWhatsapp, text: message })
    })
    .then(response => response.json())
    .then(data => console.log("SMS Sent:", data))
    .catch(error => console.error("SMS Error:", error));
  });
});