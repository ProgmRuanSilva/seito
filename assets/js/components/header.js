//TODO: Change the href later
class SHeader extends HTMLElement {
  connectedCallback() {
    this.classList.add("header");
    const storedUsername = localStorage.getItem("userLogin") || "Guest";
    const storedUserEmail =
      localStorage.getItem("userEmail") || "privatexx@mail.com"; // Get user email from local storage or default
    this.innerHTML = `
        <div class="header-left">
          <div class="logo">Seito</div>
          <nav class="nav">
            <a href="../index.html" class="nav-btn">🎓 Dashboard</a>
            <button class="nav-btn">👥</button>
            <button class="nav-btn">❓</button>
            <button class="nav-btn">✉️</button>
            <button class="nav-btn">📅</button>
          </nav>
        </div>
        <div class="user-info">
          <div class="user-details">
            <div class="user-name">${storedUsername}</div>
            <div class="user-email">${storedUserEmail}</div>
          </div>
          <div class="user-info">
            <div class="user-details">
              <div class="user-name">${storedUsername}</div>
              <div class="user-email">${storedUserEmail}</div>
            </div>
          <div class="user-avatar"></div>
        </div>
    `;
  }
}
customElements.define("t-header", SHeader);
