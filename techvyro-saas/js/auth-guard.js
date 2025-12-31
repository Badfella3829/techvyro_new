import { auth } from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Agar login nahi hai toh login page par bhejo
    window.location.href = "login.html";
  } else {
    console.log("User verified:", user.email);
  }
});