import UrlParser from '../../routes/url-parser';
import TheRestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import { createRestarurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
          <div id="restaurant-detail" class="restaurant-detail"></div>
          <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDicodingSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestarurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
