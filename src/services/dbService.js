import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

import storageService from './storageService';

export default { update };

var firebaseConfig = {
  apiKey: "AIzaSyB2jgltktu4rIlxs6de7ClxtEKOnmL9hA8",
  authDomain: "dad-code.firebaseapp.com",
  projectId: "dad-code",
  storageBucket: "dad-code.appspot.com",
  messagingSenderId: "230175800309",
  appId: "1:230175800309:web:a8ad53cb5c3285ce4fbebc"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore();

const colName = process.env.NODE_ENV === 'production' ? 'order' : 'test';

async function update(id) {
  if (id === 'yovel') setYovelDoc();
  else await db.collection(colName).doc(id).update({ used: true, date: new Date() });
}

async function setYovelDoc() {
  const token = storageService.load('token');
  await db.collection('notifications').doc('yovel').update({ token, msg: 'A New Dinner is Requested' })
}

(async function msgSetup() {
  const messaging = firebase.messaging();
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken({ vapidKey: 'BEQE7pCH1h1pv8JWa84RZ322EioYlEQXGKeOdQBPgS6GQrx89SRqImvblAtUjXvY3K3TgEcDO5SM7_bqMfwwyNg' })
    console.log('tokehn', token)
    storageService.save('token', token);
  } catch (error) {
    console.log('no permissions', error);
  }

  messaging.onMessage(payload => {
    console.log('onMessage:', payload)
  })

})()