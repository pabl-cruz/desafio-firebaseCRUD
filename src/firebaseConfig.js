// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBjk6v7LkrDd27DORe0LE3dv96a7rgIZ8',
  authDomain: 'vue-usuarios.firebaseapp.com',
  projectId: 'vue-usuarios',
  storageBucket: 'vue-usuarios.appspot.com',
  messagingSenderId: '538904437373',
  appId: '1:538904437373:web:bbe1fdab86688e1ca98714'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { app, db }
