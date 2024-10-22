// login.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // For demonstration, log the email and password to the console
        console.log("Email:", email);
        console.log("Password:", password);

        // Here you can add your authentication logic (e.g., API call)

        // Example of handling success or error response
        // Replace the following line with your actual authentication logic
        alert("Login successful!"); // Remove or replace this line in production
    });
});
