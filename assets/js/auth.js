document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("userLogin");
  if (!user) {
    window.location.href = "../pages/onboarding.html";
  }
});
