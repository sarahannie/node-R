function openModal() {
    document.getElementById('modal').style.display = 'block'; // Show the modal by setting its display property to "block"
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Hide the modal by setting its display property to "none"
  }
  function viewProduct(productId) {
    // Show the modal
    openModal();
    // Fetch and display the product view page content inside the modal
    fetch(`/service/${productId}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('modal').innerHTML = data;
      })
      .catch(error => console.error('Error:', error));
  }