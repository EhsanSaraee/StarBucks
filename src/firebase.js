import firebase from 'firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyBqg03pWiJiWecaRoFRI6X5khRGPGjzBJI',
   authDomain: 'star-bucks.firebaseapp.com',
   projectId: 'star-bucks',
   storageBucket: 'star-bucks.appspot.com',
   messagingSenderId: '1001465277446',
   appId: '1:1001465277446:web:58bddd9e4cfd734647a787',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
