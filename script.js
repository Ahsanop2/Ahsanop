// Function to send form data to WhatsApp
function sendToWhatsApp(formId, type) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input, textarea");
  let message = `${type} Form Submission:%0A`;

  for (let input of inputs) {
    let label = input.previousElementSibling.innerText;
    let value = input.value.trim();
    if (!value) {
      alert("Please fill out all the fields.");
      return;
    }
    message += `${label} ${value}%0A`;
  }

  // WhatsApp number
  let whatsappURL = `https://wa.me/923182898491?text=${message}`;
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