import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDuLKf94LIL_wtaea9bLT2WE96FaleKF3Y',
  authDomain: 'mentor-dashboard-942b2.firebaseapp.com',
  databaseURL: 'https://mentor-dashboard-942b2.firebaseio.com',
  projectId: 'mentor-dashboard-942b2',
  storageBucket: 'mentor-dashboard-942b2.appspot.com',
  messagingSenderId: '150224180241',
};
const fire = firebase.initializeApp(config);
const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

const fb = {
  login: () => fire.auth().signInWithPopup(provider),
  logout: () => fire.auth().signOut(),
};

export default fb;
