import './home.css'

export default function home() {
    return /*html*/`
        <div class="home">
            <figure class="home__image">
                <img src="src/assets/asteroid.png"/>
            </figure>

            <div class="home__content">
                <h1 class="home__title">Know your surroundings</h1>
                <p class="home__description">Learn about our solar system in a creative way</p>
                <a class="home__button" href="#content">Get started</a>
                <p class="home__author">Created by <a href="https://github.com/alamguardin">Alam Guardin</a></p>
            </div>
        </div>
    `;
}