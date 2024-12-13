document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const passwordError = document.getElementById("password-error");
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
      passwordError.textContent = "Passwords do not match";
      confirmPasswordInput.setCustomValidity("Passwords do not match");
      event.preventDefault();
    } else {
      passwordError.textContent = "";
      confirmPasswordInput.setCustomValidity("");
    }
  });

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const body = document.body;

  let isDarkMode = localStorage.getItem("darkMode") === "true";

  updateTheme();

  themeToggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("darkMode", isDarkMode);
    updateTheme();
  });

  function updateTheme() {
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }

  // Example focus and invalid handling
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      input.classList.remove("focused");
    });
    input.addEventListener("invalid", () => {
      input.classList.add("invalid");
    });

    input.addEventListener("input", () => {
      input.classList.remove("invalid");
    });
  });
});
