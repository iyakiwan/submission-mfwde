import TheRestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const searchRestorant = async (keySearch = '') => {
  let restaurant = null;
  if (keySearch !== '') {
    restaurant = await TheRestaurantDicodingSource.searchRestaurant(keySearch);
  } else {
    restaurant = await TheRestaurantDicodingSource.listRestaurant();
  }

  const listRestaurantElement = document.querySelector('#restaurant-list');
  listRestaurantElement.innerHTML = '';

  restaurant.forEach((data) => {
    listRestaurantElement.innerHTML += createRestaurantItemTemplate(data);
  });
};

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="list">
                <h1 tabindex="0" class="list_title" id="restaurant-title">List Restaurant</h1>
                <div class="search-container text-center">
                  <input aria-label="input search" type="text" id="search-item" placeholder="Search.." name="search">
                  <button type="submit" id="btn-search" aria-label="button search"><i class="fa fa-search"></i></button>
                </div>
                <div class="restaurant" id="restaurant-list">
                </div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const inputSearch = document.querySelector('#search-item');
    const buttonSearch = document.querySelector('#btn-search');

    buttonSearch.addEventListener('click', () => {
      const searchKey = inputSearch.value;
      if (searchKey !== '') {
        searchRestorant(searchKey);
      }
    });

    inputSearch.addEventListener('change', () => {
      const searchKey = inputSearch.value;
      if (searchKey === '') {
        searchRestorant('');
      }
    });

    searchRestorant('');
  },
};

export default Home;
