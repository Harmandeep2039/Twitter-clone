import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTd9KlhKVAyjkQJb5Nwc-2LmhmeWRJVwk",
    authDomain: "twitter-clone-20c3c.firebaseapp.com",
    projectId: "twitter-clone-20c3c",
    storageBucket: "twitter-clone-20c3c.appspot.com",
    messagingSenderId: "395216946918",
    appId: "1:395216946918:web:e3fb786a99b5a1e9f81d27",
    measurementId: "G-3336J0D2P8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;