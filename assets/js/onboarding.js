document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const displayUsername = document.getElementById("display-username");
  const displayPassword = document.getElementById("display-password");
  const displayEmail = document.getElementById("display-email");

  // Function to save user data to local storage
  const saveUserData = (username, password, email) => {
    localStorage.setItem("userLogin", username);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userEmail", email);
  };

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const emailInput = document.getElementById("email");
      saveUserData(usernameInput.value, passwordInput.value, emailInput.value);
      window.location.href = "../../index.html"; // Redirect to index.html
      loginForm.reset();
    });
  }
});

