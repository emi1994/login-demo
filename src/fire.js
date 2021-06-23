import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA5IkE2Spwq4Hvzg9wEf_AH7qHP8m2BqOo",
  authDomain: "login-demo-9d6d5.firebaseapp.com",
  projectId: "login-demo-9d6d5",
  storageBucket: "login-demo-9d6d5.appspot.com",
  messagingSenderId: "294574659084",
  appId: "1:294574659084:web:e79e7c0c733f2bd1510029"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;