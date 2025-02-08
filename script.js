// JavaScript for handling form submission and sending details to WhatsApp
document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    let level = document.getElementById('sell-level').value;
    let evos = document.getElementById('sell-evos').value;
    let likes = document.getElementById('sell-likes').value;
    let diamonds = document.getElementById('sell-diamonds').value;
    let price = document.getElementById('sell-price').value;
    let sellerNumber = document.getElementById('sell-whatsapp').value;

    // Prepare message for WhatsApp
    let message = `🔥 Free Fire ID for Sale!\n📌 Level: ${level}\n🔹 Evos: ${evos}\n❤️ Likes: ${likes}\n💎 Diamonds: ${diamonds}\n💰 Price: $${price}\n📲 Contact: ${sellerNumber}`;

    // Encode the message to handle spaces and special characters
    let encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the encoded message
    window.open(`https://wa.me/923182898491?text=${encodedMessage}`, '_blank');
});