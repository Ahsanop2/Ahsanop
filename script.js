// Seller Form Submission to WhatsApp
document.getElementById('sellerForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent normal form submission

  let name = document.getElementById("seller-name").value.trim();
  let level = document.getElementById("seller-level").value.trim();
  let evos = document.getElementById("seller-evos").value.trim();
  let likes = document.getElementById("seller-likes").value.trim();
  let info = document.getElementById("seller-info").value.trim();

  let message = `Seller Form Submission:%0AName: ${name}%0ALevel: ${level}%0AEvos: ${evos}%0ALikes: ${likes}%0AOther Info: ${info}`;
  let whatsappURL = `https://wa.me/03182898491?text=${message}`;

  window.open(whatsappURL, "_blank");
});

// Buyer Form Submission to WhatsApp
document.getElementById('buyerForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent normal form submission

  let name = document.getElementById("buyer-name").value.trim();
  let range = document.getElementById("buyer-range").value.trim();
  let level = document.getElementById("buyer-level").value.trim();
  let details = document.getElementById("buyer-details").value.trim();

  let message = `Buyer Form Submission:%0AName: ${name}%0APrice Range: ${range}%0ARequired Level: ${level}%0AOther Details: ${details}`;
  let whatsappURL = `https://wa.me/03182898491?text=${message}`;

  window.open(whatsappURL, "_blank");
});