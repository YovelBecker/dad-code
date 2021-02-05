import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './style/index.scss';
import './registerServiceWorker'

import firebase from 'firebase/app';
import 'firebase/messaging';

firebase.initializeApp({ 'messagingSenderId': '230175800309' })
navigator.serviceWorker.register('firebase-messaging-sw.js', {
  scope:
    "firebase-cloud-messaging-push-scope"
})
  .then((registration) => {
    const messaging = firebase.messaging();
    messaging.getToken({ vapidKey: 'BEQE7pCH1h1pv8JWa84RZ322EioYlEQXGKeOdQBPgS6GQrx89SRqImvblAtUjXvY3K3TgEcDO5SM7_bqMfwwyNg', serviceWorkerRegistration: registration })
  })

createApp(App)
  .use(router)
  .mount('#app')
