importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js');


var firebaseConfig = {
  apiKey: "AIzaSyB2jgltktu4rIlxs6de7ClxtEKOnmL9hA8",
  authDomain: "dad-code.firebaseapp.com",
  projectId: "dad-code",
  storageBucket: "dad-code.appspot.com",
  messagingSenderId: "230175800309",
  appId: "1:230175800309:web:a8ad53cb5c3285ce4fbebc"
};
firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  )
  const notificationTitle = "Background Message Title"
  const notificationOptions = {
    body: "Background Message body.",
    icon: "./android-chrome-192x192.png",
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

console.log('service worker Registered!')

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.supressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting();
  }
});