import './navbar.css'

export function navbar() {
    return /*html*/`
    <header class="navbar">
        <nav class="navbar__container">
            <div class="navbar__brand">
                <a href="#home">Sysolar</a>
            </div>
            <div class="navbar__actions">
                <button class="navbar__button" id="btn-theme">
                    <i class='bx bxs-sun'></i>
                    <i class='bx bxs-moon'></i>
                    <div class="navbar__button-toggle"><div>
                </button>
            </div>
        </nav>
    </header>
    `;
}

export function handleTheme(element) {
    element.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    })
}