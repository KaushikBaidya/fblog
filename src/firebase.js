import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD5QBpSIDuWuBMTV5Xn6TzNqp_pLF8aroc',
  authDomain: 'blogs-70020.firebaseapp.com',
  projectId: 'blogs-70020',
  storageBucket: 'blogs-70020.appspot.com',
  messagingSenderId: '645294946251',
  appId: '1:645294946251:web:da98963275406537ca684e',
  measurementId: 'G-RQKH2W8LDP',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
