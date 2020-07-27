import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpg-V7ZExNQtBkstO4s9a2QTEbmL-l1o4",
  authDomain: "challenge-tech.firebaseapp.com",
  databaseURL: "https://challenge-tech.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base