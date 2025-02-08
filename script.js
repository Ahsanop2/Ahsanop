// Sell Form Submission - Sends seller details to WhatsApp
document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let level = document.getElementById('level').value;
    let evos = document.getElementById('evos').value;
    let likes = document.getElementById('likes').value;
    let diamonds = document.getElementById('diamonds').value;
    let price = document.getElementById('price').value;
    let