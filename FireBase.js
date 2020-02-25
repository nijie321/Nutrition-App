import * as firebase from 'firebase';
import firestore from 'firebase/firebase-firestore'
import {firebaseConfig} from './config';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app();
}

export default firebase;


// const settings = {timestampsInSnapshots: true};

// const config = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "YOUR_DB_URL",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_BUCKET",
//   messagingSenderId: "YOUR_FCM_ID"
// };
// firebase.initializeApp(config);

// firebase.firestore().settings(settings);

// export default firebase;