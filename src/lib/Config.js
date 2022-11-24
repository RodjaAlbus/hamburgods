import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB827Unvoc1ATwtZO9uBoFoIGdRS_TYXR8",
    authDomain: "hambur-gods.firebaseapp.com",
    projectId: "hambur-gods",
    storageBucket: "hambur-gods.appspot.com",
    messagingSenderId: "445160760002",
    appId: "1:445160760002:web:0c57ffa39811d4bd0d915b",
    measurementId: "G-38WY8T2FXH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);