import firebase from 'firebase/app';

  const DB_CONFIG = {
    apiKey: "",
    authDomain: "thetracedb.firebaseapp.com",
    databaseURL: "https://thetracedb.firebaseio.com",
    projectId: "thetracedb",
    storageBucket: "thetracedb.appspot.com",
    messagingSenderId: "621799166415"
  };

  export default !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
