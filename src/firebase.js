// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD5QBpSIDuWuBMTV5Xn6TzNqp_pLF8aroc',
  authDomain: 'blogs-70020.firebaseapp.com',
  projectId: 'blogs-70020',
  storageBucket: 'blogs-70020.appspot.com',
  messagingSenderId: '645294946251',
  appId: '1:645294946251:web:da98963275406537ca684e',
  measurementId: 'G-RQKH2W8LDP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
