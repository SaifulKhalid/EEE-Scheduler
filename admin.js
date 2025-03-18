import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
 
    apiKey: "AIzaSyDxjJ-mUtB-fZi4J3NInpeQUhR0SRl2B5M",
    authDomain: "eee-class-scheduler.firebaseapp.com",
    databaseURL: "https://eee-class-scheduler-default-rtdb.firebaseio.com",
    projectId: "eee-class-scheduler",
    storageBucket: "eee-class-scheduler.firebasestorage.app",
    messagingSenderId: "178434897950",
    appId: "1:178434897950:web:674fdf88b0fce23517960f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Admin form functionality
document.getElementById("admin-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const day = document.getElementById("day").value;
  const newSchedule = document.getElementById("schedule").value.split(",").map(item => item.trim());

  const scheduleRef = ref(database, `schedule/${day}`);
  set(scheduleRef, newSchedule)
    .then(() => {
      document.getElementById("status").textContent = `Schedule for ${day} updated successfully!`;
      document.getElementById("status").style.color = "green";
    })
    .catch((error) => {
      document.getElementById("status").textContent = `Error: ${error.message}`;
      document.getElementById("status").style.color = "red";
    });
});