document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    // Name validation: at least 2 characters, letters, and spaces only
    if (!/^[A-Za-z\s]{2,}$/.test(name)) {
        alert('Please enter a valid name with at least 2 characters.');
        return;
    }

    // Phone validation: 10 digits only
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    var form = e.target;
    var formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show the thank you modal or success message
            document.getElementById('thankYouModal').style.display = 'block';
            
            // Reset the form
            form.reset();
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    }).catch(error => {
        alert('Oops! There was a problem sending your message.');
    });
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('thankYouModal').style.display = 'none';
});
