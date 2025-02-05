// Function to validate the form
function validateForm() {
  // Get the email input element by its id
    var emailInput = document.getElementById('email');
    // Get the trimmed value of the email input
    var emailValue = emailInput.value.trim();
    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email is empty or does not match the email format
    if (emailValue === '' || !emailRegex.test(emailValue)) {
      alert('Please enter a valid email address');
      return false; // Prevent form submission
    }

    // If the form is valid, you can submit it
    return true;
  }
