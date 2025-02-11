// Function to send form data to WhatsApp
function sendToWhatsApp(formId, type) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input, textarea");
  let message = `${type} Form Submission:\n\n`;

  for (let input of inputs) {
    let label = input.previousElementSibling.innerText;
    let value = input.value.trim();
    if (!value) {
      alert("Please fill out all the fields.");
      return;
    }
    message += `📌 *${label}* ${value}\n`; // WhatsApp message formatting
  }

  // Encode message for URL
  let encodedMessage = encodeURIComponent(message);

  // WhatsApp Number (Pakistan Format)
  let whatsappURL = `https://api.whatsapp.com/send?phone=923182898491&text=${encodedMessage}`;

  // Open WhatsApp via direct link
  window.open(whatsappURL, "_blank");
}

// Seller Form Submission
document.getElementById("sellerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  sendToWhatsApp("sellerForm", "Seller");
});

// Buyer Form Submission
document.getElementById("buyerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  sendToWhatsApp("buyerForm", "Buyer");
});