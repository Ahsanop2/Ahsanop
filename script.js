// Seller Form Submission
document.getElementById('sellerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('seller-name').value;
    let level = document.getElementById('seller-level').value;
    let evos = document.getElementById('seller-evos').value;
    let likes = document.getElementById('seller-likes').value;
    let info = document.getElementById('seller-info').value;

    let message = `*New Seller Submission*%0A%0A` +
                  `*Name:* ${name}%0A` +
                  `*Level:* ${level}%0A` +
                  `*Evos:* ${evos}%0A` +
                  `*Likes:* ${likes}%0A` +
                  `*Other Info:* ${info}%0A`;

    let whatsappURL = `https://wa.me/03182898491?text=${message}`;
    window.open(whatsappURL, '_blank');
});

// Buyer Form Submission
document.getElementById('buyerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let range = document.getElementById('buyer-range').value;
    let level = document.getElementById('buyer-level').value;
    let info = document.getElementById('buyer-info').value;

    let message = `*New Buyer Request*%0A%0A` +
                  `*Price Range:* ${range}%0A` +
                  `*Required Level:* ${level}%0A` +
                  `*Other Requirements:* ${info}%0A`;

    let whatsappURL = `https://wa.me/03182898491?text=${message}`;
    window.open(whatsappURL, '_blank');
});