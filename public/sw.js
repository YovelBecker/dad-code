console.log('service worker Registered!')

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting();
  }
});