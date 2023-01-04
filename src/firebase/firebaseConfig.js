import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage';
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyCKDfSdj1oCPvsiZiKhxlyIqQQpsICNfRg",
    authDomain: "test004-a9c89.firebaseapp.com",
    projectId: "test004-a9c89",
    storageBucket: "test004-a9c89.appspot.com",
    messagingSenderId: "67958118348",
    appId: "1:67958118348:web:10b622ba0d6adb02336f69",
    measurementId: "G-MF6EHGQZ1P"
});

firebase.auth().languageCode = 'ko'

const auth = firebase.auth()
const firestore = firebase.firestore()
const functions = firebase.app().functions('asia-northeast3')

export {auth, firestore, functions, firebase}