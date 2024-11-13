"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuTDoBawhM1fm3YeRSacO6bU3FvghgesM",
    authDomain: "smartfarm-109ab.firebaseapp.com",
    projectId: "smartfarm-109ab",
    storageBucket: "smartfarm-109ab.firebasestorage.app",
    messagingSenderId: "847800647622",
    appId: "1:847800647622:web:bd09b1affbc5ebfd053cc7",
    measurementId: "G-125014L94N"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
