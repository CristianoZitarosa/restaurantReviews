/**
* Service worker registration
**/

if ('serviceWorker' in navigator) {

  navigator.serviceWorker
  .register('./service-worker.js', { scope: './' })
  .then(function (registration) {
    // success
    console.log("Service Worker is correctly registered", registration.scope);
  })
  .catch(function (error) {
    // fail
    console.log("Service Worker is not registered", error);
  })

}
