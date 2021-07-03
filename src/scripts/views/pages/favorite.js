import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
          <div class="list">
            <h1 tabindex="0" class="list_title" id="restaurant-title">Favorite Restaurant</h1>
            <div class="restaurant" id="restaurant-list">
          </div>
        </section>
            `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurant.forEach((movie) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default Favorite;
