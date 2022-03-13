import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCCahZRoP308LO8TN25pDQrxIxx39s0UHc",
  authDomain: "patientreact-34578.firebaseapp.com",
  projectId: "patientreact-34578",
  storageBucket: "patientreact-34578.appspot.com",
  messagingSenderId: "981894916787",
  appId: "1:981894916787:web:6732c0b8c7d22c93025ec6"
};
const firebaseApp = initializeApp(firebaseConfig);

export default getFirestore();
