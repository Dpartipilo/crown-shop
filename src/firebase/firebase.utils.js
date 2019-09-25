import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC61HEH8Pk5mUXIgj9ZWxFktouPe-Gkk_4",
    authDomain: "crown-db-8c671.firebaseapp.com",
    databaseURL: "https://crown-db-8c671.firebaseio.com",
    projectId: "crown-db-8c671",
    storageBucket: "",
    messagingSenderId: "200832700673",
    appId: "1:200832700673:web:9ee0c92bf954c444020b00",
    measurementId: "G-WZB995W42B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;