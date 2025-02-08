// 🚀 SELLER FORM - Send Seller Details to WhatsApp
document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let level = document.getElementById('sell-level').value;
    let evos = document.getElementById('sell-evos').value;
    let likes = document.getElementById('sell-likes').value;
    let diamonds = document.getElementById('sell-diamonds').value;
    let price = document.getElementById('sell-price').value;
    let sellerNumber = document.getElementById('sell-whatsapp').value;

    let adminWhatsApp = "+923182898491"; // 👈 Yahan Apna WhatsApp Number Daalain

    let message = `🔥 Free Fire ID for Sale!\n📌 Level: ${level}\n🔹 Evos: ${evos}\n❤️ Likes: ${likes}\n💎 Diamonds: ${diamonds}\n💰 Price: $${price}\n📲 Contact: ${sellerNumber}`;

    window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
});

// 🎯 BUYER FORM - Send Buyer Request to WhatsApp
document.getElementById('buyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let budget = document.getElementById('buy-price').value;
    let type = document.getElementById('buy-type').value;
    let buyerNumber = document.getElementById('buy-whatsapp').value;

    let adminWhatsApp = "+923182898491"; // 👈 Yahan Apna WhatsApp Number Daalain

    let message = `💰 New Free Fire ID Buyer!\n💵 Budget: $${budget}\n🎯 ID Type: ${type}\n📲 Contact: ${buyerNumber}`;

    window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
});