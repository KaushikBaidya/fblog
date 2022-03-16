import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

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
const analytics = getAnalytics(app)
