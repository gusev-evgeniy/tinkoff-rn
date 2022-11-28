import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDanajJoNvjXqyaacprleQ_4tcKzm3VsNM',
  authDomain: 'tinkoff-a09cd.firebaseapp.com',
  projectId: 'tinkoff-a09cd',
  storageBucket: 'tinkoff-a09cd.appspot.com',
  messagingSenderId: '249842556014',
  appId: '1:249842556014:web:55edd12a8d6d6bf3705a7f',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
