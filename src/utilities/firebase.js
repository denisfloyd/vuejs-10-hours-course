import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC606zwVrZoGs0ZebOI7FmAqba64CPb1Ug",
  authDomain: "vue-full-course-e7877.firebaseapp.com",
  projectId: "vue-full-course-e7877",
  storageBucket: "vue-full-course-e7877.appspot.com",
  messagingSenderId: "180208214677",
  appId: "1:180208214677:web:4241aed4576b66e467319c"
}

firebase.initializeApp(firebaseConfig);

export default firebase;