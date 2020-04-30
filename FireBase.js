import * as firebase from 'firebase';
import firestore from 'firebase/firebase-firestore'
import {firebaseConfig} from './config';


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app();
}

export default firebase;