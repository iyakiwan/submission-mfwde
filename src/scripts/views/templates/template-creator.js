import CONFIG from '../../globals/config';

const listReviewTemplate = (data) => `${data.name} (${data.date}): ${data.review}`;

const createRestarurantDetailTemplate = (restaurant) => `
  <h1 class="restaurant_title">${restaurant.name}</h1>
  <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant_info">
  <h2>Information</h2>
    <h3>Address</h3>
    <p><i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.address}, ${restaurant.city}</p>
    <h3>Rating</h3>
    <p><i class="fa fa-star" aria-hidden="true"></i> ${restaurant.rating}</p>
    <h3>Kategori</h3>
    <p>
      <ul>
        ${restaurant.categories.map((data) => `<li>${data.name}</li>`).join('')}
      </ul>
    </p>
  </div>
  <div class="restaurant_overview">
    <h2>Description</h2>
    <p>${restaurant.description}</p>
    <br>
    <h2>Menu</h2>
    <br>
    <h3>Food</h3>
    <p>
      <ol>
        ${restaurant.menus.foods.map((data) => `<li>${data.name}</li>`).join('')}
      </ol>
    </p>
    <br>
    <h3>Drink</h3>
    <p>
      <ol>
        ${restaurant.menus.drinks.map((data) => `<li>${data.name}</li>`).join('')}
      </ol>
    </p>
    <br>
    <h2>Review Customer</h2>
    <br>
    <p>
      <ul>
        ${restaurant.customerReviews.map((data) => `<li>${listReviewTemplate(data)}</li>`).join('')}
      </ul>
    </p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
      <img tabindex="0" class="restaurant-item_thumbnail" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
          alt="${restaurant.name}">
      <div class="restaurant-item_content">
          <h1 class="restaurant-item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
          <p tabindex="0" class="restaurant-item_other"><i class="fa fa-star" aria-hidden="true"></i> ${restaurant.rating}</p>
          <p tabindex="0" class="restaurant-item_other"><i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.city}</p>
          <p tabindex="0" class="restaurant-item_description">${restaurant.description}</p>
      </div>
  </article>
  `;

export { createRestaurantItemTemplate, createRestarurantDetailTemplate };
