class SHeader extends HTMLElement {
  connectedCallback() {
    this.classList.add("header");
    const storedUsername = localStorage.getItem("userLogin") || "guest";
    const storedUserEmail = localStorage.getItem("userEmail") || "a@b.com";
    this.innerHTML = `
        <div class="header-left">
          <div class="logo">Level UP</div>
          <button class="hamburger-menu">☰</button>
          <nav class="nav">
            <a href="../pages/dashboard.html" class="nav-btn">🎓</a>
            <a href="../pages/integrantes.html" class="nav-btn">👥</a>
            <a href="../pages/faq.html" class="nav-btn">❓</a>
            <a href="../pages/solucao.html" class="nav-btn">🧩</a>
            <a href="../pages/demonstracao.html" class="nav-btn">💡</a>
            <button class="nav-btn contact-btn">✉️</button>
          </nav>
        </div>
        <a href="../pages/onboarding.html" class="user-link">
          <div class="user-info">
            <div class="user-details">
              <div class="user-name">${storedUsername}</div>
              <div class="user-email">${storedUserEmail}</div>
            </div>
            <div class="user-avatar"></div>
          </div>
        </a>
    `;
  }
}
customElements.define("t-header", SHeader);
