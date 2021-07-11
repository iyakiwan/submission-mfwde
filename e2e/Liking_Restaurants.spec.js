/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Like Restaurant', async ({ I }) => {
  // Page Home
  I.seeElement('.restaurant-item .restaurant-item_content h1 a');
  const getRestaurant = await I.grabTextFrom(locate('.restaurant-item .restaurant-item_content h1 a').first());
  I.click(getRestaurant);

  // Page Detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Page Favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
});

Scenario('Unlike Restaurant', async ({ I }) => {
  // Page Favorite
  I.seeElement('.restaurant-item .restaurant-item_content h1 a');
  const getRestaurant = locate('.restaurant-item .restaurant-item_content h1 a').first();
  I.click(getRestaurant);

  // Page Detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Page Favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item .restaurant-item_content h1 a').first());

  // Page Detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee('.restaurant-item');
});
