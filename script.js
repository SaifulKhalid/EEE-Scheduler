import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const today = new Date().toLocaleString("en-us", { weekday: "long" });
const scheduleDiv = document.getElementById("schedule");

const scheduleRef = firebase.database().ref(`schedule/${today}`);
scheduleRef.on("value", (snapshot) => {
  if (snapshot.exists()) {
    const schedule = snapshot.val();
    scheduleDiv.innerHTML = `
      <h2>${today}</h2>
      <ul>${schedule.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
  } else {
    scheduleDiv.innerHTML = "<p>No classes today! Enjoy your day off. 😊</p>";
  }
});
