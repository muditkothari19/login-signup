
    // JavaScript code
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementsByClassName('modal-close')[0];
    const signupSubmit = document.getElementById('signup-submit');
    const errorMessage = document.getElementById('error-message');

    loginBtn.addEventListener('click', function() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if (username === '' || password === '') {
        errorMessage.textContent = 'Username or password is empty';
      } else {
        // Perform login logic here
        // You can redirect to a different page or display a success message
      }
    });

    signupBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });

    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    signupSubmit.addEventListener('click', function() {
      const signupUsername = document.getElementById('signup-username').value;
      const signupEmail = document.getElementById('signup-email').value;
      const signupPassword = document.getElementById('signup-password').value;
      
      if (signupUsername === '' || signupEmail === '' || signupPassword === '') {
        errorMessage.textContent = 'Please fill in all the details';
      } else {
        // Show user-filled details in the modal
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
          <h3>Sign Up</h3>
          <p>Username: ${signupUsername}</p>
          <p>Email: ${signupEmail}</p>
          <p>Password: ${signupPassword}</p>
        `;
      }
    });