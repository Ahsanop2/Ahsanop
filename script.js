// script.js

// Dropdown select hone par sale ya buy ke fields show/hide karne ke liye
document.getElementById('option').addEventListener('change', function() {
  var saleFields = document.getElementById('saleFields');
  var buyFields = document.getElementById('buyFields');
  if (this.value === 'sale') {
    saleFields.style.display = 'block';
    buyFields.style.display = 'none';
  } else if (this.value === 'buy') {
    saleFields.style.display = 'none';
    buyFields.style.display = 'block';
  } else {
    saleFields.style.display = 'none';
    buyFields.style.display = 'none';
  }
});

// Form submit hone par WhatsApp redirect
document.getElementById('idForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var option = document.getElementById('option').value;
  var message = "Option: " + option + "\n";
  
  if(option === 'sale'){
    var level = document.getElementById('level').value;
    var evo = document.getElementById('evo').value;
    var linked = document.getElementById('linked').value;
    var ranks = document.getElementById('ranks').value;
    var idType = document.getElementById('idType').value;
    message += "Level: " + level + "\n";
    message += "Evo: " + evo + "\n";
    message += "Linked: " + linked + "\n";
    message += "Rengs: " + ranks + "\n";
    message += "ID Type: " + idType + "\n";
  } else if(option === 'buy'){
    var buyDetails = document.getElementById('buyDetails').value;
    message += "Buy Details: " + buyDetails + "\n";
  }
  
  // WhatsApp redirect ka URL
  var phoneNumber = "923182898491";
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});