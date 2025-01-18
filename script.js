// Simple form validation for login and signup
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#loginForm');
    const signupForm = document.querySelector('form');

    // Login form validation
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            if (username.trim() === '' || password.trim() === '') {
                e.preventDefault();
                alert('Please fill in both fields!');
            }
        });
    }

    // Signup form validation
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            const username = document.querySelector('#username').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
                e.preventDefault();
                alert('Please fill in all fields!');
            }
        });
    }
});
