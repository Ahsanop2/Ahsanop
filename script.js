// Seller Form Example
document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let level = document.getElementById('sell-level').value;
    let evos = document.getElementById('sell-evos').value;
    let likes = document.getElementById('sell-likes').value;
    let diamonds = document.getElementById('sell-diamonds').value;
    let price = document.getElementById('sell-price').value;
    let sellerNumber = document.getElementById('sell-whatsapp').value;

    // Custom message for WhatsApp
    let message = `🔥 Free Fire ID for Sale!\n📌 Level: ${level}\n🔹 Evos: ${evos}\n❤️ Likes: ${likes}\n💎 Diamonds: ${diamonds}\n💰 Price: $${price}\n📲 Contact: ${sellerNumber}`;

    // Encoding the message to handle spaces and special characters
    let encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the encoded message
    window.open(`https://wa.me/923182898491?text=${encodedMessage}`, '_blank');
});