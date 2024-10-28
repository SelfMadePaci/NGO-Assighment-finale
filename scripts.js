document.addEventListener('DOMContentLoaded', function() {
    const forms = ['volunteerForm', 'donationForm', 'contactForm'];
  
    forms.forEach(formId => {
      const form = document.getElementById(formId);
      if (form) {
        form.addEventListener('submit', function(event) {
          event.preventDefault();
          let valid = true;
          const inputs = form.querySelectorAll('input, textarea, select');
          
          inputs.forEach(input => {
            if (!input.value) {
              valid = false;
              input.classList.add('error');
            } else {
              input.classList.remove('error');
            }
          });
  
          if (valid) {
            alert('Form submitted successfully!');
            // Logic to send form data to server can go here (e.g., using fetch or AJAX)
            form.reset();
          } else {
            alert('Please fill in all required fields.');
          }
        });
      }
    });
  });
  