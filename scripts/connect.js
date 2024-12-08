function redirectToPage(event) {
    event.preventDefault(); // Prevents the form from submitting
    window.location.href = "connect.html"; // Replace with the target page URL
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  const form = event.target;

  // Submit the form data to Google Form
  fetch(form.action, {
	method: 'POST',
	body: new FormData(form),
	mode: 'no-cors' // Required for cross-origin requests
  }).then(() => {
	// Redirect to Thank You page
	window.location.href = 'connect.html';
  }).catch(() => {
	alert('Error submitting your query. Please try again.');
  });
}