// Simple login validation example
document.getElementById("loginBtn").addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    // Basic example - check if fields are not empty
    if (username === "" || password === "") {
      errorMessage.textContent = "Please enter both username and password.";
    } else {
      // If validation passes, redirect to home page (Adjust path as needed)
      // For an actual site, you'd validate credentials on the server side.
      window.location.href = "../home/home.html";
    }
  });
  