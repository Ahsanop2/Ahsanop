// Function to send WhatsApp message when buying an ID
function buyNow(number) {
    window.open(`https://wa.me923182898491/${923182898491}?text=I%20want%20to%20buy%20a%20Free%20Fire%20ID`, '_blank');
}

// Handling the Sell Form Submission
document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let level = document.getElementById('level').value;
    let evos = document.getElementById('evos').value;
    let likes = document.getElementById('likes').value;
    let diamonds = document.getElementById('diamonds').value;
    let price = document.getElementById('price').value;
    let whatsapp = document.getElementById('whatsapp').value;

    let message = `New Free Fire ID for Sale!\nLevel: ${level}\nEvos: ${evos}\nLikes: ${likes}\nDiamonds: ${diamonds}\nPrice: $${price}\nContact: ${whatsapp}`;

    // Replace YOUR_WHATSAPP_NUMBER with your actual number
    window.open(`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(message)}`, '_blank');
});