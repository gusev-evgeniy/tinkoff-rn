import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTlPvkCqRIJOeLXyuzwi7BjZKzF2zzwYw',
  authDomain: 'tinkoff-bfdea.firebaseapp.com',
  projectId: 'tinkoff-bfdea',
  storageBucket: 'tinkoff-bfdea.appspot.com',
  messagingSenderId: '495916309485',
  appId: '1:495916309485:web:85d1315f6e8f4d9efea5e4',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
