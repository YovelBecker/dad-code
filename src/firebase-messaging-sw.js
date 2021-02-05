importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');


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

