/**
* Cache name
**/
let cachedVersion = 'cachedVersion-v2';

/**
* Contents to cache
**/
let cacheFiles = [
  './',
  './index.html',
  './restaurant.html',
  './swRegister.js',
  './css/styles.css',
  './css/responsive.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg'
];

/**
* Installation of the service worker
**/
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cachedVersion).then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

/**
* Activation of the service worker
**/
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== cachedVersion) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

/**
* Fetch of the service worker
**/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
