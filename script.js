<form id="buyerForm">
  <label for="buyer-name">Name:</label>
  <input type="text" id="buyer-name" name="buyer-name" required>

  <label for="buyer-range">Price Range / Offer Range:</label>
  <input type="text" id="buyer-range" name="buyer-range" required>

  <label for="buyer-level">Required Level:</label>
  <input type="number" id="buyer-level" name="buyer-level" required>

  <label for="buyer-details">Other ID Details:</label>
  <textarea id="buyer-details" name="buyer-details" rows="3" required></textarea>

  <button type="button" onclick="sendBuyerInfo()">Submit Buyer Requirements</button>
</form>