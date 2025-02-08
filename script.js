function sendSellerInfo() {
    let phone = "923182898491";  // WhatsApp Number

    let level = document.getElementById("level").value;
    let evos = document.getElementById("evos").value;
    let likes = document.getElementById("likes").value;
    let diamonds = document.getElementById("diamonds").value;
    let price = document.getElementById("price").value;

    if (level && evos && likes && diamonds && price) {
        let message = `*Free Fire ID for Sale!*\n\n🔥 Level: ${level}\n⚡ Evos: ${evos}\n❤️ Likes: ${likes}\n💎 Diamonds: ${diamonds}\n💰 Price: ${price}\n\nContact Now!`;
        let url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    } else {
        alert("Please fill all fields!");
    }
}

function sendBuyerInfo() {
    let phone = "923182898491";  // WhatsApp Number

    let idType = document.getElementById("id-type").value;
    let priceRange = document.getElementById("price-range").value;

    if (idType && priceRange) {
        let message = `*I want to buy a Free Fire ID!*\n\n🎯 ID Type: ${idType}\n💵 Price Range: ${priceRange}\n\nPlease contact me ASAP!`;
        let url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    } else {
        alert("Please fill all fields!");
    }
}