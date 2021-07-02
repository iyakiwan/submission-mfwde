import UrlParser from '../../routes/url-parser';
import TheRestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import { createRestarurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <div id="restaurant-detail" class="restaurant-detail"></div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDicodingSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestarurantDetailTemplate(restaurant);
    console.log(restaurant);
  },
};

export default Detail;
