export function card(obj) {
    return /*html*/`
        <div class="card">
            <div class="card__image">
                <img src="./src/assets/${obj.name.toLowerCase()}.png">
            </div>
            <div class="card__content">
                <div class="card__basic-content">
                    <h2 class="card__title">${obj.name}</h2>
                    <p class="card__description">${obj.description}</p>
                </div>
                <div class="card__detail">
                    <h3 class="card__detail-title">Mass</h3>
                    <p class="card__datail-content">${obj.basicDetails[0].mass}</p>
                </div>
                <div class="card__detail">
                    <h3 class="card__detail-title">Volume</h3>
                    <p class="card__datail-content">${obj.basicDetails[0].volume}</p>
                </div>
                <div class="card__detail">
                    <h3 class="card__detail-title">Planet Order</h3>
                    <p class="card__datail-content">${obj.planetOrder}</p>
                </div>
                <div class="card__detail">
                    <h3 class="card__source">${obj.source}</h3>
                    <p class="card__link">${obj.wikiLink}</p>
                </div>
            </div>
        </div>
    `;
}