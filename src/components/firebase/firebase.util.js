import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCJlI_OI6j-JT2NPeoAYvuz2BKZQ84z0Ik",
  authDomain: "clothing-mania-322ae.firebaseapp.com",
  projectId: "clothing-mania-322ae",
  storageBucket: "clothing-mania-322ae.appspot.com",
  messagingSenderId: "528135715637",
  appId: "1:528135715637:web:317660dc5e650b8948ea7c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

 
