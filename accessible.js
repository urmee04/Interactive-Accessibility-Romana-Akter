document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('userForm');
  const formFeedback = document.getElementById('formFeedback');
  
  // Add focus styles for keyboard navigation
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableContent = document.querySelectorAll(focusableElements);
  
  focusableContent.forEach(element => {
    element.addEventListener('focus', function() {
      this.style.outline = '2px solid #0056b3';
    });
    
    element.addEventListener('blur', function() {
      this.style.outline = '';
    });
  });
  
  // Form validation
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simple validation
      const username = document.getElementById('username');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      
      let isValid = true;
      
      // Clear previous feedback
      formFeedback.textContent = '';
      formFeedback.className = 'visually-hidden';
      
      // Validate username
      if (username.value.length < 4) {
        isValid = false;
        username.setAttribute('aria-invalid', 'true');
        username.focus();
        formFeedback.textContent = 'Username must be at least 4 characters long.';
        formFeedback.className = '';
      } else {
        username.setAttribute('aria-invalid', 'false');
      }
      
      // Validate email
      if (!email.value.includes('@')) {
        isValid = false;
        email.setAttribute('aria-invalid', 'true');
        if (isValid) { // Only focus if first error
          email.focus();
        }
        formFeedback.textContent = formFeedback.textContent + ' Please enter a valid email address.';
        formFeedback.className = '';
      } else {
        email.setAttribute('aria-invalid', 'false');
      }
      
      // Validate password
      if (password.value.length < 8) {
        isValid = false;
        password.setAttribute('aria-invalid', 'true');
        if (isValid) { // Only focus if first error
          password.focus();
        }
        formFeedback.textContent = formFeedback.textContent + ' Password must be at least 8 characters long.';
        formFeedback.className = '';
      } else {
        password.setAttribute('aria-invalid', 'false');
      }
      
      // If form is valid, show success message
      if (isValid) {
        formFeedback.textContent = 'Form submitted successfully!';
        formFeedback.className = '';
        
        // In a real application, you would submit the form here
        // form.submit();
      }
    });
  }
  
  // Add aria-live region for dynamic content
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.className = 'visually-hidden';
  document.body.appendChild(liveRegion);
  
  // Example of updating ARIA live region
  setTimeout(function() {
    liveRegion.textContent = 'Page has finished loading.';
  }, 1000);
});