// Basic JavaScript for Form Validation

// Function to validate form fields for a given form ID
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input, textarea');
  
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert('Please fill out all the fields in the form.');
      return false;
    }
  }
  return true;
}

// Validate Seller Form on submission
document.getElementById('sellerForm').addEventListener('submit', function(e) {
  if (!validateForm('sellerForm')) {
    e.preventDefault(); // Prevent form submission if validation fails
  }
});

// Validate Buyer Form on submission
document.getElementById('buyerForm').addEventListener('submit', function(e) {
  if (!validateForm('buyerForm')) {
    e.preventDefault(); // Prevent form submission if validation fails
  }
});

// Additional JavaScript functionality can be added here if needed.