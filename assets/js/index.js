import "./components/header.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");

  if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  const contactModal = document.getElementById("contact-modal");
  const contactButton = document.querySelector(".contact-btn");
  const closeButton = document.querySelector(".close-button");

  if (contactButton && contactModal) {
    contactButton.addEventListener("click", () => {
      contactModal.classList.add("active");
    });
  }

  if (closeButton && contactModal) {
    closeButton.addEventListener("click", () => {
      contactModal.classList.remove("active");
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target == contactModal) {
      contactModal.classList.remove("active");
    }
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      let isValid = true;

      if (name.value.trim() === "") {
        showError(name, "O campo nome é obrigatório.");
        isValid = false;
      } else {
        hideError(name);
      }

      if (email.value.trim() === "") {
        showError(email, "O campo email é obrigatório.");
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, "Por favor, insira um email válido.");
        isValid = false;
      } else {
        hideError(email);
      }

      if (message.value.trim() === "") {
        showError(message, "O campo mensagem é obrigatório.");
        isValid = false;
      } else {
        hideError(message);
      }

      if (isValid) {
        alert("Formulário enviado com sucesso!");
        contactForm.reset();
        contactModal.classList.remove("active");
      }
    });
  }

  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");
    errorMessage.innerText = message;
    errorMessage.style.display = "block";
  }

  function hideError(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");
    errorMessage.style.display = "none";
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
