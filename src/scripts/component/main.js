import RestaurantData from "../../data/data-restaurant";

function main() {
    document.addEventListener("DOMContentLoaded", () => {

        const menu = document.querySelector('#menu');
        const hero = document.querySelector('.hero');
        const main = document.querySelector('main');
        const drawer = document.querySelector('#drawer');

        menu.addEventListener('click', function (event) {
            drawer.classList.toggle('open');
            event.stopPropagation();
        });

        hero.addEventListener('click', function () {
            drawer.classList.remove('open');
        });

        main.addEventListener('click', function () {
            drawer.classList.remove('open');
        });

        const listRestaurantElement = document.querySelector("#restaurant-list");
        listRestaurantElement.innerHTML = "";

        RestaurantData.forEach(data => {
            listRestaurantElement.innerHTML += `
                <article class="restaurant-item">
                    <img tabindex="0" class="restaurant-item_thumbnail" src="${data.pictureId}"
                        alt="${data.name}">
                    <div class="restaurant-item_content">
                        <h1 tabindex="0" class="restaurant-item_title">${data.name}</h1>
                        <p tabindex="0" class="restaurant-item_other"><i class="fa fa-star" aria-hidden="true"></i> ${data.rating}</p>
                        <p tabindex="0" class="restaurant-item_other"><i class="fa fa-map-marker" aria-hidden="true"></i> ${data.city}</p>
                        <p tabindex="0" class="restaurant-item_description">${data.description}</p>
                    </div>
                </article>
                `;
        });
    });
}

export default main;