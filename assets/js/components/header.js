class SHeader extends HTMLElement {
  connectedCallback() {
    this.classList.add("header");
    this.innerHTML = `
        <div class="header-left">
          <div class="logo">Seito</div>
          <nav class="nav">
            <button class="nav-btn">🎓 Dashboard</button>
            <button class="nav-btn">👥</button>
            <button class="nav-btn">❓</button>
            <button class="nav-btn">✉️</button>
            <button class="nav-btn">📅</button>
          </nav>
        </div>
        <div class="user-info">
          <div class="user-details">
            <div class="user-name">Ellington Thom</div>
            <div class="user-email">privatexx@mail.com</div>
          </div>
          <div class="user-avatar"></div>
        </div>
    `;
  }
}
customElements.define("s-header", SHeader);
