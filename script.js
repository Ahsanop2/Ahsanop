// Seller Form Submission (Seller ki details WhatsApp par bhejna)
document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Form ko submit hone se rokhna

    // Seller ki form values lena
    let level = document.getElementById('sell-level').value;
    let evos = document.getElementById('sell-evos').value;
    let likes = document.getElementById('sell-likes').value;
    let diamonds = document.getElementById('sell-diamonds').value;
    let price = document.getElementById('sell-price').value;
    let sellerNumber = document.getElementById('sell-whatsapp').value;

    // WhatsApp message banana
    let message = `🔥 Free Fire ID for Sale!\n\n📌 Level: ${level}\n🔹 Evos: ${evos}\n❤️ Likes: ${likes}\n💎 Diamonds: ${diamonds}\n💰 Price: $${price}\n📲 Contact: ${sellerNumber}`;

    // Message ko encode karna taake WhatsApp link sahi ho
    let encodedMessage = encodeURIComponent(message);

    // WhatsApp link open karna
    window.open(`https://wa.me/923182898491?text=${encodedMessage}`, '_blank');
});

// Buyer Form Submission (Buyer ki details WhatsApp par bhejna)
document.getElementById('buyForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Form ko submit hone se rokhna

    // Buyer ki form values lena
    let level = document.getElementById('buy-level').value;
    let price = document.getElementById('buy-price').value;
    let idType = document.getElementById('buy-id-type').value;
    let buyerNumber = document.getElementById('buy-whatsapp').value;

    // WhatsApp message banana
    let message = `💎 Buyer Information:\n\n📌 Desired Level: ${level}\n💰 Price Range: ${price}\n🔍 ID Type: ${idType}\n📲 Contact: ${buyerNumber}`;

    // Message ko encode karna taake WhatsApp link sahi ho
    let encodedMessage = encodeURIComponent(message);

    // WhatsApp link open karna
    window.open(`https://wa.me/923182898491?text=${encodedMessage}`, '_blank');
});