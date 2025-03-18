
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDxjJ-mUtB-fZi4J3NInpeQUhR0SRl2B5M",
    authDomain: "eee-class-scheduler.firebaseapp.com",
    databaseURL: "https://eee-class-scheduler-default-rtdb.firebaseio.com",
    projectId: "eee-class-scheduler",
    storageBucket: "eee-class-scheduler.firebasestorage.app",
    messagingSenderId: "178434897950",
    appId: "1:178434897950:web:674fdf88b0fce23517960f",
    measurementId: "G-F6ZGM8FRH2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
